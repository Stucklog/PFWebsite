import { deflateSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const publicDirectory = new URL('../public/', import.meta.url).pathname;

const colors = {
  ink: [11, 16, 38, 255],
  gold: [241, 187, 66, 255],
  pale: [255, 229, 154, 255],
  shadow: [184, 116, 22, 255],
  transparent: [0, 0, 0, 0],
};

const letters = {
  P: ['110', '101', '110', '100', '100'],
  F: ['111', '100', '110', '100', '100'],
};

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const checksum = Buffer.alloc(4);
  checksum.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, checksum]);
}

function makePng(size) {
  const pixels = Buffer.alloc(size * size * 4);

  function fillRectangle(x, y, width, height, color) {
    const xStart = Math.max(0, Math.round(x));
    const yStart = Math.max(0, Math.round(y));
    const xEnd = Math.min(size, Math.round(x + width));
    const yEnd = Math.min(size, Math.round(y + height));
    for (let row = yStart; row < yEnd; row += 1) {
      for (let column = xStart; column < xEnd; column += 1) {
        const offset = (row * size + column) * 4;
        pixels.set(color, offset);
      }
    }
  }

  fillRectangle(0, 0, size, size, colors.transparent);

  const margin = Math.max(1, Math.round(size * 0.08));
  const shadowOffset = Math.max(1, Math.round(size * 0.09));
  const faceSize = size - (margin * 2) - shadowOffset;
  const border = Math.max(1, Math.round(size * 0.035));

  fillRectangle(margin + shadowOffset, margin + shadowOffset, faceSize, faceSize, colors.shadow);
  fillRectangle(margin, margin, faceSize, faceSize, colors.pale);
  fillRectangle(margin + border, margin + border, faceSize - border * 2, faceSize - border * 2, colors.gold);

  const cell = Math.max(1, Math.floor((faceSize - border * 2) / 10));
  const textWidth = cell * 7;
  const textHeight = cell * 5;
  const textX = Math.round(margin + (faceSize - textWidth) / 2);
  const textY = Math.round(margin + (faceSize - textHeight) / 2);

  for (const [letterIndex, letter] of ['P', 'F'].entries()) {
    const pattern = letters[letter];
    const letterX = textX + letterIndex * cell * 4;
    for (let row = 0; row < pattern.length; row += 1) {
      for (let column = 0; column < pattern[row].length; column += 1) {
        if (pattern[row][column] === '1') {
          fillRectangle(letterX + column * cell, textY + row * cell, cell, cell, colors.ink);
        }
      }
    }
  }

  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let row = 0; row < size; row += 1) {
    const rawOffset = row * (size * 4 + 1);
    raw[rawOffset] = 0;
    pixels.copy(raw, rawOffset + 1, row * size * 4, (row + 1) * size * 4);
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8;
  header[9] = 6;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

function makeIco(png) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header[6] = 0;
  header[7] = 0;
  header[8] = 0;
  header[9] = 0;
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

const favicon = makePng(256);
writeFileSync(join(publicDirectory, 'favicon.ico'), makeIco(favicon));
writeFileSync(join(publicDirectory, 'favicon-32.png'), makePng(32));
writeFileSync(join(publicDirectory, 'apple-touch-icon.png'), makePng(180));
writeFileSync(join(publicDirectory, 'pf-icon-192.png'), makePng(192));
writeFileSync(join(publicDirectory, 'pf-icon-512.png'), makePng(512));

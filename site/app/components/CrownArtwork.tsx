type CrownArtworkProps = {
  compact?: boolean;
};

export function CrownArtwork({ compact = false }: CrownArtworkProps) {
  return (
    <div className={`crown-stage${compact ? ' crown-stage-compact' : ''}`}>
      <span className="window-label">Queen&apos;s Regalia</span>
      <div className="pixel-stars" aria-hidden="true">
        <i /><i /><i /><i /><i />
      </div>
      <img
        className="crown-art"
        src="/queens-regalia-icon.png"
        alt="Queen's Regalia golden crown"
        width="192"
        height="192"
      />
      <span className="stage-corner stage-corner-one" aria-hidden="true" />
      <span className="stage-corner stage-corner-two" aria-hidden="true" />
    </div>
  );
}

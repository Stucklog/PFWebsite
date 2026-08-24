# Philosophy Forge website

Public studio, app, support, and privacy website for [philosophy-forge.com](https://philosophy-forge.com).

## Local development

```sh
cd site
npm install
npm run dev
```

## GitHub Pages deployment

Pushing `main` runs `.github/workflows/pages.yml`, exports the site, and deploys the `site/out` artifact to GitHub Pages. The custom domain is committed in `site/public/CNAME`.

In GitHub, set **Settings → Pages → Source** to **GitHub Actions**. Then add the custom domain `philosophy-forge.com` and enable **Enforce HTTPS** after DNS and certificate provisioning complete.

At the DNS provider, point the apex domain at GitHub Pages and point `www` to `stucklog.github.io`. See GitHub's current custom-domain documentation before changing DNS.

## Important release checks

- Confirm `support@philosophy-forge.com` is a working mailbox or forwarder.
- Finalize each app privacy policy against the exact release build and third-party SDKs.
- Keep the App Store privacy disclosures and Google Play Data safety form consistent with the published app policy.
- Add an account-deletion page if an app ever creates user accounts.

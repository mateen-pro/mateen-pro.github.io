# Muhammad Mateen — Engineering Portfolio

Single-page portfolio for Muhammad Mateen, an Embedded & Industrial Metering Engineer, Firmware + IoT Application Developer, Team Lead and Technical Liaison.

## Live portfolio

- [GitHub Pages](https://mateen-pro.github.io/)

## Portfolio scope

- Industrial Flow Computer architecture: custom I/O, Yocto ARM64, C++17, metrology, SQLite, REST/WebSocket and operator UI
- Electronic Volume Corrector firmware: FreeRTOS, PTZ metrology, archives, low power, optical serial, RS-232/485 and GSM
- INVEX inverter/generator IoT system: event-driven firmware, GSM AT commands, MQTT and Flutter applications
- Device-to-cloud platform design, hardware-level debugging, career journey and technical leadership

## Technology

- Next.js 16 / React 19 / TypeScript
- Vite + Vinext for the hosted Sites deployment
- Static Next.js export for GitHub Pages
- Responsive CSS, reduced-motion support and zero runtime data dependencies

## Local development

Requires Node.js 22 or later.

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
GITHUB_PAGES=true npx --no-install next build
```

The static GitHub Pages artifact is generated in `out/`. Pushing `main` runs the Pages deployment workflow in `.github/workflows/deploy-pages.yml`.

## Contact

- [LinkedIn](https://www.linkedin.com/in/mateenpro)
- [Email](mailto:mateenpro23@gmail.com)

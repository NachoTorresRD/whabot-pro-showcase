# 🚀 Whabot Pro v1.5 • Multichannel conversational automation

<div align="center">

[![RELEASE](https://img.shields.io/badge/RELEASE-v1.5-6366F1?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whabot.pro)
[![CHANNELS](https://img.shields.io/badge/CHANNELS-WHATSAPP_%7C_INSTAGRAM_%7C_TELEGRAM-06B6D4?style=for-the-badge)](https://whabot.pro)
[![SHOWCASE](https://img.shields.io/badge/REPOSITORY-PUBLIC_SHOWCASE-10B981?style=for-the-badge)](https://github.com/NachoTorresRD/whabot-pro-showcase)
[![LICENSE](https://img.shields.io/badge/LICENSE-PROPRIETARY-A855F7?style=for-the-badge&logo=shield&logoColor=white)](https://github.com/NachoTorresRD/whabot-pro-showcase)

**[🇪🇸 Español](./README.md)** | **🇺🇸 English**

<br>

<img src="img/banner.webp" alt="Whabot Pro — Conversational automation" width="100%" style="border-radius: 12px; box-shadow: 0 12px 32px rgba(0,0,0,0.5);">

WhatsApp Cloud API • Instagram Direct • Telegram Bots • Gemini AI • Automations • CRM • Campaigns • Catalogs • Visual flow editor

**[Whabot Pro website](https://whabot.pro)** · **[NachoTech / NTDesWeb](https://www.ntdesweb.com)**

</div>

> [!IMPORTANT]
> **PUBLIC SHOWCASE AND COMMERCIAL DEMO REPOSITORY:** this repository contains documentation, a high-level architecture description, and a static Whabot Pro landing page. The production backend, frontend, and commercial algorithms remain in private repositories.

## 📍 Product status

Legend: ✅ Available · 🧪 In testing · 🚧 In development · 🗺️ Roadmap

| Channel or capability | Status | Scope |
|---|---|---|
| WhatsApp Cloud API | ✅ Available | Messaging, templates, interactive elements, and catalogs within Meta's supported capabilities. |
| Instagram Direct and comments | ✅ Available* | Direct messages and comment automation. |
| Telegram Bots | ✅ Available | Bots, commands, and automation through the Telegram API. |
| Automations, rules, and visual flow editor | ✅ Available | Design and execution of conversational flows. |
| CRM, campaigns, catalogs, multi-agent, and analytics | ✅ Available | Operational and tracking tools within the platform. |
| Voice features | 🚧 In development | Voice capabilities remain subject to technical evolution and testing. |
| Facebook Messenger | 🚧 In development | Not currently available. |

\* Some Instagram and other Meta integration features depend on app permissions, Meta review, and current platform policies.

## 🤖 AI and integrations

- **Primary AI provider:** Gemini.
- **Optional fallback:** OpenRouter, depending on deployment configuration.
- **External integrations:** APIs and webhooks. No fixed number of connectors is claimed.
- **Real-time communication:** Socket.io and WebSockets for events between the backend and authorized interfaces.

## 🖼️ Visual gallery

<div align="center">

### Multichannel conversational automation

<img src="img/hero.webp" alt="Whabot Pro — Multichannel automation" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### AI and visual flow editor

<img src="img/editor.webp" alt="Whabot Pro — AI and visual editor" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### Platform integrations

<img src="img/integrations.webp" alt="Whabot Pro — Integrations" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### Commercial and payment flows

<img src="img/payments.webp" alt="Whabot Pro — Commercial flows" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### Use cases

<img src="img/cases.webp" alt="Whabot Pro — Use cases" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### Centralized management

<img src="img/system.webp" alt="Whabot Pro — Centralized management" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px;">

</div>

> Images are commercial showcase assets. Current module availability is defined by the **Product status** table.

## 🛠️ Technical architecture

```mermaid
flowchart LR
    WA[WhatsApp Cloud API] -->|Webhooks| API[Node.js + Express + TypeScript]
    IG[Instagram Direct] -->|Webhooks| API
    TG[Telegram Bot API] -->|API / Webhooks| API
    MS[Facebook Messenger<br/>In development] -.-> API

    API --> DB[(MongoDB + Mongoose)]
    API --> CACHE[(Redis)]
    API --> AI[Gemini]
    API -. Optional fallback .-> OR[OpenRouter]
    API <-->|Socket.io / WebSockets| UI[Next.js 14 + React]
    API <-->|APIs / Webhooks| EXT[External services]
```

- **Backend:** Node.js, Express, and TypeScript.
- **Persistence:** MongoDB through Mongoose.
- **Temporary state and operational support:** Redis.
- **Real-time communication:** Socket.io and WebSockets.
- **Frontend:** Next.js 14 and React.
- **AI:** Gemini as the primary provider, with optional fallback through OpenRouter.

The diagram describes high-level components without exposing code, credentials, private topology, or internal deployment details.

## 🌐 Official links

- [Whabot Pro](https://whabot.pro)
- [NachoTech / NTDesWeb](https://www.ntdesweb.com)
- [GitHub showcase](https://github.com/NachoTorresRD/whabot-pro-showcase)

---

<div align="center">

Designed and developed by **NachoTechRD** © 2026. Production source code is private.

</div>

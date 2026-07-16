# 🚀 Whabot Pro v1.5 • Automatización conversacional multicanal

<div align="center">

[![RELEASE](https://img.shields.io/badge/RELEASE-v1.5-6366F1?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whabot.pro)
[![CHANNELS](https://img.shields.io/badge/CANALES-WHATSAPP_%7C_INSTAGRAM_%7C_TELEGRAM-06B6D4?style=for-the-badge)](https://whabot.pro)
[![SHOWCASE](https://img.shields.io/badge/REPOSITORIO-SHOWCASE_PÚBLICO-10B981?style=for-the-badge)](https://github.com/NachoTorresRD/whabot-pro-showcase)
[![LICENSE](https://img.shields.io/badge/LICENCIA-PROPIETARIA-A855F7?style=for-the-badge&logo=shield&logoColor=white)](https://github.com/NachoTorresRD/whabot-pro-showcase)

**🇪🇸 Español** | **[🇺🇸 English](./README.en.md)**

<br>

<img src="img/banner.webp" alt="Whabot Pro — Automatización conversacional" width="100%" style="border-radius: 12px; box-shadow: 0 12px 32px rgba(0,0,0,0.5);">

WhatsApp Cloud API • Instagram Direct • Telegram Bots • IA con Gemini • Automatizaciones • CRM • Campañas • Catálogos • Editor visual de flujos

**[Sitio de Whabot Pro](https://whabot.pro)** · **[NachoTech / NTDesWeb](https://www.ntdesweb.com)**

</div>

> [!IMPORTANT]
> **REPOSITORIO PÚBLICO DE SHOWCASE Y DEMOSTRACIÓN COMERCIAL:** contiene documentación, una descripción de arquitectura y una landing estática de Whabot Pro. El backend, el frontend de producción y los algoritmos comerciales permanecen en repositorios privados.

## 📍 Estado del producto

Leyenda: ✅ Disponible · 🧪 En pruebas · 🚧 En desarrollo · 🗺️ Roadmap

| Canal o capacidad | Estado | Alcance |
|---|---|---|
| WhatsApp Cloud API | ✅ Disponible | Mensajería, plantillas, elementos interactivos y catálogos según las capacidades de Meta. |
| Instagram Direct y comentarios | ✅ Disponible* | Mensajes directos y automatización de comentarios. |
| Telegram Bots | ✅ Disponible | Bots, comandos y automatizaciones mediante la API de Telegram. |
| Automatizaciones, reglas y editor visual de flujos | ✅ Disponible | Diseño y ejecución de flujos conversacionales. |
| CRM, campañas, catálogos, multiagente y analíticas | ✅ Disponible | Herramientas de operación y seguimiento dentro de la plataforma. |
| Funciones de voz | 🚧 En desarrollo | Capacidades de voz sujetas a evolución técnica y pruebas. |
| Facebook Messenger | 🚧 En desarrollo | No disponible actualmente. |

\* Algunas funciones de Instagram y otras integraciones de Meta dependen de los permisos concedidos a la aplicación, la revisión de Meta y las políticas vigentes de la plataforma.

## 🤖 IA e integraciones

- **Proveedor principal de IA:** Gemini.
- **Fallback opcional:** OpenRouter, según la configuración del despliegue.
- **Integraciones externas:** APIs y webhooks. No se afirma un número fijo de conectores.
- **Tiempo real:** Socket.io y WebSockets para eventos entre el backend y las interfaces autorizadas.

## 🖼️ Galería visual

<div align="center">

### Automatización conversacional multicanal

<img src="img/hero.webp" alt="Whabot Pro — Automatización multicanal" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### IA y editor visual

<img src="img/editor.webp" alt="Whabot Pro — IA y editor visual" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### Integraciones de la plataforma

<img src="img/integrations.webp" alt="Whabot Pro — Integraciones" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### Flujos comerciales y pagos

<img src="img/payments.webp" alt="Whabot Pro — Flujos comerciales" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### Casos de uso

<img src="img/cases.webp" alt="Whabot Pro — Casos de uso" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### Gestión centralizada

<img src="img/system.webp" alt="Whabot Pro — Gestión centralizada" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px;">

</div>

> Las imágenes son recursos comerciales del showcase. La disponibilidad actual de cada módulo se rige por la tabla **Estado del producto**.

## 🛠️ Arquitectura técnica

```mermaid
flowchart LR
    WA[WhatsApp Cloud API] -->|Webhooks| API[Node.js + Express + TypeScript]
    IG[Instagram Direct] -->|Webhooks| API
    TG[Telegram Bot API] -->|API / Webhooks| API
    MS[Facebook Messenger<br/>En desarrollo] -.-> API

    API --> DB[(MongoDB + Mongoose)]
    API --> CACHE[(Redis)]
    API --> AI[Gemini]
    API -. Fallback opcional .-> OR[OpenRouter]
    API <-->|Socket.io / WebSockets| UI[Next.js 14 + React]
    API <-->|APIs / Webhooks| EXT[Servicios externos]
```

- **Backend:** Node.js, Express y TypeScript.
- **Persistencia:** MongoDB mediante Mongoose.
- **Estado temporal y soporte operativo:** Redis.
- **Comunicación en tiempo real:** Socket.io y WebSockets.
- **Frontend:** Next.js 14 y React.
- **IA:** Gemini como proveedor principal, con posibilidad de fallback mediante OpenRouter.

El diagrama describe los componentes de alto nivel sin exponer código, credenciales, topología privada ni detalles internos de despliegue.

## 🌐 Enlaces oficiales

- [Whabot Pro](https://whabot.pro)
- [NachoTech / NTDesWeb](https://www.ntdesweb.com)
- [Showcase en GitHub](https://github.com/NachoTorresRD/whabot-pro-showcase)

---

<div align="center">

Diseñado y desarrollado por **NachoTechRD** © 2026. Código de producción privado.

</div>

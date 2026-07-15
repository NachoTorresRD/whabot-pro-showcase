<!-- ========================================================================== -->
<!-- NT-SKILL SUPREME README ENGINE - WHABOT PRO SHOWCASE                       -->
<!-- ========================================================================== -->

<div align="center">

# 🚀 Whabot Pro v1.5 • Enterprise Omnichannel AI Engine

[![RELEASE](https://img.shields.io/badge/RELEASE-v1.5_OMNICHANNEL-6366F1?style=for-the-badge&logo=whatsapp&logoColor=white)](https://github.com/NachoTorresRD/whabot-pro-showcase)
[![CHANNELS](https://img.shields.io/badge/CHANNELS-WHATSAPP_%7C_INSTAGRAM_%7C_TELEGRAM_%7C_MESSENGER-06B6D4?style=for-the-badge&logo=messenger&logoColor=white)](https://github.com/NachoTorresRD/whabot-pro-showcase)
[![SATISFACTION](https://img.shields.io/badge/SATISFACTION-4.9%2F5.0-F59E0B?style=for-the-badge&logo=star&logoColor=white)](https://github.com/NachoTorresRD/whabot-pro-showcase)
[![LICENSE](https://img.shields.io/badge/LICENSE-PROPRIETARY-A855F7?style=for-the-badge&logo=shield&logoColor=white)](https://github.com/NachoTorresRD/whabot-pro-showcase)

**[ 🇪🇸 Español ]** | **[ 🇺🇸 English ]**

<br>

<img src="img/banner.webp" alt="Whabot Pro Supreme Header Banner" width="100%" style="border-radius: 12px; box-shadow: 0 12px 32px rgba(0,0,0,0.5);">

<br>

### *Plataforma Enterprise Omnicanal de Automatización Conversacional (WhatsApp Cloud API • Instagram Direct • Telegram Bots • Messenger Próximamente), Agentes IA (Gemini 2.5 Flash), Editor de Flujos Visuales, VoIP Neural y Pasarelas de Pago Integradas.*

---

</div>

> [!IMPORTANT]
> **REPOSOTORIO PÚBLICO DE SHOWCASE Y DEMOSTRACIÓN COMERCIAL**:
> Este repositorio contiene la documentación pública, especificaciones de arquitectura y la landing estática de demostración para la suite **Whabot Pro**. El código fuente backend y los algoritmos de producción se mantienen en nuestro repositorio privado bajo custodia de **NachoTechRD**.

> [!NOTE]
> Para licencias enterprise, integraciones personalizadas o despliegues dedicados On-Premises, contacta directamente al equipo de ingeniería.

---

## 🌐 Cobertura Omnicanal de Mensajería

- **🟢 WhatsApp Cloud API**: API Oficial de Meta con soporte para botones, listas interactivas, catálogos y plantillas HSM.
- **🟣 Instagram Direct (DM)**: Automatización inteligente para mensajes directos, comentarios en publicaciones, historias y menciones.
- **🔵 Telegram Bots Engine**: Conexión nativa con bots y canales de Telegram para difusión masiva y soporte.
- **⚡ Facebook Messenger** *(Muy Pronto)*: Integración unificada para páginas de Facebook con el mismo motor de IA.

---

## ⚡ Matriz Comparativa de Módulos Whabot Pro

| Módulo / Capacidad | Plan Standard | Whabot Pro v1.5 (Supreme) | Beneficio Clave |
| :--- | :---: | :---: | :--- |
| **Soporte Multicanal** | Solo WhatsApp básico | **✅ WhatsApp + Instagram + Telegram + Messenger** | Unifica todas tus fuentes de prospectos en un único panel inteligente. |
| **Proveedor de IA** | GPT-3.5 Legacy | **✅ Gemini 2.5 Flash Exclusivo** | Cero latencia, razonamiento contextual profundo y menor costo operativo. |
| **Arquitectura Multi-Agente** | ❌ Monolítico | **✅ Agentes Compartidos** | Especialización por departamentos (Ventas, Soporte, Facturación). |
| **Editor de Flujos** | Plantillas Rígidas | **✅ Visual Drag & Drop** | Creación flexible con diagramas condicionales y variables dinámicas. |
| **Llamadas de Voz VoIP** | ❌ No disponible | **✅ Síntesis Neural VoIP** | Confirmación automatizada de citas por voz en tiempo real. |
| **Pasarelas de Pago** | Enlace Manual | **✅ PayPal & Hotmart Native** | Cobro automatizado y verificación en ventana de chat. |
| **Webhooks & API Sync** | Restringido | **✅ 50+ Integraciones CRM** | Conexión directa con HubSpot, Salesforce, Zoho, Shopify y Webhooks. |

---

## 🖼️ Galería Visual Pro (Pro Social Assets Engine)

<div align="center">

### 1. Conversión de Chats a Ventas Reales (Omnicanal)
<img src="img/hero.webp" alt="Convierte Chats en Ventas" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### 2. Automatización Inteligente con IA + Voz Neural
<img src="img/editor.webp" alt="IA + Voz Neural" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### 3. Solución Completa: Más que un simple Bot
<img src="img/integrations.webp" alt="No es solo un Bot" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### 4. Recuperación de Chats Perdidos y Cobros Directos
<img src="img/payments.webp" alt="Recuperación de Ventas" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### 5. Matriz de Casos de Uso Enterprise
<img src="img/cases.webp" alt="Casos de Uso Enterprise" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px; margin-bottom: 2rem;">

### 6. Sistema Unificado de Gestión Omnicanal
<img src="img/system.webp" alt="Un Solo Sistema Unificado" width="680" style="max-height: 420px; object-fit: contain; border-radius: 12px;">

</div>

---

## 🛠️ Arquitectura Técnica & Stack Tecnológico

```mermaid
graph TD
    A1[WhatsApp Cloud API Meta] -->|Webhooks| B(Node.js Omnichannel Engine)
    A2[Instagram Direct Messaging] -->|Webhooks| B
    A3[Telegram Bot API] -->|Webhooks| B
    A4[Facebook Messenger API] -->|Webhooks| B
    B -->|Memory & Queue State| C[(Redis Data Store)]
    B -->|Context Reasoning| D[Gemini 2.5 Flash AI Engine]
    B -->|Outbound Webhooks| E[CRM / Shopify / PayPal / Hotmart]
    B -->|Neural Telephony| F[VoIP SIP Gateway Engine]
    G[Frontend Next.js Admin UI] -->|REST / GraphQL| B
```

- **Core Engine**: Node.js v20+, TypeScript 5+, Express/Fastify API REST Server.
- **Frontend Dashboard**: Next.js 14, React 18, TailwindCSS, NT-Skill Supreme Engine tokens.
- **Database & Queue**: Redis, PostgreSQL con ORM Prisma para alto rendimiento conversacional.
- **AI Acceleration**: Google Gemini 2.5 Flash SDK nativo con fallback resiliente.

---

## 🌐 Embudo de Conversión & Ecosistema (Upsell Hub)

Conoce y conecta todas las soluciones de la suite de software **NachoTechRD**:

```
 ┌──────────────────────────┐      ┌──────────────────────────┐      ┌──────────────────────────┐
 │      🤖 WHABOT PRO       │ ◄──► │      💼 POSENT PRO       │ ◄──► │  ✨ AGENCIA 3D STUDIO    │
 │ Omnichannel AI & Voice   │      │ Cloud ERP, POS & Taxes   │      │ Immersive Web 3D Engines │
 └──────────────────────────┘      └──────────────────────────┘      └──────────────────────────┘
```

- **[🤖 Whabot Pro](https://github.com/NachoTorresRD/whabot-pro-showcase)**: Solución líder de automatización omnicanal (WhatsApp, Instagram, Telegram & Messenger).
- **[💼 Posent Pro](https://github.com/NachoTorresRD)**: Plataforma ERP de punto de venta e inventario inteligente en la nube.
- **[✨ Agencia 3D Studio](https://github.com/NachoTorresRD)**: Desarrollo de sitios web inmersivos 3D con estética **NT-Skill Supreme**.

---

<div align="center">

Diseñado & Desarrollado por **NachoTechRD** bajo el marco **NT-Skill Supreme Engine** © 2026.

</div>

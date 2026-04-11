# Decisiones Tecnológicas 🧠

Este documento detalla las razones detrás de la elección de las tecnologías y patrones arquitectónicos utilizados en este proyecto.

## 🚀 Backend

### NestJS
Se eligió **NestJS** como framework de backend por las siguientes razones:
- **Framework moderno**: NestJS es un framework moderno, basado en Node.js y escalable que permite construir aplicaciones robustas y mantenibles.
- **Estructura y Modularidad**: NestJS impone una estructura de carpetas y una organización modular que facilita el mantenimiento a largo plazo.
- **TypeScript Nativo**: Permite aprovechar al máximo el tipado estático, reduciendo errores en tiempo de ejecución.
- **Ecosistema**: Ofrece soporte integrado para inyección de dependencias, validación de DTOs y manejo de excepciones.

### TypeORM + PostgreSQL
Para la persistencia de datos, se optó por **TypeORM**:
- **Productividad**: Permite interactuar con la base de datos utilizando objetos de TypeScript, lo que acelera el desarrollo.
- **Sincronización**: La capacidad de sincronizar automáticamente el esquema de la base de datos con las entidades es ideal para iteraciones rápidas en fases iniciales.
- **Familiaridad**: Es uno de los ORMs más robustos y utilizados en el ecosistema Node.js/TypeScript.
- **PostgreSQL**: Se eligió como motor de base de datos relacional por su robustez, cumplimiento de ACID y soporte para tipos de datos avanzados como JSONB si fuera necesario.

---

## 🎨 Frontend

### TypeScript
El uso de **TypeScript** es fundamental para:
- **Calidad de Código**: Detectar errores durante el desarrollo antes de llegar a producción.
- **Auto-documentación**: Las interfaces y tipos actúan como documentación viva de los datos que fluyen por la aplicación.

### Tailwind CSS
Para el estilizado, se eligió **Tailwind CSS**:
- **Velocidad de Desarrollo**: Permite construir interfaces complejas rápidamente sin salir del archivo HTML/JSX.
- **Consistencia**: El uso de un sistema de diseño basado en utilidades asegura que los márgenes, colores y tipografías sean consistentes.
- **Optimización**: Purga el CSS no utilizado, resultando en bundles muy ligeros.

### Shadcn UI
Se seleccionó **Shadcn UI** como biblioteca de componentes:
- **Control Total**: A diferencia de las librerías de componentes tradicionales que se instalan como dependencias, Shadcn permite copiar el código de los componentes en el proyecto, dándonos control total sobre el estilo y el comportamiento.
- **Accesibilidad**: Está construido sobre Radix UI, lo que garantiza que los componentes sean accesibles desde el principio.

---

## 🛠️ Futuras Implementaciones

### TanStack Query (React Query)
Está previsto integrar **TanStack Query** para la gestión del estado asíncrono:
- **Caché y Sincronización**: Automatiza la gestión de la caché de datos de la API, reduciendo las llamadas innecesarias al servidor.
- **Estado de Carga/Error**: Provee hooks sencillos para manejar estados de `loading` y `error` de forma consistente en toda la app.
- **Optimistic Updates**: Facilitará la implementación de actualizaciones optimistas para una experiencia de usuario más fluida.

---

## 🏗️ Patrones Arquitectónicos

### Arquitectura Hexagonal (Puertos y Adaptadores)
El proyecto sigue principios de Arquitectura Hexagonal para desacoplar la lógica de negocio de las tecnologías externas (Bases de datos, APIs de terceros, UI).
- **Dominio**: Contiene la lógica central y reglas de negocio.
- **Aplicación**: Casos de uso de la aplicación.
- **Infraestructura**: Implementaciones técnicas (TypeORM, Repositorios concretos).
- **Presentación**: Interfaz de usuario y controladores de API.

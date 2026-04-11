# Sistema de Gestión de Tickets 🎫

Este proyecto es una aplicación web para la gestión de tickets, clientes y agentes, construida con una arquitectura moderna y escalable.

## 🏗️ Estructura del Proyecto

El repositorio está dividido en dos partes principales:

- **Backend**: API construida con **NestJS**, **TypeORM** y **PostgreSQL**. Sigue principios de Arquitectura Hexagonal.
- **Frontend**: SPA construida con **React**, **Vite**, **Tailwind CSS** y **Shadcn UI**.

---

## 🚀 Cómo Levantar el Proyecto

Puedes ejecutar el proyecto de dos formas: usando Docker (recomendado) o manualmente.

### 🐳 Opción 1: Docker (Recomendado)

Asegúrate de tener instalado **Docker** y **Docker Compose**.

1. En la raíz del proyecto, ejecuta el siguiente comando:
   ```bash
   docker-compose up --build
   ```
2. Una vez finalizado, los servicios estarán disponibles en:
   - **Frontend**: [http://localhost](http://localhost)
   - **Backend**: [http://localhost:3000](http://localhost:3000)
   - **Base de Datos**: `localhost:5432`

---

### 💻 Opción 2: Levantamiento Manual

#### Requisitos Previos:
- **Node.js** (v18 o superior)
- **PostgreSQL** instalado y corriendo.

#### 1. Configuración de la Base de Datos
1. Crea una base de datos llamada `tickets_db`.
2. Ejecuta el script de inicialización ubicado en `backend/src/db/init.sql` para crear las tablas y datos semilla.

#### 2. Configurar el Backend
1. Ve al directorio del backend: `cd backend`
2. Instala las dependencias: `npm install`
3. Crea un archivo `.env` basado en `.env.example`:
   ```bash
   cp .env.example .env
   ```
4. Asegúrate de que las credenciales en `.env` coincidan con tu base de datos local.
5. Inicia el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   ```

#### 3. Configurar el Frontend
1. Ve al directorio del frontend: `cd frontend`
2. Instala las dependencias: `npm install`
3. Inicia la aplicación:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🛠️ Tecnologías Usadas

### Backend
- **Framework**: NestJS
- **ORM**: TypeORM
- **Base de Datos**: PostgreSQL
- **Validación**: class-validator

### Frontend
- **Framework**: React + Vite
- **Estilos**: Tailwind CSS + Shadcn UI
- **Iconos**: Lucide React
- **Tablas**: TanStack Table

---

## 📝 Notas Adicionales
- El backend utiliza `DB_SYNC=true` en desarrollo para sincronizar automáticamente el esquema de la base de datos con las entidades de TypeORM.
- El frontend utiliza datos simulados (mocks) en algunas secciones, integrándose progresivamente con el backend.

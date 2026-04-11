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

## 🧪 Pruebas y Calidad de Código

### Backend
El backend incluye pruebas unitarias para los casos de uso principales.

1. Ve al directorio del backend: `cd backend`
2. Ejecuta las pruebas:
   ```bash
   npm test
   ```
3. Ejecuta el linter (sin modificar archivos):
   ```bash
   npm run lint
   ```

### Frontend
1. Ve al directorio del frontend: `cd frontend`
2. Ejecuta las pruebas:
   ```bash
   npm test
   ```
3. Ejecuta el linter:
   ```bash
   npm run lint
   ```

---

## 🔄 CI/CD (GitHub Actions)

El proyecto cuenta con un flujo de integración y despliegue continuo configurado en `.github/workflows/main.yml`. Este flujo se activa en cada `push` o `pull request` a las ramas `main` o `master` y realiza lo siguiente:

1. **Linting y Testeo**: Asegura que el código cumpla con los estándares y pase todas las pruebas.
2. **Build de Docker**: Construye imágenes para el cliente y el servidor.
3. **Publicación**: Sube las imágenes al **GitHub Container Registry (GHCR)**.

---

## 📝 Notas Adicionales
- El backend utiliza `DB_SYNC=true` en desarrollo para sincronizar automáticamente el esquema de la base de datos con las entidades de TypeORM.
- El linter del backend ha sido configurado para ser permisivo y respetar el estilo de código existente sin forzar modificaciones automáticas.

---

## 📈 Conclusión y Mejoras

### Conclusión
Se realizó la prueba técnica satisfactoriamente, logrando cumplir con el MVP propuesto y otras características de software propuestas. Esta prueba técnica reúne las habilidades de cliente y servidor con frameworks modernos, con librerías de alto impacto que ayudan a mejorar la UX/UI del usuario.

### Mejoras Futuras
- **Separación Visual**: Mejorar la separación de los módulos de manera visual para una navegación más intuitiva.
- **Paginación**: Agregar paginación a las tablas tanto en el backend como en el frontend para manejar grandes volúmenes de datos.
- **Estado Global**: Si la aplicación crece, considerar la implementación de **Zustand** o **Redux** para manejar el estado global de forma más eficiente.
- **Persistencia de Datos**: Explorar la opción de cambiar a **Prisma** en el backend para facilitar el trabajo con bases de datos relacionales y no relacionales de manera más flexible.

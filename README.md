# Calid Hogar - Plataforma de Adopción de Mascotas

## Descripción

**Calid Hogar** es una aplicación web desarrollada con **React**, **Vite**, **TypeScript (TSX)** y **shadcn/ui**, diseñada para facilitar la adopción de mascotas y apoyar a los refugios en su labor. La plataforma permite a los usuarios buscar mascotas para adoptar, ver información sobre refugios y registrarse como adoptantes o refugios.

## Requisitos Previos

Asegúrate de tener las siguientes herramientas instaladas en tu máquina local antes de comenzar:

- [Node.js](https://nodejs.org/) (versión 14.0.0 o superior)
- npm (normalmente viene con Node.js)
- [Git](https://git-scm.com/)

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

### 1. Clona el repositorio:

```bash
git clone https://github.com/Jhonatanjacome07/CalidHogar.git
cd CalidHogar
```

### 2.Instala las dependencias :

Instala todas las dependencias del proyecto usando npm o yarn:
npm install

### 3. Configura Tailwind CSS:

Este proyecto utiliza Tailwind CSS para el diseño. Si Tailwind no está configurado, asegúrate de que en el archivo tailwind.config.js esté lo siguiente:

module.exports = {
content: [
'./index.html',
'./src/**/*.{js,ts,jsx,tsx}', // Asegúrate de incluir archivos TSX y JSX
],
theme: {
extend: {},
},
plugins: [],
}

### 4. Ejecuta el servidor de desarrollo:

Una vez que todas las dependencias estén instaladas, inicia el servidor de desarrollo:
npm run dev

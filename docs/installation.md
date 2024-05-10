# Installation

---

## Table of Contents

- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Development](#development)
  - [Production build](#production-build)

---

## Prerequisites

1. Node.js version `20.11.0` is required
2. Pnpm package manager is recommended, stable version is `9.0.6`

   ```bash
   npm i pnpm -g
   ```

## Development

1. Clone repository

2. Install dependencies

   ```bash
   cd my-app
   pnpm install
   ```

3. Copy example environment file

   ```bash
   cp .env.example .env
   ```

4. Run development server

   ```bash
   pnpm dev
   ```

## Production build

1. Clone repository

2. Install dependencies

   ```bash
   cd my-app
   pnpm install
   ```

3. Copy example environment file

   ```bash
   cp .env.example .env
   ```

4. Build application

   ```bash
   pnpm build
   ```

5. Run production server

   ```bash
   pnpm start
   ```

---

<div align="center">

# ⚡ *CUSTOMER APP — Full-Stack MEAN Management Platform*

**A high-performance, full-stack customer relationship management web application built on the MEAN Stack.**

<br/>

[![Repository](https://img.shields.io/badge/📂_REPOSITORY-CUSTOMER--APP-181717?style=for-the-badge&logo=github&logoColor=white)](#)
[![License: ISC](https://img.shields.io/badge/LICENSE-ISC-007ACC?style=for-the-badge)](#)

<br/>

<!-- Tech Stack Badges Matrix -->
[![Angular](https://img.shields.io/badge/ANGULAR-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TYPESCRIPT-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![Bootstrap](https://img.shields.io/badge/BOOTSTRAP-V5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](#)
[![Angular Material](https://img.shields.io/badge/ANGULAR_MATERIAL-UI-FF5722?style=for-the-badge&logo=angular&logoColor=white)](#)

[![Node.js](https://img.shields.io/badge/NODE.JS-LTS-339933?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![Express](https://img.shields.io/badge/EXPRESS-V5-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MONGODB-ATLAS-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Mongoose](https://img.shields.io/badge/MONGOOSE-V9-880000?style=for-the-badge&logo=mongoose&logoColor=white)](#)
[![RxJS](https://img.shields.io/badge/RXJS-REACTIVE-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)](#)

</div>

---

## 🎯 Overview

**Customer App** is an end-to-end full-stack CRUD application engineered using modern web development standards. It features a reactive, component-driven frontend powered by **Angular 21** and a robust RESTful backend built on **Express 5** and **MongoDB Atlas**.

---

## ✨ Key Features

<table>
  <tr>
    <td width="50%">
      <h3>👥 Customer Directory</h3>
      <p>Clean, paginated-ready responsive data view displaying all active customer records with real-time state synchronization.</p>
    </td>
    <td width="50%">
      <h3>➕ Customer Onboarding</h3>
      <p>Reactive form with client-side & server-side validation for quick registration (name, email, phone number).</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔍 Deep Profile Insights</h3>
      <p>Dedicated customer details view with complete metadata, contact history, and record creation timestamps.</p>
    </td>
    <td width="50%">
      <h3>✏️ Dynamic Updates & Deletion</h3>
      <p>One-click inline updates and instant deletion with automated UI refresh via RxJS Observables.</p>
    </td>
  </tr>
</table>

---

## 🏗️ System Architecture

```mermaid
graph LR
    subgraph Client ["Client Layer (Angular 21)"]
        A[Angular Components] --> B[Angular Router]
        A --> C[CustomerService]
        C --> D[HttpClient & RxJS]
    end

    subgraph Server ["Server Layer (Node & Express 5)"]
        E[Express Server :4000] --> F[CORS & BodyParser]
        F --> G[Customer Router]
        G --> H[Mongoose Controller]
    end

    subgraph Database ["Data Layer (Cloud)"]
        I[(MongoDB Atlas)]
    end

    D -->|REST API HTTP/JSON| E
    H -->|Query / Mutation| I
```

---

## 🗂️ Project Structure

```text
Customer-app/
├── 📂 back-end/
│   ├── 📂 models/
│   │   └── 📄 customer.js          # Mongoose Schema & Data Model
│   ├── 📂 routes/
│   │   └── 📄 customer.js          # REST Controller & API Endpoints
│   ├── 📄 app.js                   # Server bootstrap & DB connection
│   ├── 📄 package.json             # Express, Mongoose & CORS dependencies
│   └── 📄 package-lock.json
│
├── 📂 front-end/
│   ├── 📂 src/
│   │   ├── 📂 app/
│   │   │   ├── 📂 components/
│   │   │   │   ├── 📂 customer-list/     # Table & directory view
│   │   │   │   ├── 📂 customer-create/   # Form to add new customer
│   │   │   │   ├── 📂 customer-edit/     # Record modification form
│   │   │   │   └── 📂 customer-details/  # Single profile overview
│   │   │   ├── 📂 models/
│   │   │   │   └── 📄 customer.module.ts # TypeScript interfaces
│   │   │   ├── 📂 services/
│   │   │   │   └── 📄 customer.ts        # HTTP API Service
│   │   │   ├── 📄 app.routes.ts          # Angular SPA route registry
│   │   │   ├── 📄 app.ts / app.html      # Root shell component
│   │   │   └── 📄 app.config.ts          # Angular application config
│   │   ├── 📄 index.html
│   │   ├── 📄 main.ts
│   │   └── 📄 styles.css
│   ├── 📄 angular.json             # Angular workspace configuration
│   └── 📄 package.json             # Angular 21, Material & Bootstrap
└── 📄 README.md
```

---

## 📡 REST API Reference

Base Endpoint: `http://localhost:4000/api/customers`

| Method | Endpoint | Description | Payload |
|:---:|:---|:---|:---|
| ![GET](https://img.shields.io/badge/GET-2196F3?style=for-the-badge&logoColor=white) | `/api/customers` | Retrieve list of all customers | _None_ |
| ![GET](https://img.shields.io/badge/GET-2196F3?style=for-the-badge&logoColor=white) | `/api/customers/:id` | Retrieve customer by ID | _None_ |
| ![POST](https://img.shields.io/badge/POST-4CAF50?style=for-the-badge&logoColor=white) | `/api/customers` | Register a new customer | `{ "name": "string", "email": "string", "phone": "string" }` |
| ![PUT](https://img.shields.io/badge/PUT-FF9800?style=for-the-badge&logoColor=white) | `/api/customers/:id` | Update existing customer data | `{ "name": "string", "email": "string", "phone": "string" }` |
| ![DELETE](https://img.shields.io/badge/DELETE-F44336?style=for-the-badge&logoColor=white) | `/api/customers/:id` | Remove customer record | _None_ |

---

## 🚀 Quick Start Guide

### 1. Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

---

### 2. Backend Installation & Launch

```bash
# Navigate to back-end
cd back-end

# Install dependencies
npm install

# Start Express server with auto-reload
npm run dev
```

> 🟢 **Backend running at:** `http://localhost:4000`

---

### 3. Frontend Installation & Launch

```bash
# Open a new terminal and navigate to front-end
cd front-end

# Install dependencies
npm install

# Start Angular development server
npm start
```

> 🌐 **Frontend application ready at:** `http://localhost:4200`

---

## 🛠️ Tech Stack & Dependencies

<div align="center">

| Layer | Technologies & Libraries |
|:---|:---|
| **Frontend** | Angular 21, TypeScript 5.9, Angular Material, Bootstrap 5.3, RxJS, Zone.js |
| **Backend** | Node.js, Express.js 5, CORS, Nodemon |
| **Database** | MongoDB Atlas, Mongoose ODM 9.9 |
| **Tooling** | Angular CLI 21, Prettier, Vitest |

</div>

---

<div align="center">

Made with ❤️ using the **MEAN Stack**

</div>

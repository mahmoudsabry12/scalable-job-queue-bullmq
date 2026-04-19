# scalable-job-queue-bullmq

A production-ready Node.js backend using TypeScript, BullMQ, Redis, and MongoDB for handling background jobs (e.g., email processing).

---

## 📦 Tech Stack

- Node.js + Express  
- TypeScript  
- BullMQ (Queue system)  
- Redis (Queue backend)  
- MongoDB (Persistence)  
- Mongoose (ODM)  

---

## ⚙️ Prerequisites

Make sure you have installed:

- Node.js (>= 18)
- npm or yarn
- Docker (optional but recommended)
- Redis (if not using Docker)
- MongoDB (local or cloud)

---

## 📥 Installation

### 1. Clone the repository
```bash
git clone https://github.com/mahmoudsabry12/scalable-job-queue-bullmq.git
cd scalable-job-queue-bullmq
```

### 2. Install Dependencies
```bash
npm install
```

---

## 🧠 TypeScript Setup

Initialize TypeScript configuration:

```bash
npx tsc --init
```
## ⚙️ tsconfig.json Configuration

 Update tsconfig.json with the following settings : 

```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true
  }
}
```
## 📁 Design Folder Structure

 Add Folders App  : 

```
src/
 ├── config/
 ├── queues/
 ├── jobs/
 ├── workers/
 ├── api/
 ├── models/
 ├── app.ts
 └── server.ts
```
## 📁 Add env File

```
npm install dotenv
cp .env.example .env
```

## 📁 Add Redis Configrations

 Add Clean Redis connection (no side effects): 

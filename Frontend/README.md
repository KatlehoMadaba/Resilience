# 🛡️ Resilience App

## Overview

**Resilience** is a trauma-informed, survivor-centered support platform for individuals impacted by sexual assault. Whether the assault was recent or occurred years ago, Resilience offers tools, guidance, and **real-time access to professional support**, helping survivors find safety, healing, and justice on their own terms.

The application is built with a scalable backend powered by **ABP Boilerplate (ASP.NET Core)** and a modern, reactive frontend using **Next.js with TypeScript (TSX)**.

## ✨ Key Features

- 🔐 Anonymous, trauma-informed onboarding  
- 🏥 Step-by-step medical and legal guidance  
- 🤖 AI-powered therapeutic chatbot, available 24/7  
- 👩‍⚕️ Speak with real professionals (counselors and legal advisors)  
- 🗺️ Hospital locator with rape kit availability  
- 📝 Incident Report Generator (PDF output)  
- 📢 Petition and advocacy tools  
- 💰 Crowdfunding campaigns for legal and recovery support  
- 📈 Emotional healing dashboard for tracking progress  
- 🧑‍🤝‍🧑 Anonymous survivor story sharing and support  
## 🏗️ Tech Stack

### 🔧 Backend – ABP Boilerplate (ASP.NET Core)

- Modular, layered architecture (Domain, Application, Web)  
- Identity and Role management  
- Multitenancy support (optional)  
- API endpoints secured via JWT  
- Entity Framework Core for data access  

### 🖥️ Frontend – Next.js + TypeScript (TSX)

- Client-side rendering and static site generation  
- Strong type safety with TypeScript  
- Component-based UI (React)  
- API integration with backend via REST 
- Secure anonymous sessions using tokens  


## 📦 Installation

### 🔧 Backend (ABP Boilerplate – ASP.NET Core)

1. **Clone the backend repository:**

   ```bash
   https://github.com/KatlehoMadaba/resilience
   cd aspnet-core

2. Set up the database
Create a new database in SQL Server (or PostgreSQL, depending on your configuration). Update the appsettings.json connection string accordingly.

3.Apply migrations:
```
dotnet ef database update
```
4.Run the backend server:
```
dotnet run
```
5.API should now be available at:
```
https://localhost:44311
```
### 🖥️ Frontend – Next.js + TypeScript (TSX)
```
git clone https://github.com/KatlehoMadaba/resilience
cd Frontend
run frontend
npm run dev
Open the browser and navigate to the link provided in the terminal (usually http://localhost:3000).


```
### 🖥️ Install Dependencies
npm install react-icons
npm install antd npm install redux-actions npm install @ant-design/icons npm install axios npm install @reduxjs/toolkit react-redux npm install --save-dev @types/react-redux npm install react-toastify npm install --save-dev @types/moment npm install dayjs npm install jwt-decode npm install @react-google-maps/api npm install face-api.js npm install @google/generative-ai npm install lodash.debounc
## Usage

```
```

## Contributing


## License


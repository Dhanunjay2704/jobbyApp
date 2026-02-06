# 🧑‍💼 Jobby App

A React-based job search application.  
The app allows users to authenticate, browse jobs, apply filters, and view detailed job information.

---

## 🔗 Live Demo
👉 https://kdhanunjaya.ccbp.tech/

---

## 📌 Features

### 🔐 Authentication
- Login with valid credentials
- Display error message for invalid credentials
- JWT-based authentication using cookies
- Protected routes for authenticated users

### 🏠 Home Route
- Home page after successful login
- “Find Jobs” button navigates to Jobs route

### 💼 Jobs Route
- Fetches and displays profile details
- Fetches and displays jobs list
- Loader during API calls
- Failure view with Retry option
- No Jobs view when jobs list is empty
- Search jobs using keyword
- Filter jobs by:
  - Employment Type (multiple selection)
  - Salary Range
- Supports multiple filters simultaneously

### 📄 Job Item Details Route
- Displays job details
- Shows similar jobs
- Retry option on failure
- Visit button opens company website in a new tab

### 🚫 Not Found Route
- Displays Not Found page for invalid routes

### 🧭 Header
- Logo navigates to Home
- Home and Jobs navigation links
- Logout button redirects to Login route

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Routing:** React Router DOM
- **API Calls:** Fetch API
- **Authentication:** JWT (Cookies)
- **Styling:** CSS
- **Package Manager:** npm / pnpm

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Login/
│   ├── Home/
│   ├── Jobs/
│   ├── JobItemDetails/
│   ├── Header/
│   ├── NotFound/
│   ├── Profile/
│   ├── Filters/
│
├── App.js
├── index.js
└── setupTests.js
```

> All components are placed inside the `src/components` directory as per instructions.

---


## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Start the Application
```bash
npm start
```

---


Happy Coding 🚀

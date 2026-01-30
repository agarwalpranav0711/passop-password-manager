

```markdown
# 🔐 PassOP – Password Manager

PassOP is a clean, responsive password manager web app built using **React** and **Tailwind CSS**. It allows users to securely store, view, edit, and delete passwords directly in the browser using `localStorage`.

---

## 📑 Table of Contents
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started-run-locally)
- [📂 Project Structure](#-project-structure)
- [🧠 How It Works](#-how-it-works)
- [⚠️ Security Notice](#️-security-notice)
- [🔮 Future Improvements](#-future-improvements)

---

## ✨ Features

* ➕ **Add Passwords:** Save site URLs, usernames, and passwords instantly.
* ✏️ **Edit & Update:** Modify existing entries with a single click.
* 🗑️ **Delete:** Remove entries you no longer need.
* 📋 **Copy to Clipboard:** Quickly copy site names, usernames, or passwords.
* 🔔 **Toast Notifications:** Beautiful alerts powered by `react-toastify`.
* 👁️ **Toggle Visibility:** Show/hide passwords for added privacy while viewing.
* 💾 **Persistent Storage:** Data stays saved even after refreshing, thanks to `localStorage`.
* 📱 **Fully Responsive:** Optimized for mobile, tablet, and desktop views.

---

## 📸 Screenshots


---

## 🛠️ Tech Stack

**Frontend:**
* **React (Vite):** Modern library for building user interfaces.
* **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
* **React Toastify:** For elegant, non-blocking notifications.
* **Font Awesome:** For intuitive UI icons.

**Storage:**
* **Browser localStorage:** Storing data on the client side without a backend.

---

## 📂 Project Structure

```text
passop-password-manager/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Manager.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│   └── icons/
│
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

```

---

## 🚀 Getting Started (Run Locally)

1️⃣ **Clone the repository**

```bash
git clone [https://github.com/agarwalpranav0711/passop-password-manager.git](https://github.com/agarwalpranav0711/passop-password-manager.git)

```

2️⃣ **Navigate into the project**

```bash
cd passop-password-manager

```

3️⃣ **Install dependencies**

```bash
npm install

```

4️⃣ **Start the development server**

```bash
npm run dev

```

The app will run at: `http://localhost:5173`

---

## 🧠 How It Works

* **State Management:** React state keeps the UI in sync with user inputs.
* **Persistence:** The app reads from and writes to `localStorage` to ensure data survives page refreshes.
* **CRUD Operations:** Implements Create, Read, Update, and Delete logic within the `Manager.jsx` component.

---

## ⚠️ Security Notice

> [!CAUTION]
> This project is for **learning and portfolio purposes only**.
> * ❌ Does **NOT** encrypt passwords.
> * ❌ Does **NOT** use authentication.
> * ❌ Stores data in plain text in the browser.
> **Do not use this for real-world passwords.**
> 
> 

---

## 🔮 Future Improvements

* [ ] 🔐 **Encryption:** Use `crypto-js` to encrypt passwords before storing.
* [ ] 🌐 **Backend:** Integrate Node.js + Express.
* [ ] 🗄️ **Database:** Add MongoDB for cloud storage.
* [ ] 👤 **Auth:** Implement User Login/Signup.
* [ ] 🌙 **Dark Mode:** Add a theme switcher.

---

## 👤 Author

**Pranav Agarwal**

* GitHub: [@agarwalpranav0711](https://www.google.com/search?q=https://github.com/agarwalpranav0711)

---

⭐ **If you like this project, give it a star on GitHub!**


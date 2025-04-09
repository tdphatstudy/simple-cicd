# 🚀 Demo Project: Docker & GitHub CI/CD

This is a simple Node.js project designed to **demonstrate Dockerization and CI/CD setup using GitHub Actions**. The goal is not about building features, but to **showcase the end-to-end development workflow** from coding to deployment.

---

## 🎯 Goals

- ✅ Setup a basic Node.js environment
- ✅ Dockerize the application
- ✅ Configure GitHub CI/CD:
  - Run tests
  - Lint code
  - Build Docker image
  - Run security checks
- ✅ Block PR merge unless all checks pass
- ✅ Use Pull Request templates

---

## ⚙️ Technologies

- **Node.js** + Express
- **Docker** + Docker Compose
- **GitHub Actions**
- **Jest / Supertest** (for testing)
- **ESLint** (for linting)
- **Gitleaks / CodeQL** (for security)

---

## 📦 CI/CD Workflow (Triggered on Pull Requests to `main`)

1. Checkout the code
2. Install dependencies via `npm ci`
3. Run ESLint
4. Run test suite
5. Build Docker image
6. Run Gitleaks & CodeQL security checks


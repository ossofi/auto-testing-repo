# auto-testing-repo

**Cypress Test Automation Project**

## Overview

Automated UI tests for [DemoQA](https://demoqa.com/select-menu) using Cypress, structured with the Page Object Model (POM).

---

## Setup

### Install dependencies:

```bash
git clone https://github.com/ossofi/auto-testing-repo/tree/ui_testing
cd auto-testing-repo
npm install
```

### Run tests:

```bash
npx cypress open                    # Open Cypress UI
npx cypress run                     # Run all tests headless
npx cypress run --browser chrome    # Run in Chrome
npx cypress run --browser firefox   # Run in Firefox
```

---

## Reporting 

### Mochawesome

```bash
npx cypress run --reporter mochawesome
```

Reports saved in:
```
cypress/reports/index.html
```

### Allure

```bash
npx cypress run --reporter allure-cypress
npx allure generate cypress/allure-results --clean
npx allure open
```

---

## Screenshots & Video

Saved on failure in:
- `cypress/screenshots/`
- `cypress/videos/`

---

## CI/CD – GitHub Actions

Tests run automatically via `.github/workflows/cypress.yml`.

---

## Contributor Guide

```bash
# Create a branch:
git checkout -b feature-branch

# Commit changes:
git commit -m "Added new test"

# Push & open a Pull Request.
```

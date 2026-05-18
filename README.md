# 🧪 Cypress E2E Test Automation Framework

A comprehensive end-to-end test automation framework for [Practice Software Testing - Toolshop v5.0](https://practicesoftwaretesting.com/), built with **Cypress** and implemented in two approaches: traditional spec files and **BDD (Behavior-Driven Development)** using Gherkin & Cucumber.

---

## 📁 Project Structure

```
cypress/
├── e2e/
│   ├── spec.cy.js                  # Traditional Cypress test specs
│   └── features/                   # BDD feature files (.feature)
│       ├── registration.feature
│       ├── login.feature
│       ├── logout.feature
│       ├── forgotPassword.feature
│       ├── contact.feature
│       ├── search.feature
│       └── cart.feature
├── support/
│   ├── POM/                        # Page Object Model classes
│   │   ├── registerInfoPOM.js
│   │   ├── login-POM.js
│   │   ├── home-POM.js
│   │   ├── ProductPage-POM.js
│   │   ├── CartPOM.js
│   │   ├── CheckOut-POM.js
│   │   ├── Payment-POM.js
│   │   ├── ContactPage-POM.js
│   │   ├── ForgetPassword-POM.js
│   │   └── searchPOM.js
│   ├── step_definitions/           # BDD step definitions
│   │   ├── common_steps.js
│   │   ├── registration_steps.js
│   │   ├── login_steps.js
│   │   ├── logout_steps.js
│   │   ├── forgotPassword_steps.js
│   │   ├── contact_steps.js
│   │   ├── search_steps.js
│   │   └── cart_steps.js
│   ├── commands.js                 # Custom Cypress commands
│   ├── formInfo.js                 # Form field custom commands
│   └── e2e.js                      # Support file entry point
└── fixtures/
    └── example.json                # Test data / URLs
```

---

## ✅ Test Coverage

| Module           | Test Cases |
|------------------|-----------|
| Registration     | Valid data, invalid email, empty fields, duplicate email, invalid DOB, invalid phone, invalid name, invalid password |
| Login            | Valid credentials, invalid password, empty fields, invalid email format, unregistered email |
| Logout           | Successful logout and redirect |
| Forgot Password  | Password reset flow |
| Contact Us       | Valid submission with/without attachment, empty fields |
| Search           | Existing product, non-existing product, numeric query |
| Cart & Checkout  | Add to cart, out-of-stock product, buy as logged-in user, buy as guest, remove product, quantity validation |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Cypress](https://www.cypress.io/) | E2E testing framework |
| JavaScript | Test scripting |
| [Cucumber / Gherkin](https://cucumber.io/) | BDD — human-readable Given/When/Then scenarios |
| [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) | Cucumber integration with Cypress |
| Page Object Model (POM) | Maintainable & reusable test structure |
| Custom Cypress Commands | Abstracted reusable actions |
| Fixtures | Centralized test data management |
| GitHub Actions | CI/CD — automated test runs on push/PR |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### Running Tests

**Open Cypress Test Runner (interactive):**
```bash
npx cypress open
```

**Run all tests headlessly:**
```bash
npx cypress run
```

**Run tests in Chrome:**
```bash
npx cypress run --browser chrome
```

---

## ⚙️ CI/CD

This project uses **GitHub Actions** to automatically run all Cypress tests on every `push` or `pull request` to the `main` branch.

- Screenshots are uploaded as artifacts on test failure
- Videos are always uploaded as artifacts

See [`.github/workflows/cypress.yml`](.github/workflows/cypress.yml) for the full pipeline configuration.

---

## 🔑 Custom Cypress Commands

Defined in `cypress/support/formInfo.js` and `commands.js`:

| Command | Description |
|---------|-------------|
| `cy.firstName()` | Gets the first name input field |
| `cy.lastName()` | Gets the last name input field |
| `cy.email()` | Gets the email input field |
| `cy.password()` | Gets the password input field |
| `cy.login(email, password)` | Types email and password |
| `cy.clickSubmit()` | Clicks the submit button |
| `cy.loginSubmit()` | Clicks the login submit button |
| `cy.dob()` | Gets the date of birth field |
| `cy.phone()` | Gets the phone number field |
| `cy.street()`, `cy.city()`, etc. | Gets address-related fields |

---

## 📊 Test Data

Test data and URLs are managed via Cypress fixtures in `cypress/fixtures/example.json`:

```json
{
  "contactUsURL": "https://practicesoftwaretesting.com/contact",
  "registrationURL": "https://practicesoftwaretesting.com/auth/register",
  "loginURL": "https://practicesoftwaretesting.com/auth/login",
  "homepageURL": "https://practicesoftwaretesting.com/"
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is for educational purposes as part of a university assignment.

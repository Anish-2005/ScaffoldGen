# 🚀 ScaffoldGen

<div align="center">

![ScaffoldGen Logo](https://img.shields.io/badge/ScaffoldGen-CLI-orange?style=for-the-badge&logo=terminal&logoColor=white)
![Version](https://img.shields.io/badge/version-0.1.0-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)

*A powerful command-line interface that connects interface builders and empowers you to create seamless workflows and boost your productivity.*

[🌐 Live Demo](https://scaffoldgen-zeta.vercel.app/) • [📖 Documentation](#documentation) • [🚀 Quick Start](#quick-start)

![ScaffoldGen Preview](./preview.png)

</div>

---

## ✨ Features

<div align="center">

### 🛠️ Project Scaffolding
- **Instant Project Creation**: Generate complete projects with pre-configured templates
- **Multiple Frameworks**: Support for Next.js, React, Vue, and more
- **Template System**: Choose from various starter templates (TypeScript, JavaScript, etc.)

### 🧩 Component Generation
- **Smart Components**: Generate React components with TypeScript support
- **Multiple Formats**: RFC, arrow functions, class components
- **Styling Options**: Tailwind CSS, Styled Components, CSS Modules

### 🛣️ Route Management
- **Dynamic Routes**: Create routes with custom handlers
- **API Routes**: Generate RESTful API endpoints
- **Middleware Support**: Built-in authentication and validation

### ⚙️ Configuration Management
- **Global Settings**: Configure default languages, frameworks, and preferences
- **Project-specific Configs**: Per-project customization
- **Environment Setup**: Automatic environment variable management

</div>

---

## 📦 Installation

### Prerequisites
- **Node.js** 18+ ✅
- **npm** or **yarn** ✅
- **Git** ✅

### Install ScaffoldGen CLI

```bash
# Using npm
npm install -g scaffoldgen

# Using yarn
yarn global add scaffoldgen

# Using npx (run without installation)
npx scaffoldgen
```

### Verify Installation

```bash
scaffoldgen --version
# Output: ScaffoldGen v0.1.0
```

---

## 🚀 Quick Start

### 1. Create Your First Project

```bash
# Navigate to your projects directory
cd ~/projects

# Create a new Next.js project with TypeScript and Tailwind
scaffoldgen new my-awesome-app --template next-ts --style tailwind

# Navigate into your new project
cd my-awesome-app

# Install dependencies and start development server
npm install
npm run dev
```

### 2. Generate Components

```bash
# Generate a React functional component
scaffoldgen generate component UserProfile --type rfc

# Generate a component with TypeScript
scaffoldgen generate component ProductCard --type rfc --typescript

# Generate multiple components at once
scaffoldgen generate component Header Footer Sidebar --type rfc
```

### 3. Create Routes

```bash
# Create an authentication route with login/register handlers
scaffoldgen create route auth --handler login,register

# Create an API route
scaffoldgen create route api/users --method GET,POST,PUT,DELETE

# Create a protected route with middleware
scaffoldgen create route dashboard --middleware auth
```

### 4. Configure Settings

```bash
# Set default language
scaffoldgen config set default-lang typescript

# Set default framework
scaffoldgen config set default-framework nextjs

# Set default styling approach
scaffoldgen config set default-style tailwind
```

---

## 📖 Usage Examples

### Terminal Animation
```
~> cd web_development
~> scaffoldgen new **my-awesome-app** --template next-ts --style tailwind
~> scaffoldgen generate **component** UserProfile --type rfc
~> scaffoldgen create **route** auth --handler login,register
~> scaffoldgen config set **default-lang** python
```

### Project Structure Generation

```
my-awesome-app/
├── 📁 components/
│   ├── 📄 UserProfile.tsx
│   ├── 📄 ProductCard.tsx
│   └── 📄 Header.tsx
├── 📁 pages/
│   ├── 📄 index.tsx
│   ├── 📄 auth/
│   │   ├── 📄 login.tsx
│   │   └── 📄 register.tsx
│   └── 📄 dashboard.tsx
├── 📁 api/
│   └── 📄 users.ts
├── 📁 styles/
│   └── 📄 globals.css
└── 📄 package.json
```

---

## 🎨 Templates & Themes

### Available Templates

| Template | Description | Technologies |
|----------|-------------|--------------|
| `next-ts` | Next.js with TypeScript | Next.js, TypeScript, Tailwind |
| `next-js` | Next.js with JavaScript | Next.js, JavaScript, Tailwind |
| `react-ts` | React with TypeScript | React, TypeScript, Vite |
| `vue-ts` | Vue.js with TypeScript | Vue 3, TypeScript, Vite |
| `express-ts` | Express.js API | Express, TypeScript, Node.js |

### Styling Options

- **Tailwind CSS** - Utility-first CSS framework
- **Styled Components** - CSS-in-JS solution
- **CSS Modules** - Scoped CSS modules
- **Sass/SCSS** - Enhanced CSS preprocessor

---

## 🛠️ Commands Reference

### Project Commands
```bash
scaffoldgen new <project-name> [options]    # Create new project
scaffoldgen init [options]                  # Initialize in existing directory
scaffoldgen build                           # Build project for production
scaffoldgen dev                             # Start development server
```

### Generation Commands
```bash
scaffoldgen generate component <name> [options]  # Generate component
scaffoldgen generate page <name> [options]       # Generate page
scaffoldgen generate api <name> [options]        # Generate API route
scaffoldgen generate model <name> [options]      # Generate data model
```

### Configuration Commands
```bash
scaffoldgen config list                      # List all configurations
scaffoldgen config get <key>                # Get configuration value
scaffoldgen config set <key> <value>        # Set configuration value
scaffoldgen config reset                    # Reset to default settings
```

---

## 🌟 Key Benefits

<div align="center">

| Feature | Benefit |
|---------|---------|
| ⚡ **Fast Setup** | Create projects in seconds, not hours |
| 🎯 **Type Safety** | Full TypeScript support with intelligent type generation |
| 🎨 **Modern Stack** | Latest frameworks and best practices built-in |
| 🔧 **Customizable** | Extensive configuration options for your workflow |
| 📱 **Responsive** | Mobile-first design with responsive components |
| 🚀 **Optimized** | Production-ready builds with performance optimization |

</div>

---

## 📊 Performance Metrics

- **⚡ Build Time**: < 2 seconds for component generation
- **📦 Bundle Size**: Optimized with tree-shaking
- **🎯 Type Coverage**: 100% TypeScript support
- **🚀 Deployment**: One-command deployment to Vercel, Netlify, etc.

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/scaffoldgen.git
cd scaffoldgen

# Install dependencies
npm install

# Start development
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Code Style

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for consistent formatting
- **Husky** for git hooks

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js** - The React framework for production
- **Tailwind CSS** - A utility-first CSS framework
- **Framer Motion** - A production-ready motion library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon toolkit

---

## 📞 Support

- 📧 **Email**: support@scaffoldgen.dev
- 💬 **Discord**: [Join our community](https://discord.gg/scaffoldgen)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/scaffoldgen/issues)
- 📚 **Documentation**: [Full Docs](https://docs.scaffoldgen.dev)

---

<div align="center">

**Made with ❤️ by the ScaffoldGen Team**

⭐ **Star us on GitHub** | 🐦 **Follow us on Twitter** | 📺 **Subscribe on YouTube**

[⬆️ Back to Top](#-scaffoldgen)

</div>
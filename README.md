# Nxt Trendz

A modern e-commerce web application built with React that allows users to browse fashion products, apply filters, and manage their shopping cart.

## Features

- 🔐 User authentication with JWT tokens
- 🛍️ Product browsing with category and price filters
- ⭐ Rating-based product filtering
- 🔍 Search functionality
- 🛒 Shopping cart with quantity management
- 📱 Responsive design for mobile and desktop
- 🎨 Modern UI with loading states and error handling

## Tech Stack

- **Frontend**: React 17
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Styling**: CSS
- **HTTP Client**: Fetch API
- **Authentication**: JWT tokens stored in cookies

## Getting Started

### Prerequisites

- Node.js (version 10.13 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nxt-trendz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint for code linting
- `npm run format` - Formats code with Prettier

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── LoginForm/      # Authentication form
│   ├── Products/       # Products page
│   ├── Cart/          # Shopping cart
│   └── ...
├── context/            # React Context for state management
├── App.js             # Main application component
├── index.js           # Application entry point
└── App.css           # Global styles
```

## API Endpoints

The app integrates with the following APIs:
- `https://apis.ccbp.in/login` - User authentication
- `https://apis.ccbp.in/products` - Product catalog

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is part of a learning curriculum and is not licensed for commercial use.

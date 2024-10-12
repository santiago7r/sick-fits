# Fullstack Advanced React and GraphQL - Sick Fits Project

Welcome to the **Fullstack Advanced React and GraphQL** project! This repository contains the code and resources for building a full-stack eCommerce application, Sick Fits, using modern React.js and GraphQL.

## Project Overview

This project is based on the course from **AdvancedReact.com**, which teaches you how to build a fully functional full-stack application with **React.js** and **GraphQL**.

In this project, you will learn to create an online store called **Sick Fits**, complete with product listings, user authentication, and the ability to upload photos, handle payments, and much more. The application is built with **React.js** on the frontend and a **GraphQL API** powered by **Node.js** on the backend.

## Features

- **GraphQL API**: Built with Node.js, providing robust query and mutation capabilities for our application.
- **React & Apollo**: The frontend is built with modern React.js, integrated with Apollo Client for efficient data fetching using GraphQL.
- **Authentication**: Secure user authentication, including signup, login, and account management.
- **Email Sending**: Automatic email sending functionality for notifications and user interaction.
- **File Upload**: Uploading images such as product photos with cloud storage.
- **Caching**: Efficient data caching with Apollo Client to minimize redundant data fetching.
- **Testing**: Comprehensive test coverage with nearly six hours of dedicated testing content to ensure the robustness of your application.

## Project Setup

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A code editor (such as [Visual Studio Code](https://code.visualstudio.com/))

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/sick-fits.git
   cd sick-fits
   ```

2. **Install dependencies for both frontend and backend:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development servers:**

   For the backend (GraphQL API):

   ```bash
   cd backend
   npm run dev
   ```

   For the frontend (React & Apollo):

   ```bash
   cd frontend
   npm run dev
   ```

4. **Access the application**:

   Navigate to `http://localhost:3000` to view the application in the browser.### Environment Variables

Make sure to set up your `.env` file with the following environment variables:

```bash
# Backend
DATABASE_URL=<Your Database URL>
FRONTEND_URL=http://localhost:3000
CLOUDINARY_API_KEY=<Your Cloudinary API Key>
CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
CLOUDINARY_NAME=<Your Cloudinary Account Name>

# Frontend
NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:4000/graphql
```

## Testing

The project includes comprehensive testing, covering both the frontend and backend. To run the tests, use the following command:

```bash
npm run test
```

The testing section covers the following topics:

- Unit testing with **Jest**
- Integration testing
- End-to-end testing with **Cypress**

## Folder Structure

```bash
sick-fits/
│
├── backend/          # Backend code (GraphQL API with Node.js)
│   ├── prisma/       # Database schema and migrations
│   └── src/          # Main source code for GraphQL API
│
├── frontend/         # Frontend code (React.js and Apollo Client)
│   ├── components/   # Reusable React components
│   ├── pages/        # Next.js pages
│   └── styles/       # Global styles and CSS modules
│
└── tests/            # Testing configuration and test files
```

## Additional Resources

- **GraphQL Documentation**: Learn more about how to work with GraphQL [here](https://graphql.org/).
- **Apollo Client**: Get familiar with Apollo Client for efficient GraphQL data fetching [here](https://www.apollographql.com/docs/react/).
- **Next.js**: This project uses Next.js for server-side rendering and routing. Learn more about it [here](https://nextjs.org/).

## License

This project is licensed under the MIT License. Feel free to use the code and resources for your own projects or as a learning resource.

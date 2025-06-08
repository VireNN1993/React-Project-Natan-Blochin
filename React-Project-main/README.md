# Business Cards Platform

A modern, responsive business card platform built with React, TypeScript, and Tailwind CSS. This application allows users to create, manage, and discover digital business cards.

## Features

### For All Users

- 🏠 **Browse Cards**: View all available business cards
- 🔍 **Search Functionality**: Find cards by title, subtitle, description, or location
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ❤️ **Favorites**: Like and save favorite business cards (requires login)

### For Registered Users

- 👤 **User Profile**: Create and manage your personal profile
- ✏️ **Edit Profile**: Update your personal information
- 📋 **My Favorites**: View all your liked business cards
- 🔐 **Secure Authentication**: JWT-based authentication system

### For Business Users

- 💼 **Create Cards**: Design and publish your business cards
- 📊 **My Cards**: Manage all your created business cards
- ✏️ **Edit Cards**: Update your business card information
- 🗑️ **Delete Cards**: Remove cards you no longer need

### For Administrators

- 👥 **User Management**: View and manage all users
- 🛠️ **Admin Panel**: Access to administrative features
- 🎛️ **Business Status**: Toggle user business status

## Technology Stack

- **Frontend**: React 19.1.0 with TypeScript
- **Styling**: Tailwind CSS 4.1.4 + Flowbite React components
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM 7.5.3
- **Forms**: React Hook Form with Joi validation
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Notifications**: React Toastify
- **Build Tool**: Vite 6.2.6

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/natanblochin/React-Project-main-main.git
   cd React-Project-main-main/React-Project-main
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run deploy` - Deploy to GitHub Pages

## API Integration

This application connects to a RESTful API backend. The base URL is configured in `src/services/userService.ts`.

### Main API Endpoints:

- **Auth**: `/users/login`, `/users` (signup)
- **Users**: `/users/:id` (get/update/delete user)
- **Cards**: `/cards` (CRUD operations)

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── redux/              # Redux store and slices
├── routes/             # Route components and guards
├── services/           # API service functions
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── auth/               # Authentication components
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Key Features Implementation

### Authentication & Authorization

- JWT token-based authentication
- Protected routes for authenticated users
- Role-based access control (Regular, Business, Admin)
- Automatic token refresh and logout

### State Management

- Redux Toolkit for global state
- User authentication state
- Cards collection with search functionality
- Optimistic UI updates

### Responsive Design

- Mobile-first approach
- Tailwind CSS utility classes
- Flowbite React components
- Dark mode support

### Form Handling

- React Hook Form for performance
- Joi schema validation
- Real-time form validation
- Error handling and user feedback

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact:

- Email: natanblohen@gmail.com
- GitHub: [@natanblochin](https://github.com/natanblochin)

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components by [Flowbite React](https://flowbite-react.com/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

// src/Services/authService.jsx

const AuthService = {
    login: (username, password) => {
      // Implement your authentication logic here
      // For simplicity, always consider it as successful
      localStorage.setItem('user', JSON.stringify({ username }));
    },
    logout: () => {
      localStorage.removeItem('user');
    },
    getUser: () => {
      return JSON.parse(localStorage.getItem('user'));
    },
    isAuthenticated: () => {
      return localStorage.getItem('user') !== null;
    },
  };
  
  export default AuthService;
  
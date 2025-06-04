// rds-clone/src/pages/LoginPage.tsx
import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PageFooter from '../components/common/PageFooter';
import LoginForm from '../components/auth/LoginForm';
// import { useNavigate } from 'react-router-dom'; // You'll need this if using react-router

const LoginPage: React.FC = () => {
  // const navigate = useNavigate(); // For react-router

  const handleLoginSuccess = () => {
    console.log("Login successful, navigating to dashboard...");
    // navigate('/dashboard'); // Example navigation with react-router
    // For now, we'll just log it. You'll replace this with actual navigation.
    alert("Login Successful! (Implement navigation to dashboard)");
  };

  return (
    <div className="min-h-screen flex flex-col bg-nsu-light-bg">
      <PageHeader />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </main>
      <PageFooter />
    </div>
  );
};

export default LoginPage;
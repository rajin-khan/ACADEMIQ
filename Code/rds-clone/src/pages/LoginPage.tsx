// rds-clone/src/pages/LoginPage.tsx
import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PageFooter from '../components/common/PageFooter';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  const handleLoginSuccess = () => {
    console.log("Login successful, navigating to dashboard...");
    alert("Login Successful! (Implement navigation to dashboard)");
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-primary"> {/* Ensure base bg is dark */}
      <PageHeader />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </main>
      <PageFooter />
    </div>
  );
};

export default LoginPage;
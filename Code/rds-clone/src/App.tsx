// rds-clone/src/App.tsx
import React from 'react';
import LoginPage from './pages/LoginPage'; // Make sure LoginPage is imported
import DashboardPage from './pages/DashboardPage'; // You can comment this out for now

function App() {
  // To show the LoginPage:
//   return (
//     <>
//       <LoginPage />
//     </>
//   );

  // To show the DashboardPage (what you likely have now for testing it):
  return (
    <>
      <DashboardPage />
    </>
  );
}

export default App;
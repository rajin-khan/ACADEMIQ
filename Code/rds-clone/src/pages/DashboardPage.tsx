// rds-clone/src/pages/DashboardPage.tsx
import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import Navbar from '../components/dashboard/Navbar';
import type { ActiveNavItems } from '../components/dashboard/Navbar';
import UserProfileCard from '../components/dashboard/UserProfileCard';
import FacultyAdvisorCard from '../components/dashboard/FacultyAdvisorCard';
import DashboardFooter from '../components/common/DashboardFooter';

const DashboardPage: React.FC = () => {
  const userData = {
    userName: "Adib Ar Rahman Khan",
    userId: "2212708042",
    userEmail: "adib.khan01@northsouth.edu",
    degree: "BS in CSE",
    curriculum: "BS in CSE - 130 Credit Curriculum",
    avatarUrl: "https://rds3.northsouth.edu/assets/images/avatars/profile-pic.jpg",
  };

  const advisorData = {
    advisorId: "TNS1",
    room: "SAC8XX",
    name: "Tanzilah Noor Shabnam",
    email: "tanzilah.shabnam@northsouth.edu",
  };

  const [currentNavItem, setCurrentNavItem] = useState<ActiveNavItems>("Home");

  return (
    <div className="min-h-screen flex flex-col bg-dark-primary"> {/* Base dark background */}
      <DashboardHeader userName={userData.userName} userId={userData.userId} />
      <Navbar activeItem={currentNavItem} />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-light-primary">
            Welcome, <span className="text-gradient-pink-orange">{userData.userName}</span>
          </h1>
          {/* Example buttons for testing nav state - can be removed */}
          <div className="mt-3 space-x-2 hidden">
            <button onClick={() => setCurrentNavItem("Home")} className="p-1 text-xs bg-dark-tertiary text-light-secondary rounded hover:bg-dark-secondary">Set Home</button>
            <button onClick={() => setCurrentNavItem("Advising")} className="p-1 text-xs bg-dark-tertiary text-light-secondary rounded hover:bg-dark-secondary">Set Advising</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <UserProfileCard {...userData} />
          </div>
          <div className="lg:col-span-2 space-y-8"> {/* Added space-y for multiple cards */}
            <FacultyAdvisorCard advisor={advisorData} />
            {/* You can add more cards or components here in the future */}
          </div>
        </div>
      </main>
      
      <DashboardFooter />
    </div>
  );
};

export default DashboardPage;
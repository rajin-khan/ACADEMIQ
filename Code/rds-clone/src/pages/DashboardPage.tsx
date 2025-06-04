// rds-clone/src/pages/DashboardPage.tsx
import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import Navbar from '../components/dashboard/Navbar'; // Import Navbar default export
import type { ActiveNavItems } from '../components/dashboard/Navbar'; // Import ActiveNavItems as a type
import UserProfileCard from '../components/dashboard/UserProfileCard';
import FacultyAdvisorCard from '../components/dashboard/FacultyAdvisorCard';
import DashboardFooter from '../components/common/DashboardFooter';

const DashboardPage: React.FC = () => {
  // Dummy data - replace with actual data from API/state
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

  // Example: Set the active navigation item. In a real app, this would come from routing.
  const [currentNavItem, setCurrentNavItem] = useState<ActiveNavItems>("Home");

  // You could have functions to change currentNavItem, e.g., when a sub-page loads
  // For now, we'll just pass it.

  return (
    <div className="min-h-screen flex flex-col bg-nsu-light-bg">
      <DashboardHeader userName={userData.userName} userId={userData.userId} />
      <Navbar activeItem={currentNavItem} /> {/* Pass the activeItem prop */}
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-nsu-dark-text">
            Welcome, {userData.userName}
          </h1>
          {/* Example to test changing active nav item - remove in final */}
          <div className="mt-2 space-x-2">
            <button onClick={() => setCurrentNavItem("Home")} className="p-1 text-xs bg-gray-200 rounded hover:bg-gray-300">Set Home Active</button>
            <button onClick={() => setCurrentNavItem("Advising")} className="p-1 text-xs bg-gray-200 rounded hover:bg-gray-300">Set Advising Active</button>
            <button onClick={() => setCurrentNavItem("Profile")} className="p-1 text-xs bg-gray-200 rounded hover:bg-gray-300">Set Profile Active</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <UserProfileCard {...userData} />
          </div>
          <div className="lg:col-span-2">
            <FacultyAdvisorCard advisor={advisorData} />
          </div>
        </div>
      </main>
      
      <DashboardFooter />
    </div>
  );
};

export default DashboardPage;
// rds-clone/src/components/dashboard/DashboardHeader.tsx
import React, { useState } from 'react';
import { Bars3Icon, BellIcon, UserCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

interface DashboardHeaderProps {
  onToggleSidebar?: () => void; // For mobile sidebar, if you implement one
  userName: string;
  userId: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onToggleSidebar, userName, userId }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side: Logo and optional mobile menu toggle */}
          <div className="flex items-center">
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="mr-4 text-gray-500 hover:text-nsu-primary focus:outline-none lg:hidden"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            )}
            <a href="#" className="flex items-center">
              <img
                src="/images/logo-wide.png" // Assuming logo is in public/images/
                alt="North South University"
                className="h-10 md:h-12"
              />
            </a>
          </div>

          {/* Right side: User menu */}
          <div className="flex items-center space-x-4">
            {/* Notifications (optional) */}
            {/* <button className="p-1 rounded-full text-gray-400 hover:text-nsu-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nsu-accent">
              <BellIcon className="h-6 w-6" />
            </button> */}

            {/* User dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nsu-accent"
              >
                <img
                  className="h-10 w-10 rounded-full border-2 border-nsu-primary object-cover"
                  src="https://rds3.northsouth.edu/assets/images/avatars/profile-pic.jpg" // Placeholder
                  alt="User avatar"
                />
                <div className="ml-3 hidden md:block text-left">
                  <p className="text-sm font-medium text-nsu-dark-text leading-tight">Welcome,</p>
                  <p className="text-xs text-gray-500 leading-tight">{userId}</p>
                </div>
                 <svg className="ml-2 h-5 w-5 text-gray-400 hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {userMenuOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    <UserCircleIcon className="h-5 w-5 mr-2 text-gray-500" />
                    My Profile
                  </a>
                  <a
                    href="#" // This should link to the logout action
                    onClick={() => alert("Logout clicked! Implement logout.")}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-2 text-gray-500" />
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
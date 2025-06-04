// rds-clone/src/components/dashboard/DashboardHeader.tsx
import React, { useState } from 'react';
import { Bars3Icon, UserCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'; // BellIcon removed for minimalism

interface DashboardHeaderProps {
  onToggleSidebar?: () => void;
  userName: string;
  userId: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onToggleSidebar, userName, userId }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="bg-dark-secondary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {onToggleSidebar && (
              <button
                onClick={onToggleSidebar}
                className="mr-4 text-light-tertiary hover:text-brand-cyan focus:outline-none lg:hidden"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
            )}
            <a href="#" className="flex items-center">
              <img
                src="/images/logo-wide.png"
                alt="North South University"
                className="h-10 md:h-12"
              />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-secondary focus:ring-brand-cyan p-0.5 bg-gradient-to-r from-brand-pink to-brand-orange"
              >
                <img
                  className="h-10 w-10 rounded-full border-2 border-dark-secondary object-cover"
                  src="https://rds3.northsouth.edu/assets/images/avatars/profile-pic.jpg"
                  alt="User avatar"
                />
                <div className="ml-3 hidden md:block text-left mr-2">
                  <p className="text-sm font-medium text-light-primary leading-tight">Welcome,</p>
                  <p className="text-xs text-light-tertiary leading-tight">{userId}</p>
                </div>
                 <svg className={`ml-1 h-5 w-5 text-light-primary hidden md:block transform transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {userMenuOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-xl py-1 bg-dark-secondary ring-1 ring-dark-tertiary focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <a
                    href="#"
                    className="flex items-center px-4 py-3 text-sm text-light-secondary hover:bg-dark-tertiary hover:text-brand-cyan"
                    role="menuitem"
                  >
                    <UserCircleIcon className="h-5 w-5 mr-3 text-light-tertiary" />
                    My Profile
                  </a>
                  <a
                    href="#"
                    onClick={() => alert("Logout clicked! Implement logout.")}
                    className="flex items-center px-4 py-3 text-sm text-light-secondary hover:bg-dark-tertiary hover:text-brand-pink"
                    role="menuitem"
                  >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3 text-light-tertiary" />
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
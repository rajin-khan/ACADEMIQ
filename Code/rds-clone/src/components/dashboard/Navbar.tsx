// rds-clone/src/components/dashboard/Navbar.tsx
import React from 'react';
import NavItem, { SubNavItem } from './NavItem';
import {
  HomeIcon, UserCircleIcon, PencilSquareIcon, TrophyIcon, CreditCardIcon, CalendarDaysIcon,
  BookOpenIcon, CogIcon, XCircleIcon, EnvelopeIcon, QuestionMarkCircleIcon, ArrowLeftOnRectangleIcon, AcademicCapIcon, IdentificationIcon
} from '@heroicons/react/24/outline';

// Define a type for the possible active item labels for better type safety
export type ActiveNavItems = "Home" | "Profile" | "Advising" | "Grades" | "Payments" | "Attendance" | "Degree" | "Services" | "Course Drop" | "SMS History" | "User Guides" | "Logout" | null;

interface NavbarProps {
  activeItem?: ActiveNavItems; // Make activeItem a prop
}

const Navbar: React.FC<NavbarProps> = ({ activeItem = "Home" }) => { // Default to "Home" if not provided

  return (
    <nav className="bg-white shadow-lg">
      <ul className="container mx-auto px-2 sm:px-4 lg:px-6 flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-1 py-2">
        <NavItem icon={<HomeIcon />} label="Home" href="#" isActive={activeItem === "Home"} className="min-w-[100px] md:min-w-0"/>
        
        <NavItem icon={<UserCircleIcon />} label="Profile" isDropdown isActive={activeItem === "Profile"} className="min-w-[100px] md:min-w-0">
          <SubNavItem label="Student Information" href="#" />
          <SubNavItem label="Change Password" href="#" />
          <SubNavItem label="Major Declaration" href="#" />
        </NavItem>

        <NavItem icon={<PencilSquareIcon />} label="Advising" isDropdown isActive={activeItem === "Advising"} className="min-w-[100px] md:min-w-0">
           <SubNavItem label="Advising Window" href="#" />
           <SubNavItem label="Pre-advising" href="#" />
           <SubNavItem label="Advising Slip Print" href="#" />
           <SubNavItem label="Pre Advised Courses" href="#" />
        </NavItem>

        <NavItem icon={<TrophyIcon />} label="Grades" isDropdown isActive={activeItem === "Grades"} className="min-w-[100px] md:min-w-0">
           <SubNavItem label="Grade History" href="#" />
        </NavItem>

        <NavItem icon={<CreditCardIcon />} label="Payments" isDropdown isActive={activeItem === "Payments"} className="min-w-[100px] md:min-w-0">
            <SubNavItem label="Account Status" href="#" />
            <SubNavItem label="Online Payment History" href="#" />
        </NavItem>
        
        <NavItem icon={<CalendarDaysIcon />} label="Attendance" href="#" isActive={activeItem === "Attendance"} className="min-w-[100px] md:min-w-0"/>
        
        <NavItem icon={<IdentificationIcon />} label="Degree" isDropdown isActive={activeItem === "Degree"} className="min-w-[100px] md:min-w-0">
            <SubNavItem label="Academic Progress" href="#" />
            <SubNavItem label="Guideline" href="#" />
        </NavItem>

        <NavItem icon={<CogIcon />} label="Services" isDropdown isActive={activeItem === "Services"} className="min-w-[100px] md:min-w-0">
            <SubNavItem label="Academic Documents" href="#" />
            <SubNavItem label="Car Parking" href="#" />
            <SubNavItem label="Course Exclusion" href="#" />
            {/* Add more services */}
        </NavItem>

        <NavItem icon={<XCircleIcon />} label="Course Drop" href="#" isActive={activeItem === "Course Drop"} className="min-w-[100px] md:min-w-0"/>
        <NavItem icon={<EnvelopeIcon />} label="SMS History" href="#" isActive={activeItem === "SMS History"} className="min-w-[100px] md:min-w-0"/>
        
        <NavItem icon={<QuestionMarkCircleIcon />} label="User Guides" isDropdown isActive={activeItem === "User Guides"} className="min-w-[100px] md:min-w-0">
            <SubNavItem label="Recovery RDS Password" href="#" />
            <SubNavItem label="Access Portal (RDS)" href="#" />
            {/* Add more guides */}
        </NavItem>
        
        <NavItem icon={<ArrowLeftOnRectangleIcon />} label="Logout" href="#" isActive={activeItem === "Logout"} className="min-w-[100px] md:min-w-0"/>
      </ul>
    </nav>
  );
};

export default Navbar;
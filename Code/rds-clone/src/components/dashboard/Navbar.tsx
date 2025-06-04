// rds-clone/src/components/dashboard/Navbar.tsx
import React from 'react';
import NavItem, { SubNavItem } from './NavItem';
import {
  HomeIcon, UserCircleIcon, PencilSquareIcon, TrophyIcon, CreditCardIcon, CalendarDaysIcon,
  CogIcon, XCircleIcon, EnvelopeIcon, QuestionMarkCircleIcon, ArrowLeftOnRectangleIcon, IdentificationIcon
} from '@heroicons/react/24/outline'; // BookOpenIcon removed for brevity, IdentificationIcon used for Degree

export type ActiveNavItems = "Home" | "Profile" | "Advising" | "Grades" | "Payments" | "Attendance" | "Degree" | "Services" | "Course Drop" | "SMS History" | "User Guides" | "Logout" | null;

interface NavbarProps {
  activeItem?: ActiveNavItems;
}

const Navbar: React.FC<NavbarProps> = ({ activeItem = "Home" }) => {
  const navItemBaseClass = "min-w-[110px] md:min-w-0 flex-shrink-0"; // For wrapping behavior

  return (
    <nav className="bg-dark-primary shadow-md border-b border-dark-tertiary">
      <ul className="container mx-auto px-2 sm:px-4 lg:px-6 flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-1 py-1.5">
        <NavItem icon={<HomeIcon />} label="Home" href="#" isActive={activeItem === "Home"} className={navItemBaseClass}/>
        <NavItem icon={<UserCircleIcon />} label="Profile" isDropdown isActive={activeItem === "Profile"} className={navItemBaseClass}>
          <SubNavItem label="Student Information" href="#" />
          <SubNavItem label="Change Password" href="#" />
          <SubNavItem label="Major Declaration" href="#" />
        </NavItem>
        <NavItem icon={<PencilSquareIcon />} label="Advising" isDropdown isActive={activeItem === "Advising"} className={navItemBaseClass}>
           <SubNavItem label="Advising Window" href="#" />
           <SubNavItem label="Pre-advising" href="#" />
           <SubNavItem label="Advising Slip Print" href="#" />
           <SubNavItem label="Pre Advised Courses" href="#" />
        </NavItem>
        <NavItem icon={<TrophyIcon />} label="Grades" isDropdown isActive={activeItem === "Grades"} className={navItemBaseClass}>
           <SubNavItem label="Grade History" href="#" />
        </NavItem>
        <NavItem icon={<CreditCardIcon />} label="Payments" isDropdown isActive={activeItem === "Payments"} className={navItemBaseClass}>
            <SubNavItem label="Account Status" href="#" />
            <SubNavItem label="Online Payment History" href="#" />
        </NavItem>
        <NavItem icon={<CalendarDaysIcon />} label="Attendance" href="#" isActive={activeItem === "Attendance"} className={navItemBaseClass}/>
        <NavItem icon={<IdentificationIcon />} label="Degree" isDropdown isActive={activeItem === "Degree"} className={navItemBaseClass}>
            <SubNavItem label="Academic Progress" href="#" />
            <SubNavItem label="Guideline" href="#" />
        </NavItem>
        <NavItem icon={<CogIcon />} label="Services" isDropdown isActive={activeItem === "Services"} className={navItemBaseClass}>
            <SubNavItem label="Academic Documents" href="#" />
            <SubNavItem label="Car Parking" href="#" />
            <SubNavItem label="Course Exclusion" href="#" />
        </NavItem>
        <NavItem icon={<XCircleIcon />} label="Course Drop" href="#" isActive={activeItem === "Course Drop"} className={navItemBaseClass}/>
        <NavItem icon={<EnvelopeIcon />} label="SMS History" href="#" isActive={activeItem === "SMS History"} className={navItemBaseClass}/>
        <NavItem icon={<QuestionMarkCircleIcon />} label="User Guides" isDropdown isActive={activeItem === "User Guides"} className={navItemBaseClass}>
            <SubNavItem label="Recovery RDS Password" href="#" />
            <SubNavItem label="Access Portal (RDS)" href="#" />
        </NavItem>
        <NavItem icon={<ArrowLeftOnRectangleIcon />} label="Logout" href="#" isActive={activeItem === "Logout"} className={navItemBaseClass}/>
      </ul>
    </nav>
  );
};

export default Navbar;
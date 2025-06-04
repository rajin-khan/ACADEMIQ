// rds-clone/src/components/dashboard/NavItem.tsx
import React, { useState, cloneElement } from 'react';
import type { MouseEvent, ReactNode, JSX } from 'react'; // Use JSX.Element for icon, import type for others
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface NavItemProps {
  icon: JSX.Element; // Changed to JSX.Element, which is React.ReactElement<any, any>
  label: string;
  href?: string;
  isActive?: boolean;
  isDropdown?: boolean;
  children?: ReactNode;
  className?: string; // For additional styling on the <li>
}

// SubNavItemProps remains the same as it seems to be working
export interface SubNavItemProps {
  label: string;
  href?: string;
  isActive?: boolean;
}

export const SubNavItem: React.FC<SubNavItemProps> = ({ label, href = "#", isActive }) => {
  const itemBaseClasses = "group flex items-center px-3 py-2 text-xs font-medium rounded-md transition-colors duration-150";
  const activeClasses = "text-nsu-accent";
  const inactiveClasses = "text-gray-600 hover:text-nsu-primary hover:bg-gray-50";
  return (
    <li>
      <a href={href} className={`${itemBaseClasses} ${isActive ? activeClasses : inactiveClasses} w-full`}>
        <span className="ml-2 mr-2 text-gray-400 group-hover:text-nsu-accent">•</span> {label}
      </a>
    </li>
  );
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, href = "#", isActive, isDropdown, children, className }) => {
  const [isOpen, setIsOpen] = useState(isActive && isDropdown); // Open dropdown if active

  // Clone the icon to add/override className.
  // HeroIcon components accept className.
  // We also merge with any existing className on the passed icon.
  const originalIconClassName = icon.props.className || '';
  const newIconClassName = `h-5 w-5 mr-2 group-hover:text-nsu-accent ${isActive ? 'text-nsu-accent' : 'text-gray-500'} ${originalIconClassName}`.trim();

  const IconComponent = cloneElement(icon, {
    className: newIconClassName,
  });

  const handleToggle = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isDropdown) {
      e.preventDefault(); // Prevent navigation if it's a dropdown toggle
      setIsOpen(!isOpen);
    }
    // If not a dropdown, or if it is but has a href, navigation will proceed naturally
    // unless e.preventDefault() is called unconditionally.
  };
  
  const itemBaseClasses = "group flex items-center px-3 py-3 text-sm font-medium rounded-md transition-colors duration-150";
  const activeClasses = "bg-nsu-accent/10 text-nsu-accent";
  const inactiveClasses = "text-nsu-dark-text hover:bg-gray-100 hover:text-nsu-primary";

  return (
    <li className={`relative ${className || ''}`}>
      <a
        href={href}
        onClick={handleToggle}
        className={`${itemBaseClasses} ${isActive ? activeClasses : inactiveClasses} w-full`}
        // Add ARIA attributes for accessibility if it's a dropdown
        aria-expanded={isDropdown ? isOpen : undefined}
        aria-controls={isDropdown ? `submenu-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined}
      >
        {IconComponent}
        <span className="flex-1">{label}</span>
        {isDropdown && (isOpen ? <ChevronDownIcon className="h-5 w-5 ml-auto text-gray-400" /> : <ChevronRightIcon className="h-5 w-5 ml-auto text-gray-400" />)}
      </a>
      {isDropdown && isOpen && children && (
        <ul 
          id={`submenu-${label.replace(/\s+/g, '-').toLowerCase()}`}
          className="pl-6 mt-1 space-y-1 bg-white rounded-b-md shadow-inner py-2"
        >
          {children}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
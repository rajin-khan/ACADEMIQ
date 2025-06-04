// rds-clone/src/components/dashboard/NavItem.tsx
import React, { useState, cloneElement } from 'react';
import type { MouseEvent, ReactNode, JSX } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface NavItemProps {
  icon: JSX.Element;
  label: string;
  href?: string;
  isActive?: boolean;
  isDropdown?: boolean;
  children?: ReactNode;
  className?: string;
}

export interface SubNavItemProps {
  label: string;
  href?: string;
  isActive?: boolean;
}

export const SubNavItem: React.FC<SubNavItemProps> = ({ label, href = "#", isActive }) => {
  const itemBaseClasses = "group flex items-center pl-10 pr-3 py-2.5 text-xs font-medium rounded-md transition-colors duration-150 w-full";
  const activeClasses = "text-brand-cyan";
  const inactiveClasses = "text-light-tertiary hover:text-light-primary hover:bg-dark-tertiary/50";
  return (
    <li>
      <a href={href} className={`${itemBaseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
        <span className={`mr-3 h-1.5 w-1.5 rounded-full ${isActive ? 'bg-brand-cyan' : 'bg-light-tertiary group-hover:bg-brand-cyan/70'}`}></span>
        {label}
      </a>
    </li>
  );
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, href = "#", isActive, isDropdown, children, className }) => {
  const [isOpen, setIsOpen] = useState(isActive && isDropdown);

  const originalIconClassName = icon.props.className || '';
  const newIconClassName = `h-5 w-5 mr-3 group-hover:text-brand-cyan ${isActive ? 'text-brand-cyan' : 'text-light-tertiary'} ${originalIconClassName}`.trim();

  const IconComponent = cloneElement(icon, { className: newIconClassName });

  const handleToggle = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isDropdown) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };
  
  const itemBaseClasses = "group flex items-center px-4 py-3 text-sm font-medium rounded-md transition-all duration-150 ease-in-out relative overflow-hidden";
  // Gradient for active item background
  const activeClasses = "text-light-primary bg-gradient-to-r from-brand-blue to-brand-cyan shadow-md";
  const inactiveClasses = "text-light-secondary hover:bg-dark-tertiary hover:text-light-primary";

  return (
    <li className={`relative ${className || ''}`}>
      <a
        href={href}
        onClick={handleToggle}
        className={`${itemBaseClasses} ${isActive ? activeClasses : inactiveClasses} w-full`}
        aria-expanded={isDropdown ? isOpen : undefined}
        aria-controls={isDropdown ? `submenu-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined}
      >
        {IconComponent}
        <span className="flex-1">{label}</span>
        {isDropdown && (isOpen ? <ChevronDownIcon className="h-5 w-5 ml-auto text-light-tertiary" /> : <ChevronRightIcon className="h-5 w-5 ml-auto text-light-tertiary" />)}
      </a>
      {isDropdown && isOpen && children && (
        <ul
          id={`submenu-${label.replace(/\s+/g, '-').toLowerCase()}`}
          className="mt-1 space-y-0.5 bg-dark-secondary/30 rounded-b-md py-1" // Slightly different bg for submenu
        >
          {children}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
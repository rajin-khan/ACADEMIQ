// rds-clone/src/components/common/PageHeader.tsx
import React from 'react';

const PageHeader: React.FC = () => {
  return (
    <header className="bg-nsu-primary shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/images/logo-wide.png" // Assuming logo is in public/images/
            alt="North South University" 
            className="h-10 md:h-12" // Adjusted height
          />
        </a>
      </div>
    </header>
  );
};

export default PageHeader;
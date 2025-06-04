// rds-clone/src/components/dashboard/FacultyAdvisorCard.tsx
import React from 'react';

interface AdvisorInfo {
  advisorId: string;
  room: string;
  name: string;
  email: string;
}

interface FacultyAdvisorCardProps {
  advisor: AdvisorInfo;
}

const FacultyAdvisorCard: React.FC<FacultyAdvisorCardProps> = ({ advisor }) => {
  return (
    <div className="bg-dark-secondary shadow-xl rounded-lg p-6 border border-dark-tertiary">
      <h3 className="text-lg font-semibold text-light-primary mb-6 border-b border-dark-tertiary pb-3">
        Faculty Advisor
      </h3>
      <div className="space-y-4 text-sm">
        <div className="flex">
          <span className="font-medium text-light-tertiary w-32 flex-shrink-0">Advisor ID:</span>
          <span className="text-light-secondary">{advisor.advisorId} (Room: <b className="text-light-primary">{advisor.room || 'N/A'}</b>)</span>
        </div>
        <div className="flex">
          <span className="font-medium text-light-tertiary w-32 flex-shrink-0">Faculty Name:</span>
          <span className="text-light-secondary">{advisor.name}</span>
        </div>
        <div className="flex">
          <span className="font-medium text-light-tertiary w-32 flex-shrink-0">Email:</span>
          <a href={`mailto:${advisor.email}`} className="text-brand-cyan hover:text-brand-blue hover:underline truncate">
            {advisor.email}
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-dark-tertiary pt-6">
        <h4 className="text-md font-semibold text-light-primary mb-3">NSU IT Department Helpline</h4>
        <div className="bg-dark-primary/50 p-6 rounded-md text-center text-light-tertiary shadow-sm">
          Facebook Like Box Placeholder
          <p className="text-xs mt-1">(Integration of actual Facebook widget required)</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyAdvisorCard;
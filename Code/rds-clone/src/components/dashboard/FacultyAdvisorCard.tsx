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
    <div className="bg-white shadow-xl rounded-lg p-6">
      <h3 className="text-lg font-semibold text-nsu-dark-text mb-4 border-b pb-2">Faculty Advisor Information</h3>
      <div className="space-y-3 text-sm">
        <div className="flex">
          <span className="font-medium text-gray-600 w-32">Faculty Advisor:</span>
          <span className="text-gray-800">{advisor.advisorId} (Room: <b>{advisor.room || 'N/A'}</b>)</span>
        </div>
        <div className="flex">
          <span className="font-medium text-gray-600 w-32">Faculty Name:</span>
          <span className="text-gray-800">{advisor.name}</span>
        </div>
        <div className="flex">
          <span className="font-medium text-gray-600 w-32">Email:</span>
          <a href={`mailto:${advisor.email}`} className="text-nsu-secondary hover:underline">{advisor.email}</a>
        </div>
      </div>

      {/* Placeholder for Facebook Like Box - you might need a third-party React component for this */}
      <div className="mt-6 border-t pt-6">
        <h4 className="text-md font-semibold text-nsu-dark-text mb-2">NSU IT Department Helpline</h4>
        <div className="bg-gray-100 p-4 rounded-md text-center text-gray-500">
          Facebook Like Box Placeholder
          <p className="text-xs mt-1">(Integration of actual Facebook widget required)</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyAdvisorCard;
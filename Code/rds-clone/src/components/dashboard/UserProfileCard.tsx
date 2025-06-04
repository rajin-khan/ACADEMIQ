// rds-clone/src/components/dashboard/UserProfileCard.tsx
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, CogIcon, EnvelopeIcon, GlobeAltIcon, BookOpenIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface UserProfileCardProps {
  userName: string;
  userId: string;
  userEmail: string;
  degree: string;
  curriculum: string;
  avatarUrl: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  userName, userId, userEmail, degree, curriculum, avatarUrl
}) => {
  const [activityOpen, setActivityOpen] = useState(false);

  const profileItems = [
    { icon: <CogIcon className="h-5 w-5 text-brand-cyan mr-3 flex-shrink-0" />, text: userId },
    { icon: <EnvelopeIcon className="h-5 w-5 text-brand-pink mr-3 flex-shrink-0" />, text: userEmail },
    { icon: <GlobeAltIcon className="h-5 w-5 text-brand-lime mr-3 flex-shrink-0" />, text: `Degree: ${degree}` },
    { icon: <BookOpenIcon className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />, text: `Curriculum: ${curriculum}` },
  ];

  const activityData = [
    { activity: "Faculty Evaluation", semester: "Summer 2025", status: "Not Done", statusColor: "text-brand-orange" },
    { activity: "Faculty Evaluation", semester: "Spring 2025", status: "Done", statusColor: "text-brand-lime" },
    { activity: "Preadvising", semester: "Fall 2025", status: "Not Done", statusColor: "text-brand-orange" },
    { activity: "Payment", semester: "Summer 2025", status: "View", isButton: true },
  ];

  return (
    <div className="bg-dark-secondary shadow-xl rounded-lg p-6 border border-dark-tertiary">
      <div className="flex flex-col items-center">
        <div className="p-1 bg-gradient-to-br from-brand-pink via-brand-purple to-brand-blue rounded-full mb-4">
          <img
            className="w-32 h-32 rounded-full border-4 border-dark-secondary object-cover"
            src={avatarUrl}
            alt={userName}
          />
        </div>
        <h2 className="text-xl font-semibold text-light-primary bg-dark-tertiary/50 px-6 py-2 rounded-md">
          {userName}
        </h2>
      </div>

      <div className="mt-8 space-y-4">
        {profileItems.map((item, index) => (
          <div key={index} className="flex items-center text-sm text-light-secondary">
            {item.icon}
            <span className="truncate">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-dark-tertiary pt-6">
        <a
          href="#"
          target="_blank"
          className="flex items-center text-sm text-brand-cyan hover:text-brand-blue font-medium transition-colors"
        >
          <DocumentTextIcon className="h-5 w-5 mr-2 flex-shrink-0" />
          Student's code of conduct
        </a>
      </div>

      <div className="mt-6 border-t border-dark-tertiary pt-6">
        <button
          onClick={() => setActivityOpen(!activityOpen)}
          className="w-full flex justify-between items-center text-left py-3 px-4 bg-dark-tertiary/50 hover:bg-dark-tertiary rounded-md transition-colors"
        >
          <span className="font-semibold text-light-primary">Activity Status</span>
          {activityOpen ? <ChevronUpIcon className="h-5 w-5 text-light-tertiary" /> : <ChevronDownIcon className="h-5 w-5 text-light-tertiary" />}
        </button>
        {activityOpen && (
          <div className="mt-3 text-sm bg-dark-primary/30 rounded-md p-1">
            <table className="min-w-full">
              <thead className="border-b border-dark-tertiary/50">
                <tr>
                  <th className="px-3 py-2.5 text-left text-xs font-medium text-light-tertiary uppercase tracking-wider">Activity</th>
                  <th className="px-3 py-2.5 text-left text-xs font-medium text-light-tertiary uppercase tracking-wider">Semester</th>
                  <th className="px-3 py-2.5 text-left text-xs font-medium text-light-tertiary uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-tertiary/50">
                {activityData.map((item, index) => (
                  <tr key={index} className="hover:bg-dark-tertiary/30 transition-colors">
                    <td className="px-3 py-2.5 whitespace-nowrap text-light-secondary">{item.activity}</td>
                    <td className="px-3 py-2.5 whitespace-nowrap text-light-secondary">{item.semester}</td>
                    <td className={`px-3 py-2.5 whitespace-nowrap ${item.statusColor}`}>
                      {item.isButton ? <button className="text-xs bg-gradient-to-r from-brand-lime to-brand-cyan text-dark-primary py-1 px-3 rounded-md hover:opacity-90 font-semibold">{item.status}</button> : item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
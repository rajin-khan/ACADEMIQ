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
    { icon: <CogIcon className="h-5 w-5 text-nsu-accent mr-2" />, text: userId },
    { icon: <EnvelopeIcon className="h-5 w-5 text-pink-500 mr-2" />, text: userEmail },
    { icon: <GlobeAltIcon className="h-5 w-5 text-blue-500 mr-2" />, text: `Degree: ${degree}` },
    { icon: <BookOpenIcon className="h-5 w-5 text-green-500 mr-2" />, text: `Curriculum: ${curriculum}` },
  ];

  // Placeholder activity data
  const activityData = [
    { activity: "Faculty Evaluation", semester: "Summer 2025", status: "Not Done", statusColor: "text-red-500" },
    { activity: "Faculty Evaluation", semester: "Spring 2025", status: "Done", statusColor: "text-green-500" },
    { activity: "Preadvising", semester: "Fall 2025", status: "Not Done", statusColor: "text-red-500" },
    { activity: "Payment", semester: "Summer 2025", status: "View", isButton: true },
  ];


  return (
    <div className="bg-white shadow-xl rounded-lg p-6">
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full border-4 border-nsu-primary object-cover mb-4"
          src={avatarUrl}
          alt={userName}
        />
        <h2 className="text-xl font-semibold text-nsu-dark-text bg-nsu-primary/10 px-4 py-1 rounded-md">
          {userName}
        </h2>
      </div>

      <div className="mt-6 space-y-3">
        {profileItems.map((item, index) => (
          <div key={index} className="flex items-center text-sm text-gray-700">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <a
          href="#"
          target="_blank"
          className="flex items-center text-sm text-nsu-secondary hover:text-nsu-primary font-medium"
        >
          <DocumentTextIcon className="h-5 w-5 mr-2" />
          Student's code of conduct during examinations
        </a>
      </div>

      <div className="mt-6 border-t pt-4">
        <button
          onClick={() => setActivityOpen(!activityOpen)}
          className="w-full flex justify-between items-center text-left py-2 px-3 bg-gray-100 hover:bg-gray-200 rounded-md"
        >
          <span className="font-semibold text-nsu-dark-text">Activity Status</span>
          {activityOpen ? <ChevronUpIcon className="h-5 w-5 text-gray-600" /> : <ChevronDownIcon className="h-5 w-5 text-gray-600" />}
        </button>
        {activityOpen && (
          <div className="mt-2 text-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activityData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2 whitespace-nowrap">{item.activity}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{item.semester}</td>
                    <td className={`px-3 py-2 whitespace-nowrap ${item.statusColor}`}>
                      {item.isButton ? <button className="text-xs bg-nsu-accent text-white py-1 px-2 rounded hover:bg-nsu-accent/80">{item.status}</button> : item.status}
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
import React from 'react';

const activityData = [
  { name: 'Item 1', price: 10.99, date: '2023-04-15' },
  { name: 'Item 2', price: 24.99, date: '2023-04-14' },
  { name: 'Item 3', price: 15.99, date: '2023-04-13' },
  { name: 'Item 4', price: 7.99, date: '2023-04-12' },
  { name: 'Item 5', price: 19.99, date: '2023-04-11' },
  { name: 'Item 6', price: 12.99, date: '2023-04-10' },
  { name: 'Item 7', price: 9.99, date: '2023-04-09' },
  { name: 'Item 8', price: 11.99, date: '2023-04-08' },
  { name: 'Item 9', price: 5.99, date: '2023-04-07' },
  { name: 'Item 10', price: 29.99, date: '2023-04-06' },
  { name: 'Item 11', price: 10.99, date: '2023-04-05' },
  { name: 'Item 12', price: 24.99, date: '2023-04-04' },
  { name: 'Item 13', price: 15.99, date: '2023-04-03' },
  { name: 'Item 14', price: 7.99, date: '2023-04-02' },
  { name: 'Item 15', price: 19.99, date: '2023-04-01' },
];

const ActivityFeed = () => {
  return (
    <div className="bg-pink-300 shadow-lg rounded-lg m-auto w-full h-5/6 overflow-y-auto">
      {activityData.map((activity, index) => (
        <div key={index} className="flex justify-between items-center py-6 px-4">
          <div>
            <p>{activity.name}</p>
            <p className="text-sm text-gray-500">{activity.date}</p>
          </div>
          <p className="text-gray-600">${activity.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
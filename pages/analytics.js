
import { useState, useEffect } from 'react';

export default function Analytics() {
  const [visitorData, setVisitorData] = useState(
    JSON.parse(localStorage.getItem('visitorData')) || {
      totalVisits: 0,
      pageViews: {},
      lastVisit: 'N/A',
    }
  );

  useEffect(() => {
    const updateData = () =>
      setVisitorData(JSON.parse(localStorage.getItem('visitorData')) || {
        totalVisits: 0,
        pageViews: {},
        lastVisit: 'N/A',
      });
    updateData(); // Initial load
    const interval = setInterval(updateData, 5000); // Update every 5 seconds
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 to-base-100 p-6">
      <h1 className="text-4xl font-bold text-accent mb-6">Visitor Analytics</h1>
      <div className="bg-base-200 p-6 rounded-xl shadow-lg">
        <p className="text-lg"><strong>Total Visits:</strong> {visitorData.totalVisits}</p>
        <p className="text-lg"><strong>Last Visit:</strong> {new Date(visitorData.lastVisit).toLocaleString()}</p>
        <h2 className="text-xl font-semibold mt-4">Page Views:</h2>
        <ul className="list-disc pl-5 mt-2">
          {Object.entries(visitorData.pageViews).map(([path, count]) => (
            <li key={path} className="text-lg">
              {path}: {count} view{count !== 1 ? 's' : ''}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
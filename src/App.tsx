import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import WilayaSelector from './components/WilayaSelector';
import AlgeriaOverview from './components/AlgeriaOverview';
import { interventionData } from './data/interventionData';

function App() {
  const [selectedWilaya, setSelectedWilaya] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Crier Dashboard</h1>
      <WilayaSelector
        wilayas={interventionData.map(item => item.wilaya)}
        selectedWilaya={selectedWilaya}
        onSelectWilaya={setSelectedWilaya}
      />
      {selectedWilaya ? (
        <Dashboard
          data={interventionData.filter(item => item.wilaya === selectedWilaya)}
        />
      ) : (
        <AlgeriaOverview data={interventionData} />
      )}
    </div>
  );
}

export default App;
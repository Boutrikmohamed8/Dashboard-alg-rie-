import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface InterventionData {
  wilaya: string;
  totalInterventions: number;
  trafficAccidents: number;
  urbanIndustrialFires: number;
  medicalEvacuations: number;
  variousInterventions: number;
  carbonMonoxidePoisoning: number;
  securityCoverage: number;
}

interface DashboardProps {
  data: InterventionData[];
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.wilaya),
    datasets: [
      {
        label: 'Total Interventions',
        data: data.map((item) => item.totalInterventions),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Traffic Accidents',
        data: data.map((item) => item.trafficAccidents),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Urban/Industrial Fires',
        data: data.map((item) => item.urbanIndustrialFires),
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
      {
        label: 'Medical Evacuations',
        data: data.map((item) => item.medicalEvacuations),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Various Interventions',
        data: data.map((item) => item.variousInterventions),
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
      {
        label: 'Carbon Monoxide Poisoning',
        data: data.map((item) => item.carbonMonoxidePoisoning),
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
      {
        label: 'Security Coverage',
        data: data.map((item) => item.securityCoverage),
        backgroundColor: 'rgba(199, 199, 199, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Intervention Data by Wilaya',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Dashboard;
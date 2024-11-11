import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Gonthuka',
    contributors: 45000,
    dataPoints: 1500000,
    activeUsers: 100000,
  },
  {
    name: 'AI Chandamama',
    contributors: 10000,
    dataPoints: 50000,
    activeUsers: 20000,
  },
  {
    name: 'Swecha AI OS',
    contributors: 5000,
    dataPoints: 0,
    activeUsers: 15000,
  },
];

const BarChartComponent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="contributors" name="Contributors" fill="#8884d8" />
      <Bar dataKey="dataPoints" name="Data Points" fill="#82ca9d" />
      <Bar dataKey="activeUsers" name="Active Users" fill="#ffc658" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
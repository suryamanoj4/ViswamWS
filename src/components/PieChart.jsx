// Create a new file: src/components/PieChart.jsx
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Research Projects', value: 30, color: '#4A90E2' },
  { name: 'Technical Development', value: 25, color: '#82CA9D' },
  { name: 'Policy Initiatives', value: 20, color: '#F5A623' },
  { name: 'Community Programs', value: 15, color: '#E57373' },
  { name: 'Other', value: 10, color: '#9575CD' },
];

const PieChartComponent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Legend layout="vertical" align="right" verticalAlign="middle" />
    </PieChart>
  </ResponsiveContainer>
);

export default PieChartComponent;
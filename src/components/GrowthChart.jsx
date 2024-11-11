import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GrowthChart = () => {
  const data = [
    { year: '2024', workforce: 250000, developers: 75000, startups: 1000 },
    { year: '2026', workforce: 400000, developers: 120000, startups: 2000 },
    { year: '2028', workforce: 600000, developers: 180000, startups: 3500 },
    { year: '2030', workforce: 800000, developers: 250000, startups: 5000 },
  ];

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="workforce" name="AI Workforce" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="developers" name="AI Developers" stroke="#82ca9d" strokeWidth={2} />
          <Line type="monotone" dataKey="startups" name="AI Startups" stroke="#ffc658" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
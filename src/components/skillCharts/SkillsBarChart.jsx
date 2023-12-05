import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function SkillsBarChart({ data }) {
  return (
    <ResponsiveContainer height={450} width="90%" className="px-15 py-15">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis type="number" domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="backend" fill="#82ca9d" className="my-10" />
        <Bar dataKey="frontend" fill="#8884d8" className="my-10" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default SkillsBarChart;

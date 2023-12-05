import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useScreenSize } from "../../hooks/useScreenSize";

function SkillsPieChart({ data }) {
  const { isMobileSize } = useScreenSize();

  return (
    <ResponsiveContainer width="100%" height={450} className="px-5 py-5">
      <PieChart>
        <Pie
          data={data}
          nameKey="subject"
          dataKey="value"
          innerRadius={isMobileSize ? 60 : 100}
          outerRadius={isMobileSize ? 80 : 120}
          cx="40%"
          cy="50%"
          paddingAngle={3}
          label
        >
          {data.map((entry) => (
            <Cell fill={entry.color} stroke={entry.color} key={entry.subject} />
          ))}
        </Pie>
        <Pie
          data={data}
          nameKey="subject"
          dataKey="value"
          cx="40%"
          cy="50%"
          innerRadius={isMobileSize ? 20 : 60}
          outerRadius={isMobileSize ? 40 : 80}
        >
          {data.map((entry) => (
            <Cell fill={entry.color} key={entry.subject} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="middle"
          align="right"
          width="30%"
          layout="vertical"
          iconSize={isMobileSize ? 8 : 12}
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default SkillsPieChart;

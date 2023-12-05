import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function SkillsAreaChart({ data }) {
  const colors = {
    salary: { stroke: "#4f46e5", fill: "#4f46e5" },
    extraSalary: { stroke: "#22c55e", fill: "#22c55e" },
    text: "#e5e7eb",
    background: "#18212f",
  };

  return (
    <ResponsiveContainer height={450} width="90%" className="px-15 py-5">
      <AreaChart data={data}>
        <XAxis
          dataKey="label"
          tick={{ fill: colors.text }}
          tickLine={{ stroke: colors.text }}
        ></XAxis>
        <YAxis unit="$"></YAxis>
        <CartesianGrid strokeDasharray="4" />
        <Tooltip contentStyle={{ backgroundColor: colors.background }} />
        <Area
          dataKey="salary"
          type="monotone"
          stroke={colors.salary.stroke}
          fill={colors.salary.fill}
          strokeWidth={2}
          name="Salary"
          unit="$"
        />

        <Area
          dataKey="extraSalary"
          type="monotone"
          stroke={colors.extraSalary.stroke}
          fill={colors.extraSalary.fill}
          strokeWidth={2}
          name="Extra Salary"
          unit="$"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SkillsAreaChart;

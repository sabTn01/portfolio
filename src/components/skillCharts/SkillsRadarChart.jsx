import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import { useScreenSize } from "../../hooks/useScreenSize";

function SkillsRadarChart({ data }) {
  const { isMobileSize } = useScreenSize();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-200 px-2 py-2 text-gray-800">
          <p className="label">{`${payload[0].payload.subject} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer height={450} width="100%" className="px-5 py-5">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius={isMobileSize ? "50%" : "80%"}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" stroke="#FFFF" />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          orientation="middle"
          tick={false}
        ></PolarRadiusAxis>
        <Radar
          name="skills"
          dataKey="A"
          fill="#8884d8"
          fillOpacity={0.6}
          dot={true}
        ></Radar>
        <Tooltip content={<CustomTooltip />} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default SkillsRadarChart;

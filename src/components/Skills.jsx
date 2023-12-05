import bg from "/banner-bg.png";
import SkillsRadarChart from "./skillCharts/SkillsRadarChart";
import { AiOutlineRadarChart } from "react-icons/ai";
import { FaChartArea, FaChartBar } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import ChartButton from "./ChartButton";
import { useState } from "react";
import SkillsPieChart from "./skillCharts/SkillsPieChart";
import {
  areaChartData,
  pieChartData,
  radarChartData,
  barChartData,
} from "../data/data-chart";
import SkillsAreaChart from "./skillCharts/SkillsAreaChart";
import SkillsBarChart from "./skillCharts/SkillsBarChart";

function Skills() {
  const [chart, setChart] = useState(1);

  return (
    <div
      id="skills"
      style={{ backgroundImage: `url(${bg})` }}
      className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
    >
      <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px]">
        <h1 className="text-center text-4xl font-bold py-5">Skills</h1>

        <div className="bg-[#171717] flex justify-center">
          {chart === 1 && <SkillsRadarChart data={radarChartData} />}
          {chart === 2 && <SkillsPieChart data={pieChartData} />}
          {chart === 3 && <SkillsAreaChart data={areaChartData} />}
          {chart === 4 && <SkillsBarChart data={barChartData} />}
        </div>

        <div className="bg-[#171717] flex justify-center gap-2 py-4 px-4">
          <ChartButton onclick={() => setChart(1)}>
            <AiOutlineRadarChart />
          </ChartButton>
          <ChartButton onclick={() => setChart(2)}>
            <FaChartPie />
          </ChartButton>
          <ChartButton onclick={() => setChart(3)}>
            <FaChartArea />
          </ChartButton>
          <ChartButton onclick={() => setChart(4)}>
            <FaChartBar />
          </ChartButton>
        </div>
      </div>
    </div>
  );
}

export default Skills;

import baseTheme from "../../customtheme/Theme";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Card, Box } from "@mui/material";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
const GradientBarChart = () => {
  const labels = ["", "", "", "", "", "", "", "", "", ""];
  const baseData = [220, 200, 210, 230, 190, 240, 200, 180, 210, 170];
  const topData = [80, 70, 60, 70, 60, 60, 70, 50, 60, 50];
  const data = {
    labels,
    datasets: [
      {
        label: "Base",
        data: baseData,
        backgroundColor: baseTheme.palette.customBackgrounds.background2,
        borderRadius: 3,
        barThickness: 3,
        categoryPercentage: 0.6,
      },
      {
        label: "Top",
        data: topData,
        backgroundColor: baseTheme.gradients.primary,
        borderRadius: 3,
        barThickness: 3,
        categoryPercentage: 0.6,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: false },
        stacked: true,
      },
      y: {
        min: 0,
        max: 300,
        grid: {
          drawBorder: false,
          borderDash: [2, 2],
          color: "#ffffff66",
        },
        ticks: {
          color: "#fff",
          stepSize: 100,
        },
        stacked: true,
      },
    },
  };
  return (
    <Card
      sx={{
        width: 530,
        height: 230,
        borderRadius: 3,
        background: baseTheme.gradients.secondary,
        p: 2,
        boxShadow: "none",
      }}
    >
      <Box sx={{ height: "100%" }}>
        <Bar data={data} options={options} />
      </Box>
    </Card>
  );
};
export default GradientBarChart;
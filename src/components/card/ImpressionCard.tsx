import { Bar } from "react-chartjs-2";
import theme from "../customtheme/Theme";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Card, CardContent, Typography, Box } from "@mui/material";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
const ImpressionCard = () => {
  const labels = ["Mon", "Tue", "Wed", "Thu"];
  const dataValues = [26, 4, 22, 6];
  const barColors = dataValues.map((_, i) =>
    i === 2 ? theme.palette.primary.main : theme.palette.secondary.main
  );
  const data = {
    labels,
    datasets: [
      {
        label: "Impression",
        data: dataValues,
        backgroundColor: barColors,
        borderRadius: 8,
        barThickness: 20,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        yAlign: "bottom" as const,
        backgroundColor: "#6B3FC9",
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#777",
          font: { size: 12 },
        },
      },
      y: {
        grid: {
          color: "#eee",
        },
        ticks: {
          stepSize: 10,
          color: "#777",
        },
        beginAtZero: true,
      },
    },
  };
  return (
    <Card
      sx={{
        width: "13.5rem",
        borderRadius: 3,
        border: '1px solid #e0e0e0',
        backgroundColor: 'white',
      }}
    >
      <CardContent 
      sx={{py:1}}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 400, color: "#333"}}
        >
          Impression
        </Typography>
        <Box sx={{ height: 118 }}>
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};
export default ImpressionCard;
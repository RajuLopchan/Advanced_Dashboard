import { Line } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Legend,
  Tooltip,
  Title,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Title);

function SalesByAgeChart() {
  const data = {
    labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500],
    datasets: [
      {
        label: 'Sales',
        borderColor: 'rgb(132, 27, 207)',
        backgroundColor: 'rgb(132, 27, 207)',
        data: [0, 19, 16, 31, 24, 34, 21, 24, 15, 29, 10],
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle' as const,
          boxWidth: 6,
          boxHeight: 6,
          color: 'rgb(132, 27, 207)',
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 10,
        max: 40,
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 5,
          callback: function (value: string | number) {
            const numericValue = Number(value);
            if (numericValue === 40) {
              return '';
            }
            const start = numericValue;
            const end = numericValue + 5;
            return `${start} to ${end}`;
          },
        },
      },
    },
  };

  return (
    <Box
      sx={{
        p: 2,
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: 2,
        width: '100%',
        height: '430px',
        position: 'relative',
      }}
    >
      <Typography
        sx={{
          position: 'absolute',
          top: 30,
          left: 15,
          fontSize: 15,
          fontWeight: 500,
          color: 'black',
        }}
      >
        Sales by Age
      </Typography>

      <Box sx={{ height: '100%', mt: 2 }}>
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
}

export default SalesByAgeChart;

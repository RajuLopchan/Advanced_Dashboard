import { Box, Typography, LinearProgress } from '@mui/material';

type StatusCardProps = {
  imageSrc: string;
  title: string;
  value: string | number;
  progress: number;
  progresscolor?:"primary"|"secondary"|"info"|"success"|"warning"|"error";
  imageSize?: number;
};

function StatusCard({
  imageSrc,
  title,
  value,
  progress,
  progresscolor = "primary",
  imageSize = 30,
}: StatusCardProps) {
  return (
    <Box
      sx={{
        border: '1px solid #e0e0e0',
        backgroundColor: 'rgba(140, 138, 138, 0.05)',
        borderRadius: 2,
        p: 2,
        width: 190,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Box
          component="img"
          src={imageSrc}
          alt={title}
          sx={{ width: imageSize, height: imageSize, objectFit: 'contain' }}
        />
        <Typography variant="h6" sx={{ fontSize: '1rem', ml: 2 }}>
          {title}
        </Typography>
      </Box>

      <Typography variant="subtitle1" sx={{ fontSize: '3rem', color: 'black' }}>
        {value}
      </Typography>

      <LinearProgress variant="determinate" value={progress} color={progresscolor} sx={{ height: 5, borderRadius: 5 }} />
    </Box>
  );
}

export default StatusCard;

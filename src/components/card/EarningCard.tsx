import { Box, Typography, Button } from '@mui/material';

const EarningsCard = () => {
    return (
    <Box
        sx={{
        py: 1.5,
        border: '1px solid #e0e0e0',
        borderRadius: 2.5,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "13.5rem",
        }}
    >
      <Typography
        variant="body2"
        sx={{ mb: 1.5, fontWeight: 'bold', color: 'rgba(21, 20, 20, 0.6)',fontSize:"0.8rem" }}
      >
        Your earning this month
      </Typography>

      <Typography
        variant="h1"
        sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main',fontSize:"2rem" }}
      >
        735.2$
      </Typography>

      <Typography
        variant="body2"
        sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}
      >
        Update your payout <br /> method in Setting
      </Typography>

      <Button
  variant="outlined"
  sx={{
    fontSize: '0.8rem',
    borderRadius: 2,
    borderColor: 'rgba(213, 202, 202, 0.6)',
    backgroundColor: 'white',
    color: 'primary.main',
    fontWeight: 530,
    '&:hover': {
      backgroundColor: 'white',
      borderColor: 'rgba(213, 202, 202, 0.6)',
    },
  }}
>
  Withdraw All Earnings
</Button>

    </Box>
  );
};

export default EarningsCard;

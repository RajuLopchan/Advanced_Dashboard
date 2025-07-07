import { Box, Typography, IconButton, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const items = [
  { 
    color: '#C6BFFF',
    type: 'Bento 3D Kit',
    label: 'Illustration',
    image: '/assets/images/product1.png',
  },
  { 
    color: '#BDF2C5',
    type: 'Bento 3D Kit',
    label: 'Coded Template',
    image: '/assets/images/product2.png',
  },
  {
    color: '#FFBFBF',
    type: 'Bento 3D Kit',
    label: 'Illustration',
    image: '/assets/images/product3.png',
  },
];

export default function EarningsByItemCard() {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        border: '1px solid #e0e0e0',
        // boxShadow: 1,
        backgroundColor: 'white',
        width: '15rem',
      }}
    >
      <Typography variant="subtitle2" fontWeight="semibold" mb={3} color="rgba(0, 0, 0, 1)">
        Earnings by item
      </Typography>

      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: index !== items.length - 1 ? 2 : 0,
          }}
        >
          <Avatar
            variant="square"
            sx={{
              bgcolor: item.color,
              borderRadius: 1.5,
              width: 40,
              height: 40,
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt="icon"
              sx={{
                width: 24,
                height: 24,
              }}
            />
          </Avatar>

          <Box ml={2} flexGrow={1}>
            <Typography variant="body2" fontWeight="500" color="black">
              {item.type}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.label}
            </Typography>
          </Box>

          <IconButton size="small">
            <ArrowForwardIosIcon sx={{ fontSize: 15, color: 'black', mb: 2 }} />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
}

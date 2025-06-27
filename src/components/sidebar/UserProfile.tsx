import { Avatar, Box, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import theme from '../customtheme/Theme';

const UserProfile = () => {

  return (
    <Box
      sx={{
        position: 'relative',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 3,
        margin: 1,
      }}
    >
      {/* Triple-dot Icon at Top Right */}
      <IconButton
        size="small"
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          color: 'white',
        }}
      >
        <MoreVertIcon />
      </IconButton>

      <Avatar
        alt="Anita Cruz"
        src="/assets/images/Frame 1149.png"
        sx={{
          width: 48,
          height: 48,
        }}
      />

      <Box>
        <Typography
          variant="body1"
          sx={{
            pb: 0.3,
          }}
          color='White'
        >
          Anita Cruz
        </Typography>
        <Typography
          variant="body2"
          color='White'
        >
          anita@commerce.com
        </Typography>
      </Box>
    </Box>
  );
};

export default UserProfile;
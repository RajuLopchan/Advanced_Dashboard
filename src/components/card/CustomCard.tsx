
import { Box, Typography, LinearProgress, Avatar, Stack, Button  } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


function ImageCard() {
return (
    <Box
    sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        p: 2,
        width: 300,
    }}
    >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <PeopleIcon sx={{ fontSize: 80, color: 'primary.main' }} />
        <Typography variant="h6" sx={{ fontSize: '1.5rem', ml: 2 }}>
        Users
        </Typography>
    </Box>

    <Typography variant="subtitle1" sx={{ fontSize: '4rem', color: 'black' }}>
        35K
    </Typography>

    <LinearProgress
        variant="determinate"
        value={40}
        sx={{ height: 10, borderRadius: 5 }}
    />
    </Box>
);
}


function BentoCard() {
return (
    <Box
    sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
    }}
    >
      {/* Left: Person Icon */}
    <PeopleIcon sx={{ fontSize: 32, color: 'primary.main' }} />

      {/* Middle: Texts */}
    <Box sx={{ flexGrow: 1, mx: 2 }}>
        <Typography variant="subtitle1">Bento 3D Kit</Typography>
        <Typography variant="caption" color="text.secondary">
        Illustration
        </Typography>
    </Box>

      {/* Right: Chevron Icon */}
    <ChevronRightIcon sx={{ color: 'text.secondary' }} />
    </Box>
);
}


function PhoneCard() {
return (
    <Box
    sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 350,
    }}
    >
      {/* Left side: Texts */}
    <Box>
        <Typography variant="subtitle1">iPhone 11</Typography>
        <Typography variant="caption" color="text.secondary">
        London, UK - Oct12 at 2:30AM
        </Typography>
    </Box>
        <MoreVertIcon />
    </Box>
);
}


function UserCard() {
return (
    <Box
    sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 3,
        p: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    }}
    >
    <Box sx={{ display: 'flex', alignItems: 'center',gap: 2 }}>
        <CheckBoxIcon/>
        <Avatar alt="Ovlie Rthy" src="/assets/images/profile.png" sx={{ mr: 2 }} />
        <Box>
        <Typography >Ovlie Rthy</Typography>
        <Typography>
            olive@gmail.com
        </Typography>
        </Box>
    </Box>

    <Stack direction="row" spacing={5}>
        <Typography> Admin</Typography>
        <Typography> Delete</Typography>
        <Typography> Edit</Typography>
        <p>dghjklsdfghj</p>
    </Stack>
    </Box>
);
}

function DesignReviewCard() {
return (
    <Box
    sx={{
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        p: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '30%',
        position: 'relative',
    }}
    >
    <Box>
        <Typography variant="subtitle1" fontWeight={600}>
        Design Review
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
        Additional text
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 1 }}>
        <WorkOutlineIcon fontSize="small" />
        <Typography variant="caption" color="text.secondary">
            Monday, Jul 4, 2022
        </Typography>
        </Stack>
    </Box>

      {/* Top Right Button */}
    <Button
        variant="outlined"
        size="small"
        sx={{
        borderStyle: 'dashed',
        position: 'absolute',
        fontSize: '0.75rem',
        top: 16,
        right: 16,
        }}
    >
    12 am to 2 pm
    </Button>
    </Box>
);
}



function CustomCard() {
return (
    <div style={{ display: 'grid', gap: '20px', padding: '20px' }}>
    <ImageCard />
    <BentoCard />
    <PhoneCard />
    <UserCard />
    <DesignReviewCard />
    </div>
);
}

export default CustomCard;

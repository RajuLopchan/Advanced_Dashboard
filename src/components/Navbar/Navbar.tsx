import {
  Typography,
  InputBase,
  Box,
  useTheme
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// 🚨 Import useLocation to detect current route
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation(); // ✅ Get current route path

  // ✅ Determine title based on pathname
  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/projects/newproject":
        return "Projet / New Project";
      // 👉 Add other routes here as needed
      default:
        return "Page";
    }
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        height: 60,
        width: '100%',
        zIndex: theme.zIndex.appBar,
        display: 'flex',
        alignItems: 'center',
        pl: '315px',
        gap: 10,
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
        {getTitle()} {/* ✅ Dynamic title based on route */}
      </Typography>

      <Box
        sx={{
          borderRadius: 4,
          border: "1px solid",
          borderColor: theme.palette.grey[400],
          backgroundColor: "white",
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.15)",
          display: "flex",
          alignItems: "center",
          px: 1,
          py: 0.3,
        }}
      >
        <InputBase
          placeholder="Search anything here..."
          sx={{ width: 200, color: "black", fontSize: "0.8rem", fontWeight: 700 }}
        />
        <SearchIcon sx={{ color: "#A0A0A0" }} />
      </Box>
    </Box>
  );
};

export default Navbar;

import {
  Typography,
  InputBase,
  Box,
  useTheme
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
      case "/dashboard":
        return "Dashboard";
      case "/projects/newproject":
        return "New Project";
      case "/analytics":
        return "Analytics";

      // Pages
      case "/pages/profile/profile overview":
        return "Profile Overview";
      case "/pages/profile/teams":
        return "Teams";
      case "/pages/profile/all project":
        return "All Project";

      case "/pages/users/reports":
        return "Reports";
      case "/pages/users/new user":
        return "New User";

      case "/account/setting":
        return "Account Setting";
      case "/account/billing":
        return "Billing";
      case "/account/invoice":
        return "Invoice";
      case "/account/security":
        return "Security";

      case "/projects/general":
        return "Projects General";
      case "/projects/timeline":
        return "Projects Timeline";

      case "/projects/newproject":
        return "New Project";

      case "/pricing page":
        return "Pricing Page";
      case "/charts":
        return "Charts";
      case "/notification":
        return "Notification";
      case "/chat":
        return "Chat";

      // Applications
      case "/applications/kanban":
        return "Kanban";
      case "/applications/wizard":
        return "Wizard";
      case "/applications/data table":
        return "Data Table";
      case "/applications/calendar":
        return "Calendar";

      // E-commerce
      case "/ecommerce/overview":
        return "E-Commerce Overview";
      case "/ecommerce/products":
        return "Products";
      case "/ecommerce/orders":
        return "Orders";

      // Authentication
      case "/authentication/login":
        return "Login";
      case "/authentication/register":
        return "Register";
      case "/authentication/forgot password":
        return "Forgot Password";

      default:
        return "Page";
    }
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        height: "63px",
        width: "100%",
        zIndex: theme.zIndex.appBar,
        display: "flex",
        alignItems: "center",
        pl: "55px",
        gap: 10,
        backgroundColor: theme.palette.grey[100],
      }}
    >
      <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
        {getTitle()}
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

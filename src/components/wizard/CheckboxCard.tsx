import React from "react";
import { Card, Typography, Checkbox, Box } from "@mui/material";

interface CheckboxCardProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

const CheckboxCard: React.FC<CheckboxCardProps> = ({ label, checked, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        textAlign: "center",
        p: 1,
        border: checked ? "2px solid #6c63ff" : "grey",
        backgroundColor:"white",
        borderRadius: 2,

      }}
    >
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <img src="/assets/images/Users.svg" width={30} alt={label} />
        <Typography mt={2} sx={{ fontSize: "1.5rem" ,color: "black", fontWeight: "semibold" }}>
          {label}
        </Typography>
        <Checkbox
          checked={checked}
          onChange={onClick}
          sx={{ display: "none" }}
        />
      </Box>
    </Card>
  );
};

export default CheckboxCard;

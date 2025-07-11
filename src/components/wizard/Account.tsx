import { Box, Card } from "@mui/material";
import FormHeader from "./FormHeader";
import CheckboxGrid from "./CheckboxGrid";

const Account = () => {
  return (
    <>
      <Card
        sx={{
          p: 3,
          borderRadius: 2,
          width: "50%",
          marginX: "auto",
          backgroundColor: "white",
          mt: 2,
        }}
      >
        <Box sx={{ mb: 3, textAlign: "center" }}>
          <FormHeader
            title="What are you doing? (checkboxes)"
            subtitle={
              <>
                Give us more detail about you. What do you enjoy doing in <br /> your spare time?
              </>
            }
          />
        </Box>
        <form>
          <CheckboxGrid />
        </form>
  
      </Card>
    </>
  );
};

export default Account;

import About from "../../components/wizard/About"
import Account from "../../components/wizard/Account"
import Address from "../../components/wizard/Address"
import { Box, Button } from "@mui/material"

function Wizard() {
  return (
    <div>
      <About />
      <Account />
      <Address />
       <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 2 }}>
          <Button variant="outlined" size="small">
            Previous
          </Button>
          <Button variant="contained" size="small">
            Next
          </Button>
        </Box>
    </div>
  )
}

export default Wizard

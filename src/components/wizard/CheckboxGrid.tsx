import { useState } from "react";
import { Grid } from "@mui/material";
import CheckboxCard from "./CheckboxCard";

const options = ["Design", "Develop", "Code", "Design", "Develop", "Code", "Design", "Develop", "Code"];

function CheckboxGrid() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (key: string) => {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  return (
    <Grid container spacing={3} width={'85%'} marginX={'auto'}>
      {options.map((label, index) => {
        const key = `${label}-${index}` 
        const isSelected = selected.includes(key);

        return (
          <Grid size={4}  key={key}>
            <CheckboxCard
              label={label}
              checked={isSelected}
              onClick={() => handleToggle(key)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CheckboxGrid;

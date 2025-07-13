import { useFormContext, Controller } from "react-hook-form";
import { Grid, Typography } from "@mui/material";
import CheckboxCard from "./CheckboxCard";

const options = [
  "Design",
  "Develop",
  "Code",
  "Write",
  "Test",
  "Deploy",
  "Plan",
  "Review",
  "Research",
];

function CheckboxGrid() {
  const { control, watch, formState: { errors } } = useFormContext();
  const selected = watch("activities") || [];

  const handleToggle = (key: string, onChange: (value: string[]) => void) => {
    const updated = selected.includes(key)
      ? selected.filter((item: string) => item !== key)
      : [...selected, key];
    onChange(updated);
  };

  return (
    <>
      <Controller
        name="activities"
        control={control}
        render={({ field: { onChange } }) => (
          <Grid container spacing={2} width="85%" marginX="auto">
            {options.map((label, index) => {
              const key = `${label}-${index}`;
              const isSelected = selected.includes(key);
              return (
                <Grid size={4} key={key}>
                  <CheckboxCard
                    label={label}
                    checked={isSelected}
                    onClick={() => handleToggle(key, onChange)}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
      />

      {errors.activities && (
        <Typography
          variant="body2"
          color="error"
          sx={{ mt: 1, textAlign: "center" }}
        >
          {errors.activities.message as string}
        </Typography>
      )}
    </>
  );
}

export default CheckboxGrid;

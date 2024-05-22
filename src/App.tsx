import Grid from "@mui/material/Grid";
import EmailSubscription from "./components/EmailSubscription";
import { useTheme } from "@mui/material/styles";

function App() {
  const theme = useTheme();
  return (
    <Grid
      container
      minHeight="100svh"
      direction="column"
      alignItems={"center"}
      justifyContent="center"
      spacing={0}
      sx={{ backgroundColor: theme.palette.background.default, fontFamily: "Roboto, sans-serif" }}
    >
      <Grid item>
        <EmailSubscription />
      </Grid>
    </Grid>
  );
}

export default App;

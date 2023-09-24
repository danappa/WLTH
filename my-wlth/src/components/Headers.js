import { Typography, Box } from "@mui/material";
import { green, grey } from "@mui/material/colors";

const Header = ({ title, subtitle }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={grey}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={green}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
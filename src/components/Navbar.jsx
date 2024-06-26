import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants.js";
import { Typography } from '@mui/material'
import SearchBar from "./SearchBar.jsx";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
    }}>
    <Link to= "/" style={{diaplay: 'flex', alignItems:'center'}}>
      <img src= {logo} alt="logo" height={45}/>
       <Typography variant = "h4" color= "#fff"> 
        NS Magics
       </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

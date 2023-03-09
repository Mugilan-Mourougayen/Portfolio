import React from 'react'
import "./Header.css"
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Header = (props) => {
    const changeLang =()=>{
        props.setLang(!props.lang)
    }
  return (
   
    
<ul>
  <li><a href="home">Mugilan Mourougayen</a></li>
  <li><a href="resume">Resume  </a>   </li>
  <li ><a href="about">About</a></li>
  <li style={{float:"right"}}><div >  En<Switch {...label}  color="default" size='small' onClick={changeLang}/>Fr  </div></li>
</ul>

  )
}

export default Header





















// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';
// import Switch from '@mui/material/Switch';

// const label = { inputProps: { 'aria-label': 'Switch demo' } };



// export default function Header() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             Mugilan Mourougayen
//             {/* <MenuIcon /> */}
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Resume 
//             <Switch {...label} defaultChecked color="default"/>
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
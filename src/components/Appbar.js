import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar';
import { deepOrange ,deepPurple} from '@mui/material/colors';
import { makeStyles } from '@mui/styles';


const useStyles=makeStyles({
    root:{
        paddingLeft:"600px"
    }
})




function Top() {
    const classes=useStyles()
    return (
        <div>
             <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.root} >
            PROJECT-T
          </Typography>
          <Avatar sx={{ bgcolor: deepPurple[500]} }>T</Avatar>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Top

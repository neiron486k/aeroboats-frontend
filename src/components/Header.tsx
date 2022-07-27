import React, {FC} from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CardMedia from '@mui/material/CardMedia';
import propeller from "./propeller.gif"

const Header: FC = () => {
    return (
        <AppBar
            elevation={0}
            position="fixed"
            sx={{
                background: 'rgba(0,0,0,0.4)'
            }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <MenuIcon/>
                </IconButton>
                <CardMedia
                    component="img"
                    image={propeller}
                    height="40"
                    sx={{
                        width: "40px",
                        borderRadius: "50%"
                    }}
                />
                <Typography variant="h6" component="div" sx={{flexGrow: 1, marginLeft: "10px"}}>
                    AeroGlister
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
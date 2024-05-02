import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputBase from '@mui/material/InputBase';
import logo from '../../img/logo.png'
import { Link } from '@mui/material';
import { useNavigate } from 'react-router';
import cadastro from './Cadastro'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,

    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,

        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Nav({ children }) {
    //const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const nav = useNavigate();

    const navigate = useNavigate();

    const handleNavegar = url => {
        navigate(url);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSearchClick = () => {
        alert("Em desenvolvimento");
        //Lógica para pesquisa
    };

    const handleShoppingClick = () => {
        nav("/cadastro")

    };
    const opcoesMenu = [
        { nome: 'Home', url: '/' },
        { nome: 'Cardapio', url: '/cardapio' },
        { nome: 'Bebidas', url: '/bebidas' },
        { nome: 'Doces', url: '/doces' },
        { nome: 'Salgados', url: '/salgado' },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="absolute" open={open}>
                <Toolbar style={{ backgroundColor: '#fff' }}>
                    <IconButton
                        color="#000"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                        <MenuIcon />
                    </IconButton>
                    <Box style={{ marginLeft:'43%'}}>
                        <img className='logo' style={{ height: '100px', width: '100px' }} src={logo} alt="logo" />
                    </Box>

                    <IconButton style={{ position: 'absolute', right: '45px' }}
                        onClick={handleSearchClick} >
                        <SearchOutlinedIcon />
                        <StyledInputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </IconButton>
                    <IconButton style={{ position: 'absolute', right: '15px' }}>
                        <ShoppingBagOutlinedIcon onClick={handleShoppingClick}/>
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Toolbar>

            </Toolbar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {opcoesMenu.map((opcao => (
                        <ListItem key={opcao.nome} >
                            <ListItemButton onClick={() => handleNavegar(opcao.url)}>
                                <ListItemText primary={opcao.nome} />
                            </ListItemButton>
                        </ListItem>
                    )))}
                </List>
                <Divider />
                <List>
                    <ListItem>
                        <Typography>Contato</Typography>
                    </ListItem>
                    <ListItem>
                        <Link style={{ fontSize: '18px', color: '#000', textDecoration: 'none' }}>coffee@gmail.com</Link>
                    </ListItem>
                    <ListItem>
                        <Link style={{ fontSize: '18px', color: '#000', textDecoration: 'none' }}>(61) 3436-0000</Link>
                    </ListItem>
                </List>
            </Drawer>

            <Main open={open}>

                {children}
            </Main>

        </Box>
    );
}

/*
import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                Sobre nós
            </Link>
            <Link to="/">
                a
            </Link>
            <Link to="/">
                Kits
            </Link>
            <Link to="/">
                Chocolates
            </Link>
            <Link to="/">
                Entrar
            </Link>
        </nav>
    </aside>*/
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GlobalStyles from '@mui/material/GlobalStyles';
import App from '../App';



function Header() {
	return (
		<React.Fragment>
			<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
			<CssBaseline />
			{/* <Box sx={{ flexGrow: 1 }}> */}
			<AppBar
				color="default" position="static" elevation={0}
				sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}>
				<Toolbar sx={{ flexWrap: 'wrap' }}>
				<Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
					Speech-Kit.ru
          		</Typography>
					<nav>
					<Button
						color="primary"
						href="#"
						component={NavLink}
						to="register"
					>
						Регистрация
					</Button>
					<Button
						href="#"
						color="primary"
						component={NavLink}
						to="login"
					>
						Войти
					</Button>
					<Button
						href="#"
						color="primary"
						component={NavLink}
						to="logout"
					>
						Выйти
					</Button>
					</nav>
				</Toolbar>
			</AppBar>
			{/* </Box> */}
		</React.Fragment>
	);
}

export default Header;
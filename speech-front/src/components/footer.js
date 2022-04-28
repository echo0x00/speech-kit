import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

// const useStyles = makeStyles((theme) => ({
// 	'@global': {
// 		ul: {
// 			margin: 0,
// 			padding: 0,
// 			listStyle: 'none',
// 		},
// 	},
// 	footer: {
// 		borderTop: `1px solid ${theme.palette.divider}`,
// 		marginTop: theme.spacing(8),
// 		paddingTop: theme.spacing(3),
// 		paddingBottom: theme.spacing(3),
// 		[theme.breakpoints.up('sm')]: {
// 			paddingTop: theme.spacing(6),
// 			paddingBottom: theme.spacing(6),
// 		},
// 	},
// }));

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="#">
				Shakmaev A.V.
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}


function Footer() {
	return (
		<React.Fragment>
			<Container maxWidth="md" component="footer">
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		</React.Fragment>
	);
}

export default Footer;
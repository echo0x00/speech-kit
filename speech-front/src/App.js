import React, { useEffect, useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Histories from './components/histories'
import HistoriesLoad from './components/historiesLoad'
// import Posts from './components/posts';
// import PostLoadingComponent from './components/postLoading';
import axiosInstance from './axios';

function App() {
	const ProcessHist = HistoriesLoad(Histories);
	const [appState, setAppState] = useState({
		loading: true,
		histories: null	});

	useEffect(() => {
		axiosInstance.get('history').then((res) => {
			const allItems = res.data;
			setAppState({ loading: false, histories: allItems });
		});
	}, [setAppState]);
	
	return (
		<div className="App">
			<Container maxWidth="md">
				<Card sx={{ minWidth: 852, margin: 0 }}>
					<CardContent>
						<h1>Озвучить текст онлайн реалистичным голосом</h1>
						<h2>Текст озвучивается с помощью ИИ (искусственный интеллект)</h2>
						<TextField
							id="outlined-multiline-static"
							label="Введите текст"
							multiline
							fullWidth 
							rows={4}
							defaultValue="В недрах тундры выдры в г+етрах т+ырят в вёдра ядра к+едров."
							/>
					</CardContent>
					<CardActions>
						<Button size="small">Озвучить</Button>
					</CardActions>
				</Card>
				{<ProcessHist isLoading={appState.loading} histories={appState.histories} />}
			</Container>
			
			
		</div>
	);
}
export default App;
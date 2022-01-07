import React from 'react';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Countries } from './pages/Countries'; 
import './App.css';

function App() {
	return (
		<>
			<Header />
			<Input />
			<Countries />
		</>
	);
}

export default App;

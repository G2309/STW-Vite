import { useEffect, useState } from 'react'
import './App.css'
import Router from './components/Router'

function App() {

	const [ruta, SetRuta] = useState('ejercicio')

	const [islogged, SetIsLogged] = useState(true)

	useEffect (() =>{
		console.log('Ruta :', window.location.pathname);
		SetRuta(window.location.pathname)
	}, [])

	const CambiarRuta = (nuevaRuta) => {
		window.history.pushState({}, '', nuevaRuta)
		SetRuta(nuevaRuta)
		if (ruta === '/home') {
			SetIsLogged(true)
		} else {
			SetIsLogged(false)
		}
	}

	return (
	<div className='Container'>
		<div className='Paginas'>
			<Router ruta={ruta}></Router>
		</div>
		<div className='Buttons'>
		{islogged ? (
			<button onClick={() => { CambiarRuta("/home")}}>Submit</button>
		) : (   
			<button onClick={() => { CambiarRuta("/login")}}>Login</button>
		)}
		</div>
	</div>

	);
}
export default App

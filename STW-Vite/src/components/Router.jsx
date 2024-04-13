import Home from './Home'
import Login from './Login'

function Router ({ruta}) {
	switch (ruta) {
		case "/home":
			return <Home></Home>
		case "/login":
			return <Login></Login>
		default:
			return (
				<div>
					<Login></Login>
				</div>
			)
	}
}

export default Router

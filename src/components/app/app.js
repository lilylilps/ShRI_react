import Footer from '../footer/footer';
import Home from '../home/home';
import Settings from '../settings/settings';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Modal from 'react-modal';

import './app.css';

Modal.setAppElement('#root');

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/settings" component={Settings} />
					<Route path="/" component={Home} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

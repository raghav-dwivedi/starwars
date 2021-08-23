import './css/App.css';
// import { DISHES } from "./shared/dishes";
import Landing from './components/landing';
import Card from './components/card';
import Footer from './components/footer';

function App() {
	return (
		<div className="App">
			<Landing></Landing>
			<Card></Card>
			<Footer></Footer>
		</div>
	);
}

export default App;

import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<main>
				<ItemListContainer
					id={1}
					name="Monitor"
					price={7500}
					description={`El Monitor mas moderno del momento`}
					stock={10}
				></ItemListContainer>
			</main>
		</div>
	);
}

export default App;

/*
<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
        */

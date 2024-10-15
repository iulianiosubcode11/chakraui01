import "./App.css";
import { Feats, Features } from "./components/Features";

import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";

function App() {
	return (
		<>
			<Header />
			<Pricing />
			<Feats />

			{/* <Features /> */}			
		</>
	);
}

export default App;

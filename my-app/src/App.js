import "./App.css";
import ConatactList from "./components/ContactList";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<ConatactList />
		</ThemeProvider>
	);
}

export default App;

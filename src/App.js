import './App.css';
import Container from './components/Container';
import { CountryProvider } from './context/CountryContext';

function App() {
  return (
    <CountryProvider>
      <Container />
    </CountryProvider>
  );
}

export default App;

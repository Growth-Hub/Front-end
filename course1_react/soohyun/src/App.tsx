import { Outlet } from 'react-router-dom';
import Header from './layouts/Header';
import GeneralStyles from './styles/GeneralStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GeneralStyles />
        <Header />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;

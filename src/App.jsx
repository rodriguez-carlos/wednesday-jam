import { ThemeProvider } from '@emotion/react';
import Router from './Router';
import Theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
          <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;

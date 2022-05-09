import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes/index.routes';
import { RecipeContext } from './context/RecipeContext';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  const { theme } = useContext(RecipeContext);

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import Routes from './routes/index.routes';
import RecipeProvider from './context/RecipeContext';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <RecipeProvider>
      <GlobalStyles />
      <Routes />
    </RecipeProvider>
  );
}

export default App;

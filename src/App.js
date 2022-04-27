import React from 'react';
import Routes from './routes/index.routes';
import RecipeProvider from './context/RecipeContext';

function App() {
  return (
    <RecipeProvider>
      <Routes />
    </RecipeProvider>
  );
}

export default App;

import React from 'react';

import { ThemeProvider } from '../theme/ThemeContext';
import GlobalStyles from '../styles/GlobalStyles';

function App({ children }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default App;

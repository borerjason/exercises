import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Display from '../Display';

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="Daily Exercises"
      />
      <Display />
    </div>
  </MuiThemeProvider>
);

export default App;

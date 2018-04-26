import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../../components/Header';
import Display from '../Display';

const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <Header />
        <Display />
      </div>
    </MuiThemeProvider>
  );
};

export default App;

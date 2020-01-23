import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Web3ReactProvider} from '@web3-react/core';
import {createMuiTheme} from '@material-ui/core/styles';
import Routes from './Routes';
import { MuiThemeProvider } from '@material-ui/core/styles'
import {store, history} from './store';
import getLibrary from './web3/getLibrary'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#080808',
        },
        secondary: {
            main: '#fff9f8',
        }
    },
});

function App() {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                <Router>
                    <Routes/>
                </Router>
                </MuiThemeProvider>
            </Provider>
        </Web3ReactProvider>
    );
}

export default App;
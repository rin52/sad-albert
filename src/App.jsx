import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import MainScreen from './components/mainScreen/MainScreen';
import Colors from './helper/Colors';

const themeColors = {
    palette: {
        primary: {
            main: Colors.accent,
        },
        secondary: {
            main: '#97702F',
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                color: Colors.text,
            },
        },
        MuiTabs: {
            root: {
                background: Colors.button,
            }
        },
        MuiTextField: {
            root: {
                color: Colors.text,
                borderColor: Colors.text,
            }
        },
        MuiList: {
            padding: {
                paddingBottom: '0px',
                paddingTop: '0px',
            }
        },

        MuiInput: {
            input: {
                color: Colors.text,
            },
            underline: {
                '&:before': {
                    borderBottomColor: Colors.text,
                },
                '&:hover:not($disabled):before': {
                    borderBottomColor: '#f0cb0b',
                },
                '&:after': {
                    borderBottomColor: '#f0cb0b',
                }
            }
        },
        MuiInputBase: {
            input: {
                color: Colors.text,
            }
        },
        MuiInputLabel: {
            root: {
                color: Colors.text,
            }
        },
        MuiButton: {
            root: {
                color: Colors.buttonText,
                backgroundColor: Colors.button,
                '&:hover': {
                    backgroundColor: Colors.text
                },
                '&:disabled': {
                    backgroundColor: Colors.disabledButton,
                    color: Colors.disabledText,
                },
            }
        },
        MuiTooltip: {
            tooltip: {
                color: Colors.text,
                backgroundColor: Colors.background,
                borderColor: Colors.greyBorder,
            },
        },
        MuiSwitch: {
            track: {
                backgroundColor: Colors.accent,
            },
        },
        MuiCheckbox: {
            root: {
                color: Colors.button,
            }
        }
    }
};

const theme = createMuiTheme(themeColors);

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <MainScreen />
            </MuiThemeProvider>
        );
    }
}

export default App;
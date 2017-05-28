import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Nav from '../Nav/Nav'
import Calc from '../Calc/Calc'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <div>
                    <Nav/>
                    <Calc/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App

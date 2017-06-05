import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import Calc from './Calc'
import Setup from './Setup'

class App extends React.Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <div>
                        <Nav/>

                        <Route exact path="/" component={Calc}/>
                        <Route path="/calc" component={Calc}/>
                        <Route path="/setup" component={Setup}/>
                    </div>
                </MuiThemeProvider>
            </Router>
        )
    }
}

export default App

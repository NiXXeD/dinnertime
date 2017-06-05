import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {HashRouter, Route} from 'react-router-dom'

import Nav from './Nav'
import Calc from './Calc'
import Setup from './Setup'

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <div>
                        <Nav/>

                        <Route exact path="/" component={Calc}/>
                        <Route path="/calc" component={Calc}/>
                        <Route path="/setup" component={Setup}/>
                    </div>
                </MuiThemeProvider>
            </HashRouter>
        )
    }
}

export default App

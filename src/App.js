import React from 'react'
import MuiThemeProviderOld from 'material-ui/styles/MuiThemeProvider'
import {MuiThemeProvider, createMuiTheme} from 'material-ui-next/styles'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {Router, Route} from 'react-router-dom'
import history from './history'

import Nav from './Nav'
import Calc from './Calc'
import BulkCalc from './BulkCalc'
import Setup from './Setup'

const theme = createMuiTheme({
    palette: {type: 'dark'}
})

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <MuiThemeProviderOld muiTheme={getMuiTheme(darkBaseTheme)}>
                    <MuiThemeProvider theme={theme}>
                        <div>
                            <Nav/>

                            <Route exact path="/" component={Calc}/>
                            <Route path="/calc" component={Calc}/>
                            <Route path="/bulk" component={BulkCalc}/>
                            <Route path="/setup" component={Setup}/>
                        </div>
                    </MuiThemeProvider>
                </MuiThemeProviderOld>
            </Router>
        )
    }
}

export default App

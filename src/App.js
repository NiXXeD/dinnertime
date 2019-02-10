import React from 'react'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {HashRouter, Route} from 'react-router-dom'

import Nav from './nav/Nav'
import Calc from './calc/Calc'
import BulkCalc from './calc/BulkCalc'
import Setup from './setup/Setup'
import Milestones from './milestones/Milestones'

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    },
    typography: {
        useNextVariants: true
    }
})

function App() {
    return (
        <HashRouter>
            <MuiThemeProvider theme={theme}>
                <div>
                    <Nav/>

                    <Route exact path="/" component={Calc}/>
                    <Route path="/calc" component={Calc}/>
                    <Route path="/bulk" component={BulkCalc}/>
                    <Route path="/setup" component={Setup}/>
                    <Route path="/milestones" component={Milestones}/>
                </div>
            </MuiThemeProvider>
        </HashRouter>
    )
}

export default App

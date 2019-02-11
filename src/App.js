import React from 'react'
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
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
            <ThemeProvider theme={theme}>
                <div>
                    <Nav/>

                    <Route exact path="/" component={Calc}/>
                    <Route path="/calc" component={Calc}/>
                    <Route path="/bulk" component={BulkCalc}/>
                    <Route path="/setup" component={Setup}/>
                    <Route path="/milestones" component={Milestones}/>
                </div>
            </ThemeProvider>
        </HashRouter>
    )
}

export default App

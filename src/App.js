import React from 'react'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {BrowserRouter, Route} from 'react-router-dom'

import Nav from './nav/Nav'
import Calc from './calc/Calc'
import BulkCalc from './calc/BulkCalc'
import Setup from './setup/Setup'
import Milestones from './milestones/Milestones'

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    },
    // TODO: Remove. Workaround for unnecessary usage warning
    typography: {
        useNextVariants: true
    }
})

class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
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
            </BrowserRouter>
        )
    }
}

export default App

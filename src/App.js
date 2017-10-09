import React from 'react'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {BrowserRouter, Route} from 'react-router-dom'

import Nav from './Nav'
import Calc from './Calc'
import BulkCalc from './BulkCalc'
import Setup from './Setup'

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Nav/>

                        <Route exact path="/" component={Calc}/>
                        <Route path="/calc" component={Calc}/>
                        <Route path="/bulk" component={BulkCalc}/>
                        <Route path="/setup" component={Setup}/>
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        )
    }
}

export default App

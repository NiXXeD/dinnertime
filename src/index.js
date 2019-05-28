import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.getElementById('root'))

function render(Component) {
    ReactDOM.render(<Component/>, document.getElementById('root'))
}

render(App)

if (module.hot) {
    module.hot.accept('./App', () => {
        const next = require('./App').default
        render(next)
    })
}

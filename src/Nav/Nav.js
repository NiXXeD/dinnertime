import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import githubSvg from './github.svg'

const githubIcon = <IconButton target="_blank" href="https://github.com/NiXXeD/dinnertime">
    <img alt="github link" src={githubSvg}/>
</IconButton>

class Nav extends React.PureComponent {
    render() {
        return (
            <AppBar
                showMenuIconButton={false}
                title="Food Chain Magnate"
                iconElementRight={githubIcon}
            />
        )
    }
}

export default Nav

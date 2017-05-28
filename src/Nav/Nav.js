import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import githubSvg from './github.svg'

const githubUrl = 'https://github.com/NiXXeD/dinnertime'

class Nav extends React.PureComponent {
    render() {
        return (
            <AppBar
                showMenuIconButton={false}
                title="Food Chain Magnate"
                iconElementRight={<IconButton target="_blank" href={githubUrl}><img src={githubSvg}/></IconButton>}
            />
        )
    }
}

export default Nav

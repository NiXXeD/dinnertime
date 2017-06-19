import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import githubSvg from './github.svg'
import history from './history'

const githubIcon = <IconButton target="_blank" href="https://github.com/NiXXeD/dinnertime">
    <img alt="github link" src={githubSvg}/>
</IconButton>

const navLinks = [
    {url: '/calc', text: 'Dinnertime Calculator'},
    {url: '/setup', text: 'Setup Reference'}
]

class Nav extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {open: false}
    }

    toggleDrawer = () => this.setState({open: !this.state.open})
    handleClick = url => {
        history.push(url)
        this.setState({open: false})
    }
    requestChange = open => this.setState({open})

    render() {
        return (
            <div>
                <AppBar
                    onLeftIconButtonTouchTap={this.toggleDrawer}
                    title="Food Chain Magnate"
                    iconElementRight={githubIcon}
                />

                <Drawer docked={false} open={this.state.open} onRequestChange={this.requestChange}>
                    <AppBar showMenuIconButton={false} title="FCM Helper" style={{marginBottom: '24px'}}/>

                    {navLinks.map(navLink => (
                        <MenuItem key={navLink.url} onTouchTap={() => this.handleClick(navLink.url)}>
                            {navLink.text}
                        </MenuItem>
                    ))}
                </Drawer>
            </div>
        )
    }
}

export default Nav

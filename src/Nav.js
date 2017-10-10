import React from 'react'
import {withStyles} from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Drawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import {MenuItem} from 'material-ui/Menu'
import githubSvg from './github.svg'
import {Link} from 'react-router-dom'

class Nav extends React.PureComponent {
    state = {open: false}

    toggleDrawer = () => setTimeout(() => this.setState({open: !this.state.open}))

    render() {
        const {classes} = this.props

        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            className={classes.menuButton}
                            onClick={this.toggleDrawer}
                        >
                            <MenuIcon/>
                        </IconButton>

                        <Typography type="title" className={classes.title}>Food Chain Magnate</Typography>

                        <IconButton target="_blank" href="https://github.com/NiXXeD/dinnertime">
                            <img alt="github link" width="24" height="24" src={githubSvg}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer open={this.state.open} onRequestClose={this.toggleDrawer} className={classes.drawer}>
                    <AppBar position="static" color="primary" className={classes.drawerAppBar}>
                        <Toolbar>
                            <Typography type="title" className={classes.title}>FCM Helper</Typography>
                        </Toolbar>
                    </AppBar>

                    <Link className={classes.menuItem} to="/calc">
                        <MenuItem onClick={this.toggleDrawer}>Dinnertime Calculator</MenuItem>
                    </Link>
                    <Link className={classes.menuItem} to="/bulk">
                        <MenuItem onClick={this.toggleDrawer}>Bulk Sale Calculator</MenuItem>
                    </Link>
                    <Link className={classes.menuItem} to="/setup">
                        <MenuItem onClick={this.toggleDrawer}>Setup Reference</MenuItem>
                    </Link>
                </Drawer>
            </div>
        )
    }
}

const styles = theme => ({
    drawerAppBar: {
        marginBottom: 24
    },
    toolbar: {
        paddingLeft: 8,
        paddingRight: 8
    },
    title: {
        paddingLeft: 12,
        flex: 1
    },
    menuItem: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

export default withStyles(styles)(Nav)

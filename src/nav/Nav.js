import React, {useState} from 'react'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Drawer from '@material-ui/core/Drawer'
import githubSvg from './github.svg'
import {Link} from 'react-router-dom'

function Nav({classes}) {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const closeDrawer = () => setDrawerOpen(false)

    return (
        <React.Fragment>
            <AppBar position="static" color="primary">
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        className={classes.menuButton}
                        onClick={() => setDrawerOpen(!drawerOpen)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Typography variant="h6" color="inherit" className={classes.title}>
                        Food Chain Magnate
                    </Typography>

                    <IconButton target="_blank" href="https://github.com/NiXXeD/dinnertime">
                        <img alt="github link" width="24" height="24" src={githubSvg}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer open={drawerOpen} onClose={closeDrawer} className={classes.drawer}>
                <AppBar position="static" color="primary" className={classes.drawerAppBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>FCM Helper</Typography>
                    </Toolbar>
                </AppBar>

                <Link className={classes.menuItem} to="/calc">
                    <MenuItem onClick={closeDrawer}>Dinnertime Calculator</MenuItem>
                </Link>
                <Link className={classes.menuItem} to="/bulk">
                    <MenuItem onClick={closeDrawer}>Bulk Sale Calculator</MenuItem>
                </Link>
                <Link className={classes.menuItem} to="/setup">
                    <MenuItem onClick={closeDrawer}>Setup Reference</MenuItem>
                </Link>
                <Link className={classes.menuItem} to="/milestones">
                    <MenuItem onClick={closeDrawer}>Milestone Tracker</MenuItem>
                </Link>
            </Drawer>
        </React.Fragment>
    )
}

const styles = {
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
}

export default withStyles(styles)(Nav)

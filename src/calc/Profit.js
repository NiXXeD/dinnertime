import React from 'react'
import {withStyles} from '@material-ui/core/styles'

class Profit extends React.Component {
    render() {
        const {classes, value = 0} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.subheader}>Profit</div>
                <div className={classes.dollars}>{`$${value}`}</div>
            </div>
        )
    }
}

const styles = theme => ({
    container: {
        marginRight: 16,
        marginBottom: 16,
        width: '100%',
        display: 'inline-block',
        right: 0
    },
    subheader: {
        textAlign: 'right',
        color: theme.palette.text.secondary
    },
    dollars: {
        fontSize: '38px',
        fontWeight: 'bold',
        color: 'darkgreen',
        textAlign: 'right'
    }
})

export default withStyles(styles)(Profit)

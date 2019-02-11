import React from 'react'
import {makeStyles} from '@material-ui/styles'

function Profit({value = 0}) {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.subheader}>Profit</div>
            <div className={classes.dollars}>{`$${value}`}</div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
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
}), {useTheme: true})

export default Profit

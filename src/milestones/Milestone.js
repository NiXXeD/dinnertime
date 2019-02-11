import React from 'react'
import {makeStyles} from '@material-ui/styles'

function Milestone({index, milestone, onChange, value}) {
    const classes = useStyles()
    const {color, title, text} = milestone

    const handleClick = () => {
        let nextValue
        if (value === 'available') nextValue = 'mine'
        else if (value === 'mine') nextValue = 'unavailable'
        else nextValue = 'available'

        return onChange(index, nextValue)
    }

    return (
        <div
            className={classes.milestone}
            style={{backgroundColor: color}}
            onClick={handleClick}
        >
            {value === 'mine' && <div className={classes.checkmark}>✓</div>}
            {value === 'unavailable' && <div className={classes.x}>✗</div>}
            <div className={classes.container}>
                <div className={classes.title}>First {title}</div>
                <div className={classes.text}>{text}</div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    milestone: {
        margin: 8,
        width: 145,
        height: 145,
        userSelect: 'none',
        cursor: 'pointer',
        border: '1px solid black',
        borderRadius: 10
    },
    container: {
        margin: 6
    },
    title: {
        textAlign: 'center',
        fontWeight: 600,
        textTransform: 'uppercase',
        marginBottom: 12
    },
    text: {
        textAlign: 'center',
        fontSize: 'small'
    },
    checkmark: {
        fontSize: 'xx-large',
        color: 'green',
        position: 'absolute',
        left: 2,
        bottom: 0
    },
    x: {
        fontSize: 'xx-large',
        color: 'red',
        position: 'absolute',
        left: 4,
        bottom: 0
    }
})

export default Milestone

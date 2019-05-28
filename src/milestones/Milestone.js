import React from 'react'
import {makeStyles} from '@material-ui/styles'

function Milestone({index, milestone, onChange, value}) {
    const classes = useStyles()
    const {color, title, text, maxRoundTwo} = milestone

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
                {maxRoundTwo && <div className={classes.maxRoundTwo}>remove after<br/>round two</div>}
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    milestone: {
        margin: 8,
        width: 155,
        height: 155,
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
        marginBottom: 12,
        color: '#000'
    },
    text: {
        textAlign: 'center',
        fontSize: 'small',
        color: '#000'
    },
    maxRoundTwo: {
        width: 145,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 'small',
        color: '#f00',
        position: 'absolute',
        bottom: 4
    },
    checkmark: {
        fontSize: 'xx-large',
        color: '#0f0',
        position: 'absolute',
        left: 2,
        bottom: 0
    },
    x: {
        fontSize: 'xx-large',
        color: '#f00',
        position: 'absolute',
        left: 4,
        bottom: 0
    }
})

export default Milestone

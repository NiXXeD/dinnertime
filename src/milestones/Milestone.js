import React from 'react'
import {withStyles} from 'material-ui/styles'

class Milestone extends React.Component {
    handleClick = () => {
        const {index, value, onChange} = this.props

        let nextValue
        if (value === 'available') nextValue = 'mine'
        else if (value === 'mine') nextValue = 'unavailable'
        else nextValue = 'available'

        return onChange(index, nextValue)
    }

    render() {
        const {classes, milestone, value} = this.props
        const {color, title, text} = milestone

        return (
            <div
                className={classes.milestone}
                style={{backgroundColor: color}}
                onClick={this.handleClick}
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
}

const styles = theme => ({
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

export default withStyles(styles)(Milestone)

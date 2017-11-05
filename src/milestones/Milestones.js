import React from 'react'
import {withStyles} from 'material-ui/styles'
import Card, {CardActions, CardContent, CardHeader} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Masonry from 'react-masonry-component'
import milestoneData from './milestoneData'
import Milestone from './Milestone'

class Milestones extends React.Component {
    state = {...defaultState}

    componentDidMount() {
        try {
            let oldStorageData = localStorage.getItem(localStorageKey)
            let milestones = JSON.parse(oldStorageData)
            if (milestones) this.setState({milestones})
        } catch (ex) {
            console.log('Error loading local storage data: ', ex)
            localStorage.removeItem(localStorageKey)
        }
    }

    handleReset = () => {
        this.setState({...defaultState})
        localStorage.removeItem(localStorageKey)
    }

    handleChange = (index, value) => {
        this.setState(oldState => {
            let milestones = [...oldState.milestones]
            milestones[index] = value
            this.saveLocal(milestones)
            return {milestones}
        })
    }

    saveLocal(milestones) {
        let data = JSON.stringify(milestones)
        localStorage.setItem(localStorageKey, data)
    }

    render() {
        const {classes} = this.props
        const {milestones} = this.state

        return (
            <Card className={classes.card}>
                <CardHeader title="Milestone Tracker"/>
                <CardContent>
                    <Masonry>
                        {milestones.map((value, key) =>
                            <Milestone
                                key={key}
                                index={key}
                                milestone={milestoneData[key]}
                                value={value}
                                onChange={this.handleChange}
                            />
                        )}
                    </Masonry>
                </CardContent>
                <CardActions>
                    <Button color="accent" onClick={this.handleReset}>Reset</Button>
                </CardActions>
            </Card>
        )
    }
}

const localStorageKey = 'milestones'

const defaultState = {
    milestones: milestoneData.map(milestone => ('available'))
}

const styles = theme => ({
    card: {
        margin: 16,
        maxWidth: 850
    }
})

export default withStyles(styles)(Milestones)

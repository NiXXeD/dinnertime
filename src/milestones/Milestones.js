import React, {useEffect, useState} from 'react'
import Card from '@material-ui/core/Card/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import Masonry from 'react-masonry-component'
import milestoneData, {localStorageKey, defaultMilestones} from './milestoneData'
import Milestone from './Milestone'
import {makeStyles} from '@material-ui/styles'

function Milestones() {
    const classes = useStyles()
    const [milestones, setMilestones] = useState(() => {
        try {
            const oldStorageData = localStorage.getItem(localStorageKey)
            return JSON.parse(oldStorageData) || defaultMilestones
        } catch (ex) {
            console.log('Error loading local storage data: ', ex)
            localStorage.removeItem(localStorageKey)
        }
        return defaultMilestones
    })

    useEffect(() => {
        const data = JSON.stringify(milestones)
        localStorage.setItem(localStorageKey, data)
    }, [milestones])

    const reset = () => {
        setMilestones(defaultMilestones)

        localStorage.removeItem(localStorageKey)
    }

    const updateMilestones = (index, value) => {
        const newMilestones = [...milestones]
        newMilestones[index] = value
        setMilestones(newMilestones)
    }

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
                            onChange={updateMilestones}
                        />
                    )}
                </Masonry>
            </CardContent>
            <CardActions>
                <Button color="secondary" onClick={reset}>Reset</Button>
            </CardActions>
        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        margin: 16,
        maxWidth: 850
    }
})

export default Milestones

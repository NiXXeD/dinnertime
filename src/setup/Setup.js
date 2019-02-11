import React, {useState} from 'react'
import Card from '@material-ui/core/Card/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import playerData from './playerData'
import {makeStyles} from '@material-ui/styles'

function Setup() {
    const classes = useStyles()
    const [players, setPlayers] = useState(2)
    const data = playerData[players]

    return (
        <Card className={classes.card}>
            <CardHeader title="Setup Reference"/>
            <CardContent>
                <FormGroup>
                    {/* Players */}
                    <FormControl>
                        <InputLabel htmlFor="players">Players</InputLabel>
                        <Select
                            value={players}
                            onChange={event => setPlayers(event.target.value)}
                            input={<Input id="players"/>}
                        >
                            {
                                Object.keys(playerData).map(count =>
                                    <MenuItem key={count} value={count}>{`${count} players`}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    {/* Map Size */}
                    <Typography variant="subtitle1" color="textSecondary" className={classes.subheading}>
                        Map Size
                    </Typography>
                    <Typography variant="body2">{data.mapSize}</Typography>

                    {/* 1x Employees */}
                    <Typography variant="subtitle1" color="textSecondary" className={classes.subheading}>1x
                        Employees
                    </Typography>
                    <Typography variant="body2">{data.employees}</Typography>

                    {/* Billboards Removed */}
                    <Typography variant="subtitle1" color="textSecondary" className={classes.subheading}>
                        Billboards Removed</Typography>
                    <Typography variant="body2">{data.billboards}
                    </Typography>

                    {/* Reserve */}
                    <Typography variant="subtitle1" color="textSecondary" className={classes.subheading}>
                        Reserve
                    </Typography>
                    <Typography variant="body2">{data.reserve}</Typography>
                </FormGroup>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles({
    card: {
        margin: 16,
        maxWidth: 225
    },
    subheading: {
        marginTop: 16
    }
})

export default Setup

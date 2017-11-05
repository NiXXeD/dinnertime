import React from 'react'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardHeader} from 'material-ui/Card'
import Select from 'material-ui/Select'
import {MenuItem} from 'material-ui/Menu'
import Typography from 'material-ui/Typography'
import Input, {InputLabel} from 'material-ui/Input'
import {FormGroup, FormControl} from 'material-ui/Form'

class Setup extends React.Component {
    state = {players: 2}

    handleChange = name => event => this.setState({[name]: event.target.value})

    render() {
        const {classes} = this.props
        const {players} = this.state
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
                                onChange={this.handleChange('players')}
                                input={<Input id="players"/>}
                            >
                                {[2, 3, 4, 5].map(count =>
                                    <MenuItem key={count} value={count}>{`${count} players`}</MenuItem>)
                                }
                            </Select>
                        </FormControl>

                        {/* Map Size */}
                        <Typography type="subheading" className={classes.subheading}>Map Size</Typography>
                        <Typography type="body1">{data.mapSize}</Typography>

                        {/* 1x Employees */}
                        <Typography type="subheading" className={classes.subheading}>1x Employees</Typography>
                        <Typography type="body1">{data.employees}</Typography>

                        {/* Billboards Removed */}
                        <Typography type="subheading" className={classes.subheading}>Billboards Removed</Typography>
                        <Typography type="body1">{data.billboards}</Typography>

                        {/* Reserve */}
                        <Typography type="subheading" className={classes.subheading}>Reserve</Typography>
                        <Typography type="body1">{data.reserve}</Typography>
                    </FormGroup>
                </CardContent>
            </Card>
        )
    }
}

const playerData = {
    2: {
        mapSize: '3 x 3',
        employees: '1',
        billboards: '#2, #3, #12, #15, #16',
        reserve: '$100'
    },
    3: {
        mapSize: '3 x 4',
        employees: '1',
        billboards: '#2, #3, #15, #16',
        reserve: '$150'
    },
    4: {
        mapSize: '4 x 4',
        employees: '2',
        billboards: '#3, #16',
        reserve: '$200'
    },
    5: {
        mapSize: '4 x 5',
        employees: '3',
        billboards: 'None',
        reserve: '$250'
    }
}

const styles = theme => ({
    card: {
        margin: 16,
        maxWidth: 225
    },
    subheading: {
        marginTop: 16,
        color: theme.palette.text.secondary
    }
})

export default withStyles(styles)(Setup)

import React from 'react'
import {Card} from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

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

const players = [...Array(4)].map((v, i) => i + 2)
    .map(players => <MenuItem key={players} value={players} primaryText={`${players} players`}/>)

class Setup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {players: 2}
    }

    playersChanged = (event, index, players) => this.setState({players})

    render() {
        let data = playerData[this.state.players]

        return (
            <Card style={setupCardStyle}>
                <Subheader style={{paddingLeft: 0}}>Setup Reference</Subheader>

                {/* Players */}
                <SelectField
                    floatingLabelText="Players"
                    value={this.state.players}
                    onChange={this.playersChanged}
                >{players}</SelectField>

                {/* Map Size */}
                <Subheader style={subheaderStyle}>Map Size</Subheader>
                <span>{data.mapSize}</span>

                {/* 1x Employees */}
                <Subheader style={subheaderStyle}>1x Employees</Subheader>
                <span>{data.employees}</span>

                {/* Billboards Removed */}
                <Subheader style={subheaderStyle}>Billboards Removed</Subheader>
                <span>{data.billboards}</span>

                {/* Reserve */}
                <Subheader style={subheaderStyle}>Reserve</Subheader>
                <span>{data.reserve}</span>
            </Card>
        )
    }
}

const setupCardStyle = {
    margin: '16px',
    padding: '16px',
    maxWidth: '300px'
}

const subheaderStyle = {
    paddingLeft: 0,
    lineHeight: '24px',
    marginTop: '12px'
}

export default Setup

import React from 'react';
import { Button, View, Text } from 'react-native';
import convertResultToData from "../redux/ulities"
import { connect } from "react-redux"
import { setGraphData, setTableData } from "../redux/actions"
import Chart from "../components/Chart.component"
import Table from "../components/Table.component"

class HomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch("https://www.json-generator.com/api/json/get/bUgMRhYjKG?indent=2")
            .then(res => res.json())
            .then(
                (result) => {
                    const data = convertResultToData(result)
                    this.props.setTData(data.tableData)
                    this.props.setGData(data.graphData)
                    this.setState({ isLoaded: true })
                },
                (error) => {
                    window.alert(error)
                },
            )
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Sumeyye Uzgor's Project</Text>
                {this.state.isLoaded && <Chart />}
                {this.state.isLoaded && <Table navigation={this.props.navigation} />}

            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setGData: (graphData) => dispatch(setGraphData(graphData)),
        setTData: (tableData) => dispatch(setTableData(tableData))
    }
}

export default connect(null, mapDispatchToProps)(HomeScreen);

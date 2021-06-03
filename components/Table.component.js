import React from "react"
import { DataTable, Button } from 'react-native-paper';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {connect} from "react-redux"
import {setDetailsData} from "../redux/actions"
// import TouchableRow from "./TouchableRow.component"

function Table({ tableData, navigation, setDData }) {
    const [direction, setDirection] = useState()
    const handleAscending = () => {
        tableData.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.id > b.id) ? 1 : -1) : -1)
        setDirection("ascending")
    }
    const handleDescending = () => {
        tableData.sort((a, b) => (a.price < b.price) ? 1 : (a.price === b.price) ? ((a.id < b.id) ? 1 : -1) : -1)
        setDirection("descending")
    }
    const routeToDetails = (dData) => {
      setDData(dData)
      navigation.navigate('Details')
    }
    return (
        <View>
                <Button onPress={() => handleAscending()} style={{ width: "90vw", margin: "10px" }} mode="outlined">Sort By Price Ascending</Button>
                <Button onPress={() => handleDescending()} style={{ width: "90vw", margin: "10px" }} mode="outlined">Sort By Price Descending</Button>
            
            <DataTable style={{ width:"90vw", marginLeft:"2vw" }}>
                <DataTable.Header style={{ backgroundColor: "rgba(34,193,195,1)" }}>
                    <DataTable.Title>ID</DataTable.Title>
                    <DataTable.Title>Account Type</DataTable.Title>
                    <DataTable.Title>Display Name</DataTable.Title>
                    <DataTable.Title sortDirection={direction}>Price</DataTable.Title>

                </DataTable.Header>

                {tableData.map(
                    data =>
                    ( <TouchableOpacity key={data.id} onPressIn={() => routeToDetails(data)}>
                      <DataTable.Row  style={{ backgroundColor: data.color }} >
                        <DataTable.Cell>{data.id}</DataTable.Cell>
                        <DataTable.Cell>{data.accountType}</DataTable.Cell>
                        <DataTable.Cell>{data.displayName}</DataTable.Cell>
                        <DataTable.Cell>${data.price.toFixed(2)}</DataTable.Cell>

                    </DataTable.Row>
                    </TouchableOpacity>)
                )}

            </DataTable>
        </View >

    )
}
const mapStateToProps = state => ({
  tableData : state.tableData
})
const mapDispatchToProps = (dispatch) => ({
  setDData : (dData) => dispatch(setDetailsData(dData))
})
export default connect(mapStateToProps, mapDispatchToProps)(Table)
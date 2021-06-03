import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import {connect} from "react-redux"


function DetailsScreen({dData}) {
  const dKeys = dData ? Object.keys(dData) : []
  const dValues = dData ? Object.values(dData) : []
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
        
        {dData ? (
          <DataTable style={{ width:"90vw", marginLeft:"2vw", backgroundColor:dData.color }}>
            {
              dKeys.map(
              (key, idx) => (
                <DataTable.Row key={idx}>
                        <DataTable.Title>{key}</DataTable.Title>
                        <DataTable.Cell>{dValues[idx]}</DataTable.Cell>
                    </DataTable.Row>
              )
            )}

            </DataTable>
  
        ): <Text>Nothing To Show</Text>}
    </View>
  );
}
const mapStateToProps = (state) => ({
  dData : state.detailsData
})
export default connect(mapStateToProps)(DetailsScreen)


// "displayName": "ACC4073", 
//       "acceptedTradeQuantity": 30.7262760361826, 
//       "tradeDate": "2019-07-16T00:00:00", 
//       "price": 15.9194680051689, 
//       "volume": 111.436276036183, 
//       "role": "Sell", 
//       "accountType": "Retail", 
//       "quantity": 7, 
//       "id": 665612, 
//       "accountId": 4073
import React from "react"
import { DataTable } from 'react-native-paper';

export default class Button extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <DataTable.Row
      onPress={this.props.onPress}
      {...this.props}
      >
        {this.props.children}
      </DataTable.Row>
    )
  }
}
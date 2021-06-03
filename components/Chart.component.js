import React from "react"
import { LineChart } from "react-native-chart-kit";
import { View, Dimensions } from 'react-native';
import {connect} from "react-redux"

const chartConfig = {
  backgroundColor: "rgb(34, 193, 195)",
                    backgroundGradientFrom: "rgba(34, 193, 195, 1)",
                    backgroundGradientTo: "rgba(253, 187, 45, 1)",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
}
function Chart({ chartData }) {
    return (
            <LineChart
                data={{
                    labels: [...chartData.labels],
                    datasets: [
                        {
                            data: [...chartData.datasets],
                        }
                    ]
                }}
                width={Dimensions.get("window").width * 90 / 100}
                height={220}
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />

    )
}
const mapStateToProps = state => ({
  chartData: state.graphData
})
export default connect(mapStateToProps)(Chart)
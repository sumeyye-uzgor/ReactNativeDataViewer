const mainColors= ["rgba(252, 213, 206, 0.5)", "rgba(250, 225, 221, 0.5)", "rgba(248, 237, 235, 0.5)", "rgba(232, 232, 228, 0.5)", "rgba(216, 226, 220, 0.5)", "rgba(236, 228, 219, 0.5)"];
function convertResultToData(result){
  let date = null
  const datasets = result.graphData.map(
      function (gddata) {
          return (parseFloat(gddata.quantity))
      }
  )
  const labels = result.graphData.map(
      function (gldata) {
          date = gldata.date.split('T')[0].split('-')
          return (`${date[2]}.${date[1]}`)
      }
  )
  const colors = [...mainColors, ...mainColors, ...mainColors]
  const tableData  = result.nodes.slice(0, 18).map(
                            (item, idx) => ({ ...item, color: colors[idx] }))
  const data = {
    graphData: {labels: [...labels], datasets: [...datasets]}, tableData
  }
  return data
}

export default convertResultToData
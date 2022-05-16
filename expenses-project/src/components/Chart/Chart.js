import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
    const dataPointValues=props.dataPoints.map(dataPoint =>dataPoint.value);
    const totalmaxVal=Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalmaxVal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;

import ReactEcharts from 'echarts-for-react';

const BarChart = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130, 100, 90, 80, 70, 60],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
        itemStyle: {
          color: '#6434eb'
        }
      }
    ]
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '380px', width: '100%' }}
    />
  );
}

export default BarChart;

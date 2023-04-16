import ReactEcharts from 'echarts-for-react';

const PieChart = () => {
  const option = {
    legend: {},
    tooltip: {},
    series: [
      {
        name: 'Votes',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 12, name: 'Red', color: '#8B5CF6' },
          { value: 19, name: 'Blue', color: '#A78BFA' },
          { value: 3, name: 'Yellow', color: '#F6E05E' },
          { value: 5, name: 'Green', color: '#48BB78' },
          { value: 2, name: 'Purple', color: '#C084FC' },
          { value: 3, name: 'Orange', color: '#F6AD55' },
        ],
      },
    ],
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: '380px', width: '100%' }}
    />
  );
};

export default PieChart;

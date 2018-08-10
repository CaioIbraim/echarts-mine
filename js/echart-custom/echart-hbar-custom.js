function init_echart_hbar(theme, legendData, textTitle, subTextTitle, xAxisData, saveImageTitle, seriesDataSet){

  				  var echartBar = echarts.init(document.getElementById('mainb'), theme);

  				  echartBar.setOption({
  					title: {
  					  text: textTitle,
  					  subtext: subTextTitle
  					},
  					tooltip: {
  					  trigger: 'axis'
  					},
  					legend: {
  					  data: legendData
  					},
            toolbox: {
              show: true,
              feature: {
              saveAsImage: {
                show: true,
                title: saveImageTitle
              }
              }
            },
  					calculable: false,
  					xAxis: [{
  					  type: 'category',
  					  data: xAxisData
  					}],
  					yAxis: [{
  					  type: 'value'
  					}],
  					series: seriesDataSet
  				  });




}

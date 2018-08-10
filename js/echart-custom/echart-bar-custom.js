  function init_echart_bar(theme, legendData, textTitle, subTextTitle, yAxisData, saveImageTitle, seriesDataSet){

     var echartBar = echarts.init(document.getElementById('echart_bar_horizontal'), theme);

      echartBar.setOption({
      title: {
        text: textTitle,
        subtext: subTextTitle
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        x: 100,
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
      calculable: true,
      xAxis: [{
        type: 'value',
        boundaryGap: [0, 0.01]
      }],
      yAxis: [{
        type: 'category',
        data: yAxisData
      }],
      series: seriesDataSet
      });

  }

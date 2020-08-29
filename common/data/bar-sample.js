module.exports = {
  title: {
    text: '今日用料(kg)',
    textStyle: {
      fontSize: 20,
      fontWeight: 'lighter',
    },
    textAlign: 'left',
    textVerticalAlign: 'top',
    left: 0,
    top: 0,
  },
  legend: {
    top: 3,
    left: 200,
    itemWidth: 12,
    itemHeight: 12,
    textStyle: {
      color: 'rgba(0,0,0,.5)',
      fontSize: 12,
    },
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true,
      },
    },
    confine: true,
  },
  grid: {
    left: 0,
    right: 15,
    top: 40,
    bottom: 0,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    // data: 'name',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: 'rgba(0, 0, 0, .5)',
      interval: 0,
      formatter: function (value) {
        let ret = '';
        let maxLength = 3; // 每项最多显示文字的个数
        let valLength = value.length; // 获取X轴类目项的文字个数
        let rowN = Math.ceil(valLength / maxLength); // 如果需要换行，换几行
        if (rowN > 1) {
          // 需要换行的话
          if (valLength > 5) {
            // 实际上文字小于5并不需要换行
            for (let i = 0; i < rowN; i++) {
              let temp = ''; // 每行截取的字符串
              let start = i * maxLength; // 开始截取的位置
              let end = start + maxLength; // 结束截取的位置
              temp = value.substring(start, end) + '\n';
              ret += temp; // 拼接字符串
            }
            return ret;
          } else {
            return value;
          }
        } else {
          return value;
        }
      },
    },
  },
  yAxis: {
    type: 'value',
    // max: 100,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: true,
      length: 15,
      lineStyle: {
        color: 'rgba(0,0,0,.2)',
      },
    },
    axisLabel: {
      color: 'rgba(0,0,0,.5)',
      inside: false,
      align: 'center',
      verticalAlign: 'top',
      lineHeight: 20,
    },
  },
  series: [
    {
      type: 'bar',
      data: [
        81,
        79,
        79,
        75,
        79,
        79,
        74,
        74,
        74,
        99,
        70,
        80,
        80,
        77,
        99,
        69,
        71,
        73,
        74,
        70,
        71,
        67,
        72,
        73,
      ],
      name: '今日用料',
      label: {
        show: true,
        position: 'insideTop',
        verticalAlign: 'middle',
        align: 'left',
        rotate: -90,
        formatter: function (params) {
          if (params.value > 0) {
            return params.value;
          } else {
            return '';
          }
        },
        // distance: 10,
        // fontSize: 16,
      },
      itemStyle: {
        barBorderRadius: [6, 6, 6, 6],
        color: '#d265f5',
      },
      showBackground: true,
      backgroundStyle: {
        barBorderRadius: [6, 6, 6, 6],
        color: 'rgba(180, 180, 180, 0.2)',
      },
      barWidth: 26,
      barCategoryGap: '300%',
    },
  ],
  animationThreshold: 20,
};

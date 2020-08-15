var data = [];
for (var i = 0; i < 5; i++) {
  data.push(
    {
      value: 20,
      name: '',
      itemStyle: {
        normal: {
          borderWidth: 5,
          shadowBlur: 30,
          borderColor: 'red',
          shadowColor: 'rgba(142, 152, 241, 0.6)',
        },
      },
    },
    {
      value: 5,
      name: '',
      itemStyle: {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
        },
      },
    },
  );
}

module.exports = {
  backgroundColor: '#061740',
  series: [
    {
      name: '',
      type: 'pie',
      clockWise: false,
      radius: [195, 200],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          borderWidth: 5,
          shadowBlur: 30,
          borderColor: 'red',
          shadowColor: 'rgba(142, 152, 241, 0.6)',
          label: {
            show: false,
          },
        },
      },
      data: data,
    },
  ],
};

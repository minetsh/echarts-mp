module.exports = {
  series: [
    {
      backgroundStyle: { color: 'rgba(220, 220, 220, 0.8)' },
      data: [120, 200, 150, 80, 70, 110, 130],
      showBackground: true,
      type: 'bar',
    },
  ],
  xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    type: 'category',
  },
  yAxis: { type: 'value' },
};

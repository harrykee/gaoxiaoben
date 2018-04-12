import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#fff",
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],

    tooltip: {
      trigger: 'axis'
    },
    legend: {

      data: ['本科一批', '本科二批', '专科']
    },
    grid: {
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
    },
    yAxis: {
      x: 'center',
      type: 'value'
    },
    series: [{
      name: '本科一批',
      type: 'line',
      smooth: true,
      data: [573, 546, 501, 506, 525, 465, 441]
    }, {
      name: '本科二批',
      type: 'line',
      smooth: true,
      data: [460, 435, 400, 408, 410, 352, 333]
    }, {
      name: '专科',
      type: 'line',
      smooth: true,
      data: [325, 223, 201, 246, 266, 251, 236]
    }]
  };

  chart.setOption(option);
  return chart;
};

function initChart1(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#fff",
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],

    tooltip: {
      trigger: 'axis'
    },
    legend: {

      data: ['一批', '二批', '专科']
    },
    grid: {
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
    },
    yAxis: {
      x: 'center',
      type: 'value'
    },
    series: [{
      name: '本科一批',
      type: 'line',
      smooth: true,
      data: [573, 546, 501, 506, 525, 465, 441]
    }, {
      name: '本科二批',
      type: 'line',
      smooth: true,
      data: [460, 435, 400, 408, 410, 352, 333]
    }, {
      name: '专科',
      type: 'line',
      smooth: true,
      data: [325, 223, 201, 246, 266, 251, 236]
    }]
  };

  chart.setOption(option);
  return chart;
};

Page({
  data: {
    isShow: true,
    currentTab: 0,
    ec: {
      onInit: initChart
    }
  },


  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },

  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
    if (this.data.currentTab == 0){
      that.setData({
        ec: {
          onInit: initChart
        }
      })
    }
    if (this.data.currentTab == 1) {
      that.setData({
        ec: {
          onInit: initChart1
        }
      })
    }
  },

});

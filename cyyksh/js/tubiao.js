var one = echarts.init(document.getElementById('one'));
var oneOption = {
    //修改颜色 与数据对应
    color: ['#28537d', '#fcc01b', '#1e96ef'],
    tooltip: {
        trigger: 'item'
    },
    calculable: true,
    series: [
        {
            type: 'pie',
            radius: ['50%', '70%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [
                { value: 1600, name: '其余' },
                { value: 2630, name: '现孵化团队' },
                { value: 8765, name: '已孵化团队' },

            ]
        }
    ]
};

//累计评审
var ljps = echarts.init(document.getElementById('ljps'));
ljpsOption = {
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    grid: {
        y: "25%",
    },
    xAxis: [
        {
            type: 'category',
            data: ["2013", "2014", "2015", "2016", "2017", "2018"],
            axisLine: {
                show: true,
                lineStyle: {
                    color: ['#72c5eb'],
                    opacity: 0.3
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: ['#72c5eb'],
                    opacity: 0.3
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#72c5eb'],
                    opacity: 0.3
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                }
            }
        }
    ],
    series: [
        {
            type: 'pictorialBar',
            symbol: 'rect',
            // type: 'bar',
            symbolRepeat: true,
            symbolSize: [43, 4],
            symbolMargin: 1,
            z: -10,
            data: [430, 730, 680, 823, 512, 555],
            // barWidth: '63%',
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' }
                ]
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 5, 5, 0],
                    color: "#2c6daa"
                }
            }
        }
    ]
};

//总收入
var zsr = echarts.init(document.getElementById('zsr'));
var zsrOption = {
    color: ["#2c6daa"],
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        y: "20%",
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#72c5eb',
                    opacity: 0.3
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#72c5eb',
                    opacity: 0.3
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#72c5eb'],
                    opacity: 0.3
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                }
            }
        }
    ],
    series: [
        {
            name: '成交',
            type: 'line',
            smooth: false,
            itemStyle: { normal: { areaStyle: { type: 'default' } } },
            data: [102, 102, 121, 134, 146, 130, 110, 103, 107, 120, 132, 110],
        }
    ]
};
//风险投资
var fxtz = echarts.init(document.getElementById('fxtz'));
var fxtzOption = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        y: "30%",
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            axisLine: {
                show: true,
                lineStyle: {
                    color: ['#72c5eb'],
                    opacity: 0.3
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: ['#72c5eb'],
                    opacity: 0.3
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#72c5eb'],
                    opacity: 0.3
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                }
            }
        }
    ],
    series: [
        {
            type: 'bar',
            data: [102, 102, 121, 134, 146, 130, 110, 103, 107, 120, 132, 110],
            barWidth: '43%',
            markPoint: {
                data: [
                    { type: 'max', name: '最大值' }
                ]
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 5, 5, 0],
                    color: "#2c6daa"
                }
            }
        }
    ]
};
$(function () {
    //累计入住情况
    one.setOption(oneOption);
    //累计评审
    ljps.setOption(ljpsOption);
    //总收入
    zsr.setOption(zsrOption);
    //风险投资
    fxtz.setOption(fxtzOption);
    window.addEventListener('resize', function () {
        //gzMap.resize();
        one.resize();
        ljps.resize();
        zsr.resize();
        fxtz.resize();
    });
});


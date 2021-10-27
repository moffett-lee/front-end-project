var zyly = echarts.init(document.getElementById('zyly'));
var zylyOption = {
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
//孵化成长率
var fhczl = echarts.init(document.getElementById('fhczl'));
var fhczlOption = {
    //修改颜色 与数据对应
    color: ['#56baca','#2d3c41'],
    tooltip: {
        trigger: 'item'
    },
    calculable: true,
    series: [
        {
            type: 'pie',
            radius: ['88%', '90%'],
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
                { value: 64 },
                { value: 36 }
            ]
        }
    ]
};
//服务指标
var fwzb = echarts.init(document.getElementById('fwzb'));
var fwzbOption = {
    color:["#13de7d","#846aec","#f25f64","#f28e1a","#379dec","#a051e6","#3071f8"],
    calculable : true,
    series : [
        {
            type:'pie',
            radius : [30, 110],
            center : ['45%',"60%"],
            roseType : 'area',
            data:[
                {value:15, name:'15%科技创新体系'},
                {value:17, name:'17%技术创新体系'},
                {value:23, name:'23%其他'},
                {value:8, name:'8%生产性服务业'},
                {value:8.5, name:'8.5%顾客参与度'},
                {value:11, name:'11%顾客满意度'},
                {value:13, name:'13%创业案例'}
            ]
        }
    ]
};
//信用指数
var xyzs = echarts.init(document.getElementById('xyzs'));
var xyzsOption =  {
    radar: {
        indicator: [
            {name: '市场经济体制', max: 100},
            {name: '贷款风险', max: 100},
            {name: '项目信用评级', max: 100},
            {name: '经营能力', max: 100},
            {name: '流动性', max: 100},
            {name: '盈利性', max: 100},
            {name: '资本充足率', max: 100},
            {name: '综合指数', max: 100}
        ],
        radius: 65,
        shape: 'circle',
        splitNumber: 5,
        name: {
            textStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color:"#062551"
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#062551'
            }
        }
    },
    series: [
        {
            type: 'radar',
            data:[[55,12,56,13,46,33,69,43]],
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#2ceeff'
                }
            },
            areaStyle: {
                normal: {
                    opacity:0.1
                }
            }
        }
    ]
};
$(function () {
    //资源利用
    zyly.setOption(zylyOption,true);
    //
    fhczl.setOption(fhczlOption);
    //服务指标
    fwzb.setOption(fwzbOption);
    //信用指数
    xyzs.setOption(xyzsOption);
    window.addEventListener('resize', function () {
        zyly.resize();
        fhczl.resize();
        fwzb.resize();
        xyzs.resize();
    });  
});

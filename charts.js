$(document).ready(function(){    
    loadData();
});


function loadData() {
    
    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "text",
        success: parseData
    });
    //code
};
function parseData(data) {
    
    screenWidth = $(window).width();
    if (screenWidth <= 410) {
        isPhone = true;
        //code      
    }
    
    writeChart();
    //code
};
function writeChart() {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Obsecales'
        },
        subtitle: {
            text: 'Information from DHS'
        },
        xAxis:
            
   
        
        {
             title: {
                text: null
            },
            
            
        yAxis: {
            min: 0,
            title: {
                text: 'Percent',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        
        tooltip: {
            valueSuffix: ' percent'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'none',
            data: none
        }, {
            name: 'primary',
            data: primary
        }, {
            name: 'secondary',
            data: secondary
        }]
            
    
        },
        
        yAxis: {
            min: 0,
            title: {
                text: 'Percent',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        
        tooltip: {
            valueSuffix: ' percent'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'none',
            data: none
        }, {
            name: 'primary',
            data: primary
        }, {
            name: 'secondary',
            data: secondary
        }]
        
        
        
        
        
        
        
        
        
        
        
    });
};
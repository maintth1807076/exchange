'use strict'
const coinApp = {};
($ => {
  coinApp.init = () => {
    coinApp.mainHeaderSearchToggle()
    coinApp.coinAppBannerHero()
    coinApp.coinTabsContent()
    coinApp.coinSelectNetwork()
    coinApp.coinChartPrice()
    $('.icon-tooltip').tooltip()
  }

  coinApp.mainHeaderSearchToggle = function () {
    $('.btn-header-search-toggle').on('click', function (e) {
      e.preventDefault()
      $('.home-header-search').toggle()
    })
  }
  coinApp.coinAppBannerHero = function() {
    // eslint-disable-next-line no-undef
    const swiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }

  coinApp.coinTabsContent = function() {
    $('#myTab a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })

    $('#withdrawTabs a').on('click', function(e) {
      e.preventDefault()
      $(this).tab('show')
    })
  }

  coinApp.coinSelectNetwork = function() {
    $('.select-network button').each(function () {
      $(this).on('click', function(e) {
        e.preventDefault();
        $(this).addClass('network-selected');
        $(this).siblings().removeClass('network-selected');
      })
    })
  }

  coinApp.coinChartPrice = function () {
    const BNBAreaData = {
      labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7'],
      datasets: [
        {
          label: 'BNB/BUSD',
          fillColor: 'rgba(0,0,0,1)',
          backgroundColor: 'rgba(242, 208, 85,0.2)',
          pointColor: 'rgba(220,180,0,1)',
          data: [20, 30, 80, 20, 40, 10, 60]
        }
      ]
    }

    const BTCAreaData = {
      labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7'],
      datasets: [
        {
          label: 'BTC/BUSD',
          fillColor: 'rgba(0,0,0,0)',
          backgroundColor: 'rgba(242, 208, 85,0.2)',
          pointColor: 'rgba(220,180,0,1)',
          data: [5, 30, 80, 20, 40, 30, 80]
        }
      ]
    }

    const ETHAreaData = {
      labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7'],
      datasets: [
        {
          label: 'ETH/BUSD',
          fillColor: 'rgba(0,0,0,0)',
          backgroundColor: 'rgba(242, 208, 85,0.2)',
          pointColor: 'rgba(220,180,0,1)',
          data: [60, 10, 40, 30, 80, 30, 20]
        }
      ]
    }

    const settings = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      },
      animation: {
        duration: 4000,
        easing: 'easeOutElastic'
      },
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Title of the chart',
        fontStyle: 'normal',
        fontFamily: 'Segoe UI',
        fontSize: 14
      },
      scales: {
        yAxes: [
          {
            display: false,
            ticks: {
              max: 100, // minimum will be 0, unless there is a lower value.
              beginAtZero: true, // minimum value will be 0.
              stepSize: 10
            }
          }
        ],
        xAxes: [
          {
            display: false
          }
        ]
      }
    };

    $(document).ready(function(){
      // BNB Area chart
      const BNBAreaChartDom = document.getElementById("BNBAreaChartDom");
      const BNBLineChart = new Chart (BNBAreaChartDom, {
        type: 'line',
        data: BNBAreaData,
        options: settings,
      });

      const BTCAreaChartDom = document.getElementById("BTCAreaChartDom");
      const BTCLineChart = new Chart (BTCAreaChartDom, {
        type: 'line',
        data: BTCAreaData,
        options: settings,
      });

      const ETHAreaChartDom = document.getElementById("ETHAreaChartDom");
      const ETHLineChart = new Chart (ETHAreaChartDom, {
        type: 'line',
        data: ETHAreaData,
        options: settings,
      });

    });
  }

  $(() => {
    coinApp.init()
  })
})(jQuery) // eslint-disable-line no-undef

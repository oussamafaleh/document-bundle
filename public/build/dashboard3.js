(self["webpackChunk"] = self["webpackChunk"] || []).push([["dashboard3"],{

/***/ "./public/assets/js/pages/dashboard3.js":
/*!**********************************************!*\
  !*** ./public/assets/js/pages/dashboard3.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "../../../../../../node_modules/jquery/dist/jquery.js");
/* global Chart:false */
$(function () {
  'use strict';

  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  };
  var mode = 'index';
  var intersect = true;
  var $salesChart = $('#sales-chart'); // eslint-disable-next-line no-unused-vars

  var salesChart = new Chart($salesChart, {
    type: 'bar',
    data: {
      labels: ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: [1000, 2000, 3000, 2500, 2700, 2500, 3000]
      }, {
        backgroundColor: '#ced4da',
        borderColor: '#ced4da',
        data: [700, 1700, 2700, 2000, 1800, 1500, 2000]
      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            // Include a dollar sign in the ticks
            callback: function callback(value) {
              if (value >= 1000) {
                value /= 1000;
                value += 'k';
              }

              return '$' + value;
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  });
  var $visitorsChart = $('#visitors-chart'); // eslint-disable-next-line no-unused-vars

  var visitorsChart = new Chart($visitorsChart, {
    data: {
      labels: ['18th', '20th', '22nd', '24th', '26th', '28th', '30th'],
      datasets: [{
        type: 'line',
        data: [100, 120, 170, 167, 180, 177, 160],
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        pointBorderColor: '#007bff',
        pointBackgroundColor: '#007bff',
        fill: false // pointHoverBackgroundColor: '#007bff',
        // pointHoverBorderColor    : '#007bff'

      }, {
        type: 'line',
        data: [60, 80, 70, 67, 80, 77, 100],
        backgroundColor: 'tansparent',
        borderColor: '#ced4da',
        pointBorderColor: '#ced4da',
        pointBackgroundColor: '#ced4da',
        fill: false // pointHoverBackgroundColor: '#ced4da',
        // pointHoverBorderColor    : '#ced4da'

      }]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            suggestedMax: 200
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  });
}); // lgtm [js/unused-local-variable]

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./public/assets/js/pages/dashboard3.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2pzL3BhZ2VzL2Rhc2hib2FyZDMuanMiXSwibmFtZXMiOlsiJCIsInRpY2tzU3R5bGUiLCJmb250Q29sb3IiLCJmb250U3R5bGUiLCJtb2RlIiwiaW50ZXJzZWN0IiwiJHNhbGVzQ2hhcnQiLCJzYWxlc0NoYXJ0IiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJvcHRpb25zIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRvb2x0aXBzIiwiaG92ZXIiLCJsZWdlbmQiLCJkaXNwbGF5Iiwic2NhbGVzIiwieUF4ZXMiLCJncmlkTGluZXMiLCJsaW5lV2lkdGgiLCJjb2xvciIsInplcm9MaW5lQ29sb3IiLCJ0aWNrcyIsImV4dGVuZCIsImJlZ2luQXRaZXJvIiwiY2FsbGJhY2siLCJ2YWx1ZSIsInhBeGVzIiwiJHZpc2l0b3JzQ2hhcnQiLCJ2aXNpdG9yc0NoYXJ0IiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuZENvbG9yIiwiZmlsbCIsInN1Z2dlc3RlZE1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQUEsQ0FBQyxDQUFDLFlBQVk7QUFDWjs7QUFFQSxNQUFJQyxVQUFVLEdBQUc7QUFDZkMsYUFBUyxFQUFFLFNBREk7QUFFZkMsYUFBUyxFQUFFO0FBRkksR0FBakI7QUFLQSxNQUFJQyxJQUFJLEdBQUcsT0FBWDtBQUNBLE1BQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUVBLE1BQUlDLFdBQVcsR0FBR04sQ0FBQyxDQUFDLGNBQUQsQ0FBbkIsQ0FYWSxDQVlaOztBQUNBLE1BQUlPLFVBQVUsR0FBRyxJQUFJQyxLQUFKLENBQVVGLFdBQVYsRUFBdUI7QUFDdENHLFFBQUksRUFBRSxLQURnQztBQUV0Q0MsUUFBSSxFQUFFO0FBQ0pDLFlBQU0sRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsS0FB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RSxZQUhuQjtBQUlFQyxtQkFBVyxFQUFFLFNBSmY7QUFLRXFCLHdCQUFnQixFQUFFLFNBTHBCO0FBTUVDLDRCQUFvQixFQUFFLFNBTnhCO0FBT0VDLFlBQUksRUFBRSxLQVBSLENBUUU7QUFDQTs7QUFURixPQVhVO0FBRk4sS0FEc0M7QUEwQjVDdEIsV0FBTyxFQUFFO0FBQ1BDLHlCQUFtQixFQUFFLEtBRGQ7QUFFUEMsY0FBUSxFQUFFO0FBQ1JiLFlBQUksRUFBRUEsSUFERTtBQUVSQyxpQkFBUyxFQUFFQTtBQUZILE9BRkg7QUFNUGEsV0FBSyxFQUFFO0FBQ0xkLFlBQUksRUFBRUEsSUFERDtBQUVMQyxpQkFBUyxFQUFFQTtBQUZOLE9BTkE7QUFVUGMsWUFBTSxFQUFFO0FBQ05DLGVBQU8sRUFBRTtBQURILE9BVkQ7QUFhUEMsWUFBTSxFQUFFO0FBQ05DLGFBQUssRUFBRSxDQUFDO0FBQ047QUFDQUMsbUJBQVMsRUFBRTtBQUNUSCxtQkFBTyxFQUFFLElBREE7QUFFVEkscUJBQVMsRUFBRSxLQUZGO0FBR1RDLGlCQUFLLEVBQUUsbUJBSEU7QUFJVEMseUJBQWEsRUFBRTtBQUpOLFdBRkw7QUFRTkMsZUFBSyxFQUFFM0IsQ0FBQyxDQUFDNEIsTUFBRixDQUFTO0FBQ2RDLHVCQUFXLEVBQUUsSUFEQztBQUVkUyx3QkFBWSxFQUFFO0FBRkEsV0FBVCxFQUdKckMsVUFISTtBQVJELFNBQUQsQ0FERDtBQWNOK0IsYUFBSyxFQUFFLENBQUM7QUFDTlosaUJBQU8sRUFBRSxJQURIO0FBRU5HLG1CQUFTLEVBQUU7QUFDVEgsbUJBQU8sRUFBRTtBQURBLFdBRkw7QUFLTk8sZUFBSyxFQUFFMUI7QUFMRCxTQUFEO0FBZEQ7QUFiRDtBQTFCbUMsR0FBMUIsQ0FBcEI7QUErREQsQ0E5SUEsQ0FBRCxDLENBZ0pBLGtDIiwiZmlsZSI6ImRhc2hib2FyZDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgQ2hhcnQ6ZmFsc2UgKi9cblxuJChmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIHZhciB0aWNrc1N0eWxlID0ge1xuICAgIGZvbnRDb2xvcjogJyM0OTUwNTcnLFxuICAgIGZvbnRTdHlsZTogJ2JvbGQnXG4gIH1cblxuICB2YXIgbW9kZSA9ICdpbmRleCdcbiAgdmFyIGludGVyc2VjdCA9IHRydWVcblxuICB2YXIgJHNhbGVzQ2hhcnQgPSAkKCcjc2FsZXMtY2hhcnQnKVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIHNhbGVzQ2hhcnQgPSBuZXcgQ2hhcnQoJHNhbGVzQ2hhcnQsIHtcbiAgICB0eXBlOiAnYmFyJyxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbHM6IFsnSlVOJywgJ0pVTCcsICdBVUcnLCAnU0VQJywgJ09DVCcsICdOT1YnLCAnREVDJ10sXG4gICAgICBkYXRhc2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwN2JmZicsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDA3YmZmJyxcbiAgICAgICAgICBkYXRhOiBbMTAwMCwgMjAwMCwgMzAwMCwgMjUwMCwgMjcwMCwgMjUwMCwgMzAwMF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNjZWQ0ZGEnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2NlZDRkYScsXG4gICAgICAgICAgZGF0YTogWzcwMCwgMTcwMCwgMjcwMCwgMjAwMCwgMTgwMCwgMTUwMCwgMjAwMF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXG4gICAgICB0b29sdGlwczoge1xuICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICBpbnRlcnNlY3Q6IGludGVyc2VjdFxuICAgICAgfSxcbiAgICAgIGhvdmVyOiB7XG4gICAgICAgIG1vZGU6IG1vZGUsXG4gICAgICAgIGludGVyc2VjdDogaW50ZXJzZWN0XG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICB9LFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgIC8vIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogJzRweCcsXG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjIpJyxcbiAgICAgICAgICAgIHplcm9MaW5lQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpY2tzOiAkLmV4dGVuZCh7XG4gICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcblxuICAgICAgICAgICAgLy8gSW5jbHVkZSBhIGRvbGxhciBzaWduIGluIHRoZSB0aWNrc1xuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPj0gMTAwMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlIC89IDEwMDBcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSAnaydcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAnJCcgKyB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHRpY2tzU3R5bGUpXG4gICAgICAgIH1dLFxuICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpY2tzOiB0aWNrc1N0eWxlXG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHZhciAkdmlzaXRvcnNDaGFydCA9ICQoJyN2aXNpdG9ycy1jaGFydCcpXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgdmlzaXRvcnNDaGFydCA9IG5ldyBDaGFydCgkdmlzaXRvcnNDaGFydCwge1xuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsczogWycxOHRoJywgJzIwdGgnLCAnMjJuZCcsICcyNHRoJywgJzI2dGgnLCAnMjh0aCcsICczMHRoJ10sXG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBkYXRhOiBbMTAwLCAxMjAsIDE3MCwgMTY3LCAxODAsIDE3NywgMTYwXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICBib3JkZXJDb2xvcjogJyMwMDdiZmYnLFxuICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnIzAwN2JmZicsXG4gICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnIzAwN2JmZicsXG4gICAgICAgIGZpbGw6IGZhbHNlXG4gICAgICAgIC8vIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjMDA3YmZmJyxcbiAgICAgICAgLy8gcG9pbnRIb3ZlckJvcmRlckNvbG9yICAgIDogJyMwMDdiZmYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIGRhdGE6IFs2MCwgODAsIDcwLCA2NywgODAsIDc3LCAxMDBdLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0YW5zcGFyZW50JyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICcjY2VkNGRhJyxcbiAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNjZWQ0ZGEnLFxuICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNjZWQ0ZGEnLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgICAgICAvLyBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2NlZDRkYScsXG4gICAgICAgIC8vIHBvaW50SG92ZXJCb3JkZXJDb2xvciAgICA6ICcjY2VkNGRhJ1xuICAgICAgfV1cbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgdG9vbHRpcHM6IHtcbiAgICAgICAgbW9kZTogbW9kZSxcbiAgICAgICAgaW50ZXJzZWN0OiBpbnRlcnNlY3RcbiAgICAgIH0sXG4gICAgICBob3Zlcjoge1xuICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICBpbnRlcnNlY3Q6IGludGVyc2VjdFxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHNjYWxlczoge1xuICAgICAgICB5QXhlczogW3tcbiAgICAgICAgICAvLyBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgICBsaW5lV2lkdGg6ICc0cHgnLFxuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIC4yKScsXG4gICAgICAgICAgICB6ZXJvTGluZUNvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aWNrczogJC5leHRlbmQoe1xuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgICAgICBzdWdnZXN0ZWRNYXg6IDIwMFxuICAgICAgICAgIH0sIHRpY2tzU3R5bGUpXG4gICAgICAgIH1dLFxuICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRpY2tzOiB0aWNrc1N0eWxlXG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfVxuICB9KVxufSlcblxuLy8gbGd0bSBbanMvdW51c2VkLWxvY2FsLXZhcmlhYmxlXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
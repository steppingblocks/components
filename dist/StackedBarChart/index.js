import { d as _objectWithoutProperties, c as _extends } from '../chunk-c69f4c9d.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import { w as withTheme } from '../withTheme/index-d1a984d4.js';
import 'styled-components';
import '../chunk-69193f69.js';
import '../chunk-f27d627d.js';
import { N as NumberOrStringPT } from '../chunk-4be27f4f.js';
import { R as ReactEcharts } from '../chunk-5b9c5908.js';

/**
 * ==================================================
 * StackedBarChart
 * ==================================================
 */

var generateFakeStackedBarChartData = function generateFakeStackedBarChartData() {
  return [['Category', '2015', '2016', '2017', '2018', '2019'], ['Matcha Latte', 43.3, 85.8, 93.7, 32.4, 10.2], ['Milk Tea', 83.1, 73.4, 55.1, 23.4, 8.8], ['Cheese Cocoa', 86.4, 65.2, 82.5, 15.3, 15.2], ['Walnut Brownie', 72.4, 53.9, 39.1, 42.1, 13.3]];
};
var StackedBarChart = withTheme(function (_ref) {
  var data = _ref.data,
      height = _ref.height,
      rest = _objectWithoutProperties(_ref, ["data", "height"]);

  var option = {
    legend: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    dataset: {
      source: data
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category'
    },
    series: data && data[0].map(function (_, index) {
      if (index !== 0) {
        return {
          type: 'bar',
          stack: 'sample',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          }
        };
      }
    })
  };
  return React__default.createElement(ReactEcharts, _extends({
    option: option,
    style: {
      height: height ? height : '400px',
      width: '100%'
    }
  }, rest));
});
StackedBarChart.propTypes = {
  className: PropTypes__default.string,
  data: PropTypes__default.array.isRequired,
  height: NumberOrStringPT
};
StackedBarChart.defaultProps = {
  height: 400
};

export default StackedBarChart;
export { StackedBarChart, generateFakeStackedBarChartData };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdGFja2VkQmFyQ2hhcnQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3RFY2hhcnRzIGZyb20gJ2VjaGFydHMtZm9yLXJlYWN0J1xuaW1wb3J0IHdpdGhUaGVtZSBmcm9tICcuLi93aXRoVGhlbWUnXG5pbXBvcnQgeyBOdW1iZXJPclN0cmluZ1BUIH0gZnJvbSAnLi4vcHJvcHR5cGVzJ1xuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTdGFja2VkQmFyQ2hhcnRcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUZha2VTdGFja2VkQmFyQ2hhcnREYXRhID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIFsnQ2F0ZWdvcnknLCAnMjAxNScsICcyMDE2JywgJzIwMTcnLCAnMjAxOCcsICcyMDE5J10sXG4gICAgWydNYXRjaGEgTGF0dGUnLCA0My4zLCA4NS44LCA5My43LCAzMi40LCAxMC4yXSxcbiAgICBbJ01pbGsgVGVhJywgODMuMSwgNzMuNCwgNTUuMSwgMjMuNCwgOC44XSxcbiAgICBbJ0NoZWVzZSBDb2NvYScsIDg2LjQsIDY1LjIsIDgyLjUsIDE1LjMsIDE1LjJdLFxuICAgIFsnV2FsbnV0IEJyb3duaWUnLCA3Mi40LCA1My45LCAzOS4xLCA0Mi4xLCAxMy4zXVxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBTdGFja2VkQmFyQ2hhcnQgPSB3aXRoVGhlbWUoKHsgZGF0YSwgaGVpZ2h0LCAuLi5yZXN0IH0pID0+IHtcbiAgY29uc3Qgb3B0aW9uID0ge1xuICAgIGxlZ2VuZDoge30sXG4gICAgdG9vbHRpcDoge1xuICAgICAgdHJpZ2dlcjogJ2F4aXMnLFxuICAgICAgYXhpc1BvaW50ZXI6IHtcbiAgICAgICAgdHlwZTogJ3NoYWRvdydcbiAgICAgIH1cbiAgICB9LFxuICAgIGdyaWQ6IHtcbiAgICAgIGxlZnQ6ICczJScsXG4gICAgICByaWdodDogJzQlJyxcbiAgICAgIGJvdHRvbTogJzMlJyxcbiAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZVxuICAgIH0sXG4gICAgZGF0YXNldDoge1xuICAgICAgc291cmNlOiBkYXRhXG4gICAgfSxcbiAgICB4QXhpczogeyB0eXBlOiAndmFsdWUnIH0sXG4gICAgeUF4aXM6IHsgdHlwZTogJ2NhdGVnb3J5JyB9LFxuICAgIHNlcmllczpcbiAgICAgIGRhdGEgJiZcbiAgICAgIGRhdGFbMF0ubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggIT09IDApIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICBzdGFjazogJ3NhbXBsZScsXG4gICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnaW5zaWRlUmlnaHQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdEVjaGFydHNcbiAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBoZWlnaHQgPyBoZWlnaHQgOiAnNDAwcHgnLCB3aWR0aDogJzEwMCUnIH19XG4gICAgICB7Li4ucmVzdH1cbiAgICAvPlxuICApXG59KVxuXG5TdGFja2VkQmFyQ2hhcnQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFBULnN0cmluZyxcbiAgZGF0YTogUFQuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaGVpZ2h0OiBOdW1iZXJPclN0cmluZ1BUXG59XG5cblN0YWNrZWRCYXJDaGFydC5kZWZhdWx0UHJvcHMgPSB7XG4gIGhlaWdodDogNDAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWNrZWRCYXJDaGFydFxuIl0sIm5hbWVzIjpbImdlbmVyYXRlRmFrZVN0YWNrZWRCYXJDaGFydERhdGEiLCJTdGFja2VkQmFyQ2hhcnQiLCJ3aXRoVGhlbWUiLCJkYXRhIiwiaGVpZ2h0IiwicmVzdCIsIm9wdGlvbiIsImxlZ2VuZCIsInRvb2x0aXAiLCJ0cmlnZ2VyIiwiYXhpc1BvaW50ZXIiLCJ0eXBlIiwiZ3JpZCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImNvbnRhaW5MYWJlbCIsImRhdGFzZXQiLCJzb3VyY2UiLCJ4QXhpcyIsInlBeGlzIiwic2VyaWVzIiwibWFwIiwiXyIsImluZGV4Iiwic3RhY2siLCJsYWJlbCIsIm5vcm1hbCIsInNob3ciLCJwb3NpdGlvbiIsIlJlYWN0Iiwid2lkdGgiLCJwcm9wVHlwZXMiLCJjbGFzc05hbWUiLCJQVCIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIk51bWJlck9yU3RyaW5nUFQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBTUE7Ozs7OztBQUtBLElBQWFBLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBa0MsR0FBTTtTQUM1QyxDQUNMLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMsTUFBckMsRUFBNkMsTUFBN0MsQ0FESyxFQUVMLENBQUMsY0FBRCxFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQyxJQUFuQyxFQUF5QyxJQUF6QyxDQUZLLEVBR0wsQ0FBQyxVQUFELEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxHQUFyQyxDQUhLLEVBSUwsQ0FBQyxjQUFELEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLElBQTdCLEVBQW1DLElBQW5DLEVBQXlDLElBQXpDLENBSkssRUFLTCxDQUFDLGdCQUFELEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLENBTEssQ0FBUDtDQURLO0FBVVAsSUFBYUMsZUFBZSxHQUFHQyxTQUFTLENBQUMsZ0JBQStCO01BQTVCQyxJQUE0QixRQUE1QkEsSUFBNEI7TUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtNQUFYQyxJQUFXOztNQUNoRUMsTUFBTSxHQUFHO0lBQ2JDLE1BQU0sRUFBRSxFQURLO0lBRWJDLE9BQU8sRUFBRTtNQUNQQyxPQUFPLEVBQUUsTUFERjtNQUVQQyxXQUFXLEVBQUU7UUFDWEMsSUFBSSxFQUFFOztLQUxHO0lBUWJDLElBQUksRUFBRTtNQUNKQyxJQUFJLEVBQUUsSUFERjtNQUVKQyxLQUFLLEVBQUUsSUFGSDtNQUdKQyxNQUFNLEVBQUUsSUFISjtNQUlKQyxZQUFZLEVBQUU7S0FaSDtJQWNiQyxPQUFPLEVBQUU7TUFDUEMsTUFBTSxFQUFFZjtLQWZHO0lBaUJiZ0IsS0FBSyxFQUFFO01BQUVSLElBQUksRUFBRTtLQWpCRjtJQWtCYlMsS0FBSyxFQUFFO01BQUVULElBQUksRUFBRTtLQWxCRjtJQW1CYlUsTUFBTSxFQUNKbEIsSUFBSSxJQUNKQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFtQixHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7VUFDcEJBLEtBQUssS0FBSyxDQUFkLEVBQWlCO2VBQ1I7VUFDTGIsSUFBSSxFQUFFLEtBREQ7VUFFTGMsS0FBSyxFQUFFLFFBRkY7VUFHTEMsS0FBSyxFQUFFO1lBQ0xDLE1BQU0sRUFBRTtjQUNOQyxJQUFJLEVBQUUsSUFEQTtjQUVOQyxRQUFRLEVBQUU7OztTQU5oQjs7S0FGSjtHQXJCSjtTQXNDRUMsNkJBQUMsWUFBRDtJQUNFLE1BQU0sRUFBRXhCLE1BRFY7SUFFRSxLQUFLLEVBQUU7TUFBRUYsTUFBTSxFQUFFQSxNQUFNLEdBQUdBLE1BQUgsR0FBWSxPQUE1QjtNQUFxQzJCLEtBQUssRUFBRTs7S0FDL0MxQixJQUhOLEVBREY7Q0F0Q3NDLENBQWpDO0FBK0NQSixlQUFlLENBQUMrQixTQUFoQixHQUE0QjtFQUMxQkMsU0FBUyxFQUFFQyxrQkFBRSxDQUFDQyxNQURZO0VBRTFCaEMsSUFBSSxFQUFFK0Isa0JBQUUsQ0FBQ0UsS0FBSCxDQUFTQyxVQUZXO0VBRzFCakMsTUFBTSxFQUFFa0M7Q0FIVjtBQU1BckMsZUFBZSxDQUFDc0MsWUFBaEIsR0FBK0I7RUFDN0JuQyxNQUFNLEVBQUU7Q0FEVjs7Ozs7In0=

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
import { modifyDataForChart, getRandomNumberInRange, popRandomColor } from '../utils/index.js';

/**
 * ==================================================
 * Sunburst
 * ==================================================
 */

var createSunburstChildren = function createSunburstChildren(root, level) {
  var data = [];
  var count = getRandomNumberInRange(1, 3);

  for (var i = 1; i < count; i++) {
    data.push({
      name: "Node".concat(i),
      value: getRandomNumberInRange(1, 5),
      children: level === 0 ? [] : createSunburstChildren("".concat(root, ".").concat(i), level - 1),
      itemStyle: {
        color: popRandomColor()
      },
      label: {
        show: false
      }
    });
  }

  return data;
};

var generateFakeSunburstChartData = function generateFakeSunburstChartData() {
  var levels = getRandomNumberInRange(2, 4);
  var data = [];

  for (var i = 1; i < levels; i++) {
    data.push({
      name: "Node".concat(i),
      value: getRandomNumberInRange(1, 5),
      children: createSunburstChildren(i, levels),
      itemStyle: {
        color: popRandomColor()
      },
      label: {
        show: false
      }
    });
  }

  return data;
};
var SunburstChart = withTheme(function (_ref) {
  var data = _ref.data,
      name = _ref.name,
      height = _ref.height,
      rest = _objectWithoutProperties(_ref, ["data", "name", "height"]);

  var option = {
    series: {
      name: name,
      radius: ['15%', '80%'],
      type: 'sunburst',
      sort: null,
      highlightPolicy: 'ancestor',
      data: modifyDataForChart(data, true),
      label: {
        show: false
      },
      levels: [],
      itemStyle: {
        color: '#ddd',
        borderWidth: 2
      }
    },
    tooltip: {
      formatter: function formatter(info) {
        return ['<div class="tooltip-title">' + info.data.name + ' : ' + info.data.value + '</div>'].join('');
      }
    }
  };
  return React__default.createElement(ReactEcharts, _extends({
    option: option,
    style: {
      height: height ? height : '400px',
      width: '100%'
    }
  }, rest));
});
SunburstChart.propTypes = {
  className: PropTypes__default.string,
  data: PropTypes__default.array.isRequired,
  height: NumberOrStringPT,
  width: NumberOrStringPT
};
SunburstChart.defaultProps = {
  height: 400
};

export default SunburstChart;
export { SunburstChart, generateFakeSunburstChartData };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TdW5idXJzdENoYXJ0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQVCBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0RWNoYXJ0cyBmcm9tICdlY2hhcnRzLWZvci1yZWFjdCdcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vd2l0aFRoZW1lJ1xuaW1wb3J0IHsgTnVtYmVyT3JTdHJpbmdQVCB9IGZyb20gJy4uL3Byb3B0eXBlcydcbmltcG9ydCB7XG4gIGdldFJhbmRvbU51bWJlckluUmFuZ2UsXG4gIG1vZGlmeURhdGFGb3JDaGFydCxcbiAgcG9wUmFuZG9tQ29sb3Jcbn0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFN1bmJ1cnN0XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICovXG5jb25zdCBjcmVhdGVTdW5idXJzdENoaWxkcmVuID0gKHJvb3QsIGxldmVsKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBbXVxuICBjb25zdCBjb3VudCA9IGdldFJhbmRvbU51bWJlckluUmFuZ2UoMSwgMylcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgZGF0YS5wdXNoKHtcbiAgICAgIG5hbWU6IGBOb2RlJHtpfWAsXG4gICAgICB2YWx1ZTogZ2V0UmFuZG9tTnVtYmVySW5SYW5nZSgxLCA1KSxcbiAgICAgIGNoaWxkcmVuOlxuICAgICAgICBsZXZlbCA9PT0gMCA/IFtdIDogY3JlYXRlU3VuYnVyc3RDaGlsZHJlbihgJHtyb290fS4ke2l9YCwgbGV2ZWwgLSAxKSxcbiAgICAgIGl0ZW1TdHlsZTogeyBjb2xvcjogcG9wUmFuZG9tQ29sb3IoKSB9LFxuICAgICAgbGFiZWw6IHsgc2hvdzogZmFsc2UgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRmFrZVN1bmJ1cnN0Q2hhcnREYXRhID0gKCkgPT4ge1xuICBjb25zdCBsZXZlbHMgPSBnZXRSYW5kb21OdW1iZXJJblJhbmdlKDIsIDQpXG4gIGNvbnN0IGRhdGEgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbGV2ZWxzOyBpKyspIHtcbiAgICBkYXRhLnB1c2goe1xuICAgICAgbmFtZTogYE5vZGUke2l9YCxcbiAgICAgIHZhbHVlOiBnZXRSYW5kb21OdW1iZXJJblJhbmdlKDEsIDUpLFxuICAgICAgY2hpbGRyZW46IGNyZWF0ZVN1bmJ1cnN0Q2hpbGRyZW4oaSwgbGV2ZWxzKSxcbiAgICAgIGl0ZW1TdHlsZTogeyBjb2xvcjogcG9wUmFuZG9tQ29sb3IoKSB9LFxuICAgICAgbGFiZWw6IHsgc2hvdzogZmFsc2UgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgY29uc3QgU3VuYnVyc3RDaGFydCA9IHdpdGhUaGVtZSgoeyBkYXRhLCBuYW1lLCBoZWlnaHQsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCBvcHRpb24gPSB7XG4gICAgc2VyaWVzOiB7XG4gICAgICBuYW1lLFxuICAgICAgcmFkaXVzOiBbJzE1JScsICc4MCUnXSxcbiAgICAgIHR5cGU6ICdzdW5idXJzdCcsXG4gICAgICBzb3J0OiBudWxsLFxuICAgICAgaGlnaGxpZ2h0UG9saWN5OiAnYW5jZXN0b3InLFxuICAgICAgZGF0YTogbW9kaWZ5RGF0YUZvckNoYXJ0KGRhdGEsIHRydWUpLFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0sXG4gICAgICBsZXZlbHM6IFtdLFxuICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiAnI2RkZCcsXG4gICAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgICB9XG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKGluZm8pIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtdGl0bGVcIj4nICtcbiAgICAgICAgICAgIGluZm8uZGF0YS5uYW1lICtcbiAgICAgICAgICAgICcgOiAnICtcbiAgICAgICAgICAgIGluZm8uZGF0YS52YWx1ZSArXG4gICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICBdLmpvaW4oJycpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3RFY2hhcnRzXG4gICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgIHN0eWxlPXt7IGhlaWdodDogaGVpZ2h0ID8gaGVpZ2h0IDogJzQwMHB4Jywgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKVxufSlcblxuU3VuYnVyc3RDaGFydC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUFQuc3RyaW5nLFxuICBkYXRhOiBQVC5hcnJheS5pc1JlcXVpcmVkLFxuICBoZWlnaHQ6IE51bWJlck9yU3RyaW5nUFQsXG4gIHdpZHRoOiBOdW1iZXJPclN0cmluZ1BUXG59XG5cblN1bmJ1cnN0Q2hhcnQuZGVmYXVsdFByb3BzID0ge1xuICBoZWlnaHQ6IDQwMFxufVxuXG5leHBvcnQgZGVmYXVsdCBTdW5idXJzdENoYXJ0XG4iXSwibmFtZXMiOlsiY3JlYXRlU3VuYnVyc3RDaGlsZHJlbiIsInJvb3QiLCJsZXZlbCIsImRhdGEiLCJjb3VudCIsImdldFJhbmRvbU51bWJlckluUmFuZ2UiLCJpIiwicHVzaCIsIm5hbWUiLCJ2YWx1ZSIsImNoaWxkcmVuIiwiaXRlbVN0eWxlIiwiY29sb3IiLCJwb3BSYW5kb21Db2xvciIsImxhYmVsIiwic2hvdyIsImdlbmVyYXRlRmFrZVN1bmJ1cnN0Q2hhcnREYXRhIiwibGV2ZWxzIiwiU3VuYnVyc3RDaGFydCIsIndpdGhUaGVtZSIsImhlaWdodCIsInJlc3QiLCJvcHRpb24iLCJzZXJpZXMiLCJyYWRpdXMiLCJ0eXBlIiwic29ydCIsImhpZ2hsaWdodFBvbGljeSIsIm1vZGlmeURhdGFGb3JDaGFydCIsImJvcmRlcldpZHRoIiwidG9vbHRpcCIsImZvcm1hdHRlciIsImluZm8iLCJqb2luIiwiUmVhY3QiLCJ3aWR0aCIsInByb3BUeXBlcyIsImNsYXNzTmFtZSIsIlBUIiwic3RyaW5nIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiTnVtYmVyT3JTdHJpbmdQVCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBV0E7Ozs7OztBQUtBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO01BQ3hDQyxJQUFJLEdBQUcsRUFBYjtNQUNNQyxLQUFLLEdBQUdDLHNCQUFzQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXBDOztPQUNLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEtBQXBCLEVBQTJCRSxDQUFDLEVBQTVCLEVBQWdDO0lBQzlCSCxJQUFJLENBQUNJLElBQUwsQ0FBVTtNQUNSQyxJQUFJLGdCQUFTRixDQUFULENBREk7TUFFUkcsS0FBSyxFQUFFSixzQkFBc0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZyQjtNQUdSSyxRQUFRLEVBQ05SLEtBQUssS0FBSyxDQUFWLEdBQWMsRUFBZCxHQUFtQkYsc0JBQXNCLFdBQUlDLElBQUosY0FBWUssQ0FBWixHQUFpQkosS0FBSyxHQUFHLENBQXpCLENBSm5DO01BS1JTLFNBQVMsRUFBRTtRQUFFQyxLQUFLLEVBQUVDLGNBQWM7T0FMMUI7TUFNUkMsS0FBSyxFQUFFO1FBQUVDLElBQUksRUFBRTs7S0FOakI7OztTQVNLWixJQUFQO0NBYkY7O0FBZ0JBLElBQWFhLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0MsR0FBTTtNQUMzQ0MsTUFBTSxHQUFHWixzQkFBc0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFyQztNQUNNRixJQUFJLEdBQUcsRUFBYjs7T0FFSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVyxNQUFwQixFQUE0QlgsQ0FBQyxFQUE3QixFQUFpQztJQUMvQkgsSUFBSSxDQUFDSSxJQUFMLENBQVU7TUFDUkMsSUFBSSxnQkFBU0YsQ0FBVCxDQURJO01BRVJHLEtBQUssRUFBRUosc0JBQXNCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGckI7TUFHUkssUUFBUSxFQUFFVixzQkFBc0IsQ0FBQ00sQ0FBRCxFQUFJVyxNQUFKLENBSHhCO01BSVJOLFNBQVMsRUFBRTtRQUFFQyxLQUFLLEVBQUVDLGNBQWM7T0FKMUI7TUFLUkMsS0FBSyxFQUFFO1FBQUVDLElBQUksRUFBRTs7S0FMakI7OztTQVNLWixJQUFQO0NBZEs7QUFpQlAsSUFBYWUsYUFBYSxHQUFHQyxTQUFTLENBQUMsZ0JBQXFDO01BQWxDaEIsSUFBa0MsUUFBbENBLElBQWtDO01BQTVCSyxJQUE0QixRQUE1QkEsSUFBNEI7TUFBdEJZLE1BQXNCLFFBQXRCQSxNQUFzQjtNQUFYQyxJQUFXOztNQUNwRUMsTUFBTSxHQUFHO0lBQ2JDLE1BQU0sRUFBRTtNQUNOZixJQUFJLEVBQUpBLElBRE07TUFFTmdCLE1BQU0sRUFBRSxDQUFDLEtBQUQsRUFBUSxLQUFSLENBRkY7TUFHTkMsSUFBSSxFQUFFLFVBSEE7TUFJTkMsSUFBSSxFQUFFLElBSkE7TUFLTkMsZUFBZSxFQUFFLFVBTFg7TUFNTnhCLElBQUksRUFBRXlCLGtCQUFrQixDQUFDekIsSUFBRCxFQUFPLElBQVAsQ0FObEI7TUFPTlcsS0FBSyxFQUFFO1FBQ0xDLElBQUksRUFBRTtPQVJGO01BVU5FLE1BQU0sRUFBRSxFQVZGO01BV05OLFNBQVMsRUFBRTtRQUNUQyxLQUFLLEVBQUUsTUFERTtRQUVUaUIsV0FBVyxFQUFFOztLQWRKO0lBaUJiQyxPQUFPLEVBQUU7TUFDUEMsU0FBUyxFQUFFLG1CQUFTQyxJQUFULEVBQWU7ZUFDakIsQ0FDTCxnQ0FDRUEsSUFBSSxDQUFDN0IsSUFBTCxDQUFVSyxJQURaLEdBRUUsS0FGRixHQUdFd0IsSUFBSSxDQUFDN0IsSUFBTCxDQUFVTSxLQUhaLEdBSUUsUUFMRyxFQU1Md0IsSUFOSyxDQU1BLEVBTkEsQ0FBUDs7O0dBbkJOO1NBK0JFQyw2QkFBQyxZQUFEO0lBQ0UsTUFBTSxFQUFFWixNQURWO0lBRUUsS0FBSyxFQUFFO01BQUVGLE1BQU0sRUFBRUEsTUFBTSxHQUFHQSxNQUFILEdBQVksT0FBNUI7TUFBcUNlLEtBQUssRUFBRTs7S0FDL0NkLElBSE4sRUFERjtDQS9Cb0MsQ0FBL0I7QUF3Q1BILGFBQWEsQ0FBQ2tCLFNBQWQsR0FBMEI7RUFDeEJDLFNBQVMsRUFBRUMsa0JBQUUsQ0FBQ0MsTUFEVTtFQUV4QnBDLElBQUksRUFBRW1DLGtCQUFFLENBQUNFLEtBQUgsQ0FBU0MsVUFGUztFQUd4QnJCLE1BQU0sRUFBRXNCLGdCQUhnQjtFQUl4QlAsS0FBSyxFQUFFTztDQUpUO0FBT0F4QixhQUFhLENBQUN5QixZQUFkLEdBQTZCO0VBQzNCdkIsTUFBTSxFQUFFO0NBRFY7Ozs7OyJ9

import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../chunk-5732a1e2.js';
import { w as withTheme } from '../withTheme/index-d1a984d4.js';
import 'styled-components';
import '../chunk-69193f69.js';

/**
 * ==================================================
 * SimpleBar
 * ==================================================
 */

var generateFakeSimpleBarData = function generateFakeSimpleBarData() {
  return {
    title: 'company1',
    children: [{
      title: 'AgglomerativeCluster',
      color: '#12939A',
      size: 100
    }, {
      title: 'CommunityStructure',
      color: '#12939A',
      size: 75
    }, {
      title: 'HierarchicalCluster',
      color: '#12939A',
      size: 20
    }, {
      title: 'MergeEdge',
      color: '#12939A',
      size: 10
    }, {
      title: 'BetweennessCentrality',
      color: '#12939A',
      size: 35
    }, {
      title: 'LinkDistance',
      color: '#12939A',
      size: 57
    }, {
      title: 'MaxFlowMinCut',
      color: '#12939A',
      size: 78
    }, {
      title: 'ShortestPaths',
      color: '#12939A',
      size: 59
    }, {
      title: 'SpanningTree',
      color: '#12939A',
      size: 16
    }]
  };
};
var SimpleBarChart = withTheme(function (_ref) {
  var data = _ref.data;
  return React__default.createElement("div", {
    style: {
      maxWidth: 300,
      maxHeight: 300,
      overflow: 'auto',
      margin: '0 auto'
    }
  }, data.children.map(function (child) {
    return React__default.createElement("div", {
      style: {
        margin: '10px'
      }
    }, React__default.createElement("div", {
      style: {
        width: "".concat(child.value, "%"),
        background: 'linear-gradient(56deg, rgba(80,153,222,0.73) 0%, rgba(80,153,222,0.37) 57%, rgba(80,153,222,0.11) 100%)',
        padding: '3px 5px'
      }
    }, child.name));
  }));
});
SimpleBarChart.propTypes = {
  data: PropTypes__default.object.isRequired
};

export default SimpleBarChart;
export { SimpleBarChart, generateFakeSimpleBarData };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TaW1wbGVCYXJDaGFydC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vd2l0aFRoZW1lJ1xuXG4vKipcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTaW1wbGVCYXJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUZha2VTaW1wbGVCYXJEYXRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnY29tcGFueTEnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHRpdGxlOiAnQWdnbG9tZXJhdGl2ZUNsdXN0ZXInLCBjb2xvcjogJyMxMjkzOUEnLCBzaXplOiAxMDAgfSxcbiAgICAgIHsgdGl0bGU6ICdDb21tdW5pdHlTdHJ1Y3R1cmUnLCBjb2xvcjogJyMxMjkzOUEnLCBzaXplOiA3NSB9LFxuICAgICAgeyB0aXRsZTogJ0hpZXJhcmNoaWNhbENsdXN0ZXInLCBjb2xvcjogJyMxMjkzOUEnLCBzaXplOiAyMCB9LFxuICAgICAgeyB0aXRsZTogJ01lcmdlRWRnZScsIGNvbG9yOiAnIzEyOTM5QScsIHNpemU6IDEwIH0sXG4gICAgICB7IHRpdGxlOiAnQmV0d2Vlbm5lc3NDZW50cmFsaXR5JywgY29sb3I6ICcjMTI5MzlBJywgc2l6ZTogMzUgfSxcbiAgICAgIHsgdGl0bGU6ICdMaW5rRGlzdGFuY2UnLCBjb2xvcjogJyMxMjkzOUEnLCBzaXplOiA1NyB9LFxuICAgICAgeyB0aXRsZTogJ01heEZsb3dNaW5DdXQnLCBjb2xvcjogJyMxMjkzOUEnLCBzaXplOiA3OCB9LFxuICAgICAgeyB0aXRsZTogJ1Nob3J0ZXN0UGF0aHMnLCBjb2xvcjogJyMxMjkzOUEnLCBzaXplOiA1OSB9LFxuICAgICAgeyB0aXRsZTogJ1NwYW5uaW5nVHJlZScsIGNvbG9yOiAnIzEyOTM5QScsIHNpemU6IDE2IH1cbiAgICBdXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNpbXBsZUJhckNoYXJ0ID0gd2l0aFRoZW1lKCh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1heFdpZHRoOiAzMDAsXG4gICAgICAgIG1heEhlaWdodDogMzAwLFxuICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICBtYXJnaW46ICcwIGF1dG8nXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtkYXRhLmNoaWxkcmVuLm1hcChjaGlsZCA9PiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMTBweCcgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IGAke2NoaWxkLnZhbHVlfSVgLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoNTZkZWcsIHJnYmEoODAsMTUzLDIyMiwwLjczKSAwJSwgcmdiYSg4MCwxNTMsMjIyLDAuMzcpIDU3JSwgcmdiYSg4MCwxNTMsMjIyLDAuMTEpIDEwMCUpJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogJzNweCA1cHgnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZC5uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59KVxuXG5TaW1wbGVCYXJDaGFydC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFBULm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZUJhckNoYXJ0XG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVGYWtlU2ltcGxlQmFyRGF0YSIsInRpdGxlIiwiY2hpbGRyZW4iLCJjb2xvciIsInNpemUiLCJTaW1wbGVCYXJDaGFydCIsIndpdGhUaGVtZSIsImRhdGEiLCJSZWFjdCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJtYXJnaW4iLCJtYXAiLCJjaGlsZCIsIndpZHRoIiwidmFsdWUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsIm5hbWUiLCJwcm9wVHlwZXMiLCJQVCIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7Ozs7O0FBS0EsSUFBYUEseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixHQUFNO1NBQ3RDO0lBQ0xDLEtBQUssRUFBRSxVQURGO0lBRUxDLFFBQVEsRUFBRSxDQUNSO01BQUVELEtBQUssRUFBRSxzQkFBVDtNQUFpQ0UsS0FBSyxFQUFFLFNBQXhDO01BQW1EQyxJQUFJLEVBQUU7S0FEakQsRUFFUjtNQUFFSCxLQUFLLEVBQUUsb0JBQVQ7TUFBK0JFLEtBQUssRUFBRSxTQUF0QztNQUFpREMsSUFBSSxFQUFFO0tBRi9DLEVBR1I7TUFBRUgsS0FBSyxFQUFFLHFCQUFUO01BQWdDRSxLQUFLLEVBQUUsU0FBdkM7TUFBa0RDLElBQUksRUFBRTtLQUhoRCxFQUlSO01BQUVILEtBQUssRUFBRSxXQUFUO01BQXNCRSxLQUFLLEVBQUUsU0FBN0I7TUFBd0NDLElBQUksRUFBRTtLQUp0QyxFQUtSO01BQUVILEtBQUssRUFBRSx1QkFBVDtNQUFrQ0UsS0FBSyxFQUFFLFNBQXpDO01BQW9EQyxJQUFJLEVBQUU7S0FMbEQsRUFNUjtNQUFFSCxLQUFLLEVBQUUsY0FBVDtNQUF5QkUsS0FBSyxFQUFFLFNBQWhDO01BQTJDQyxJQUFJLEVBQUU7S0FOekMsRUFPUjtNQUFFSCxLQUFLLEVBQUUsZUFBVDtNQUEwQkUsS0FBSyxFQUFFLFNBQWpDO01BQTRDQyxJQUFJLEVBQUU7S0FQMUMsRUFRUjtNQUFFSCxLQUFLLEVBQUUsZUFBVDtNQUEwQkUsS0FBSyxFQUFFLFNBQWpDO01BQTRDQyxJQUFJLEVBQUU7S0FSMUMsRUFTUjtNQUFFSCxLQUFLLEVBQUUsY0FBVDtNQUF5QkUsS0FBSyxFQUFFLFNBQWhDO01BQTJDQyxJQUFJLEVBQUU7S0FUekM7R0FGWjtDQURLO0FBaUJQLElBQWFDLGNBQWMsR0FBR0MsU0FBUyxDQUFDLGdCQUFjO01BQVhDLElBQVcsUUFBWEEsSUFBVztTQUVsREM7SUFDRSxLQUFLLEVBQUU7TUFDTEMsUUFBUSxFQUFFLEdBREw7TUFFTEMsU0FBUyxFQUFFLEdBRk47TUFHTEMsUUFBUSxFQUFFLE1BSEw7TUFJTEMsTUFBTSxFQUFFOztLQUdUTCxJQUFJLENBQUNMLFFBQUwsQ0FBY1csR0FBZCxDQUFrQixVQUFBQyxLQUFLO1dBQ3RCTjtNQUFLLEtBQUssRUFBRTtRQUFFSSxNQUFNLEVBQUU7O09BQ3BCSjtNQUNFLEtBQUssRUFBRTtRQUNMTyxLQUFLLFlBQUtELEtBQUssQ0FBQ0UsS0FBWCxNQURBO1FBRUxDLFVBQVUsRUFDUix5R0FIRztRQUlMQyxPQUFPLEVBQUU7O09BR1ZKLEtBQUssQ0FBQ0ssSUFSVCxDQURGLENBRHNCO0dBQXZCLENBUkgsQ0FERjtDQURxQyxDQUFoQztBQTRCUGQsY0FBYyxDQUFDZSxTQUFmLEdBQTJCO0VBQ3pCYixJQUFJLEVBQUVjLGtCQUFFLENBQUNDLE1BQUgsQ0FBVUM7Q0FEbEI7Ozs7OyJ9

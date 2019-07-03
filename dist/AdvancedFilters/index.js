import { _ as _slicedToArray, b as _taggedTemplateLiteral } from '../chunk-fee9d9e4.js';
import React__default, { useState } from 'react';
import 'prop-types';
import '../chunk-c38916c0.js';
import '../chunk-8852f494.js';
import '../chunk-02ddfd93.js';
import '../chunk-1f7082a0.js';
import { i as isEqual } from './components/Filter/components/FilterContent/components/RadioGroupWithText/index-8afccf90.js';
import '../chunk-9011c346.js';
import styled from '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import '../chunk-dbd356d3.js';
import Filter from './components/Filter/index.js';
import '../chunk-ee2530d1.js';
import '../chunk-bc8b20dc.js';
import 'react-dom';
import '../chunk-8c29e7a2.js';
import '../chunk-5d630e90.js';
import '../chunk-bc0cb482.js';
import '../chunk-0880ccca.js';
import '../chunk-fd809749.js';
import '../chunk-a58638a0.js';
import '../chunk-8820e6e0.js';
import '../chunk-3a7de8d6.js';
import '../chunk-ec006b04.js';
import '../chunk-7a0c966a.js';
import '../CustomButton/index.js';
import '../SingleLineTextInput/index.js';
import '../chunk-36a4bc51.js';
import '../chunk-51ca1b6a.js';
import '../chunk-99f2aa66.js';
import '../chunk-5e1f7e4a.js';
import '../chunk-6caba0ca.js';
import '../GenericForm/index.js';
import '../chunk-d1cdd45e.js';
import '../chunk-d79569b3.js';
import './components/Filter/components/FilterContent/index.js';
import CreateFilterButton from './components/CreateFilterButton/index.js';
import '../chunk-c76ef287.js';

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  padding: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject());
var FIELDS = {
  category: {
    label: 'Category',
    type: 'select'
  },
  subcategory: {
    label: 'Subcategory',
    type: 'select'
  },
  title: {
    label: 'Title',
    type: 'text'
  },
  company: {
    label: 'Company',
    type: 'text'
  },
  industry: {
    label: 'Industry',
    type: 'select'
  }
};
var AdvancedFilters = withTheme(function (props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      activeFilters = _useState2[0],
      setActiveFilters = _useState2[1];

  var addFilter = function addFilter(filter) {
    return setActiveFilters(activeFilters.concat(filter));
  };

  var removeFilter = function removeFilter(idx) {
    setActiveFilters(activeFilters.filter(function (_item, index) {
      return !isEqual(index, idx);
    }));
  };

  return React__default.createElement(Container, null, activeFilters.map(function (filter, idx) {
    return React__default.createElement(Filter, {
      key: idx,
      index: idx,
      filter: filter,
      onRemove: function onRemove() {
        return removeFilter(idx);
      },
      onChange: function onChange(value) {
        console.log('ON CHANGE');
        console.log(idx);
        console.log(value);
      }
    });
  }), React__default.createElement(CreateFilterButton, {
    fields: FIELDS,
    onSelect: addFilter
  }));
});
AdvancedFilters.propTypes = {};
AdvancedFilters.defaultProps = {};
AdvancedFilters.displayName = AdvancedFilters;

export default AdvancedFilters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAeHN0eWxlZC9zdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlcidcbmltcG9ydCBDcmVhdGVGaWx0ZXJCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0NyZWF0ZUZpbHRlckJ1dHRvbidcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG5gXG5cbmNvbnN0IEZJRUxEUyA9IHtcbiAgY2F0ZWdvcnk6IHtcbiAgICBsYWJlbDogJ0NhdGVnb3J5JyxcbiAgICB0eXBlOiAnc2VsZWN0J1xuICB9LFxuICBzdWJjYXRlZ29yeToge1xuICAgIGxhYmVsOiAnU3ViY2F0ZWdvcnknLFxuICAgIHR5cGU6ICdzZWxlY3QnXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgbGFiZWw6ICdUaXRsZScsXG4gICAgdHlwZTogJ3RleHQnXG4gIH0sXG4gIGNvbXBhbnk6IHtcbiAgICBsYWJlbDogJ0NvbXBhbnknLFxuICAgIHR5cGU6ICd0ZXh0J1xuICB9LFxuICBpbmR1c3RyeToge1xuICAgIGxhYmVsOiAnSW5kdXN0cnknLFxuICAgIHR5cGU6ICdzZWxlY3QnXG4gIH1cbn1cblxuY29uc3QgQWR2YW5jZWRGaWx0ZXJzID0gd2l0aFRoZW1lKHByb3BzID0+IHtcbiAgY29uc3QgW2FjdGl2ZUZpbHRlcnMsIHNldEFjdGl2ZUZpbHRlcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgYWRkRmlsdGVyID0gZmlsdGVyID0+IHNldEFjdGl2ZUZpbHRlcnMoYWN0aXZlRmlsdGVycy5jb25jYXQoZmlsdGVyKSlcblxuICBjb25zdCByZW1vdmVGaWx0ZXIgPSBpZHggPT4ge1xuICAgIHNldEFjdGl2ZUZpbHRlcnMoXG4gICAgICBhY3RpdmVGaWx0ZXJzLmZpbHRlcigoX2l0ZW0sIGluZGV4KSA9PiAhaXNFcXVhbChpbmRleCwgaWR4KSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7YWN0aXZlRmlsdGVycy5tYXAoKGZpbHRlciwgaWR4KSA9PiAoXG4gICAgICAgIDxGaWx0ZXJcbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBpbmRleD17aWR4fVxuICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiByZW1vdmVGaWx0ZXIoaWR4KX1cbiAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ09OIENIQU5HRScpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZHgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICA8Q3JlYXRlRmlsdGVyQnV0dG9uIGZpZWxkcz17RklFTERTfSBvblNlbGVjdD17YWRkRmlsdGVyfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59KVxuXG5BZHZhbmNlZEZpbHRlcnMucHJvcFR5cGVzID0ge31cblxuQWR2YW5jZWRGaWx0ZXJzLmRlZmF1bHRQcm9wcyA9IHt9XG5cbkFkdmFuY2VkRmlsdGVycy5kaXNwbGF5TmFtZSA9IEFkdmFuY2VkRmlsdGVyc1xuXG5leHBvcnQgZGVmYXVsdCBBZHZhbmNlZEZpbHRlcnNcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGSUVMRFMiLCJjYXRlZ29yeSIsImxhYmVsIiwidHlwZSIsInN1YmNhdGVnb3J5IiwidGl0bGUiLCJjb21wYW55IiwiaW5kdXN0cnkiLCJBZHZhbmNlZEZpbHRlcnMiLCJ3aXRoVGhlbWUiLCJwcm9wcyIsInVzZVN0YXRlIiwiYWN0aXZlRmlsdGVycyIsInNldEFjdGl2ZUZpbHRlcnMiLCJhZGRGaWx0ZXIiLCJmaWx0ZXIiLCJjb25jYXQiLCJyZW1vdmVGaWx0ZXIiLCJpZHgiLCJfaXRlbSIsImluZGV4IiwiaXNFcXVhbCIsIlJlYWN0IiwibWFwIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxJQUFNQSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBVixtQkFBZjtBQVNBLElBQU1DLE1BQU0sR0FBRztFQUNiQyxRQUFRLEVBQUU7SUFDUkMsS0FBSyxFQUFFLFVBREM7SUFFUkMsSUFBSSxFQUFFO0dBSEs7RUFLYkMsV0FBVyxFQUFFO0lBQ1hGLEtBQUssRUFBRSxhQURJO0lBRVhDLElBQUksRUFBRTtHQVBLO0VBU2JFLEtBQUssRUFBRTtJQUNMSCxLQUFLLEVBQUUsT0FERjtJQUVMQyxJQUFJLEVBQUU7R0FYSztFQWFiRyxPQUFPLEVBQUU7SUFDUEosS0FBSyxFQUFFLFNBREE7SUFFUEMsSUFBSSxFQUFFO0dBZks7RUFpQmJJLFFBQVEsRUFBRTtJQUNSTCxLQUFLLEVBQUUsVUFEQztJQUVSQyxJQUFJLEVBQUU7O0NBbkJWO0FBdUJBLElBQU1LLGVBQWUsR0FBR0MsU0FBUyxDQUFDLFVBQUFDLEtBQUssRUFBSTtrQkFDQ0MsUUFBUSxDQUFDLEVBQUQsQ0FEVDs7TUFDbENDLGFBRGtDO01BQ25CQyxnQkFEbUI7O01BR25DQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxNQUFNO1dBQUlGLGdCQUFnQixDQUFDRCxhQUFhLENBQUNJLE1BQWQsQ0FBcUJELE1BQXJCLENBQUQsQ0FBcEI7R0FBeEI7O01BRU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEdBQUcsRUFBSTtJQUMxQkwsZ0JBQWdCLENBQ2RELGFBQWEsQ0FBQ0csTUFBZCxDQUFxQixVQUFDSSxLQUFELEVBQVFDLEtBQVI7YUFBa0IsQ0FBQ0MsT0FBTyxDQUFDRCxLQUFELEVBQVFGLEdBQVIsQ0FBMUI7S0FBckIsQ0FEYyxDQUFoQjtHQURGOztTQU9FSSw2QkFBQyxTQUFELFFBQ0dWLGFBQWEsQ0FBQ1csR0FBZCxDQUFrQixVQUFDUixNQUFELEVBQVNHLEdBQVQ7V0FDakJJLDZCQUFDLE1BQUQ7TUFDRSxHQUFHLEVBQUVKLEdBRFA7TUFFRSxLQUFLLEVBQUVBLEdBRlQ7TUFHRSxNQUFNLEVBQUVILE1BSFY7TUFJRSxRQUFRLEVBQUU7ZUFBTUUsWUFBWSxDQUFDQyxHQUFELENBQWxCO09BSlo7TUFLRSxRQUFRLEVBQUUsa0JBQUFNLEtBQUssRUFBSTtRQUNqQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtRQUNBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsR0FBWjtRQUNBTyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjs7TUFUYTtHQUFsQixDQURILEVBY0VGLDZCQUFDLGtCQUFEO0lBQW9CLE1BQU0sRUFBRXRCLE1BQTVCO0lBQW9DLFFBQVEsRUFBRWM7SUFkaEQsQ0FERjtDQVgrQixDQUFqQztBQStCQU4sZUFBZSxDQUFDbUIsU0FBaEIsR0FBNEIsRUFBNUI7QUFFQW5CLGVBQWUsQ0FBQ29CLFlBQWhCLEdBQStCLEVBQS9CO0FBRUFwQixlQUFlLENBQUNxQixXQUFoQixHQUE4QnJCLGVBQTlCOzs7OyJ9

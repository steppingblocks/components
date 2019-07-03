import { a as _slicedToArray, _ as _taggedTemplateLiteral } from '../chunk-22f808cd.js';
import React__default, { useState } from 'react';
import 'prop-types';
import '../chunk-cf17f13e.js';
import '../chunk-9cccbe49.js';
import '../chunk-02ddfd93.js';
import '../chunk-1f7082a0.js';
import { i as isEqual } from './components/Filter/components/FilterContent/index-4f52bbba.js';
import '../chunk-02ebdfb2.js';
import styled from '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import '../chunk-dbd356d3.js';
import Filter from './components/Filter/index.js';
import '../chunk-ee2530d1.js';
import '../chunk-f94271b9.js';
import 'react-dom';
import '../chunk-3c626a6d.js';
import '../chunk-886bee81.js';
import '../chunk-36b74ddf.js';
import '../chunk-f200bc50.js';
import '../chunk-a58638a0.js';
import '../chunk-8820e6e0.js';
import '../chunk-3a7de8d6.js';
import '../chunk-ec006b04.js';
import '../chunk-482f4ef0.js';
import '../CustomButton/index.js';
import '../chunk-6caba0ca.js';
import '../chunk-e7fb5cb2.js';
import '../chunk-d1cdd45e.js';
import '../chunk-d79569b3.js';
import '../chunk-28791981.js';
import '../SingleLineTextInput/index.js';
import '../chunk-84525609.js';
import '../chunk-51ca1b6a.js';
import '../chunk-5e1f7e4a.js';
import '../chunk-7ea0ebc0.js';
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
      filters = _useState2[0],
      setFilters = _useState2[1];

  var addFilter = function addFilter(filter) {
    return setFilters(filters.concat(filter));
  };

  var removeFilter = function removeFilter(idx) {
    setFilters(filters.filter(function (_item, index) {
      return !isEqual(index, idx);
    }));
  }; // console.log(filters)


  return React__default.createElement(Container, null, filters.map(function (filter, idx) {
    return React__default.createElement(Filter, {
      key: idx,
      filter: filter,
      onRemove: function onRemove() {
        return removeFilter(idx);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAeHN0eWxlZC9zdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlcidcbmltcG9ydCBDcmVhdGVGaWx0ZXJCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0NyZWF0ZUZpbHRlckJ1dHRvbidcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHg7XG5gXG5cbmNvbnN0IEZJRUxEUyA9IHtcbiAgY2F0ZWdvcnk6IHtcbiAgICBsYWJlbDogJ0NhdGVnb3J5JyxcbiAgICB0eXBlOiAnc2VsZWN0J1xuICB9LFxuICBzdWJjYXRlZ29yeToge1xuICAgIGxhYmVsOiAnU3ViY2F0ZWdvcnknLFxuICAgIHR5cGU6ICdzZWxlY3QnXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgbGFiZWw6ICdUaXRsZScsXG4gICAgdHlwZTogJ3RleHQnXG4gIH0sXG4gIGNvbXBhbnk6IHtcbiAgICBsYWJlbDogJ0NvbXBhbnknLFxuICAgIHR5cGU6ICd0ZXh0J1xuICB9LFxuICBpbmR1c3RyeToge1xuICAgIGxhYmVsOiAnSW5kdXN0cnknLFxuICAgIHR5cGU6ICdzZWxlY3QnXG4gIH1cbn1cblxuY29uc3QgQWR2YW5jZWRGaWx0ZXJzID0gd2l0aFRoZW1lKHByb3BzID0+IHtcbiAgY29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgYWRkRmlsdGVyID0gZmlsdGVyID0+IHNldEZpbHRlcnMoZmlsdGVycy5jb25jYXQoZmlsdGVyKSlcblxuICBjb25zdCByZW1vdmVGaWx0ZXIgPSBpZHggPT4ge1xuICAgIHNldEZpbHRlcnMoZmlsdGVycy5maWx0ZXIoKF9pdGVtLCBpbmRleCkgPT4gIWlzRXF1YWwoaW5kZXgsIGlkeCkpKVxuICB9XG5cbiAgLy8gY29uc29sZS5sb2coZmlsdGVycylcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7ZmlsdGVycy5tYXAoKGZpbHRlciwgaWR4KSA9PiAoXG4gICAgICAgIDxGaWx0ZXIga2V5PXtpZHh9IGZpbHRlcj17ZmlsdGVyfSBvblJlbW92ZT17KCkgPT4gcmVtb3ZlRmlsdGVyKGlkeCl9IC8+XG4gICAgICApKX1cbiAgICAgIDxDcmVhdGVGaWx0ZXJCdXR0b24gZmllbGRzPXtGSUVMRFN9IG9uU2VsZWN0PXthZGRGaWx0ZXJ9IC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn0pXG5cbkFkdmFuY2VkRmlsdGVycy5wcm9wVHlwZXMgPSB7fVxuXG5BZHZhbmNlZEZpbHRlcnMuZGVmYXVsdFByb3BzID0ge31cblxuQWR2YW5jZWRGaWx0ZXJzLmRpc3BsYXlOYW1lID0gQWR2YW5jZWRGaWx0ZXJzXG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkRmlsdGVyc1xuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkZJRUxEUyIsImNhdGVnb3J5IiwibGFiZWwiLCJ0eXBlIiwic3ViY2F0ZWdvcnkiLCJ0aXRsZSIsImNvbXBhbnkiLCJpbmR1c3RyeSIsIkFkdmFuY2VkRmlsdGVycyIsIndpdGhUaGVtZSIsInByb3BzIiwidXNlU3RhdGUiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsImFkZEZpbHRlciIsImZpbHRlciIsImNvbmNhdCIsInJlbW92ZUZpbHRlciIsImlkeCIsIl9pdGVtIiwiaW5kZXgiLCJpc0VxdWFsIiwiUmVhY3QiLCJtYXAiLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsSUFBTUEsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQVYsbUJBQWY7QUFTQSxJQUFNQyxNQUFNLEdBQUc7RUFDYkMsUUFBUSxFQUFFO0lBQ1JDLEtBQUssRUFBRSxVQURDO0lBRVJDLElBQUksRUFBRTtHQUhLO0VBS2JDLFdBQVcsRUFBRTtJQUNYRixLQUFLLEVBQUUsYUFESTtJQUVYQyxJQUFJLEVBQUU7R0FQSztFQVNiRSxLQUFLLEVBQUU7SUFDTEgsS0FBSyxFQUFFLE9BREY7SUFFTEMsSUFBSSxFQUFFO0dBWEs7RUFhYkcsT0FBTyxFQUFFO0lBQ1BKLEtBQUssRUFBRSxTQURBO0lBRVBDLElBQUksRUFBRTtHQWZLO0VBaUJiSSxRQUFRLEVBQUU7SUFDUkwsS0FBSyxFQUFFLFVBREM7SUFFUkMsSUFBSSxFQUFFOztDQW5CVjtBQXVCQSxJQUFNSyxlQUFlLEdBQUdDLFNBQVMsQ0FBQyxVQUFBQyxLQUFLLEVBQUk7a0JBQ1hDLFFBQVEsQ0FBQyxFQUFELENBREc7O01BQ2xDQyxPQURrQztNQUN6QkMsVUFEeUI7O01BR25DQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxNQUFNO1dBQUlGLFVBQVUsQ0FBQ0QsT0FBTyxDQUFDSSxNQUFSLENBQWVELE1BQWYsQ0FBRCxDQUFkO0dBQXhCOztNQUVNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxHQUFHLEVBQUk7SUFDMUJMLFVBQVUsQ0FBQ0QsT0FBTyxDQUFDRyxNQUFSLENBQWUsVUFBQ0ksS0FBRCxFQUFRQyxLQUFSO2FBQWtCLENBQUNDLE9BQU8sQ0FBQ0QsS0FBRCxFQUFRRixHQUFSLENBQTFCO0tBQWYsQ0FBRCxDQUFWO0dBREYsQ0FMeUM7OztTQVl2Q0ksNkJBQUMsU0FBRCxRQUNHVixPQUFPLENBQUNXLEdBQVIsQ0FBWSxVQUFDUixNQUFELEVBQVNHLEdBQVQ7V0FDWEksNkJBQUMsTUFBRDtNQUFRLEdBQUcsRUFBRUosR0FBYjtNQUFrQixNQUFNLEVBQUVILE1BQTFCO01BQWtDLFFBQVEsRUFBRTtlQUFNRSxZQUFZLENBQUNDLEdBQUQsQ0FBbEI7O01BRGpDO0dBQVosQ0FESCxFQUlFSSw2QkFBQyxrQkFBRDtJQUFvQixNQUFNLEVBQUV0QixNQUE1QjtJQUFvQyxRQUFRLEVBQUVjO0lBSmhELENBREY7Q0FYK0IsQ0FBakM7QUFxQkFOLGVBQWUsQ0FBQ2dCLFNBQWhCLEdBQTRCLEVBQTVCO0FBRUFoQixlQUFlLENBQUNpQixZQUFoQixHQUErQixFQUEvQjtBQUVBakIsZUFBZSxDQUFDa0IsV0FBaEIsR0FBOEJsQixlQUE5Qjs7OzsifQ==

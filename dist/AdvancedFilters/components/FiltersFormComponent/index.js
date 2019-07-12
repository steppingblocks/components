import { j as _extends, a as _taggedTemplateLiteral } from '../../../chunk-05bf3f70.js';
import React__default from 'react';
import 'prop-types';
import '../../../chunk-5732a1e2.js';
import '../../../withTheme/index-d1a984d4.js';
import styled from 'styled-components';
import '../../../chunk-69193f69.js';
import '../../../chunk-94c4abeb.js';
import '../../../chunk-27ab9880.js';
import 'react-dom';
import '../../../chunk-d79569b3.js';
import '../../../chunk-dc6fce77.js';
import '../../../chunk-767e8fe1.js';
import '../../../chunk-4a7412b0.js';
import '../../../chunk-40ab7835.js';
import '../../../chunk-def42873.js';
import '../../../chunk-f27d627d.js';
import '../../../chunk-d28c801e.js';
import '../../../chunk-8820e6e0.js';
import '../../../chunk-6a997ef0.js';
import '../../../chunk-263f4733.js';
import '../../../chunk-a567c850.js';
import '../../../chunk-c35b7916.js';
import '../../../chunk-eb99831d.js';
import '../../../CustomButton/index.js';
import CreateFilterButton from '../CreateFilterButton/index.js';
import '../../../chunk-978db12d.js';
import '../../../chunk-c76ef287.js';
import '../../../chunk-c30b8a6e.js';
import '../../../chunk-ec4a5109.js';
import '../../../chunk-da442227.js';
import Filter from '../Filter/index.js';
import '../../../chunk-b6d4feb6.js';
import '../../../chunk-08d54451.js';
import '../../../chunk-a99b813c.js';
import '../Filter/components/FilterContent/index.js';
import '../../../SingleLineTextInput/index.js';
import '../../../chunk-594efdf6.js';

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject());

var FiltersFormComponent = function FiltersFormComponent(props) {
  var activeFilters = props.activeFilters,
      addActiveFilter = props.addActiveFilter,
      fields = props.fields,
      onChange = props.onChange,
      removeFilter = props.removeFilter,
      value = props.value;
  return React__default.createElement(Container, null, activeFilters.map(function (filter) {
    return React__default.createElement(Filter, _extends({}, filter, {
      key: filter.id,
      onChange: onChange,
      formValue: value,
      removeFilter: removeFilter
    }));
  }), React__default.createElement(CreateFilterButton, {
    fields: fields,
    onSelect: addActiveFilter
  }));
};

export default FiltersFormComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvY29tcG9uZW50cy9GaWx0ZXJzRm9ybUNvbXBvbmVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IENyZWF0ZUZpbHRlckJ1dHRvbiBmcm9tICcuLi9DcmVhdGVGaWx0ZXJCdXR0b24nXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL0ZpbHRlcidcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmNvbnN0IEZpbHRlcnNGb3JtQ29tcG9uZW50ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgYWN0aXZlRmlsdGVycyxcbiAgICBhZGRBY3RpdmVGaWx0ZXIsXG4gICAgZmllbGRzLFxuICAgIG9uQ2hhbmdlLFxuICAgIHJlbW92ZUZpbHRlcixcbiAgICB2YWx1ZVxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7YWN0aXZlRmlsdGVycy5tYXAoZmlsdGVyID0+IChcbiAgICAgICAgPEZpbHRlclxuICAgICAgICAgIHsuLi5maWx0ZXJ9XG4gICAgICAgICAga2V5PXtmaWx0ZXIuaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGZvcm1WYWx1ZT17dmFsdWV9XG4gICAgICAgICAgcmVtb3ZlRmlsdGVyPXtyZW1vdmVGaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIDxDcmVhdGVGaWx0ZXJCdXR0b24gZmllbGRzPXtmaWVsZHN9IG9uU2VsZWN0PXthZGRBY3RpdmVGaWx0ZXJ9IC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyc0Zvcm1Db21wb25lbnRcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGaWx0ZXJzRm9ybUNvbXBvbmVudCIsInByb3BzIiwiYWN0aXZlRmlsdGVycyIsImFkZEFjdGl2ZUZpbHRlciIsImZpZWxkcyIsIm9uQ2hhbmdlIiwicmVtb3ZlRmlsdGVyIiwidmFsdWUiLCJSZWFjdCIsIm1hcCIsImZpbHRlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBVixtQkFBZjs7QUFJQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUFDLEtBQUssRUFBSTtNQUVsQ0MsYUFGa0MsR0FRaENELEtBUmdDLENBRWxDQyxhQUZrQztNQUdsQ0MsZUFIa0MsR0FRaENGLEtBUmdDLENBR2xDRSxlQUhrQztNQUlsQ0MsTUFKa0MsR0FRaENILEtBUmdDLENBSWxDRyxNQUprQztNQUtsQ0MsUUFMa0MsR0FRaENKLEtBUmdDLENBS2xDSSxRQUxrQztNQU1sQ0MsWUFOa0MsR0FRaENMLEtBUmdDLENBTWxDSyxZQU5rQztNQU9sQ0MsS0FQa0MsR0FRaENOLEtBUmdDLENBT2xDTSxLQVBrQztTQVdsQ0MsNkJBQUMsU0FBRCxRQUNHTixhQUFhLENBQUNPLEdBQWQsQ0FBa0IsVUFBQUMsTUFBTTtXQUN2QkYsNkJBQUMsTUFBRCxlQUNNRSxNQUROO01BRUUsR0FBRyxFQUFFQSxNQUFNLENBQUNDLEVBRmQ7TUFHRSxRQUFRLEVBQUVOLFFBSFo7TUFJRSxTQUFTLEVBQUVFLEtBSmI7TUFLRSxZQUFZLEVBQUVEO09BTk87R0FBeEIsQ0FESCxFQVVFRSw2QkFBQyxrQkFBRDtJQUFvQixNQUFNLEVBQUVKLE1BQTVCO0lBQW9DLFFBQVEsRUFBRUQ7SUFWaEQsQ0FERjtDQVZGOzs7OyJ9

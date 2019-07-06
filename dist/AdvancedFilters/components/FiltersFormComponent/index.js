import { c as _extends, b as _taggedTemplateLiteral } from '../../../chunk-039ee305.js';
import React__default from 'react';
import 'prop-types';
import '../../../chunk-5732a1e2.js';
import styled from '@xstyled/styled-components';
import '../../../withTheme/index.js';
import '../../../chunk-218dc193.js';
import '../../../chunk-55a8f221.js';
import 'react-dom';
import '../../../chunk-d79569b3.js';
import '../../../chunk-bbc6af60.js';
import '../../../chunk-e008480f.js';
import '../../../chunk-bbdab8a3.js';
import '../../../chunk-99207a3b.js';
import '../../../chunk-c27c29c8.js';
import '../../../chunk-f27d627d.js';
import '../../../chunk-4c226307.js';
import '../../../chunk-8820e6e0.js';
import '../../../chunk-e9a642ec.js';
import '../../../chunk-d1343d60.js';
import '../../../chunk-ee2530d1.js';
import '../../../chunk-c35b7916.js';
import '../../../chunk-ead10a8b.js';
import '../../../CustomButton/index.js';
import '../../../chunk-8aa82724.js';
import CreateFilterButton from '../CreateFilterButton/index.js';
import '../../../chunk-cc423a95.js';
import '../../../chunk-c76ef287.js';
import '../../../chunk-c30b8a6e.js';
import '../../../chunk-03805be5.js';
import '../../../chunk-69ee6dc4.js';
import Filter from '../Filter/index.js';
import '../../../chunk-38979edb.js';
import '../../../chunk-945c35cc.js';
import '../../../chunk-5e1f7e4a.js';
import '../Filter/components/FilterContent/index.js';
import '../../../SingleLineTextInput/index.js';
import '../../../chunk-c855a38a.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvY29tcG9uZW50cy9GaWx0ZXJzRm9ybUNvbXBvbmVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgX2ZwIGZyb20gJ2xvZGFzaC9mcCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQHhzdHlsZWQvc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgQ3JlYXRlRmlsdGVyQnV0dG9uIGZyb20gJy4uL0NyZWF0ZUZpbHRlckJ1dHRvbidcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vRmlsdGVyJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgRmlsdGVyc0Zvcm1Db21wb25lbnQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmVGaWx0ZXJzLFxuICAgIGFkZEFjdGl2ZUZpbHRlcixcbiAgICBmaWVsZHMsXG4gICAgb25DaGFuZ2UsXG4gICAgcmVtb3ZlRmlsdGVyLFxuICAgIHZhbHVlXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHthY3RpdmVGaWx0ZXJzLm1hcChmaWx0ZXIgPT4gKFxuICAgICAgICA8RmlsdGVyXG4gICAgICAgICAgey4uLmZpbHRlcn1cbiAgICAgICAgICBrZXk9e2ZpbHRlci5pZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgZm9ybVZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICByZW1vdmVGaWx0ZXI9e3JlbW92ZUZpbHRlcn1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgICAgPENyZWF0ZUZpbHRlckJ1dHRvbiBmaWVsZHM9e2ZpZWxkc30gb25TZWxlY3Q9e2FkZEFjdGl2ZUZpbHRlcn0gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzRm9ybUNvbXBvbmVudFxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkZpbHRlcnNGb3JtQ29tcG9uZW50IiwicHJvcHMiLCJhY3RpdmVGaWx0ZXJzIiwiYWRkQWN0aXZlRmlsdGVyIiwiZmllbGRzIiwib25DaGFuZ2UiLCJyZW1vdmVGaWx0ZXIiLCJ2YWx1ZSIsIlJlYWN0IiwibWFwIiwiZmlsdGVyIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU1BLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG1CQUFmOztBQUlBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUMsS0FBSyxFQUFJO01BRWxDQyxhQUZrQyxHQVFoQ0QsS0FSZ0MsQ0FFbENDLGFBRmtDO01BR2xDQyxlQUhrQyxHQVFoQ0YsS0FSZ0MsQ0FHbENFLGVBSGtDO01BSWxDQyxNQUprQyxHQVFoQ0gsS0FSZ0MsQ0FJbENHLE1BSmtDO01BS2xDQyxRQUxrQyxHQVFoQ0osS0FSZ0MsQ0FLbENJLFFBTGtDO01BTWxDQyxZQU5rQyxHQVFoQ0wsS0FSZ0MsQ0FNbENLLFlBTmtDO01BT2xDQyxLQVBrQyxHQVFoQ04sS0FSZ0MsQ0FPbENNLEtBUGtDO1NBV2xDQyw2QkFBQyxTQUFELFFBQ0dOLGFBQWEsQ0FBQ08sR0FBZCxDQUFrQixVQUFBQyxNQUFNO1dBQ3ZCRiw2QkFBQyxNQUFELGVBQ01FLE1BRE47TUFFRSxHQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsRUFGZDtNQUdFLFFBQVEsRUFBRU4sUUFIWjtNQUlFLFNBQVMsRUFBRUUsS0FKYjtNQUtFLFlBQVksRUFBRUQ7T0FOTztHQUF4QixDQURILEVBVUVFLDZCQUFDLGtCQUFEO0lBQW9CLE1BQU0sRUFBRUosTUFBNUI7SUFBb0MsUUFBUSxFQUFFRDtJQVZoRCxDQURGO0NBVkY7Ozs7In0=

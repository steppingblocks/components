import { c as _extends, b as _taggedTemplateLiteral } from '../../../chunk-039ee305.js';
import React__default from 'react';
import 'prop-types';
import '../../../chunk-de2160d3.js';
import styled from '@xstyled/styled-components';
import '../../../withTheme/index.js';
import '../../../chunk-bd0ca170.js';
import '../../../chunk-5c7b7697.js';
import 'react-dom';
import '../../../chunk-d79569b3.js';
import '../../../chunk-0e41642e.js';
import '../../../chunk-71fd30e4.js';
import '../../../chunk-26174fa5.js';
import '../../../chunk-687a7a24.js';
import '../../../chunk-26e478fc.js';
import '../../../chunk-00b923ae.js';
import '../../../chunk-8820e6e0.js';
import '../../../chunk-876b1421.js';
import '../../../chunk-cdd09aec.js';
import '../../../chunk-ee2530d1.js';
import '../../../chunk-73500ad2.js';
import '../../../chunk-ead10a8b.js';
import '../../../CustomButton/index.js';
import CreateFilterButton from '../CreateFilterButton/index.js';
import '../../../chunk-cc423a95.js';
import '../../../chunk-c76ef287.js';
import '../../../chunk-c30b8a6e.js';
import '../../../chunk-3694b3e2.js';
import '../../../chunk-49de36c7.js';
import '../../../chunk-2706ad5b.js';
import Filter from '../Filter/index.js';
import '../../../chunk-34c22bff.js';
import '../../../chunk-0caac9f0.js';
import '../../../chunk-5e1f7e4a.js';
import '../Filter/components/FilterContent/index.js';
import '../../../SingleLineTextInput/index.js';
import '../../../chunk-c0e929ab.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvY29tcG9uZW50cy9GaWx0ZXJzRm9ybUNvbXBvbmVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0B4c3R5bGVkL3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IENyZWF0ZUZpbHRlckJ1dHRvbiBmcm9tICcuLi9DcmVhdGVGaWx0ZXJCdXR0b24nXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL0ZpbHRlcidcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmNvbnN0IEZpbHRlcnNGb3JtQ29tcG9uZW50ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgYWN0aXZlRmlsdGVycyxcbiAgICBhZGRBY3RpdmVGaWx0ZXIsXG4gICAgZmllbGRzLFxuICAgIG9uQ2hhbmdlLFxuICAgIHJlbW92ZUZpbHRlcixcbiAgICB2YWx1ZVxuICB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7YWN0aXZlRmlsdGVycy5tYXAoZmlsdGVyID0+IChcbiAgICAgICAgPEZpbHRlclxuICAgICAgICAgIHsuLi5maWx0ZXJ9XG4gICAgICAgICAga2V5PXtmaWx0ZXIuaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGZvcm1WYWx1ZT17dmFsdWV9XG4gICAgICAgICAgcmVtb3ZlRmlsdGVyPXtyZW1vdmVGaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIDxDcmVhdGVGaWx0ZXJCdXR0b24gZmllbGRzPXtmaWVsZHN9IG9uU2VsZWN0PXthZGRBY3RpdmVGaWx0ZXJ9IC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyc0Zvcm1Db21wb25lbnRcbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGaWx0ZXJzRm9ybUNvbXBvbmVudCIsInByb3BzIiwiYWN0aXZlRmlsdGVycyIsImFkZEFjdGl2ZUZpbHRlciIsImZpZWxkcyIsIm9uQ2hhbmdlIiwicmVtb3ZlRmlsdGVyIiwidmFsdWUiLCJSZWFjdCIsIm1hcCIsImZpbHRlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU1BLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG1CQUFmOztBQUlBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUMsS0FBSyxFQUFJO01BRWxDQyxhQUZrQyxHQVFoQ0QsS0FSZ0MsQ0FFbENDLGFBRmtDO01BR2xDQyxlQUhrQyxHQVFoQ0YsS0FSZ0MsQ0FHbENFLGVBSGtDO01BSWxDQyxNQUprQyxHQVFoQ0gsS0FSZ0MsQ0FJbENHLE1BSmtDO01BS2xDQyxRQUxrQyxHQVFoQ0osS0FSZ0MsQ0FLbENJLFFBTGtDO01BTWxDQyxZQU5rQyxHQVFoQ0wsS0FSZ0MsQ0FNbENLLFlBTmtDO01BT2xDQyxLQVBrQyxHQVFoQ04sS0FSZ0MsQ0FPbENNLEtBUGtDO1NBV2xDQyw2QkFBQyxTQUFELFFBQ0dOLGFBQWEsQ0FBQ08sR0FBZCxDQUFrQixVQUFBQyxNQUFNO1dBQ3ZCRiw2QkFBQyxNQUFELGVBQ01FLE1BRE47TUFFRSxHQUFHLEVBQUVBLE1BQU0sQ0FBQ0MsRUFGZDtNQUdFLFFBQVEsRUFBRU4sUUFIWjtNQUlFLFNBQVMsRUFBRUUsS0FKYjtNQUtFLFlBQVksRUFBRUQ7T0FOTztHQUF4QixDQURILEVBVUVFLDZCQUFDLGtCQUFEO0lBQW9CLE1BQU0sRUFBRUosTUFBNUI7SUFBb0MsUUFBUSxFQUFFRDtJQVZoRCxDQURGO0NBVkY7Ozs7In0=

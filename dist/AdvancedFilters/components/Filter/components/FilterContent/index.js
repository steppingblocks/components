import { c as _extends, a as _objectSpread } from '../../../../../chunk-fee9d9e4.js';
import React__default from 'react';
import PropTypes__default from 'prop-types';
import '../../../../../chunk-c38916c0.js';
import '../../../../../chunk-8852f494.js';
import '../../../../../chunk-02ddfd93.js';
import '../../../../../chunk-1f7082a0.js';
import { R as RadioGroupWithText } from './components/RadioGroupWithText/index-8afccf90.js';
import '../../../../../chunk-9011c346.js';
import '@xstyled/styled-components';
import '../../../../../withTheme/index.js';
import '../../../../../chunk-dbd356d3.js';
import '../../../../../chunk-ee2530d1.js';
import '../../../../../chunk-bc8b20dc.js';
import 'react-dom';
import '../../../../../chunk-5d630e90.js';
import '../../../../../chunk-0880ccca.js';
import '../../../../../chunk-fd809749.js';
import '../../../../../chunk-a58638a0.js';
import '../../../../../chunk-8820e6e0.js';
import '../../../../../chunk-3a7de8d6.js';
import '../../../../../chunk-ec006b04.js';
import '../../../../../chunk-7a0c966a.js';
import '../../../../../CustomButton/index.js';
import SingleLineTextInput from '../../../../../SingleLineTextInput/index.js';
import '../../../../../chunk-36a4bc51.js';
import '../../../../../chunk-51ca1b6a.js';
import '../../../../../chunk-99f2aa66.js';
import '../../../../../chunk-5e1f7e4a.js';
import '../../../../../chunk-6caba0ca.js';
import { createGenericFormComponent } from '../../../../../GenericForm/index.js';
import '../../../../../chunk-d1cdd45e.js';
import '../../../../../chunk-d79569b3.js';

/**
 * Text filters
 */

var textFilters = [{
  label: 'Equals',
  value: 'eq',
  component: function component(options) {
    return React__default.createElement(SingleLineTextInput, options);
  }
}, {
  label: 'Not Equals',
  value: 'ne',
  component: function component(options) {
    return React__default.createElement(SingleLineTextInput, options);
  }
}, {
  label: 'Includes',
  value: 'contains',
  component: function component(options) {
    return React__default.createElement(SingleLineTextInput, options);
  }
}, {
  label: 'Starts With',
  value: 'startsWith',
  component: function component(options) {
    return React__default.createElement(SingleLineTextInput, options);
  }
}];
/**
 * Select filters
 */

var selectFilters = [{
  label: 'Equals',
  value: 'eq',
  component: function component(options) {
    return React__default.createElement("h1", options, "Equals");
  }
}, {
  label: 'Not Equals',
  value: 'ne',
  component: function component(options) {
    return React__default.createElement("h1", options, "Not Equals");
  }
}];

var getFormFields = function getFormFields(props) {
  return [{
    Component: RadioGroupWithText,
    name: 'filter',
    componentProps: _objectSpread({
      autoFocus: true
    }, props)
  }];
};

var FilterContent = function FilterContent(props) {
  var GenericImplementation = createGenericFormComponent({
    name: "form"
  });
  return React__default.createElement(GenericImplementation, {
    fields: getFormFields(props),
    submitButtonContent: "Apply",
    submitButtonProps: {
      block: true,
      size: 'small'
    },
    onSubmit: props.onChange
  });
};

FilterContent.propTypes = {
  filters: PropTypes__default.array.isRequired
};
var TextFilterContent = function TextFilterContent(props) {
  return React__default.createElement(FilterContent, _extends({
    filters: textFilters
  }, props));
};
var SelectFilterContent = function SelectFilterContent(props) {
  return React__default.createElement(FilterContent, _extends({
    filters: selectFilters
  }, props));
};

export { SelectFilterContent, TextFilterContent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvY29tcG9uZW50cy9GaWx0ZXIvY29tcG9uZW50cy9GaWx0ZXJDb250ZW50L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQVCBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IF9mcCBmcm9tICdsb2Rhc2gvZnAnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0B4c3R5bGVkL3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNpbmdsZUxpbmVUZXh0SW5wdXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vU2luZ2xlTGluZVRleHRJbnB1dCdcbmltcG9ydCBSYWRpb0dyb3VwV2l0aFRleHQgZnJvbSAnLi9jb21wb25lbnRzL1JhZGlvR3JvdXBXaXRoVGV4dCdcbmltcG9ydCB7IGNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vR2VuZXJpY0Zvcm0nXG5cbi8qKlxuICogVGV4dCBmaWx0ZXJzXG4gKi9cbmNvbnN0IHRleHRGaWx0ZXJzID0gW1xuICB7XG4gICAgbGFiZWw6ICdFcXVhbHMnLFxuICAgIHZhbHVlOiAnZXEnLFxuICAgIGNvbXBvbmVudDogb3B0aW9ucyA9PiA8U2luZ2xlTGluZVRleHRJbnB1dCB7Li4ub3B0aW9uc30gLz5cbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnTm90IEVxdWFscycsXG4gICAgdmFsdWU6ICduZScsXG4gICAgY29tcG9uZW50OiBvcHRpb25zID0+IDxTaW5nbGVMaW5lVGV4dElucHV0IHsuLi5vcHRpb25zfSAvPlxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdJbmNsdWRlcycsXG4gICAgdmFsdWU6ICdjb250YWlucycsXG4gICAgY29tcG9uZW50OiBvcHRpb25zID0+IDxTaW5nbGVMaW5lVGV4dElucHV0IHsuLi5vcHRpb25zfSAvPlxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdTdGFydHMgV2l0aCcsXG4gICAgdmFsdWU6ICdzdGFydHNXaXRoJyxcbiAgICBjb21wb25lbnQ6IG9wdGlvbnMgPT4gPFNpbmdsZUxpbmVUZXh0SW5wdXQgey4uLm9wdGlvbnN9IC8+XG4gIH1cbl1cblxuLyoqXG4gKiBTZWxlY3QgZmlsdGVyc1xuICovXG5jb25zdCBzZWxlY3RGaWx0ZXJzID0gW1xuICB7XG4gICAgbGFiZWw6ICdFcXVhbHMnLFxuICAgIHZhbHVlOiAnZXEnLFxuICAgIGNvbXBvbmVudDogb3B0aW9ucyA9PiA8aDEgey4uLm9wdGlvbnN9PkVxdWFsczwvaDE+XG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ05vdCBFcXVhbHMnLFxuICAgIHZhbHVlOiAnbmUnLFxuICAgIGNvbXBvbmVudDogb3B0aW9ucyA9PiA8aDEgey4uLm9wdGlvbnN9Pk5vdCBFcXVhbHM8L2gxPlxuICB9XG5dXG5cbmNvbnN0IGdldEZvcm1GaWVsZHMgPSBwcm9wcyA9PiBbXG4gIHtcbiAgICBDb21wb25lbnQ6IFJhZGlvR3JvdXBXaXRoVGV4dCxcbiAgICBuYW1lOiAnZmlsdGVyJyxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9XG4gIH1cbl1cblxuY29uc3QgRmlsdGVyQ29udGVudCA9IHByb3BzID0+IHtcbiAgY29uc3QgR2VuZXJpY0ltcGxlbWVudGF0aW9uID0gY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQoe1xuICAgIG5hbWU6IGBmb3JtYFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEdlbmVyaWNJbXBsZW1lbnRhdGlvblxuICAgICAgZmllbGRzPXtnZXRGb3JtRmllbGRzKHByb3BzKX1cbiAgICAgIHN1Ym1pdEJ1dHRvbkNvbnRlbnQ9XCJBcHBseVwiXG4gICAgICBzdWJtaXRCdXR0b25Qcm9wcz17eyBibG9jazogdHJ1ZSwgc2l6ZTogJ3NtYWxsJyB9fVxuICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uQ2hhbmdlfVxuICAgIC8+XG4gIClcbn1cblxuRmlsdGVyQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGZpbHRlcnM6IFBULmFycmF5LmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGNvbnN0IFRleHRGaWx0ZXJDb250ZW50ID0gcHJvcHMgPT4gKFxuICA8RmlsdGVyQ29udGVudCBmaWx0ZXJzPXt0ZXh0RmlsdGVyc30gey4uLnByb3BzfSAvPlxuKVxuXG5leHBvcnQgY29uc3QgU2VsZWN0RmlsdGVyQ29udGVudCA9IHByb3BzID0+IChcbiAgPEZpbHRlckNvbnRlbnQgZmlsdGVycz17c2VsZWN0RmlsdGVyc30gey4uLnByb3BzfSAvPlxuKVxuIl0sIm5hbWVzIjpbInRleHRGaWx0ZXJzIiwibGFiZWwiLCJ2YWx1ZSIsImNvbXBvbmVudCIsIm9wdGlvbnMiLCJSZWFjdCIsInNlbGVjdEZpbHRlcnMiLCJnZXRGb3JtRmllbGRzIiwicHJvcHMiLCJDb21wb25lbnQiLCJSYWRpb0dyb3VwV2l0aFRleHQiLCJuYW1lIiwiY29tcG9uZW50UHJvcHMiLCJhdXRvRm9jdXMiLCJGaWx0ZXJDb250ZW50IiwiR2VuZXJpY0ltcGxlbWVudGF0aW9uIiwiY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQiLCJibG9jayIsInNpemUiLCJvbkNoYW5nZSIsInByb3BUeXBlcyIsImZpbHRlcnMiLCJQVCIsImFycmF5IiwiaXNSZXF1aXJlZCIsIlRleHRGaWx0ZXJDb250ZW50IiwiU2VsZWN0RmlsdGVyQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBOzs7O0FBR0EsSUFBTUEsV0FBVyxHQUFHLENBQ2xCO0VBQ0VDLEtBQUssRUFBRSxRQURUO0VBRUVDLEtBQUssRUFBRSxJQUZUO0VBR0VDLFNBQVMsRUFBRSxtQkFBQUMsT0FBTztXQUFJQyw2QkFBQyxtQkFBRCxFQUF5QkQsT0FBekIsQ0FBSjs7Q0FKRixFQU1sQjtFQUNFSCxLQUFLLEVBQUUsWUFEVDtFQUVFQyxLQUFLLEVBQUUsSUFGVDtFQUdFQyxTQUFTLEVBQUUsbUJBQUFDLE9BQU87V0FBSUMsNkJBQUMsbUJBQUQsRUFBeUJELE9BQXpCLENBQUo7O0NBVEYsRUFXbEI7RUFDRUgsS0FBSyxFQUFFLFVBRFQ7RUFFRUMsS0FBSyxFQUFFLFVBRlQ7RUFHRUMsU0FBUyxFQUFFLG1CQUFBQyxPQUFPO1dBQUlDLDZCQUFDLG1CQUFELEVBQXlCRCxPQUF6QixDQUFKOztDQWRGLEVBZ0JsQjtFQUNFSCxLQUFLLEVBQUUsYUFEVDtFQUVFQyxLQUFLLEVBQUUsWUFGVDtFQUdFQyxTQUFTLEVBQUUsbUJBQUFDLE9BQU87V0FBSUMsNkJBQUMsbUJBQUQsRUFBeUJELE9BQXpCLENBQUo7O0NBbkJGLENBQXBCOzs7OztBQTBCQSxJQUFNRSxhQUFhLEdBQUcsQ0FDcEI7RUFDRUwsS0FBSyxFQUFFLFFBRFQ7RUFFRUMsS0FBSyxFQUFFLElBRlQ7RUFHRUMsU0FBUyxFQUFFLG1CQUFBQyxPQUFPO1dBQUlDLG1DQUFRRCxPQUFSLFdBQUo7O0NBSkEsRUFNcEI7RUFDRUgsS0FBSyxFQUFFLFlBRFQ7RUFFRUMsS0FBSyxFQUFFLElBRlQ7RUFHRUMsU0FBUyxFQUFFLG1CQUFBQyxPQUFPO1dBQUlDLG1DQUFRRCxPQUFSLGVBQUo7O0NBVEEsQ0FBdEI7O0FBYUEsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO1NBQUksQ0FDN0I7SUFDRUMsU0FBUyxFQUFFQyxrQkFEYjtJQUVFQyxJQUFJLEVBQUUsUUFGUjtJQUdFQyxjQUFjO01BQ1pDLFNBQVMsRUFBRTtPQUNSTCxLQUZTO0dBSmEsQ0FBSjtDQUEzQjs7QUFXQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFOLEtBQUssRUFBSTtNQUN2Qk8scUJBQXFCLEdBQUdDLDBCQUEwQixDQUFDO0lBQ3ZETCxJQUFJO0dBRGtELENBQXhEO1NBS0VOLDZCQUFDLHFCQUFEO0lBQ0UsTUFBTSxFQUFFRSxhQUFhLENBQUNDLEtBQUQsQ0FEdkI7SUFFRSxtQkFBbUIsRUFBQyxPQUZ0QjtJQUdFLGlCQUFpQixFQUFFO01BQUVTLEtBQUssRUFBRSxJQUFUO01BQWVDLElBQUksRUFBRTtLQUgxQztJQUlFLFFBQVEsRUFBRVYsS0FBSyxDQUFDVztJQUxwQjtDQUxGOztBQWVBTCxhQUFhLENBQUNNLFNBQWQsR0FBMEI7RUFDeEJDLE9BQU8sRUFBRUMsa0JBQUUsQ0FBQ0MsS0FBSCxDQUFTQztDQURwQjtBQUlBLElBQWFDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQWpCLEtBQUs7U0FDcENILDZCQUFDLGFBQUQ7SUFBZSxPQUFPLEVBQUVMO0tBQWlCUSxLQUF6QyxFQURvQztDQUEvQjtBQUlQLElBQWFrQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFsQixLQUFLO1NBQ3RDSCw2QkFBQyxhQUFEO0lBQWUsT0FBTyxFQUFFQztLQUFtQkUsS0FBM0MsRUFEc0M7Q0FBakM7Ozs7In0=

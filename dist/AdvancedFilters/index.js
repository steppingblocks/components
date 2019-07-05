import { _ as _slicedToArray, a as _objectSpread, b as _taggedTemplateLiteral } from '../chunk-039ee305.js';
import React__default, { useState } from 'react';
import PropTypes__default from 'prop-types';
import crypto from 'crypto';
import '../chunk-5732a1e2.js';
import { _ } from '../chunk-11b2c5f7.js';
import styled from '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import '../chunk-d5372693.js';
import CreateFilterButton from './components/CreateFilterButton/index.js';
import '../chunk-b738fedd.js';
import '../chunk-3e2072ff.js';
import '../chunk-61a72d63.js';
import 'react-dom';
import '../chunk-f27d627d.js';
import '../chunk-cc423a95.js';
import '../chunk-ee2530d1.js';
import '../chunk-c76ef287.js';
import '../chunk-c30b8a6e.js';
import '../chunk-df2ce768.js';
import '../chunk-daad1103.js';
import '../chunk-d79569b3.js';
import '../chunk-fe0021c2.js';
import '../chunk-e9a642ec.js';
import '../chunk-8aa82724.js';
import '../chunk-b2974b74.js';
import '../chunk-3472e013.js';
import { createGenericFormComponent } from '../GenericForm/index.js';
import '../chunk-0fbb0024.js';
import '../chunk-19fef367.js';
import '../chunk-60a4c6bd.js';
import '../chunk-8820e6e0.js';
import '../chunk-0626274a.js';
import '../chunk-ead10a8b.js';
import '../CustomButton/index.js';
import './components/Filter/index.js';
import '../chunk-f7f2b1fa.js';
import '../chunk-5b1a5812.js';
import '../chunk-5e1f7e4a.js';
import './components/Filter/components/FilterContent/index.js';
import '../SingleLineTextInput/index.js';
import '../chunk-560c0132.js';
import FiltersFormComponent from './components/FiltersFormComponent/index.js';

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.



var rng = function nodeRNG() {
  return crypto.randomBytes(16);
};

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

var bytesToUuid_1 = bytesToUuid;

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid_1(rnds);
}

var v4_1 = v4;

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  padding: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject());

var getFormFields = function getFormFields(props) {
  return [{
    Component: FiltersFormComponent,
    name: 'filter',
    componentProps: _objectSpread({}, props)
  }];
};

var GenericImplementation = createGenericFormComponent({
  name: "advanced_filters_form"
});
var AdvancedFilters = withTheme(function (props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      activeFilters = _useState2[0],
      setActiveFilters = _useState2[1];

  var addActiveFilter = function addActiveFilter(filter) {
    return setActiveFilters(activeFilters.concat(_objectSpread({
      id: v4_1()
    }, filter)));
  };

  var removeActiveFilter = function removeActiveFilter(removalId) {
    var newActiveFilters = activeFilters.filter(function (_ref) {
      var id = _ref.id;
      return removalId !== id;
    });
    setActiveFilters(newActiveFilters);
  };

  return React__default.createElement(Container, null, React__default.createElement(GenericImplementation, {
    fields: getFormFields(_objectSpread({}, _.pick(props, ['onChange', 'value']), {
      activeFilters: activeFilters,
      removeFilter: removeActiveFilter
    })),
    submitButtonContent: "Apply",
    submitButtonProps: {
      block: true,
      size: 'small'
    },
    onSubmit: console.log
  }), React__default.createElement(CreateFilterButton, {
    fields: props.fields,
    onSelect: addActiveFilter
  }));
});
AdvancedFilters.propTypes = {
  fields: PropTypes__default.object.isRequired
};
AdvancedFilters.defaultProps = {};
AdvancedFilters.displayName = AdvancedFilters;

export default AdvancedFilters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsIi4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIG5vZGUuanNcbi8vIHRoaXMgaXMgcHJldHR5IHN0cmFpZ2h0LWZvcndhcmQgLSB3ZSB1c2UgdGhlIGNyeXB0byBBUEkuXG5cbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub2RlUk5HKCkge1xuICByZXR1cm4gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KTtcbn07XG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAeHN0eWxlZC9zdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcbmltcG9ydCBDcmVhdGVGaWx0ZXJCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0NyZWF0ZUZpbHRlckJ1dHRvbidcbmltcG9ydCB7IGNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vR2VuZXJpY0Zvcm0nXG5pbXBvcnQgRmlsdGVyc0Zvcm1Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlcnNGb3JtQ29tcG9uZW50J1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTJweDtcbmBcblxuY29uc3QgZ2V0Rm9ybUZpZWxkcyA9IHByb3BzID0+IFtcbiAge1xuICAgIENvbXBvbmVudDogRmlsdGVyc0Zvcm1Db21wb25lbnQsXG4gICAgbmFtZTogJ2ZpbHRlcicsXG4gICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgIC4uLnByb3BzXG4gICAgfVxuICB9XG5dXG5cbmNvbnN0IEdlbmVyaWNJbXBsZW1lbnRhdGlvbiA9IGNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50KHtcbiAgbmFtZTogYGFkdmFuY2VkX2ZpbHRlcnNfZm9ybWBcbn0pXG5cbmNvbnN0IEFkdmFuY2VkRmlsdGVycyA9IHdpdGhUaGVtZShwcm9wcyA9PiB7XG4gIGNvbnN0IFthY3RpdmVGaWx0ZXJzLCBzZXRBY3RpdmVGaWx0ZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGFkZEFjdGl2ZUZpbHRlciA9IGZpbHRlciA9PlxuICAgIHNldEFjdGl2ZUZpbHRlcnMoXG4gICAgICBhY3RpdmVGaWx0ZXJzLmNvbmNhdCh7XG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIC4uLmZpbHRlclxuICAgICAgfSlcbiAgICApXG5cbiAgY29uc3QgcmVtb3ZlQWN0aXZlRmlsdGVyID0gcmVtb3ZhbElkID0+IHtcbiAgICBjb25zdCBuZXdBY3RpdmVGaWx0ZXJzID0gYWN0aXZlRmlsdGVycy5maWx0ZXIoKHsgaWQgfSkgPT4gcmVtb3ZhbElkICE9PSBpZClcbiAgICBzZXRBY3RpdmVGaWx0ZXJzKG5ld0FjdGl2ZUZpbHRlcnMpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8R2VuZXJpY0ltcGxlbWVudGF0aW9uXG4gICAgICAgIGZpZWxkcz17Z2V0Rm9ybUZpZWxkcyh7XG4gICAgICAgICAgLi4uXy5waWNrKHByb3BzLCBbJ29uQ2hhbmdlJywgJ3ZhbHVlJ10pLFxuICAgICAgICAgIGFjdGl2ZUZpbHRlcnMsXG4gICAgICAgICAgcmVtb3ZlRmlsdGVyOiByZW1vdmVBY3RpdmVGaWx0ZXJcbiAgICAgICAgfSl9XG4gICAgICAgIHN1Ym1pdEJ1dHRvbkNvbnRlbnQ9XCJBcHBseVwiXG4gICAgICAgIHN1Ym1pdEJ1dHRvblByb3BzPXt7IGJsb2NrOiB0cnVlLCBzaXplOiAnc21hbGwnIH19XG4gICAgICAgIG9uU3VibWl0PXtjb25zb2xlLmxvZ31cbiAgICAgIC8+XG4gICAgICA8Q3JlYXRlRmlsdGVyQnV0dG9uIGZpZWxkcz17cHJvcHMuZmllbGRzfSBvblNlbGVjdD17YWRkQWN0aXZlRmlsdGVyfSAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59KVxuXG5BZHZhbmNlZEZpbHRlcnMucHJvcFR5cGVzID0ge1xuICBmaWVsZHM6IFBULm9iamVjdC5pc1JlcXVpcmVkXG59XG5cbkFkdmFuY2VkRmlsdGVycy5kZWZhdWx0UHJvcHMgPSB7fVxuXG5BZHZhbmNlZEZpbHRlcnMuZGlzcGxheU5hbWUgPSBBZHZhbmNlZEZpbHRlcnNcblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRGaWx0ZXJzXG4iXSwibmFtZXMiOlsiYnl0ZXNUb1V1aWQiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJnZXRGb3JtRmllbGRzIiwicHJvcHMiLCJDb21wb25lbnQiLCJGaWx0ZXJzRm9ybUNvbXBvbmVudCIsIm5hbWUiLCJjb21wb25lbnRQcm9wcyIsIkdlbmVyaWNJbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50IiwiQWR2YW5jZWRGaWx0ZXJzIiwid2l0aFRoZW1lIiwidXNlU3RhdGUiLCJhY3RpdmVGaWx0ZXJzIiwic2V0QWN0aXZlRmlsdGVycyIsImFkZEFjdGl2ZUZpbHRlciIsImZpbHRlciIsImNvbmNhdCIsImlkIiwidXVpZCIsInJlbW92ZUFjdGl2ZUZpbHRlciIsInJlbW92YWxJZCIsIm5ld0FjdGl2ZUZpbHRlcnMiLCJSZWFjdCIsIl8iLCJwaWNrIiwicmVtb3ZlRmlsdGVyIiwiYmxvY2siLCJzaXplIiwiY29uc29sZSIsImxvZyIsImZpZWxkcyIsInByb3BUeXBlcyIsIlBUIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUtBLE9BQWMsR0FBRyxTQUFTLE9BQU8sR0FBRztFQUNsQyxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDL0IsQ0FBQzs7QUNQRjs7OztBQUlBLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO0VBQzVCLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNuRDs7QUFFRCxTQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFO0VBQ2hDLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUM7RUFDcEIsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDOztFQUVwQixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRztDQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHO0NBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUc7Q0FDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRztDQUNqQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ3hDOztBQUVELGlCQUFjLEdBQUcsV0FBVyxDQUFDOztBQ3BCN0IsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7RUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUM7O0VBRTNCLElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxRQUFRLEVBQUU7SUFDL0IsR0FBRyxHQUFHLE9BQU8sS0FBSyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2xELE9BQU8sR0FBRyxJQUFJLENBQUM7R0FDaEI7RUFDRCxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQzs7RUFFeEIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7OztFQUdwRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQztFQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQzs7O0VBR2xDLElBQUksR0FBRyxFQUFFO0lBQ1AsS0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtNQUM5QixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4QjtHQUNGOztFQUVELE9BQU8sR0FBRyxJQUFJQSxhQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQsUUFBYyxHQUFHLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7QUNsQnBCLElBQU1DLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG1CQUFmOztBQVNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSztTQUFJLENBQzdCO0lBQ0VDLFNBQVMsRUFBRUMsb0JBRGI7SUFFRUMsSUFBSSxFQUFFLFFBRlI7SUFHRUMsY0FBYyxvQkFDVEosS0FEUztHQUphLENBQUo7Q0FBM0I7O0FBVUEsSUFBTUsscUJBQXFCLEdBQUdDLDBCQUEwQixDQUFDO0VBQ3ZESCxJQUFJO0NBRGtELENBQXhEO0FBSUEsSUFBTUksZUFBZSxHQUFHQyxTQUFTLENBQUMsVUFBQVIsS0FBSyxFQUFJO2tCQUNDUyxRQUFRLENBQUMsRUFBRCxDQURUOztNQUNsQ0MsYUFEa0M7TUFDbkJDLGdCQURtQjs7TUFHbkNDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsTUFBTTtXQUM1QkYsZ0JBQWdCLENBQ2RELGFBQWEsQ0FBQ0ksTUFBZDtNQUNFQyxFQUFFLEVBQUVDLElBQUk7T0FDTEgsTUFGTCxFQURjLENBRFk7R0FBOUI7O01BUU1JLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUMsU0FBUyxFQUFJO1FBQ2hDQyxnQkFBZ0IsR0FBR1QsYUFBYSxDQUFDRyxNQUFkLENBQXFCO1VBQUdFLEVBQUgsUUFBR0EsRUFBSDthQUFZRyxTQUFTLEtBQUtILEVBQTFCO0tBQXJCLENBQXpCO0lBQ0FKLGdCQUFnQixDQUFDUSxnQkFBRCxDQUFoQjtHQUZGOztTQU1FQyw2QkFBQyxTQUFELFFBQ0VBLDZCQUFDLHFCQUFEO0lBQ0UsTUFBTSxFQUFFckIsYUFBYSxtQkFDaEJzQixDQUFDLENBQUNDLElBQUYsQ0FBT3RCLEtBQVAsRUFBYyxDQUFDLFVBQUQsRUFBYSxPQUFiLENBQWQsQ0FEZ0I7TUFFbkJVLGFBQWEsRUFBYkEsYUFGbUI7TUFHbkJhLFlBQVksRUFBRU47T0FKbEI7SUFNRSxtQkFBbUIsRUFBQyxPQU50QjtJQU9FLGlCQUFpQixFQUFFO01BQUVPLEtBQUssRUFBRSxJQUFUO01BQWVDLElBQUksRUFBRTtLQVAxQztJQVFFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQztJQVR0QixFQVdFUCw2QkFBQyxrQkFBRDtJQUFvQixNQUFNLEVBQUVwQixLQUFLLENBQUM0QixNQUFsQztJQUEwQyxRQUFRLEVBQUVoQjtJQVh0RCxDQURGO0NBaEIrQixDQUFqQztBQWlDQUwsZUFBZSxDQUFDc0IsU0FBaEIsR0FBNEI7RUFDMUJELE1BQU0sRUFBRUUsa0JBQUUsQ0FBQ0MsTUFBSCxDQUFVQztDQURwQjtBQUlBekIsZUFBZSxDQUFDMEIsWUFBaEIsR0FBK0IsRUFBL0I7QUFFQTFCLGVBQWUsQ0FBQzJCLFdBQWhCLEdBQThCM0IsZUFBOUI7Ozs7In0=

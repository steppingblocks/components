import { _ as _slicedToArray, a as _objectSpread, b as _taggedTemplateLiteral } from '../chunk-039ee305.js';
import React__default, { useState } from 'react';
import PropTypes__default from 'prop-types';
import crypto from 'crypto';
import '../chunk-de2160d3.js';
import { _ } from '../chunk-0623ebb0.js';
import styled from '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import '../chunk-bd0ca170.js';
import { createGenericFormComponent } from '../GenericForm/index.js';
import '../chunk-ccd1ee83.js';
import '../chunk-5c7b7697.js';
import 'react-dom';
import '../chunk-d79569b3.js';
import '../chunk-0e41642e.js';
import '../chunk-71fd30e4.js';
import '../chunk-26174fa5.js';
import '../chunk-687a7a24.js';
import '../chunk-26e478fc.js';
import '../chunk-00b923ae.js';
import '../chunk-8820e6e0.js';
import '../chunk-876b1421.js';
import '../chunk-cdd09aec.js';
import '../chunk-ee2530d1.js';
import '../chunk-73500ad2.js';
import '../chunk-ead10a8b.js';
import '../CustomButton/index.js';
import './components/CreateFilterButton/index.js';
import '../chunk-cc423a95.js';
import '../chunk-c76ef287.js';
import '../chunk-c30b8a6e.js';
import '../chunk-3694b3e2.js';
import '../chunk-49de36c7.js';
import '../chunk-2706ad5b.js';
import './components/Filter/index.js';
import '../chunk-34c22bff.js';
import '../chunk-0caac9f0.js';
import '../chunk-5e1f7e4a.js';
import './components/Filter/components/FilterContent/index.js';
import '../SingleLineTextInput/index.js';
import '../chunk-c0e929ab.js';
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
  var data = _taggedTemplateLiteral(["\n  padding: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject());
/**
 * Gets form fields
 * @param {Object} props
 */

var getFormFields = function getFormFields(props) {
  return [{
    Component: FiltersFormComponent,
    name: 'filter',
    componentProps: props
  }];
};
/**
 * Create form implementation
 */


var GenericImplementation = createGenericFormComponent({
  name: "advanced_filters_form"
});
var AdvancedFilters = withTheme(function (props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      activeFilters = _useState2[0],
      setActiveFilters = _useState2[1];
  /**
   * Add new filter
   * @param {Object} filter
   */


  var addActiveFilter = function addActiveFilter(filter) {
    return setActiveFilters(activeFilters.concat(_objectSpread({
      id: v4_1()
    }, filter)));
  };
  /**
   * Removes filter
   * @param {UUID} removalId
   */


  var removeActiveFilter = function removeActiveFilter(removalId) {
    var newActiveFilters = _.remove(activeFilters, function (_ref) {
      var id = _ref.id;
      return id !== removalId;
    });

    setActiveFilters(newActiveFilters);
  };

  return React__default.createElement(Container, null, React__default.createElement(GenericImplementation, {
    fields: getFormFields(_objectSpread({}, _.pick(props, ['fields', 'onChange', 'value']), {
      activeFilters: activeFilters,
      addActiveFilter: addActiveFilter,
      removeFilter: removeActiveFilter
    })),
    submitButtonHidden: _.isEqual(activeFilters.length, 0),
    submitButtonContent: "Apply",
    submitButtonProps: {
      ml: '8px'
    },
    onSubmit: props.onSubmit
  }));
});
AdvancedFilters.propTypes = {
  fields: PropTypes__default.object.isRequired,
  onSubmit: PropTypes__default.func.isRequired
};
AdvancedFilters.defaultProps = {};
AdvancedFilters.displayName = AdvancedFilters;
var FilterTypes = {
  SELECT: 'select',
  TEXT: 'text'
};

export default AdvancedFilters;
export { FilterTypes };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsIi4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIG5vZGUuanNcbi8vIHRoaXMgaXMgcHJldHR5IHN0cmFpZ2h0LWZvcndhcmQgLSB3ZSB1c2UgdGhlIGNyeXB0byBBUEkuXG5cbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub2RlUk5HKCkge1xuICByZXR1cm4gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KTtcbn07XG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAeHN0eWxlZC9zdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcbmltcG9ydCB7IGNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vR2VuZXJpY0Zvcm0nXG5pbXBvcnQgRmlsdGVyc0Zvcm1Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlcnNGb3JtQ29tcG9uZW50J1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMnB4O1xuYFxuXG4vKipcbiAqIEdldHMgZm9ybSBmaWVsZHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICovXG5jb25zdCBnZXRGb3JtRmllbGRzID0gcHJvcHMgPT4gW1xuICB7XG4gICAgQ29tcG9uZW50OiBGaWx0ZXJzRm9ybUNvbXBvbmVudCxcbiAgICBuYW1lOiAnZmlsdGVyJyxcbiAgICBjb21wb25lbnRQcm9wczogcHJvcHNcbiAgfVxuXVxuXG4vKipcbiAqIENyZWF0ZSBmb3JtIGltcGxlbWVudGF0aW9uXG4gKi9cbmNvbnN0IEdlbmVyaWNJbXBsZW1lbnRhdGlvbiA9IGNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50KHtcbiAgbmFtZTogYGFkdmFuY2VkX2ZpbHRlcnNfZm9ybWBcbn0pXG5cbmNvbnN0IEFkdmFuY2VkRmlsdGVycyA9IHdpdGhUaGVtZShwcm9wcyA9PiB7XG4gIGNvbnN0IFthY3RpdmVGaWx0ZXJzLCBzZXRBY3RpdmVGaWx0ZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGZpbHRlclxuICAgKiBAcGFyYW0ge09iamVjdH0gZmlsdGVyXG4gICAqL1xuICBjb25zdCBhZGRBY3RpdmVGaWx0ZXIgPSBmaWx0ZXIgPT5cbiAgICBzZXRBY3RpdmVGaWx0ZXJzKFxuICAgICAgYWN0aXZlRmlsdGVycy5jb25jYXQoe1xuICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICAuLi5maWx0ZXJcbiAgICAgIH0pXG4gICAgKVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGZpbHRlclxuICAgKiBAcGFyYW0ge1VVSUR9IHJlbW92YWxJZFxuICAgKi9cbiAgY29uc3QgcmVtb3ZlQWN0aXZlRmlsdGVyID0gcmVtb3ZhbElkID0+IHtcbiAgICBjb25zdCBuZXdBY3RpdmVGaWx0ZXJzID0gXy5yZW1vdmUoXG4gICAgICBhY3RpdmVGaWx0ZXJzLFxuICAgICAgKHsgaWQgfSkgPT4gaWQgIT09IHJlbW92YWxJZFxuICAgIClcbiAgICBzZXRBY3RpdmVGaWx0ZXJzKG5ld0FjdGl2ZUZpbHRlcnMpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8R2VuZXJpY0ltcGxlbWVudGF0aW9uXG4gICAgICAgIGZpZWxkcz17Z2V0Rm9ybUZpZWxkcyh7XG4gICAgICAgICAgLi4uXy5waWNrKHByb3BzLCBbJ2ZpZWxkcycsICdvbkNoYW5nZScsICd2YWx1ZSddKSxcbiAgICAgICAgICBhY3RpdmVGaWx0ZXJzLFxuICAgICAgICAgIGFkZEFjdGl2ZUZpbHRlcixcbiAgICAgICAgICByZW1vdmVGaWx0ZXI6IHJlbW92ZUFjdGl2ZUZpbHRlclxuICAgICAgICB9KX1cbiAgICAgICAgc3VibWl0QnV0dG9uSGlkZGVuPXtfLmlzRXF1YWwoYWN0aXZlRmlsdGVycy5sZW5ndGgsIDApfVxuICAgICAgICBzdWJtaXRCdXR0b25Db250ZW50PVwiQXBwbHlcIlxuICAgICAgICBzdWJtaXRCdXR0b25Qcm9wcz17eyBtbDogJzhweCcgfX1cbiAgICAgICAgb25TdWJtaXQ9e3Byb3BzLm9uU3VibWl0fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufSlcblxuQWR2YW5jZWRGaWx0ZXJzLnByb3BUeXBlcyA9IHtcbiAgZmllbGRzOiBQVC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25TdWJtaXQ6IFBULmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5BZHZhbmNlZEZpbHRlcnMuZGVmYXVsdFByb3BzID0ge31cblxuQWR2YW5jZWRGaWx0ZXJzLmRpc3BsYXlOYW1lID0gQWR2YW5jZWRGaWx0ZXJzXG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkRmlsdGVyc1xuXG5leHBvcnQgY29uc3QgRmlsdGVyVHlwZXMgPSB7XG4gIFNFTEVDVDogJ3NlbGVjdCcsXG4gIFRFWFQ6ICd0ZXh0J1xufVxuIl0sIm5hbWVzIjpbImJ5dGVzVG9VdWlkIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZ2V0Rm9ybUZpZWxkcyIsInByb3BzIiwiQ29tcG9uZW50IiwiRmlsdGVyc0Zvcm1Db21wb25lbnQiLCJuYW1lIiwiY29tcG9uZW50UHJvcHMiLCJHZW5lcmljSW1wbGVtZW50YXRpb24iLCJjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCIsIkFkdmFuY2VkRmlsdGVycyIsIndpdGhUaGVtZSIsInVzZVN0YXRlIiwiYWN0aXZlRmlsdGVycyIsInNldEFjdGl2ZUZpbHRlcnMiLCJhZGRBY3RpdmVGaWx0ZXIiLCJmaWx0ZXIiLCJjb25jYXQiLCJpZCIsInV1aWQiLCJyZW1vdmVBY3RpdmVGaWx0ZXIiLCJyZW1vdmFsSWQiLCJuZXdBY3RpdmVGaWx0ZXJzIiwiXyIsInJlbW92ZSIsIlJlYWN0IiwicGljayIsInJlbW92ZUZpbHRlciIsImlzRXF1YWwiLCJsZW5ndGgiLCJtbCIsIm9uU3VibWl0IiwicHJvcFR5cGVzIiwiZmllbGRzIiwiUFQiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIiwiRmlsdGVyVHlwZXMiLCJTRUxFQ1QiLCJURVhUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBS0EsT0FBYyxHQUFHLFNBQVMsT0FBTyxHQUFHO0VBQ2xDLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUMvQixDQUFDOztBQ1BGOzs7O0FBSUEsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7RUFDNUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ25EOztBQUVELFNBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUU7RUFDaEMsSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsQ0FBQztFQUNwQixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUM7O0VBRXBCLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHO0NBQ2pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFF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

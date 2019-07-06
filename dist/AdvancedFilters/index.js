import { _ as _slicedToArray, a as _objectSpread, b as _taggedTemplateLiteral } from '../chunk-039ee305.js';
import React__default, { useState } from 'react';
import PropTypes__default from 'prop-types';
import crypto from 'crypto';
import '../chunk-5732a1e2.js';
import { _ } from '../chunk-11b2c5f7.js';
import styled from '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';
import '../chunk-218dc193.js';
import { createGenericFormComponent } from '../GenericForm/index.js';
import '../chunk-469aa2a1.js';
import '../chunk-55a8f221.js';
import 'react-dom';
import '../chunk-d79569b3.js';
import '../chunk-bbc6af60.js';
import '../chunk-e008480f.js';
import '../chunk-bbdab8a3.js';
import '../chunk-99207a3b.js';
import '../chunk-c27c29c8.js';
import '../chunk-f27d627d.js';
import '../chunk-4c226307.js';
import '../chunk-8820e6e0.js';
import '../chunk-e9a642ec.js';
import '../chunk-d1343d60.js';
import '../chunk-ee2530d1.js';
import '../chunk-c35b7916.js';
import '../chunk-ead10a8b.js';
import '../CustomButton/index.js';
import '../chunk-8aa82724.js';
import './components/CreateFilterButton/index.js';
import '../chunk-cc423a95.js';
import '../chunk-c76ef287.js';
import '../chunk-c30b8a6e.js';
import '../chunk-03805be5.js';
import '../chunk-69ee6dc4.js';
import './components/Filter/index.js';
import '../chunk-38979edb.js';
import '../chunk-945c35cc.js';
import '../chunk-5e1f7e4a.js';
import './components/Filter/components/FilterContent/index.js';
import '../SingleLineTextInput/index.js';
import '../chunk-c855a38a.js';
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
      addActiveFilter: addActiveFilter,
      activeFilters: activeFilters,
      removeFilter: removeActiveFilter
    })),
    submitButtonHidden: _.isEqual(activeFilters.length, 0),
    submitButtonContent: "Apply",
    submitButtonProps: {
      ml: '8px'
    },
    onSubmit: console.log
  }));
});
AdvancedFilters.propTypes = {
  fields: PropTypes__default.object.isRequired
};
AdvancedFilters.defaultProps = {};
AdvancedFilters.displayName = AdvancedFilters;

export default AdvancedFilters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsIi4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIG5vZGUuanNcbi8vIHRoaXMgaXMgcHJldHR5IHN0cmFpZ2h0LWZvcndhcmQgLSB3ZSB1c2UgdGhlIGNyeXB0byBBUEkuXG5cbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub2RlUk5HKCkge1xuICByZXR1cm4gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KTtcbn07XG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAeHN0eWxlZC9zdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcbmltcG9ydCB7IGNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vR2VuZXJpY0Zvcm0nXG5pbXBvcnQgRmlsdGVyc0Zvcm1Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlcnNGb3JtQ29tcG9uZW50J1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMnB4O1xuYFxuXG4vKipcbiAqIEdldHMgZm9ybSBmaWVsZHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICovXG5jb25zdCBnZXRGb3JtRmllbGRzID0gcHJvcHMgPT4gW1xuICB7XG4gICAgQ29tcG9uZW50OiBGaWx0ZXJzRm9ybUNvbXBvbmVudCxcbiAgICBuYW1lOiAnZmlsdGVyJyxcbiAgICBjb21wb25lbnRQcm9wczogcHJvcHNcbiAgfVxuXVxuXG4vKipcbiAqIENyZWF0ZSBmb3JtIGltcGxlbWVudGF0aW9uXG4gKi9cbmNvbnN0IEdlbmVyaWNJbXBsZW1lbnRhdGlvbiA9IGNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50KHtcbiAgbmFtZTogYGFkdmFuY2VkX2ZpbHRlcnNfZm9ybWBcbn0pXG5cbmNvbnN0IEFkdmFuY2VkRmlsdGVycyA9IHdpdGhUaGVtZShwcm9wcyA9PiB7XG4gIGNvbnN0IFthY3RpdmVGaWx0ZXJzLCBzZXRBY3RpdmVGaWx0ZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IGZpbHRlclxuICAgKiBAcGFyYW0ge09iamVjdH0gZmlsdGVyXG4gICAqL1xuICBjb25zdCBhZGRBY3RpdmVGaWx0ZXIgPSBmaWx0ZXIgPT5cbiAgICBzZXRBY3RpdmVGaWx0ZXJzKFxuICAgICAgYWN0aXZlRmlsdGVycy5jb25jYXQoe1xuICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICAuLi5maWx0ZXJcbiAgICAgIH0pXG4gICAgKVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGZpbHRlclxuICAgKiBAcGFyYW0ge1VVSUR9IHJlbW92YWxJZFxuICAgKi9cbiAgY29uc3QgcmVtb3ZlQWN0aXZlRmlsdGVyID0gcmVtb3ZhbElkID0+IHtcbiAgICBjb25zdCBuZXdBY3RpdmVGaWx0ZXJzID0gXy5yZW1vdmUoXG4gICAgICBhY3RpdmVGaWx0ZXJzLFxuICAgICAgKHsgaWQgfSkgPT4gaWQgIT09IHJlbW92YWxJZFxuICAgIClcbiAgICBzZXRBY3RpdmVGaWx0ZXJzKG5ld0FjdGl2ZUZpbHRlcnMpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8R2VuZXJpY0ltcGxlbWVudGF0aW9uXG4gICAgICAgIGZpZWxkcz17Z2V0Rm9ybUZpZWxkcyh7XG4gICAgICAgICAgLi4uXy5waWNrKHByb3BzLCBbJ2ZpZWxkcycsICdvbkNoYW5nZScsICd2YWx1ZSddKSxcbiAgICAgICAgICBhZGRBY3RpdmVGaWx0ZXIsXG4gICAgICAgICAgYWN0aXZlRmlsdGVycyxcbiAgICAgICAgICByZW1vdmVGaWx0ZXI6IHJlbW92ZUFjdGl2ZUZpbHRlclxuICAgICAgICB9KX1cbiAgICAgICAgc3VibWl0QnV0dG9uSGlkZGVuPXtfLmlzRXF1YWwoYWN0aXZlRmlsdGVycy5sZW5ndGgsIDApfVxuICAgICAgICBzdWJtaXRCdXR0b25Db250ZW50PVwiQXBwbHlcIlxuICAgICAgICBzdWJtaXRCdXR0b25Qcm9wcz17eyBtbDogJzhweCcgfX1cbiAgICAgICAgb25TdWJtaXQ9e2NvbnNvbGUubG9nfVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufSlcblxuQWR2YW5jZWRGaWx0ZXJzLnByb3BUeXBlcyA9IHtcbiAgZmllbGRzOiBQVC5vYmplY3QuaXNSZXF1aXJlZFxufVxuXG5BZHZhbmNlZEZpbHRlcnMuZGVmYXVsdFByb3BzID0ge31cblxuQWR2YW5jZWRGaWx0ZXJzLmRpc3BsYXlOYW1lID0gQWR2YW5jZWRGaWx0ZXJzXG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkRmlsdGVyc1xuIl0sIm5hbWVzIjpbImJ5dGVzVG9VdWlkIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZ2V0Rm9ybUZpZWxkcyIsInByb3BzIiwiQ29tcG9uZW50IiwiRmlsdGVyc0Zvcm1Db21wb25lbnQiLCJuYW1lIiwiY29tcG9uZW50UHJvcHMiLCJHZW5lcmljSW1wbGVtZW50YXRpb24iLCJjcmVhdGVHZW5lcmljRm9ybUNvbXBvbmVudCIsIkFkdmFuY2VkRmlsdGVycyIsIndpdGhUaGVtZSIsInVzZVN0YXRlIiwiYWN0aXZlRmlsdGVycyIsInNldEFjdGl2ZUZpbHRlcnMiLCJhZGRBY3RpdmVGaWx0ZXIiLCJmaWx0ZXIiLCJjb25jYXQiLCJpZCIsInV1aWQiLCJyZW1vdmVBY3RpdmVGaWx0ZXIiLCJyZW1vdmFsSWQiLCJuZXdBY3RpdmVGaWx0ZXJzIiwiXyIsInJlbW92ZSIsIlJlYWN0IiwicGljayIsInJlbW92ZUZpbHRlciIsImlzRXF1YWwiLCJsZW5ndGgiLCJtbCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wVHlwZXMiLCJmaWVsZHMiLCJQVCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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

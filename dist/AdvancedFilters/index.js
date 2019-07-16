import { _ as _slicedToArray, a as _taggedTemplateLiteral, b as _objectSpread$1 } from '../chunk-c69f4c9d.js';
import React__default, { useState } from 'react';
import PropTypes__default from 'prop-types';
import crypto from 'crypto';
import '../chunk-5732a1e2.js';
import { w as withTheme, _ } from '../withTheme/index-d1a984d4.js';
import styled from 'styled-components';
import '../chunk-69193f69.js';
import '../chunk-94c4abeb.js';
import GenericForm from '../GenericForm/index.js';
import '../chunk-b9a2ef76.js';
import '../chunk-27ab9880.js';
import 'react-dom';
import '../chunk-d79569b3.js';
import '../chunk-dc6fce77.js';
import '../chunk-ebe821e3.js';
import '../chunk-ef3ac92a.js';
import '../chunk-40ab7835.js';
import '../chunk-def42873.js';
import '../chunk-f27d627d.js';
import '../chunk-71699874.js';
import '../chunk-8820e6e0.js';
import '../chunk-6a997ef0.js';
import '../chunk-263f4733.js';
import '../chunk-a567c850.js';
import '../chunk-c35b7916.js';
import '../chunk-28019ed9.js';
import '../CustomButton/index.js';
import './components/CreateFilterButton/index.js';
import '../chunk-978db12d.js';
import '../chunk-c76ef287.js';
import '../chunk-c30b8a6e.js';
import '../chunk-ec4a5109.js';
import '../chunk-da442227.js';
import './components/Filter/index.js';
import '../chunk-cbb0cfa4.js';
import '../chunk-78db56d9.js';
import '../chunk-a99b813c.js';
import './components/Filter/components/FilterContent/index.js';
import '../SingleLineTextInput/index-d9f19098.js';
import '../chunk-594efdf6.js';
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
    inputProps: props,
    name: 'filter'
  }];
};

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
    return setActiveFilters(activeFilters.concat(_objectSpread$1({
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

  var formFields = getFormFields(_objectSpread({}, _.pick(props, ['fields', 'onChange', 'value']), {
    activeFilters: activeFilters,
    addActiveFilter: addActiveFilter,
    removeFilter: removeActiveFilter
  }));
  return React__default.createElement(Container, null, React__default.createElement(GenericForm, {
    fields: formFields,
    formProps: {
      onSubmit: props.onSubmit
    },
    submitButtonHidden: _.isEqual(activeFilters.length, 0),
    submitButtonContent: "Apply",
    submitButtonProps: {
      style: {
        marginLeft: '8px'
      }
    }
  }));
});
AdvancedFilters.propTypes = {
  fields: PropTypes__default.object.isRequired,
  onSubmit: PropTypes__default.func.isRequired
};
AdvancedFilters.defaultProps = {
  onSubmit: console.log
};
AdvancedFilters.displayName = AdvancedFilters;
var FilterTypes = {
  SELECT: 'select',
  TEXT: 'text'
};

export default AdvancedFilters;
export { FilterTypes };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsIi4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIG5vZGUuanNcbi8vIHRoaXMgaXMgcHJldHR5IHN0cmFpZ2h0LWZvcndhcmQgLSB3ZSB1c2UgdGhlIGNyeXB0byBBUEkuXG5cbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub2RlUk5HKCkge1xuICByZXR1cm4gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KTtcbn07XG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vd2l0aFRoZW1lJ1xuaW1wb3J0IEdlbmVyaWNGb3JtIGZyb20gJy4uL0dlbmVyaWNGb3JtJ1xuaW1wb3J0IEZpbHRlcnNGb3JtQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9GaWx0ZXJzRm9ybUNvbXBvbmVudCdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTJweDtcbmBcblxuLyoqXG4gKiBHZXRzIGZvcm0gZmllbGRzXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqL1xuY29uc3QgZ2V0Rm9ybUZpZWxkcyA9IHByb3BzID0+IFtcbiAge1xuICAgIENvbXBvbmVudDogRmlsdGVyc0Zvcm1Db21wb25lbnQsXG4gICAgaW5wdXRQcm9wczogcHJvcHMsXG4gICAgbmFtZTogJ2ZpbHRlcidcbiAgfVxuXVxuXG5jb25zdCBBZHZhbmNlZEZpbHRlcnMgPSB3aXRoVGhlbWUocHJvcHMgPT4ge1xuICBjb25zdCBbYWN0aXZlRmlsdGVycywgc2V0QWN0aXZlRmlsdGVyc10gPSB1c2VTdGF0ZShbXSlcblxuICAvKipcbiAgICogQWRkIG5ldyBmaWx0ZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IGZpbHRlclxuICAgKi9cbiAgY29uc3QgYWRkQWN0aXZlRmlsdGVyID0gZmlsdGVyID0+XG4gICAgc2V0QWN0aXZlRmlsdGVycyhcbiAgICAgIGFjdGl2ZUZpbHRlcnMuY29uY2F0KHtcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgLi4uZmlsdGVyXG4gICAgICB9KVxuICAgIClcblxuICAvKipcbiAgICogUmVtb3ZlcyBmaWx0ZXJcbiAgICogQHBhcmFtIHtVVUlEfSByZW1vdmFsSWRcbiAgICovXG4gIGNvbnN0IHJlbW92ZUFjdGl2ZUZpbHRlciA9IHJlbW92YWxJZCA9PiB7XG4gICAgY29uc3QgbmV3QWN0aXZlRmlsdGVycyA9IF8ucmVtb3ZlKFxuICAgICAgYWN0aXZlRmlsdGVycyxcbiAgICAgICh7IGlkIH0pID0+IGlkICE9PSByZW1vdmFsSWRcbiAgICApXG4gICAgc2V0QWN0aXZlRmlsdGVycyhuZXdBY3RpdmVGaWx0ZXJzKVxuICB9XG5cbiAgY29uc3QgZm9ybUZpZWxkcyA9IGdldEZvcm1GaWVsZHMoe1xuICAgIC4uLl8ucGljayhwcm9wcywgWydmaWVsZHMnLCAnb25DaGFuZ2UnLCAndmFsdWUnXSksXG4gICAgYWN0aXZlRmlsdGVycyxcbiAgICBhZGRBY3RpdmVGaWx0ZXIsXG4gICAgcmVtb3ZlRmlsdGVyOiByZW1vdmVBY3RpdmVGaWx0ZXJcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8R2VuZXJpY0Zvcm1cbiAgICAgICAgZmllbGRzPXtmb3JtRmllbGRzfVxuICAgICAgICBmb3JtUHJvcHM9e3sgb25TdWJtaXQ6IHByb3BzLm9uU3VibWl0IH19XG4gICAgICAgIHN1Ym1pdEJ1dHRvbkhpZGRlbj17Xy5pc0VxdWFsKGFjdGl2ZUZpbHRlcnMubGVuZ3RoLCAwKX1cbiAgICAgICAgc3VibWl0QnV0dG9uQ29udGVudD1cIkFwcGx5XCJcbiAgICAgICAgc3VibWl0QnV0dG9uUHJvcHM9e3sgc3R5bGU6IHsgbWFyZ2luTGVmdDogJzhweCcgfSB9fVxuICAgICAgLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufSlcblxuQWR2YW5jZWRGaWx0ZXJzLnByb3BUeXBlcyA9IHtcbiAgZmllbGRzOiBQVC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25TdWJtaXQ6IFBULmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5BZHZhbmNlZEZpbHRlcnMuZGVmYXVsdFByb3BzID0ge1xuICBvblN1Ym1pdDogY29uc29sZS5sb2dcbn1cblxuQWR2YW5jZWRGaWx0ZXJzLmRpc3BsYXlOYW1lID0gQWR2YW5jZWRGaWx0ZXJzXG5cbmV4cG9ydCBkZWZhdWx0IEFkdmFuY2VkRmlsdGVyc1xuXG5leHBvcnQgY29uc3QgRmlsdGVyVHlwZXMgPSB7XG4gIFNFTEVDVDogJ3NlbGVjdCcsXG4gIFRFWFQ6ICd0ZXh0J1xufVxuIl0sIm5hbWVzIjpbImJ5dGVzVG9VdWlkIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZ2V0Rm9ybUZpZWxkcyIsInByb3BzIiwiQ29tcG9uZW50IiwiRmlsdGVyc0Zvcm1Db21wb25lbnQiLCJpbnB1dFByb3BzIiwibmFtZSIsIkFkdmFuY2VkRmlsdGVycyIsIndpdGhUaGVtZSIsInVzZVN0YXRlIiwiYWN0aXZlRmlsdGVycyIsInNldEFjdGl2ZUZpbHRlcnMiLCJhZGRBY3RpdmVGaWx0ZXIiLCJmaWx0ZXIiLCJjb25jYXQiLCJpZCIsInV1aWQiLCJyZW1vdmVBY3RpdmVGaWx0ZXIiLCJyZW1vdmFsSWQiLCJuZXdBY3RpdmVGaWx0ZXJzIiwiXyIsInJlbW92ZSIsImZvcm1GaWVsZHMiLCJwaWNrIiwicmVtb3ZlRmlsdGVyIiwiUmVhY3QiLCJvblN1Ym1pdCIsImlzRXF1YWwiLCJsZW5ndGgiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJwcm9wVHlwZXMiLCJmaWVsZHMiLCJQVCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXlOYW1lIiwiRmlsdGVyVHlwZXMiLCJTRUxFQ1QiLCJURVhUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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

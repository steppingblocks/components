import { _ as _slicedToArray, a as _objectSpread, b as _taggedTemplateLiteral } from '../chunk-8ab3b625.js';
import React__default, { useState } from 'react';
import PropTypes__default from 'prop-types';
import crypto from 'crypto';
import '../chunk-5732a1e2.js';
import { w as withTheme, _ } from '../withTheme/index-c61dc960.js';
import styled from 'styled-components';
import '../chunk-69193f69.js';
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
import '../chunk-9ded0b9e.js';
import '../CustomButton/index.js';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsIi4uLy4uL3NyYy9BZHZhbmNlZEZpbHRlcnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIG5vZGUuanNcbi8vIHRoaXMgaXMgcHJldHR5IHN0cmFpZ2h0LWZvcndhcmQgLSB3ZSB1c2UgdGhlIGNyeXB0byBBUEkuXG5cbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub2RlUk5HKCkge1xuICByZXR1cm4gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KTtcbn07XG4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3Y0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vd2l0aFRoZW1lJ1xuaW1wb3J0IHsgY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9HZW5lcmljRm9ybSdcbmltcG9ydCBGaWx0ZXJzRm9ybUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvRmlsdGVyc0Zvcm1Db21wb25lbnQnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEycHg7XG5gXG5cbi8qKlxuICogR2V0cyBmb3JtIGZpZWxkc1xuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKi9cbmNvbnN0IGdldEZvcm1GaWVsZHMgPSBwcm9wcyA9PiBbXG4gIHtcbiAgICBDb21wb25lbnQ6IEZpbHRlcnNGb3JtQ29tcG9uZW50LFxuICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgIGNvbXBvbmVudFByb3BzOiBwcm9wc1xuICB9XG5dXG5cbi8qKlxuICogQ3JlYXRlIGZvcm0gaW1wbGVtZW50YXRpb25cbiAqL1xuY29uc3QgR2VuZXJpY0ltcGxlbWVudGF0aW9uID0gY3JlYXRlR2VuZXJpY0Zvcm1Db21wb25lbnQoe1xuICBuYW1lOiBgYWR2YW5jZWRfZmlsdGVyc19mb3JtYFxufSlcblxuY29uc3QgQWR2YW5jZWRGaWx0ZXJzID0gd2l0aFRoZW1lKHByb3BzID0+IHtcbiAgY29uc3QgW2FjdGl2ZUZpbHRlcnMsIHNldEFjdGl2ZUZpbHRlcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgZmlsdGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBmaWx0ZXJcbiAgICovXG4gIGNvbnN0IGFkZEFjdGl2ZUZpbHRlciA9IGZpbHRlciA9PlxuICAgIHNldEFjdGl2ZUZpbHRlcnMoXG4gICAgICBhY3RpdmVGaWx0ZXJzLmNvbmNhdCh7XG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIC4uLmZpbHRlclxuICAgICAgfSlcbiAgICApXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgZmlsdGVyXG4gICAqIEBwYXJhbSB7VVVJRH0gcmVtb3ZhbElkXG4gICAqL1xuICBjb25zdCByZW1vdmVBY3RpdmVGaWx0ZXIgPSByZW1vdmFsSWQgPT4ge1xuICAgIGNvbnN0IG5ld0FjdGl2ZUZpbHRlcnMgPSBfLnJlbW92ZShcbiAgICAgIGFjdGl2ZUZpbHRlcnMsXG4gICAgICAoeyBpZCB9KSA9PiBpZCAhPT0gcmVtb3ZhbElkXG4gICAgKVxuICAgIHNldEFjdGl2ZUZpbHRlcnMobmV3QWN0aXZlRmlsdGVycylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHZW5lcmljSW1wbGVtZW50YXRpb25cbiAgICAgICAgZmllbGRzPXtnZXRGb3JtRmllbGRzKHtcbiAgICAgICAgICAuLi5fLnBpY2socHJvcHMsIFsnZmllbGRzJywgJ29uQ2hhbmdlJywgJ3ZhbHVlJ10pLFxuICAgICAgICAgIGFjdGl2ZUZpbHRlcnMsXG4gICAgICAgICAgYWRkQWN0aXZlRmlsdGVyLFxuICAgICAgICAgIHJlbW92ZUZpbHRlcjogcmVtb3ZlQWN0aXZlRmlsdGVyXG4gICAgICAgIH0pfVxuICAgICAgICBzdWJtaXRCdXR0b25IaWRkZW49e18uaXNFcXVhbChhY3RpdmVGaWx0ZXJzLmxlbmd0aCwgMCl9XG4gICAgICAgIHN1Ym1pdEJ1dHRvbkNvbnRlbnQ9XCJBcHBseVwiXG4gICAgICAgIHN1Ym1pdEJ1dHRvblByb3BzPXt7IG1sOiAnOHB4JyB9fVxuICAgICAgICBvblN1Ym1pdD17cHJvcHMub25TdWJtaXR9XG4gICAgICAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59KVxuXG5BZHZhbmNlZEZpbHRlcnMucHJvcFR5cGVzID0ge1xuICBmaWVsZHM6IFBULm9iamVjdC5pc1JlcXVpcmVkLFxuICBvblN1Ym1pdDogUFQuZnVuYy5pc1JlcXVpcmVkXG59XG5cbkFkdmFuY2VkRmlsdGVycy5kZWZhdWx0UHJvcHMgPSB7fVxuXG5BZHZhbmNlZEZpbHRlcnMuZGlzcGxheU5hbWUgPSBBZHZhbmNlZEZpbHRlcnNcblxuZXhwb3J0IGRlZmF1bHQgQWR2YW5jZWRGaWx0ZXJzXG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJUeXBlcyA9IHtcbiAgU0VMRUNUOiAnc2VsZWN0JyxcbiAgVEVYVDogJ3RleHQnXG59XG4iXSwibmFtZXMiOlsiYnl0ZXNUb1V1aWQiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJnZXRGb3JtRmllbGRzIiwicHJvcHMiLCJDb21wb25lbnQiLCJGaWx0ZXJzRm9ybUNvbXBvbmVudCIsIm5hbWUiLCJjb21wb25lbnRQcm9wcyIsIkdlbmVyaWNJbXBsZW1lbnRhdGlvbiIsImNyZWF0ZUdlbmVyaWNGb3JtQ29tcG9uZW50IiwiQWR2YW5jZWRGaWx0ZXJzIiwid2l0aFRoZW1lIiwidXNlU3RhdGUiLCJhY3RpdmVGaWx0ZXJzIiwic2V0QWN0aXZlRmlsdGVycyIsImFkZEFjdGl2ZUZpbHRlciIsImZpbHRlciIsImNvbmNhdCIsImlkIiwidXVpZCIsInJlbW92ZUFjdGl2ZUZpbHRlciIsInJlbW92YWxJZCIsIm5ld0FjdGl2ZUZpbHRlcnMiLCJfIiwicmVtb3ZlIiwiUmVhY3QiLCJwaWNrIiwicmVtb3ZlRmlsdGVyIiwiaXNFcXVhbCIsImxlbmd0aCIsIm1sIiwib25TdWJtaXQiLCJwcm9wVHlwZXMiLCJmaWVsZHMiLCJQVCIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiLCJGaWx0ZXJUeXBlcyIsIlNFTEVDVCIsIlRFWFQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQSxPQUFjLEdBQUcsU0FBUyxPQUFPLEdBQUc7RUFDbEMsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQy9CLENBQUM7O0FDUEY7Ozs7QUFJQSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtFQUM1QixTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbkQ7O0FBRUQsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRTtFQUNoQyxJQUFJLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxDQUFDO0VBQ3BCLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQzs7RUFFcEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUc7Q0FDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRztDQUNqQyxH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

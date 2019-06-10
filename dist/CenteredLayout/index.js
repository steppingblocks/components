import '../chunk-d8a06a3d.js';
import '../chunk-0778d5d4.js';
import '../chunk-13e84b1f.js';
import '../chunk-eda5d4be.js';
import { a as _Row } from '../chunk-8cb5051e.js';
import React__default from 'react';
import PropTypes from 'prop-types';
import '../chunk-6e44f481.js';
import { _ as _Col } from '../chunk-c5c38094.js';
import '../chunk-cac7487f.js';
import { g as get } from '../chunk-fbb69a11.js';
import '@xstyled/styled-components';
import { withTheme } from '../withTheme/index.js';

var AlignPT = PropTypes.oneOf(['top', 'middle', 'bottom']);
var JustifyPT = PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between']);
var SpacingPT = PropTypes.shape({
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
});
var RowPT = PropTypes.shape({
  align: AlignPT,
  gutter: SpacingPT,
  justify: JustifyPT,
  type: PropTypes.string
});

var SCol = withTheme(_Col);
var SRow = withTheme(_Row);

var CenteredLayout = function CenteredLayout(props) {
  return React__default.createElement(SRow, babelHelpers["extends"]({
    type: "flex",
    align: "middle",
    justify: "center",
    gutter: 16
  }, get(props, 'rowProps')), React__default.createElement(SCol, babelHelpers["extends"]({}, get(props, 'colProps'), {
    xs: {
      span: 20
    },
    md: {
      span: 10
    }
  }), get(props, 'children')));
};

CenteredLayout.propTypes = {
  colProps: PropTypes.object,
  rowProps: RowPT
};

export default CenteredLayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9wdHlwZXMuanMiLCIuLi8uLi9zcmMvQ2VudGVyZWRMYXlvdXQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBUIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IEFsaWduUFQgPSBQVC5vbmVPZihbJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJ10pXG5cbmNvbnN0IEp1c3RpZnlQVCA9IFBULm9uZU9mKFtcbiAgJ3N0YXJ0JyxcbiAgJ2VuZCcsXG4gICdjZW50ZXInLFxuICAnc3BhY2UtYXJvdW5kJyxcbiAgJ3NwYWNlLWJldHdlZW4nXG5dKVxuXG5leHBvcnQgY29uc3QgU3BhY2luZ1BUID0gUFQuc2hhcGUoe1xuICB4czogUFQubnVtYmVyLFxuICBzbTogUFQubnVtYmVyLFxuICBtZDogUFQubnVtYmVyLFxuICBsZzogUFQubnVtYmVyXG59KVxuXG5leHBvcnQgY29uc3QgUm93UFQgPSBQVC5zaGFwZSh7XG4gIGFsaWduOiBBbGlnblBULFxuICBndXR0ZXI6IFNwYWNpbmdQVCxcbiAganVzdGlmeTogSnVzdGlmeVBULFxuICB0eXBlOiBQVC5zdHJpbmdcbn0pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUFQgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCdcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uL3dpdGhUaGVtZSdcbmltcG9ydCB7IFJvd1BUIH0gZnJvbSAnLi4vcHJvcHR5cGVzJ1xuXG5jb25zdCBTQ29sID0gd2l0aFRoZW1lKENvbClcbmNvbnN0IFNSb3cgPSB3aXRoVGhlbWUoUm93KVxuXG5jb25zdCBDZW50ZXJlZExheW91dCA9IHByb3BzID0+IChcbiAgPFNSb3dcbiAgICB0eXBlPVwiZmxleFwiXG4gICAgYWxpZ249XCJtaWRkbGVcIlxuICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgIGd1dHRlcj17MTZ9XG4gICAgey4uLmdldChwcm9wcywgJ3Jvd1Byb3BzJyl9XG4gID5cbiAgICA8U0NvbCB7Li4uZ2V0KHByb3BzLCAnY29sUHJvcHMnKX0geHM9e3sgc3BhbjogMjAgfX0gbWQ9e3sgc3BhbjogMTAgfX0+XG4gICAgICB7Z2V0KHByb3BzLCAnY2hpbGRyZW4nKX1cbiAgICA8L1NDb2w+XG4gIDwvU1Jvdz5cbilcblxuQ2VudGVyZWRMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjb2xQcm9wczogUFQub2JqZWN0LFxuICByb3dQcm9wczogUm93UFRcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2VudGVyZWRMYXlvdXRcbiJdLCJuYW1lcyI6WyJBbGlnblBUIiwiUFQiLCJvbmVPZiIsIkp1c3RpZnlQVCIsIlNwYWNpbmdQVCIsInNoYXBlIiwieHMiLCJudW1iZXIiLCJzbSIsIm1kIiwibGciLCJSb3dQVCIsImFsaWduIiwiZ3V0dGVyIiwianVzdGlmeSIsInR5cGUiLCJzdHJpbmciLCJTQ29sIiwid2l0aFRoZW1lIiwiU1JvdyIsIkNlbnRlcmVkTGF5b3V0IiwicHJvcHMiLCJSZWFjdCIsImdldCIsInNwYW4iLCJwcm9wVHlwZXMiLCJjb2xQcm9wcyIsIm9iamVjdCIsInJvd1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsU0FBRSxDQUFDQyxLQUFILENBQVMsQ0FBQyxLQUFELEVBQVEsUUFBUixFQUFrQixRQUFsQixDQUFULENBQWhCO0FBRUEsSUFBTUMsU0FBUyxHQUFHRixTQUFFLENBQUNDLEtBQUgsQ0FBUyxDQUN6QixPQUR5QixFQUV6QixLQUZ5QixFQUd6QixRQUh5QixFQUl6QixjQUp5QixFQUt6QixlQUx5QixDQUFULENBQWxCO0FBUUEsQUFBTyxJQUFNRSxTQUFTLEdBQUdILFNBQUUsQ0FBQ0ksS0FBSCxDQUFTO0VBQ2hDQyxFQUFFLEVBQUVMLFNBQUUsQ0FBQ00sTUFEeUI7RUFFaENDLEVBQUUsRUFBRVAsU0FBRSxDQUFDTSxNQUZ5QjtFQUdoQ0UsRUFBRSxFQUFFUixTQUFFLENBQUNNLE1BSHlCO0VBSWhDRyxFQUFFLEVBQUVULFNBQUUsQ0FBQ007Q0FKZ0IsQ0FBbEI7QUFPUCxBQUFPLElBQU1JLEtBQUssR0FBR1YsU0FBRSxDQUFDSSxLQUFILENBQVM7RUFDNUJPLEtBQUssRUFBRVosT0FEcUI7RUFFNUJhLE1BQU0sRUFBRVQsU0FGb0I7RUFHNUJVLE9BQU8sRUFBRVgsU0FIbUI7RUFJNUJZLElBQUksRUFBRWQsU0FBRSxDQUFDZTtDQUpVLENBQWQ7O0FDWlAsSUFBTUMsSUFBSSxHQUFHQyxTQUFTLE1BQXRCO0FBQ0EsSUFBTUMsSUFBSSxHQUFHRCxTQUFTLE1BQXRCOztBQUVBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsS0FBSztTQUMxQkMsNkJBQUMsSUFBRDtJQUNFLElBQUksRUFBQyxNQURQO0lBRUUsS0FBSyxFQUFDLFFBRlI7SUFHRSxPQUFPLEVBQUMsUUFIVjtJQUlFLE1BQU0sRUFBRTtLQUNKQyxHQUFHLENBQUNGLEtBQUQsRUFBUSxVQUFSLENBTFQsR0FPRUMsNkJBQUMsSUFBRCw4QkFBVUMsR0FBRyxDQUFDRixLQUFELEVBQVEsVUFBUixDQUFiO0lBQWtDLEVBQUUsRUFBRTtNQUFFRyxJQUFJLEVBQUU7S0FBOUM7SUFBb0QsRUFBRSxFQUFFO01BQUVBLElBQUksRUFBRTs7TUFDN0RELEdBQUcsQ0FBQ0YsS0FBRCxFQUFRLFVBQVIsQ0FETixDQVBGLENBRDBCO0NBQTVCOztBQWNBRCxjQUFjLENBQUNLLFNBQWYsR0FBMkI7RUFDekJDLFFBQVEsRUFBRXpCLFNBQUUsQ0FBQzBCLE1BRFk7RUFFekJDLFFBQVEsRUFBRWpCO0NBRlo7Ozs7In0=

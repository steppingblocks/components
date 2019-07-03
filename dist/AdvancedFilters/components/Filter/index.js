import { a as _slicedToArray, _ as _taggedTemplateLiteral } from '../../../chunk-22f808cd.js';
import require$$1, { Component, useState } from 'react';
import PropTypes__default from 'prop-types';
import { b as get } from '../../../chunk-cf17f13e.js';
import '../../../chunk-9cccbe49.js';
import { c as createCommonjsModule, u as unwrapExports } from '../../../chunk-02ddfd93.js';
import '../../../chunk-1f7082a0.js';
import { T as TextFilterContent, S as SelectFilterContent } from './components/FilterContent/index-4f52bbba.js';
import '../../../chunk-02ebdfb2.js';
import styled from '@xstyled/styled-components';
import { withTheme } from '../../../withTheme/index.js';
import { r as require$$2, _ as _configProvider } from '../../../chunk-dbd356d3.js';
import { _ as _reactLifecyclesCompat } from '../../../chunk-ee2530d1.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as _objectWithoutProperties, c as _extends, r as require$$6 } from '../../../chunk-f94271b9.js';
import 'react-dom';
import '../../../chunk-3c626a6d.js';
import '../../../chunk-886bee81.js';
import { T as Trigger } from '../../../chunk-36b74ddf.js';
import { _ as _Button } from '../../../chunk-f200bc50.js';
import '../../../chunk-a58638a0.js';
import '../../../chunk-8820e6e0.js';
import '../../../chunk-3a7de8d6.js';
import { _ as _fp } from '../../../chunk-ec006b04.js';
import '../../../chunk-482f4ef0.js';
import CustomButton from '../../../CustomButton/index.js';
import '../../../chunk-6caba0ca.js';
import '../../../chunk-e7fb5cb2.js';
import '../../../chunk-d1cdd45e.js';
import '../../../chunk-d79569b3.js';
import '../../../chunk-28791981.js';
import '../../../SingleLineTextInput/index.js';
import '../../../chunk-84525609.js';
import '../../../chunk-51ca1b6a.js';
import '../../../chunk-5e1f7e4a.js';
import '../../../chunk-7ea0ebc0.js';

var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

var Content = function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Content.prototype.componentDidUpdate = function componentDidUpdate() {
    var trigger = this.props.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  };

  Content.prototype.render = function render() {
    var _props = this.props,
        overlay = _props.overlay,
        prefixCls = _props.prefixCls,
        id = _props.id;

    return require$$1.createElement(
      'div',
      { className: prefixCls + '-inner', id: id, role: 'tooltip' },
      typeof overlay === 'function' ? overlay() : overlay
    );
  };

  return Content;
}(require$$1.Component);

Content.propTypes = {
  prefixCls: PropTypes__default.string,
  overlay: PropTypes__default.oneOfType([PropTypes__default.node, PropTypes__default.func]).isRequired,
  id: PropTypes__default.string,
  trigger: PropTypes__default.any
};

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;

      return [require$$1.createElement(
        'div',
        { className: prefixCls + '-arrow', key: 'arrow' },
        arrowContent
      ), require$$1.createElement(Content, {
        key: 'content',
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = _objectWithoutProperties(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = _extends({}, restProps);
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return require$$1.createElement(
      Trigger,
      _extends({
        popupClassName: overlayClassName,
        ref: this.saveTrigger,
        prefixCls: prefixCls,
        popup: this.getPopupElement,
        action: trigger,
        builtinPlacements: placements,
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps),
      children
    );
  };

  return Tooltip;
}(Component);

Tooltip.propTypes = {
  trigger: PropTypes__default.any,
  children: PropTypes__default.any,
  defaultVisible: PropTypes__default.bool,
  visible: PropTypes__default.bool,
  placement: PropTypes__default.string,
  transitionName: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.object]),
  animation: PropTypes__default.any,
  onVisibleChange: PropTypes__default.func,
  afterVisibleChange: PropTypes__default.func,
  overlay: PropTypes__default.oneOfType([PropTypes__default.node, PropTypes__default.func]).isRequired,
  overlayStyle: PropTypes__default.object,
  overlayClassName: PropTypes__default.string,
  prefixCls: PropTypes__default.string,
  mouseEnterDelay: PropTypes__default.number,
  mouseLeaveDelay: PropTypes__default.number,
  getTooltipContainer: PropTypes__default.func,
  destroyTooltipOnHide: PropTypes__default.bool,
  align: PropTypes__default.object,
  arrowContent: PropTypes__default.any,
  id: PropTypes__default.string
};
Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};

var placements_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = exports.placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

exports['default'] = placements;
});

unwrapExports(placements_1);
var placements_2 = placements_1.placements;

var placements$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverflowOptions = getOverflowOptions;
exports["default"] = getPlacements;



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset = [0, 0];

function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return _extends({}, autoAdjustOverflowDisabled, autoAdjustOverflow);
}

function getPlacements() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? 5 : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? 12 : _config$verticalArrow,
      _config$autoAdjustOve = config.autoAdjustOverflow,
      autoAdjustOverflow = _config$autoAdjustOve === void 0 ? true : _config$autoAdjustOve;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? _extends({}, placementMap[key], {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: targetOffset
    }) : _extends({}, placements_1.placements[key], {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}
});

unwrapExports(placements$1);
var placements_1$1 = placements$1.getOverflowOptions;

var tooltip = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require$$1);



var _rcTooltip = _interopRequireDefault(Tooltip);

var _classnames = _interopRequireDefault(require$$2);

var _placements = _interopRequireDefault(placements$1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var splitObject = function splitObject(obj, keys) {
  var picked = {};

  var omitted = _extends({}, obj);

  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var Tooltip$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));

    _this.onVisibleChange = function (visible) {
      var onVisibleChange = _this.props.onVisibleChange;

      if (!('visible' in _this.props)) {
        _this.setState({
          visible: _this.isNoTitle() ? false : visible
        });
      }

      if (onVisibleChange && !_this.isNoTitle()) {
        onVisibleChange(visible);
      }
    }; // 动态设置动画点


    _this.onPopupAlign = function (domNode, align) {
      var placements = _this.getPlacements(); // 当前返回的位置


      var placement = Object.keys(placements).filter(function (key) {
        return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
      })[0];

      if (!placement) {
        return;
      } // 根据当前坐标设置动画点


      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: '50%',
        left: '50%'
      };

      if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
        transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
      } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
        transformOrigin.top = "".concat(-align.offset[1], "px");
      }

      if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
        transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
      } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
        transformOrigin.left = "".concat(-align.offset[0], "px");
      }

      domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
    };

    _this.saveTooltip = function (node) {
      _this.tooltip = node;
    };

    _this.renderTooltip = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;

      var _assertThisInitialize = _assertThisInitialized(_this),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      var customizePrefixCls = props.prefixCls,
          title = props.title,
          overlay = props.overlay,
          openClassName = props.openClassName,
          getPopupContainer = props.getPopupContainer,
          getTooltipContainer = props.getTooltipContainer;
      var children = props.children;
      var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
      var visible = state.visible; // Hide tooltip when there is no title

      if (!('visible' in props) && _this.isNoTitle()) {
        visible = false;
      }

      var child = _this.getDisabledCompatibleChildren(React.isValidElement(children) ? children : React.createElement("span", null, children));

      var childProps = child.props;
      var childCls = (0, _classnames["default"])(childProps.className, _defineProperty({}, openClassName || "".concat(prefixCls, "-open"), true));
      return React.createElement(_rcTooltip["default"], _extends({}, _this.props, {
        prefixCls: prefixCls,
        getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
        ref: _this.saveTooltip,
        builtinPlacements: _this.getPlacements(),
        overlay: overlay || title || '',
        visible: visible,
        onVisibleChange: _this.onVisibleChange,
        onPopupAlign: _this.onPopupAlign
      }), visible ? (0, React.cloneElement)(child, {
        className: childCls
      }) : child);
    };

    _this.state = {
      visible: !!props.visible || !!props.defaultVisible
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "getPopupDomNode",
    value: function getPopupDomNode() {
      return this.tooltip.getPopupDomNode();
    }
  }, {
    key: "getPlacements",
    value: function getPlacements() {
      var _this$props = this.props,
          builtinPlacements = _this$props.builtinPlacements,
          arrowPointAtCenter = _this$props.arrowPointAtCenter,
          autoAdjustOverflow = _this$props.autoAdjustOverflow;
      return builtinPlacements || (0, _placements["default"])({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    } // Fix Tooltip won't hide at disabled button
    // mouse events don't trigger at disabled button in Chrome
    // https://github.com/react-component/tooltip/issues/18

  }, {
    key: "getDisabledCompatibleChildren",
    value: function getDisabledCompatibleChildren(element) {
      if ((element.type.__ANT_BUTTON || element.type === 'button') && element.props.disabled) {
        // Pick some layout related style properties up to span
        // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
        var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
            picked = _splitObject.picked,
            omitted = _splitObject.omitted;

        var spanStyle = _extends({
          display: 'inline-block'
        }, picked, {
          cursor: 'not-allowed',
          width: element.props.block ? '100%' : null
        });

        var buttonStyle = _extends({}, omitted, {
          pointerEvents: 'none'
        });

        var child = (0, React.cloneElement)(element, {
          style: buttonStyle,
          className: null
        });
        return React.createElement("span", {
          style: spanStyle,
          className: element.props.className
        }, child);
      }

      return element;
    }
  }, {
    key: "isNoTitle",
    value: function isNoTitle() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          overlay = _this$props2.overlay;
      return !title && !overlay; // overlay for old version compatibility
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderTooltip);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('visible' in nextProps) {
        return {
          visible: nextProps.visible
        };
      }

      return null;
    }
  }]);

  return Tooltip;
}(React.Component);

Tooltip$1.defaultProps = {
  placement: 'top',
  transitionName: 'zoom-big-fast',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
(0, _reactLifecyclesCompat.polyfill)(Tooltip$1);
var _default = Tooltip$1;
exports["default"] = _default;
});

unwrapExports(tooltip);

var popover = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require$$1);

var _tooltip = _interopRequireDefault(tooltip);



var _warning = _interopRequireDefault(require$$6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).apply(this, arguments));

    _this.saveTooltip = function (node) {
      _this.tooltip = node;
    };

    _this.renderPopover = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          props = __rest(_a, ["prefixCls"]);

      delete props.title;
      var prefixCls = getPrefixCls('popover', customizePrefixCls);
      return React.createElement(_tooltip["default"], _extends({}, props, {
        prefixCls: prefixCls,
        ref: _this.saveTooltip,
        overlay: _this.getOverlay(prefixCls)
      }));
    };

    return _this;
  }

  _createClass(Popover, [{
    key: "getPopupDomNode",
    value: function getPopupDomNode() {
      return this.tooltip.getPopupDomNode();
    }
  }, {
    key: "getOverlay",
    value: function getOverlay(prefixCls) {
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content;
      (0, _warning["default"])(!('overlay' in this.props), 'Popover', '`overlay` is removed, please use `content` instead, ' + 'see: https://u.ant.design/popover-content');
      return React.createElement("div", null, title && React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, title), React.createElement("div", {
        className: "".concat(prefixCls, "-inner-content")
      }, content));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderPopover);
    }
  }]);

  return Popover;
}(React.Component);

exports["default"] = Popover;
Popover.defaultProps = {
  placement: 'top',
  transitionName: 'zoom-big',
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  overlayStyle: {}
};
});

var _Popover = unwrapExports(popover);

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 8px 12px 8px 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonGroup = styled(_Button.Group)(_templateObject());
/**
 * Gets the filter
 */

var getFilter = _fp.get('filter');
/**
 * Gets the filter label
 */


var getLabel = _fp.pipe(getFilter, _fp.get('label'));

var getType = _fp.pipe(getFilter, _fp.get('type'));

var PopoverContentMap = {
  text: TextFilterContent,
  select: SelectFilterContent
};
var Filter = withTheme(function (props) {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var label = getLabel(props);
  var type = getType(props);
  var Content = PopoverContentMap[type];
  return require$$1.createElement(ButtonGroup, null, require$$1.createElement(_Popover, {
    title: label,
    trigger: "click",
    visible: visible,
    placement: "bottom",
    content: require$$1.createElement(Content, null),
    onVisibleChange: setVisible
  }, require$$1.createElement(CustomButton, {
    content: label
  })), require$$1.createElement(CustomButton, {
    icon: "close",
    type: "danger",
    onClick: get(props, 'onRemove')
  }));
});
Filter.propTypes = {
  onRemove: PropTypes__default.func.isRequired
};
Filter.defaultProps = {};
Filter.displayName = Filter;

export default Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL3BsYWNlbWVudHMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9lcy9Db250ZW50LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvVG9vbHRpcC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2xpYi9wbGFjZW1lbnRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Rvb2x0aXAvcGxhY2VtZW50cy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90b29sdGlwL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3BvcG92ZXIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi9zcmMvQWR2YW5jZWRGaWx0ZXJzL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG5cbnZhciB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG5cbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IHtcbiAgbGVmdDoge1xuICAgIHBvaW50czogWydjcicsICdjbCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3A6IHtcbiAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b206IHtcbiAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodFRvcDoge1xuICAgIHBvaW50czogWyd0bCcsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsndHInLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VtZW50czsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBDb250ZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbnRlbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRlbnQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDb250ZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIHRyaWdnZXIgPSB0aGlzLnByb3BzLnRyaWdnZXI7XG5cbiAgICBpZiAodHJpZ2dlcikge1xuICAgICAgdHJpZ2dlci5mb3JjZVBvcHVwQWxpZ24oKTtcbiAgICB9XG4gIH07XG5cbiAgQ29udGVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvdmVybGF5ID0gX3Byb3BzLm92ZXJsYXksXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIGlkID0gX3Byb3BzLmlkO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWlubmVyJywgaWQ6IGlkLCByb2xlOiAndG9vbHRpcCcgfSxcbiAgICAgIHR5cGVvZiBvdmVybGF5ID09PSAnZnVuY3Rpb24nID8gb3ZlcmxheSgpIDogb3ZlcmxheVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRlbnQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG92ZXJsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmlnZ2VyOiBQcm9wVHlwZXMuYW55XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29udGVudDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgeyBwbGFjZW1lbnRzIH0gZnJvbSAnLi9wbGFjZW1lbnRzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCc7XG5cbnZhciBUb29sdGlwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRvb2x0aXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvb2x0aXAoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb29sdGlwKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5nZXRQb3B1cEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBhcnJvd0NvbnRlbnQgPSBfdGhpcyRwcm9wcy5hcnJvd0NvbnRlbnQsXG4gICAgICAgICAgb3ZlcmxheSA9IF90aGlzJHByb3BzLm92ZXJsYXksXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGlkID0gX3RoaXMkcHJvcHMuaWQ7XG5cbiAgICAgIHJldHVybiBbUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWFycm93Jywga2V5OiAnYXJyb3cnIH0sXG4gICAgICAgIGFycm93Q29udGVudFxuICAgICAgKSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7XG4gICAgICAgIGtleTogJ2NvbnRlbnQnLFxuICAgICAgICB0cmlnZ2VyOiBfdGhpcy50cmlnZ2VyLFxuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBvdmVybGF5OiBvdmVybGF5XG4gICAgICB9KV07XG4gICAgfSwgX3RoaXMuc2F2ZVRyaWdnZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMudHJpZ2dlciA9IG5vZGU7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRQb3B1cERvbU5vZGUgPSBmdW5jdGlvbiBnZXRQb3B1cERvbU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlci5nZXRQb3B1cERvbU5vZGUoKTtcbiAgfTtcblxuICBUb29sdGlwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG92ZXJsYXlDbGFzc05hbWUgPSBfcHJvcHMub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgICAgdHJpZ2dlciA9IF9wcm9wcy50cmlnZ2VyLFxuICAgICAgICBtb3VzZUVudGVyRGVsYXkgPSBfcHJvcHMubW91c2VFbnRlckRlbGF5LFxuICAgICAgICBtb3VzZUxlYXZlRGVsYXkgPSBfcHJvcHMubW91c2VMZWF2ZURlbGF5LFxuICAgICAgICBvdmVybGF5U3R5bGUgPSBfcHJvcHMub3ZlcmxheVN0eWxlLFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlID0gX3Byb3BzLm9uVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgYWZ0ZXJWaXNpYmxlQ2hhbmdlID0gX3Byb3BzLmFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBfcHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIGFuaW1hdGlvbiA9IF9wcm9wcy5hbmltYXRpb24sXG4gICAgICAgIHBsYWNlbWVudCA9IF9wcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgIGFsaWduID0gX3Byb3BzLmFsaWduLFxuICAgICAgICBkZXN0cm95VG9vbHRpcE9uSGlkZSA9IF9wcm9wcy5kZXN0cm95VG9vbHRpcE9uSGlkZSxcbiAgICAgICAgZGVmYXVsdFZpc2libGUgPSBfcHJvcHMuZGVmYXVsdFZpc2libGUsXG4gICAgICAgIGdldFRvb2x0aXBDb250YWluZXIgPSBfcHJvcHMuZ2V0VG9vbHRpcENvbnRhaW5lcixcbiAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydvdmVybGF5Q2xhc3NOYW1lJywgJ3RyaWdnZXInLCAnbW91c2VFbnRlckRlbGF5JywgJ21vdXNlTGVhdmVEZWxheScsICdvdmVybGF5U3R5bGUnLCAncHJlZml4Q2xzJywgJ2NoaWxkcmVuJywgJ29uVmlzaWJsZUNoYW5nZScsICdhZnRlclZpc2libGVDaGFuZ2UnLCAndHJhbnNpdGlvbk5hbWUnLCAnYW5pbWF0aW9uJywgJ3BsYWNlbWVudCcsICdhbGlnbicsICdkZXN0cm95VG9vbHRpcE9uSGlkZScsICdkZWZhdWx0VmlzaWJsZScsICdnZXRUb29sdGlwQ29udGFpbmVyJ10pO1xuXG4gICAgdmFyIGV4dHJhUHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzKTtcbiAgICBpZiAoJ3Zpc2libGUnIGluIHRoaXMucHJvcHMpIHtcbiAgICAgIGV4dHJhUHJvcHMucG9wdXBWaXNpYmxlID0gdGhpcy5wcm9wcy52aXNpYmxlO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRyaWdnZXIsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lOiBvdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgICByZWY6IHRoaXMuc2F2ZVRyaWdnZXIsXG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBwb3B1cDogdGhpcy5nZXRQb3B1cEVsZW1lbnQsXG4gICAgICAgIGFjdGlvbjogdHJpZ2dlcixcbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHM6IHBsYWNlbWVudHMsXG4gICAgICAgIHBvcHVwUGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIHBvcHVwQWxpZ246IGFsaWduLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0VG9vbHRpcENvbnRhaW5lcixcbiAgICAgICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IG9uVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2U6IGFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIHBvcHVwQW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgICAgIGRlZmF1bHRQb3B1cFZpc2libGU6IGRlZmF1bHRWaXNpYmxlLFxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGRlc3Ryb3lUb29sdGlwT25IaWRlLFxuICAgICAgICBtb3VzZUxlYXZlRGVsYXk6IG1vdXNlTGVhdmVEZWxheSxcbiAgICAgICAgcG9wdXBTdHlsZTogb3ZlcmxheVN0eWxlLFxuICAgICAgICBtb3VzZUVudGVyRGVsYXk6IG1vdXNlRW50ZXJEZWxheVxuICAgICAgfSwgZXh0cmFQcm9wcyksXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFRvb2x0aXA7XG59KENvbXBvbmVudCk7XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICB0cmlnZ2VyOiBQcm9wVHlwZXMuYW55LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBhbmltYXRpb246IFByb3BUeXBlcy5hbnksXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFmdGVyVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG92ZXJsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG4gIG92ZXJsYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgb3ZlcmxheUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtb3VzZUVudGVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1vdXNlTGVhdmVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgZ2V0VG9vbHRpcENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlc3Ryb3lUb29sdGlwT25IaWRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgYWxpZ246IFByb3BUeXBlcy5vYmplY3QsXG4gIGFycm93Q29udGVudDogUHJvcFR5cGVzLmFueSxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJlZml4Q2xzOiAncmMtdG9vbHRpcCcsXG4gIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgZGVzdHJveVRvb2x0aXBPbkhpZGU6IGZhbHNlLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgYWxpZ246IHt9LFxuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIHRyaWdnZXI6IFsnaG92ZXInXSxcbiAgYXJyb3dDb250ZW50OiBudWxsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcblxudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcblxudmFyIHBsYWNlbWVudHMgPSBleHBvcnRzLnBsYWNlbWVudHMgPSB7XG4gIGxlZnQ6IHtcbiAgICBwb2ludHM6IFsnY3InLCAnY2wnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodDoge1xuICAgIHBvaW50czogWydjbCcsICdjciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wOiB7XG4gICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdFRvcDoge1xuICAgIHBvaW50czogWyd0cicsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcFJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodEJvdHRvbToge1xuICAgIHBvaW50czogWydibCcsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdEJvdHRvbToge1xuICAgIHBvaW50czogWydicicsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHBsYWNlbWVudHM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldE92ZXJmbG93T3B0aW9ucyA9IGdldE92ZXJmbG93T3B0aW9ucztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0UGxhY2VtZW50cztcblxudmFyIF9wbGFjZW1lbnRzID0gcmVxdWlyZShcInJjLXRvb2x0aXAvbGliL3BsYWNlbWVudHNcIik7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBhdXRvQWRqdXN0T3ZlcmZsb3dFbmFibGVkID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxXG59O1xudmFyIGF1dG9BZGp1c3RPdmVyZmxvd0Rpc2FibGVkID0ge1xuICBhZGp1c3RYOiAwLFxuICBhZGp1c3RZOiAwXG59O1xudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcblxuZnVuY3Rpb24gZ2V0T3ZlcmZsb3dPcHRpb25zKGF1dG9BZGp1c3RPdmVyZmxvdykge1xuICBpZiAodHlwZW9mIGF1dG9BZGp1c3RPdmVyZmxvdyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGF1dG9BZGp1c3RPdmVyZmxvdyA/IGF1dG9BZGp1c3RPdmVyZmxvd0VuYWJsZWQgOiBhdXRvQWRqdXN0T3ZlcmZsb3dEaXNhYmxlZDtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYXV0b0FkanVzdE92ZXJmbG93RGlzYWJsZWQsIGF1dG9BZGp1c3RPdmVyZmxvdyk7XG59XG5cbmZ1bmN0aW9uIGdldFBsYWNlbWVudHMoKSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX2NvbmZpZyRhcnJvd1dpZHRoID0gY29uZmlnLmFycm93V2lkdGgsXG4gICAgICBhcnJvd1dpZHRoID0gX2NvbmZpZyRhcnJvd1dpZHRoID09PSB2b2lkIDAgPyA1IDogX2NvbmZpZyRhcnJvd1dpZHRoLFxuICAgICAgX2NvbmZpZyRob3Jpem9udGFsQXJyID0gY29uZmlnLmhvcml6b250YWxBcnJvd1NoaWZ0LFxuICAgICAgaG9yaXpvbnRhbEFycm93U2hpZnQgPSBfY29uZmlnJGhvcml6b250YWxBcnIgPT09IHZvaWQgMCA/IDE2IDogX2NvbmZpZyRob3Jpem9udGFsQXJyLFxuICAgICAgX2NvbmZpZyR2ZXJ0aWNhbEFycm93ID0gY29uZmlnLnZlcnRpY2FsQXJyb3dTaGlmdCxcbiAgICAgIHZlcnRpY2FsQXJyb3dTaGlmdCA9IF9jb25maWckdmVydGljYWxBcnJvdyA9PT0gdm9pZCAwID8gMTIgOiBfY29uZmlnJHZlcnRpY2FsQXJyb3csXG4gICAgICBfY29uZmlnJGF1dG9BZGp1c3RPdmUgPSBjb25maWcuYXV0b0FkanVzdE92ZXJmbG93LFxuICAgICAgYXV0b0FkanVzdE92ZXJmbG93ID0gX2NvbmZpZyRhdXRvQWRqdXN0T3ZlID09PSB2b2lkIDAgPyB0cnVlIDogX2NvbmZpZyRhdXRvQWRqdXN0T3ZlO1xuICB2YXIgcGxhY2VtZW50TWFwID0ge1xuICAgIGxlZnQ6IHtcbiAgICAgIHBvaW50czogWydjcicsICdjbCddLFxuICAgICAgb2Zmc2V0OiBbLTQsIDBdXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gICAgICBvZmZzZXQ6IFs0LCAwXVxuICAgIH0sXG4gICAgdG9wOiB7XG4gICAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICAgIG9mZnNldDogWzAsIC00XVxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICAgIG9mZnNldDogWzAsIDRdXG4gICAgfSxcbiAgICB0b3BMZWZ0OiB7XG4gICAgICBwb2ludHM6IFsnYmwnLCAndGMnXSxcbiAgICAgIG9mZnNldDogWy0oaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKSwgLTRdXG4gICAgfSxcbiAgICBsZWZ0VG9wOiB7XG4gICAgICBwb2ludHM6IFsndHInLCAnY2wnXSxcbiAgICAgIG9mZnNldDogWy00LCAtKHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpXVxuICAgIH0sXG4gICAgdG9wUmlnaHQ6IHtcbiAgICAgIHBvaW50czogWydicicsICd0YyddLFxuICAgICAgb2Zmc2V0OiBbaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoLCAtNF1cbiAgICB9LFxuICAgIHJpZ2h0VG9wOiB7XG4gICAgICBwb2ludHM6IFsndGwnLCAnY3InXSxcbiAgICAgIG9mZnNldDogWzQsIC0odmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCldXG4gICAgfSxcbiAgICBib3R0b21SaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ3RyJywgJ2JjJ10sXG4gICAgICBvZmZzZXQ6IFtob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgsIDRdXG4gICAgfSxcbiAgICByaWdodEJvdHRvbToge1xuICAgICAgcG9pbnRzOiBbJ2JsJywgJ2NyJ10sXG4gICAgICBvZmZzZXQ6IFs0LCB2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoXVxuICAgIH0sXG4gICAgYm90dG9tTGVmdDoge1xuICAgICAgcG9pbnRzOiBbJ3RsJywgJ2JjJ10sXG4gICAgICBvZmZzZXQ6IFstKGhvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCksIDRdXG4gICAgfSxcbiAgICBsZWZ0Qm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsnYnInLCAnY2wnXSxcbiAgICAgIG9mZnNldDogWy00LCB2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoXVxuICAgIH1cbiAgfTtcbiAgT2JqZWN0LmtleXMocGxhY2VtZW50TWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBwbGFjZW1lbnRNYXBba2V5XSA9IGNvbmZpZy5hcnJvd1BvaW50QXRDZW50ZXIgPyBfZXh0ZW5kcyh7fSwgcGxhY2VtZW50TWFwW2tleV0sIHtcbiAgICAgIG92ZXJmbG93OiBnZXRPdmVyZmxvd09wdGlvbnMoYXV0b0FkanVzdE92ZXJmbG93KSxcbiAgICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gICAgfSkgOiBfZXh0ZW5kcyh7fSwgX3BsYWNlbWVudHMucGxhY2VtZW50c1trZXldLCB7XG4gICAgICBvdmVyZmxvdzogZ2V0T3ZlcmZsb3dPcHRpb25zKGF1dG9BZGp1c3RPdmVyZmxvdylcbiAgICB9KTtcbiAgICBwbGFjZW1lbnRNYXBba2V5XS5pZ25vcmVTaGFrZSA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcGxhY2VtZW50TWFwO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG52YXIgX3JjVG9vbHRpcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXRvb2x0aXBcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9wbGFjZW1lbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wbGFjZW1lbnRzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBzcGxpdE9iamVjdCA9IGZ1bmN0aW9uIHNwbGl0T2JqZWN0KG9iaiwga2V5cykge1xuICB2YXIgcGlja2VkID0ge307XG5cbiAgdmFyIG9taXR0ZWQgPSBfZXh0ZW5kcyh7fSwgb2JqKTtcblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChvYmogJiYga2V5IGluIG9iaikge1xuICAgICAgcGlja2VkW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIGRlbGV0ZSBvbWl0dGVkW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwaWNrZWQ6IHBpY2tlZCxcbiAgICBvbWl0dGVkOiBvbWl0dGVkXG4gIH07XG59O1xuXG52YXIgVG9vbHRpcCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVG9vbHRpcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVG9vbHRpcChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb29sdGlwKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFRvb2x0aXApLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLm9uVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uICh2aXNpYmxlKSB7XG4gICAgICB2YXIgb25WaXNpYmxlQ2hhbmdlID0gX3RoaXMucHJvcHMub25WaXNpYmxlQ2hhbmdlO1xuXG4gICAgICBpZiAoISgndmlzaWJsZScgaW4gX3RoaXMucHJvcHMpKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2aXNpYmxlOiBfdGhpcy5pc05vVGl0bGUoKSA/IGZhbHNlIDogdmlzaWJsZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSAmJiAhX3RoaXMuaXNOb1RpdGxlKCkpIHtcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlKHZpc2libGUpO1xuICAgICAgfVxuICAgIH07IC8vIOWKqOaAgeiuvue9ruWKqOeUu+eCuVxuXG5cbiAgICBfdGhpcy5vblBvcHVwQWxpZ24gPSBmdW5jdGlvbiAoZG9tTm9kZSwgYWxpZ24pIHtcbiAgICAgIHZhciBwbGFjZW1lbnRzID0gX3RoaXMuZ2V0UGxhY2VtZW50cygpOyAvLyDlvZPliY3ov5Tlm57nmoTkvY3nva5cblxuXG4gICAgICB2YXIgcGxhY2VtZW50ID0gT2JqZWN0LmtleXMocGxhY2VtZW50cykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudHNba2V5XS5wb2ludHNbMF0gPT09IGFsaWduLnBvaW50c1swXSAmJiBwbGFjZW1lbnRzW2tleV0ucG9pbnRzWzFdID09PSBhbGlnbi5wb2ludHNbMV07XG4gICAgICB9KVswXTtcblxuICAgICAgaWYgKCFwbGFjZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyDmoLnmja7lvZPliY3lnZDmoIforr7nva7liqjnlLvngrlcblxuXG4gICAgICB2YXIgcmVjdCA9IGRvbU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgdHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICBsZWZ0OiAnNTAlJ1xuICAgICAgfTtcblxuICAgICAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdCb3R0b20nKSA+PSAwKSB7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbi50b3AgPSBcIlwiLmNvbmNhdChyZWN0LmhlaWdodCAtIGFsaWduLm9mZnNldFsxXSwgXCJweFwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoJ1RvcCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ2JvdHRvbScpID49IDApIHtcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnRvcCA9IFwiXCIuY29uY2F0KC1hbGlnbi5vZmZzZXRbMV0sIFwicHhcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZignbGVmdCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ1JpZ2h0JykgPj0gMCkge1xuICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ubGVmdCA9IFwiXCIuY29uY2F0KHJlY3Qud2lkdGggLSBhbGlnbi5vZmZzZXRbMF0sIFwicHhcIik7XG4gICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdyaWdodCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ0xlZnQnKSA+PSAwKSB7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbi5sZWZ0ID0gXCJcIi5jb25jYXQoLWFsaWduLm9mZnNldFswXSwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgZG9tTm9kZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIlwiLmNvbmNhdCh0cmFuc2Zvcm1PcmlnaW4ubGVmdCwgXCIgXCIpLmNvbmNhdCh0cmFuc2Zvcm1PcmlnaW4udG9wKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2F2ZVRvb2x0aXAgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMudG9vbHRpcCA9IG5vZGU7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlclRvb2x0aXAgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGdldENvbnRleHRQb3B1cENvbnRhaW5lciA9IF9yZWYuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG5cbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5wcm9wcyxcbiAgICAgICAgICBzdGF0ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5zdGF0ZTtcblxuICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgICAgICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgICAgICAgIG9wZW5DbGFzc05hbWUgPSBwcm9wcy5vcGVuQ2xhc3NOYW1lLFxuICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgZ2V0VG9vbHRpcENvbnRhaW5lciA9IHByb3BzLmdldFRvb2x0aXBDb250YWluZXI7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3Rvb2x0aXAnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIHZpc2libGUgPSBzdGF0ZS52aXNpYmxlOyAvLyBIaWRlIHRvb2x0aXAgd2hlbiB0aGVyZSBpcyBubyB0aXRsZVxuXG4gICAgICBpZiAoISgndmlzaWJsZScgaW4gcHJvcHMpICYmIF90aGlzLmlzTm9UaXRsZSgpKSB7XG4gICAgICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkID0gX3RoaXMuZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW4oUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjaGlsZHJlbikpO1xuXG4gICAgICB2YXIgY2hpbGRQcm9wcyA9IGNoaWxkLnByb3BzO1xuICAgICAgdmFyIGNoaWxkQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2hpbGRQcm9wcy5jbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgb3BlbkNsYXNzTmFtZSB8fCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9wZW5cIiksIHRydWUpKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9yY1Rvb2x0aXBbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMsIHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGdldFRvb2x0aXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyIHx8IGdldFRvb2x0aXBDb250YWluZXIgfHwgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyLFxuICAgICAgICByZWY6IF90aGlzLnNhdmVUb29sdGlwLFxuICAgICAgICBidWlsdGluUGxhY2VtZW50czogX3RoaXMuZ2V0UGxhY2VtZW50cygpLFxuICAgICAgICBvdmVybGF5OiBvdmVybGF5IHx8IHRpdGxlIHx8ICcnLFxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICBvblZpc2libGVDaGFuZ2U6IF90aGlzLm9uVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgb25Qb3B1cEFsaWduOiBfdGhpcy5vblBvcHVwQWxpZ25cbiAgICAgIH0pLCB2aXNpYmxlID8gKDAsIFJlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjaGlsZENsc1xuICAgICAgfSkgOiBjaGlsZCk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZTogISFwcm9wcy52aXNpYmxlIHx8ICEhcHJvcHMuZGVmYXVsdFZpc2libGVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUb29sdGlwLCBbe1xuICAgIGtleTogXCJnZXRQb3B1cERvbU5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9vbHRpcC5nZXRQb3B1cERvbU5vZGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGxhY2VtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQbGFjZW1lbnRzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IF90aGlzJHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgICAgIGFycm93UG9pbnRBdENlbnRlciA9IF90aGlzJHByb3BzLmFycm93UG9pbnRBdENlbnRlcixcbiAgICAgICAgICBhdXRvQWRqdXN0T3ZlcmZsb3cgPSBfdGhpcyRwcm9wcy5hdXRvQWRqdXN0T3ZlcmZsb3c7XG4gICAgICByZXR1cm4gYnVpbHRpblBsYWNlbWVudHMgfHwgKDAsIF9wbGFjZW1lbnRzW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgICBhcnJvd1BvaW50QXRDZW50ZXI6IGFycm93UG9pbnRBdENlbnRlcixcbiAgICAgICAgdmVydGljYWxBcnJvd1NoaWZ0OiA4LFxuICAgICAgICBhdXRvQWRqdXN0T3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvd1xuICAgICAgfSk7XG4gICAgfSAvLyBGaXggVG9vbHRpcCB3b24ndCBoaWRlIGF0IGRpc2FibGVkIGJ1dHRvblxuICAgIC8vIG1vdXNlIGV2ZW50cyBkb24ndCB0cmlnZ2VyIGF0IGRpc2FibGVkIGJ1dHRvbiBpbiBDaHJvbWVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3Rvb2x0aXAvaXNzdWVzLzE4XG5cbiAgfSwge1xuICAgIGtleTogXCJnZXREaXNhYmxlZENvbXBhdGlibGVDaGlsZHJlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREaXNhYmxlZENvbXBhdGlibGVDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgICBpZiAoKGVsZW1lbnQudHlwZS5fX0FOVF9CVVRUT04gfHwgZWxlbWVudC50eXBlID09PSAnYnV0dG9uJykgJiYgZWxlbWVudC5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyBQaWNrIHNvbWUgbGF5b3V0IHJlbGF0ZWQgc3R5bGUgcHJvcGVydGllcyB1cCB0byBzcGFuXG4gICAgICAgIC8vIFByZXZlbnQgbGF5b3V0IGJ1Z3MgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81MjU0XG4gICAgICAgIHZhciBfc3BsaXRPYmplY3QgPSBzcGxpdE9iamVjdChlbGVtZW50LnByb3BzLnN0eWxlLCBbJ3Bvc2l0aW9uJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbScsICdmbG9hdCcsICdkaXNwbGF5JywgJ3pJbmRleCddKSxcbiAgICAgICAgICAgIHBpY2tlZCA9IF9zcGxpdE9iamVjdC5waWNrZWQsXG4gICAgICAgICAgICBvbWl0dGVkID0gX3NwbGl0T2JqZWN0Lm9taXR0ZWQ7XG5cbiAgICAgICAgdmFyIHNwYW5TdHlsZSA9IF9leHRlbmRzKHtcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICB9LCBwaWNrZWQsIHtcbiAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgICAgd2lkdGg6IGVsZW1lbnQucHJvcHMuYmxvY2sgPyAnMTAwJScgOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBidXR0b25TdHlsZSA9IF9leHRlbmRzKHt9LCBvbWl0dGVkLCB7XG4gICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjaGlsZCA9ICgwLCBSZWFjdC5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgICAgICBzdHlsZTogYnV0dG9uU3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIHN0eWxlOiBzcGFuU3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBlbGVtZW50LnByb3BzLmNsYXNzTmFtZVxuICAgICAgICB9LCBjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc05vVGl0bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNOb1RpdGxlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdGl0bGUgPSBfdGhpcyRwcm9wczIudGl0bGUsXG4gICAgICAgICAgb3ZlcmxheSA9IF90aGlzJHByb3BzMi5vdmVybGF5O1xuICAgICAgcmV0dXJuICF0aXRsZSAmJiAhb3ZlcmxheTsgLy8gb3ZlcmxheSBmb3Igb2xkIHZlcnNpb24gY29tcGF0aWJpbGl0eVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclRvb2x0aXApO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoJ3Zpc2libGUnIGluIG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZpc2libGU6IG5leHRQcm9wcy52aXNpYmxlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUb29sdGlwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgdHJhbnNpdGlvbk5hbWU6ICd6b29tLWJpZy1mYXN0JyxcbiAgbW91c2VFbnRlckRlbGF5OiAwLjEsXG4gIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICBhcnJvd1BvaW50QXRDZW50ZXI6IGZhbHNlLFxuICBhdXRvQWRqdXN0T3ZlcmZsb3c6IHRydWVcbn07XG4oMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVG9vbHRpcCk7XG52YXIgX2RlZmF1bHQgPSBUb29sdGlwO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Rvb2x0aXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi90b29sdGlwXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFBvcG92ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcG92ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcG92ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcG92ZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUG9wb3ZlcikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICBfdGhpcy5zYXZlVG9vbHRpcCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy50b29sdGlwID0gbm9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyUG9wb3ZlciA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG5cbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBwcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCJdKTtcblxuICAgICAgZGVsZXRlIHByb3BzLnRpdGxlO1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygncG9wb3ZlcicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfdG9vbHRpcFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgcmVmOiBfdGhpcy5zYXZlVG9vbHRpcCxcbiAgICAgICAgb3ZlcmxheTogX3RoaXMuZ2V0T3ZlcmxheShwcmVmaXhDbHMpXG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb3BvdmVyLCBbe1xuICAgIGtleTogXCJnZXRQb3B1cERvbU5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9vbHRpcC5nZXRQb3B1cERvbU5vZGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0T3ZlcmxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPdmVybGF5KHByZWZpeENscykge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aXRsZSA9IF90aGlzJHByb3BzLnRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQgPSBfdGhpcyRwcm9wcy5jb250ZW50O1xuICAgICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkoISgnb3ZlcmxheScgaW4gdGhpcy5wcm9wcyksICdQb3BvdmVyJywgJ2BvdmVybGF5YCBpcyByZW1vdmVkLCBwbGVhc2UgdXNlIGBjb250ZW50YCBpbnN0ZWFkLCAnICsgJ3NlZTogaHR0cHM6Ly91LmFudC5kZXNpZ24vcG9wb3Zlci1jb250ZW50Jyk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aXRsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRpdGxlXCIpXG4gICAgICB9LCB0aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5uZXItY29udGVudFwiKVxuICAgICAgfSwgY29udGVudCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclBvcG92ZXIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3BvdmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBvcG92ZXI7XG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgdHJhbnNpdGlvbk5hbWU6ICd6b29tLWJpZycsXG4gIHRyaWdnZXI6ICdob3ZlcicsXG4gIG1vdXNlRW50ZXJEZWxheTogMC4xLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgb3ZlcmxheVN0eWxlOiB7fVxufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQVCBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IF9mcCBmcm9tICdsb2Rhc2gvZnAnXG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnXG5pbXBvcnQgeyBCdXR0b24sIFBvcG92ZXIgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAeHN0eWxlZC9zdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3dpdGhUaGVtZSdcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSAnLi4vLi4vLi4vQ3VzdG9tQnV0dG9uJ1xuaW1wb3J0IHtcbiAgVGV4dEZpbHRlckNvbnRlbnQsXG4gIFNlbGVjdEZpbHRlckNvbnRlbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlckNvbnRlbnQnXG5cbmNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkKEJ1dHRvbi5Hcm91cClgXG4gIG1hcmdpbjogOHB4IDEycHggOHB4IDBweDtcbmBcblxuLyoqXG4gKiBHZXRzIHRoZSBmaWx0ZXJcbiAqL1xuY29uc3QgZ2V0RmlsdGVyID0gX2ZwLmdldCgnZmlsdGVyJylcblxuLyoqXG4gKiBHZXRzIHRoZSBmaWx0ZXIgbGFiZWxcbiAqL1xuY29uc3QgZ2V0TGFiZWwgPSBfZnAucGlwZShcbiAgZ2V0RmlsdGVyLFxuICBfZnAuZ2V0KCdsYWJlbCcpXG4pXG5cbmNvbnN0IGdldFR5cGUgPSBfZnAucGlwZShcbiAgZ2V0RmlsdGVyLFxuICBfZnAuZ2V0KCd0eXBlJylcbilcblxuY29uc3QgUG9wb3ZlckNvbnRlbnRNYXAgPSB7XG4gIHRleHQ6IFRleHRGaWx0ZXJDb250ZW50LFxuICBzZWxlY3Q6IFNlbGVjdEZpbHRlckNvbnRlbnRcbn1cblxuY29uc3QgRmlsdGVyID0gd2l0aFRoZW1lKHByb3BzID0+IHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBsYWJlbCA9IGdldExhYmVsKHByb3BzKVxuICBjb25zdCB0eXBlID0gZ2V0VHlwZShwcm9wcylcblxuICBjb25zdCBDb250ZW50ID0gUG9wb3ZlckNvbnRlbnRNYXBbdHlwZV1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIHRpdGxlPXtsYWJlbH1cbiAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgY29udGVudD17PENvbnRlbnQgLz59XG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZT17c2V0VmlzaWJsZX1cbiAgICAgID5cbiAgICAgICAgPEN1c3RvbUJ1dHRvbiBjb250ZW50PXtsYWJlbH0gLz5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICAgIDxDdXN0b21CdXR0b25cbiAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgdHlwZT1cImRhbmdlclwiXG4gICAgICAgIG9uQ2xpY2s9e2dldChwcm9wcywgJ29uUmVtb3ZlJyl9XG4gICAgICAvPlxuICAgIDwvQnV0dG9uR3JvdXA+XG4gIClcbn0pXG5cbkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIG9uUmVtb3ZlOiBQVC5mdW5jLmlzUmVxdWlyZWRcbn1cblxuRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHt9XG5cbkZpbHRlci5kaXNwbGF5TmFtZSA9IEZpbHRlclxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIl9wbGFjZW1lbnRzIiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJyZXF1aXJlJCQzIiwiVG9vbHRpcCIsInJlcXVpcmUkJDIiLCJCdXR0b25Hcm91cCIsInN0eWxlZCIsIkdyb3VwIiwiZ2V0RmlsdGVyIiwiX2ZwIiwiZ2V0IiwiZ2V0TGFiZWwiLCJwaXBlIiwiZ2V0VHlwZSIsIlBvcG92ZXJDb250ZW50TWFwIiwidGV4dCIsIlRleHRGaWx0ZXJDb250ZW50Iiwic2VsZWN0IiwiU2VsZWN0RmlsdGVyQ29udGVudCIsIkZpbHRlciIsIndpdGhUaGVtZSIsInByb3BzIiwidXNlU3RhdGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImxhYmVsIiwidHlwZSIsIkNvbnRlbnQiLCJwcm9wVHlwZXMiLCJvblJlbW92ZSIsIlBUIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxrQkFBa0IsR0FBRztFQUN2QixPQUFPLEVBQUUsQ0FBQztFQUNWLE9BQU8sRUFBRSxDQUFDO0NBQ1gsQ0FBQzs7QUFFRixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsQUFBTyxJQUFJLFVBQVUsR0FBRztFQUN0QixJQUFJLEVBQUU7SUFDSixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxLQUFLLEVBQUU7SUFDTCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsR0FBRyxFQUFFO0lBQ0gsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNmLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsTUFBTSxFQUFFO0lBQ04sTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELE9BQU8sRUFBRTtJQUNQLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDZixZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELE9BQU8sRUFBRTtJQUNQLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZixZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELFFBQVEsRUFBRTtJQUNSLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDZixZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELFFBQVEsRUFBRTtJQUNSLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxXQUFXLEVBQUU7SUFDWCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsV0FBVyxFQUFFO0lBQ1gsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELFVBQVUsRUFBRTtJQUNWLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxVQUFVLEVBQUU7SUFDVixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxFQUFFLFlBQVk7R0FDM0I7Q0FDRixDQUFDOztBQzFFRixJQUFJLE9BQU8sR0FBRyxVQUFVLGdCQUFnQixFQUFFO0VBQ3hDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7RUFFckMsU0FBUyxPQUFPLEdBQUc7SUFDakIsZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7SUFFL0IsT0FBTywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0dBQ2xGOztFQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxrQkFBa0IsR0FBRztJQUNuRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7SUFFakMsSUFBSSxPQUFPLEVBQUU7TUFDWCxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDM0I7R0FDRixDQUFDOztFQUVGLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsTUFBTSxHQUFHO0lBQzNDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ25CLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztRQUN4QixTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7UUFDNUIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7O0lBRW5CLE9BQU9BLFVBQUssQ0FBQyxhQUFhO01BQ3hCLEtBQUs7TUFDTCxFQUFFLFNBQVMsRUFBRSxTQUFTLEdBQUcsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtNQUM1RCxPQUFPLE9BQU8sS0FBSyxVQUFVLEdBQUcsT0FBTyxFQUFFLEdBQUcsT0FBTztLQUNwRCxDQUFDO0dBQ0gsQ0FBQzs7RUFFRixPQUFPLE9BQU8sQ0FBQztDQUNoQixDQUFDQSxVQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRW5CLE9BQU8sQ0FBQyxTQUFTLEdBQUc7RUFDbEIsU0FBUyxFQUFFQyxrQkFBUyxDQUFDLE1BQU07RUFDM0IsT0FBTyxFQUFFQSxrQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDQSxrQkFBUyxDQUFDLElBQUksRUFBRUEsa0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVU7RUFDekUsRUFBRSxFQUFFQSxrQkFBUyxDQUFDLE1BQU07RUFDcEIsT0FBTyxFQUFFQSxrQkFBUyxDQUFDLEdBQUc7Q0FDdkIsQ0FBQzs7QUNqQ0YsSUFBSSxPQUFPLEdBQUcsVUFBVSxVQUFVLEVBQUU7RUFDbEMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzs7RUFFL0IsU0FBUyxPQUFPLEdBQUc7SUFDakIsSUFBSSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQzs7SUFFdkIsZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7SUFFL0IsS0FBSyxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO01BQ25GLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7O0lBRUQsT0FBTyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsZUFBZSxHQUFHLFlBQVk7TUFDcEssSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUs7VUFDekIsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZO1VBQ3ZDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTztVQUM3QixTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVM7VUFDakMsRUFBRSxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUM7O01BRXhCLE9BQU8sQ0FBQ0QsVUFBSyxDQUFDLGFBQWE7UUFDekIsS0FBSztRQUNMLEVBQUUsU0FBUyxFQUFFLFNBQVMsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRTtRQUNqRCxZQUFZO09BQ2IsRUFBRUEsVUFBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7UUFDOUIsR0FBRyxFQUFFLFNBQVM7UUFDZCxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87UUFDdEIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsRUFBRSxFQUFFLEVBQUU7UUFDTixPQUFPLEVBQUUsT0FBTztPQUNqQixDQUFDLENBQUMsQ0FBQztLQUNMLEVBQUUsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFVLElBQUksRUFBRTtNQUNyQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUN0QixFQUFFLEtBQUssQ0FBQyxFQUFFLDBCQUEwQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztHQUNwRDs7RUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxTQUFTLGVBQWUsR0FBRztJQUM3RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7R0FDdkMsQ0FBQzs7RUFFRixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sR0FBRztJQUMzQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSztRQUNuQixnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCO1FBQzFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztRQUN4QixlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWU7UUFDeEMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlO1FBQ3hDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWTtRQUNsQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7UUFDNUIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRO1FBQzFCLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZTtRQUN4QyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCO1FBQzlDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYztRQUN0QyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7UUFDNUIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO1FBQzVCLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSztRQUNwQixvQkFBb0IsR0FBRyxNQUFNLENBQUMsb0JBQW9CO1FBQ2xELGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYztRQUN0QyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CO1FBQ2hELFNBQVMsR0FBRyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDOztJQUVoVSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7TUFDM0IsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUM5QztJQUNELE9BQU9BLFVBQUssQ0FBQyxhQUFhO01BQ3hCLE9BQU87TUFDUCxRQUFRLENBQUM7UUFDUCxjQUFjLEVBQUUsZ0JBQWdCO1FBQ2hDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVztRQUNyQixTQUFTLEVBQUUsU0FBUztRQUNwQixLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWU7UUFDM0IsTUFBTSxFQUFFLE9BQU87UUFDZixpQkFBaUIsRUFBRSxVQUFVO1FBQzdCLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLGlCQUFpQixFQUFFLG1CQUFtQjtRQUN0QyxvQkFBb0IsRUFBRSxlQUFlO1FBQ3JDLHVCQUF1QixFQUFFLGtCQUFrQjtRQUMzQyxtQkFBbUIsRUFBRSxjQUFjO1FBQ25DLGNBQWMsRUFBRSxTQUFTO1FBQ3pCLG1CQUFtQixFQUFFLGNBQWM7UUFDbkMsa0JBQWtCLEVBQUUsb0JBQW9CO1FBQ3hDLGVBQWUsRUFBRSxlQUFlO1FBQ2hDLFVBQVUsRUFBRSxZQUFZO1FBQ3hCLGVBQWUsRUFBRSxlQUFlO09BQ2pDLEVBQUUsVUFBVSxDQUFDO01BQ2QsUUFBUTtLQUNULENBQUM7R0FDSCxDQUFDOztFQUVGLE9BQU8sT0FBTyxDQUFDO0NBQ2hCLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRWIsT0FBTyxDQUFDLFNBQVMsR0FBRztFQUNsQixPQUFPLEVBQUVDLGtCQUFTLENBQUMsR0FBRztFQUN0QixRQUFRLEVBQUVBLGtCQUFTLENBQUMsR0FBRztFQUN2QixjQUFjLEVBQUVBLGtCQUFTLENBQUMsSUFBSTtFQUM5QixPQUFPLEVBQUVBLGtCQUFTLENBQUMsSUFBSTtFQUN2QixTQUFTLEVBQUVBLGtCQUFTLENBQUMsTUFBTTtFQUMzQixjQUFjLEVBQUVBLGtCQUFTLENBQUMsU0FBUyxDQUFDLENBQUNBLGtCQUFTLENBQUMsTUFBTSxFQUFFQSxrQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3pFLFNBQVMsRUFBRUEsa0JBQVMsQ0FBQyxHQUFHO0VBQ3hCLGVBQWUsRUFBRUEsa0JBQVMsQ0FBQyxJQUFJO0VBQy9CLGtCQUFrQixFQUFFQSxrQkFBUyxDQUFDLElBQUk7RUFDbEMsT0FBTyxFQUFFQSxrQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDQSxrQkFBUyxDQUFDLElBQUksRUFBRUEsa0JBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVU7RUFDekUsWUFBWSxFQUFFQSxrQkFBUyxDQUFDLE1BQU07RUFDOUIsZ0JBQWdCLEVBQUVBLGtCQUFTLENBQUMsTUFBTTtFQUNsQyxTQUFTLEVBQUVBLGtCQUFTLENBQUMsTUFBTTtFQUMzQixlQUFlLEVBQUVBLGtCQUFTLENBQUMsTUFBTTtFQUNqQyxlQUFlLEVBQUVBLGtCQUFTLENBQUMsTUFBTTtFQUNqQyxtQkFBbUIsRUFBRUEsa0JBQVMsQ0FBQyxJQUFJO0VBQ25DLG9CQUFvQixFQUFFQSxrQkFBUyxDQUFDLElBQUk7RUFDcEMsS0FBSyxFQUFFQSxrQkFBUyxDQUFDLE1BQU07RUFDdkIsWUFBWSxFQUFFQSxrQkFBUyxDQUFDLEdBQUc7RUFDM0IsRUFBRSxFQUFFQSxrQkFBUyxDQUFDLE1BQU07Q0FDckIsQ0FBQztBQUNGLE9BQU8sQ0FBQyxZQUFZLEdBQUc7RUFDckIsU0FBUyxFQUFFLFlBQVk7RUFDdkIsZUFBZSxFQUFFLENBQUM7RUFDbEIsb0JBQW9CLEVBQUUsS0FBSztFQUMzQixlQUFlLEVBQUUsR0FBRztFQUNwQixLQUFLLEVBQUUsRUFBRTtFQUNULFNBQVMsRUFBRSxPQUFPO0VBQ2xCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztFQUNsQixZQUFZLEVBQUUsSUFBSTtDQUNuQixDQUFDOzs7QUN0SUY7QUFFQSxrQkFBa0IsR0FBRyxJQUFJLENBQUM7QUFDMUIsSUFBSSxrQkFBa0IsR0FBRztFQUN2QixPQUFPLEVBQUUsQ0FBQztFQUNWLE9BQU8sRUFBRSxDQUFDO0NBQ1gsQ0FBQzs7QUFFRixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsSUFBSSxVQUFVLEdBQUcsa0JBQWtCLEdBQUc7RUFDcEMsSUFBSSxFQUFFO0lBQ0osTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsS0FBSyxFQUFFO0lBQ0wsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELEdBQUcsRUFBRTtJQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDZixZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELE1BQU0sRUFBRTtJQUNOLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxPQUFPLEVBQUU7SUFDUCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxPQUFPLEVBQUU7SUFDUCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxRQUFRLEVBQUU7SUFDUixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxRQUFRLEVBQUU7SUFDUixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsV0FBVyxFQUFFO0lBQ1gsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELFdBQVcsRUFBRTtJQUNYLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxVQUFVLEVBQUU7SUFDVixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsVUFBVSxFQUFFO0lBQ1YsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLFlBQVksRUFBRSxZQUFZO0dBQzNCO0NBQ0YsQ0FBQzs7QUFFRixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVTs7Ozs7OztBQ3JGL0I7QUFFQSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFDSCwwQkFBMEIsR0FBRyxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFBYSxDQUFDOzs7O0FBSW5DLFNBQVMsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRTs7QUFFN1QsSUFBSSx5QkFBeUIsR0FBRztFQUM5QixPQUFPLEVBQUUsQ0FBQztFQUNWLE9BQU8sRUFBRSxDQUFDO0NBQ1gsQ0FBQztBQUNGLElBQUksMEJBQTBCLEdBQUc7RUFDL0IsT0FBTyxFQUFFLENBQUM7RUFDVixPQUFPLEVBQUUsQ0FBQztDQUNYLENBQUM7QUFDRixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFMUIsU0FBUyxrQkFBa0IsQ0FBQyxrQkFBa0IsRUFBRTtFQUM5QyxJQUFJLE9BQU8sa0JBQWtCLEtBQUssU0FBUyxFQUFFO0lBQzNDLE9BQU8sa0JBQWtCLEdBQUcseUJBQXlCLEdBQUcsMEJBQTBCLENBQUM7R0FDcEY7O0VBRUQsT0FBTyxRQUFRLENBQUMsRUFBRSxFQUFFLDBCQUEwQixFQUFFLGtCQUFrQixDQUFDLENBQUM7Q0FDckU7O0FBRUQsU0FBUyxhQUFhLEdBQUc7RUFDdkIsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0VBQ3BGLElBQUksa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFVBQVU7TUFDdEMsVUFBVSxHQUFHLGtCQUFrQixLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxrQkFBa0I7TUFDbkUscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQjtNQUNuRCxvQkFBb0IsR0FBRyxxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcscUJBQXFCO01BQ3BGLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0I7TUFDakQsa0JBQWtCLEdBQUcscUJBQXFCLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLHFCQUFxQjtNQUNsRixxQkFBcUIsR0FBRyxNQUFNLENBQUMsa0JBQWtCO01BQ2pELGtCQUFrQixHQUFHLHFCQUFxQixLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxxQkFBcUIsQ0FBQztFQUN6RixJQUFJLFlBQVksR0FBRztJQUNqQixJQUFJLEVBQUU7TUFDSixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ3BCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoQjtJQUNELEtBQUssRUFBRTtNQUNMLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7TUFDcEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNmO0lBQ0QsR0FBRyxFQUFFO01BQ0gsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztNQUNwQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEI7SUFDRCxNQUFNLEVBQUU7TUFDTixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ3BCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDZjtJQUNELE9BQU8sRUFBRTtNQUNQLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7TUFDcEIsTUFBTSxFQUFFLENBQUMsRUFBRSxvQkFBb0IsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNuRDtJQUNELE9BQU8sRUFBRTtNQUNQLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7TUFDcEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztLQUNqRDtJQUNELFFBQVEsRUFBRTtNQUNSLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7TUFDcEIsTUFBTSxFQUFFLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsUUFBUSxFQUFFO01BQ1IsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztNQUNwQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsQ0FBQztLQUNoRDtJQUNELFdBQVcsRUFBRTtNQUNYLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7TUFDcEIsTUFBTSxFQUFFLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxFQUFFLENBQUMsQ0FBQztLQUMvQztJQUNELFdBQVcsRUFBRTtNQUNYLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7TUFDcEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztLQUM3QztJQUNELFVBQVUsRUFBRTtNQUNWLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7TUFDcEIsTUFBTSxFQUFFLENBQUMsRUFBRSxvQkFBb0IsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEQ7SUFDRCxVQUFVLEVBQUU7TUFDVixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ3BCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixHQUFHLFVBQVUsQ0FBQztLQUM5QztHQUNGLENBQUM7RUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRTtJQUMvQyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQzlFLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQztNQUNoRCxZQUFZLEVBQUUsWUFBWTtLQUMzQixDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRUMsWUFBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUM3QyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7S0FDakQsQ0FBQyxDQUFDO0lBQ0gsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7R0FDdEMsQ0FBQyxDQUFDO0VBQ0gsT0FBTyxZQUFZLENBQUM7Ozs7Ozs7O0FDbkd0QjtBQUVBLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtFQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQztBQUNILE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQzs7QUFFNUIsSUFBSSxLQUFLLEdBQUcsdUJBQXVCLENBQUNDLFVBQWdCLENBQUMsQ0FBQzs7OztBQUl0RCxJQUFJLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQ0MsT0FBcUIsQ0FBQyxDQUFDOztBQUUvRCxJQUFJLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQyxVQUFxQixDQUFDLENBQUM7O0FBRWhFLElBQUksV0FBVyxHQUFHLHNCQUFzQixDQUFDQyxZQUF1QixDQUFDLENBQUM7Ozs7QUFJbEUsU0FBUyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFOztBQUVqRyxTQUFTLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRTs7QUFFM2QsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7O0FBRS9WLFNBQVMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTs7QUFFak4sU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsRUFBRSxFQUFFOztBQUV6SixTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsRUFBRSxFQUFFOztBQUU3VCxTQUFTLFlBQVksQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxFQUFFLElBQUksVUFBVSxFQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLFdBQVcsQ0FBQyxFQUFFOztBQUV2TixTQUFTLDBCQUEwQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTs7QUFFakwsU0FBUyxlQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUUsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsR0FBRyxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOztBQUU3TSxTQUFTLHNCQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLElBQUksSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQywyREFBMkQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFOztBQUV0SyxTQUFTLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsSUFBSSxPQUFPLFVBQVUsS0FBSyxVQUFVLElBQUksVUFBVSxLQUFLLElBQUksRUFBRSxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxlQUFlLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUU7O0FBRWpZLFNBQVMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsSUFBSSxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTs7QUFFMUssU0FBUyxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxVQUFVLE1BQU0sRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFB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OztBQUV0RCxJQUFJLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQ0MsT0FBcUIsQ0FBQyxDQUFDOzs7O0FBSTdELElBQUksUUFBUSxHQUFHLHNCQUFzQixDQUFDRyxVQUEyQixDQUFDLENBQUM7O0FBRW5FLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7QUFFakcsU0FBUyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxHQUFHLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFOztBQUUvVixTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7O0FBRTdULFNBQVMsZUFBZSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxZQUFZLFdBQVcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7QUFFekosU0FBUyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsRUFBRTs7QUFFN1QsU0FBUyxZQUFZLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxXQUFXLENBQUMsRUFBRTs7QUFFdk4sU0FBUywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsSUFBSSxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7O0FBRWpMLFNBQVMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxNQUFNLElBQUksY0FBYyxDQUFDLDJEQUEyRCxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7O0FBRXRLLFNBQVMsZUFBZSxDQUFDLENBQUMsRUFBRSxFQUFFLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQUcsU0FBUyxlQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs7QUFFN00sU0FBUyxTQUFTLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsZUFBZSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFOztBQUVqWSxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksU0FBUyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMs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

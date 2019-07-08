import { _ as _slicedToArray, a as _taggedTemplateLiteral } from '../../../chunk-05bf3f70.js';
import require$$1, { Component, useState } from 'react';
import PropTypes__default from 'prop-types';
import { c as createCommonjsModule, u as unwrapExports } from '../../../chunk-5732a1e2.js';
import { w as withTheme } from '../../../withTheme/index-30ddde39.js';
import styled from 'styled-components';
import '../../../chunk-69193f69.js';
import { b as require$$2, _ as _configProvider } from '../../../chunk-218dc193.js';
import { k as _inherits, j as _classCallCheck, l as _possibleConstructorReturn, m as _objectWithoutProperties, g as _extends } from '../../../chunk-55a8f221.js';
import 'react-dom';
import '../../../chunk-bbc6af60.js';
import { a as get } from '../../../chunk-e008480f.js';
import '../../../chunk-bbdab8a3.js';
import { a as require$$6 } from '../../../chunk-99207a3b.js';
import '../../../chunk-c27c29c8.js';
import '../../../chunk-f27d627d.js';
import '../../../chunk-4c226307.js';
import '../../../chunk-8820e6e0.js';
import '../../../chunk-e9a642ec.js';
import { _ as _Button } from '../../../chunk-d1343d60.js';
import { _ as _reactLifecyclesCompat } from '../../../chunk-ee2530d1.js';
import '../../../chunk-c35b7916.js';
import '../../../chunk-eb99831d.js';
import CustomButton from '../../../CustomButton/index.js';
import '../../../chunk-cc423a95.js';
import '../../../chunk-c30b8a6e.js';
import '../../../chunk-03805be5.js';
import { T as Trigger } from '../../../chunk-69ee6dc4.js';
import '../../../chunk-38979edb.js';
import { o as omit } from '../../../chunk-945c35cc.js';
import '../../../chunk-5e1f7e4a.js';
import { TextFilterContent, SelectFilterContent } from './components/FilterContent/index.js';
import '../../../SingleLineTextInput/index.js';
import '../../../chunk-c855a38a.js';

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
  var data = _taggedTemplateLiteral(["\n  margin: 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonGroup = styled(_Button.Group)(_templateObject());
/**
 * Index into the PopoverContent
 */

var PopoverContentMap = {
  text: TextFilterContent,
  select: SelectFilterContent
  /**
   * Creates the button popover label
   * @param {String} fieldName
   * @param {String} predicate
   * @param {String} value
   */

};

var createLabel = function createLabel(fieldName) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return require$$1.createElement(require$$1.Fragment, null, require$$1.createElement("strong", null, fieldName), "\xA0", predicate, "\xA0", require$$1.createElement("strong", null, value));
};
/**
 * Gets popover content
 * @param {String} type
 * @param {Object} props
 */


var getPopoverContent = function getPopoverContent(type, props) {
  var Component = PopoverContentMap[type];
  return require$$1.createElement(Component, props);
};

var Filter = withTheme(function (props) {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      popoverVisible = _useState2[0],
      setPopoverVisible = _useState2[1];

  var fieldName = props.fieldName,
      formValue = props.formValue,
      id = props.id,
      label = props.label,
      type = props.type,
      onChange = props.onChange,
      removeFilter = props.removeFilter;

  var onRemove = function onRemove() {
    removeFilter(id);
    onChange(omit(formValue, [id]));
  };

  var _get = get(formValue, id, {}),
      predicate = _get.predicate,
      ugValue = _get.ugValue;

  var popoverContent = getPopoverContent(type, {
    fieldName: fieldName,
    formValue: formValue,
    id: id,
    onChange: onChange
  });
  return require$$1.createElement(ButtonGroup, null, require$$1.createElement(_Popover, {
    title: label,
    trigger: "click",
    visible: popoverVisible,
    placement: "bottom",
    content: popoverContent,
    onVisibleChange: setPopoverVisible
  }, require$$1.createElement(CustomButton, {
    content: createLabel(label, predicate, ugValue)
  })), require$$1.createElement(CustomButton, {
    icon: "close",
    type: "danger",
    onClick: onRemove
  }));
});
Filter.propTypes = {
  onChange: PropTypes__default.func.isRequired,
  removeFilter: PropTypes__default.func.isRequired
};
Filter.defaultProps = {};
Filter.displayName = Filter;

export default Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL3BsYWNlbWVudHMuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9lcy9Db250ZW50LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvVG9vbHRpcC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2xpYi9wbGFjZW1lbnRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Rvb2x0aXAvcGxhY2VtZW50cy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90b29sdGlwL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3BvcG92ZXIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi9zcmMvQWR2YW5jZWRGaWx0ZXJzL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG5cbnZhciB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG5cbmV4cG9ydCB2YXIgcGxhY2VtZW50cyA9IHtcbiAgbGVmdDoge1xuICAgIHBvaW50czogWydjcicsICdjbCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3A6IHtcbiAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b206IHtcbiAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodFRvcDoge1xuICAgIHBvaW50czogWyd0bCcsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsndHInLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxhY2VtZW50czsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBDb250ZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbnRlbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRlbnQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDb250ZW50LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIHRyaWdnZXIgPSB0aGlzLnByb3BzLnRyaWdnZXI7XG5cbiAgICBpZiAodHJpZ2dlcikge1xuICAgICAgdHJpZ2dlci5mb3JjZVBvcHVwQWxpZ24oKTtcbiAgICB9XG4gIH07XG5cbiAgQ29udGVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvdmVybGF5ID0gX3Byb3BzLm92ZXJsYXksXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIGlkID0gX3Byb3BzLmlkO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWlubmVyJywgaWQ6IGlkLCByb2xlOiAndG9vbHRpcCcgfSxcbiAgICAgIHR5cGVvZiBvdmVybGF5ID09PSAnZnVuY3Rpb24nID8gb3ZlcmxheSgpIDogb3ZlcmxheVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRlbnQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG92ZXJsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmlnZ2VyOiBQcm9wVHlwZXMuYW55XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29udGVudDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgeyBwbGFjZW1lbnRzIH0gZnJvbSAnLi9wbGFjZW1lbnRzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCc7XG5cbnZhciBUb29sdGlwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRvb2x0aXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRvb2x0aXAoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb29sdGlwKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5nZXRQb3B1cEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBhcnJvd0NvbnRlbnQgPSBfdGhpcyRwcm9wcy5hcnJvd0NvbnRlbnQsXG4gICAgICAgICAgb3ZlcmxheSA9IF90aGlzJHByb3BzLm92ZXJsYXksXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGlkID0gX3RoaXMkcHJvcHMuaWQ7XG5cbiAgICAgIHJldHVybiBbUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWFycm93Jywga2V5OiAnYXJyb3cnIH0sXG4gICAgICAgIGFycm93Q29udGVudFxuICAgICAgKSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7XG4gICAgICAgIGtleTogJ2NvbnRlbnQnLFxuICAgICAgICB0cmlnZ2VyOiBfdGhpcy50cmlnZ2VyLFxuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBvdmVybGF5OiBvdmVybGF5XG4gICAgICB9KV07XG4gICAgfSwgX3RoaXMuc2F2ZVRyaWdnZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMudHJpZ2dlciA9IG5vZGU7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBUb29sdGlwLnByb3RvdHlwZS5nZXRQb3B1cERvbU5vZGUgPSBmdW5jdGlvbiBnZXRQb3B1cERvbU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpZ2dlci5nZXRQb3B1cERvbU5vZGUoKTtcbiAgfTtcblxuICBUb29sdGlwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIG92ZXJsYXlDbGFzc05hbWUgPSBfcHJvcHMub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgICAgdHJpZ2dlciA9IF9wcm9wcy50cmlnZ2VyLFxuICAgICAgICBtb3VzZUVudGVyRGVsYXkgPSBfcHJvcHMubW91c2VFbnRlckRlbGF5LFxuICAgICAgICBtb3VzZUxlYXZlRGVsYXkgPSBfcHJvcHMubW91c2VMZWF2ZURlbGF5LFxuICAgICAgICBvdmVybGF5U3R5bGUgPSBfcHJvcHMub3ZlcmxheVN0eWxlLFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlID0gX3Byb3BzLm9uVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgYWZ0ZXJWaXNpYmxlQ2hhbmdlID0gX3Byb3BzLmFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBfcHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIGFuaW1hdGlvbiA9IF9wcm9wcy5hbmltYXRpb24sXG4gICAgICAgIHBsYWNlbWVudCA9IF9wcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgIGFsaWduID0gX3Byb3BzLmFsaWduLFxuICAgICAgICBkZXN0cm95VG9vbHRpcE9uSGlkZSA9IF9wcm9wcy5kZXN0cm95VG9vbHRpcE9uSGlkZSxcbiAgICAgICAgZGVmYXVsdFZpc2libGUgPSBfcHJvcHMuZGVmYXVsdFZpc2libGUsXG4gICAgICAgIGdldFRvb2x0aXBDb250YWluZXIgPSBfcHJvcHMuZ2V0VG9vbHRpcENvbnRhaW5lcixcbiAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydvdmVybGF5Q2xhc3NOYW1lJywgJ3RyaWdnZXInLCAnbW91c2VFbnRlckRlbGF5JywgJ21vdXNlTGVhdmVEZWxheScsICdvdmVybGF5U3R5bGUnLCAncHJlZml4Q2xzJywgJ2NoaWxkcmVuJywgJ29uVmlzaWJsZUNoYW5nZScsICdhZnRlclZpc2libGVDaGFuZ2UnLCAndHJhbnNpdGlvbk5hbWUnLCAnYW5pbWF0aW9uJywgJ3BsYWNlbWVudCcsICdhbGlnbicsICdkZXN0cm95VG9vbHRpcE9uSGlkZScsICdkZWZhdWx0VmlzaWJsZScsICdnZXRUb29sdGlwQ29udGFpbmVyJ10pO1xuXG4gICAgdmFyIGV4dHJhUHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzKTtcbiAgICBpZiAoJ3Zpc2libGUnIGluIHRoaXMucHJvcHMpIHtcbiAgICAgIGV4dHJhUHJvcHMucG9wdXBWaXNpYmxlID0gdGhpcy5wcm9wcy52aXNpYmxlO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRyaWdnZXIsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIHBvcHVwQ2xhc3NOYW1lOiBvdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgICByZWY6IHRoaXMuc2F2ZVRyaWdnZXIsXG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBwb3B1cDogdGhpcy5nZXRQb3B1cEVsZW1lbnQsXG4gICAgICAgIGFjdGlvbjogdHJpZ2dlcixcbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHM6IHBsYWNlbWVudHMsXG4gICAgICAgIHBvcHVwUGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIHBvcHVwQWxpZ246IGFsaWduLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0VG9vbHRpcENvbnRhaW5lcixcbiAgICAgICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IG9uVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2U6IGFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIHBvcHVwQW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgICAgIGRlZmF1bHRQb3B1cFZpc2libGU6IGRlZmF1bHRWaXNpYmxlLFxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGRlc3Ryb3lUb29sdGlwT25IaWRlLFxuICAgICAgICBtb3VzZUxlYXZlRGVsYXk6IG1vdXNlTGVhdmVEZWxheSxcbiAgICAgICAgcG9wdXBTdHlsZTogb3ZlcmxheVN0eWxlLFxuICAgICAgICBtb3VzZUVudGVyRGVsYXk6IG1vdXNlRW50ZXJEZWxheVxuICAgICAgfSwgZXh0cmFQcm9wcyksXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFRvb2x0aXA7XG59KENvbXBvbmVudCk7XG5cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICB0cmlnZ2VyOiBQcm9wVHlwZXMuYW55LFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgZGVmYXVsdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBhbmltYXRpb246IFByb3BUeXBlcy5hbnksXG4gIG9uVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFmdGVyVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG92ZXJsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG4gIG92ZXJsYXlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgb3ZlcmxheUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtb3VzZUVudGVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1vdXNlTGVhdmVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgZ2V0VG9vbHRpcENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlc3Ryb3lUb29sdGlwT25IaWRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgYWxpZ246IFByb3BUeXBlcy5vYmplY3QsXG4gIGFycm93Q29udGVudDogUHJvcFR5cGVzLmFueSxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJlZml4Q2xzOiAncmMtdG9vbHRpcCcsXG4gIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgZGVzdHJveVRvb2x0aXBPbkhpZGU6IGZhbHNlLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgYWxpZ246IHt9LFxuICBwbGFjZW1lbnQ6ICdyaWdodCcsXG4gIHRyaWdnZXI6IFsnaG92ZXInXSxcbiAgYXJyb3dDb250ZW50OiBudWxsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcblxudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcblxudmFyIHBsYWNlbWVudHMgPSBleHBvcnRzLnBsYWNlbWVudHMgPSB7XG4gIGxlZnQ6IHtcbiAgICBwb2ludHM6IFsnY3InLCAnY2wnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodDoge1xuICAgIHBvaW50czogWydjbCcsICdjciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wOiB7XG4gICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdFRvcDoge1xuICAgIHBvaW50czogWyd0cicsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcFJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodEJvdHRvbToge1xuICAgIHBvaW50czogWydibCcsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdEJvdHRvbToge1xuICAgIHBvaW50czogWydicicsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH1cbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHBsYWNlbWVudHM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldE92ZXJmbG93T3B0aW9ucyA9IGdldE92ZXJmbG93T3B0aW9ucztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0UGxhY2VtZW50cztcblxudmFyIF9wbGFjZW1lbnRzID0gcmVxdWlyZShcInJjLXRvb2x0aXAvbGliL3BsYWNlbWVudHNcIik7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBhdXRvQWRqdXN0T3ZlcmZsb3dFbmFibGVkID0ge1xuICBhZGp1c3RYOiAxLFxuICBhZGp1c3RZOiAxXG59O1xudmFyIGF1dG9BZGp1c3RPdmVyZmxvd0Rpc2FibGVkID0ge1xuICBhZGp1c3RYOiAwLFxuICBhZGp1c3RZOiAwXG59O1xudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcblxuZnVuY3Rpb24gZ2V0T3ZlcmZsb3dPcHRpb25zKGF1dG9BZGp1c3RPdmVyZmxvdykge1xuICBpZiAodHlwZW9mIGF1dG9BZGp1c3RPdmVyZmxvdyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgcmV0dXJuIGF1dG9BZGp1c3RPdmVyZmxvdyA/IGF1dG9BZGp1c3RPdmVyZmxvd0VuYWJsZWQgOiBhdXRvQWRqdXN0T3ZlcmZsb3dEaXNhYmxlZDtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYXV0b0FkanVzdE92ZXJmbG93RGlzYWJsZWQsIGF1dG9BZGp1c3RPdmVyZmxvdyk7XG59XG5cbmZ1bmN0aW9uIGdldFBsYWNlbWVudHMoKSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX2NvbmZpZyRhcnJvd1dpZHRoID0gY29uZmlnLmFycm93V2lkdGgsXG4gICAgICBhcnJvd1dpZHRoID0gX2NvbmZpZyRhcnJvd1dpZHRoID09PSB2b2lkIDAgPyA1IDogX2NvbmZpZyRhcnJvd1dpZHRoLFxuICAgICAgX2NvbmZpZyRob3Jpem9udGFsQXJyID0gY29uZmlnLmhvcml6b250YWxBcnJvd1NoaWZ0LFxuICAgICAgaG9yaXpvbnRhbEFycm93U2hpZnQgPSBfY29uZmlnJGhvcml6b250YWxBcnIgPT09IHZvaWQgMCA/IDE2IDogX2NvbmZpZyRob3Jpem9udGFsQXJyLFxuICAgICAgX2NvbmZpZyR2ZXJ0aWNhbEFycm93ID0gY29uZmlnLnZlcnRpY2FsQXJyb3dTaGlmdCxcbiAgICAgIHZlcnRpY2FsQXJyb3dTaGlmdCA9IF9jb25maWckdmVydGljYWxBcnJvdyA9PT0gdm9pZCAwID8gMTIgOiBfY29uZmlnJHZlcnRpY2FsQXJyb3csXG4gICAgICBfY29uZmlnJGF1dG9BZGp1c3RPdmUgPSBjb25maWcuYXV0b0FkanVzdE92ZXJmbG93LFxuICAgICAgYXV0b0FkanVzdE92ZXJmbG93ID0gX2NvbmZpZyRhdXRvQWRqdXN0T3ZlID09PSB2b2lkIDAgPyB0cnVlIDogX2NvbmZpZyRhdXRvQWRqdXN0T3ZlO1xuICB2YXIgcGxhY2VtZW50TWFwID0ge1xuICAgIGxlZnQ6IHtcbiAgICAgIHBvaW50czogWydjcicsICdjbCddLFxuICAgICAgb2Zmc2V0OiBbLTQsIDBdXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gICAgICBvZmZzZXQ6IFs0LCAwXVxuICAgIH0sXG4gICAgdG9wOiB7XG4gICAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICAgIG9mZnNldDogWzAsIC00XVxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICAgIG9mZnNldDogWzAsIDRdXG4gICAgfSxcbiAgICB0b3BMZWZ0OiB7XG4gICAgICBwb2ludHM6IFsnYmwnLCAndGMnXSxcbiAgICAgIG9mZnNldDogWy0oaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKSwgLTRdXG4gICAgfSxcbiAgICBsZWZ0VG9wOiB7XG4gICAgICBwb2ludHM6IFsndHInLCAnY2wnXSxcbiAgICAgIG9mZnNldDogWy00LCAtKHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpXVxuICAgIH0sXG4gICAgdG9wUmlnaHQ6IHtcbiAgICAgIHBvaW50czogWydicicsICd0YyddLFxuICAgICAgb2Zmc2V0OiBbaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoLCAtNF1cbiAgICB9LFxuICAgIHJpZ2h0VG9wOiB7XG4gICAgICBwb2ludHM6IFsndGwnLCAnY3InXSxcbiAgICAgIG9mZnNldDogWzQsIC0odmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCldXG4gICAgfSxcbiAgICBib3R0b21SaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ3RyJywgJ2JjJ10sXG4gICAgICBvZmZzZXQ6IFtob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgsIDRdXG4gICAgfSxcbiAgICByaWdodEJvdHRvbToge1xuICAgICAgcG9pbnRzOiBbJ2JsJywgJ2NyJ10sXG4gICAgICBvZmZzZXQ6IFs0LCB2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoXVxuICAgIH0sXG4gICAgYm90dG9tTGVmdDoge1xuICAgICAgcG9pbnRzOiBbJ3RsJywgJ2JjJ10sXG4gICAgICBvZmZzZXQ6IFstKGhvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCksIDRdXG4gICAgfSxcbiAgICBsZWZ0Qm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsnYnInLCAnY2wnXSxcbiAgICAgIG9mZnNldDogWy00LCB2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoXVxuICAgIH1cbiAgfTtcbiAgT2JqZWN0LmtleXMocGxhY2VtZW50TWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBwbGFjZW1lbnRNYXBba2V5XSA9IGNvbmZpZy5hcnJvd1BvaW50QXRDZW50ZXIgPyBfZXh0ZW5kcyh7fSwgcGxhY2VtZW50TWFwW2tleV0sIHtcbiAgICAgIG92ZXJmbG93OiBnZXRPdmVyZmxvd09wdGlvbnMoYXV0b0FkanVzdE92ZXJmbG93KSxcbiAgICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gICAgfSkgOiBfZXh0ZW5kcyh7fSwgX3BsYWNlbWVudHMucGxhY2VtZW50c1trZXldLCB7XG4gICAgICBvdmVyZmxvdzogZ2V0T3ZlcmZsb3dPcHRpb25zKGF1dG9BZGp1c3RPdmVyZmxvdylcbiAgICB9KTtcbiAgICBwbGFjZW1lbnRNYXBba2V5XS5pZ25vcmVTaGFrZSA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcGxhY2VtZW50TWFwO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0ID0gcmVxdWlyZShcInJlYWN0LWxpZmVjeWNsZXMtY29tcGF0XCIpO1xuXG52YXIgX3JjVG9vbHRpcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXRvb2x0aXBcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9wbGFjZW1lbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wbGFjZW1lbnRzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9OyBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbnZhciBzcGxpdE9iamVjdCA9IGZ1bmN0aW9uIHNwbGl0T2JqZWN0KG9iaiwga2V5cykge1xuICB2YXIgcGlja2VkID0ge307XG5cbiAgdmFyIG9taXR0ZWQgPSBfZXh0ZW5kcyh7fSwgb2JqKTtcblxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChvYmogJiYga2V5IGluIG9iaikge1xuICAgICAgcGlja2VkW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIGRlbGV0ZSBvbWl0dGVkW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwaWNrZWQ6IHBpY2tlZCxcbiAgICBvbWl0dGVkOiBvbWl0dGVkXG4gIH07XG59O1xuXG52YXIgVG9vbHRpcCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVG9vbHRpcCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVG9vbHRpcChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb29sdGlwKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFRvb2x0aXApLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLm9uVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uICh2aXNpYmxlKSB7XG4gICAgICB2YXIgb25WaXNpYmxlQ2hhbmdlID0gX3RoaXMucHJvcHMub25WaXNpYmxlQ2hhbmdlO1xuXG4gICAgICBpZiAoISgndmlzaWJsZScgaW4gX3RoaXMucHJvcHMpKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2aXNpYmxlOiBfdGhpcy5pc05vVGl0bGUoKSA/IGZhbHNlIDogdmlzaWJsZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uVmlzaWJsZUNoYW5nZSAmJiAhX3RoaXMuaXNOb1RpdGxlKCkpIHtcbiAgICAgICAgb25WaXNpYmxlQ2hhbmdlKHZpc2libGUpO1xuICAgICAgfVxuICAgIH07IC8vIOWKqOaAgeiuvue9ruWKqOeUu+eCuVxuXG5cbiAgICBfdGhpcy5vblBvcHVwQWxpZ24gPSBmdW5jdGlvbiAoZG9tTm9kZSwgYWxpZ24pIHtcbiAgICAgIHZhciBwbGFjZW1lbnRzID0gX3RoaXMuZ2V0UGxhY2VtZW50cygpOyAvLyDlvZPliY3ov5Tlm57nmoTkvY3nva5cblxuXG4gICAgICB2YXIgcGxhY2VtZW50ID0gT2JqZWN0LmtleXMocGxhY2VtZW50cykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHBsYWNlbWVudHNba2V5XS5wb2ludHNbMF0gPT09IGFsaWduLnBvaW50c1swXSAmJiBwbGFjZW1lbnRzW2tleV0ucG9pbnRzWzFdID09PSBhbGlnbi5wb2ludHNbMV07XG4gICAgICB9KVswXTtcblxuICAgICAgaWYgKCFwbGFjZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyDmoLnmja7lvZPliY3lnZDmoIforr7nva7liqjnlLvngrlcblxuXG4gICAgICB2YXIgcmVjdCA9IGRvbU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgdHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICBsZWZ0OiAnNTAlJ1xuICAgICAgfTtcblxuICAgICAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdCb3R0b20nKSA+PSAwKSB7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbi50b3AgPSBcIlwiLmNvbmNhdChyZWN0LmhlaWdodCAtIGFsaWduLm9mZnNldFsxXSwgXCJweFwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoJ1RvcCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ2JvdHRvbScpID49IDApIHtcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnRvcCA9IFwiXCIuY29uY2F0KC1hbGlnbi5vZmZzZXRbMV0sIFwicHhcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZignbGVmdCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ1JpZ2h0JykgPj0gMCkge1xuICAgICAgICB0cmFuc2Zvcm1PcmlnaW4ubGVmdCA9IFwiXCIuY29uY2F0KHJlY3Qud2lkdGggLSBhbGlnbi5vZmZzZXRbMF0sIFwicHhcIik7XG4gICAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdyaWdodCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ0xlZnQnKSA+PSAwKSB7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbi5sZWZ0ID0gXCJcIi5jb25jYXQoLWFsaWduLm9mZnNldFswXSwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgZG9tTm9kZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIlwiLmNvbmNhdCh0cmFuc2Zvcm1PcmlnaW4ubGVmdCwgXCIgXCIpLmNvbmNhdCh0cmFuc2Zvcm1PcmlnaW4udG9wKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2F2ZVRvb2x0aXAgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMudG9vbHRpcCA9IG5vZGU7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlclRvb2x0aXAgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGdldENvbnRleHRQb3B1cENvbnRhaW5lciA9IF9yZWYuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG5cbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSxcbiAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5wcm9wcyxcbiAgICAgICAgICBzdGF0ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5zdGF0ZTtcblxuICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgICAgICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgICAgICAgIG9wZW5DbGFzc05hbWUgPSBwcm9wcy5vcGVuQ2xhc3NOYW1lLFxuICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgZ2V0VG9vbHRpcENvbnRhaW5lciA9IHByb3BzLmdldFRvb2x0aXBDb250YWluZXI7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3Rvb2x0aXAnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIHZpc2libGUgPSBzdGF0ZS52aXNpYmxlOyAvLyBIaWRlIHRvb2x0aXAgd2hlbiB0aGVyZSBpcyBubyB0aXRsZVxuXG4gICAgICBpZiAoISgndmlzaWJsZScgaW4gcHJvcHMpICYmIF90aGlzLmlzTm9UaXRsZSgpKSB7XG4gICAgICAgIHZpc2libGUgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkID0gX3RoaXMuZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW4oUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjaGlsZHJlbikpO1xuXG4gICAgICB2YXIgY2hpbGRQcm9wcyA9IGNoaWxkLnByb3BzO1xuICAgICAgdmFyIGNoaWxkQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2hpbGRQcm9wcy5jbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgb3BlbkNsYXNzTmFtZSB8fCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9wZW5cIiksIHRydWUpKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9yY1Rvb2x0aXBbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMsIHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGdldFRvb2x0aXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyIHx8IGdldFRvb2x0aXBDb250YWluZXIgfHwgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyLFxuICAgICAgICByZWY6IF90aGlzLnNhdmVUb29sdGlwLFxuICAgICAgICBidWlsdGluUGxhY2VtZW50czogX3RoaXMuZ2V0UGxhY2VtZW50cygpLFxuICAgICAgICBvdmVybGF5OiBvdmVybGF5IHx8IHRpdGxlIHx8ICcnLFxuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlLFxuICAgICAgICBvblZpc2libGVDaGFuZ2U6IF90aGlzLm9uVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgb25Qb3B1cEFsaWduOiBfdGhpcy5vblBvcHVwQWxpZ25cbiAgICAgIH0pLCB2aXNpYmxlID8gKDAsIFJlYWN0LmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjaGlsZENsc1xuICAgICAgfSkgOiBjaGlsZCk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZTogISFwcm9wcy52aXNpYmxlIHx8ICEhcHJvcHMuZGVmYXVsdFZpc2libGVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUb29sdGlwLCBbe1xuICAgIGtleTogXCJnZXRQb3B1cERvbU5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9vbHRpcC5nZXRQb3B1cERvbU5vZGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UGxhY2VtZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQbGFjZW1lbnRzKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IF90aGlzJHByb3BzLmJ1aWx0aW5QbGFjZW1lbnRzLFxuICAgICAgICAgIGFycm93UG9pbnRBdENlbnRlciA9IF90aGlzJHByb3BzLmFycm93UG9pbnRBdENlbnRlcixcbiAgICAgICAgICBhdXRvQWRqdXN0T3ZlcmZsb3cgPSBfdGhpcyRwcm9wcy5hdXRvQWRqdXN0T3ZlcmZsb3c7XG4gICAgICByZXR1cm4gYnVpbHRpblBsYWNlbWVudHMgfHwgKDAsIF9wbGFjZW1lbnRzW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgICBhcnJvd1BvaW50QXRDZW50ZXI6IGFycm93UG9pbnRBdENlbnRlcixcbiAgICAgICAgdmVydGljYWxBcnJvd1NoaWZ0OiA4LFxuICAgICAgICBhdXRvQWRqdXN0T3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvd1xuICAgICAgfSk7XG4gICAgfSAvLyBGaXggVG9vbHRpcCB3b24ndCBoaWRlIGF0IGRpc2FibGVkIGJ1dHRvblxuICAgIC8vIG1vdXNlIGV2ZW50cyBkb24ndCB0cmlnZ2VyIGF0IGRpc2FibGVkIGJ1dHRvbiBpbiBDaHJvbWVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3Rvb2x0aXAvaXNzdWVzLzE4XG5cbiAgfSwge1xuICAgIGtleTogXCJnZXREaXNhYmxlZENvbXBhdGlibGVDaGlsZHJlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREaXNhYmxlZENvbXBhdGlibGVDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgICBpZiAoKGVsZW1lbnQudHlwZS5fX0FOVF9CVVRUT04gfHwgZWxlbWVudC50eXBlID09PSAnYnV0dG9uJykgJiYgZWxlbWVudC5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyBQaWNrIHNvbWUgbGF5b3V0IHJlbGF0ZWQgc3R5bGUgcHJvcGVydGllcyB1cCB0byBzcGFuXG4gICAgICAgIC8vIFByZXZlbnQgbGF5b3V0IGJ1Z3MgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81MjU0XG4gICAgICAgIHZhciBfc3BsaXRPYmplY3QgPSBzcGxpdE9iamVjdChlbGVtZW50LnByb3BzLnN0eWxlLCBbJ3Bvc2l0aW9uJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbScsICdmbG9hdCcsICdkaXNwbGF5JywgJ3pJbmRleCddKSxcbiAgICAgICAgICAgIHBpY2tlZCA9IF9zcGxpdE9iamVjdC5waWNrZWQsXG4gICAgICAgICAgICBvbWl0dGVkID0gX3NwbGl0T2JqZWN0Lm9taXR0ZWQ7XG5cbiAgICAgICAgdmFyIHNwYW5TdHlsZSA9IF9leHRlbmRzKHtcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICB9LCBwaWNrZWQsIHtcbiAgICAgICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICAgICAgd2lkdGg6IGVsZW1lbnQucHJvcHMuYmxvY2sgPyAnMTAwJScgOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBidXR0b25TdHlsZSA9IF9leHRlbmRzKHt9LCBvbWl0dGVkLCB7XG4gICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjaGlsZCA9ICgwLCBSZWFjdC5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgICAgICBzdHlsZTogYnV0dG9uU3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBudWxsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIHN0eWxlOiBzcGFuU3R5bGUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBlbGVtZW50LnByb3BzLmNsYXNzTmFtZVxuICAgICAgICB9LCBjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc05vVGl0bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNOb1RpdGxlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdGl0bGUgPSBfdGhpcyRwcm9wczIudGl0bGUsXG4gICAgICAgICAgb3ZlcmxheSA9IF90aGlzJHByb3BzMi5vdmVybGF5O1xuICAgICAgcmV0dXJuICF0aXRsZSAmJiAhb3ZlcmxheTsgLy8gb3ZlcmxheSBmb3Igb2xkIHZlcnNpb24gY29tcGF0aWJpbGl0eVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclRvb2x0aXApO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoJ3Zpc2libGUnIGluIG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZpc2libGU6IG5leHRQcm9wcy52aXNpYmxlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUb29sdGlwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgdHJhbnNpdGlvbk5hbWU6ICd6b29tLWJpZy1mYXN0JyxcbiAgbW91c2VFbnRlckRlbGF5OiAwLjEsXG4gIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICBhcnJvd1BvaW50QXRDZW50ZXI6IGZhbHNlLFxuICBhdXRvQWRqdXN0T3ZlcmZsb3c6IHRydWVcbn07XG4oMCwgX3JlYWN0TGlmZWN5Y2xlc0NvbXBhdC5wb2x5ZmlsbCkoVG9vbHRpcCk7XG52YXIgX2RlZmF1bHQgPSBUb29sdGlwO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Rvb2x0aXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi90b29sdGlwXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhcm5pbmdcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFBvcG92ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcG92ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcG92ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcG92ZXIpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUG9wb3ZlcikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICBfdGhpcy5zYXZlVG9vbHRpcCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy50b29sdGlwID0gbm9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyUG9wb3ZlciA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG5cbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBwcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCJdKTtcblxuICAgICAgZGVsZXRlIHByb3BzLnRpdGxlO1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygncG9wb3ZlcicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfdG9vbHRpcFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgcmVmOiBfdGhpcy5zYXZlVG9vbHRpcCxcbiAgICAgICAgb3ZlcmxheTogX3RoaXMuZ2V0T3ZlcmxheShwcmVmaXhDbHMpXG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb3BvdmVyLCBbe1xuICAgIGtleTogXCJnZXRQb3B1cERvbU5vZGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9vbHRpcC5nZXRQb3B1cERvbU5vZGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0T3ZlcmxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPdmVybGF5KHByZWZpeENscykge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aXRsZSA9IF90aGlzJHByb3BzLnRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQgPSBfdGhpcyRwcm9wcy5jb250ZW50O1xuICAgICAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkoISgnb3ZlcmxheScgaW4gdGhpcy5wcm9wcyksICdQb3BvdmVyJywgJ2BvdmVybGF5YCBpcyByZW1vdmVkLCBwbGVhc2UgdXNlIGBjb250ZW50YCBpbnN0ZWFkLCAnICsgJ3NlZTogaHR0cHM6Ly91LmFudC5kZXNpZ24vcG9wb3Zlci1jb250ZW50Jyk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aXRsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRpdGxlXCIpXG4gICAgICB9LCB0aXRsZSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5uZXItY29udGVudFwiKVxuICAgICAgfSwgY29udGVudCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclBvcG92ZXIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3BvdmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFBvcG92ZXI7XG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgdHJhbnNpdGlvbk5hbWU6ICd6b29tLWJpZycsXG4gIHRyaWdnZXI6ICdob3ZlcicsXG4gIG1vdXNlRW50ZXJEZWxheTogMC4xLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgb3ZlcmxheVN0eWxlOiB7fVxufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQVCBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0J1xuaW1wb3J0IG9taXQgZnJvbSAnbG9kYXNoL29taXQnXG5pbXBvcnQgeyBCdXR0b24sIFBvcG92ZXIgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB3aXRoVGhlbWUgZnJvbSAnLi4vLi4vLi4vd2l0aFRoZW1lJ1xuaW1wb3J0IEN1c3RvbUJ1dHRvbiBmcm9tICcuLi8uLi8uLi9DdXN0b21CdXR0b24nXG5pbXBvcnQge1xuICBUZXh0RmlsdGVyQ29udGVudCxcbiAgU2VsZWN0RmlsdGVyQ29udGVudFxufSBmcm9tICcuL2NvbXBvbmVudHMvRmlsdGVyQ29udGVudCdcblxuY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQoQnV0dG9uLkdyb3VwKWBcbiAgbWFyZ2luOiA4cHg7XG5gXG5cbi8qKlxuICogSW5kZXggaW50byB0aGUgUG9wb3ZlckNvbnRlbnRcbiAqL1xuY29uc3QgUG9wb3ZlckNvbnRlbnRNYXAgPSB7XG4gIHRleHQ6IFRleHRGaWx0ZXJDb250ZW50LFxuICBzZWxlY3Q6IFNlbGVjdEZpbHRlckNvbnRlbnRcbn1cblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBidXR0b24gcG9wb3ZlciBsYWJlbFxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkTmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHByZWRpY2F0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKi9cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKGZpZWxkTmFtZSwgcHJlZGljYXRlID0gJycsIHZhbHVlID0gJycpID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxzdHJvbmc+e2ZpZWxkTmFtZX08L3N0cm9uZz4mbmJzcDt7cHJlZGljYXRlfSZuYnNwOzxzdHJvbmc+e3ZhbHVlfTwvc3Ryb25nPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG4vKipcbiAqIEdldHMgcG9wb3ZlciBjb250ZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKi9cbmNvbnN0IGdldFBvcG92ZXJDb250ZW50ID0gKHR5cGUsIHByb3BzKSA9PiB7XG4gIGNvbnN0IENvbXBvbmVudCA9IFBvcG92ZXJDb250ZW50TWFwW3R5cGVdXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbn1cblxuY29uc3QgRmlsdGVyID0gd2l0aFRoZW1lKHByb3BzID0+IHtcbiAgY29uc3QgW3BvcG92ZXJWaXNpYmxlLCBzZXRQb3BvdmVyVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IHtcbiAgICBmaWVsZE5hbWUsXG4gICAgZm9ybVZhbHVlLFxuICAgIGlkLFxuICAgIGxhYmVsLFxuICAgIHR5cGUsXG4gICAgb25DaGFuZ2UsXG4gICAgcmVtb3ZlRmlsdGVyXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IG9uUmVtb3ZlID0gKCkgPT4ge1xuICAgIHJlbW92ZUZpbHRlcihpZClcbiAgICBvbkNoYW5nZShvbWl0KGZvcm1WYWx1ZSwgW2lkXSkpXG4gIH1cblxuICBjb25zdCB7IHByZWRpY2F0ZSwgdWdWYWx1ZSB9ID0gZ2V0KGZvcm1WYWx1ZSwgaWQsIHt9KVxuXG4gIGNvbnN0IHBvcG92ZXJDb250ZW50ID0gZ2V0UG9wb3ZlckNvbnRlbnQodHlwZSwge1xuICAgIGZpZWxkTmFtZSxcbiAgICBmb3JtVmFsdWUsXG4gICAgaWQsXG4gICAgb25DaGFuZ2VcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxCdXR0b25Hcm91cD5cbiAgICAgIDxQb3BvdmVyXG4gICAgICAgIHRpdGxlPXtsYWJlbH1cbiAgICAgICAgdHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgICAgdmlzaWJsZT17cG9wb3ZlclZpc2libGV9XG4gICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgIGNvbnRlbnQ9e3BvcG92ZXJDb250ZW50fVxuICAgICAgICBvblZpc2libGVDaGFuZ2U9e3NldFBvcG92ZXJWaXNpYmxlfVxuICAgICAgPlxuICAgICAgICA8Q3VzdG9tQnV0dG9uIGNvbnRlbnQ9e2NyZWF0ZUxhYmVsKGxhYmVsLCBwcmVkaWNhdGUsIHVnVmFsdWUpfSAvPlxuICAgICAgPC9Qb3BvdmVyPlxuICAgICAgPEN1c3RvbUJ1dHRvbiBpY29uPVwiY2xvc2VcIiB0eXBlPVwiZGFuZ2VyXCIgb25DbGljaz17b25SZW1vdmV9IC8+XG4gICAgPC9CdXR0b25Hcm91cD5cbiAgKVxufSlcblxuRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFBULmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVtb3ZlRmlsdGVyOiBQVC5mdW5jLmlzUmVxdWlyZWRcbn1cblxuRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHt9XG5cbkZpbHRlci5kaXNwbGF5TmFtZSA9IEZpbHRlclxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIl9wbGFjZW1lbnRzIiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJyZXF1aXJlJCQzIiwiVG9vbHRpcCIsInJlcXVpcmUkJDIiLCJCdXR0b25Hcm91cCIsInN0eWxlZCIsIkdyb3VwIiwiUG9wb3ZlckNvbnRlbnRNYXAiLCJ0ZXh0IiwiVGV4dEZpbHRlckNvbnRlbnQiLCJzZWxlY3QiLCJTZWxlY3RGaWx0ZXJDb250ZW50IiwiY3JlYXRlTGFiZWwiLCJmaWVsZE5hbWUiLCJwcmVkaWNhdGUiLCJ2YWx1ZSIsImdldFBvcG92ZXJDb250ZW50IiwidHlwZSIsInByb3BzIiwiQ29tcG9uZW50IiwiRmlsdGVyIiwid2l0aFRoZW1lIiwidXNlU3RhdGUiLCJwb3BvdmVyVmlzaWJsZSIsInNldFBvcG92ZXJWaXNpYmxlIiwiZm9ybVZhbHVlIiwiaWQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwicmVtb3ZlRmlsdGVyIiwib25SZW1vdmUiLCJvbWl0IiwiZ2V0IiwidWdWYWx1ZSIsInBvcG92ZXJDb250ZW50IiwicHJvcFR5cGVzIiwiUFQiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImRlZmF1bHRQcm9wcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksa0JBQWtCLEdBQUc7RUFDdkIsT0FBTyxFQUFFLENBQUM7RUFDVixPQUFPLEVBQUUsQ0FBQztDQUNYLENBQUM7O0FBRUYsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLEFBQU8sSUFBSSxVQUFVLEdBQUc7RUFDdEIsSUFBSSxFQUFFO0lBQ0osTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsS0FBSyxFQUFFO0lBQ0wsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELEdBQUcsRUFBRTtJQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDZixZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELE1BQU0sRUFBRTtJQUNOLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxPQUFPLEVBQUU7SUFDUCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxPQUFPLEVBQUU7SUFDUCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxRQUFRLEVBQUU7SUFDUixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxRQUFRLEVBQUU7SUFDUixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsV0FBVyxFQUFFO0lBQ1gsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELFdBQVcsRUFBRTtJQUNYLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxVQUFVLEVBQUU7SUFDVixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsVUFBVSxFQUFFO0lBQ1YsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLFlBQVksRUFBRSxZQUFZO0dBQzNCO0NBQ0YsQ0FBQzs7QUMxRUYsSUFBSSxPQUFPLEdBQUcsVUFBVSxnQkFBZ0IsRUFBRTtFQUN4QyxTQUFTLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7O0VBRXJDLFNBQVMsT0FBTyxHQUFHO0lBQ2pCLGVBQWUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7O0lBRS9CLE9BQU8sMEJBQTBCLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztHQUNsRjs7RUFFRCxPQUFPLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsa0JBQWtCLEdBQUc7SUFDbkUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7O0lBRWpDLElBQUksT0FBTyxFQUFFO01BQ1gsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQzNCO0dBQ0YsQ0FBQzs7RUFFRixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLE1BQU0sR0FBRztJQUMzQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSztRQUNuQixPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87UUFDeEIsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO1FBQzVCLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDOztJQUVuQixPQUFPQSxVQUFLLENBQUMsYUFBYTtNQUN4QixLQUFLO01BQ0wsRUFBRSxTQUFTLEVBQUUsU0FBUyxHQUFHLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7TUFDNUQsT0FBTyxPQUFPLEtBQUssVUFBVSxHQUFHLE9BQU8sRUFBRSxHQUFHLE9BQU87S0FDcEQsQ0FBQztHQUNILENBQUM7O0VBRUYsT0FBTyxPQUFPLENBQUM7Q0FDaEIsQ0FBQ0EsVUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUVuQixPQUFPLENBQUMsU0FBUyxHQUFHO0VBQ2xCLFNBQVMsRUFBRUMsa0JBQVMsQ0FBQyxNQUFNO0VBQzNCLE9BQU8sRUFBRUEsa0JBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0Esa0JBQVMsQ0FBQyxJQUFJLEVBQUVBLGtCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVO0VBQ3pFLEVBQUUsRUFBRUEsa0JBQVMsQ0FBQyxNQUFNO0VBQ3BCLE9BQU8sRUFBRUEsa0JBQVMsQ0FBQyxHQUFHO0NBQ3ZCLENBQUM7O0FDakNGLElBQUksT0FBTyxHQUFHLFVBQVUsVUFBVSxFQUFFO0VBQ2xDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7O0VBRS9CLFNBQVMsT0FBTyxHQUFHO0lBQ2pCLElBQUksS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7O0lBRXZCLGVBQWUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7O0lBRS9CLEtBQUssSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtNQUNuRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOztJQUVELE9BQU8sSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsMEJBQTBCLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLGVBQWUsR0FBRyxZQUFZO01BQ3BLLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLO1VBQ3pCLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWTtVQUN2QyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU87VUFDN0IsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTO1VBQ2pDLEVBQUUsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDOztNQUV4QixPQUFPLENBQUNELFVBQUssQ0FBQyxhQUFhO1FBQ3pCLEtBQUs7UUFDTCxFQUFFLFNBQVMsRUFBRSxTQUFTLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7UUFDakQsWUFBWTtPQUNiLEVBQUVBLFVBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1FBQzlCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ3RCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLEVBQUUsRUFBRSxFQUFFO1FBQ04sT0FBTyxFQUFFLE9BQU87T0FDakIsQ0FBQyxDQUFDLENBQUM7S0FDTCxFQUFFLEtBQUssQ0FBQyxXQUFXLEdBQUcsVUFBVSxJQUFJLEVBQUU7TUFDckMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDdEIsRUFBRSxLQUFLLENBQUMsRUFBRSwwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDcEQ7O0VBRUQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsU0FBUyxlQUFlLEdBQUc7SUFDN0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO0dBQ3ZDLENBQUM7O0VBRUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxNQUFNLEdBQUc7SUFDM0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDbkIsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQjtRQUMxQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87UUFDeEIsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlO1FBQ3hDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZTtRQUN4QyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVk7UUFDbEMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO1FBQzVCLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUTtRQUMxQixlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWU7UUFDeEMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQjtRQUM5QyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7UUFDdEMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTO1FBQzVCLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUztRQUM1QixLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUs7UUFDcEIsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQjtRQUNsRCxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7UUFDdEMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQjtRQUNoRCxTQUFTLEdBQUcsd0JBQXdCLENBQUMsTUFBTSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixDQUFDLENBQUMsQ0FBQzs7SUFFaFUsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6QyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO01BQzNCLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDOUM7SUFDRCxPQUFPQSxVQUFLLENBQUMsYUFBYTtNQUN4QixPQUFPO01BQ1AsUUFBUSxDQUFDO1FBQ1AsY0FBYyxFQUFFLGdCQUFnQjtRQUNoQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVc7UUFDckIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlO1FBQzNCLE1BQU0sRUFBRSxPQUFPO1FBQ2YsaUJBQWlCLEVBQUUsVUFBVTtRQUM3QixjQUFjLEVBQUUsU0FBUztRQUN6QixVQUFVLEVBQUUsS0FBSztRQUNqQixpQkFBaUIsRUFBRSxtQkFBbUI7UUFDdEMsb0JBQW9CLEVBQUUsZUFBZTtRQUNyQyx1QkFBdUIsRUFBRSxrQkFBa0I7UUFDM0MsbUJBQW1CLEVBQUUsY0FBYztRQUNuQyxjQUFjLEVBQUUsU0FBUztRQUN6QixtQkFBbUIsRUFBRSxjQUFjO1FBQ25DLGtCQUFrQixFQUFFLG9CQUFvQjtRQUN4QyxlQUFlLEVBQUUsZUFBZTtRQUNoQyxVQUFVLEVBQUUsWUFBWTtRQUN4QixlQUFlLEVBQUUsZUFBZTtPQUNqQyxFQUFFLFVBQVUsQ0FBQztNQUNkLFFBQVE7S0FDVCxDQUFDO0dBQ0gsQ0FBQzs7RUFFRixPQUFPLE9BQU8sQ0FBQztDQUNoQixDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUViLE9BQU8sQ0FBQyxTQUFTLEdBQUc7RUFDbEIsT0FBTyxFQUFFQyxrQkFBUyxDQUFDLEdBQUc7RUFDdEIsUUFBUSxFQUFFQSxrQkFBUyxDQUFDLEdBQUc7RUFDdkIsY0FBYyxFQUFFQSxrQkFBUyxDQUFDLElBQUk7RUFDOUIsT0FBTyxFQUFFQSxrQkFBUyxDQUFDLElBQUk7RUFDdkIsU0FBUyxFQUFFQSxrQkFBUyxDQUFDLE1BQU07RUFDM0IsY0FBYyxFQUFFQSxrQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDQSxrQkFBUyxDQUFDLE1BQU0sRUFBRUEsa0JBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUN6RSxTQUFTLEVBQUVBLGtCQUFTLENBQUMsR0FBRztFQUN4QixlQUFlLEVBQUVBLGtCQUFTLENBQUMsSUFBSTtFQUMvQixrQkFBa0IsRUFBRUEsa0JBQVMsQ0FBQyxJQUFJO0VBQ2xDLE9BQU8sRUFBRUEsa0JBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0Esa0JBQVMsQ0FBQyxJQUFJLEVBQUVBLGtCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVO0VBQ3pFLFlBQVksRUFBRUEsa0JBQVMsQ0FBQyxNQUFNO0VBQzlCLGdCQUFnQixFQUFFQSxrQkFBUyxDQUFDLE1BQU07RUFDbEMsU0FBUyxFQUFFQSxrQkFBUyxDQUFDLE1BQU07RUFDM0IsZUFBZSxFQUFFQSxrQkFBUyxDQUFDLE1BQU07RUFDakMsZUFBZSxFQUFFQSxrQkFBUyxDQUFDLE1BQU07RUFDakMsbUJBQW1CLEVBQUVBLGtCQUFTLENBQUMsSUFBSTtFQUNuQyxvQkFBb0IsRUFBRUEsa0JBQVMsQ0FBQyxJQUFJO0VBQ3BDLEtBQUssRUFBRUEsa0JBQVMsQ0FBQyxNQUFNO0VBQ3ZCLFlBQVksRUFBRUEsa0JBQVMsQ0FBQyxHQUFHO0VBQzNCLEVBQUUsRUFBRUEsa0JBQVMsQ0FBQyxNQUFNO0NBQ3JCLENBQUM7QUFDRixPQUFPLENBQUMsWUFBWSxHQUFHO0VBQ3JCLFNBQVMsRUFBRSxZQUFZO0VBQ3ZCLGVBQWUsRUFBRSxDQUFDO0VBQ2xCLG9CQUFvQixFQUFFLEtBQUs7RUFDM0IsZUFBZSxFQUFFLEdBQUc7RUFDcEIsS0FBSyxFQUFFLEVBQUU7RUFDVCxTQUFTLEVBQUUsT0FBTztFQUNsQixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7RUFDbEIsWUFBWSxFQUFFLElBQUk7Q0FDbkIsQ0FBQzs7O0FDdElGO0FBRUEsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQzFCLElBQUksa0JBQWtCLEdBQUc7RUFDdkIsT0FBTyxFQUFFLENBQUM7RUFDVixPQUFPLEVBQUUsQ0FBQztDQUNYLENBQUM7O0FBRUYsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLElBQUksVUFBVSxHQUFHLGtCQUFrQixHQUFHO0VBQ3BDLElBQUksRUFBRTtJQUNKLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZixZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELEtBQUssRUFBRTtJQUNMLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxHQUFHLEVBQUU7SUFDSCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2YsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxNQUFNLEVBQUU7SUFDTixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsT0FBTyxFQUFFO0lBQ1AsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNmLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsT0FBTyxFQUFFO0lBQ1AsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsUUFBUSxFQUFFO0lBQ1IsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNmLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsUUFBUSxFQUFFO0lBQ1IsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELFdBQVcsRUFBRTtJQUNYLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsWUFBWSxFQUFFLFlBQVk7R0FDM0I7RUFDRCxXQUFXLEVBQUU7SUFDWCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNkLFlBQVksRUFBRSxZQUFZO0dBQzNCO0VBQ0QsVUFBVSxFQUFFO0lBQ1YsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNwQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxZQUFZLEVBQUUsWUFBWTtHQUMzQjtFQUNELFVBQVUsRUFBRTtJQUNWLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDcEIsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZixZQUFZLEVBQUUsWUFBWTtHQUMzQjtDQUNGLENBQUM7O0FBRUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVU7Ozs7Ozs7QUNyRi9CO0FBRUEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0VBQzNDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQyxDQUFDO0FBQ0gsMEJBQTBCLEdBQUcsa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLGFBQWEsQ0FBQzs7OztBQUluQyxTQUFTLFFBQVEsR0FBRyxFQUFFLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFVBQVUsTUFBTSxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRSxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUU7O0FBRTdULElBQUkseUJBQXlCLEdBQUc7RUFDOUIsT0FBTyxFQUFFLENBQUM7RUFDVixPQUFPLEVBQUUsQ0FBQztDQUNYLENBQUM7QUFDRixJQUFJLDBCQUEwQixHQUFHO0VBQy9CLE9BQU8sRUFBRSxDQUFDO0VBQ1YsT0FBTyxFQUFFLENBQUM7Q0FDWCxDQUFDO0FBQ0YsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRTFCLFNBQVMsa0JBQWtCLENBQUMsa0JBQWtCLEVBQUU7RUFDOUMsSUFBSSxPQUFPLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtJQUMzQyxPQUFPLGtCQUFrQixHQUFHLHlCQUF5QixHQUFHLDBCQUEwQixDQUFDO0dBQ3BGOztFQUVELE9BQU8sUUFBUSxDQUFDLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0NBQ3JFOztBQUVELFNBQVMsYUFBYSxHQUFHO0VBQ3ZCLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUNwRixJQUFJLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxVQUFVO01BQ3RDLFVBQVUsR0FBRyxrQkFBa0IsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCO01BQ25FLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0I7TUFDbkQsb0JBQW9CLEdBQUcscUJBQXFCLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLHFCQUFxQjtNQUNwRixxQkFBcUIsR0FBRyxNQUFNLENBQUMsa0JBQWtCO01BQ2pELGtCQUFrQixHQUFHLHFCQUFxQixLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxxQkFBcUI7TUFDbEYscUJBQXFCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQjtNQUNqRCxrQkFBa0IsR0FBRyxxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcscUJBQXFCLENBQUM7RUFDekYsSUFBSSxZQUFZLEdBQUc7SUFDakIsSUFBSSxFQUFFO01BQ0osTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztNQUNwQixNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDaEI7SUFDRCxLQUFLLEVBQUU7TUFDTCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ3BCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDZjtJQUNELEdBQUcsRUFBRTtNQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7TUFDcEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QsTUFBTSxFQUFFO01BQ04sTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztNQUNwQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEVBQUU7TUFDUCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ3BCLE1BQU0sRUFBRSxDQUFDLEVBQUUsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbkQ7SUFDRCxPQUFPLEVBQUU7TUFDUCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ3BCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLENBQUM7S0FDakQ7SUFDRCxRQUFRLEVBQUU7TUFDUixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ3BCLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNoRDtJQUNELFFBQVEsRUFBRTtNQUNSLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7TUFDcEIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLENBQUM7S0FDaEQ7SUFDRCxXQUFXLEVBQUU7TUFDWCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ3BCLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsRUFBRSxDQUFDLENBQUM7S0FDL0M7SUFDRCxXQUFXLEVBQUU7TUFDWCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ3BCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxrQkFBa0IsR0FBRyxVQUFVLENBQUM7S0FDN0M7SUFDRCxVQUFVLEVBQUU7TUFDVixNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ3BCLE1BQU0sRUFBRSxDQUFDLEVBQUUsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xEO0lBQ0QsVUFBVSxFQUFFO01BQ1YsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztNQUNwQixNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsR0FBRyxVQUFVLENBQUM7S0FDOUM7R0FDRixDQUFDO0VBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEVBQUU7SUFDL0MsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUM5RSxRQUFRLEVBQUUsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7TUFDaEQsWUFBWSxFQUFFLFlBQVk7S0FDM0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUVDLFlBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDN0MsUUFBUSxFQUFFLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDO0tBQ2pELENBQUMsQ0FBQztJQUNILFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0dBQ3RDLENBQUMsQ0FBQztFQUNILE9BQU8sWUFBWSxDQUFDOzs7Ozs7OztBQ25HdEI7QUFFQSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFDSCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7O0FBRTVCLElBQUksS0FBSyxHQUFHLHVCQUF1QixDQUFDQyxVQUFnQixDQUFDLENBQUM7Ozs7QUFJdEQsSUFBSSxVQUFVLEdBQUcsc0JBQXNCLENBQUNDLE9BQXFCLENBQUMsQ0FBQzs7QUFFL0QsSUFBSSxXQUFXLEdBQUcsc0JBQXNCLENBQUMsVUFBcUIsQ0FBQyxDQUFDOztBQUVoRSxJQUFJLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQ0MsWUFBdUIsQ0FBQyxDQUFDOzs7O0FBSWxFLFNBQVMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTs7QUFFakcsU0FBUyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsY0FBYyxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUU7O0FBRTNkLFNBQVMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsRUFBRSxPQUFPLEdBQUcsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxHQUFH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LENBQUMsRUFBRTs7QUFFdEssU0FBUyxTQUFTLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksT0FBTyxVQUFVLEtBQUssVUFBVSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUUsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsZUFBZSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUFFOztBQUVqWSxTQUFTLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLElBQUksU0FBUyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7O0FBRTFLLFNBQVMsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksVUFBVSxNQUFNLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxF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QUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JFLGVBQWUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDdEUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVFLGVBQWUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDekQ7O01BRUQsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyRSxlQUFlLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO09BQ3RFLE1BQU0sSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUM1RSxlQUFlLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO09BQzFEOztNQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElB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

import React__default from 'react';
import PropTypes__default from 'prop-types';
import { c as createCommonjsModule, u as unwrapExports } from './chunk-02ddfd93.js';
import { _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, e as _createClass } from './chunk-f94271b9.js';
import ReactDOM__default from 'react-dom';
import { _ as _assign } from './chunk-886bee81.js';

function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

var EventBaseObject_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },

  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },

  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },

  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports["default"];
});

unwrapExports(EventBaseObject_1);

var EventObject = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



var _EventBaseObject2 = _interopRequireDefault(EventBaseObject_1);



var _objectAssign2 = _interopRequireDefault(_assign);

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = undefined;
    var deltaY = undefined;
    var delta = undefined;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = undefined;
    var doc = undefined;
    var body = undefined;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2['default'].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = undefined;
  var l = undefined;
  var prop = undefined;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2['default'].prototype;

(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },

  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports['default'] = DomEventObject;
module.exports = exports['default'];
});

unwrapExports(EventObject);

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = addEventListener;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



var _EventObject2 = _interopRequireDefault(EventObject);

function addEventListener(target, eventType, callback, option) {
  function wrapCallback(e) {
    var ne = new _EventObject2['default'](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    var _ret = (function () {
      var useCapture = false;
      if (typeof option === 'object') {
        useCapture = option.capture || false;
      } else if (typeof option === 'boolean') {
        useCapture = option;
      }

      target.addEventListener(eventType, wrapCallback, option || false);

      return {
        v: {
          remove: function remove() {
            target.removeEventListener(eventType, wrapCallback, useCapture);
          }
        }
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}

module.exports = exports['default'];
});

var addDOMEventListener = unwrapExports(lib);

var ContainerRender = function (_React$Component) {
  _inherits(ContainerRender, _React$Component);

  function ContainerRender() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ContainerRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
      if (_this.container) {
        ReactDOM__default.unmountComponentAtNode(_this.container);
        _this.container.parentNode.removeChild(_this.container);
        _this.container = null;
      }
    }, _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }
        ReactDOM__default.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ContainerRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(React__default.Component);

ContainerRender.propTypes = {
  autoMount: PropTypes__default.bool,
  autoDestroy: PropTypes__default.bool,
  visible: PropTypes__default.bool,
  forceRender: PropTypes__default.bool,
  parent: PropTypes__default.any,
  getComponent: PropTypes__default.func.isRequired,
  getContainer: PropTypes__default.func.isRequired,
  children: PropTypes__default.func.isRequired
};
ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};

var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: 'createContainer',
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: 'removeContainer',
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this._container) {
        return ReactDOM__default.createPortal(this.props.children, this._container);
      }
      return null;
    }
  }]);

  return Portal;
}(React__default.Component);

Portal.propTypes = {
  getContainer: PropTypes__default.func.isRequired,
  children: PropTypes__default.node.isRequired,
  didUpdate: PropTypes__default.func
};

export { ContainerRender as C, Portal as P, addDOMEventListener as a, contains as c, lib as l };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstM2M2MjZhNmQuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9jb250YWlucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9hZGQtZG9tLWV2ZW50LWxpc3RlbmVyL2xpYi9FdmVudEJhc2VPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvRXZlbnRPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvYWRkLWRvbS1ldmVudC1saXN0ZW5lci9saWIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Db250YWluZXJSZW5kZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Qb3J0YWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFpbnMocm9vdCwgbikge1xuICB2YXIgbm9kZSA9IG47XG4gIHdoaWxlIChub2RlKSB7XG4gICAgaWYgKG5vZGUgPT09IHJvb3QpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsIi8qKlxuICogQGlnbm9yZVxuICogYmFzZSBldmVudCBvYmplY3QgZm9yIGN1c3RvbSBhbmQgZG9tIGV2ZW50LlxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEJhc2VPYmplY3QoKSB7XG4gIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG4gIHRoaXMuY3VycmVudFRhcmdldCA9IHVuZGVmaW5lZDtcbn1cblxuRXZlbnRCYXNlT2JqZWN0LnByb3RvdHlwZSA9IHtcbiAgaXNFdmVudE9iamVjdDogMSxcblxuICBjb25zdHJ1Y3RvcjogRXZlbnRCYXNlT2JqZWN0LFxuXG4gIGlzRGVmYXVsdFByZXZlbnRlZDogcmV0dXJuRmFsc2UsXG5cbiAgaXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXG4gIGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuICBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuXG4gIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICB9LFxuXG4gIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogZnVuY3Rpb24gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkge1xuICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuICAgIC8vIGZpeGVkIDEuMlxuICAgIC8vIGNhbGwgc3RvcFByb3BhZ2F0aW9uIGltcGxpY2l0bHlcbiAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuXG4gIGhhbHQ6IGZ1bmN0aW9uIGhhbHQoaW1tZWRpYXRlKSB7XG4gICAgaWYgKGltbWVkaWF0ZSkge1xuICAgICAgdGhpcy5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV2ZW50QmFzZU9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiLyoqXG4gKiBAaWdub3JlXG4gKiBldmVudCBvYmplY3QgZm9yIGRvbVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfRXZlbnRCYXNlT2JqZWN0ID0gcmVxdWlyZSgnLi9FdmVudEJhc2VPYmplY3QnKTtcblxudmFyIF9FdmVudEJhc2VPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXZlbnRCYXNlT2JqZWN0KTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbnZhciBUUlVFID0gdHJ1ZTtcbnZhciBGQUxTRSA9IGZhbHNlO1xudmFyIGNvbW1vblByb3BzID0gWydhbHRLZXknLCAnYnViYmxlcycsICdjYW5jZWxhYmxlJywgJ2N0cmxLZXknLCAnY3VycmVudFRhcmdldCcsICdldmVudFBoYXNlJywgJ21ldGFLZXknLCAnc2hpZnRLZXknLCAndGFyZ2V0JywgJ3RpbWVTdGFtcCcsICd2aWV3JywgJ3R5cGUnXTtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQodykge1xuICByZXR1cm4gdyA9PT0gbnVsbCB8fCB3ID09PSB1bmRlZmluZWQ7XG59XG5cbnZhciBldmVudE5vcm1hbGl6ZXJzID0gW3tcbiAgcmVnOiAvXmtleS8sXG4gIHByb3BzOiBbJ2NoYXInLCAnY2hhckNvZGUnLCAna2V5JywgJ2tleUNvZGUnLCAnd2hpY2gnXSxcbiAgZml4OiBmdW5jdGlvbiBmaXgoZXZlbnQsIG5hdGl2ZUV2ZW50KSB7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50LndoaWNoKSkge1xuICAgICAgZXZlbnQud2hpY2ggPSAhaXNOdWxsT3JVbmRlZmluZWQobmF0aXZlRXZlbnQuY2hhckNvZGUpID8gbmF0aXZlRXZlbnQuY2hhckNvZGUgOiBuYXRpdmVFdmVudC5rZXlDb2RlO1xuICAgIH1cblxuICAgIC8vIGFkZCBtZXRhS2V5IHRvIG5vbi1NYWMgYnJvd3NlcnMgKHVzZSBjdHJsIGZvciBQQyAncyBhbmQgTWV0YSBmb3IgTWFjcylcbiAgICBpZiAoZXZlbnQubWV0YUtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBldmVudC5tZXRhS2V5ID0gZXZlbnQuY3RybEtleTtcbiAgICB9XG4gIH1cbn0sIHtcbiAgcmVnOiAvXnRvdWNoLyxcbiAgcHJvcHM6IFsndG91Y2hlcycsICdjaGFuZ2VkVG91Y2hlcycsICd0YXJnZXRUb3VjaGVzJ11cbn0sIHtcbiAgcmVnOiAvXmhhc2hjaGFuZ2UkLyxcbiAgcHJvcHM6IFsnbmV3VVJMJywgJ29sZFVSTCddXG59LCB7XG4gIHJlZzogL15nZXN0dXJlY2hhbmdlJC9pLFxuICBwcm9wczogWydyb3RhdGlvbicsICdzY2FsZSddXG59LCB7XG4gIHJlZzogL14obW91c2V3aGVlbHxET01Nb3VzZVNjcm9sbCkkLyxcbiAgcHJvcHM6IFtdLFxuICBmaXg6IGZ1bmN0aW9uIGZpeChldmVudCwgbmF0aXZlRXZlbnQpIHtcbiAgICB2YXIgZGVsdGFYID0gdW5kZWZpbmVkO1xuICAgIHZhciBkZWx0YVkgPSB1bmRlZmluZWQ7XG4gICAgdmFyIGRlbHRhID0gdW5kZWZpbmVkO1xuICAgIHZhciB3aGVlbERlbHRhID0gbmF0aXZlRXZlbnQud2hlZWxEZWx0YTtcbiAgICB2YXIgYXhpcyA9IG5hdGl2ZUV2ZW50LmF4aXM7XG4gICAgdmFyIHdoZWVsRGVsdGFZID0gbmF0aXZlRXZlbnQud2hlZWxEZWx0YVk7XG4gICAgdmFyIHdoZWVsRGVsdGFYID0gbmF0aXZlRXZlbnQud2hlZWxEZWx0YVg7XG4gICAgdmFyIGRldGFpbCA9IG5hdGl2ZUV2ZW50LmRldGFpbDtcblxuICAgIC8vIGllL3dlYmtpdFxuICAgIGlmICh3aGVlbERlbHRhKSB7XG4gICAgICBkZWx0YSA9IHdoZWVsRGVsdGEgLyAxMjA7XG4gICAgfVxuXG4gICAgLy8gZ2Vja29cbiAgICBpZiAoZGV0YWlsKSB7XG4gICAgICAvLyBwcmVzcyBjb250cm9sIGUuZGV0YWlsID09IDEgZWxzZSBlLmRldGFpbCA9PSAzXG4gICAgICBkZWx0YSA9IDAgLSAoZGV0YWlsICUgMyA9PT0gMCA/IGRldGFpbCAvIDMgOiBkZXRhaWwpO1xuICAgIH1cblxuICAgIC8vIEdlY2tvXG4gICAgaWYgKGF4aXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGF4aXMgPT09IGV2ZW50LkhPUklaT05UQUxfQVhJUykge1xuICAgICAgICBkZWx0YVkgPSAwO1xuICAgICAgICBkZWx0YVggPSAwIC0gZGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGF4aXMgPT09IGV2ZW50LlZFUlRJQ0FMX0FYSVMpIHtcbiAgICAgICAgZGVsdGFYID0gMDtcbiAgICAgICAgZGVsdGFZID0gZGVsdGE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2Via2l0XG4gICAgaWYgKHdoZWVsRGVsdGFZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlbHRhWSA9IHdoZWVsRGVsdGFZIC8gMTIwO1xuICAgIH1cbiAgICBpZiAod2hlZWxEZWx0YVggIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVsdGFYID0gLTEgKiB3aGVlbERlbHRhWCAvIDEyMDtcbiAgICB9XG5cbiAgICAvLyDpu5jorqQgZGVsdGFZIChpZSlcbiAgICBpZiAoIWRlbHRhWCAmJiAhZGVsdGFZKSB7XG4gICAgICBkZWx0YVkgPSBkZWx0YTtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFYICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGFYIG9mIG1vdXNld2hlZWwgZXZlbnRcbiAgICAgICAqIEBwcm9wZXJ0eSBkZWx0YVhcbiAgICAgICAqIEBtZW1iZXIgRXZlbnQuRG9tRXZlbnQuT2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGV2ZW50LmRlbHRhWCA9IGRlbHRhWDtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogZGVsdGFZIG9mIG1vdXNld2hlZWwgZXZlbnRcbiAgICAgICAqIEBwcm9wZXJ0eSBkZWx0YVlcbiAgICAgICAqIEBtZW1iZXIgRXZlbnQuRG9tRXZlbnQuT2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGV2ZW50LmRlbHRhWSA9IGRlbHRhWTtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLyoqXG4gICAgICAgKiBkZWx0YSBvZiBtb3VzZXdoZWVsIGV2ZW50XG4gICAgICAgKiBAcHJvcGVydHkgZGVsdGFcbiAgICAgICAqIEBtZW1iZXIgRXZlbnQuRG9tRXZlbnQuT2JqZWN0XG4gICAgICAgKi9cbiAgICAgIGV2ZW50LmRlbHRhID0gZGVsdGE7XG4gICAgfVxuICB9XG59LCB7XG4gIHJlZzogL15tb3VzZXxjb250ZXh0bWVudXxjbGlja3xtc3BvaW50ZXJ8KF5ET01Nb3VzZVNjcm9sbCQpL2ksXG4gIHByb3BzOiBbJ2J1dHRvbnMnLCAnY2xpZW50WCcsICdjbGllbnRZJywgJ2J1dHRvbicsICdvZmZzZXRYJywgJ3JlbGF0ZWRUYXJnZXQnLCAnd2hpY2gnLCAnZnJvbUVsZW1lbnQnLCAndG9FbGVtZW50JywgJ29mZnNldFknLCAncGFnZVgnLCAncGFnZVknLCAnc2NyZWVuWCcsICdzY3JlZW5ZJ10sXG4gIGZpeDogZnVuY3Rpb24gZml4KGV2ZW50LCBuYXRpdmVFdmVudCkge1xuICAgIHZhciBldmVudERvYyA9IHVuZGVmaW5lZDtcbiAgICB2YXIgZG9jID0gdW5kZWZpbmVkO1xuICAgIHZhciBib2R5ID0gdW5kZWZpbmVkO1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIGJ1dHRvbiA9IG5hdGl2ZUV2ZW50LmJ1dHRvbjtcblxuICAgIC8vIENhbGN1bGF0ZSBwYWdlWC9ZIGlmIG1pc3NpbmcgYW5kIGNsaWVudFgvWSBhdmFpbGFibGVcbiAgICBpZiAodGFyZ2V0ICYmIGlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50LnBhZ2VYKSAmJiAhaXNOdWxsT3JVbmRlZmluZWQobmF0aXZlRXZlbnQuY2xpZW50WCkpIHtcbiAgICAgIGV2ZW50RG9jID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgICBkb2MgPSBldmVudERvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBib2R5ID0gZXZlbnREb2MuYm9keTtcbiAgICAgIGV2ZW50LnBhZ2VYID0gbmF0aXZlRXZlbnQuY2xpZW50WCArIChkb2MgJiYgZG9jLnNjcm9sbExlZnQgfHwgYm9keSAmJiBib2R5LnNjcm9sbExlZnQgfHwgMCkgLSAoZG9jICYmIGRvYy5jbGllbnRMZWZ0IHx8IGJvZHkgJiYgYm9keS5jbGllbnRMZWZ0IHx8IDApO1xuICAgICAgZXZlbnQucGFnZVkgPSBuYXRpdmVFdmVudC5jbGllbnRZICsgKGRvYyAmJiBkb2Muc2Nyb2xsVG9wIHx8IGJvZHkgJiYgYm9keS5zY3JvbGxUb3AgfHwgMCkgLSAoZG9jICYmIGRvYy5jbGllbnRUb3AgfHwgYm9keSAmJiBib2R5LmNsaWVudFRvcCB8fCAwKTtcbiAgICB9XG5cbiAgICAvLyB3aGljaCBmb3IgY2xpY2s6IDEgPT09IGxlZnQ7IDIgPT09IG1pZGRsZTsgMyA9PT0gcmlnaHRcbiAgICAvLyBkbyBub3QgdXNlIGJ1dHRvblxuICAgIGlmICghZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChidXR0b24gJiAxKSB7XG4gICAgICAgIGV2ZW50LndoaWNoID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uICYgMikge1xuICAgICAgICBldmVudC53aGljaCA9IDM7XG4gICAgICB9IGVsc2UgaWYgKGJ1dHRvbiAmIDQpIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQud2hpY2ggPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGFkZCByZWxhdGVkVGFyZ2V0LCBpZiBuZWNlc3NhcnlcbiAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgZXZlbnQuZnJvbUVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5mcm9tRWxlbWVudCA9PT0gdGFyZ2V0ID8gZXZlbnQudG9FbGVtZW50IDogZXZlbnQuZnJvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG59XTtcblxuZnVuY3Rpb24gcmV0VHJ1ZSgpIHtcbiAgcmV0dXJuIFRSVUU7XG59XG5cbmZ1bmN0aW9uIHJldEZhbHNlKCkge1xuICByZXR1cm4gRkFMU0U7XG59XG5cbmZ1bmN0aW9uIERvbUV2ZW50T2JqZWN0KG5hdGl2ZUV2ZW50KSB7XG4gIHZhciB0eXBlID0gbmF0aXZlRXZlbnQudHlwZTtcblxuICB2YXIgaXNOYXRpdmUgPSB0eXBlb2YgbmF0aXZlRXZlbnQuc3RvcFByb3BhZ2F0aW9uID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBuYXRpdmVFdmVudC5jYW5jZWxCdWJibGUgPT09ICdib29sZWFuJztcblxuICBfRXZlbnRCYXNlT2JqZWN0MlsnZGVmYXVsdCddLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5uYXRpdmVFdmVudCA9IG5hdGl2ZUV2ZW50O1xuXG4gIC8vIGluIGNhc2UgZG9tIGV2ZW50IGhhcyBiZWVuIG1hcmsgYXMgZGVmYXVsdCBwcmV2ZW50ZWQgYnkgbG93ZXIgZG9tIG5vZGVcbiAgdmFyIGlzRGVmYXVsdFByZXZlbnRlZCA9IHJldEZhbHNlO1xuICBpZiAoJ2RlZmF1bHRQcmV2ZW50ZWQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgnZ2V0UHJldmVudERlZmF1bHQnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjkxMTUxXG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQuZ2V0UHJldmVudERlZmF1bHQoKSA/IHJldFRydWUgOiByZXRGYWxzZTtcbiAgfSBlbHNlIGlmICgncmV0dXJuVmFsdWUnIGluIG5hdGl2ZUV2ZW50KSB7XG4gICAgaXNEZWZhdWx0UHJldmVudGVkID0gbmF0aXZlRXZlbnQucmV0dXJuVmFsdWUgPT09IEZBTFNFID8gcmV0VHJ1ZSA6IHJldEZhbHNlO1xuICB9XG5cbiAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBpc0RlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgdmFyIGZpeEZucyA9IFtdO1xuICB2YXIgZml4Rm4gPSB1bmRlZmluZWQ7XG4gIHZhciBsID0gdW5kZWZpbmVkO1xuICB2YXIgcHJvcCA9IHVuZGVmaW5lZDtcbiAgdmFyIHByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KCk7XG5cbiAgZXZlbnROb3JtYWxpemVycy5mb3JFYWNoKGZ1bmN0aW9uIChub3JtYWxpemVyKSB7XG4gICAgaWYgKHR5cGUubWF0Y2gobm9ybWFsaXplci5yZWcpKSB7XG4gICAgICBwcm9wcyA9IHByb3BzLmNvbmNhdChub3JtYWxpemVyLnByb3BzKTtcbiAgICAgIGlmIChub3JtYWxpemVyLmZpeCkge1xuICAgICAgICBmaXhGbnMucHVzaChub3JtYWxpemVyLmZpeCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsID0gcHJvcHMubGVuZ3RoO1xuXG4gIC8vIGNsb25lIHByb3BlcnRpZXMgb2YgdGhlIG9yaWdpbmFsIGV2ZW50IG9iamVjdFxuICB3aGlsZSAobCkge1xuICAgIHByb3AgPSBwcm9wc1stLWxdO1xuICAgIHRoaXNbcHJvcF0gPSBuYXRpdmVFdmVudFtwcm9wXTtcbiAgfVxuXG4gIC8vIGZpeCB0YXJnZXQgcHJvcGVydHksIGlmIG5lY2Vzc2FyeVxuICBpZiAoIXRoaXMudGFyZ2V0ICYmIGlzTmF0aXZlKSB7XG4gICAgdGhpcy50YXJnZXQgPSBuYXRpdmVFdmVudC5zcmNFbGVtZW50IHx8IGRvY3VtZW50OyAvLyBzcmNFbGVtZW50IG1pZ2h0IG5vdCBiZSBkZWZpbmVkIGVpdGhlclxuICB9XG5cbiAgLy8gY2hlY2sgaWYgdGFyZ2V0IGlzIGEgdGV4dCBub2RlIChzYWZhcmkpXG4gIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5ub2RlVHlwZSA9PT0gMykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGwgPSBmaXhGbnMubGVuZ3RoO1xuXG4gIHdoaWxlIChsKSB7XG4gICAgZml4Rm4gPSBmaXhGbnNbLS1sXTtcbiAgICBmaXhGbih0aGlzLCBuYXRpdmVFdmVudCk7XG4gIH1cblxuICB0aGlzLnRpbWVTdGFtcCA9IG5hdGl2ZUV2ZW50LnRpbWVTdGFtcCB8fCBEYXRlLm5vdygpO1xufVxuXG52YXIgRXZlbnRCYXNlT2JqZWN0UHJvdG8gPSBfRXZlbnRCYXNlT2JqZWN0MlsnZGVmYXVsdCddLnByb3RvdHlwZTtcblxuKDAsIF9vYmplY3RBc3NpZ24yWydkZWZhdWx0J10pKERvbUV2ZW50T2JqZWN0LnByb3RvdHlwZSwgRXZlbnRCYXNlT2JqZWN0UHJvdG8sIHtcbiAgY29uc3RydWN0b3I6IERvbUV2ZW50T2JqZWN0LFxuXG4gIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdCgpIHtcbiAgICB2YXIgZSA9IHRoaXMubmF0aXZlRXZlbnQ7XG5cbiAgICAvLyBpZiBwcmV2ZW50RGVmYXVsdCBleGlzdHMgcnVuIGl0IG9uIHRoZSBvcmlnaW5hbCBldmVudFxuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSBzZXQgdGhlIHJldHVyblZhbHVlIHByb3BlcnR5IG9mIHRoZSBvcmlnaW5hbCBldmVudCB0byBGQUxTRSAoSUUpXG4gICAgICBlLnJldHVyblZhbHVlID0gRkFMU0U7XG4gICAgfVxuXG4gICAgRXZlbnRCYXNlT2JqZWN0UHJvdG8ucHJldmVudERlZmF1bHQuY2FsbCh0aGlzKTtcbiAgfSxcblxuICBzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMubmF0aXZlRXZlbnQ7XG5cbiAgICAvLyBpZiBzdG9wUHJvcGFnYXRpb24gZXhpc3RzIHJ1biBpdCBvbiB0aGUgb3JpZ2luYWwgZXZlbnRcbiAgICBpZiAoZS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSBzZXQgdGhlIGNhbmNlbEJ1YmJsZSBwcm9wZXJ0eSBvZiB0aGUgb3JpZ2luYWwgZXZlbnQgdG8gVFJVRSAoSUUpXG4gICAgICBlLmNhbmNlbEJ1YmJsZSA9IFRSVUU7XG4gICAgfVxuXG4gICAgRXZlbnRCYXNlT2JqZWN0UHJvdG8uc3RvcFByb3BhZ2F0aW9uLmNhbGwodGhpcyk7XG4gIH1cbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBEb21FdmVudE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBhZGRFdmVudExpc3RlbmVyO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfRXZlbnRPYmplY3QgPSByZXF1aXJlKCcuL0V2ZW50T2JqZWN0Jyk7XG5cbnZhciBfRXZlbnRPYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXZlbnRPYmplY3QpO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9uKSB7XG4gIGZ1bmN0aW9uIHdyYXBDYWxsYmFjayhlKSB7XG4gICAgdmFyIG5lID0gbmV3IF9FdmVudE9iamVjdDJbJ2RlZmF1bHQnXShlKTtcbiAgICBjYWxsYmFjay5jYWxsKHRhcmdldCwgbmUpO1xuICB9XG5cbiAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdmFyIF9yZXQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHVzZUNhcHR1cmUgPSBmYWxzZTtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgICB1c2VDYXB0dXJlID0gb3B0aW9uLmNhcHR1cmUgfHwgZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdib29sZWFuJykge1xuICAgICAgICB1c2VDYXB0dXJlID0gb3B0aW9uO1xuICAgICAgfVxuXG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHdyYXBDYWxsYmFjaywgb3B0aW9uIHx8IGZhbHNlKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdjoge1xuICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2ssIHVzZUNhcHR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgaWYgKHR5cGVvZiBfcmV0ID09PSAnb2JqZWN0JykgcmV0dXJuIF9yZXQudjtcbiAgfSBlbHNlIGlmICh0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICB0YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50VHlwZSwgd3JhcENhbGxiYWNrKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnRUeXBlLCB3cmFwQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBDb250YWluZXJSZW5kZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29udGFpbmVyUmVuZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb250YWluZXJSZW5kZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRhaW5lclJlbmRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gQ29udGFpbmVyUmVuZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29udGFpbmVyUmVuZGVyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMucmVtb3ZlQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmNvbnRhaW5lcikge1xuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF90aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIF90aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF90aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIF90aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICB9XG4gICAgfSwgX3RoaXMucmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKHByb3BzLCByZWFkeSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzLnZpc2libGUsXG4gICAgICAgICAgZ2V0Q29tcG9uZW50ID0gX3RoaXMkcHJvcHMuZ2V0Q29tcG9uZW50LFxuICAgICAgICAgIGZvcmNlUmVuZGVyID0gX3RoaXMkcHJvcHMuZm9yY2VSZW5kZXIsXG4gICAgICAgICAgZ2V0Q29udGFpbmVyID0gX3RoaXMkcHJvcHMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHBhcmVudCA9IF90aGlzJHByb3BzLnBhcmVudDtcblxuICAgICAgaWYgKHZpc2libGUgfHwgcGFyZW50Ll9jb21wb25lbnQgfHwgZm9yY2VSZW5kZXIpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICBfdGhpcy5jb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFjdERPTS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihwYXJlbnQsIGdldENvbXBvbmVudChwcm9wcyksIF90aGlzLmNvbnRhaW5lciwgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgaWYgKHJlYWR5KSB7XG4gICAgICAgICAgICByZWFkeS5jYWxsKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udGFpbmVyUmVuZGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvTW91bnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvTW91bnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb250YWluZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAgIHJlbmRlckNvbXBvbmVudDogdGhpcy5yZW5kZXJDb21wb25lbnQsXG4gICAgICAgIHJlbW92ZUNvbnRhaW5lcjogdGhpcy5yZW1vdmVDb250YWluZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250YWluZXJSZW5kZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNvbnRhaW5lclJlbmRlci5wcm9wVHlwZXMgPSB7XG4gIGF1dG9Nb3VudDogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9EZXN0cm95OiBQcm9wVHlwZXMuYm9vbCxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZvcmNlUmVuZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFyZW50OiBQcm9wVHlwZXMuYW55LFxuICBnZXRDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5Db250YWluZXJSZW5kZXIuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvTW91bnQ6IHRydWUsXG4gIGF1dG9EZXN0cm95OiB0cnVlLFxuICBmb3JjZVJlbmRlcjogZmFsc2Vcbn07XG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJSZW5kZXI7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBQb3J0YWwgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9ydGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3J0YWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcnRhbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBvcnRhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBvcnRhbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvcnRhbCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5jcmVhdGVDb250YWluZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgZGlkVXBkYXRlID0gdGhpcy5wcm9wcy5kaWRVcGRhdGU7XG5cbiAgICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgICAgZGlkVXBkYXRlKHByZXZQcm9wcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ29udGFpbmVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlQ29udGFpbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKCkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5wcm9wcy5nZXRDb250YWluZXIoKTtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVDb250YWluZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDb250YWluZXIoKSB7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9ydGFsO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Qb3J0YWwucHJvcFR5cGVzID0ge1xuICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBkaWRVcGRhdGU6IFByb3BUeXBlcy5mdW5jXG59O1xuZXhwb3J0IGRlZmF1bHQgUG9ydGFsOyJdLCJuYW1lcyI6WyJfRXZlbnRCYXNlT2JqZWN0IiwiX29iamVjdEFzc2lnbiIsIl9FdmVudE9iamVjdCIsIlJlYWN0RE9NIiwiUmVhY3QiLCJQcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxTQUFTLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO0VBQ3hDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztFQUNiLE9BQU8sSUFBSSxFQUFFO0lBQ1gsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO01BQ2pCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztHQUN4Qjs7RUFFRCxPQUFPLEtBQUssQ0FBQzs7O0NBQ2Q7QUNWRDtBQVFBLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtFQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUMsQ0FBQztBQUNILFNBQVMsV0FBVyxHQUFHO0VBQ3JCLE9BQU8sS0FBSyxDQUFDO0NBQ2Q7O0FBRUQsU0FBUyxVQUFVLEdBQUc7RUFDcEIsT0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxTQUFTLGVBQWUsR0FBRztFQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztFQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztDQUNoQzs7QUFFRCxlQUFlLENBQUMsU0FBUyxHQUFHO0VBQzFCLGFBQWEsRUFBRSxDQUFDOztFQUVoQixXQUFXLEVBQUUsZUFBZTs7RUFFNUIsa0JBQWtCLEVBQUUsV0FBVzs7RUFFL0Isb0JBQW9CLEVBQUUsV0FBVzs7RUFFakMsNkJBQTZCLEVBQUUsV0FBVzs7RUFFMUMsY0FB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

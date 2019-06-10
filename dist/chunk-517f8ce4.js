import React__default from 'react';
import PropTypes from 'prop-types';
import { g as _typeof, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, d as _createClass, h as _defineProperty, c as _extends } from './chunk-167e2b08.js';
import ReactDOM__default from 'react-dom';

function toArrayChildren(children) {
  var ret = [];
  React__default.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

var indexOf = [].indexOf;

var indexof = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

var componentIndexof = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/**
 * Module dependencies.
 */

try {
  var index = indexof;
} catch (err) {
  var index = componentIndexof;
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

var componentClasses = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};

var isCssAnimationSupported = TransitionEvents.endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = componentClasses(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    TransitionEvents.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  TransitionEvents.addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    TransitionEvents.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  TransitionEvents.addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;

var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};

var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  _inherits(AnimateChild, _React$Component);

  function AnimateChild() {
    _classCallCheck(this, AnimateChild);

    return _possibleConstructorReturn(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  _createClass(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (util.isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (util.isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (util.isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = ReactDOM__default.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = cssAnimation(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(React__default.Component);

AnimateChild.propTypes = {
  children: PropTypes.any
};

var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (React__default.isValidElement(children)) {
    if (!children.key) {
      return React__default.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  _inherits(Animate, _React$Component);

  // eslint-disable-line

  function Animate(props) {
    _classCallCheck(this, Animate);

    var _this = _possibleConstructorReturn(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: toArrayChildren(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  _createClass(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = toArrayChildren(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? toArrayChildren(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && findChildInChildrenByKey(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = React__default.cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !findChildInChildrenByKey(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = mergeChildren(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && findChildInChildrenByKey(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = findShownChildInChildrenByKey(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && findChildInChildrenByKey(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return findShownChildInChildrenByKey(currentChildren, key, showProp);
      }
      return findChildInChildrenByKey(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return React__default.createElement(
            AnimateChild,
            {
              key: child.key,
              ref: function ref(node) {
                _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = _extends({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return React__default.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(React__default.Component);

Animate.isAnimate = true;
Animate.propTypes = {
  component: PropTypes.any,
  componentProps: PropTypes.object,
  animation: PropTypes.object,
  transitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  transitionEnter: PropTypes.bool,
  transitionAppear: PropTypes.bool,
  exclusive: PropTypes.bool,
  transitionLeave: PropTypes.bool,
  onEnd: PropTypes.func,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
  onAppear: PropTypes.func,
  showProp: PropTypes.string,
  children: PropTypes.node
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else if (type === 'appear') {
      if (util.allowAppearCallback(props)) {
        props.onAppear(key);
        props.onEnd(key, true);
      }
    } else if (util.allowEnterCallback(props)) {
      props.onEnter(key);
      props.onEnd(key, true);
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (util.allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!isSameChildren(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

export { objectAssign as _, Animate as r };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstNTE3ZjhjZTQuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0NoaWxkcmVuVXRpbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvY3NzLWFuaW1hdGlvbi9lcy9FdmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9pbmRleG9mL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1pbmRleG9mL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1jbGFzc2VzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1hbmltYXRpb24vZXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy91dGlsL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9BbmltYXRlQ2hpbGQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9BbmltYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXlDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgcmV0ID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldC5wdXNoKGNoaWxkKTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY2hpbGRyZW4sIGtleSkge1xuICB2YXIgcmV0ID0gbnVsbDtcbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmtleSA9PT0ga2V5KSB7XG4gICAgICAgIHJldCA9IGNoaWxkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwga2V5LCBzaG93UHJvcCkge1xuICB2YXIgcmV0ID0gbnVsbDtcbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSAmJiBjaGlsZC5wcm9wc1tzaG93UHJvcF0pIHtcbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndHdvIGNoaWxkIHdpdGggc2FtZSBrZXkgZm9yIDxyYy1hbmltYXRlPiBjaGlsZHJlbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldCA9IGNoaWxkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSGlkZGVuQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApIHtcbiAgdmFyIGZvdW5kID0gMDtcbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3VuZCA9IGNoaWxkICYmIGNoaWxkLmtleSA9PT0ga2V5ICYmICFjaGlsZC5wcm9wc1tzaG93UHJvcF07XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZvdW5kO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lQ2hpbGRyZW4oYzEsIGMyLCBzaG93UHJvcCkge1xuICB2YXIgc2FtZSA9IGMxLmxlbmd0aCA9PT0gYzIubGVuZ3RoO1xuICBpZiAoc2FtZSkge1xuICAgIGMxLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgdmFyIGNoaWxkMiA9IGMyW2luZGV4XTtcbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZDIpIHtcbiAgICAgICAgaWYgKGNoaWxkICYmICFjaGlsZDIgfHwgIWNoaWxkICYmIGNoaWxkMikge1xuICAgICAgICAgIHNhbWUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5rZXkgIT09IGNoaWxkMi5rZXkpIHtcbiAgICAgICAgICBzYW1lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hvd1Byb3AgJiYgY2hpbGQucHJvcHNbc2hvd1Byb3BdICE9PSBjaGlsZDIucHJvcHNbc2hvd1Byb3BdKSB7XG4gICAgICAgICAgc2FtZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNhbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNoaWxkcmVuKHByZXYsIG5leHQpIHtcbiAgdmFyIHJldCA9IFtdO1xuXG4gIC8vIEZvciBlYWNoIGtleSBvZiBgbmV4dGAsIHRoZSBsaXN0IG9mIGtleXMgdG8gaW5zZXJ0IGJlZm9yZSB0aGF0IGtleSBpblxuICAvLyB0aGUgY29tYmluZWQgbGlzdFxuICB2YXIgbmV4dENoaWxkcmVuUGVuZGluZyA9IHt9O1xuICB2YXIgcGVuZGluZ0NoaWxkcmVuID0gW107XG4gIHByZXYuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgJiYgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KG5leHQsIGNoaWxkLmtleSkpIHtcbiAgICAgIGlmIChwZW5kaW5nQ2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIG5leHRDaGlsZHJlblBlbmRpbmdbY2hpbGQua2V5XSA9IHBlbmRpbmdDaGlsZHJlbjtcbiAgICAgICAgcGVuZGluZ0NoaWxkcmVuID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlbmRpbmdDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5leHQuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRDaGlsZHJlblBlbmRpbmcsIGNoaWxkLmtleSkpIHtcbiAgICAgIHJldCA9IHJldC5jb25jYXQobmV4dENoaWxkcmVuUGVuZGluZ1tjaGlsZC5rZXldKTtcbiAgICB9XG4gICAgcmV0LnB1c2goY2hpbGQpO1xuICB9KTtcblxuICByZXQgPSByZXQuY29uY2F0KHBlbmRpbmdDaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJldDtcbn0iLCJ2YXIgU1RBUlRfRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25zdGFydDoge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uc3RhcnQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uU3RhcnQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uU3RhcnQnLFxuICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25TdGFydCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uU3RhcnQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uc3RhcnQ6IHtcbiAgICBhbmltYXRpb246ICdhbmltYXRpb25zdGFydCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvblN0YXJ0JyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvblN0YXJ0JyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uU3RhcnQnXG4gIH1cbn07XG5cbnZhciBFTkRfRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25FbmQnXG4gIH1cbn07XG5cbnZhciBzdGFydEV2ZW50cyA9IFtdO1xudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBTVEFSVF9FVkVOVF9OQU1FX01BUC5hbmltYXRpb25zdGFydC5hbmltYXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICB9XG5cbiAgaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBTVEFSVF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uc3RhcnQudHJhbnNpdGlvbjtcbiAgICBkZWxldGUgRU5EX0VWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoRVZFTlRfTkFNRV9NQVAsIGV2ZW50cykge1xuICAgIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICAgIGlmIChFVkVOVF9OQU1FX01BUC5oYXNPd25Qcm9wZXJ0eShiYXNlRXZlbnROYW1lKSkge1xuICAgICAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuICAgICAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm9jZXNzKFNUQVJUX0VWRU5UX05BTUVfTUFQLCBzdGFydEV2ZW50cyk7XG4gIHByb2Nlc3MoRU5EX0VWRU5UX05BTUVfTUFQLCBlbmRFdmVudHMpO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBkZXRlY3RFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBUcmFuc2l0aW9uRXZlbnRzID0ge1xuICAvLyBTdGFydCBldmVudHNcbiAgc3RhcnRFdmVudHM6IHN0YXJ0RXZlbnRzLFxuXG4gIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc3RhcnRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBzdGFydEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChzdGFydEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc3RhcnRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBzdGFydEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuXG4gIC8vIEVuZCBldmVudHNcbiAgZW5kRXZlbnRzOiBlbmRFdmVudHMsXG5cbiAgYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uRXZlbnRzOyIsIlxudmFyIGluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgb2JqKXtcbiAgaWYgKGluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGFyciwgb2JqKXtcbiAgaWYgKGFyci5pbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07IiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnRyeSB7XG4gIHZhciBpbmRleCA9IHJlcXVpcmUoJ2luZGV4b2YnKTtcbn0gY2F0Y2ggKGVycikge1xuICB2YXIgaW5kZXggPSByZXF1aXJlKCdjb21wb25lbnQtaW5kZXhvZicpO1xufVxuXG4vKipcbiAqIFdoaXRlc3BhY2UgcmVnZXhwLlxuICovXG5cbnZhciByZSA9IC9cXHMrLztcblxuLyoqXG4gKiB0b1N0cmluZyByZWZlcmVuY2UuXG4gKi9cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBXcmFwIGBlbGAgaW4gYSBgQ2xhc3NMaXN0YC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwpe1xuICByZXR1cm4gbmV3IENsYXNzTGlzdChlbCk7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgQ2xhc3NMaXN0IGZvciBgZWxgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIENsYXNzTGlzdChlbCkge1xuICBpZiAoIWVsIHx8ICFlbC5ub2RlVHlwZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQSBET00gZWxlbWVudCByZWZlcmVuY2UgaXMgcmVxdWlyZWQnKTtcbiAgfVxuICB0aGlzLmVsID0gZWw7XG4gIHRoaXMubGlzdCA9IGVsLmNsYXNzTGlzdDtcbn1cblxuLyoqXG4gKiBBZGQgY2xhc3MgYG5hbWVgIGlmIG5vdCBhbHJlYWR5IHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihuYW1lKXtcbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICB0aGlzLmxpc3QuYWRkKG5hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXkoKTtcbiAgdmFyIGkgPSBpbmRleChhcnIsIG5hbWUpO1xuICBpZiAoIX5pKSBhcnIucHVzaChuYW1lKTtcbiAgdGhpcy5lbC5jbGFzc05hbWUgPSBhcnIuam9pbignICcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGNsYXNzIGBuYW1lYCB3aGVuIHByZXNlbnQsIG9yXG4gKiBwYXNzIGEgcmVndWxhciBleHByZXNzaW9uIHRvIHJlbW92ZVxuICogYW55IHdoaWNoIG1hdGNoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKG5hbWUpe1xuICBpZiAoJ1tvYmplY3QgUmVnRXhwXScgPT0gdG9TdHJpbmcuY2FsbChuYW1lKSkge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZU1hdGNoaW5nKG5hbWUpO1xuICB9XG5cbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICB0aGlzLmxpc3QucmVtb3ZlKG5hbWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXkoKTtcbiAgdmFyIGkgPSBpbmRleChhcnIsIG5hbWUpO1xuICBpZiAofmkpIGFyci5zcGxpY2UoaSwgMSk7XG4gIHRoaXMuZWwuY2xhc3NOYW1lID0gYXJyLmpvaW4oJyAnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbGwgY2xhc3NlcyBtYXRjaGluZyBgcmVgLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5yZW1vdmVNYXRjaGluZyA9IGZ1bmN0aW9uKHJlKXtcbiAgdmFyIGFyciA9IHRoaXMuYXJyYXkoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmUudGVzdChhcnJbaV0pKSB7XG4gICAgICB0aGlzLnJlbW92ZShhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVG9nZ2xlIGNsYXNzIGBuYW1lYCwgY2FuIGZvcmNlIHN0YXRlIHZpYSBgZm9yY2VgLlxuICpcbiAqIEZvciBicm93c2VycyB0aGF0IHN1cHBvcnQgY2xhc3NMaXN0LCBidXQgZG8gbm90IHN1cHBvcnQgYGZvcmNlYCB5ZXQsXG4gKiB0aGUgbWlzdGFrZSB3aWxsIGJlIGRldGVjdGVkIGFuZCBjb3JyZWN0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZm9yY2VcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbihuYW1lLCBmb3JjZSl7XG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBmb3JjZSkge1xuICAgICAgaWYgKGZvcmNlICE9PSB0aGlzLmxpc3QudG9nZ2xlKG5hbWUsIGZvcmNlKSkge1xuICAgICAgICB0aGlzLmxpc3QudG9nZ2xlKG5hbWUpOyAvLyB0b2dnbGUgYWdhaW4gdG8gY29ycmVjdFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpc3QudG9nZ2xlKG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZm9yY2UpIHtcbiAgICBpZiAoIWZvcmNlKSB7XG4gICAgICB0aGlzLnJlbW92ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGQobmFtZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh0aGlzLmhhcyhuYW1lKSkge1xuICAgICAgdGhpcy5yZW1vdmUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgY2xhc3Nlcy5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5hcnJheSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBjbGFzc05hbWUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJztcbiAgdmFyIHN0ciA9IGNsYXNzTmFtZS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG4gIHZhciBhcnIgPSBzdHIuc3BsaXQocmUpO1xuICBpZiAoJycgPT09IGFyclswXSkgYXJyLnNoaWZ0KCk7XG4gIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGNsYXNzIGBuYW1lYCBpcyBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuaGFzID1cbkNsYXNzTGlzdC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHRoaXMubGlzdFxuICAgID8gdGhpcy5saXN0LmNvbnRhaW5zKG5hbWUpXG4gICAgOiAhISB+aW5kZXgodGhpcy5hcnJheSgpLCBuYW1lKTtcbn07XG4iLCJpbXBvcnQgX3R5cGVvZiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJ2NvbXBvbmVudC1jbGFzc2VzJztcblxudmFyIGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gRXZlbnQuZW5kRXZlbnRzLmxlbmd0aCAhPT0gMDtcbnZhciBjYXBpdGFsUHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsXG4vLyBtcyBpcyBzcGVjaWFsIC4uLi4gIVxuJ21zJ107XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICdtcy0nLCAnJ107XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICAvLyBvbGQgZmYgbmVlZCBudWxsLCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2dldENvbXB1dGVkU3R5bGVcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciByZXQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHJldCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJlZml4ZXNbaV0gKyBuYW1lKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZml4QnJvd3NlckJ5VGltZW91dChub2RlKSB7XG4gIGlmIChpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCkge1xuICAgIHZhciB0cmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciB0aW1lID0gTWF0aC5tYXgodHJhbnNpdGlvbkR1cmF0aW9uICsgdHJhbnNpdGlvbkRlbGF5LCBhbmltYXRpb25EdXJhdGlvbiArIGFuaW1hdGlvbkRlbGF5KTtcbiAgICAvLyBzb21ldGltZXMsIGJyb3dzZXIgYnVnXG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lICogMTAwMCArIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKSB7XG4gIGlmIChub2RlLnJjRW5kQW5pbVRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQobm9kZS5yY0VuZEFuaW1UaW1lb3V0KTtcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbnZhciBjc3NBbmltYXRpb24gPSBmdW5jdGlvbiBjc3NBbmltYXRpb24obm9kZSwgdHJhbnNpdGlvbk5hbWUsIGVuZENhbGxiYWNrKSB7XG4gIHZhciBuYW1lSXNPYmogPSAodHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0cmFuc2l0aW9uTmFtZSkpID09PSAnb2JqZWN0JztcbiAgdmFyIGNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLm5hbWUgOiB0cmFuc2l0aW9uTmFtZTtcbiAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLmFjdGl2ZSA6IHRyYW5zaXRpb25OYW1lICsgJy1hY3RpdmUnO1xuICB2YXIgZW5kID0gZW5kQ2FsbGJhY2s7XG4gIHZhciBzdGFydCA9IHZvaWQgMDtcbiAgdmFyIGFjdGl2ZSA9IHZvaWQgMDtcbiAgdmFyIG5vZGVDbGFzc2VzID0gY2xhc3Nlcyhub2RlKTtcblxuICBpZiAoZW5kQ2FsbGJhY2sgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVuZENhbGxiYWNrKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBlbmQgPSBlbmRDYWxsYmFjay5lbmQ7XG4gICAgc3RhcnQgPSBlbmRDYWxsYmFjay5zdGFydDtcbiAgICBhY3RpdmUgPSBlbmRDYWxsYmFjay5hY3RpdmU7XG4gIH1cblxuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBub2RlQ2xhc3Nlcy5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICBub2RlQ2xhc3Nlcy5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgIEV2ZW50LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGVuZCBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgIGlmIChlbmQpIHtcbiAgICAgIGVuZCgpO1xuICAgIH1cbiAgfTtcblxuICBFdmVudC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgaWYgKHN0YXJ0KSB7XG4gICAgc3RhcnQoKTtcbiAgfVxuICBub2RlQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIG5vZGVDbGFzc2VzLmFkZChhY3RpdmVDbGFzc05hbWUpO1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoYWN0aXZlLCAwKTtcbiAgICB9XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgICAvLyAzMG1zIGZvciBmaXJlZm94XG4gIH0sIDMwKTtcblxuICByZXR1cm4ge1xuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zdHlsZSA9IGZ1bmN0aW9uIChub2RlLCBzdHlsZSwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgRXZlbnQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgY2FsbGJhY2sgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIEV2ZW50LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzIGluIHN0eWxlKSB7XG4gICAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkocykpIHtcbiAgICAgICAgbm9kZS5zdHlsZVtzXSA9IHN0eWxlW3NdO1xuICAgICAgfVxuICAgIH1cbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSk7XG4gIH0sIDApO1xufTtcblxuY3NzQW5pbWF0aW9uLnNldFRyYW5zaXRpb24gPSBmdW5jdGlvbiAobm9kZSwgcCwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5ID0gcDtcbiAgdmFyIHYgPSB2YWx1ZTtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICB2ID0gcHJvcGVydHk7XG4gICAgcHJvcGVydHkgPSAnJztcbiAgfVxuICBwcm9wZXJ0eSA9IHByb3BlcnR5IHx8ICcnO1xuICBjYXBpdGFsUHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgbm9kZS5zdHlsZVtwcmVmaXggKyAnVHJhbnNpdGlvbicgKyBwcm9wZXJ0eV0gPSB2O1xuICB9KTtcbn07XG5cbmNzc0FuaW1hdGlvbi5pc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkO1xuXG5leHBvcnQgeyBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBjc3NBbmltYXRpb247IiwidmFyIHV0aWwgPSB7XG4gIGlzQXBwZWFyU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0FwcGVhclN1cHBvcnRlZChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyIHx8IHByb3BzLmFuaW1hdGlvbi5hcHBlYXI7XG4gIH0sXG4gIGlzRW50ZXJTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzRW50ZXJTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkVudGVyIHx8IHByb3BzLmFuaW1hdGlvbi5lbnRlcjtcbiAgfSxcbiAgaXNMZWF2ZVN1cHBvcnRlZDogZnVuY3Rpb24gaXNMZWF2ZVN1cHBvcnRlZChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy50cmFuc2l0aW9uTGVhdmUgfHwgcHJvcHMuYW5pbWF0aW9uLmxlYXZlO1xuICB9LFxuICBhbGxvd0FwcGVhckNhbGxiYWNrOiBmdW5jdGlvbiBhbGxvd0FwcGVhckNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25BcHBlYXIgfHwgcHJvcHMuYW5pbWF0aW9uLmFwcGVhcjtcbiAgfSxcbiAgYWxsb3dFbnRlckNhbGxiYWNrOiBmdW5jdGlvbiBhbGxvd0VudGVyQ2FsbGJhY2socHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbkVudGVyIHx8IHByb3BzLmFuaW1hdGlvbi5lbnRlcjtcbiAgfSxcbiAgYWxsb3dMZWF2ZUNhbGxiYWNrOiBmdW5jdGlvbiBhbGxvd0xlYXZlQ2FsbGJhY2socHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbkxlYXZlIHx8IHByb3BzLmFuaW1hdGlvbi5sZWF2ZTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHV0aWw7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3NzQW5pbWF0ZSwgeyBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB9IGZyb20gJ2Nzcy1hbmltYXRpb24nO1xuaW1wb3J0IGFuaW1VdGlsIGZyb20gJy4vdXRpbC9hbmltYXRlJztcblxudmFyIHRyYW5zaXRpb25NYXAgPSB7XG4gIGVudGVyOiAndHJhbnNpdGlvbkVudGVyJyxcbiAgYXBwZWFyOiAndHJhbnNpdGlvbkFwcGVhcicsXG4gIGxlYXZlOiAndHJhbnNpdGlvbkxlYXZlJ1xufTtcblxudmFyIEFuaW1hdGVDaGlsZCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBbmltYXRlQ2hpbGQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFuaW1hdGVDaGlsZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWF0ZUNoaWxkKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQW5pbWF0ZUNoaWxkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQW5pbWF0ZUNoaWxkKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQW5pbWF0ZUNoaWxkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsRW50ZXIoZG9uZSkge1xuICAgICAgaWYgKGFuaW1VdGlsLmlzRW50ZXJTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKCdlbnRlcicsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsQXBwZWFyKGRvbmUpIHtcbiAgICAgIGlmIChhbmltVXRpbC5pc0FwcGVhclN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24oJ2FwcGVhcicsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxMZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShkb25lKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuaXNMZWF2ZVN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24oJ2xlYXZlJywgZG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbHdheXMgc3luYywgZG8gbm90IGludGVydXB0IHdpdGggcmVhY3QgY29tcG9uZW50IGxpZmUgY3ljbGVcbiAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiAtPiBhbmltYXRlIGhpZGRlbiAtPlxuICAgICAgICAvLyBkaWRVcGRhdGUgLT4gYW5pbWF0ZSBsZWF2ZSAtPiB1bm1vdW50IChpZiBhbmltYXRlIGlzIG5vbmUpXG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0cmFuc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNpdGlvbihhbmltYXRpb25UeXBlLCBmaW5pc2hDYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgICB2YXIgbmFtZUlzT2JqID0gdHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAnb2JqZWN0JztcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgICAgX3RoaXMyLnN0b3BwZXIgPSBudWxsO1xuICAgICAgICBmaW5pc2hDYWxsYmFjaygpO1xuICAgICAgfTtcbiAgICAgIGlmICgoaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgfHwgIXByb3BzLmFuaW1hdGlvblthbmltYXRpb25UeXBlXSkgJiYgdHJhbnNpdGlvbk5hbWUgJiYgcHJvcHNbdHJhbnNpdGlvbk1hcFthbmltYXRpb25UeXBlXV0pIHtcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZVthbmltYXRpb25UeXBlXSA6IHRyYW5zaXRpb25OYW1lICsgJy0nICsgYW5pbWF0aW9uVHlwZTtcbiAgICAgICAgdmFyIGFjdGl2ZU5hbWUgPSBuYW1lICsgJy1hY3RpdmUnO1xuICAgICAgICBpZiAobmFtZUlzT2JqICYmIHRyYW5zaXRpb25OYW1lW2FuaW1hdGlvblR5cGUgKyAnQWN0aXZlJ10pIHtcbiAgICAgICAgICBhY3RpdmVOYW1lID0gdHJhbnNpdGlvbk5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BwZXIgPSBjc3NBbmltYXRlKG5vZGUsIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aXZlTmFtZVxuICAgICAgICB9LCBlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wcGVyID0gcHJvcHMuYW5pbWF0aW9uW2FuaW1hdGlvblR5cGVdKG5vZGUsIGVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB2YXIgc3RvcHBlciA9IHRoaXMuc3RvcHBlcjtcbiAgICAgIGlmIChzdG9wcGVyKSB7XG4gICAgICAgIHRoaXMuc3RvcHBlciA9IG51bGw7XG4gICAgICAgIHN0b3BwZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBbmltYXRlQ2hpbGQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkFuaW1hdGVDaGlsZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG59O1xuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZUNoaWxkOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB0b0FycmF5Q2hpbGRyZW4sIG1lcmdlQ2hpbGRyZW4sIGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5LCBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXksIGlzU2FtZUNoaWxkcmVuIH0gZnJvbSAnLi9DaGlsZHJlblV0aWxzJztcbmltcG9ydCBBbmltYXRlQ2hpbGQgZnJvbSAnLi9BbmltYXRlQ2hpbGQnO1xuaW1wb3J0IGFuaW1VdGlsIGZyb20gJy4vdXRpbC9hbmltYXRlJztcblxudmFyIGRlZmF1bHRLZXkgPSAncmNfYW5pbWF0ZV8nICsgRGF0ZS5ub3coKTtcblxuZnVuY3Rpb24gZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICBpZiAoIWNoaWxkcmVuLmtleSkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICBrZXk6IGRlZmF1bHRLZXlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgQW5pbWF0ZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBbmltYXRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZnVuY3Rpb24gQW5pbWF0ZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbmltYXRlKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBbmltYXRlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQW5pbWF0ZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzID0ge307XG4gICAgX3RoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICBfdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSlcbiAgICB9O1xuXG4gICAgX3RoaXMuY2hpbGRyZW5SZWZzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFuaW1hdGUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgc2hvd1Byb3AgPSB0aGlzLnByb3BzLnNob3dQcm9wO1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gISFjaGlsZC5wcm9wc1tzaG93UHJvcF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgX3RoaXMyLnBlcmZvcm1BcHBlYXIoY2hpbGQua2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdGhpcy5uZXh0UHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICB2YXIgbmV4dENoaWxkcmVuID0gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKG5leHRQcm9wcykpO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIC8vIGV4Y2x1c2l2ZSBuZWVkcyBpbW1lZGlhdGUgcmVzcG9uc2VcbiAgICAgIGlmIChwcm9wcy5leGNsdXNpdmUpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBfdGhpczMuc3RvcChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHZhciBzaG93UHJvcCA9IHByb3BzLnNob3dQcm9wO1xuICAgICAgdmFyIGN1cnJlbnRseUFuaW1hdGluZ0tleXMgPSB0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXM7XG4gICAgICAvLyBsYXN0IHByb3BzIGNoaWxkcmVuIGlmIGV4Y2x1c2l2ZVxuICAgICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9IHByb3BzLmV4Y2x1c2l2ZSA/IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpIDogdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICAgIC8vIGluIGNhc2UgZGVzdHJveSBpbiBzaG93UHJvcCBtb2RlXG4gICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICBjdXJyZW50Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudENoaWxkKSB7XG4gICAgICAgICAgdmFyIG5leHRDaGlsZCA9IGN1cnJlbnRDaGlsZCAmJiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkobmV4dENoaWxkcmVuLCBjdXJyZW50Q2hpbGQua2V5KTtcbiAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSB2b2lkIDA7XG4gICAgICAgICAgaWYgKCghbmV4dENoaWxkIHx8ICFuZXh0Q2hpbGQucHJvcHNbc2hvd1Byb3BdKSAmJiBjdXJyZW50Q2hpbGQucHJvcHNbc2hvd1Byb3BdKSB7XG4gICAgICAgICAgICBuZXdDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChuZXh0Q2hpbGQgfHwgY3VycmVudENoaWxkLCBfZGVmaW5lUHJvcGVydHkoe30sIHNob3dQcm9wLCB0cnVlKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0NoaWxkID0gbmV4dENoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobmV3Q2hpbGQpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkcmVuLnB1c2gobmV3Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5leHRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChuZXh0Q2hpbGQpIHtcbiAgICAgICAgICBpZiAoIW5leHRDaGlsZCB8fCAhZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwgbmV4dENoaWxkLmtleSkpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkcmVuLnB1c2gobmV4dENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Q2hpbGRyZW4gPSBtZXJnZUNoaWxkcmVuKGN1cnJlbnRDaGlsZHJlbiwgbmV4dENoaWxkcmVuKTtcbiAgICAgIH1cblxuICAgICAgLy8gbmVlZCByZW5kZXIgdG8gYXZvaWQgdXBkYXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2hpbGRyZW46IG5ld0NoaWxkcmVuXG4gICAgICB9KTtcblxuICAgICAgbmV4dENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBrZXkgPSBjaGlsZCAmJiBjaGlsZC5rZXk7XG4gICAgICAgIGlmIChjaGlsZCAmJiBjdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc1ByZXYgPSBjaGlsZCAmJiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpO1xuICAgICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgICB2YXIgc2hvd0luTmV4dCA9IGNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgICBpZiAoaGFzUHJldikge1xuICAgICAgICAgICAgdmFyIHNob3dJbk5vdyA9IGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5LCBzaG93UHJvcCk7XG4gICAgICAgICAgICBpZiAoIXNob3dJbk5vdyAmJiBzaG93SW5OZXh0KSB7XG4gICAgICAgICAgICAgIF90aGlzMy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChzaG93SW5OZXh0KSB7XG4gICAgICAgICAgICBfdGhpczMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGFzUHJldikge1xuICAgICAgICAgIF90aGlzMy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjdXJyZW50Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGtleSA9IGNoaWxkICYmIGNoaWxkLmtleTtcbiAgICAgICAgaWYgKGNoaWxkICYmIGN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzTmV4dCA9IGNoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0Q2hpbGRyZW4sIGtleSk7XG4gICAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICAgIHZhciBzaG93SW5Ob3cgPSBjaGlsZC5wcm9wc1tzaG93UHJvcF07XG4gICAgICAgICAgaWYgKGhhc05leHQpIHtcbiAgICAgICAgICAgIHZhciBzaG93SW5OZXh0ID0gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkobmV4dENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgICAgICAgIGlmICghc2hvd0luTmV4dCAmJiBzaG93SW5Ob3cpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLmtleXNUb0xlYXZlLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHNob3dJbk5vdykge1xuICAgICAgICAgICAgX3RoaXMzLmtleXNUb0xlYXZlLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc05leHQpIHtcbiAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB2YXIga2V5c1RvRW50ZXIgPSB0aGlzLmtleXNUb0VudGVyO1xuICAgICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgICAga2V5c1RvRW50ZXIuZm9yRWFjaCh0aGlzLnBlcmZvcm1FbnRlcik7XG4gICAgICB2YXIga2V5c1RvTGVhdmUgPSB0aGlzLmtleXNUb0xlYXZlO1xuICAgICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICAgICAga2V5c1RvTGVhdmUuZm9yRWFjaCh0aGlzLnBlcmZvcm1MZWF2ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNWYWxpZENoaWxkQnlLZXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ZhbGlkQ2hpbGRCeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSkge1xuICAgICAgdmFyIHNob3dQcm9wID0gdGhpcy5wcm9wcy5zaG93UHJvcDtcbiAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICByZXR1cm4gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKGtleSkge1xuICAgICAgZGVsZXRlIHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldO1xuICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMuY2hpbGRyZW5SZWZzW2tleV07XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLm5leHRQcm9wcyA9IHByb3BzO1xuICAgICAgdmFyIHN0YXRlQ2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgICAgdmFyIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgIGlmIChzdGF0ZUNoaWxkcmVuKSB7XG4gICAgICAgIGNoaWxkcmVuID0gc3RhdGVDaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjaGlsZC5rZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbXVzdCBzZXQga2V5IGZvciA8cmMtYW5pbWF0ZT4gY2hpbGRyZW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBBbmltYXRlQ2hpbGQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogY2hpbGQua2V5LFxuICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmNoaWxkcmVuUmVmc1tjaGlsZC5rZXldID0gbm9kZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwcm9wcy5hbmltYXRpb24sXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyOiBwcm9wcy50cmFuc2l0aW9uRW50ZXIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHByb3BzLnRyYW5zaXRpb25BcHBlYXIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZTogcHJvcHMudHJhbnNpdGlvbkxlYXZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHZhciBDb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQ7XG4gICAgICBpZiAoQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBwYXNzZWRQcm9wcyA9IHByb3BzO1xuICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBwYXNzZWRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlXG4gICAgICAgICAgfSwgcHJvcHMuY29tcG9uZW50UHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICBwYXNzZWRQcm9wcyxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkcmVuWzBdIHx8IG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFuaW1hdGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkFuaW1hdGUuaXNBbmltYXRlID0gdHJ1ZTtcbkFuaW1hdGUucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5hbnksXG4gIGNvbXBvbmVudFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhbmltYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIHRyYW5zaXRpb25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYW5zaXRpb25BcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuICBleGNsdXNpdmU6IFByb3BUeXBlcy5ib29sLFxuICB0cmFuc2l0aW9uTGVhdmU6IFByb3BUeXBlcy5ib29sLFxuICBvbkVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25BcHBlYXI6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93UHJvcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuQW5pbWF0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFuaW1hdGlvbjoge30sXG4gIGNvbXBvbmVudDogJ3NwYW4nLFxuICBjb21wb25lbnRQcm9wczoge30sXG4gIHRyYW5zaXRpb25FbnRlcjogdHJ1ZSxcbiAgdHJhbnNpdGlvbkxlYXZlOiB0cnVlLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcbiAgb25FbmQ6IG5vb3AsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uTGVhdmU6IG5vb3AsXG4gIG9uQXBwZWFyOiBub29wXG59O1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gIHRoaXMucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIG1heSBhbHJlYWR5IHJlbW92ZSBieSBleGNsdXNpdmVcbiAgICBpZiAoX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldKSB7XG4gICAgICBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgIF90aGlzNS5jaGlsZHJlblJlZnNba2V5XS5jb21wb25lbnRXaWxsRW50ZXIoX3RoaXM1LmhhbmRsZURvbmVBZGRpbmcuYmluZChfdGhpczUsIGtleSwgJ2VudGVyJykpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnBlcmZvcm1BcHBlYXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKF90aGlzNS5jaGlsZHJlblJlZnNba2V5XSkge1xuICAgICAgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG4gICAgICBfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0uY29tcG9uZW50V2lsbEFwcGVhcihfdGhpczUuaGFuZGxlRG9uZUFkZGluZy5iaW5kKF90aGlzNSwga2V5LCAnYXBwZWFyJykpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmhhbmRsZURvbmVBZGRpbmcgPSBmdW5jdGlvbiAoa2V5LCB0eXBlKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXM1LnByb3BzO1xuICAgIGRlbGV0ZSBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldO1xuICAgIC8vIGlmIHVwZGF0ZSBvbiBleGNsdXNpdmUgbW9kZSwgc2tpcCBjaGVja1xuICAgIGlmIChwcm9wcy5leGNsdXNpdmUgJiYgcHJvcHMgIT09IF90aGlzNS5uZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpO1xuICAgIGlmICghX3RoaXM1LmlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSkge1xuICAgICAgLy8gZXhjbHVzaXZlIHdpbGwgbm90IG5lZWQgdGhpc1xuICAgICAgX3RoaXM1LnBlcmZvcm1MZWF2ZShrZXkpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FwcGVhcicpIHtcbiAgICAgIGlmIChhbmltVXRpbC5hbGxvd0FwcGVhckNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICBwcm9wcy5vbkFwcGVhcihrZXkpO1xuICAgICAgICBwcm9wcy5vbkVuZChrZXksIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYW5pbVV0aWwuYWxsb3dFbnRlckNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgcHJvcHMub25FbnRlcihrZXkpO1xuICAgICAgcHJvcHMub25FbmQoa2V5LCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5wZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgLy8gbWF5IGFscmVhZHkgcmVtb3ZlIGJ5IGV4Y2x1c2l2ZVxuICAgIGlmIChfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0pIHtcbiAgICAgIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldLmNvbXBvbmVudFdpbGxMZWF2ZShfdGhpczUuaGFuZGxlRG9uZUxlYXZpbmcuYmluZChfdGhpczUsIGtleSkpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmhhbmRsZURvbmVMZWF2aW5nID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzNS5wcm9wcztcbiAgICBkZWxldGUgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICAvLyBpZiB1cGRhdGUgb24gZXhjbHVzaXZlIG1vZGUsIHNraXAgY2hlY2tcbiAgICBpZiAocHJvcHMuZXhjbHVzaXZlICYmIHByb3BzICE9PSBfdGhpczUubmV4dFByb3BzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKTtcbiAgICAvLyBpbiBjYXNlIHN0YXRlIGNoYW5nZSBpcyB0b28gZmFzdFxuICAgIGlmIChfdGhpczUuaXNWYWxpZENoaWxkQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpKSB7XG4gICAgICBfdGhpczUucGVyZm9ybUVudGVyKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbmQgPSBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICAgIGlmIChhbmltVXRpbC5hbGxvd0xlYXZlQ2FsbGJhY2socHJvcHMpKSB7XG4gICAgICAgICAgcHJvcHMub25MZWF2ZShrZXkpO1xuICAgICAgICAgIHByb3BzLm9uRW5kKGtleSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKCFpc1NhbWVDaGlsZHJlbihfdGhpczUuc3RhdGUuY2hpbGRyZW4sIGN1cnJlbnRDaGlsZHJlbiwgcHJvcHMuc2hvd1Byb3ApKSB7XG4gICAgICAgIF90aGlzNS5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2hpbGRyZW46IGN1cnJlbnRDaGlsZHJlblxuICAgICAgICB9LCBlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZTsiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSQkMCIsInJlcXVpcmUk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

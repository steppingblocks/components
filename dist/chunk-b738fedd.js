import React__default from 'react';
import PropTypes__default from 'prop-types';
import { e as _typeof, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, c as _extends } from './chunk-3e2072ff.js';
import { _ as _createClass, c as _defineProperty } from './chunk-61a72d63.js';
import ReactDOM__default from 'react-dom';

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
  children: PropTypes__default.any
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
  component: PropTypes__default.any,
  componentProps: PropTypes__default.object,
  animation: PropTypes__default.object,
  transitionName: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.object]),
  transitionEnter: PropTypes__default.bool,
  transitionAppear: PropTypes__default.bool,
  exclusive: PropTypes__default.bool,
  transitionLeave: PropTypes__default.bool,
  onEnd: PropTypes__default.func,
  onEnter: PropTypes__default.func,
  onLeave: PropTypes__default.func,
  onAppear: PropTypes__default.func,
  showProp: PropTypes__default.string,
  children: PropTypes__default.node
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

export { Animate as A, objectAssign as _, componentClasses as c };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstYjczOGZlZGQuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9pbmRleG9mL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1pbmRleG9mL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvbXBvbmVudC1jbGFzc2VzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JjLWFuaW1hdGUvZXMvQ2hpbGRyZW5VdGlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jc3MtYW5pbWF0aW9uL2VzL0V2ZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1hbmltYXRpb24vZXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy91dGlsL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9BbmltYXRlQ2hpbGQuanMiLCIuLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9BbmltYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgaW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBvYmope1xuICBpZiAoaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBvYmope1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTsiLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudHJ5IHtcbiAgdmFyIGluZGV4ID0gcmVxdWlyZSgnaW5kZXhvZicpO1xufSBjYXRjaCAoZXJyKSB7XG4gIHZhciBpbmRleCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmRleG9mJyk7XG59XG5cbi8qKlxuICogV2hpdGVzcGFjZSByZWdleHAuXG4gKi9cblxudmFyIHJlID0gL1xccysvO1xuXG4vKipcbiAqIHRvU3RyaW5nIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdyYXAgYGVsYCBpbiBhIGBDbGFzc0xpc3RgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCl7XG4gIHJldHVybiBuZXcgQ2xhc3NMaXN0KGVsKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBDbGFzc0xpc3QgZm9yIGBlbGAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KGVsKSB7XG4gIGlmICghZWwgfHwgIWVsLm5vZGVUeXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIERPTSBlbGVtZW50IHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpO1xuICB9XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy5saXN0ID0gZWwuY2xhc3NMaXN0O1xufVxuXG4vKipcbiAqIEFkZCBjbGFzcyBgbmFtZWAgaWYgbm90IGFscmVhZHkgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIHRoaXMubGlzdC5hZGQobmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICB2YXIgaSA9IGluZGV4KGFyciwgbmFtZSk7XG4gIGlmICghfmkpIGFyci5wdXNoKG5hbWUpO1xuICB0aGlzLmVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgY2xhc3MgYG5hbWVgIHdoZW4gcHJlc2VudCwgb3JcbiAqIHBhc3MgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gcmVtb3ZlXG4gKiBhbnkgd2hpY2ggbWF0Y2guXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24obmFtZSl7XG4gIGlmICgnW29iamVjdCBSZWdFeHBdJyA9PSB0b1N0cmluZy5jYWxsKG5hbWUpKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlTWF0Y2hpbmcobmFtZSk7XG4gIH1cblxuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIHRoaXMubGlzdC5yZW1vdmUobmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICB2YXIgaSA9IGluZGV4KGFyciwgbmFtZSk7XG4gIGlmICh+aSkgYXJyLnNwbGljZShpLCAxKTtcbiAgdGhpcy5lbC5jbGFzc05hbWUgPSBhcnIuam9pbignICcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBjbGFzc2VzIG1hdGNoaW5nIGByZWAuXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnJlbW92ZU1hdGNoaW5nID0gZnVuY3Rpb24ocmUpe1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZS50ZXN0KGFycltpXSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUb2dnbGUgY2xhc3MgYG5hbWVgLCBjYW4gZm9yY2Ugc3RhdGUgdmlhIGBmb3JjZWAuXG4gKlxuICogRm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBjbGFzc0xpc3QsIGJ1dCBkbyBub3Qgc3VwcG9ydCBgZm9yY2VgIHlldCxcbiAqIHRoZSBtaXN0YWtlIHdpbGwgYmUgZGV0ZWN0ZWQgYW5kIGNvcnJlY3RlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtCb29sZWFufSBmb3JjZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKG5hbWUsIGZvcmNlKXtcbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGZvcmNlKSB7XG4gICAgICBpZiAoZm9yY2UgIT09IHRoaXMubGlzdC50b2dnbGUobmFtZSwgZm9yY2UpKSB7XG4gICAgICAgIHRoaXMubGlzdC50b2dnbGUobmFtZSk7IC8vIHRvZ2dsZSBhZ2FpbiB0byBjb3JyZWN0XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdC50b2dnbGUobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBmb3JjZSkge1xuICAgIGlmICghZm9yY2UpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZChuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLnJlbW92ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGQobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBjbGFzc2VzLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmFycmF5ID0gZnVuY3Rpb24oKXtcbiAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICB2YXIgc3RyID0gY2xhc3NOYW1lLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgdmFyIGFyciA9IHN0ci5zcGxpdChyZSk7XG4gIGlmICgnJyA9PT0gYXJyWzBdKSBhcnIuc2hpZnQoKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgY2xhc3MgYG5hbWVgIGlzIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5oYXMgPVxuQ2xhc3NMaXN0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gdGhpcy5saXN0XG4gICAgPyB0aGlzLmxpc3QuY29udGFpbnMobmFtZSlcbiAgICA6ICEhIH5pbmRleCh0aGlzLmFycmF5KCksIG5hbWUpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIHJldCA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXQucHVzaChjaGlsZCk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXkpIHtcbiAgdmFyIHJldCA9IG51bGw7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSkge1xuICAgICAgICByZXQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApIHtcbiAgdmFyIHJldCA9IG51bGw7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQua2V5ID09PSBrZXkgJiYgY2hpbGQucHJvcHNbc2hvd1Byb3BdKSB7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3R3byBjaGlsZCB3aXRoIHNhbWUga2V5IGZvciA8cmMtYW5pbWF0ZT4gY2hpbGRyZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEhpZGRlbkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXksIHNob3dQcm9wKSB7XG4gIHZhciBmb3VuZCA9IDA7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm91bmQgPSBjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSAmJiAhY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZUNoaWxkcmVuKGMxLCBjMiwgc2hvd1Byb3ApIHtcbiAgdmFyIHNhbWUgPSBjMS5sZW5ndGggPT09IGMyLmxlbmd0aDtcbiAgaWYgKHNhbWUpIHtcbiAgICBjMS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaGlsZDIgPSBjMltpbmRleF07XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQyKSB7XG4gICAgICAgIGlmIChjaGlsZCAmJiAhY2hpbGQyIHx8ICFjaGlsZCAmJiBjaGlsZDIpIHtcbiAgICAgICAgICBzYW1lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGQua2V5ICE9PSBjaGlsZDIua2V5KSB7XG4gICAgICAgICAgc2FtZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3dQcm9wICYmIGNoaWxkLnByb3BzW3Nob3dQcm9wXSAhPT0gY2hpbGQyLnByb3BzW3Nob3dQcm9wXSkge1xuICAgICAgICAgIHNhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDaGlsZHJlbihwcmV2LCBuZXh0KSB7XG4gIHZhciByZXQgPSBbXTtcblxuICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcbiAgdmFyIG5leHRDaGlsZHJlblBlbmRpbmcgPSB7fTtcbiAgdmFyIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuICBwcmV2LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0LCBjaGlsZC5rZXkpKSB7XG4gICAgICBpZiAocGVuZGluZ0NoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBuZXh0Q2hpbGRyZW5QZW5kaW5nW2NoaWxkLmtleV0gPSBwZW5kaW5nQ2hpbGRyZW47XG4gICAgICAgIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICBuZXh0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0Q2hpbGRyZW5QZW5kaW5nLCBjaGlsZC5rZXkpKSB7XG4gICAgICByZXQgPSByZXQuY29uY2F0KG5leHRDaGlsZHJlblBlbmRpbmdbY2hpbGQua2V5XSk7XG4gICAgfVxuICAgIHJldC5wdXNoKGNoaWxkKTtcbiAgfSk7XG5cbiAgcmV0ID0gcmV0LmNvbmNhdChwZW5kaW5nQ2hpbGRyZW4pO1xuXG4gIHJldHVybiByZXQ7XG59IiwidmFyIFNUQVJUX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uc3RhcnQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbnN0YXJ0JyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uU3RhcnQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvblN0YXJ0J1xuICB9LFxuXG4gIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25TdGFydCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25TdGFydCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvblN0YXJ0J1xuICB9XG59O1xuXG52YXIgRU5EX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgc3RhcnRFdmVudHMgPSBbXTtcbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uO1xuICAgIGRlbGV0ZSBFTkRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbnN0YXJ0LnRyYW5zaXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKEVWRU5UX05BTUVfTUFQLCBldmVudHMpIHtcbiAgICBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICAgICBpZiAoRVZFTlRfTkFNRV9NQVAuaGFzT3duUHJvcGVydHkoYmFzZUV2ZW50TmFtZSkpIHtcbiAgICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgICAgICBldmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvY2VzcyhTVEFSVF9FVkVOVF9OQU1FX01BUCwgc3RhcnRFdmVudHMpO1xuICBwcm9jZXNzKEVORF9FVkVOVF9OQU1FX01BUCwgZW5kRXZlbnRzKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgVHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgLy8gU3RhcnQgZXZlbnRzXG4gIHN0YXJ0RXZlbnRzOiBzdGFydEV2ZW50cyxcblxuICBhZGRTdGFydEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKHN0YXJ0RXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cblxuICAvLyBFbmQgZXZlbnRzXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbkV2ZW50czsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJ2NvbXBvbmVudC1jbGFzc2VzJztcblxudmFyIGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gRXZlbnQuZW5kRXZlbnRzLmxlbmd0aCAhPT0gMDtcbnZhciBjYXBpdGFsUHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsXG4vLyBtcyBpcyBzcGVjaWFsIC4uLi4gIVxuJ21zJ107XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICdtcy0nLCAnJ107XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICAvLyBvbGQgZmYgbmVlZCBudWxsLCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2dldENvbXB1dGVkU3R5bGVcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciByZXQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHJldCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJlZml4ZXNbaV0gKyBuYW1lKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZml4QnJvd3NlckJ5VGltZW91dChub2RlKSB7XG4gIGlmIChpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCkge1xuICAgIHZhciB0cmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciB0aW1lID0gTWF0aC5tYXgodHJhbnNpdGlvbkR1cmF0aW9uICsgdHJhbnNpdGlvbkRlbGF5LCBhbmltYXRpb25EdXJhdGlvbiArIGFuaW1hdGlvbkRlbGF5KTtcbiAgICAvLyBzb21ldGltZXMsIGJyb3dzZXIgYnVnXG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lICogMTAwMCArIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKSB7XG4gIGlmIChub2RlLnJjRW5kQW5pbVRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQobm9kZS5yY0VuZEFuaW1UaW1lb3V0KTtcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbnZhciBjc3NBbmltYXRpb24gPSBmdW5jdGlvbiBjc3NBbmltYXRpb24obm9kZSwgdHJhbnNpdGlvbk5hbWUsIGVuZENhbGxiYWNrKSB7XG4gIHZhciBuYW1lSXNPYmogPSAodHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0cmFuc2l0aW9uTmFtZSkpID09PSAnb2JqZWN0JztcbiAgdmFyIGNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLm5hbWUgOiB0cmFuc2l0aW9uTmFtZTtcbiAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLmFjdGl2ZSA6IHRyYW5zaXRpb25OYW1lICsgJy1hY3RpdmUnO1xuICB2YXIgZW5kID0gZW5kQ2FsbGJhY2s7XG4gIHZhciBzdGFydCA9IHZvaWQgMDtcbiAgdmFyIGFjdGl2ZSA9IHZvaWQgMDtcbiAgdmFyIG5vZGVDbGFzc2VzID0gY2xhc3Nlcyhub2RlKTtcblxuICBpZiAoZW5kQ2FsbGJhY2sgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVuZENhbGxiYWNrKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBlbmQgPSBlbmRDYWxsYmFjay5lbmQ7XG4gICAgc3RhcnQgPSBlbmRDYWxsYmFjay5zdGFydDtcbiAgICBhY3RpdmUgPSBlbmRDYWxsYmFjay5hY3RpdmU7XG4gIH1cblxuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBub2RlQ2xhc3Nlcy5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICBub2RlQ2xhc3Nlcy5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgIEV2ZW50LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGVuZCBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgIGlmIChlbmQpIHtcbiAgICAgIGVuZCgpO1xuICAgIH1cbiAgfTtcblxuICBFdmVudC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgaWYgKHN0YXJ0KSB7XG4gICAgc3RhcnQoKTtcbiAgfVxuICBub2RlQ2xhc3Nlcy5hZGQoY2xhc3NOYW1lKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIG5vZGVDbGFzc2VzLmFkZChhY3RpdmVDbGFzc05hbWUpO1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoYWN0aXZlLCAwKTtcbiAgICB9XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgICAvLyAzMG1zIGZvciBmaXJlZm94XG4gIH0sIDMwKTtcblxuICByZXR1cm4ge1xuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zdHlsZSA9IGZ1bmN0aW9uIChub2RlLCBzdHlsZSwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgRXZlbnQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgY2FsbGJhY2sgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIEV2ZW50LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzIGluIHN0eWxlKSB7XG4gICAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkocykpIHtcbiAgICAgICAgbm9kZS5zdHlsZVtzXSA9IHN0eWxlW3NdO1xuICAgICAgfVxuICAgIH1cbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSk7XG4gIH0sIDApO1xufTtcblxuY3NzQW5pbWF0aW9uLnNldFRyYW5zaXRpb24gPSBmdW5jdGlvbiAobm9kZSwgcCwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5ID0gcDtcbiAgdmFyIHYgPSB2YWx1ZTtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICB2ID0gcHJvcGVydHk7XG4gICAgcHJvcGVydHkgPSAnJztcbiAgfVxuICBwcm9wZXJ0eSA9IHByb3BlcnR5IHx8ICcnO1xuICBjYXBpdGFsUHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgbm9kZS5zdHlsZVtwcmVmaXggKyAnVHJhbnNpdGlvbicgKyBwcm9wZXJ0eV0gPSB2O1xuICB9KTtcbn07XG5cbmNzc0FuaW1hdGlvbi5pc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkO1xuXG5leHBvcnQgeyBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBjc3NBbmltYXRpb247IiwidmFyIHV0aWwgPSB7XG4gIGlzQXBwZWFyU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0FwcGVhclN1cHBvcnRlZChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyIHx8IHByb3BzLmFuaW1hdGlvbi5hcHBlYXI7XG4gIH0sXG4gIGlzRW50ZXJTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzRW50ZXJTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkVudGVyIHx8IHByb3BzLmFuaW1hdGlvbi5lbnRlcjtcbiAgfSxcbiAgaXNMZWF2ZVN1cHBvcnRlZDogZnVuY3Rpb24gaXNMZWF2ZVN1cHBvcnRlZChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy50cmFuc2l0aW9uTGVhdmUgfHwgcHJvcHMuYW5pbWF0aW9uLmxlYXZlO1xuICB9LFxuICBhbGxvd0FwcGVhckNhbGxiYWNrOiBmdW5jdGlvbiBhbGxvd0FwcGVhckNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25BcHBlYXIgfHwgcHJvcHMuYW5pbWF0aW9uLmFwcGVhcjtcbiAgfSxcbiAgYWxsb3dFbnRlckNhbGxiYWNrOiBmdW5jdGlvbiBhbGxvd0VudGVyQ2FsbGJhY2socHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbkVudGVyIHx8IHByb3BzLmFuaW1hdGlvbi5lbnRlcjtcbiAgfSxcbiAgYWxsb3dMZWF2ZUNhbGxiYWNrOiBmdW5jdGlvbiBhbGxvd0xlYXZlQ2FsbGJhY2socHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbkxlYXZlIHx8IHByb3BzLmFuaW1hdGlvbi5sZWF2ZTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHV0aWw7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3NzQW5pbWF0ZSwgeyBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB9IGZyb20gJ2Nzcy1hbmltYXRpb24nO1xuaW1wb3J0IGFuaW1VdGlsIGZyb20gJy4vdXRpbC9hbmltYXRlJztcblxudmFyIHRyYW5zaXRpb25NYXAgPSB7XG4gIGVudGVyOiAndHJhbnNpdGlvbkVudGVyJyxcbiAgYXBwZWFyOiAndHJhbnNpdGlvbkFwcGVhcicsXG4gIGxlYXZlOiAndHJhbnNpdGlvbkxlYXZlJ1xufTtcblxudmFyIEFuaW1hdGVDaGlsZCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBbmltYXRlQ2hpbGQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFuaW1hdGVDaGlsZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWF0ZUNoaWxkKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQW5pbWF0ZUNoaWxkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQW5pbWF0ZUNoaWxkKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQW5pbWF0ZUNoaWxkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsRW50ZXIoZG9uZSkge1xuICAgICAgaWYgKGFuaW1VdGlsLmlzRW50ZXJTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKCdlbnRlcicsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsQXBwZWFyKGRvbmUpIHtcbiAgICAgIGlmIChhbmltVXRpbC5pc0FwcGVhclN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24oJ2FwcGVhcicsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxMZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShkb25lKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuaXNMZWF2ZVN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24oJ2xlYXZlJywgZG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbHdheXMgc3luYywgZG8gbm90IGludGVydXB0IHdpdGggcmVhY3QgY29tcG9uZW50IGxpZmUgY3ljbGVcbiAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiAtPiBhbmltYXRlIGhpZGRlbiAtPlxuICAgICAgICAvLyBkaWRVcGRhdGUgLT4gYW5pbWF0ZSBsZWF2ZSAtPiB1bm1vdW50IChpZiBhbmltYXRlIGlzIG5vbmUpXG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0cmFuc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNpdGlvbihhbmltYXRpb25UeXBlLCBmaW5pc2hDYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgICB2YXIgbmFtZUlzT2JqID0gdHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAnb2JqZWN0JztcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgICAgX3RoaXMyLnN0b3BwZXIgPSBudWxsO1xuICAgICAgICBmaW5pc2hDYWxsYmFjaygpO1xuICAgICAgfTtcbiAgICAgIGlmICgoaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgfHwgIXByb3BzLmFuaW1hdGlvblthbmltYXRpb25UeXBlXSkgJiYgdHJhbnNpdGlvbk5hbWUgJiYgcHJvcHNbdHJhbnNpdGlvbk1hcFthbmltYXRpb25UeXBlXV0pIHtcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZVthbmltYXRpb25UeXBlXSA6IHRyYW5zaXRpb25OYW1lICsgJy0nICsgYW5pbWF0aW9uVHlwZTtcbiAgICAgICAgdmFyIGFjdGl2ZU5hbWUgPSBuYW1lICsgJy1hY3RpdmUnO1xuICAgICAgICBpZiAobmFtZUlzT2JqICYmIHRyYW5zaXRpb25OYW1lW2FuaW1hdGlvblR5cGUgKyAnQWN0aXZlJ10pIHtcbiAgICAgICAgICBhY3RpdmVOYW1lID0gdHJhbnNpdGlvbk5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BwZXIgPSBjc3NBbmltYXRlKG5vZGUsIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aXZlTmFtZVxuICAgICAgICB9LCBlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wcGVyID0gcHJvcHMuYW5pbWF0aW9uW2FuaW1hdGlvblR5cGVdKG5vZGUsIGVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB2YXIgc3RvcHBlciA9IHRoaXMuc3RvcHBlcjtcbiAgICAgIGlmIChzdG9wcGVyKSB7XG4gICAgICAgIHRoaXMuc3RvcHBlciA9IG51bGw7XG4gICAgICAgIHN0b3BwZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBbmltYXRlQ2hpbGQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkFuaW1hdGVDaGlsZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG59O1xuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZUNoaWxkOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB0b0FycmF5Q2hpbGRyZW4sIG1lcmdlQ2hpbGRyZW4sIGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5LCBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXksIGlzU2FtZUNoaWxkcmVuIH0gZnJvbSAnLi9DaGlsZHJlblV0aWxzJztcbmltcG9ydCBBbmltYXRlQ2hpbGQgZnJvbSAnLi9BbmltYXRlQ2hpbGQnO1xuaW1wb3J0IGFuaW1VdGlsIGZyb20gJy4vdXRpbC9hbmltYXRlJztcblxudmFyIGRlZmF1bHRLZXkgPSAncmNfYW5pbWF0ZV8nICsgRGF0ZS5ub3coKTtcblxuZnVuY3Rpb24gZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICBpZiAoIWNoaWxkcmVuLmtleSkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICBrZXk6IGRlZmF1bHRLZXlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgQW5pbWF0ZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBbmltYXRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZnVuY3Rpb24gQW5pbWF0ZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbmltYXRlKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBbmltYXRlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQW5pbWF0ZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzID0ge307XG4gICAgX3RoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICBfdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSlcbiAgICB9O1xuXG4gICAgX3RoaXMuY2hpbGRyZW5SZWZzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFuaW1hdGUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgc2hvd1Byb3AgPSB0aGlzLnByb3BzLnNob3dQcm9wO1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gISFjaGlsZC5wcm9wc1tzaG93UHJvcF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgX3RoaXMyLnBlcmZvcm1BcHBlYXIoY2hpbGQua2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdGhpcy5uZXh0UHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICB2YXIgbmV4dENoaWxkcmVuID0gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKG5leHRQcm9wcykpO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIC8vIGV4Y2x1c2l2ZSBuZWVkcyBpbW1lZGlhdGUgcmVzcG9uc2VcbiAgICAgIGlmIChwcm9wcy5leGNsdXNpdmUpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBfdGhpczMuc3RvcChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHZhciBzaG93UHJvcCA9IHByb3BzLnNob3dQcm9wO1xuICAgICAgdmFyIGN1cnJlbnRseUFuaW1hdGluZ0tleXMgPSB0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXM7XG4gICAgICAvLyBsYXN0IHByb3BzIGNoaWxkcmVuIGlmIGV4Y2x1c2l2ZVxuICAgICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9IHByb3BzLmV4Y2x1c2l2ZSA/IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpIDogdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICAgIC8vIGluIGNhc2UgZGVzdHJveSBpbiBzaG93UHJvcCBtb2RlXG4gICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICBjdXJyZW50Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudENoaWxkKSB7XG4gICAgICAgICAgdmFyIG5leHRDaGlsZCA9IGN1cnJlbnRDaGlsZCAmJiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkobmV4dENoaWxkcmVuLCBjdXJyZW50Q2hpbGQua2V5KTtcbiAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSB2b2lkIDA7XG4gICAgICAgICAgaWYgKCghbmV4dENoaWxkIHx8ICFuZXh0Q2hpbGQucHJvcHNbc2hvd1Byb3BdKSAmJiBjdXJyZW50Q2hpbGQucHJvcHNbc2hvd1Byb3BdKSB7XG4gICAgICAgICAgICBuZXdDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChuZXh0Q2hpbGQgfHwgY3VycmVudENoaWxkLCBfZGVmaW5lUHJvcGVydHkoe30sIHNob3dQcm9wLCB0cnVlKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0NoaWxkID0gbmV4dENoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobmV3Q2hpbGQpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkcmVuLnB1c2gobmV3Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5leHRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChuZXh0Q2hpbGQpIHtcbiAgICAgICAgICBpZiAoIW5leHRDaGlsZCB8fCAhZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwgbmV4dENoaWxkLmtleSkpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkcmVuLnB1c2gobmV4dENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Q2hpbGRyZW4gPSBtZXJnZUNoaWxkcmVuKGN1cnJlbnRDaGlsZHJlbiwgbmV4dENoaWxkcmVuKTtcbiAgICAgIH1cblxuICAgICAgLy8gbmVlZCByZW5kZXIgdG8gYXZvaWQgdXBkYXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2hpbGRyZW46IG5ld0NoaWxkcmVuXG4gICAgICB9KTtcblxuICAgICAgbmV4dENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBrZXkgPSBjaGlsZCAmJiBjaGlsZC5rZXk7XG4gICAgICAgIGlmIChjaGlsZCAmJiBjdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc1ByZXYgPSBjaGlsZCAmJiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpO1xuICAgICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgICB2YXIgc2hvd0luTmV4dCA9IGNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgICBpZiAoaGFzUHJldikge1xuICAgICAgICAgICAgdmFyIHNob3dJbk5vdyA9IGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5LCBzaG93UHJvcCk7XG4gICAgICAgICAgICBpZiAoIXNob3dJbk5vdyAmJiBzaG93SW5OZXh0KSB7XG4gICAgICAgICAgICAgIF90aGlzMy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChzaG93SW5OZXh0KSB7XG4gICAgICAgICAgICBfdGhpczMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGFzUHJldikge1xuICAgICAgICAgIF90aGlzMy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjdXJyZW50Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGtleSA9IGNoaWxkICYmIGNoaWxkLmtleTtcbiAgICAgICAgaWYgKGNoaWxkICYmIGN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzTmV4dCA9IGNoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0Q2hpbGRyZW4sIGtleSk7XG4gICAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICAgIHZhciBzaG93SW5Ob3cgPSBjaGlsZC5wcm9wc1tzaG93UHJvcF07XG4gICAgICAgICAgaWYgKGhhc05leHQpIHtcbiAgICAgICAgICAgIHZhciBzaG93SW5OZXh0ID0gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkobmV4dENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgICAgICAgIGlmICghc2hvd0luTmV4dCAmJiBzaG93SW5Ob3cpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLmtleXNUb0xlYXZlLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHNob3dJbk5vdykge1xuICAgICAgICAgICAgX3RoaXMzLmtleXNUb0xlYXZlLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc05leHQpIHtcbiAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB2YXIga2V5c1RvRW50ZXIgPSB0aGlzLmtleXNUb0VudGVyO1xuICAgICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgICAga2V5c1RvRW50ZXIuZm9yRWFjaCh0aGlzLnBlcmZvcm1FbnRlcik7XG4gICAgICB2YXIga2V5c1RvTGVhdmUgPSB0aGlzLmtleXNUb0xlYXZlO1xuICAgICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICAgICAga2V5c1RvTGVhdmUuZm9yRWFjaCh0aGlzLnBlcmZvcm1MZWF2ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNWYWxpZENoaWxkQnlLZXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ZhbGlkQ2hpbGRCeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSkge1xuICAgICAgdmFyIHNob3dQcm9wID0gdGhpcy5wcm9wcy5zaG93UHJvcDtcbiAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICByZXR1cm4gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKGtleSkge1xuICAgICAgZGVsZXRlIHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldO1xuICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMuY2hpbGRyZW5SZWZzW2tleV07XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLm5leHRQcm9wcyA9IHByb3BzO1xuICAgICAgdmFyIHN0YXRlQ2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgICAgdmFyIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgIGlmIChzdGF0ZUNoaWxkcmVuKSB7XG4gICAgICAgIGNoaWxkcmVuID0gc3RhdGVDaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjaGlsZC5rZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbXVzdCBzZXQga2V5IGZvciA8cmMtYW5pbWF0ZT4gY2hpbGRyZW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBBbmltYXRlQ2hpbGQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogY2hpbGQua2V5LFxuICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmNoaWxkcmVuUmVmc1tjaGlsZC5rZXldID0gbm9kZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwcm9wcy5hbmltYXRpb24sXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyOiBwcm9wcy50cmFuc2l0aW9uRW50ZXIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHByb3BzLnRyYW5zaXRpb25BcHBlYXIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZTogcHJvcHMudHJhbnNpdGlvbkxlYXZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHZhciBDb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQ7XG4gICAgICBpZiAoQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBwYXNzZWRQcm9wcyA9IHByb3BzO1xuICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBwYXNzZWRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlXG4gICAgICAgICAgfSwgcHJvcHMuY29tcG9uZW50UHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICBwYXNzZWRQcm9wcyxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkcmVuWzBdIHx8IG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFuaW1hdGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkFuaW1hdGUuaXNBbmltYXRlID0gdHJ1ZTtcbkFuaW1hdGUucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5hbnksXG4gIGNvbXBvbmVudFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhbmltYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gIHRyYW5zaXRpb25FbnRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYW5zaXRpb25BcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuICBleGNsdXNpdmU6IFByb3BUeXBlcy5ib29sLFxuICB0cmFuc2l0aW9uTGVhdmU6IFByb3BUeXBlcy5ib29sLFxuICBvbkVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25BcHBlYXI6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93UHJvcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuQW5pbWF0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFuaW1hdGlvbjoge30sXG4gIGNvbXBvbmVudDogJ3NwYW4nLFxuICBjb21wb25lbnRQcm9wczoge30sXG4gIHRyYW5zaXRpb25FbnRlcjogdHJ1ZSxcbiAgdHJhbnNpdGlvbkxlYXZlOiB0cnVlLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcbiAgb25FbmQ6IG5vb3AsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uTGVhdmU6IG5vb3AsXG4gIG9uQXBwZWFyOiBub29wXG59O1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gIHRoaXMucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIG1heSBhbHJlYWR5IHJlbW92ZSBieSBleGNsdXNpdmVcbiAgICBpZiAoX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldKSB7XG4gICAgICBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgIF90aGlzNS5jaGlsZHJlblJlZnNba2V5XS5jb21wb25lbnRXaWxsRW50ZXIoX3RoaXM1LmhhbmRsZURvbmVBZGRpbmcuYmluZChfdGhpczUsIGtleSwgJ2VudGVyJykpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnBlcmZvcm1BcHBlYXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKF90aGlzNS5jaGlsZHJlblJlZnNba2V5XSkge1xuICAgICAgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG4gICAgICBfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0uY29tcG9uZW50V2lsbEFwcGVhcihfdGhpczUuaGFuZGxlRG9uZUFkZGluZy5iaW5kKF90aGlzNSwga2V5LCAnYXBwZWFyJykpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmhhbmRsZURvbmVBZGRpbmcgPSBmdW5jdGlvbiAoa2V5LCB0eXBlKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXM1LnByb3BzO1xuICAgIGRlbGV0ZSBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldO1xuICAgIC8vIGlmIHVwZGF0ZSBvbiBleGNsdXNpdmUgbW9kZSwgc2tpcCBjaGVja1xuICAgIGlmIChwcm9wcy5leGNsdXNpdmUgJiYgcHJvcHMgIT09IF90aGlzNS5uZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpO1xuICAgIGlmICghX3RoaXM1LmlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSkge1xuICAgICAgLy8gZXhjbHVzaXZlIHdpbGwgbm90IG5lZWQgdGhpc1xuICAgICAgX3RoaXM1LnBlcmZvcm1MZWF2ZShrZXkpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FwcGVhcicpIHtcbiAgICAgIGlmIChhbmltVXRpbC5hbGxvd0FwcGVhckNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICBwcm9wcy5vbkFwcGVhcihrZXkpO1xuICAgICAgICBwcm9wcy5vbkVuZChrZXksIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYW5pbVV0aWwuYWxsb3dFbnRlckNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgcHJvcHMub25FbnRlcihrZXkpO1xuICAgICAgcHJvcHMub25FbmQoa2V5LCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5wZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgLy8gbWF5IGFscmVhZHkgcmVtb3ZlIGJ5IGV4Y2x1c2l2ZVxuICAgIGlmIChfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0pIHtcbiAgICAgIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldLmNvbXBvbmVudFdpbGxMZWF2ZShfdGhpczUuaGFuZGxlRG9uZUxlYXZpbmcuYmluZChfdGhpczUsIGtleSkpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmhhbmRsZURvbmVMZWF2aW5nID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzNS5wcm9wcztcbiAgICBkZWxldGUgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICAvLyBpZiB1cGRhdGUgb24gZXhjbHVzaXZlIG1vZGUsIHNraXAgY2hlY2tcbiAgICBpZiAocHJvcHMuZXhjbHVzaXZlICYmIHByb3BzICE9PSBfdGhpczUubmV4dFByb3BzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKTtcbiAgICAvLyBpbiBjYXNlIHN0YXRlIGNoYW5nZSBpcyB0b28gZmFzdFxuICAgIGlmIChfdGhpczUuaXNWYWxpZENoaWxkQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpKSB7XG4gICAgICBfdGhpczUucGVyZm9ybUVudGVyKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbmQgPSBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICAgIGlmIChhbmltVXRpbC5hbGxvd0xlYXZlQ2FsbGJhY2socHJvcHMpKSB7XG4gICAgICAgICAgcHJvcHMub25MZWF2ZShrZXkpO1xuICAgICAgICAgIHByb3BzLm9uRW5kKGtleSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKCFpc1NhbWVDaGlsZHJlbihfdGhpczUuc3RhdGUuY2hpbGRyZW4sIGN1cnJlbnRDaGlsZHJlbiwgcHJvcHMuc2hvd1Byb3ApKSB7XG4gICAgICAgIF90aGlzNS5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2hpbGRyZW46IGN1cnJlbnRDaGlsZHJlblxuICAgICAgICB9LCBlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZTsiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIl0sIm5hbWVzIjpbInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQxIiwiUmVhY3QiLCJFdmVudCIsImNsYXNzZXMiLCJhbmltVXRpbCIsIlJlYWN0RE9NIiwiY3NzQW5pbWF0ZSIsIlByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQzs7QUFFekIsV0FBYyxHQUFHLFNBQVMsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUNqQyxJQUFJLE9BQU8sRUFBRSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7SUFDbkMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQzlCO0VBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQ1RELG9CQUFjLEdBQUcsU0FBUyxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ2pDLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7SUFDbkMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQzlCO0VBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQ05EOzs7O0FBSUEsSUFBSTtFQUNGLElBQUksS0FBSyxHQUFHQSxPQUFrQixDQUFDO0NBQ2hDLENBQUMsT0FBTyxHQUFHLEVBQUU7RUFDWixJQUFJLEtBQUssR0FBR0MsZ0JBQTRCLENBQUM7Q0FDMUM7Ozs7OztBQU1ELElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQzs7Ozs7O0FBTWYsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFR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

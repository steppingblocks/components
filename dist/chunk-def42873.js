import React__default from 'react';
import PropTypes__default from 'prop-types';
import { _ as _typeof, k as _inherits, j as _classCallCheck, l as _possibleConstructorReturn, g as _extends } from './chunk-27ab9880.js';
import ReactDOM__default from 'react-dom';
import { _ as _createClass, e as _defineProperty } from './chunk-40ab7835.js';

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

export { Animate as A, objectAssign as _, componentClasses as c };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstZGVmNDI4NzMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JjLWFuaW1hdGUvZXMvQ2hpbGRyZW5VdGlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jc3MtYW5pbWF0aW9uL2VzL0V2ZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2luZGV4b2YvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWluZGV4b2YvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWNsYXNzZXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvY3NzLWFuaW1hdGlvbi9lcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL3V0aWwvYW5pbWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0FuaW1hdGVDaGlsZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0FuaW1hdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIHJldCA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXQucHVzaChjaGlsZCk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXkpIHtcbiAgdmFyIHJldCA9IG51bGw7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSkge1xuICAgICAgICByZXQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApIHtcbiAgdmFyIHJldCA9IG51bGw7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQua2V5ID09PSBrZXkgJiYgY2hpbGQucHJvcHNbc2hvd1Byb3BdKSB7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3R3byBjaGlsZCB3aXRoIHNhbWUga2V5IGZvciA8cmMtYW5pbWF0ZT4gY2hpbGRyZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEhpZGRlbkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXksIHNob3dQcm9wKSB7XG4gIHZhciBmb3VuZCA9IDA7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm91bmQgPSBjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSAmJiAhY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZUNoaWxkcmVuKGMxLCBjMiwgc2hvd1Byb3ApIHtcbiAgdmFyIHNhbWUgPSBjMS5sZW5ndGggPT09IGMyLmxlbmd0aDtcbiAgaWYgKHNhbWUpIHtcbiAgICBjMS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaGlsZDIgPSBjMltpbmRleF07XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQyKSB7XG4gICAgICAgIGlmIChjaGlsZCAmJiAhY2hpbGQyIHx8ICFjaGlsZCAmJiBjaGlsZDIpIHtcbiAgICAgICAgICBzYW1lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGQua2V5ICE9PSBjaGlsZDIua2V5KSB7XG4gICAgICAgICAgc2FtZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3dQcm9wICYmIGNoaWxkLnByb3BzW3Nob3dQcm9wXSAhPT0gY2hpbGQyLnByb3BzW3Nob3dQcm9wXSkge1xuICAgICAgICAgIHNhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDaGlsZHJlbihwcmV2LCBuZXh0KSB7XG4gIHZhciByZXQgPSBbXTtcblxuICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcbiAgdmFyIG5leHRDaGlsZHJlblBlbmRpbmcgPSB7fTtcbiAgdmFyIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuICBwcmV2LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0LCBjaGlsZC5rZXkpKSB7XG4gICAgICBpZiAocGVuZGluZ0NoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBuZXh0Q2hpbGRyZW5QZW5kaW5nW2NoaWxkLmtleV0gPSBwZW5kaW5nQ2hpbGRyZW47XG4gICAgICAgIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICBuZXh0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0Q2hpbGRyZW5QZW5kaW5nLCBjaGlsZC5rZXkpKSB7XG4gICAgICByZXQgPSByZXQuY29uY2F0KG5leHRDaGlsZHJlblBlbmRpbmdbY2hpbGQua2V5XSk7XG4gICAgfVxuICAgIHJldC5wdXNoKGNoaWxkKTtcbiAgfSk7XG5cbiAgcmV0ID0gcmV0LmNvbmNhdChwZW5kaW5nQ2hpbGRyZW4pO1xuXG4gIHJldHVybiByZXQ7XG59IiwidmFyIFNUQVJUX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uc3RhcnQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbnN0YXJ0JyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uU3RhcnQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvblN0YXJ0J1xuICB9LFxuXG4gIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25TdGFydCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25TdGFydCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvblN0YXJ0J1xuICB9XG59O1xuXG52YXIgRU5EX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgc3RhcnRFdmVudHMgPSBbXTtcbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uO1xuICAgIGRlbGV0ZSBFTkRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbnN0YXJ0LnRyYW5zaXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKEVWRU5UX05BTUVfTUFQLCBldmVudHMpIHtcbiAgICBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICAgICBpZiAoRVZFTlRfTkFNRV9NQVAuaGFzT3duUHJvcGVydHkoYmFzZUV2ZW50TmFtZSkpIHtcbiAgICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgICAgICBldmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvY2VzcyhTVEFSVF9FVkVOVF9OQU1FX01BUCwgc3RhcnRFdmVudHMpO1xuICBwcm9jZXNzKEVORF9FVkVOVF9OQU1FX01BUCwgZW5kRXZlbnRzKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgVHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgLy8gU3RhcnQgZXZlbnRzXG4gIHN0YXJ0RXZlbnRzOiBzdGFydEV2ZW50cyxcblxuICBhZGRTdGFydEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKHN0YXJ0RXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cblxuICAvLyBFbmQgZXZlbnRzXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbkV2ZW50czsiLCJcbnZhciBpbmRleE9mID0gW10uaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChpbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChhcnIuaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59OyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG50cnkge1xuICB2YXIgaW5kZXggPSByZXF1aXJlKCdpbmRleG9mJyk7XG59IGNhdGNoIChlcnIpIHtcbiAgdmFyIGluZGV4ID0gcmVxdWlyZSgnY29tcG9uZW50LWluZGV4b2YnKTtcbn1cblxuLyoqXG4gKiBXaGl0ZXNwYWNlIHJlZ2V4cC5cbiAqL1xuXG52YXIgcmUgPSAvXFxzKy87XG5cbi8qKlxuICogdG9TdHJpbmcgcmVmZXJlbmNlLlxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV3JhcCBgZWxgIGluIGEgYENsYXNzTGlzdGAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKXtcbiAgcmV0dXJuIG5ldyBDbGFzc0xpc3QoZWwpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IENsYXNzTGlzdCBmb3IgYGVsYC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBDbGFzc0xpc3QoZWwpIHtcbiAgaWYgKCFlbCB8fCAhZWwubm9kZVR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgRE9NIGVsZW1lbnQgcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7XG4gIH1cbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLmxpc3QgPSBlbC5jbGFzc0xpc3Q7XG59XG5cbi8qKlxuICogQWRkIGNsYXNzIGBuYW1lYCBpZiBub3QgYWxyZWFkeSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24obmFtZSl7XG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgdGhpcy5saXN0LmFkZChuYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcbiAgaWYgKCF+aSkgYXJyLnB1c2gobmFtZSk7XG4gIHRoaXMuZWwuY2xhc3NOYW1lID0gYXJyLmpvaW4oJyAnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyBgbmFtZWAgd2hlbiBwcmVzZW50LCBvclxuICogcGFzcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byByZW1vdmVcbiAqIGFueSB3aGljaCBtYXRjaC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKXtcbiAgaWYgKCdbb2JqZWN0IFJlZ0V4cF0nID09IHRvU3RyaW5nLmNhbGwobmFtZSkpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVNYXRjaGluZyhuYW1lKTtcbiAgfVxuXG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgdGhpcy5saXN0LnJlbW92ZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcbiAgaWYgKH5pKSBhcnIuc3BsaWNlKGksIDEpO1xuICB0aGlzLmVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGNsYXNzZXMgbWF0Y2hpbmcgYHJlYC5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlTWF0Y2hpbmcgPSBmdW5jdGlvbihyZSl7XG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlLnRlc3QoYXJyW2ldKSkge1xuICAgICAgdGhpcy5yZW1vdmUoYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBjbGFzcyBgbmFtZWAsIGNhbiBmb3JjZSBzdGF0ZSB2aWEgYGZvcmNlYC5cbiAqXG4gKiBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGNsYXNzTGlzdCwgYnV0IGRvIG5vdCBzdXBwb3J0IGBmb3JjZWAgeWV0LFxuICogdGhlIG1pc3Rha2Ugd2lsbCBiZSBkZXRlY3RlZCBhbmQgY29ycmVjdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZvcmNlXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24obmFtZSwgZm9yY2Upe1xuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZm9yY2UpIHtcbiAgICAgIGlmIChmb3JjZSAhPT0gdGhpcy5saXN0LnRvZ2dsZShuYW1lLCBmb3JjZSkpIHtcbiAgICAgICAgdGhpcy5saXN0LnRvZ2dsZShuYW1lKTsgLy8gdG9nZ2xlIGFnYWluIHRvIGNvcnJlY3RcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0LnRvZ2dsZShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSkge1xuICAgICAgdGhpcy5yZW1vdmUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZChuYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIGNsYXNzZXMuXG4gKlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuYXJyYXkgPSBmdW5jdGlvbigpe1xuICB2YXIgY2xhc3NOYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gIHZhciBzdHIgPSBjbGFzc05hbWUucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB2YXIgYXJyID0gc3RyLnNwbGl0KHJlKTtcbiAgaWYgKCcnID09PSBhcnJbMF0pIGFyci5zaGlmdCgpO1xuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBjbGFzcyBgbmFtZWAgaXMgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmhhcyA9XG5DbGFzc0xpc3QucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiB0aGlzLmxpc3RcbiAgICA/IHRoaXMubGlzdC5jb250YWlucyhuYW1lKVxuICAgIDogISEgfmluZGV4KHRoaXMuYXJyYXkoKSwgbmFtZSk7XG59O1xuIiwiaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICdjb21wb25lbnQtY2xhc3Nlcyc7XG5cbnZhciBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IEV2ZW50LmVuZEV2ZW50cy5sZW5ndGggIT09IDA7XG52YXIgY2FwaXRhbFByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLFxuLy8gbXMgaXMgc3BlY2lhbCAuLi4uICFcbidtcyddO1xudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnbXMtJywgJyddO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KG5vZGUsIG5hbWUpIHtcbiAgLy8gb2xkIGZmIG5lZWQgbnVsbCwgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9nZXRDb21wdXRlZFN0eWxlXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgcmV0ID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICByZXQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByZWZpeGVzW2ldICsgbmFtZSk7XG4gICAgaWYgKHJldCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSkge1xuICBpZiAoaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQpIHtcbiAgICB2YXIgdHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAndHJhbnNpdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciBhbmltYXRpb25EZWxheSA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZHVyYXRpb24nKSkgfHwgMDtcbiAgICB2YXIgdGltZSA9IE1hdGgubWF4KHRyYW5zaXRpb25EdXJhdGlvbiArIHRyYW5zaXRpb25EZWxheSwgYW5pbWF0aW9uRHVyYXRpb24gKyBhbmltYXRpb25EZWxheSk7XG4gICAgLy8gc29tZXRpbWVzLCBicm93c2VyIGJ1Z1xuICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSwgdGltZSAqIDEwMDAgKyAyMDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSkge1xuICBpZiAobm9kZS5yY0VuZEFuaW1UaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KG5vZGUucmNFbmRBbmltVGltZW91dCk7XG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gbnVsbDtcbiAgfVxufVxuXG52YXIgY3NzQW5pbWF0aW9uID0gZnVuY3Rpb24gY3NzQW5pbWF0aW9uKG5vZGUsIHRyYW5zaXRpb25OYW1lLCBlbmRDYWxsYmFjaykge1xuICB2YXIgbmFtZUlzT2JqID0gKHR5cGVvZiB0cmFuc2l0aW9uTmFtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHJhbnNpdGlvbk5hbWUpKSA9PT0gJ29iamVjdCc7XG4gIHZhciBjbGFzc05hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZS5uYW1lIDogdHJhbnNpdGlvbk5hbWU7XG4gIHZhciBhY3RpdmVDbGFzc05hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZS5hY3RpdmUgOiB0cmFuc2l0aW9uTmFtZSArICctYWN0aXZlJztcbiAgdmFyIGVuZCA9IGVuZENhbGxiYWNrO1xuICB2YXIgc3RhcnQgPSB2b2lkIDA7XG4gIHZhciBhY3RpdmUgPSB2b2lkIDA7XG4gIHZhciBub2RlQ2xhc3NlcyA9IGNsYXNzZXMobm9kZSk7XG5cbiAgaWYgKGVuZENhbGxiYWNrICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbmRDYWxsYmFjaykgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZW5kID0gZW5kQ2FsbGJhY2suZW5kO1xuICAgIHN0YXJ0ID0gZW5kQ2FsbGJhY2suc3RhcnQ7XG4gICAgYWN0aXZlID0gZW5kQ2FsbGJhY2suYWN0aXZlO1xuICB9XG5cbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgbm9kZUNsYXNzZXMucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgbm9kZUNsYXNzZXMucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICBFdmVudC5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyID0gbnVsbDtcblxuICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBlbmQgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICBpZiAoZW5kKSB7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgRXZlbnQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuXG4gIGlmIChzdGFydCkge1xuICAgIHN0YXJ0KCk7XG4gIH1cbiAgbm9kZUNsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG5cbiAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICBub2RlQ2xhc3Nlcy5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KGFjdGl2ZSwgMCk7XG4gICAgfVxuICAgIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSk7XG4gICAgLy8gMzBtcyBmb3IgZmlyZWZveFxuICB9LCAzMCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5jc3NBbmltYXRpb24uc3R5bGUgPSBmdW5jdGlvbiAobm9kZSwgc3R5bGUsIGNhbGxiYWNrKSB7XG4gIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgfVxuXG4gIG5vZGUucmNFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5yY0FuaW1UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQobm9kZS5yY0FuaW1UaW1lb3V0KTtcbiAgICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKTtcblxuICAgIEV2ZW50LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGNhbGxiYWNrIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBFdmVudC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyBpbiBzdHlsZSkge1xuICAgICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KHMpKSB7XG4gICAgICAgIG5vZGUuc3R5bGVbc10gPSBzdHlsZVtzXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICB9LCAwKTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKG5vZGUsIHAsIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHA7XG4gIHZhciB2ID0gdmFsdWU7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdiA9IHByb3BlcnR5O1xuICAgIHByb3BlcnR5ID0gJyc7XG4gIH1cbiAgcHJvcGVydHkgPSBwcm9wZXJ0eSB8fCAnJztcbiAgY2FwaXRhbFByZWZpeGVzLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIG5vZGUuc3R5bGVbcHJlZml4ICsgJ1RyYW5zaXRpb24nICsgcHJvcGVydHldID0gdjtcbiAgfSk7XG59O1xuXG5jc3NBbmltYXRpb24uaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgPSBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZDtcblxuZXhwb3J0IHsgaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzQW5pbWF0aW9uOyIsInZhciB1dGlsID0ge1xuICBpc0FwcGVhclN1cHBvcnRlZDogZnVuY3Rpb24gaXNBcHBlYXJTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkFwcGVhciB8fCBwcm9wcy5hbmltYXRpb24uYXBwZWFyO1xuICB9LFxuICBpc0VudGVyU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0VudGVyU3VwcG9ydGVkKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25OYW1lICYmIHByb3BzLnRyYW5zaXRpb25FbnRlciB8fCBwcm9wcy5hbmltYXRpb24uZW50ZXI7XG4gIH0sXG4gIGlzTGVhdmVTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzTGVhdmVTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkxlYXZlIHx8IHByb3BzLmFuaW1hdGlvbi5sZWF2ZTtcbiAgfSxcbiAgYWxsb3dBcHBlYXJDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dBcHBlYXJDYWxsYmFjayhwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyIHx8IHByb3BzLmFuaW1hdGlvbi5hcHBlYXI7XG4gIH0sXG4gIGFsbG93RW50ZXJDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dFbnRlckNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25FbnRlciB8fCBwcm9wcy5hbmltYXRpb24uZW50ZXI7XG4gIH0sXG4gIGFsbG93TGVhdmVDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25MZWF2ZSB8fCBwcm9wcy5hbmltYXRpb24ubGVhdmU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB1dGlsOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNzc0FuaW1hdGUsIHsgaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgfSBmcm9tICdjc3MtYW5pbWF0aW9uJztcbmltcG9ydCBhbmltVXRpbCBmcm9tICcuL3V0aWwvYW5pbWF0ZSc7XG5cbnZhciB0cmFuc2l0aW9uTWFwID0ge1xuICBlbnRlcjogJ3RyYW5zaXRpb25FbnRlcicsXG4gIGFwcGVhcjogJ3RyYW5zaXRpb25BcHBlYXInLFxuICBsZWF2ZTogJ3RyYW5zaXRpb25MZWF2ZSdcbn07XG5cbnZhciBBbmltYXRlQ2hpbGQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQW5pbWF0ZUNoaWxkLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBbmltYXRlQ2hpbGQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFuaW1hdGVDaGlsZCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFuaW1hdGVDaGlsZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFuaW1hdGVDaGlsZCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFuaW1hdGVDaGlsZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbEVudGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEVudGVyKGRvbmUpIHtcbiAgICAgIGlmIChhbmltVXRpbC5pc0VudGVyU3VwcG9ydGVkKHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbignZW50ZXInLCBkb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsQXBwZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEFwcGVhcihkb25lKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuaXNBcHBlYXJTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKCdhcHBlYXInLCBkb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTGVhdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTGVhdmUoZG9uZSkge1xuICAgICAgaWYgKGFuaW1VdGlsLmlzTGVhdmVTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKCdsZWF2ZScsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWx3YXlzIHN5bmMsIGRvIG5vdCBpbnRlcnVwdCB3aXRoIHJlYWN0IGNvbXBvbmVudCBsaWZlIGN5Y2xlXG4gICAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gLT4gYW5pbWF0ZSBoaWRkZW4gLT5cbiAgICAgICAgLy8gZGlkVXBkYXRlIC0+IGFuaW1hdGUgbGVhdmUgLT4gdW5tb3VudCAoaWYgYW5pbWF0ZSBpcyBub25lKVxuICAgICAgICBkb25lKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndHJhbnNpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYW5zaXRpb24oYW5pbWF0aW9uVHlwZSwgZmluaXNoQ2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgICAgdmFyIG5hbWVJc09iaiA9IHR5cGVvZiB0cmFuc2l0aW9uTmFtZSA9PT0gJ29iamVjdCc7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHZhciBlbmQgPSBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICAgIF90aGlzMi5zdG9wcGVyID0gbnVsbDtcbiAgICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICAgIH07XG4gICAgICBpZiAoKGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkIHx8ICFwcm9wcy5hbmltYXRpb25bYW5pbWF0aW9uVHlwZV0pICYmIHRyYW5zaXRpb25OYW1lICYmIHByb3BzW3RyYW5zaXRpb25NYXBbYW5pbWF0aW9uVHlwZV1dKSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZUlzT2JqID8gdHJhbnNpdGlvbk5hbWVbYW5pbWF0aW9uVHlwZV0gOiB0cmFuc2l0aW9uTmFtZSArICctJyArIGFuaW1hdGlvblR5cGU7XG4gICAgICAgIHZhciBhY3RpdmVOYW1lID0gbmFtZSArICctYWN0aXZlJztcbiAgICAgICAgaWYgKG5hbWVJc09iaiAmJiB0cmFuc2l0aW9uTmFtZVthbmltYXRpb25UeXBlICsgJ0FjdGl2ZSddKSB7XG4gICAgICAgICAgYWN0aXZlTmFtZSA9IHRyYW5zaXRpb25OYW1lW2FuaW1hdGlvblR5cGUgKyAnQWN0aXZlJ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wcGVyID0gY3NzQW5pbWF0ZShub2RlLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZU5hbWVcbiAgICAgICAgfSwgZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcHBlciA9IHByb3BzLmFuaW1hdGlvblthbmltYXRpb25UeXBlXShub2RlLCBlbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdmFyIHN0b3BwZXIgPSB0aGlzLnN0b3BwZXI7XG4gICAgICBpZiAoc3RvcHBlcikge1xuICAgICAgICB0aGlzLnN0b3BwZXIgPSBudWxsO1xuICAgICAgICBzdG9wcGVyLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQW5pbWF0ZUNoaWxkO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5BbmltYXRlQ2hpbGQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVDaGlsZDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdG9BcnJheUNoaWxkcmVuLCBtZXJnZUNoaWxkcmVuLCBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleSwgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5LCBpc1NhbWVDaGlsZHJlbiB9IGZyb20gJy4vQ2hpbGRyZW5VdGlscyc7XG5pbXBvcnQgQW5pbWF0ZUNoaWxkIGZyb20gJy4vQW5pbWF0ZUNoaWxkJztcbmltcG9ydCBhbmltVXRpbCBmcm9tICcuL3V0aWwvYW5pbWF0ZSc7XG5cbnZhciBkZWZhdWx0S2V5ID0gJ3JjX2FuaW1hdGVfJyArIERhdGUubm93KCk7XG5cbmZ1bmN0aW9uIGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgaWYgKCFjaGlsZHJlbi5rZXkpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAga2V5OiBkZWZhdWx0S2V5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIEFuaW1hdGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQW5pbWF0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZ1bmN0aW9uIEFuaW1hdGUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWF0ZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQW5pbWF0ZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFuaW1hdGUpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpO1xuXG4gICAgX3RoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cyA9IHt9O1xuICAgIF90aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgX3RoaXMua2V5c1RvTGVhdmUgPSBbXTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2hpbGRyZW46IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpXG4gICAgfTtcblxuICAgIF90aGlzLmNoaWxkcmVuUmVmcyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBbmltYXRlLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHNob3dQcm9wID0gdGhpcy5wcm9wcy5zaG93UHJvcDtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuICEhY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgIF90aGlzMi5wZXJmb3JtQXBwZWFyKGNoaWxkLmtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHRoaXMubmV4dFByb3BzID0gbmV4dFByb3BzO1xuICAgICAgdmFyIG5leHRDaGlsZHJlbiA9IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhuZXh0UHJvcHMpKTtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAvLyBleGNsdXNpdmUgbmVlZHMgaW1tZWRpYXRlIHJlc3BvbnNlXG4gICAgICBpZiAocHJvcHMuZXhjbHVzaXZlKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX3RoaXMzLnN0b3Aoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB2YXIgc2hvd1Byb3AgPSBwcm9wcy5zaG93UHJvcDtcbiAgICAgIHZhciBjdXJyZW50bHlBbmltYXRpbmdLZXlzID0gdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzO1xuICAgICAgLy8gbGFzdCBwcm9wcyBjaGlsZHJlbiBpZiBleGNsdXNpdmVcbiAgICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSBwcm9wcy5leGNsdXNpdmUgPyB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKSA6IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgICAvLyBpbiBjYXNlIGRlc3Ryb3kgaW4gc2hvd1Byb3AgbW9kZVxuICAgICAgdmFyIG5ld0NoaWxkcmVuID0gW107XG4gICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgY3VycmVudENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnRDaGlsZCkge1xuICAgICAgICAgIHZhciBuZXh0Q2hpbGQgPSBjdXJyZW50Q2hpbGQgJiYgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KG5leHRDaGlsZHJlbiwgY3VycmVudENoaWxkLmtleSk7XG4gICAgICAgICAgdmFyIG5ld0NoaWxkID0gdm9pZCAwO1xuICAgICAgICAgIGlmICgoIW5leHRDaGlsZCB8fCAhbmV4dENoaWxkLnByb3BzW3Nob3dQcm9wXSkgJiYgY3VycmVudENoaWxkLnByb3BzW3Nob3dQcm9wXSkge1xuICAgICAgICAgICAgbmV3Q2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQobmV4dENoaWxkIHx8IGN1cnJlbnRDaGlsZCwgX2RlZmluZVByb3BlcnR5KHt9LCBzaG93UHJvcCwgdHJ1ZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdDaGlsZCA9IG5leHRDaGlsZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG5ld0NoaWxkKSB7XG4gICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG5ld0NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBuZXh0Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobmV4dENoaWxkKSB7XG4gICAgICAgICAgaWYgKCFuZXh0Q2hpbGQgfHwgIWZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIG5leHRDaGlsZC5rZXkpKSB7XG4gICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG5leHRDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0NoaWxkcmVuID0gbWVyZ2VDaGlsZHJlbihjdXJyZW50Q2hpbGRyZW4sIG5leHRDaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgIC8vIG5lZWQgcmVuZGVyIHRvIGF2b2lkIHVwZGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNoaWxkcmVuOiBuZXdDaGlsZHJlblxuICAgICAgfSk7XG5cbiAgICAgIG5leHRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIga2V5ID0gY2hpbGQgJiYgY2hpbGQua2V5O1xuICAgICAgICBpZiAoY2hpbGQgJiYgY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYXNQcmV2ID0gY2hpbGQgJiYgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KTtcbiAgICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgICAgdmFyIHNob3dJbk5leHQgPSBjaGlsZC5wcm9wc1tzaG93UHJvcF07XG4gICAgICAgICAgaWYgKGhhc1ByZXYpIHtcbiAgICAgICAgICAgIHZhciBzaG93SW5Ob3cgPSBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApO1xuICAgICAgICAgICAgaWYgKCFzaG93SW5Ob3cgJiYgc2hvd0luTmV4dCkge1xuICAgICAgICAgICAgICBfdGhpczMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoc2hvd0luTmV4dCkge1xuICAgICAgICAgICAgX3RoaXMzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc1ByZXYpIHtcbiAgICAgICAgICBfdGhpczMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY3VycmVudENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBrZXkgPSBjaGlsZCAmJiBjaGlsZC5rZXk7XG4gICAgICAgIGlmIChjaGlsZCAmJiBjdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc05leHQgPSBjaGlsZCAmJiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkobmV4dENoaWxkcmVuLCBrZXkpO1xuICAgICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgICB2YXIgc2hvd0luTm93ID0gY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgICAgICAgIGlmIChoYXNOZXh0KSB7XG4gICAgICAgICAgICB2YXIgc2hvd0luTmV4dCA9IGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5KG5leHRDaGlsZHJlbiwga2V5LCBzaG93UHJvcCk7XG4gICAgICAgICAgICBpZiAoIXNob3dJbk5leHQgJiYgc2hvd0luTm93KSB7XG4gICAgICAgICAgICAgIF90aGlzMy5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChzaG93SW5Ob3cpIHtcbiAgICAgICAgICAgIF90aGlzMy5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFoYXNOZXh0KSB7XG4gICAgICAgICAgX3RoaXMzLmtleXNUb0xlYXZlLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdmFyIGtleXNUb0VudGVyID0gdGhpcy5rZXlzVG9FbnRlcjtcbiAgICAgIHRoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICAgIGtleXNUb0VudGVyLmZvckVhY2godGhpcy5wZXJmb3JtRW50ZXIpO1xuICAgICAgdmFyIGtleXNUb0xlYXZlID0gdGhpcy5rZXlzVG9MZWF2ZTtcbiAgICAgIHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcbiAgICAgIGtleXNUb0xlYXZlLmZvckVhY2godGhpcy5wZXJmb3JtTGVhdmUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzVmFsaWRDaGlsZEJ5S2V5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNWYWxpZENoaWxkQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpIHtcbiAgICAgIHZhciBzaG93UHJvcCA9IHRoaXMucHJvcHMuc2hvd1Byb3A7XG4gICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgcmV0dXJuIGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5LCBzaG93UHJvcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcChrZXkpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICAgIHZhciBjb21wb25lbnQgPSB0aGlzLmNoaWxkcmVuUmVmc1trZXldO1xuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy5uZXh0UHJvcHMgPSBwcm9wcztcbiAgICAgIHZhciBzdGF0ZUNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IG51bGw7XG4gICAgICBpZiAoc3RhdGVDaGlsZHJlbikge1xuICAgICAgICBjaGlsZHJlbiA9IHN0YXRlQ2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIGlmIChjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghY2hpbGQua2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3Qgc2V0IGtleSBmb3IgPHJjLWFuaW1hdGU+IGNoaWxkcmVuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQW5pbWF0ZUNoaWxkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGNoaWxkLmtleSxcbiAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgICAgICAgIF90aGlzNC5jaGlsZHJlblJlZnNbY2hpbGQua2V5XSA9IG5vZGU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogcHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlcjogcHJvcHMudHJhbnNpdGlvbkVudGVyLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmU6IHByb3BzLnRyYW5zaXRpb25MZWF2ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB2YXIgQ29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50O1xuICAgICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgICB2YXIgcGFzc2VkUHJvcHMgPSBwcm9wcztcbiAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcGFzc2VkUHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHN0eWxlOiBwcm9wcy5zdHlsZVxuICAgICAgICAgIH0sIHByb3BzLmNvbXBvbmVudFByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgcGFzc2VkUHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZHJlblswXSB8fCBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBbmltYXRlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5BbmltYXRlLmlzQW5pbWF0ZSA9IHRydWU7XG5BbmltYXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxuICBjb21wb25lbnRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICB0cmFuc2l0aW9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXhjbHVzaXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhbnNpdGlvbkxlYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25MZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQXBwZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hvd1Byb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcbkFuaW1hdGUuZGVmYXVsdFByb3BzID0ge1xuICBhbmltYXRpb246IHt9LFxuICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgY29tcG9uZW50UHJvcHM6IHt9LFxuICB0cmFuc2l0aW9uRW50ZXI6IHRydWUsXG4gIHRyYW5zaXRpb25MZWF2ZTogdHJ1ZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2UsXG4gIG9uRW5kOiBub29wLFxuICBvbkVudGVyOiBub29wLFxuICBvbkxlYXZlOiBub29wLFxuICBvbkFwcGVhcjogbm9vcFxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICB0aGlzLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAvLyBtYXkgYWxyZWFkeSByZW1vdmUgYnkgZXhjbHVzaXZlXG4gICAgaWYgKF90aGlzNS5jaGlsZHJlblJlZnNba2V5XSkge1xuICAgICAgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG4gICAgICBfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0uY29tcG9uZW50V2lsbEVudGVyKF90aGlzNS5oYW5kbGVEb25lQWRkaW5nLmJpbmQoX3RoaXM1LCBrZXksICdlbnRlcicpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5wZXJmb3JtQXBwZWFyID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0pIHtcbiAgICAgIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldLmNvbXBvbmVudFdpbGxBcHBlYXIoX3RoaXM1LmhhbmRsZURvbmVBZGRpbmcuYmluZChfdGhpczUsIGtleSwgJ2FwcGVhcicpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVEb25lQWRkaW5nID0gZnVuY3Rpb24gKGtleSwgdHlwZSkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzNS5wcm9wcztcbiAgICBkZWxldGUgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICAvLyBpZiB1cGRhdGUgb24gZXhjbHVzaXZlIG1vZGUsIHNraXAgY2hlY2tcbiAgICBpZiAocHJvcHMuZXhjbHVzaXZlICYmIHByb3BzICE9PSBfdGhpczUubmV4dFByb3BzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKTtcbiAgICBpZiAoIV90aGlzNS5pc1ZhbGlkQ2hpbGRCeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSkpIHtcbiAgICAgIC8vIGV4Y2x1c2l2ZSB3aWxsIG5vdCBuZWVkIHRoaXNcbiAgICAgIF90aGlzNS5wZXJmb3JtTGVhdmUoa2V5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhcHBlYXInKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuYWxsb3dBcHBlYXJDYWxsYmFjayhwcm9wcykpIHtcbiAgICAgICAgcHJvcHMub25BcHBlYXIoa2V5KTtcbiAgICAgICAgcHJvcHMub25FbmQoa2V5LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFuaW1VdGlsLmFsbG93RW50ZXJDYWxsYmFjayhwcm9wcykpIHtcbiAgICAgIHByb3BzLm9uRW50ZXIoa2V5KTtcbiAgICAgIHByb3BzLm9uRW5kKGtleSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucGVyZm9ybUxlYXZlID0gZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIG1heSBhbHJlYWR5IHJlbW92ZSBieSBleGNsdXNpdmVcbiAgICBpZiAoX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldKSB7XG4gICAgICBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgIF90aGlzNS5jaGlsZHJlblJlZnNba2V5XS5jb21wb25lbnRXaWxsTGVhdmUoX3RoaXM1LmhhbmRsZURvbmVMZWF2aW5nLmJpbmQoX3RoaXM1LCBrZXkpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVEb25lTGVhdmluZyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczUucHJvcHM7XG4gICAgZGVsZXRlIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgLy8gaWYgdXBkYXRlIG9uIGV4Y2x1c2l2ZSBtb2RlLCBza2lwIGNoZWNrXG4gICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSAmJiBwcm9wcyAhPT0gX3RoaXM1Lm5leHRQcm9wcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY3VycmVudENoaWxkcmVuID0gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSk7XG4gICAgLy8gaW4gY2FzZSBzdGF0ZSBjaGFuZ2UgaXMgdG9vIGZhc3RcbiAgICBpZiAoX3RoaXM1LmlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSkge1xuICAgICAgX3RoaXM1LnBlcmZvcm1FbnRlcihrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZW5kID0gZnVuY3Rpb24gZW5kKCkge1xuICAgICAgICBpZiAoYW5pbVV0aWwuYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICAgIHByb3BzLm9uTGVhdmUoa2V5KTtcbiAgICAgICAgICBwcm9wcy5vbkVuZChrZXksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmICghaXNTYW1lQ2hpbGRyZW4oX3RoaXM1LnN0YXRlLmNoaWxkcmVuLCBjdXJyZW50Q2hpbGRyZW4sIHByb3BzLnNob3dQcm9wKSkge1xuICAgICAgICBfdGhpczUuc2V0U3RhdGUoe1xuICAgICAgICAgIGNoaWxkcmVuOiBjdXJyZW50Q2hpbGRyZW5cbiAgICAgICAgfSwgZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJFdmVudCIsImNsYXNzZXMiLCJhbmltVXRpbCIsIlJlYWN0RE9NIiwiY3NzQW5pbWF0ZSIsIlByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQVFBLElBQUkscUJBQXFCLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0FBQ3pELElBQUksY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO0FBQ3JELElBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFFN0QsU0FBUyxRQUFRLENBQUMsR0FBRyxFQUFFO0NBQ3RCLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO0VBQ3RDLE1BQU0sSUFBSSxTQUFTLENBQUMsdURBQXVELENBQUMsQ0FBQztFQUM3RTs7Q0FFRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNuQjs7QUFFRCxTQUFTLGVBQWUsR0FBRztDQUMxQixJQUFJO0VBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7R0FDbkIsT0FBTyxLQUFLLENBQUM7R0FDYjs7Ozs7RUFLRCxJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztFQUM5QixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0VBQ2hCLElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtHQUNqRCxPQUFPLEtBQUssQ0FBQztHQUNiOzs7RUFHRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7RUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0dBQzVCLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztHQUN4QztFQUNELElB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

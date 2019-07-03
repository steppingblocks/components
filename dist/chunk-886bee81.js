import React__default from 'react';
import PropTypes__default from 'prop-types';
import { f as _typeof, _ as _inherits, a as _classCallCheck, b as _possibleConstructorReturn, e as _createClass, g as _defineProperty, c as _extends } from './chunk-f94271b9.js';
import ReactDOM__default from 'react-dom';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmstODg2YmVlODEuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JjLWFuaW1hdGUvZXMvQ2hpbGRyZW5VdGlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jc3MtYW5pbWF0aW9uL2VzL0V2ZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2luZGV4b2YvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWluZGV4b2YvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWNsYXNzZXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvY3NzLWFuaW1hdGlvbi9lcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL3V0aWwvYW5pbWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0FuaW1hdGVDaGlsZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0FuaW1hdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIHJldCA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXQucHVzaChjaGlsZCk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXkpIHtcbiAgdmFyIHJldCA9IG51bGw7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSkge1xuICAgICAgICByZXQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApIHtcbiAgdmFyIHJldCA9IG51bGw7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQua2V5ID09PSBrZXkgJiYgY2hpbGQucHJvcHNbc2hvd1Byb3BdKSB7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3R3byBjaGlsZCB3aXRoIHNhbWUga2V5IGZvciA8cmMtYW5pbWF0ZT4gY2hpbGRyZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEhpZGRlbkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXksIHNob3dQcm9wKSB7XG4gIHZhciBmb3VuZCA9IDA7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm91bmQgPSBjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSAmJiAhY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZUNoaWxkcmVuKGMxLCBjMiwgc2hvd1Byb3ApIHtcbiAgdmFyIHNhbWUgPSBjMS5sZW5ndGggPT09IGMyLmxlbmd0aDtcbiAgaWYgKHNhbWUpIHtcbiAgICBjMS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaGlsZDIgPSBjMltpbmRleF07XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQyKSB7XG4gICAgICAgIGlmIChjaGlsZCAmJiAhY2hpbGQyIHx8ICFjaGlsZCAmJiBjaGlsZDIpIHtcbiAgICAgICAgICBzYW1lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGQua2V5ICE9PSBjaGlsZDIua2V5KSB7XG4gICAgICAgICAgc2FtZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3dQcm9wICYmIGNoaWxkLnByb3BzW3Nob3dQcm9wXSAhPT0gY2hpbGQyLnByb3BzW3Nob3dQcm9wXSkge1xuICAgICAgICAgIHNhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDaGlsZHJlbihwcmV2LCBuZXh0KSB7XG4gIHZhciByZXQgPSBbXTtcblxuICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcbiAgdmFyIG5leHRDaGlsZHJlblBlbmRpbmcgPSB7fTtcbiAgdmFyIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuICBwcmV2LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0LCBjaGlsZC5rZXkpKSB7XG4gICAgICBpZiAocGVuZGluZ0NoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBuZXh0Q2hpbGRyZW5QZW5kaW5nW2NoaWxkLmtleV0gPSBwZW5kaW5nQ2hpbGRyZW47XG4gICAgICAgIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICBuZXh0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0Q2hpbGRyZW5QZW5kaW5nLCBjaGlsZC5rZXkpKSB7XG4gICAgICByZXQgPSByZXQuY29uY2F0KG5leHRDaGlsZHJlblBlbmRpbmdbY2hpbGQua2V5XSk7XG4gICAgfVxuICAgIHJldC5wdXNoKGNoaWxkKTtcbiAgfSk7XG5cbiAgcmV0ID0gcmV0LmNvbmNhdChwZW5kaW5nQ2hpbGRyZW4pO1xuXG4gIHJldHVybiByZXQ7XG59IiwidmFyIFNUQVJUX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uc3RhcnQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbnN0YXJ0JyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uU3RhcnQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvblN0YXJ0J1xuICB9LFxuXG4gIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25TdGFydCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25TdGFydCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvblN0YXJ0J1xuICB9XG59O1xuXG52YXIgRU5EX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgc3RhcnRFdmVudHMgPSBbXTtcbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uO1xuICAgIGRlbGV0ZSBFTkRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbnN0YXJ0LnRyYW5zaXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKEVWRU5UX05BTUVfTUFQLCBldmVudHMpIHtcbiAgICBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICAgICBpZiAoRVZFTlRfTkFNRV9NQVAuaGFzT3duUHJvcGVydHkoYmFzZUV2ZW50TmFtZSkpIHtcbiAgICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgICAgICBldmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvY2VzcyhTVEFSVF9FVkVOVF9OQU1FX01BUCwgc3RhcnRFdmVudHMpO1xuICBwcm9jZXNzKEVORF9FVkVOVF9OQU1FX01BUCwgZW5kRXZlbnRzKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgVHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgLy8gU3RhcnQgZXZlbnRzXG4gIHN0YXJ0RXZlbnRzOiBzdGFydEV2ZW50cyxcblxuICBhZGRTdGFydEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKHN0YXJ0RXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cblxuICAvLyBFbmQgZXZlbnRzXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbkV2ZW50czsiLCJcbnZhciBpbmRleE9mID0gW10uaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChpbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChhcnIuaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59OyIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG50cnkge1xuICB2YXIgaW5kZXggPSByZXF1aXJlKCdpbmRleG9mJyk7XG59IGNhdGNoIChlcnIpIHtcbiAgdmFyIGluZGV4ID0gcmVxdWlyZSgnY29tcG9uZW50LWluZGV4b2YnKTtcbn1cblxuLyoqXG4gKiBXaGl0ZXNwYWNlIHJlZ2V4cC5cbiAqL1xuXG52YXIgcmUgPSAvXFxzKy87XG5cbi8qKlxuICogdG9TdHJpbmcgcmVmZXJlbmNlLlxuICovXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV3JhcCBgZWxgIGluIGEgYENsYXNzTGlzdGAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKXtcbiAgcmV0dXJuIG5ldyBDbGFzc0xpc3QoZWwpO1xufTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IENsYXNzTGlzdCBmb3IgYGVsYC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBDbGFzc0xpc3QoZWwpIHtcbiAgaWYgKCFlbCB8fCAhZWwubm9kZVR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgRE9NIGVsZW1lbnQgcmVmZXJlbmNlIGlzIHJlcXVpcmVkJyk7XG4gIH1cbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLmxpc3QgPSBlbC5jbGFzc0xpc3Q7XG59XG5cbi8qKlxuICogQWRkIGNsYXNzIGBuYW1lYCBpZiBub3QgYWxyZWFkeSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24obmFtZSl7XG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgdGhpcy5saXN0LmFkZChuYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcbiAgaWYgKCF+aSkgYXJyLnB1c2gobmFtZSk7XG4gIHRoaXMuZWwuY2xhc3NOYW1lID0gYXJyLmpvaW4oJyAnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyBgbmFtZWAgd2hlbiBwcmVzZW50LCBvclxuICogcGFzcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byByZW1vdmVcbiAqIGFueSB3aGljaCBtYXRjaC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihuYW1lKXtcbiAgaWYgKCdbb2JqZWN0IFJlZ0V4cF0nID09IHRvU3RyaW5nLmNhbGwobmFtZSkpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVNYXRjaGluZyhuYW1lKTtcbiAgfVxuXG4gIC8vIGNsYXNzTGlzdFxuICBpZiAodGhpcy5saXN0KSB7XG4gICAgdGhpcy5saXN0LnJlbW92ZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGZhbGxiYWNrXG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIHZhciBpID0gaW5kZXgoYXJyLCBuYW1lKTtcbiAgaWYgKH5pKSBhcnIuc3BsaWNlKGksIDEpO1xuICB0aGlzLmVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGNsYXNzZXMgbWF0Y2hpbmcgYHJlYC5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlTWF0Y2hpbmcgPSBmdW5jdGlvbihyZSl7XG4gIHZhciBhcnIgPSB0aGlzLmFycmF5KCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlLnRlc3QoYXJyW2ldKSkge1xuICAgICAgdGhpcy5yZW1vdmUoYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBjbGFzcyBgbmFtZWAsIGNhbiBmb3JjZSBzdGF0ZSB2aWEgYGZvcmNlYC5cbiAqXG4gKiBGb3IgYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGNsYXNzTGlzdCwgYnV0IGRvIG5vdCBzdXBwb3J0IGBmb3JjZWAgeWV0LFxuICogdGhlIG1pc3Rha2Ugd2lsbCBiZSBkZXRlY3RlZCBhbmQgY29ycmVjdGVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZvcmNlXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24obmFtZSwgZm9yY2Upe1xuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9PSB0eXBlb2YgZm9yY2UpIHtcbiAgICAgIGlmIChmb3JjZSAhPT0gdGhpcy5saXN0LnRvZ2dsZShuYW1lLCBmb3JjZSkpIHtcbiAgICAgICAgdGhpcy5saXN0LnRvZ2dsZShuYW1lKTsgLy8gdG9nZ2xlIGFnYWluIHRvIGNvcnJlY3RcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0LnRvZ2dsZShuYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGZvcmNlKSB7XG4gICAgaWYgKCFmb3JjZSkge1xuICAgICAgdGhpcy5yZW1vdmUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkKG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAodGhpcy5oYXMobmFtZSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZChuYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIGNsYXNzZXMuXG4gKlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUuYXJyYXkgPSBmdW5jdGlvbigpe1xuICB2YXIgY2xhc3NOYW1lID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gIHZhciBzdHIgPSBjbGFzc05hbWUucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB2YXIgYXJyID0gc3RyLnNwbGl0KHJlKTtcbiAgaWYgKCcnID09PSBhcnJbMF0pIGFyci5zaGlmdCgpO1xuICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBjbGFzcyBgbmFtZWAgaXMgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmhhcyA9XG5DbGFzc0xpc3QucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiB0aGlzLmxpc3RcbiAgICA/IHRoaXMubGlzdC5jb250YWlucyhuYW1lKVxuICAgIDogISEgfmluZGV4KHRoaXMuYXJyYXkoKSwgbmFtZSk7XG59O1xuIiwiaW1wb3J0IF90eXBlb2YgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZic7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICdjb21wb25lbnQtY2xhc3Nlcyc7XG5cbnZhciBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IEV2ZW50LmVuZEV2ZW50cy5sZW5ndGggIT09IDA7XG52YXIgY2FwaXRhbFByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLFxuLy8gbXMgaXMgc3BlY2lhbCAuLi4uICFcbidtcyddO1xudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICctby0nLCAnbXMtJywgJyddO1xuXG5mdW5jdGlvbiBnZXRTdHlsZVByb3BlcnR5KG5vZGUsIG5hbWUpIHtcbiAgLy8gb2xkIGZmIG5lZWQgbnVsbCwgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvdy9nZXRDb21wdXRlZFN0eWxlXG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgcmV0ID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICByZXQgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByZWZpeGVzW2ldICsgbmFtZSk7XG4gICAgaWYgKHJldCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSkge1xuICBpZiAoaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQpIHtcbiAgICB2YXIgdHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAndHJhbnNpdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciBhbmltYXRpb25EZWxheSA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWRlbGF5JykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZHVyYXRpb24nKSkgfHwgMDtcbiAgICB2YXIgdGltZSA9IE1hdGgubWF4KHRyYW5zaXRpb25EdXJhdGlvbiArIHRyYW5zaXRpb25EZWxheSwgYW5pbWF0aW9uRHVyYXRpb24gKyBhbmltYXRpb25EZWxheSk7XG4gICAgLy8gc29tZXRpbWVzLCBicm93c2VyIGJ1Z1xuICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSwgdGltZSAqIDEwMDAgKyAyMDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSkge1xuICBpZiAobm9kZS5yY0VuZEFuaW1UaW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KG5vZGUucmNFbmRBbmltVGltZW91dCk7XG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gbnVsbDtcbiAgfVxufVxuXG52YXIgY3NzQW5pbWF0aW9uID0gZnVuY3Rpb24gY3NzQW5pbWF0aW9uKG5vZGUsIHRyYW5zaXRpb25OYW1lLCBlbmRDYWxsYmFjaykge1xuICB2YXIgbmFtZUlzT2JqID0gKHR5cGVvZiB0cmFuc2l0aW9uTmFtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodHJhbnNpdGlvbk5hbWUpKSA9PT0gJ29iamVjdCc7XG4gIHZhciBjbGFzc05hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZS5uYW1lIDogdHJhbnNpdGlvbk5hbWU7XG4gIHZhciBhY3RpdmVDbGFzc05hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZS5hY3RpdmUgOiB0cmFuc2l0aW9uTmFtZSArICctYWN0aXZlJztcbiAgdmFyIGVuZCA9IGVuZENhbGxiYWNrO1xuICB2YXIgc3RhcnQgPSB2b2lkIDA7XG4gIHZhciBhY3RpdmUgPSB2b2lkIDA7XG4gIHZhciBub2RlQ2xhc3NlcyA9IGNsYXNzZXMobm9kZSk7XG5cbiAgaWYgKGVuZENhbGxiYWNrICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlbmRDYWxsYmFjaykgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgZW5kID0gZW5kQ2FsbGJhY2suZW5kO1xuICAgIHN0YXJ0ID0gZW5kQ2FsbGJhY2suc3RhcnQ7XG4gICAgYWN0aXZlID0gZW5kQ2FsbGJhY2suYWN0aXZlO1xuICB9XG5cbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgbm9kZUNsYXNzZXMucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgbm9kZUNsYXNzZXMucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICBFdmVudC5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyID0gbnVsbDtcblxuICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBlbmQgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICBpZiAoZW5kKSB7XG4gICAgICBlbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgRXZlbnQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuXG4gIGlmIChzdGFydCkge1xuICAgIHN0YXJ0KCk7XG4gIH1cbiAgbm9kZUNsYXNzZXMuYWRkKGNsYXNzTmFtZSk7XG5cbiAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICBub2RlQ2xhc3Nlcy5hZGQoYWN0aXZlQ2xhc3NOYW1lKTtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KGFjdGl2ZSwgMCk7XG4gICAgfVxuICAgIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSk7XG4gICAgLy8gMzBtcyBmb3IgZmlyZWZveFxuICB9LCAzMCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5jc3NBbmltYXRpb24uc3R5bGUgPSBmdW5jdGlvbiAobm9kZSwgc3R5bGUsIGNhbGxiYWNrKSB7XG4gIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgfVxuXG4gIG5vZGUucmNFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5yY0FuaW1UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQobm9kZS5yY0FuaW1UaW1lb3V0KTtcbiAgICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKTtcblxuICAgIEV2ZW50LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGNhbGxiYWNrIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICBFdmVudC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyBpbiBzdHlsZSkge1xuICAgICAgaWYgKHN0eWxlLmhhc093blByb3BlcnR5KHMpKSB7XG4gICAgICAgIG5vZGUuc3R5bGVbc10gPSBzdHlsZVtzXTtcbiAgICAgIH1cbiAgICB9XG4gICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICB9LCAwKTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKG5vZGUsIHAsIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eSA9IHA7XG4gIHZhciB2ID0gdmFsdWU7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdiA9IHByb3BlcnR5O1xuICAgIHByb3BlcnR5ID0gJyc7XG4gIH1cbiAgcHJvcGVydHkgPSBwcm9wZXJ0eSB8fCAnJztcbiAgY2FwaXRhbFByZWZpeGVzLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIG5vZGUuc3R5bGVbcHJlZml4ICsgJ1RyYW5zaXRpb24nICsgcHJvcGVydHldID0gdjtcbiAgfSk7XG59O1xuXG5jc3NBbmltYXRpb24uaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgPSBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZDtcblxuZXhwb3J0IHsgaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgfTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzQW5pbWF0aW9uOyIsInZhciB1dGlsID0ge1xuICBpc0FwcGVhclN1cHBvcnRlZDogZnVuY3Rpb24gaXNBcHBlYXJTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkFwcGVhciB8fCBwcm9wcy5hbmltYXRpb24uYXBwZWFyO1xuICB9LFxuICBpc0VudGVyU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0VudGVyU3VwcG9ydGVkKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25OYW1lICYmIHByb3BzLnRyYW5zaXRpb25FbnRlciB8fCBwcm9wcy5hbmltYXRpb24uZW50ZXI7XG4gIH0sXG4gIGlzTGVhdmVTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzTGVhdmVTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkxlYXZlIHx8IHByb3BzLmFuaW1hdGlvbi5sZWF2ZTtcbiAgfSxcbiAgYWxsb3dBcHBlYXJDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dBcHBlYXJDYWxsYmFjayhwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyIHx8IHByb3BzLmFuaW1hdGlvbi5hcHBlYXI7XG4gIH0sXG4gIGFsbG93RW50ZXJDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dFbnRlckNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25FbnRlciB8fCBwcm9wcy5hbmltYXRpb24uZW50ZXI7XG4gIH0sXG4gIGFsbG93TGVhdmVDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25MZWF2ZSB8fCBwcm9wcy5hbmltYXRpb24ubGVhdmU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB1dGlsOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNzc0FuaW1hdGUsIHsgaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgfSBmcm9tICdjc3MtYW5pbWF0aW9uJztcbmltcG9ydCBhbmltVXRpbCBmcm9tICcuL3V0aWwvYW5pbWF0ZSc7XG5cbnZhciB0cmFuc2l0aW9uTWFwID0ge1xuICBlbnRlcjogJ3RyYW5zaXRpb25FbnRlcicsXG4gIGFwcGVhcjogJ3RyYW5zaXRpb25BcHBlYXInLFxuICBsZWF2ZTogJ3RyYW5zaXRpb25MZWF2ZSdcbn07XG5cbnZhciBBbmltYXRlQ2hpbGQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQW5pbWF0ZUNoaWxkLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBbmltYXRlQ2hpbGQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFuaW1hdGVDaGlsZCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFuaW1hdGVDaGlsZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFuaW1hdGVDaGlsZCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFuaW1hdGVDaGlsZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbEVudGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEVudGVyKGRvbmUpIHtcbiAgICAgIGlmIChhbmltVXRpbC5pc0VudGVyU3VwcG9ydGVkKHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbignZW50ZXInLCBkb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsQXBwZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEFwcGVhcihkb25lKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuaXNBcHBlYXJTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKCdhcHBlYXInLCBkb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTGVhdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTGVhdmUoZG9uZSkge1xuICAgICAgaWYgKGFuaW1VdGlsLmlzTGVhdmVTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKCdsZWF2ZScsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWx3YXlzIHN5bmMsIGRvIG5vdCBpbnRlcnVwdCB3aXRoIHJlYWN0IGNvbXBvbmVudCBsaWZlIGN5Y2xlXG4gICAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gLT4gYW5pbWF0ZSBoaWRkZW4gLT5cbiAgICAgICAgLy8gZGlkVXBkYXRlIC0+IGFuaW1hdGUgbGVhdmUgLT4gdW5tb3VudCAoaWYgYW5pbWF0ZSBpcyBub25lKVxuICAgICAgICBkb25lKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndHJhbnNpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYW5zaXRpb24oYW5pbWF0aW9uVHlwZSwgZmluaXNoQ2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgICAgdmFyIG5hbWVJc09iaiA9IHR5cGVvZiB0cmFuc2l0aW9uTmFtZSA9PT0gJ29iamVjdCc7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHZhciBlbmQgPSBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICAgIF90aGlzMi5zdG9wcGVyID0gbnVsbDtcbiAgICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICAgIH07XG4gICAgICBpZiAoKGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkIHx8ICFwcm9wcy5hbmltYXRpb25bYW5pbWF0aW9uVHlwZV0pICYmIHRyYW5zaXRpb25OYW1lICYmIHByb3BzW3RyYW5zaXRpb25NYXBbYW5pbWF0aW9uVHlwZV1dKSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZUlzT2JqID8gdHJhbnNpdGlvbk5hbWVbYW5pbWF0aW9uVHlwZV0gOiB0cmFuc2l0aW9uTmFtZSArICctJyArIGFuaW1hdGlvblR5cGU7XG4gICAgICAgIHZhciBhY3RpdmVOYW1lID0gbmFtZSArICctYWN0aXZlJztcbiAgICAgICAgaWYgKG5hbWVJc09iaiAmJiB0cmFuc2l0aW9uTmFtZVthbmltYXRpb25UeXBlICsgJ0FjdGl2ZSddKSB7XG4gICAgICAgICAgYWN0aXZlTmFtZSA9IHRyYW5zaXRpb25OYW1lW2FuaW1hdGlvblR5cGUgKyAnQWN0aXZlJ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wcGVyID0gY3NzQW5pbWF0ZShub2RlLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZU5hbWVcbiAgICAgICAgfSwgZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcHBlciA9IHByb3BzLmFuaW1hdGlvblthbmltYXRpb25UeXBlXShub2RlLCBlbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdmFyIHN0b3BwZXIgPSB0aGlzLnN0b3BwZXI7XG4gICAgICBpZiAoc3RvcHBlcikge1xuICAgICAgICB0aGlzLnN0b3BwZXIgPSBudWxsO1xuICAgICAgICBzdG9wcGVyLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQW5pbWF0ZUNoaWxkO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5BbmltYXRlQ2hpbGQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVDaGlsZDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdG9BcnJheUNoaWxkcmVuLCBtZXJnZUNoaWxkcmVuLCBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleSwgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5LCBpc1NhbWVDaGlsZHJlbiB9IGZyb20gJy4vQ2hpbGRyZW5VdGlscyc7XG5pbXBvcnQgQW5pbWF0ZUNoaWxkIGZyb20gJy4vQW5pbWF0ZUNoaWxkJztcbmltcG9ydCBhbmltVXRpbCBmcm9tICcuL3V0aWwvYW5pbWF0ZSc7XG5cbnZhciBkZWZhdWx0S2V5ID0gJ3JjX2FuaW1hdGVfJyArIERhdGUubm93KCk7XG5cbmZ1bmN0aW9uIGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgaWYgKCFjaGlsZHJlbi5rZXkpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAga2V5OiBkZWZhdWx0S2V5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIEFuaW1hdGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQW5pbWF0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZ1bmN0aW9uIEFuaW1hdGUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWF0ZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQW5pbWF0ZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFuaW1hdGUpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpO1xuXG4gICAgX3RoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cyA9IHt9O1xuICAgIF90aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgX3RoaXMua2V5c1RvTGVhdmUgPSBbXTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2hpbGRyZW46IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpXG4gICAgfTtcblxuICAgIF90aGlzLmNoaWxkcmVuUmVmcyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBbmltYXRlLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHNob3dQcm9wID0gdGhpcy5wcm9wcy5zaG93UHJvcDtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuICEhY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgIF90aGlzMi5wZXJmb3JtQXBwZWFyKGNoaWxkLmtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHRoaXMubmV4dFByb3BzID0gbmV4dFByb3BzO1xuICAgICAgdmFyIG5leHRDaGlsZHJlbiA9IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhuZXh0UHJvcHMpKTtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAvLyBleGNsdXNpdmUgbmVlZHMgaW1tZWRpYXRlIHJlc3BvbnNlXG4gICAgICBpZiAocHJvcHMuZXhjbHVzaXZlKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX3RoaXMzLnN0b3Aoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB2YXIgc2hvd1Byb3AgPSBwcm9wcy5zaG93UHJvcDtcbiAgICAgIHZhciBjdXJyZW50bHlBbmltYXRpbmdLZXlzID0gdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzO1xuICAgICAgLy8gbGFzdCBwcm9wcyBjaGlsZHJlbiBpZiBleGNsdXNpdmVcbiAgICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSBwcm9wcy5leGNsdXNpdmUgPyB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKSA6IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgICAvLyBpbiBjYXNlIGRlc3Ryb3kgaW4gc2hvd1Byb3AgbW9kZVxuICAgICAgdmFyIG5ld0NoaWxkcmVuID0gW107XG4gICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgY3VycmVudENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnRDaGlsZCkge1xuICAgICAgICAgIHZhciBuZXh0Q2hpbGQgPSBjdXJyZW50Q2hpbGQgJiYgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KG5leHRDaGlsZHJlbiwgY3VycmVudENoaWxkLmtleSk7XG4gICAgICAgICAgdmFyIG5ld0NoaWxkID0gdm9pZCAwO1xuICAgICAgICAgIGlmICgoIW5leHRDaGlsZCB8fCAhbmV4dENoaWxkLnByb3BzW3Nob3dQcm9wXSkgJiYgY3VycmVudENoaWxkLnByb3BzW3Nob3dQcm9wXSkge1xuICAgICAgICAgICAgbmV3Q2hpbGQgPSBSZWFjdC5jbG9uZUVsZW1lbnQobmV4dENoaWxkIHx8IGN1cnJlbnRDaGlsZCwgX2RlZmluZVByb3BlcnR5KHt9LCBzaG93UHJvcCwgdHJ1ZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdDaGlsZCA9IG5leHRDaGlsZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG5ld0NoaWxkKSB7XG4gICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG5ld0NoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBuZXh0Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobmV4dENoaWxkKSB7XG4gICAgICAgICAgaWYgKCFuZXh0Q2hpbGQgfHwgIWZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIG5leHRDaGlsZC5rZXkpKSB7XG4gICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKG5leHRDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0NoaWxkcmVuID0gbWVyZ2VDaGlsZHJlbihjdXJyZW50Q2hpbGRyZW4sIG5leHRDaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgIC8vIG5lZWQgcmVuZGVyIHRvIGF2b2lkIHVwZGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNoaWxkcmVuOiBuZXdDaGlsZHJlblxuICAgICAgfSk7XG5cbiAgICAgIG5leHRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIga2V5ID0gY2hpbGQgJiYgY2hpbGQua2V5O1xuICAgICAgICBpZiAoY2hpbGQgJiYgY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYXNQcmV2ID0gY2hpbGQgJiYgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KTtcbiAgICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgICAgdmFyIHNob3dJbk5leHQgPSBjaGlsZC5wcm9wc1tzaG93UHJvcF07XG4gICAgICAgICAgaWYgKGhhc1ByZXYpIHtcbiAgICAgICAgICAgIHZhciBzaG93SW5Ob3cgPSBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApO1xuICAgICAgICAgICAgaWYgKCFzaG93SW5Ob3cgJiYgc2hvd0luTmV4dCkge1xuICAgICAgICAgICAgICBfdGhpczMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoc2hvd0luTmV4dCkge1xuICAgICAgICAgICAgX3RoaXMzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc1ByZXYpIHtcbiAgICAgICAgICBfdGhpczMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY3VycmVudENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBrZXkgPSBjaGlsZCAmJiBjaGlsZC5rZXk7XG4gICAgICAgIGlmIChjaGlsZCAmJiBjdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc05leHQgPSBjaGlsZCAmJiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkobmV4dENoaWxkcmVuLCBrZXkpO1xuICAgICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgICB2YXIgc2hvd0luTm93ID0gY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgICAgICAgIGlmIChoYXNOZXh0KSB7XG4gICAgICAgICAgICB2YXIgc2hvd0luTmV4dCA9IGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5KG5leHRDaGlsZHJlbiwga2V5LCBzaG93UHJvcCk7XG4gICAgICAgICAgICBpZiAoIXNob3dJbk5leHQgJiYgc2hvd0luTm93KSB7XG4gICAgICAgICAgICAgIF90aGlzMy5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChzaG93SW5Ob3cpIHtcbiAgICAgICAgICAgIF90aGlzMy5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFoYXNOZXh0KSB7XG4gICAgICAgICAgX3RoaXMzLmtleXNUb0xlYXZlLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdmFyIGtleXNUb0VudGVyID0gdGhpcy5rZXlzVG9FbnRlcjtcbiAgICAgIHRoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICAgIGtleXNUb0VudGVyLmZvckVhY2godGhpcy5wZXJmb3JtRW50ZXIpO1xuICAgICAgdmFyIGtleXNUb0xlYXZlID0gdGhpcy5rZXlzVG9MZWF2ZTtcbiAgICAgIHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcbiAgICAgIGtleXNUb0xlYXZlLmZvckVhY2godGhpcy5wZXJmb3JtTGVhdmUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzVmFsaWRDaGlsZEJ5S2V5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNWYWxpZENoaWxkQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpIHtcbiAgICAgIHZhciBzaG93UHJvcCA9IHRoaXMucHJvcHMuc2hvd1Byb3A7XG4gICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgcmV0dXJuIGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5LCBzaG93UHJvcCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcChrZXkpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICAgIHZhciBjb21wb25lbnQgPSB0aGlzLmNoaWxkcmVuUmVmc1trZXldO1xuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy5uZXh0UHJvcHMgPSBwcm9wcztcbiAgICAgIHZhciBzdGF0ZUNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IG51bGw7XG4gICAgICBpZiAoc3RhdGVDaGlsZHJlbikge1xuICAgICAgICBjaGlsZHJlbiA9IHN0YXRlQ2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIGlmIChjaGlsZCA9PT0gbnVsbCB8fCBjaGlsZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghY2hpbGQua2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3Qgc2V0IGtleSBmb3IgPHJjLWFuaW1hdGU+IGNoaWxkcmVuJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQW5pbWF0ZUNoaWxkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGNoaWxkLmtleSxcbiAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgICAgICAgIF90aGlzNC5jaGlsZHJlblJlZnNbY2hpbGQua2V5XSA9IG5vZGU7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogcHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlcjogcHJvcHMudHJhbnNpdGlvbkVudGVyLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmU6IHByb3BzLnRyYW5zaXRpb25MZWF2ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB2YXIgQ29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50O1xuICAgICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgICB2YXIgcGFzc2VkUHJvcHMgPSBwcm9wcztcbiAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcGFzc2VkUHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHN0eWxlOiBwcm9wcy5zdHlsZVxuICAgICAgICAgIH0sIHByb3BzLmNvbXBvbmVudFByb3BzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgcGFzc2VkUHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZHJlblswXSB8fCBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBbmltYXRlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5BbmltYXRlLmlzQW5pbWF0ZSA9IHRydWU7XG5BbmltYXRlLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxuICBjb21wb25lbnRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICB0cmFuc2l0aW9uRW50ZXI6IFByb3BUeXBlcy5ib29sLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXhjbHVzaXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhbnNpdGlvbkxlYXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25MZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQXBwZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hvd1Byb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcbkFuaW1hdGUuZGVmYXVsdFByb3BzID0ge1xuICBhbmltYXRpb246IHt9LFxuICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgY29tcG9uZW50UHJvcHM6IHt9LFxuICB0cmFuc2l0aW9uRW50ZXI6IHRydWUsXG4gIHRyYW5zaXRpb25MZWF2ZTogdHJ1ZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2UsXG4gIG9uRW5kOiBub29wLFxuICBvbkVudGVyOiBub29wLFxuICBvbkxlYXZlOiBub29wLFxuICBvbkFwcGVhcjogbm9vcFxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICB0aGlzLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAvLyBtYXkgYWxyZWFkeSByZW1vdmUgYnkgZXhjbHVzaXZlXG4gICAgaWYgKF90aGlzNS5jaGlsZHJlblJlZnNba2V5XSkge1xuICAgICAgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG4gICAgICBfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0uY29tcG9uZW50V2lsbEVudGVyKF90aGlzNS5oYW5kbGVEb25lQWRkaW5nLmJpbmQoX3RoaXM1LCBrZXksICdlbnRlcicpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5wZXJmb3JtQXBwZWFyID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0pIHtcbiAgICAgIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldLmNvbXBvbmVudFdpbGxBcHBlYXIoX3RoaXM1LmhhbmRsZURvbmVBZGRpbmcuYmluZChfdGhpczUsIGtleSwgJ2FwcGVhcicpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVEb25lQWRkaW5nID0gZnVuY3Rpb24gKGtleSwgdHlwZSkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzNS5wcm9wcztcbiAgICBkZWxldGUgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICAvLyBpZiB1cGRhdGUgb24gZXhjbHVzaXZlIG1vZGUsIHNraXAgY2hlY2tcbiAgICBpZiAocHJvcHMuZXhjbHVzaXZlICYmIHByb3BzICE9PSBfdGhpczUubmV4dFByb3BzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKTtcbiAgICBpZiAoIV90aGlzNS5pc1ZhbGlkQ2hpbGRCeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSkpIHtcbiAgICAgIC8vIGV4Y2x1c2l2ZSB3aWxsIG5vdCBuZWVkIHRoaXNcbiAgICAgIF90aGlzNS5wZXJmb3JtTGVhdmUoa2V5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhcHBlYXInKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuYWxsb3dBcHBlYXJDYWxsYmFjayhwcm9wcykpIHtcbiAgICAgICAgcHJvcHMub25BcHBlYXIoa2V5KTtcbiAgICAgICAgcHJvcHMub25FbmQoa2V5LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFuaW1VdGlsLmFsbG93RW50ZXJDYWxsYmFjayhwcm9wcykpIHtcbiAgICAgIHByb3BzLm9uRW50ZXIoa2V5KTtcbiAgICAgIHByb3BzLm9uRW5kKGtleSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucGVyZm9ybUxlYXZlID0gZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIG1heSBhbHJlYWR5IHJlbW92ZSBieSBleGNsdXNpdmVcbiAgICBpZiAoX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldKSB7XG4gICAgICBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgIF90aGlzNS5jaGlsZHJlblJlZnNba2V5XS5jb21wb25lbnRXaWxsTGVhdmUoX3RoaXM1LmhhbmRsZURvbmVMZWF2aW5nLmJpbmQoX3RoaXM1LCBrZXkpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVEb25lTGVhdmluZyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczUucHJvcHM7XG4gICAgZGVsZXRlIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgLy8gaWYgdXBkYXRlIG9uIGV4Y2x1c2l2ZSBtb2RlLCBza2lwIGNoZWNrXG4gICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSAmJiBwcm9wcyAhPT0gX3RoaXM1Lm5leHRQcm9wcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY3VycmVudENoaWxkcmVuID0gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSk7XG4gICAgLy8gaW4gY2FzZSBzdGF0ZSBjaGFuZ2UgaXMgdG9vIGZhc3RcbiAgICBpZiAoX3RoaXM1LmlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSkge1xuICAgICAgX3RoaXM1LnBlcmZvcm1FbnRlcihrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZW5kID0gZnVuY3Rpb24gZW5kKCkge1xuICAgICAgICBpZiAoYW5pbVV0aWwuYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICAgIHByb3BzLm9uTGVhdmUoa2V5KTtcbiAgICAgICAgICBwcm9wcy5vbkVuZChrZXksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmICghaXNTYW1lQ2hpbGRyZW4oX3RoaXM1LnN0YXRlLmNoaWxkcmVuLCBjdXJyZW50Q2hpbGRyZW4sIHByb3BzLnNob3dQcm9wKSkge1xuICAgICAgICBfdGhpczUuc2V0U3RhdGUoe1xuICAgICAgICAgIGNoaWxkcmVuOiBjdXJyZW50Q2hpbGRyZW5cbiAgICAgICAgfSwgZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGU7Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJFdmVudCIsImNsYXNzZXMiLCJhbmltVXRpbCIsIlJlYWN0RE9NIiwiY3NzQW5pbWF0ZSIsIlByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7O0FBUUEsSUFBSSxxQkFBcUIsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7QUFDekQsSUFBSSxjQUFjLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7QUFDckQsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDOztBQUU3RCxTQUFTLFFBQVEsQ0FBQyxHQUFHLEVBQUU7Q0FDdEIsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7RUFDdEMsTUFBTSxJQUFJLFNBQVMsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0VBQzdFOztDQUVELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ25COztBQUVELFNBQVMsZUFBZSxHQUFHO0NBQzFCLElBQUk7RUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtHQUNuQixPQUFPLEtBQUssQ0FBQztHQUNiOzs7OztFQUtELElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQzlCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7RUFDaEIsSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO0dBQ2pELE9BQU8sS0FBSyxDQUFDO0dBQ2I7OztFQUdELElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztFQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7R0FDNUIsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0dBQ3hDO0VBQ0QsSUFB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

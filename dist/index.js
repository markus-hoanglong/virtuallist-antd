'use strict';

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

var freeGlobal$1 = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal$1 || freeSelf || Function('return this')();

var root$1 = root;

/** Built-in value references. */
var Symbol = root$1.Symbol;

var Symbol$1 = Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root$1.Date.now();
};

var now$1 = now;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".virtuallist .ant-table-tbody>tr>td>div{-webkit-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;vertical-align:middle;overflow:hidden;text-overflow:ellipsis;width:100%}.virtuallist .ant-table-tbody>tr>td.ant-table-row-expand-icon-cell>div{overflow:inherit}.ant-table-bordered .virtuallist>table>.ant-table-tbody>tr>td{border-right:1px solid #f0f0f0}";
styleInject(css_248z);

// ===============reducer ============== //
var initialState = {
    // 行高度
    rowHeight: 0,
    // 当前的scrollTop
    curScrollTop: 0,
    // 总行数
    totalLen: 0,
};
function reducer(state, action) {
    var curScrollTop = action.curScrollTop, rowHeight = action.rowHeight, totalLen = action.totalLen, ifScrollTopClear = action.ifScrollTopClear;
    var stateScrollTop = state.curScrollTop;
    switch (action.type) {
        // 改变trs 即 改变渲染的列表trs
        case 'changeTrs':
            return __assign(__assign({}, state), { curScrollTop: curScrollTop });
        // 初始化每行的高度, 表格总高度, 渲染的条数
        case 'initHeight':
            return __assign(__assign({}, state), { rowHeight: rowHeight });
        // 更改totalLen
        case 'changeTotalLen':
            if (totalLen === 0) {
                stateScrollTop = 0;
            }
            return __assign(__assign({}, state), { totalLen: totalLen, curScrollTop: stateScrollTop });
        case 'reset':
            return __assign(__assign({}, state), { curScrollTop: ifScrollTopClear ? 0 : state.curScrollTop });
        default:
            throw new Error();
    }
}
// ==============全局常量 ================== //
var DEFAULT_VID = 'vtable';
var vidMap = new Map();
var debounceListRender;
// ===============context ============== //
var ScrollContext = React.createContext({
    dispatch: undefined,
    renderLen: 1,
    start: 0,
    offsetStart: 0,
    // =============
    rowHeight: initialState.rowHeight,
    totalLen: 0,
    vid: DEFAULT_VID,
});
// =============组件 =================== //
function VCell(props) {
    var children = props.children, restProps = __rest(props, ["children"]);
    return (React.createElement("td", __assign({}, restProps),
        React.createElement("div", null, children)));
}
function VRow(props, ref) {
    var _a = React.useContext(ScrollContext), dispatch = _a.dispatch, rowHeight = _a.rowHeight, totalLen = _a.totalLen, vid = _a.vid;
    var children = props.children, style = props.style, restProps = __rest(props, ["children", "style"]);
    var trRef = React.useRef(null);
    React.useEffect(function () {
        var initHeight = function (tempRef) {
            var _a, _b, _c;
            if (((_a = tempRef === null || tempRef === void 0 ? void 0 : tempRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) && !rowHeight && totalLen) {
                var tempRowHeight = (_c = (_b = tempRef === null || tempRef === void 0 ? void 0 : tempRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) !== null && _c !== void 0 ? _c : 0;
                vidMap.set(vid, __assign(__assign({}, vidMap.get(vid)), { rowItemHeight: tempRowHeight }));
                dispatch({
                    type: 'initHeight',
                    rowHeight: tempRowHeight,
                });
            }
        };
        initHeight(Object.prototype.hasOwnProperty.call(ref, 'current') ? ref : trRef);
    }, [trRef, dispatch, rowHeight, totalLen, ref, vid]);
    return (React.createElement("tr", __assign({}, restProps, { ref: Object.prototype.hasOwnProperty.call(ref, 'current')
            ? ref
            : trRef, style: __assign(__assign({}, style), { height: rowHeight || 'auto', boxSizing: 'border-box' }) }), children));
}
function VWrapper(props) {
    var children = props.children, restProps = __rest(props, ["children"]);
    var _a = React.useContext(ScrollContext), renderLen = _a.renderLen, start = _a.start, dispatch = _a.dispatch, vid = _a.vid, totalLen = _a.totalLen;
    var contents = React.useMemo(function () {
        return children[1];
    }, [children]);
    var contentsLen = React.useMemo(function () {
        var _a;
        return (_a = contents === null || contents === void 0 ? void 0 : contents.length) !== null && _a !== void 0 ? _a : 0;
    }, [contents]);
    React.useEffect(function () {
        if (totalLen !== contentsLen) {
            dispatch({
                type: 'changeTotalLen',
                totalLen: contentsLen !== null && contentsLen !== void 0 ? contentsLen : 0,
            });
        }
    }, [contentsLen, dispatch, vid, totalLen]);
    var tempNode = null;
    if (Array.isArray(contents) && contents.length) {
        tempNode = [
            children[0],
            contents.slice(start, start + (renderLen !== null && renderLen !== void 0 ? renderLen : 1)).map(function (item) {
                if (Array.isArray(item)) {
                    // 兼容antd v4.3.5 --- rc-table 7.8.1及以下
                    return item[0];
                }
                // 处理antd ^v4.4.0  --- rc-table ^7.8.2
                return item;
            }),
        ];
    }
    else {
        tempNode = children;
    }
    return React.createElement("tbody", __assign({}, restProps), tempNode);
}
function VTable(props, otherParams) {
    var _a, _b, _c, _d, _e;
    var style = props.style, children = props.children, rest = __rest(props, ["style", "children"]);
    var width = style.width, rest_style = __rest(style, ["width"]);
    var _f = otherParams !== null && otherParams !== void 0 ? otherParams : {}, vid = _f.vid, scrollY = _f.scrollY, reachEnd = _f.reachEnd, onScroll = _f.onScroll, resetScrollTopWhenDataChange = _f.resetScrollTopWhenDataChange;
    var _g = React.useReducer(reducer, initialState), state = _g[0], dispatch = _g[1];
    var wrap_tableRef = React.useRef(null);
    var tableRef = React.useRef(null);
    var ifChangeRef = React.useRef(false);
    // 数据的总条数
    var _h = React.useState((_d = (_c = (_b = (_a = children[1]) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0), totalLen = _h[0], setTotalLen = _h[1];
    React.useEffect(function () {
        setTotalLen(state.totalLen);
    }, [state.totalLen]);
    // 组件卸载的清除操作
    React.useEffect(function () {
        return function () {
            vidMap.delete(vid);
        };
    }, [vid]);
    // 数据变更
    React.useEffect(function () {
        var _a, _b, _c, _d, _e, _f, _g;
        ifChangeRef.current = true;
        // console.log('数据变更')
        if (isNumber((_c = (_b = (_a = children[1]) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.length)) {
            dispatch({
                type: 'changeTotalLen',
                totalLen: (_g = (_f = (_e = (_d = children[1]) === null || _d === void 0 ? void 0 : _d.props) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.length) !== null && _g !== void 0 ? _g : 0,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children[1].props.data]);
    // table总高度
    var tableHeight = React.useMemo(function () {
        var temp = 'auto';
        if (state.rowHeight && totalLen) {
            temp = state.rowHeight * totalLen;
        }
        return temp;
    }, [state.rowHeight, totalLen]);
    // table的scrollY值
    var _j = React.useState(0), tableScrollY = _j[0], setTableScrollY = _j[1];
    // tableScrollY 随scrollY / tableHeight 进行变更
    React.useEffect(function () {
        var _a, _b, _c;
        var temp = 0;
        if (typeof scrollY === 'string') {
            temp = (_c = (_b = (_a = wrap_tableRef.current) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.offsetHeight) !== null && _c !== void 0 ? _c : 0;
        }
        else {
            temp = scrollY;
        }
        // if (isNumber(tableHeight) && tableHeight < temp) {
        //   temp = tableHeight;
        // }
        // 处理tableScrollY <= 0的情况
        if (temp <= 0) {
            temp = 0;
        }
        setTableScrollY(temp);
    }, [scrollY, tableHeight]);
    // 渲染的条数
    var renderLen = React.useMemo(function () {
        var temp = 1;
        if (state.rowHeight && totalLen && tableScrollY) {
            if (tableScrollY <= 0) {
                temp = 0;
            }
            else {
                var tempRenderLen = ((tableScrollY / state.rowHeight) | 0) + 1 + 2;
                // console.log('tempRenderLen', tempRenderLen)
                // temp = tempRenderLen > totalLen ? totalLen : tempRenderLen;
                temp = tempRenderLen;
            }
        }
        return temp;
    }, [state.rowHeight, totalLen, tableScrollY]);
    // 渲染中的第一条
    var start = state.rowHeight ? (state.curScrollTop / state.rowHeight) | 0 : 0;
    // 偏移量
    var offsetStart = state.rowHeight ? state.curScrollTop % state.rowHeight : 0;
    // 用来优化向上滚动出现的空白
    if (state.curScrollTop &&
        state.rowHeight &&
        state.curScrollTop > state.rowHeight) {
        start -= 1;
        offsetStart += state.rowHeight;
    }
    else {
        start = 0;
    }
    // 数据变更 操作scrollTop
    React.useEffect(function () {
        var _a;
        var scrollNode = (_a = wrap_tableRef.current) === null || _a === void 0 ? void 0 : _a.parentNode;
        if (ifChangeRef === null || ifChangeRef === void 0 ? void 0 : ifChangeRef.current) {
            ifChangeRef.current = false;
            if (resetScrollTopWhenDataChange) {
                // 重置scrollTop
                if (scrollNode) {
                    scrollNode.scrollTop = 0;
                }
                dispatch({ type: 'reset', ifScrollTopClear: true });
            }
            else {
                // 不重置scrollTop 不清空curScrollTop
                dispatch({ type: 'reset', ifScrollTopClear: false });
            }
        }
        if (vidMap.has(vid)) {
            vidMap.set(vid, __assign(__assign({}, vidMap.get(vid)), { scrollNode: scrollNode }));
        }
    }, [totalLen, resetScrollTopWhenDataChange, vid, children]);
    React.useEffect(function () {
        var _a;
        var throttleScroll = throttle(function (e) {
            var _a, _b, _c, _d, _e, _f;
            var scrollTop = (_b = (_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.scrollTop) !== null && _b !== void 0 ? _b : 0;
            var scrollHeight = (_d = (_c = e === null || e === void 0 ? void 0 : e.target) === null || _c === void 0 ? void 0 : _c.scrollHeight) !== null && _d !== void 0 ? _d : 0;
            var clientHeight = (_f = (_e = e === null || e === void 0 ? void 0 : e.target) === null || _e === void 0 ? void 0 : _e.clientHeight) !== null && _f !== void 0 ? _f : 0;
            // 到底了 没有滚动条就不会触发reachEnd. 建议设置scrolly高度少点或者数据量多点.
            if (scrollTop === scrollHeight) ;
            else if (scrollTop + clientHeight >= scrollHeight) {
                // 有滚动条的情况
                // eslint-disable-next-line no-unused-expressions
                reachEnd && reachEnd();
            }
            // eslint-disable-next-line no-unused-expressions
            onScroll && onScroll();
            // 若renderLen大于totalLen, 置空curScrollTop. => table paddingTop会置空.
            dispatch({
                type: 'changeTrs',
                curScrollTop: renderLen <= totalLen ? scrollTop : 0,
            });
        }, 60);
        var ref = (_a = wrap_tableRef === null || wrap_tableRef === void 0 ? void 0 : wrap_tableRef.current) === null || _a === void 0 ? void 0 : _a.parentNode;
        if (ref) {
            ref.addEventListener('scroll', throttleScroll);
        }
        return function () {
            ref.removeEventListener('scroll', throttleScroll);
        };
    }, [onScroll, reachEnd, renderLen, totalLen]);
    // console.log(start, renderLen)
    debounceListRender(start, renderLen);
    return (React.createElement("div", { className: "virtuallist", ref: wrap_tableRef, style: {
            width: '100%',
            position: 'relative',
            height: tableHeight,
            boxSizing: 'border-box',
            paddingTop: state.curScrollTop,
        } },
        React.createElement(ScrollContext.Provider, { value: {
                dispatch: dispatch,
                rowHeight: (_e = vidMap === null || vidMap === void 0 ? void 0 : vidMap.get(vid)) === null || _e === void 0 ? void 0 : _e.rowItemHeight,
                start: start,
                offsetStart: offsetStart,
                renderLen: renderLen,
                totalLen: totalLen,
                vid: vid,
            } },
            React.createElement("table", __assign({}, rest, { ref: tableRef, style: __assign(__assign({}, rest_style), { width: width, position: 'relative', transform: "translateY(-" + offsetStart + "px)" }) }), children))));
}
// ================导出===================
function VList(props) {
    var _a = props.vid, vid = _a === void 0 ? DEFAULT_VID : _a, height = props.height, onReachEnd = props.onReachEnd, onScroll = props.onScroll, onListRender = props.onListRender, debounceListRenderMS = props.debounceListRenderMS, _b = props.resetTopWhenDataChange, resetTopWhenDataChange = _b === void 0 ? true : _b;
    var resetScrollTopWhenDataChange = onReachEnd
        ? false
        : resetTopWhenDataChange;
    if (!vidMap.has(vid)) {
        vidMap.set(vid, { _id: vid });
    }
    debounceListRender = onListRender
        ? debounce(function (_start, _renderLen) {
            onListRender({ start: _start, renderLen: _renderLen });
        }, debounceListRenderMS !== null && debounceListRenderMS !== void 0 ? debounceListRenderMS : 300)
        : function () { };
    return {
        table: function (p) {
            return VTable(p, {
                vid: vid,
                scrollY: height,
                reachEnd: onReachEnd,
                onScroll: onScroll,
                onListRender: onListRender,
                resetScrollTopWhenDataChange: resetScrollTopWhenDataChange,
            });
        },
        body: {
            wrapper: VWrapper,
            row: VRow,
            cell: VCell,
        },
    };
}
function scrollTo(option) {
    var row = option.row, y = option.y, _a = option.vid, vid = _a === void 0 ? DEFAULT_VID : _a;
    var _b = vidMap.get(vid), scrollNode = _b.scrollNode, rowItemHeight = _b.rowItemHeight;
    if (row) {
        if (row - 1 > 0) {
            scrollNode.scrollTop = (row - 1) * (rowItemHeight !== null && rowItemHeight !== void 0 ? rowItemHeight : 0);
        }
        else {
            scrollNode.scrollTop = 0;
        }
    }
    else {
        scrollNode.scrollTop = y !== null && y !== void 0 ? y : 0;
    }
    return { vid: vid, rowItemHeight: rowItemHeight };
}

exports.VList = VList;
exports.scrollTo = scrollTo;

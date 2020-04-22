"use strict";

var _inferno = require("inferno");

function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
    }
    return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
            descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
        _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
    return function () {
        var Super = _getPrototypeOf(Derived),
        result;
        if (_isNativeReflectConstruct()) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
    if (Reflect.construct.sham)
        return false;
    if (typeof Proxy === "function")
        return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
    } catch (e) {
        return false;
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}

/**
 * Valine comment JSX component.
 * @module view/comment/valine
 */
var _require = require('inferno'),
Component = _require.Component,
Fragment = _require.Fragment;

var _require2 = require('hexo-component-inferno/lib/util/cache'),
cacheComponent = _require2.cacheComponent;
/**
 * Valine comment JSX component.
 *
 * @see https://valine.js.org/quickstart.html
 * @example
 * <Valine
 *     appId="******"
 *     appKey="******"
 *     notify={false}
 *     verify={false}
 *     placeholder="******"
 *     avatar="mm"
 *     avatarForce={false}
 *     meta={['nick', 'mail', 'link']}
 *     pageSize={10}
 *     visitor={false}
 *     highlight={true}
 *     recordIp={false}
 *     jsUrl="/path/to/Valine.js" />
 */

var Valine = /*#__PURE__*/ function (_Component) {
    _inherits(Valine, _Component);

    var _super = _createSuper(Valine);

    function Valine() {
        _classCallCheck(this, Valine);

        return _super.apply(this, arguments);
    }

    _createClass(Valine, [{
                key: "render",
                value: function render() {
                    var _this$props = this.props,
                    appId = _this$props.appId,
                    appKey = _this$props.appKey,
                    notify = _this$props.notify,
                    verify = _this$props.verify,
                    enableQQ = _this$props.enableQQ,
                    placeholder = _this$props.placeholder,
                    _this$props$avatar = _this$props.avatar,
                    avatar = _this$props$avatar === void 0 ? 'mm' : _this$props$avatar,
                    _this$props$avatarFor = _this$props.avatarForce,
                    avatarForce = _this$props$avatarFor === void 0 ? false : _this$props$avatarFor,
                    _this$props$meta = _this$props.meta,
                    meta = _this$props$meta === void 0 ? ['nick', 'mail', 'link'] : _this$props$meta,
                    _this$props$pageSize = _this$props.pageSize,
                    pageSize = _this$props$pageSize === void 0 ? 10 : _this$props$pageSize,
                    _this$props$visitor = _this$props.visitor,
                    visitor = _this$props$visitor === void 0 ? false : _this$props$visitor,
                    _this$props$highlight = _this$props.highlight,
                    highlight = _this$props$highlight === void 0 ? true : _this$props$highlight,
                    _this$props$recordIp = _this$props.recordIp,
                    recordIp = _this$props$recordIp === void 0 ? false : _this$props$recordIp,
                    jsUrl = _this$props.jsUrl;

                    if (!appId || !appKey) {
                        return (0, _inferno.createVNode)(1, "div", "notification is-danger", [(0, _inferno.createTextVNode)("You forgot to set the "), (0, _inferno.createVNode)(1, "code", null, "app_id", 16), (0, _inferno.createTextVNode)(" or "), (0, _inferno.createVNode)(1, "code", null, "app_key", 16), (0, _inferno.createTextVNode)(" for Valine. Please set it in "), (0, _inferno.createVNode)(1, "code", null, "_config.yml", 16), (0, _inferno.createTextVNode)(".")], 4);
                    }

                    var js = "new Valine({\n            el: '#valine-thread' ,\n            notify: ".concat(notify, ",\n            verify: ").concat(verify, ",\n            appId: '").concat(appId, "',\n            appKey: '").concat(appKey, "',\n            placeholder: '").concat(placeholder, "',\n            avatar: '").concat(avatar, "',\n            avatarForce: ").concat(avatarForce, ",\n            meta: ").concat(JSON.stringify(meta), ",\n            pageSize: ").concat(pageSize, ",\n            visitor: ").concat(visitor, ",\n            enableQQ: ").concat(enableQQ, ",\n            highlight: ").concat(highlight, ",\n            recordIP: ").concat(recordIp, "\n        });");
                    return (0, _inferno.createFragment)([(0, _inferno.createVNode)(1, "div", "content", null, 1, {
                                "id": "valine-thread"
                            }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
                                "src": "//cdn.jsdelivr.net/gh/tiexo/tiexo.github.io@blog/themes/icarus/layout/comment/valine-admin.js"
                            }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
                                "src": "//cdn.jsdelivr.net/npm/valine/dist/Valine.min.js"
                            }), (0, _inferno.createVNode)(1, "script", null, null, 1, {
                                "dangerouslySetInnerHTML": {
                                    __html: js
                                }
                            })], 4);
                }
            }
        ]);

    return Valine;
}
(Component);
/**
 * Cacheable Valine comment JSX component.
 * <p>
 * This class is supposed to be used in combination with the <code>locals</code> hexo filter
 * ({@link module:hexo/filter/locals}).
 *
 * @see module:util/cache.cacheComponent
 * @example
 * <Valine.Cacheable
 *     comment={{
 *         app_id="******"
 *         app_key="******"
 *         notify={false}
 *         verify={false}
 *         placeholder="******"
 *         avatar="mm"
 *         avatar_force={false}
 *         meta={['nick', 'mail', 'link']}
 *         page_size={10}
 *         visitor={false}
 *         highlight={true}
 *         record_ip={false}
 *     }}
 *     helper={{ cdn: function() {...} }} />
 */

Valine.Cacheable = cacheComponent(Valine, 'comment.valine', function (props) {
    var comment = props.comment,
    helper = props.helper;
    return {
        appId: comment.app_id,
        appKey: comment.app_key,
        notify: comment.notify,
        verify: comment.verify,
        enableQQ: comment.enableQQ,
        placeholder: comment.placeholder,
        avatar: comment.avatar,
        avatarForce: comment.avatar_force,
        meta: comment.meta,
        pageSize: comment.page_size,
        visitor: comment.visitor,
        highlight: comment.highlight,
        recordIp: comment.record_ip
    };
});
module.exports = Valine;

import "antd/lib/form/style";
import _Form from "antd/lib/form";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import get from 'lodash/get';
import pick from 'lodash/pick';
import { withTheme } from '../withTheme';
import CustomButton from '../CustomButton';
/**
 * Themable Form.Item
 */

var SFormItem = withTheme(_Form.Item);
export var createGenericFormComponent = function createGenericFormComponent(config) {
  var GenericForm =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(GenericForm, _React$Component);

    function GenericForm() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, GenericForm);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GenericForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        submitting: false
      });

      _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
        e.preventDefault();

        _this.setState({
          submitting: true
        });

        _this.props.form.validateFieldsAndScroll(function (err, values) {
          if (!err) {
            console.log('Received values of form: ', values);
          }

          console.group(err);

          _this.setState({
            submitting: false
          });
        });
      });

      return _this;
    }

    _createClass(GenericForm, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            fields = _this$props.fields,
            form = _this$props.form,
            submitButtonContent = _this$props.submitButtonContent,
            submitButtonProps = _this$props.submitButtonProps;
        var submitting = get(this.state, 'submitting');

        var _pick = pick(form, ['getFieldDecorator']),
            getFieldDecorator = _pick.getFieldDecorator;

        return React.createElement(_Form, {
          hideRequiredMark: true,
          layout: "vertical",
          onSubmit: this.handleSubmit
        }, fields.map(function (_ref) {
          var Component = _ref.Component,
              componentProps = _ref.componentProps,
              fieldConfig = _ref.fieldConfig,
              label = _ref.label,
              name = _ref.name,
              formItemProps = _ref.formItemProps;
          return React.createElement(SFormItem, _extends({
            key: name,
            label: label,
            htmlFor: name,
            mb: 0
          }, formItemProps), getFieldDecorator(name, fieldConfig)(React.createElement(Component, componentProps)));
        }), React.createElement(CustomButton, _extends({
          content: submitButtonContent,
          disabled: submitting,
          htmlType: "submit",
          type: "primary"
        }, submitButtonProps)));
      }
    }]);

    return GenericForm;
  }(React.Component);

  return _Form.create(config)(GenericForm);
};
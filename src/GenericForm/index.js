import React from 'react'
import { Form } from 'antd'
import get from 'lodash/get'
import pick from 'lodash/pick'
import withTheme from '../withTheme'
import CustomButton from '../CustomButton'

/**
 * Themable Form.Item
 */
const SFormItem = withTheme(Form.Item)

export const createGenericFormComponent = config => {
  class GenericForm extends React.Component {
    state = {
      submitting: false
    }

    handleSubmit = e => {
      e.preventDefault()
      this.setState({ submitting: true })
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.props.onSubmit(values)
        }
        this.setState({ submitting: false })
      })
    }

    render() {
      const {
        fields,
        form,
        submitButtonContent,
        submitButtonHidden,
        submitButtonProps
      } = this.props
      const submitting = get(this.state, 'submitting')
      const { getFieldDecorator } = pick(form, ['getFieldDecorator'])

      return (
        <Form hideRequiredMark layout="vertical" onSubmit={this.handleSubmit}>
          {fields.map(
            ({
              Component,
              componentProps,
              fieldConfig,
              label,
              name,
              formItemProps
            }) => (
              <SFormItem
                key={name}
                label={label}
                htmlFor={name}
                mb={0}
                {...formItemProps}
              >
                {getFieldDecorator(name, fieldConfig)(
                  <Component {...componentProps} />
                )}
              </SFormItem>
            )
          )}
          {submitButtonHidden ? null : (
            <CustomButton
              content={submitButtonContent}
              disabled={submitting}
              htmlType="submit"
              type="primary"
              {...submitButtonProps}
            />
          )}
        </Form>
      )
    }
  }

  return Form.create(config)(GenericForm)
}

import React from 'react'
import PT from 'prop-types'
import _ from 'lodash'
import _fp from 'lodash/fp'
import { Form as AntForm } from 'antd'
import { Field, Form } from 'react-final-form'
import withTheme from '../withTheme'
import CustomButton from '../CustomButton'

/**
 * Themable Form.Item
 */
const SFormItem = withTheme(AntForm.Item)

/**
 * Gets the help message
 * @param {Object} param
 */
const getHelp = ({ active, dirty, error, invalid, submitFailed }) =>
  invalid && (dirty || submitFailed) && error

/**
 * Gets the validationStatus
 */
const getValidateStatus = _fp.pipe(
  getHelp,
  value => value && 'error'
)

const GenericForm = props => {
  const {
    fields,
    formProps,
    submitButtonContent,
    submitButtonHidden,
    submitButtonProps
  } = props
  return (
    <Form
      {...formProps}
      render={({ handleSubmit, ...rest }) => {
        return (
          <form onSubmit={handleSubmit}>
            {fields.map(({ Component, formItemProps, inputProps, name }) => {
              return (
                <Field
                  key={name}
                  name={name}
                  render={({ input, meta }) => {
                    return (
                      <SFormItem
                        hasFeedback
                        validateStatus={getValidateStatus(meta)}
                        help={getHelp(meta)}
                        {...formItemProps}
                      >
                        <Component {...input} {...inputProps} meta={meta} />
                      </SFormItem>
                    )
                  }}
                />
              )
            })}
            {submitButtonHidden ? null : (
              <CustomButton
                content={submitButtonContent}
                htmlType="submit"
                type="primary"
                {...submitButtonProps}
              />
            )}
          </form>
        )
      }}
    />
  )
}

GenericForm.propTypes = {
  fields: PT.array.isRequired,
  formProps: PT.object,
  submitButtonContent: PT.oneOfType([PT.element, PT.node, PT.string]),
  submitButtonHidden: PT.bool,
  submitButtonProps: PT.object
}

export default GenericForm

const hasNoErrors = value =>
  _fp.pipe(
    _fp.map(fn => fn(_.toString(value))),
    _fp.every(_fp.identity)
  )

export const getError = (value, rules, message) =>
  hasNoErrors(value)(rules) ? undefined : message

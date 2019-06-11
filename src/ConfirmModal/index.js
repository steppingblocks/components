import React from 'react'
import PT from 'prop-types'
import { Modal } from 'antd'
import { withTheme } from '../withTheme'
import { ButtonPropsPT, StringOrNodePT, StringOrNumberPT } from '../proptypes'

const ConfirmModal = withTheme(props => <Modal {...props} />)

ConfirmModal.propTypes = {
  afterClose: PT.func,
  bodyStyle: PT.object,
  cancelText: StringOrNodePT,
  centered: PT.bool,
  closable: PT.bool,
  confirmLoading: PT.bool,
  destroyOnClose: PT.bool,
  footer: StringOrNodePT,
  forceRender: PT.bool,
  getContainer: PT.element,
  mask: PT.bool,
  maskClosable: PT.bool,
  maskStyle: PT.object,
  okText: StringOrNodePT,
  okType: PT.string,
  okButtonProps: ButtonPropsPT,
  cancelButtonProps: ButtonPropsPT,
  style: PT.object,
  title: StringOrNodePT,
  visible: PT.bool,
  width: StringOrNumberPT,
  wrapClassName: PT.string,
  zIndex: PT.number,
  onCancel: PT.func,
  onOk: PT.func
}

ConfirmModal.defaultProps = {
  cancelText: 'Cancel',
  centered: true,
  closable: true,
  destroyOnClose: true,
  mask: true,
  maskClosable: true,
  okText: 'Ok'
}

ConfirmModal.displayName = 'ConfirmModal'

export default ConfirmModal

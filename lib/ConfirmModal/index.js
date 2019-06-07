import "antd/lib/modal/style";
import _Modal from "antd/lib/modal";
import React from 'react';
import { withTheme } from '../withTheme';

var ConfirmModal = function ConfirmModal(props) {
  return React.createElement(_Modal, props);
};

export default withTheme(ConfirmModal);
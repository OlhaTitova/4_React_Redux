import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import './ModalBase.scss';


export const ModalBase = ({
  header,
  text,
  textConfirm,
  bgColorHeader,
  bgColorBody,
  bgColorFooter,
  closeButton,
  bgInfo,
  onClose,
  onConfirm
}) => {

  return (
    <div
      className="wrapper"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal-header"
          style={{ backgroundColor: bgColorHeader }}
        >
          <h5 className="modal-title">
            {header}
          </h5>
          {closeButton &&
            <span
              className="close"
              onClick={onClose}
            >&times;</span>
          }
        </div>
        <div
          className="modal-body"
          style={{ backgroundColor: bgColorBody }}
        >
          <p className="text-modal">
            {text}
          </p>
          <p>
            {textConfirm}
          </p>
        </div>
        <div
          className="modal-footer"
          style={{ backgroundColor: bgColorFooter }}
        >
          <Button
            onClick={onConfirm}
            className="btn btn-m1"
            text='Ok'
            style={{ backgroundColor: bgInfo }}
          />
          <Button
            onClick={onClose}
            className="btn btn-m1"
            text='Cancel'
            style={{ backgroundColor: bgInfo }}
          />
        </div>
      </div>
    </div>
  )
}

ModalBase.propTypes = {

  header: PropTypes.string,
  text: PropTypes.string,
  textConfirm: PropTypes.string,
  bgColorHeader: PropTypes.string,
  bgColorBody: PropTypes.string,
  bgColorFooter: PropTypes.string,
  closeButton: PropTypes.bool,
  bgInfo: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
}
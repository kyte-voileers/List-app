import React from 'react';

export default function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {}
  return (
    <div className="modal">
      <h1>Are you sure?</h1>
      <button className="btn btn__alt" onClick={confirmHandler}>
        Yes
      </button>
      <button className="btn" onClick={props.onConfirm()}>
        No
      </button>
    </div>
  );
}

import React from 'react';
import { useState } from 'react';
import Modal from './modal';
import Backdrop from './backdrop';

export default function Todo(props) {
  const [modalIsOpen, setOpen] = useState(false);

  function deleteHandler() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

  function dropItem() {
    props.dropItem();
  }
  return (
    <div className="card">
      <h1>this is the test page</h1>
      <p>lets see what happens with {props.text}</p>
      <button className="btn" onClick={deleteHandler}>
        delete
      </button>
      {modalIsOpen ? <Backdrop onCancel={closeModal} /> : null}
      {modalIsOpen ? (
        <Modal onCancel={closeModal} onConfirm={dropItem} />
      ) : null}
    </div>
  );
}

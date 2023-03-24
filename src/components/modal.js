import React from 'react';

export default function Modal() {
  return (
    <div className="modal">
      <h1>Are you sure?</h1>
      <button className="btn btn__alt">Yes</button>
      <button className="btn">No</button>
    </div>
  );
}

import React from 'react';

export default function Todo(props) {
  function deleteHandler() {}
  return (
    <div className="card">
      <h1>this is the test page</h1>
      <p>lets see what happens with {props.text}</p>
      <button className="btn" onClick={deleteHandler}>
        delete
      </button>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="modal">
      <h1>Are you sure?</h1>
      <button className="btn btn__alt" onClick={deleteHandler}>
        Yes
      </button>
      <button className="btn" onClick={deleteHandler}>
        No
      </button>
    </div>
  );
}

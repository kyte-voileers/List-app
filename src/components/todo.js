import useState from 'react';
import Modal from './modal';
import Backdrop from './backdrop';

export default function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  return (
    <div className="card">
      <h1>this is the test page</h1>
      <p>lets see what happens with {props.text}</p>
      <button className="btn" onClick={deleteHandler}>
        delete
      </button>
      {modalIsOpen ? <Modal /> : null}
    </div>
  );
}

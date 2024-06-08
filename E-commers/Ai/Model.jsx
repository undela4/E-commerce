import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Bot} from './Bot.jsx'
import './model.css';
export default function Model(props) {

  return (


    <div className='model'>
            <Modal
      {...props}
      size="lg"
      backdrop="static"
     
      
    >
      <Modal.Header closeButton >
      <Modal.Title >Personal Assistance</Modal.Title>
      </Modal.Header>
      <Bot/>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>

    </Modal>
    </div>

  );
}
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, Input } from 'reactstrap';
import { addItem } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';
import FormGroup from 'reactstrap/es/FormGroup';
import uuid from 'uuid';

const ItemModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemInput, setItemInput] = useState('');
  const dispatch = useDispatch();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = e => {
    setItemInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addItem(itemInput));
    toggle();
  };

  return (
    <div>
      <Button
        color={'dark'}
        onClick={toggle}
        style={{
          marginBottom: '2rem',
          textTransform: 'uppercase',
          margin: '24px 15px'
        }}
      >
        Add Item
      </Button>

      <Modal isOpen={isOpen}>
        <ModalHeader toggle={toggle}>Add to your Product WishList</ModalHeader>

        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup style={{display:'flex'}}>

							<Input
                type={'text'}
                name={'name'}
                id={'item'}
                placeholder={'Add Wishlist item'}
                onChange={handleChange}

              />

              <Button style={{margin:'0 0 0 8px'}}>SAVE</Button>

            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

// export default connect(null)(ItemModal);
export default ItemModal;

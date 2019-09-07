import React, { useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

const ProductList = () => {
  const [items, setItems] = useState([
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Water' }
  ]);

  return (
    <Container>
      <Button
        color={'dark'}
        style={{ marginBottom: '2rem' }}
        onClick={() => {
          const name = prompt('Enter item');
          if (name) {
            setItems([...items, { id: uuid(), name }]);
          }
        }}
      >
        Click
      </Button>

      <ListGroup>
        <TransitionGroup className={'shopping-list'}>
          {items.map(itemObj => {
            return (
              <CSSTransition key={itemObj.id} timeout={500} classNames={'fade'}>
                <ListGroupItem>
                  <Button
                    className={'remove-btn'}
                    color={'danger'}
                    size={'sm'}

                    onClick={() => {

                    	//do the following:
                      setItems(
                        items.filter(item => {
                          return item.id !== itemObj.id;
                        })
                      );

                    }}

                  >
                    &times;
                  </Button>
                  {itemObj.name}
                </ListGroupItem>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ProductList;

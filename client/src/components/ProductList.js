import React, { useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem, getItems } from '../redux/actions/actions';

const ProductList = () => {
  const items = useSelector(state => state.item.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <Container>
      <Button
        color={'dark'}
        style={{ marginBottom: '2rem' }}
        onClick={() => {
          const name = prompt('Enter item');

          if (name) {
            dispatch(addItem(name));
          }
        }}
      >
        Click
      </Button>

      <ListGroup>
        <TransitionGroup className={'shopping-list'}>
          {items &&
            items.map(itemObj => {
              return (
                <CSSTransition
                  key={itemObj.id}
                  timeout={500}
                  classNames={'fade'}
                >
                  <ListGroupItem>
                    <Button
                      className={'remove-btn'}
                      color={'danger'}
                      size={'sm'}
                      onClick={() => {
                        dispatch(deleteItem(itemObj.id));
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

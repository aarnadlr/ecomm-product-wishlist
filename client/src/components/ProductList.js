import React, { useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, getItems } from '../redux/actions/actions';
import _ from 'lodash';

const ProductList = () => {
  const items = useSelector(state => state.item.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  },[dispatch]);

  return (
    <Container>

      <ListGroup>
        <TransitionGroup className={'shopping-list'}>

         	{ _.isEmpty(items) && console.log('EMPTY!')}

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

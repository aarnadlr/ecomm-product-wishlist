import React, { useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteItem,
  getItems
  // ITEMS_LOADING, setItemsLoading
} from '../redux/actions/actions';
import _ from 'lodash';
import uuid from 'uuid';
const ProductList = () => {
  const items = useSelector(state => state.item.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Container>
      <ListGroup>

        {_.isEmpty(items) && <h5>Your Wishlist is Empty!</h5>}

        <TransitionGroup className={'shopping-list'}>
          {items.map(itemObj => {
            return (
              <CSSTransition key={uuid()} timeout={500} classNames={'fade'}>
                <ListGroupItem
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  {itemObj && itemObj.name}
                  <Button
                    className={'remove-btn'}
                    color={'danger'}
                    size={'sm'}
                    onClick={() => {
                      dispatch(deleteItem(itemObj._id));
                    }}
                  >
                    DELETE
                  </Button>
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

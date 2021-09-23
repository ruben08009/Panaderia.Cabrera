import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


import { getOrders, delterOrder } from '../../store/actions/order.action'

import OrderItem from '../../components/OrderItem'


const OrdersScreen = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders.items)

  useEffect(()=>{
    dispatch(getOrders())
  },[])

const onHandlerDeleteItem = (id) => { dispatch(delterOrder(id))}

const renderCardItem = (itemData) => (
  <OrderItem
    item={itemData.item}
    onDelete={onHandlerDeleteItem}
    />
)

return (
  <View style={styles.screen}>
    <FlatList
    data={Object.values(orders)}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderCardItem}
    numColumns={1}/>
  </View>
)
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default OrdersScreen;
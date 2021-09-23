import React from "react";
import {View,Text,StyleSheet,Button} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {COLORS} from '../constants/colors.js';

const formatDay = (time) =>{
    const date = new Date(time)
    console.log(time)
    return date.toLocaleDateString()
    
}

const sumTotal=(list) => list.map(item => item.quantity * item.price).reduce((a,b) => a + b,0)

const OrderItem = ({item, onDelete}) =>{
return (
<View style={styles.order}>
    <View style={styles.data}>
       <Text>{formatDay(item.date)}</Text>
       <Text>$ {sumTotal(item.items)}</Text>
       
    </View> 
    <View style={styles.actions}>
        <Button 
            title="Borrar"
            color={COLORS.primary}
            onPress={() => onDelete(item.id)}/>
    </View>    
</View>      
)
}

const styles = StyleSheet.create({
    order: {
      flex: 1,
      flexDirection: 'row',
      padding: 8,
      width:'100%',
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      justifyContent: 'space-between',
    },
    data: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height:60,
    },
    actions:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height:60,
      justifyContent: 'space-between',
    }
  })

export default OrderItem


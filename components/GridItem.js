import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={{ ...styles.container, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <Image style={styles.image} source={item.imagen}/>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 8,
  },
  title: {
    fontFamily: 'OpenSansBold',
    textAlign: 'right'
  },
  image:{
    width:"100%",
    height: "80%",
  },
});

export default GridItem;
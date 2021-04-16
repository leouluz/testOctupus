import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export function CardList(props) {

  const price = parseFloat(props.item.price).toFixed(2)

  return (
    <View style={styles.cardResult}>
      <Text style={styles.textInfoTitle}> {props.item.name} </Text>
      <View flexDirection="row">
        <Text style={styles.textInfoB}>{props.item.type}</Text>
      </View>
      <View style={styles.priceLocation}>
        <Text style={styles.textInfo}>{`R$ ${price}`}</Text>
        <Text style={styles.textInfo}>100 KM</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardResult: {
    backgroundColor: '#fdfdfd',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginBottom: 4
  },
  priceLocation: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInfoTitle: {
    fontWeight: 'bold',
    marginBottom: 4
  },
  textInfoB: {
    backgroundColor: '#fdfdfd',
    borderRadius: 10,
    padding: 4,
    marginHorizontal: 4,
    elevation: 2
  }
})

export default CardList

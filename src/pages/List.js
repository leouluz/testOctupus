import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import CardList from '../components/CardList'

export default function Search() {

  DATA = [
    {
      "key": '1',
      "name": "TV1",
      "type": "TV",
      "price": 73.34832366395793,
      "coords": {
        "lat": -24.940340234185694,
        "lon": -48.94034023418569
      }
    },
    {
      "key": '2',
      "name": "TV2",
      "type": "TV",
      "price": 6.1666841336700084,
      "coords": {
        "lat": -24.820569675334408,
        "lon": -48.820569675334404
      }
    },
    {
      "key": '3',
      "name": "Telefone Fixo 1",
      "type": "LANDLINE",
      "price": 60.44790299585252,
      "coords": {
        "lat": -24.901162764274986,
        "lon": -48.901162764274986
      }
    },
    {
      "key": '4',
      "name": "Telefone Fixo 2",
      "type": "LANDLINE",
      "price": 23.72150724568563,
      "coords": {
        "lat": -24.687581599319298,
        "lon": -48.6875815993193
      }
    },
    {
      "key": '5',
      "name": "Internet 1",
      "type": "BROADBAND",
      "price": 3.5508402766619263,
      "coords": {
        "lat": -24.832882775346995,
        "lon": -48.832882775346995
      }
    },
    {
      "key": '6',
      "name": "Internet 2",
      "type": "BROADBAND",
      "price": 24.186328437762644,
      "coords": {
        "lat": -24.91430466319575,
        "lon": -48.91430466319575
      }
    },
    {
      "key": 7,
      "name": "Adicional 1",
      "type": "ADDON",
      "price": 13.182684787322257,
      "coords": {
        "lat": -24.880457685754823,
        "lon": -48.88045768575482
      }
    },
    {
      "key": 8,
      "name": "Adicional 2",
      "type": "ADDON",
      "price": 37.31466321918417,
      "coords": {
        "lat": -24.611334352617956,
        "lon": -48.61133435261796
      }
    }
  ]

  const renderItem = ({ item }) => (<CardList item={item} />)

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(DATA) => DATA.key.toString()}
        data={DATA}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
})
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'

import CardList from '../components/CardList'

import api from '../service/api'

export default function Search() {

  let [info, setInfo] = useState([]);

  useEffect(() => {
    async function loadList() {
      const response = await api.get('options?lat=-25.42778&lon=-49.27306')
      await setInfo(response.data.list)
    }
    loadList()
  }, [])

  const renderItem = ({ item }) => (<CardList item={item} />)

  return (
    <View style={styles.container}>
      <FlatList
        data={info}
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
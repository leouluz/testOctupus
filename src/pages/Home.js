import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {

  function handlerNavigation() {
    navigation.navigate('Menu')
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.tittle}>
          Meus Planos
        </Text>
        <Text style={styles.infoText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handlerNavigation}
      >
        <Text> Home </Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: '20%'
  },
  tittle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10
  },
  infoText: {
    marginBottom: 120,

  },
  button: {
    width: '60%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdfdfd',
    elevation: 5
  }

})

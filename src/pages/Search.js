import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native'
import { getCurrentPositionAsync } from 'expo-location'
import LottieView from 'lottie-react-native';

import LoadList from '../assets/loadList.json'

import api from '../service/api'

import CardList from '../components/CardList'

import MapPositions from './Map'

export default function Search() {

  const [localization, setLocalization] = useState('')
  const [modaOnOff, setModaOnOff] = useState(false)
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function loadList() {
      const { coords } = await getCurrentPositionAsync({
        enabledHighAccuracy: true,
      })
    
      const { latitude, longitude } = coords;
      const response = await api.get(`options?lat=${latitude}8&lon=${longitude}`)
      await setInfo(response.data.list)
      setLocalization(true)
    }
    loadList()
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {setModaOnOff(true)}}
    >
      <CardList item={item} />
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Endereço"
        placeholderTextColor="#999"
        style={styles.input}
      />
      <TouchableOpacity style={styles.buttonLocal}>
        <Ionicons name="location-outline" size={28} color="#999" />
        <View>
          <Text style={styles.textLocal}>Sua Localização</Text>
          {
            localization ? (<Text style={styles.textLocation}>Edgard Garcia da Costa</Text>) : (<></>)
          }
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modaOnOff}
        >
        <View style={styles.modalView}>
            <MapPositions/>
            <TouchableOpacity
              onPress={(() => {setModaOnOff(false)})}
              style={{ 
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#191d36',
              }}
              >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight:'bold',
                  color: '#fdfdfd'
                }}
                >Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      {
        !localization ? (
        <LottieView
          autoPlay
          style={{
            alignSelf: 'center',
            marginTop:'5%',
            width: 350,
            height: 350,
            backgroundColor: '#191d36',
          }}
          source={LoadList}
          />
          ) : 
      <FlatList
      data={info}
      renderItem={renderItem}
      keyExtractor={(info, index) => index.toString()}
      />
    }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#191d36'
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  buttonLocal: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 10
  },
  textLocal: {
    fontSize: 18,
    color: '#999',
    marginHorizontal: 8
  },
  textLocation: {
    fontSize: 16,
    color: '#999',
    marginHorizontal: 8
  },
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})
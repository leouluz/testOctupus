import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, FlatList, Modal } from 'react-native'
import { getCurrentPositionAsync } from 'expo-location'
import LottieView from 'lottie-react-native';
import {ThemeProvider} from 'styled-components'
  
// Serviços
import api from '../service/api'

// Components
import CardList from '../components/CardList'
import MapPositions from './Map'

// Medias e Estilos
import LoadList from '../assets/loadList.json'
import {Container, InputSearch, ButtonLocation, TextLocalization, ModalMap} from './SearchStyles'

export default function Search() {

  const [localization, setLocalization] = useState('')
  const [modaOnOff, setModaOnOff] = useState(false)
  const [info, setInfo] = useState([]);
  const [packges, setPackges] = useState([]);

  useEffect(() => {
    async function loadList() {
      const { coords } = await getCurrentPositionAsync({
        enabledHighAccuracy: true,
      })
    
      const { latitude, longitude } = coords;
      const response = await api.get(`options?lat=${latitude}8&lon=${longitude}`)
      await setInfo(response.data.list)
      setLocalization(true)

      info.map((product, index) => {
        

        let pacote = {
          TV: product.name == 'TV1' ? product.name : '',
          BROADBAND: product.name,
          LANDLINE: product.name,
          ADDON: product.name,
        }
        setPackges(pacote)
        console.log(packges)
      })

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

  const themes = {
    fontLocation: '16px',
  }

  return (
    <ThemeProvider theme={themes}>
    <Container>
      <InputSearch
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Endereço"
        placeholderTextColor="#999"
      />
      <ButtonLocation>
        <Ionicons name="location-outline" size={28} color="#999" />
        <View>
          <TextLocalization>Sua Localização</TextLocalization>
          {
            localization ? (<TextLocalization>Edgard Garcia da Costa</TextLocalization>) : (<></>)
          }
        </View>
      </ButtonLocation>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modaOnOff}
        >
        <ModalMap>
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
          </ModalMap>
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
    </Container>
    </ThemeProvider>
  )
}
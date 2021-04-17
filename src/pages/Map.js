import React, { useEffect, useState } from 'react'
import LottieView from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons'
import MapView, { Marker } from 'react-native-maps'
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'

import api from '../service/api'

import LoadMap from '../assets/loadMap.json'

export default function Map() {

  const [currentRegion, setCurrentRegion] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(() => {
    async function loadInitalPosition() {

      const { granted } = await requestForegroundPermissionsAsync()

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enabledHighAccuracy: true,
        })

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        })

      const response = await api.get(`options?lat=${latitude}8&lon=${longitude}`)
      await setInfo(response.data.list)
      }
    }
    loadInitalPosition()
  }, [])
  if (!currentRegion) {
    return ( 
      <LottieView
          autoPlay
          style={{
            flex:1,
            alignSelf: 'center',
            backgroundColor: '#191d36'
          }}
          source={LoadMap}
          />
    )
  }
  return (
    <MapView initialRegion={currentRegion} style={{ flex: 1 }}>
      {
        info.map((infos, index) => (
          <Marker 
           coordinate={{ latitude: infos.coords.lat, longitude: infos.coords.lon }}
           key={index}
           >
             <FontAwesome name="map-marker" size={55} color="black" />
           </Marker>
        ))
      }
    </MapView>
  )
}

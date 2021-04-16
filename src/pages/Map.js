import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'

export default function Map() {

  const [currentRegion, setCurrentRegion] = useState(null)

  useEffect(() => {
    async function loadInitalPosition() {

      const { granted } = await requestForegroundPermissionsAsync()

      if (granted) {
        const teste = await getCurrentPositionAsync({
          enabledHighAccuracy: true,
        })
        const { coords } = await getCurrentPositionAsync({
          enabledHighAccuracy: true,
        })

        console.log(teste)
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.006,
          longitudeDelta: 0.006
        })
      }
    }
    loadInitalPosition()
  }, [])
  if (!currentRegion) {
    return null
  }
  return (
    <MapView initialRegion={currentRegion} style={{ flex: 1 }}>
      <Marker coordinate={{ latitude: -21.111246, longitude: -47.9898934 }}>
        <Callout><Text >testando</Text></Callout>

      </Marker>
    </MapView>
  )
}

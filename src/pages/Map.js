import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'

export default function Map() {

  const [currentRegion, setCurrentRegion] = useState(null)

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
          latitudeDelta: 0.006,
          longitudeDelta: 0.006
        })
      }
    }
    loadInitalPosition()
  }, [])
  return (
    <MapView initialRegion={currentRegion} style={{ flex: 1 }} />
  )
}

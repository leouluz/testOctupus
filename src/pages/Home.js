import React from 'react'
import { Text, View } from 'react-native'
import LottieView from 'lottie-react-native';

import HomeAnimation from '../assets/homeAnimation.json'

import { Container, Tittle, InfoText, ButtonHome, ButtonText } from './homeStyles'

export default function Home({ navigation }) {

  function handlerNavigation() {
    navigation.navigate('Menu')
  }

  return (
    <Container>
      <View>
        <Tittle>
          Meus Planos
        </Tittle>
        <InfoText>
          Quer desfrutar dos melhores planos de TV, BROADBAND, LANDLINE e ADDON?
          Acesse nosso link abaixo e veja os pacotes disponiveis proximos de sua região.
          Nós lhe oferemos as melhores opções com qualidade.
        </InfoText>
        <LottieView
          autoPlay
          style={{
            alignSelf: 'center',
            marginTop:'5%',
            width: 350,
            height: 350,
            backgroundColor: '#191d36',
          }}
          source={HomeAnimation}
          />
      </View>
      <ButtonHome
        onPress={handlerNavigation}
      >
        <ButtonText> Home </ButtonText>
      </ButtonHome>
    </Container>
  )
}

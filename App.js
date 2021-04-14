import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Route from './src/routes'
import Home from './src/pages/Home'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Home />
    </>
  );
}


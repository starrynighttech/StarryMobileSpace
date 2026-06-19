import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native"

import { Video } from "expo-av"

export default function App() {

  return (
    <View style={styles.container}>

      <Video
        source={require("./assets/smoke.mp4")}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.overlay} />

      <View style={styles.content}>

        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>
          STARRY MOBILE SPACE
        </Text>

        <Text style={styles.subtitle}>
          Shop • Earn • Track
        </Text>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#000"
  },

  overlay:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:"rgba(0,0,0,.4)"
  },

  content:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  logo:{
    width:220,
    height:220,
    resizeMode:"contain"
  },

  title:{
    color:"#fff",
    fontSize:28,
    fontWeight:"bold"
  },

  subtitle:{
    color:"#fff",
    marginTop:10
  }
})

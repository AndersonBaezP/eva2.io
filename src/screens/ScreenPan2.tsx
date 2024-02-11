import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const ScreenPan2 = () => {
  return (
   <View>
     <Image 
              source={{uri:'https://ipaperds.com/wp-content/uploads/2023/03/super-saiyan-goku-wallpaper-4k.jpg'}}
              style={styles.imageStile}
              
              />
   </View>
  )
}

const styles=StyleSheet.create({
  imageStile:{
      width:420,
      height:750,
      alignContent:'center',
      alignItems:'center'
      
      
    }
  })

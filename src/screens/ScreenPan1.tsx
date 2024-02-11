import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'



export const ScreenPan1 = () => {
  return (
   <View>
    <Image 
              source={{uri:'https://images.vexels.com/media/users/3/200066/isolated/preview/6778656beb270356664d5a58dc60f34e-scooter-de-entrega-de-pizza.png'}}
              style={styles.imageStile}
              
              />
    
   </View>
  )
}
const styles=StyleSheet.create({
    imageStile:{
        width:400,
        height:400,
        marginTop:90
      }

})

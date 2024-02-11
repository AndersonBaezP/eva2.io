import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { style } from '../theme/AppTheme';

interface Props extends StackScreenProps<any,any>{}

export const Principal = ({navigation}:Props) => {
  return (
    <View style={style.globalMargin}>
        <Text style={style.globalMargin}>Bienvenidos</Text>
        <Button 
    title='Imagen 1'
    onPress={()=>navigation.navigate('creenPan1')}/>
       <Button
    title='Imagen 2'
    onPress={()=>navigation.navigate('creenPan2')}/>
       <Button
    title='>='
    onPress={()=>navigation.navigate('creenPan3')}/>
       <Button
    title='<='
    onPress={()=>navigation.navigate('creenPan4')}/>
    </View>
    
  )
}



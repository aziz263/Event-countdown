import * as React from 'react';
import {View , Text } from 'react-native';
import BottomFonct from './src' ;

export default function AddEvent({navigation}){
return (
    <View style={{flex:1 , alignItems:'centre', justifyContents:'center '}}> 
    <Text
        onPress={() => navigation.navigate('home')}
        style = {{fontSize:26 , fontWeight:'bold'}}> AddEvent Screen
    </Text>
    <BottomFonct/>
    </View>
);
}

import * as React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'centre', justifyContents: 'center ' }}>
            <Text
                onPress={() => alert('this is the "home" screen')}
                style={{ fontSize: 26, fontWeight: 'bold' }}> Home as Screen
            </Text>
        </View>
    );
}
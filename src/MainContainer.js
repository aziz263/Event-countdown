import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './navigation/home';
import AddEvent from './navigation/AddEvent';

const homename = 'Home';
const addeventname = 'AddEvent';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homename}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homename) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === addeventname) {
                            iconName = focused ? 'add' : 'add-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'grey',
                    labelStyle :{paddingBottom: 10 , fontSize: 10},
                    style :{padding :10 , heigh: 70}
                }}
            >
                <Tab.Screen name={homename} component={HomeScreen} />
                <Tab.Screen name={addeventname} component={AddEvent} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

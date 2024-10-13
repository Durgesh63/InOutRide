import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { styled } from 'nativewind';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();

        setTimeout(async () => {
            const userToken = await AsyncStorage.getItem('userToken');
            if (userToken) {
                if (userToken) {
                    navigation?.replace('Login');
                } else {

                    navigation?.replace('MainApp');
                }

            } else {
                navigation?.replace('Login');

            }
        }, 3000);
    }, [fadeAnim, navigation]);

    return (
        <View className="flex-1 justify-center items-center bg-green-500">
            <Animated.View style={{ opacity: fadeAnim }}>
                <Text className="text-4xl font-bold text-white">InOutRide</Text>
            </Animated.View>
        </View>
    );
};

export default SplashScreen;

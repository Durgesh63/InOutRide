import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styled } from 'nativewind';
export default function Header() {
    return (
        <View className="flex-row justify-between items-center p-4">
            <Text className="text-2xl font-bold text-green-600">InOutRide</Text>
            <TouchableOpacity className="bg-gray-200 border-4 border-green-600  rounded-full">
                <View className="flex-row space-x-1">
                    <Image
                        source={{ uri: 'https://via.placeholder.com/100' }}
                        className="w-7 h-7 rounded-full"
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}
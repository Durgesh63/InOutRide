import { View, Text } from 'react-native'
import React from 'react'

const HistoryCard = () => {
    return (
        <View className="flex-row justify-between mb-2">
            <View className="flex-row items-center">
                <View className="bg-blue-200 p-2 rounded-full">
                    {/* Placeholder for icon */}
                    <Text className="text-blue-700">⏰ </Text>
                    {/* <Text className="text-blue-700">🍽️</Text> */}
                </View>
                <View className="ml-4">
                    <Text className="text-gray-700">Pending</Text>
                    <Text className="text-gray-500">June 30 - 19:20 - 20:40</Text>
                </View>
            </View>
            <Text className="text-gray-700">IR 24.00</Text>
        </View>
    )
}

export default HistoryCard
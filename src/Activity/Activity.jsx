import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header/Header';
import { styled } from 'nativewind';
import TripHistoryCard from './History/TripHistoryCard';

const Activity = () => {
  const trips = [
    { title: 'Tower S3', time: '7 Oct · 9:04 am', price: 0, status: 'Cancelled' },
    { title: 'Okhla Bird Sanctuary', time: '29 Aug · 8:06 pm', status: 'Unfulfilled' },
    { title: 'The Beauty BAE', time: '8 Aug · 6:45 pm', price: 0, status: 'Cancelled' },
    { title: 'Cybercure Technologies', time: '5 Aug · 9:10 am', price: 89 },
  ];
  return (
    <SafeAreaView className="flex-1 ">
      <Header />
      <View className="flex-1 px-2">


        <ScrollView>
          {/* Upcoming Section */}
          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <Text className="text-white text-xl mb-2">Upcoming</Text>
            <View className="bg-gray-900 p-4 rounded-lg flex-row justify-between items-center">
              <View>
                <Text className="text-white text-lg">You have no upcoming trips</Text>
                <Text className="text-gray-400 mt-1">Reserve your trip →</Text>
              </View>
              <Icon name="car-outline" size={40} color="#fff" />
            </View>
          </View>

          {/* Previous Trip list  */}
          <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-white text-xl">Past</Text>
            </View>

            <View className="bg-gray-900 p-4 rounded-lg">
              <View className="h-32 bg-gray-700 mb-4 rounded-lg">
                <Image
                  source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image
                  className="w-full h-full rounded-lg"
                  resizeMode="cover"
                />
              </View>

              <View>
                <Text className="text-white text-lg mb-2">Tower S3</Text>
                <Text className="text-gray-400">10 Oct · 9:27 am</Text>
                <Text className="text-gray-400">₹88.00</Text>
              </View>

              <TouchableOpacity className="mt-4 flex-row items-center justify-center bg-gray-700 p-2 rounded-lg">
                <Icon name="reload-outline" size={20} color="#fff" />
                <Text className="text-white ml-2">Rebook</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Trip History List  */}
          <TripHistoryCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Activity
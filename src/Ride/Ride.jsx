/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styled } from 'nativewind';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';

export default function Ride() {
  return (

    <View className="flex-1 bg-white">

      <Header />

      {/* <View className="items-center mt-4 mx-1 h-[30%] px-1">
        <Image
          source={{ uri: 'https://via.placeholder.com/150x150' }} // Replace with actual bus image URI
          className="w-full h-full rounded-lg"
        />
      </View> */}

      <Carousel />




      <View className="bg-gray-100 p-3 rounded-lg my-4 mx-2">
        <Text className="text-lg font-semibold">City Destination</Text>
        <Text className="text-gray-500">For those of you who want to go somewhere</Text>
        <View className="bg-white flex-row items-center p-2 rounded-full mt-2">
          {/* <FontAwesome name="map-marker" size={24} color="red" /> */}
          <TextInput
            placeholder="Gorakhnath,Gorakhpur, etc"
            className="ml-2 flex-1 rounded-md"
          />
        </View>
      </View>

      <View className="flex-wrap flex-row justify-between mt-6 p-2 gap-4">
        <TouchableOpacity className="items-center w-28 h-24 justify-center bg-gray-200 rounded-lg">
          <FontAwesome name="car" size={32} color="black" />
          <Text className="mt-2 text-sm font-semibold text-center">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center w-28 h-24 justify-center bg-gray-200 rounded-lg">
          <FontAwesome name="bicycle" size={32} color="black" />
          <Text className="mt-2 text-sm font-semibold text-center">E-Bike</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center w-28 h-24 justify-center bg-gray-200 rounded-lg">
          <FontAwesome name="user" size={32} color="black" />
          <Text className="mt-2 text-sm font-semibold text-center">Request</Text>
        </TouchableOpacity>

      </View>
      <View className="items-center mt-4 mx-1 h-[15%] px-1">
        <Image
          source={{ uri: 'https://via.placeholder.com/150x150' }} // Replace with actual bus image URI
          className="w-full h-full rounded-lg"
        />
      </View>

    </View>

  )
}
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styled } from 'nativewind';

export default function User() {

  return (
    <ScrollView>

      <View className="flex-1 bg-gray-100 text-black dark:text-white p-2">

        {/* Header */}
        <View className="flex-row justify-between items-center">
          <View className="flex-col ">

            <Text className="text-xl font-bold">Durgesh Maurya</Text>
            <Text className="text-xl font-bold">@durgesh</Text>
          </View>
          <View className="flex-row space-x-4">
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              className="w-20 h-20 rounded-full"
            />
          </View>
        </View>



        {/* Promo Banner */}
        <View className="bg-white rounded-lg p-4 mt-6 shadow-md">
          <Text className="font-semibold">Safe+ only $1. Join now!</Text>
          <Text className="text-gray-500">Compensation guarantee for you</Text>
        </View>

        {/* Popular Near Section */}
        <View className="mt-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-bold">Past Ride</Text>
            <TouchableOpacity>
              <Text className="text-blue-500">See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-2">
            <View className="bg-white w-44 p-4 rounded-lg shadow-md">
              <Image source={{ uri: 'https://via.placeholder.com/100' }} className="h-24 w-full rounded-lg" />
              <Text className="mt-2 text-base font-semibold">Fossil Garden</Text>
              <Text className="text-gray-500 text-sm">12.40km</Text>
            </View>

            <View className="bg-white w-44 p-4 rounded-lg shadow-md">
              <Image source={{ uri: 'https://via.placeholder.com/100' }} className="h-24 w-full rounded-lg" />
              <Text className="mt-2 text-base font-semibold">Leton Bridge</Text>
              <Text className="text-gray-500 text-sm">18.20km</Text>
            </View>

            <View className="bg-white w-44 p-4 rounded-lg shadow-md">
              <Image source={{ uri: 'https://via.placeholder.com/100' }} className="h-24 w-full rounded-lg" />
              <Text className="mt-2 text-base font-semibold">Leton Bridge</Text>
              <Text className="text-gray-500 text-sm">18.20km</Text>
            </View>

            <View className="bg-white w-44 p-4 rounded-lg shadow-md">
              <Image source={{ uri: 'https://via.placeholder.com/100' }} className="h-24 w-full rounded-lg" />
              <Text className="mt-2 text-base font-semibold">Leton Bridge</Text>
              <Text className="text-gray-500 text-sm">18.20km</Text>
            </View>
          </ScrollView>
        </View>

        <View className="mt-5">

          {/* First Group of Options */}
          <View className="bg-white rounded-lg p-4 shadow-lg mb-4">
            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-200">
              <View className="flex-row items-center">
                <Icon name="settings-outline" size={24} color="black" />
                <Text className="ml-4 text-base font-medium">Settings</Text>
              </View>
              <Icon name="chevron-forward-outline" size={24} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-200">
              <View className="flex-row items-center">
                <Icon name="card-outline" size={24} color="black" />
                <Text className="ml-4 text-base font-medium">Billing Details</Text>
              </View>
              <Icon name="chevron-forward-outline" size={24} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-200">
              <View className="flex-row items-center">
                <Icon name="person-outline" size={24} color="black" />
                <Text className="ml-4 text-base font-medium">User Management</Text>
              </View>
              <Icon name="chevron-forward-outline" size={24} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4 border-b border-gray-200">
              <View className="flex-row items-center">
                <Icon name="information-circle-outline" size={24} color="black" />
                <Text className="ml-4 text-base font-medium">Information</Text>
              </View>
              <Icon name="chevron-forward-outline" size={24} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center">
                <Icon name="log-out-outline" size={24} color="black" />
                <Text className="ml-4 text-base font-medium">Log out</Text>
              </View>
              <Icon name="chevron-forward-outline" size={24} color="gray" />
            </TouchableOpacity>
          </View>


        </View>
      </View>
    </ScrollView>


  )
}
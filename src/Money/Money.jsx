import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { styled } from 'nativewind';
import Header from '../Header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import HistoryCard from './History/HistoryCard';

export default function Money() {
  return (
    <SafeAreaView className="flex-1 ">
      {/* <ScrollView className="p-3"> */}
      <Header />
      <View className="flex-1 px-2">


        {/*  Total */}
        <View className="items-center mb-4">
          <Text className="text-gray-600 text-lg">Coin Total</Text>
          <Text className="text-4xl font-bold text-blue-700">IR 7,890.40</Text>
        </View>

        {/* Total Tips */}
        <View className="bg-blue-500 p-4 rounded-xl mb-4">
          <Text className="text-white text-xl mb-2">Total Earn (IR10 = $1)</Text>
          <Text className="text-white text-2xl font-bold">IR 2045,074</Text>
          <View className="flex-row justify-between mt-2">
            <Text className="text-white">Data: 12/07/24</Text>
            <View className="flex-row space-x-4">
              <Text className="text-white">Earn: IR120.00</Text>
              <Text className="text-white">Pending: IR100.00</Text>
            </View>
          </View>
        </View>



        <View className="bg-white px-4 py-4 rounded-xl shadow-md mb-5 flex-1">
          <Text className="text-gray-700 text-lg mb-4">History</Text>

          <ScrollView className="flex-1">
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
          </ScrollView>
        </View>



      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}
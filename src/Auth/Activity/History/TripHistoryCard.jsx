import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For the rebook icon
import { styled } from 'nativewind';

// Create a card component for each trip item
const TripCard = ({ title, time, price, status }) => {
    return (
        <View className="flex-row justify-between bg-gray-800 items-center p-4 rounded-lg mb-2">
            <View className="flex-row items-center">
                <Image
                    source={{ uri: 'https://via.placeholder.com/50' }}
                    className="w-12 h-12 rounded-md mr-4"
                    resizeMode="contain"
                />
                <View>
                    <Text className="text-white text-lg">{title?.length <= 10 ? title : title?.slice(0, 10) + "..."}</Text>
                    <Text className="text-gray-400">{time}</Text>
                    <Text className="text-gray-400">{status || `₹${price}`}</Text>
                </View>
            </View>

            <TouchableOpacity className="flex-row items-center bg-gray-700 px-4 py-2 rounded-full">
                <Icon name="reload-outline" size={20} color="#fff" />
                <Text className="text-white ml-2">Rebook</Text>
            </TouchableOpacity>
        </View>
    );
};

const TripHistoryCard = () => {
    // Sample data for trips
    const trips = [
        { title: 'Tower S3', time: '7 Oct · 9:04 am', price: 0, status: 'Cancelled' },
        { title: 'Okhla Bird Sanctuary', time: '29 Aug · 8:06 pm', status: 'Unfulfilled' },
        { title: 'The Beauty BAE', time: '8 Aug · 6:45 pm', price: 0, status: 'Cancelled' },
        { title: 'Cybercure Technologies', time: '5 Aug · 9:10 am', price: 89 },
        { title: 'Tower S3', time: '7 Oct · 9:04 am', price: 0, status: 'Cancelled' },
        { title: 'Okhla Bird Sanctuary', time: '29 Aug · 8:06 pm', status: 'Unfulfilled' },
        { title: 'The Beauty BAE', time: '8 Aug · 6:45 pm', price: 0, status: 'Cancelled' },
        { title: 'Cybercure Technologies', time: '5 Aug · 9:10 am', price: 89 },
    ];

    return (
        <>
            {/* Iterate through the trip data */}
            {trips.map((trip, index) => (
                <TripCard
                    key={index}
                    title={trip.title}
                    time={trip.time}
                    price={trip.price}
                    status={trip.status}
                />
            ))}

        </>

    );
};

export default TripHistoryCard;

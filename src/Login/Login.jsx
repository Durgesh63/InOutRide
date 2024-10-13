import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styled } from 'nativewind';
import { useDispatch } from 'react-redux';
import { setLogin } from '../Redux/Action/Auth.Action';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
        if (username && password) {
            // Simulate saving user token
            await AsyncStorage.setItem('userToken', 'dummy-auth-token');
            dispatch(setLogin('dummy-auth-token'));
            navigation.replace('MainApp');
        } else {
            // eslint-disable-next-line no-alert
            alert('Please enter valid credentials');
        }
    };

    return (
        <StyledView className="flex-1 justify-center px-4">
            <StyledText className="text-3xl mb-6 text-center">Login</StyledText>

            <StyledTextInput
                className="border-b border-gray-400 mb-4 p-2"
                placeholder="Username or Email"
                value={username}
                onChangeText={setUsername}
            />
            <StyledTextInput
                className="border-b border-gray-400 mb-6 p-2"
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />

            <StyledButton title="Login" onPress={handleLogin} color="#4CAF50" />
        </StyledView>
    );
};

export default LoginScreen;

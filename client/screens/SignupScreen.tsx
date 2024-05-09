import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { themeColors } from "../theme";

export default function SignupScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleSubmit = async ()=>{
        if(email && password){
            try{
                await createUserWithEmailAndPassword(auth, email, password);
            }catch(e: any){
                console.log('got error: ',e.message);
            }
        }
    }
    return (
        <View className="bg-white h-full w-full">
            <StatusBar style="light" />
            <View className="h-1/2 w-full absolute" style={{backgroundColor: themeColors.bgColor(0.8)}}></View>
            <View className="h-full w-full flex justify-around pt-48">
            {/* Title */}
               <View className="flex items-center">
                    <Text className="text-white font-bold tracking-wider text-4xl">
                        회원가입
                    </Text>
                </View>

                {/* Login Input Box */}
                <View className="flex items-center mx-4 space-y-4">
                    <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                        <TextInput
                            placeholder="이메일"
                            placeholderTextColor={'gray'}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                        <TextInput
                            placeholder="비밀번호"
                            placeholderTextColor={'gray'}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry={true}
                            textContentType="password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                        <TextInput
                            placeholder="주소"
                            placeholderTextColor={'gray'}
                            autoCapitalize="none"
                        />
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full">
                        <TouchableOpacity
                            className="w-full p-3 rounded-2xl mb-3"
                            onPress={handleSubmit}
                            style={{backgroundColor: themeColors.bgColor(0.8)}}
                            >
                                <Text className="text-xl font-bold text-white text-center">회원가입</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="flex-row justify-center">
                        <Text>계정이 있으신가요? </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Login' as never)}>
                            <Text style={{color: themeColors.bgColor(1)}}>로그인</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View> 
            </View>      
        </View>
    );
};
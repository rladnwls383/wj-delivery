import { Alert, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Animated,{ FadeInDown } from 'react-native-reanimated';
import { themeColors } from "../theme";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const onHandleLogin = () => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .then((e) => console.log("Login success", e.user.email))
                .catch((err) => Alert.alert("Login error", err.message));

                navigation.navigate('Home' as never);
        }
    };

    return (
        <View className="bg-white h-full w-full">
            <StatusBar style="light" />
            <View className="h-1/2 w-full absolute" style={{backgroundColor: themeColors.bgColor(0.8)}}></View>
            <View className="h-full w-full flex justify-around pt-40 pb-10">
            {/* Title */}
               <View className="flex items-center">
                    <Text className="text-white font-bold tracking-wider text-4xl">
                        로그인
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
                    <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="w-full">
                        <TouchableOpacity
                            onPress={onHandleLogin}
                            className="w-full p-3 rounded-2xl mb-3"
                            style={{backgroundColor: themeColors.bgColor(0.8)}}
                            >
                                <Text className="text-xl font-bold text-white text-center">로그인</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="flex-row justify-center">
                        <Text>계정이 없으신가요? </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Signup' as never)}>
                            <Text style={{color: themeColors.bgColor(1)}}>지금 가입하기</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View> 
            </View>
        </View>
    );
};
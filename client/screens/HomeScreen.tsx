import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme'
import Categories from '../components/categories'
import FeaturedRow from '../components/featuredRow'
import { featured } from '../constants'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleLogout = async () =>{
    await signOut(auth);
    navigation.navigate('Login' as never);
  }
  return (
    <SafeAreaView className="bg-White">
      <StatusBar />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder='음식점을 검색하세요.' className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.X height="16" width="16" stroke="gray" />
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80
        }} >

        <Categories />

        <View className="mt-5">
          {
            [featured, featured, featured].map((item,index)=>{
              return (
                <FeaturedRow 
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
                />
              )
            })
          }
        </View>
        <TouchableOpacity onPress={handleLogout}>
        <Text className='text-black text-lg font-bold'>로그아웃</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
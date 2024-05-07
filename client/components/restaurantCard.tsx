import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RestaurantCardItem } from '../types/interface'

export default function RestaurantCard(restaurantCardItem: RestaurantCardItem) {

  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Restaurant', {...restaurantCardItem})}
    >
        <View 
        style={{ shadowColor: themeColors.bgColor(0.2),
            shadowRadius: 7
        }}
        className="mr-5 bg-white rounded-3xl shadow-lg">
            <Image className="h-36 w-64 rounded-t-3xl" source={restaurantCardItem.image} />
                <View className='px-3 pb-4 space-y-2'>
                <Text className="text-lg font-bold pt-2">{restaurantCardItem.name}</Text>
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                    <Text className="text-xs">
                        <Text className="text-green-700">{restaurantCardItem.stars}</Text>
                        <Text className="text-gray-700">
                            ({restaurantCardItem.reviews} review) · <Text className="font-semibold">{restaurantCardItem.category}</Text>
                        </Text>
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Icon.MapPin color="gray" width="15" height="15" />
                    <Text className="text-gray-700 text-xs">Nearby· {restaurantCardItem.address}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}
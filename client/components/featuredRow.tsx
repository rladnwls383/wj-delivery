import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './restaurantCard'
import { RestaurantCardItem } from '../types/interface';

interface FeaturedRowProps {
  title: string;
  description: string;
  restaurants: RestaurantCardItem[];
}

export default function FeaturedRow({ title, description, restaurants }: FeaturedRowProps) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-500 text-xs">
                {description}
            </Text>
        </View>
        <TouchableOpacity>
            <Text style={{color: themeColors.text}} className="font-semibold">더보기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
        className="overflow-visible py-5"
      >
       {
        restaurants.map((restaurant, index)=>{
            return (
              <RestaurantCard
              key={index}
              {...restaurant}
            />
            )
        })
       } 
      </ScrollView>
    </View>
  )
}
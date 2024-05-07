import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';
import { useAppSelector } from '../hooks';
import { DishItem } from '../types/interface';

  interface GroupedItems {
    [key: string]: DishItem[];
  }

export default function CartScreen() {
    const restaurant = useSelector(selectRestaurant);
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const [groupedItems, setGroupedItems] = useState<GroupedItems>({})
    const deliveryFee = 2;
    const dispatch = useDispatch();

    useEffect(()=>{
        const items = cartItems.reduce<GroupedItems>((group, item)=>{
            if(group[item.id]){
                group[item.id].push(item);
            }else{
                group[item.id] = [item];
            }
            return group;
        },{})
        setGroupedItems(items);
    },[cartItems])


  return (
    <View className="bg-gray-100 flex-1">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
            onPress={()=> navigation.goBack()}
            style={{backgroundColor: themeColors.bgColor(1)}}
            className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
            <Text className="text-center font-bold text-xl">주문하기</Text>
            <Text className="text-center text-gray-500">{restaurant!.name}</Text>
        </View>
      </View>

      <View style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 items-center h-20">
            <Image source={require('../assets/images/deliveryBike.png')} className="w-16 h-16 rounded-full" />
            <Text className="flex-1 pl-4">배달 예상 시간 20~30분</Text>
            <TouchableOpacity>
                <Text className="font-bold" style={{color: themeColors.text}}>
                    변경
                </Text>
            </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 50
        }}
        className="pt-5">
        {
            Object.entries(groupedItems).map(([key, items])=>{
                let dish = items[0];
                return (
                    <View key={key}
                        className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                            <Text className="font-bold" style={{color: themeColors.text}}>
                                {items.length} x
                            </Text>
                            <Image className="h-14 w-14 rounded-full" source={dish.image} />
                            <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                            <Text className="font-semibold text-base">￦{dish.price}</Text>
                            <TouchableOpacity
                                className="p-1 rounded-full"
                                onPress={()=> dispatch(removeFromCart({id: dish.id}))}
                                style={{backgroundColor: themeColors.bgColor(1)}}>
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                        </View>
                )
            })
        }
      </ScrollView>
      <View style={{backgroundColor: themeColors.bgColor(0.2)}} className="p-6 px-8 rounded-t-3xl space-y-4">
        <View className="flex-row justify-between">
            <Text className="text-gray-700">상품 금액</Text>
            <Text className="text-gray-700">￦{cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700">배달요금</Text>
            <Text className="text-gray-700">￦{deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">총 결제금액</Text>
            <Text className="text-gray-700 font-extrabold">￦{deliveryFee+cartTotal}</Text>
        </View>
        <View>
            <TouchableOpacity
                onPress={()=> navigation.navigate('OrderPrepairing' as never)}
                style={{backgroundColor: themeColors.bgColor(1)}}
                className="p-3 rounded-full"
            >
                <Text className="text-white text-center font-bold text-lg">
                    주문하기
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
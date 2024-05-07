import { ImageSourcePropType } from "react-native";
import DishItem from "./dish-item-interface";

export default interface RestaurantCardItem {
    id: number;
    name: string;
    image: ImageSourcePropType;
    description: string;
    lat: number;
    lng: number;
    address: string;
    stars: number;
    reviews: string;
    category: string;
    dishes: DishItem[];
}
import { ImageSourcePropType } from "react-native";

export default interface DishItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: ImageSourcePropType;
}
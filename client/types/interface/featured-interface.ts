import RestaurantCardItem from "./restaurant-card-item.interface";

export type Featured = {
    id: number;
    title: string;
    description: string;
    restaurants: RestaurantCardItem[];
};
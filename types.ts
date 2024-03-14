export type StackParamList = {
  ProductsPage: undefined;
  ProductDetails: {productId: string | number};
};

export type ProductResponse = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  stock: number;
  thumbnail: string;
  title: string;
};

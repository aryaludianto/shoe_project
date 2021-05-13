export default interface IProduct {
  brand: { type: string };
  name: { type: string };
  category: { type: string };
  gender: { type: string; toLowerCase: () => string };
  type: { type: string; toLowerCase: () => string };
  price: { type: number };
  stock: [
    {
      color: string;
      size: [{ number: number; amount: number }];
      imageUrl: [string];
    }
  ];
}

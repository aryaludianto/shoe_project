export default interface IProduct {
  brand: { type: string };
  name: { type: string };
  category: { type: string };
  gender: { type: string };
  type: { type: string };
  price: { type: number };
  stock: [
    {
      color: string;
      size: [{ number: number; amount: number }];
      imageUrl: [string];
    }
  ];
}

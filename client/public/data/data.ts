// type Color = 'red' | 'blue' | ...
// type ShoeType = 'sport' | 'office' | 'casual' | ...
// type Brand = 'Nike' | 'New Balance' | ...


// type data = {
//     name: string,
//     gender: 'men' | 'women' | 'kids' | 'all',
//     color: Color[],
//     type: ShoeType,
//     price: number
//     releaseDate: Date
//     onSale: boolean
//     inStock: {
//         size: 42,
//         available: 0
//     }[],
//     brand: Brand
// }

const dataExample:{}[] =[
  {brand:'Clarks', 
name:'Clarks Oxford', 
gender:'men', 
type:'office', 
inStock:[
  {stock:[{color:'red',size:[{number:40, amount: 1}, {number:42, amount: 2},{number:41, amount: 1}], 
  imageUrl:['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FClarks-ORIGINALS-Wallabee-Mens-Shoes%2Fdp%2FB08F2QDNHS&psig=AOvVaw0aIZDCJR67IgL8ZpF-Fitk&ust=1620489529384000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCAuIj4t_ACFQAAAAAdAAAAABAK']},
  {color:'brown',size:[{number:40, amount: 1}, {number:42, amount: 2},{number:41, amount: 1}] ,imageUrl:['https://i.ebayimg.com/images/g/70EAAOSw7MNcQmnx/s-l300.jpg']},
  {color:'yellow',size:[{number:40, amount: 1}, {number:42, amount: 2},{number:41, amount: 1}], imageUrl:['https://images-na.ssl-images-amazon.com/images/I/61r2K4GbJ%2BL._AC_UY395_.jpg']}]}]}, 
{brand:'Nike', name:'Stefan Janoski', gender:'men', type:'casual',inStock:[
  {size:40, stock:[{color:'red', amount: 1},{color:'brown', amount:3},{color:'yellow', amount:2}]}, 
{size:41, stock:[{color:'red', amount: 1},{color:'brown', amount:3},{color:'yellow', amount:2}]}, 
{size:42, stock:[{color:'red', amount: 1},{color:'brown', amount:3},{color:'yellow', amount:2}]}, 
{size:40, stock:[{color:'red', amount: 1},{color:'brown', amount:3},{color:'yellow', amount:2}]}]


// export dataExample;
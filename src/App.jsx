import {ProductCard} from "./components/ProductCard";
import "./App.css";
import Btns from "./components/button";
function App() {

  const products = [
    {
      id: 1,
      name: "Classic Navy Suit",
      price: "$1999",
      quantity: 50,
      category: "Formal Wear",
      description: "A tailored navy blue two-piece suit with a crisp white dress shirt, silk tie, and polished Oxford shoes—perfect for business meetings and formal events.",
      image: "https://andreemilio.com/wp-content/uploads/2021/03/Classic-Navy-Blue-Suit-1.jpg"
    },
    {
      id: 2,
      name: "Smart Casual Blazer Look",
      price: "$4999",
      quantity: 30,
      category: "Smart Casual",
      description: "Slim-fit grey blazer over a light blue button-down shirt, paired with dark chinos and loafers for a refined yet relaxed vibe.",
      image: "https://dqp736wsu6w3m.cloudfront.net/s3bucket/w1000/looks/359/outfit-green-shirt-1.jpg"
    },
    {
      id: 3,
      name: "Streetwear Hoodie Style",
      price: "$89999",
      quantity: 15,
      category: "Streetwear",
      description: "Oversized black hoodie, distressed jeans, chunky sneakers, and a baseball cap for a modern urban look.",
      image: "https://i.pinimg.com/750x/6c/f3/4e/6cf34e7ada94a58f1b952da5f26d305f.jpg"
    },
    {
      id: 4,
      name: "Summer Linen Outfit",
      price: "$1299",
      quantity: 100,
      category: "Summer Casual",
      description: "Black t-shirt, black slim-fit jeans, and Chelsea boots—sleek, bold, and effortlessly cool.",
      image: "https://assets.digitalcontent.marksandspencer.app/image/upload/q_auto,f_auto,c_limit,w_800,h_800/v1719305505/20240704_SL_LONGER_FEATURE_MW_LINEN_MOMENT_BSLH-10664_2.jpg?$editorial_780x780$"
    },
    {
      id: 5,
      name: "Denim-on-Denim",
      price: "$2499",
      quantity: 60,
      category: "Casual",
      description: "Light wash denim jacket over a plain white tee, paired with darker blue jeans and casual sneakers.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Z5rzZIAsGHoiYhdYBKZuzk70-u1SDt0cCA&s"
    },
    {
      id: 6,
      name: "Athleisure Fit",
      price: "$899",
      quantity: 200,
      category: "Athleisure",
      description: "Track jacket, tapered joggers, and running shoes—designed for comfort without sacrificing style.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIPhE2vPDOOqtHC82BHZMWWQhfGGt1LtTmw&s"
    },
    {
      id: 7,
      name: "Leather Jacket Rebel",
      price: "$3599",
      quantity: 80,
      category: "Biker / Casual",
      description: "Black leather biker jacket, grey t-shirt, ripped jeans, and boots for a rugged, confident edge.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7L6pb_IYYMHGYlF-Bzj2iTqBcVE-AUvtlg&s"
    },
    {
      id: 8,
      name: "All-Black Minimalist",
      price: "$1499",
      quantity: 120,
      category: "Winter Wear",
      description: "Black t-shirt, black slim-fit jeans, and Chelsea boots—sleek, bold, and effortlessly cool.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-memkdUtixw9PcyZcOd4b6CEV4XrepF7Bw&s"
    },
    {
      id: 9,
      name: "Winter Layered Look",
      price: "$2199",
      quantity: 90,
      category: "Resort Wear",
      description: "Wool overcoat over a turtleneck sweater, slim trousers, and brogues—warm, stylish, and timeless.",
      image: "https://i.pinimg.com/736x/cc/9a/28/cc9a2812d14d29f83c993ef3767a35d0.jpg"
    },
    {
      id: 10,
      name: "Beach Vacation Wear",
      price: "$799",
      quantity: 150,
      category: "Minimalist / Casual",
      description: "Short-sleeve floral shirt, tailored shorts, and sandals—easy-going yet fashionable for seaside strolls.",
      image: "https://i.pinimg.com/736x/ff/4e/fa/ff4efa88522387903d39fff8f73c448a.jpg"
    }
  ];
  

  return (
    < >
    <div className="app" >
    <div className="header">
      <h1 className="Heading">Product List</h1>
      <div className="line"></div>
     </div>
      <div className="product-grid">
        {products.map(item => (
          <div>

          <ProductCard cardData={item} key={item.id} />
          </div>
        ))}
      </div>
    </div>
    <div className="footer">
      <p>Copyright <sup>&copy;</sup>  All Rights Reserved 2025 Designed By Shayan Sheikh</p> 
    </div>
  </>
  );
}

export default App;

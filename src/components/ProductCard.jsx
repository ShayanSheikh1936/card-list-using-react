import Btns from "./button";
export function ProductCard({ cardData }) {
  const { name, price, category, description, image } = cardData;

  return (
    <>
    <div className="card">
  <div className="image_container">
    <img className="image" src={image} alt={name}></img>
  </div>
  <div className="title">
    <span>{name}</span>
  </div>
  <div>
    <span className="product-category">{category}</span>
  </div>
  <div className="size">
    <span>Size</span>
    </div>
    <div>
    <ul className="list-size">
      <li className="item-list"><button className="item-list-button">37</button></li>
      <li className="item-list"><button className="item-list-button">38</button></li>
      <li className="item-list"><button className="item-list-button">39</button></li>
      <li className="item-list"><button className="item-list-button">40</button></li>
      <li className="item-list"><button className="item-list-button">41</button></li>
    </ul>
  </div>
  <div>
    <span className="product-desc">{description}</span>
  </div>
  <div className="action">
    <div className="price">
      <span>{price}</span>
    </div>
    <Btns  />
  </div>
</div>
    </>
    
  );
}

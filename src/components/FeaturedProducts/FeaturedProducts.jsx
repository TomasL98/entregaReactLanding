import { 
  FeaturedSection, 
  FeaturedTitle, 
  ProductsContainer, 
  ProductCard, 
  ProductImage, 
  ProductInfo, 
  ProductName, 
  ProductPrice, 
  BuyButton 
} from './FeaturedProductsStyles';

import playstation5Img from '../../images/ps5-img.webp';
import xboxSeriesXImg from '../../images/Xbox-img.jpg';
import nintendoSwitchImg from '../../images/NintendoS-img.jpg';

const products = [
  {
    name: "PlayStation 5",
    price: "$1.000.000",
    image: playstation5Img,
  },
  {
    name: "Xbox Series X",
    price: "$850.000",
    image: xboxSeriesXImg,
  },
  {
    name: "Nintendo Switch",
    price: "$600.000",
    image: nintendoSwitchImg,
  },
];

const FeaturedProducts = () => {
  return (
    <FeaturedSection id="featured-products">
      <FeaturedTitle>Productos Disponibles</FeaturedTitle>
      <ProductsContainer>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <BuyButton>Buy Now</BuyButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsContainer>
    </FeaturedSection>
  );
};

export default FeaturedProducts;

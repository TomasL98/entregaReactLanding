import styled from 'styled-components';

export const FeaturedSection = styled.section`
  padding: 50px 20px;
  background: black;
  text-align: center;
`;

export const FeaturedTitle = styled.h2`
  margin-bottom: 100px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  background: #131415;
  padding: 20px;
  border: 1px solid red;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  border-radius: 16px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 200px;
  border-radius: 10px;
`;

export const ProductInfo = styled.div`
  text-align: center;
`;

export const ProductName = styled.h3`
  font-size: 1.2em;
  margin: 10px 0;
`;

export const ProductPrice = styled.p`
  font-size: 1.8em;
  color: white; 
  margin: 5px 0;
`;

export const BuyButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: black;
  }
`;

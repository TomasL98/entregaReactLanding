import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 100px 20px;
  background: black;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.5em;
    color: #888;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  border: 1px solid red;
  margin: 50px;

  @media (max-width: 768px) {
    justify-self: center;
    display: none;
  }
`;
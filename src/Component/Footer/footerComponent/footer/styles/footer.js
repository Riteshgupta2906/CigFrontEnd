import styled from "styled-components";

export const Container = styled.div`
  font-family: poppins;
  background: rgb(50 79 197);
  border-radius: 10px 10px 0 0;
  padding: 60px 30px;
  margin-top:10px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  ${'' /* margin-left: 60px; */}
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  display:flex;
  justify-content:center;

  &:hover {
    color: rgb(134 242 157);
    transition: 200ms ease-in;
  }
  @media(max-width:1000px){
    font-size:14px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  display:flex;
  justify-content:center;
  margin-bottom:50px;
  @media(max-width:1000px){
    font-size:20px;
    margin-bottom:20px;
  }
`;

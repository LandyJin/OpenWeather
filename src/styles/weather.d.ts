import styled from "styled-components";

export const Header = styled.h1`
  margin: 3vw;
  text-align: center;
  font-size: 15px;
  @media (min-width: 375px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Load = styled.span`
  border: 5px solid white;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 10px;
  height: 10px;
  animation: spin 2s linear infinite;
  display: inline-block;
  @keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3vw;
  max-width: 100%;
`;

export const Table = styled.div.attrs(props => ({
  backgroundColor: props.backgroundColor || ""
}))`
  display: table;
  position: absolute;
  right: 0;
  top: 0;
  background: ${props => props.backgroundColor};
  height: 100%;
  border-radius: 10px;
  width: 100%;
`;

export const Message = styled.div`
  display: table-cell;    
  vertical-align: middle;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  line-height: 1.5;
  ${({ active }) => active &&`
  &:after {
    content: "";
    border: 5px solid white;
    border-radius: 50%;
    border-top: 5px solid #3498db;
    width: 8px;
    height: 8px;
    animation: spin 2s linear infinite;
    display: inline-block;
    margin-left: 5px;
    @keyframes spin {
      0% {transform: rotate(0deg);}
      100% {transform: rotate(360deg);}
    }
  }
`}
`;

export const Box = styled.div`
  display: flex;
  width: 70vw;
  min-height: 60vw;
  flex-direction: column;
  padding: 1.5vw;
  margin: 1vw;
  padding-bottom: 3vw;
  height: 100%;
  text-align: center;
  background: #efefef;
  border-radius: 10px;
  position: relative;
  @media (min-width: 375px) {
    width: 40vw;
    min-height: 20vh;
    height: 100%;
  }
  @media (min-width: 768px) {
    width: 15vw;
    min-height: 10vh;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 10vw;
    min-height: 15vh;
    height: 100%;
  }
  @media (min-width: 1524px) {
    width: 7vw;
    min-height: 20vh;
    height: 100%;
  }
`;

export const OtherDetailsElement = styled.div`
  font-size: ${props => props.city ? "20px" : "15px"};
  font-weight: bold;
  color: ${props => props.main ? "grey" : "black"};
  margin: 1vw;
`;

export const TempElement = styled.div`
  color: ${props => props.temp ? "black" : "grey"};
  font-weight: ${props => props.temp ? "bold" : "normal"};
  margin: 0.5vw;
`;
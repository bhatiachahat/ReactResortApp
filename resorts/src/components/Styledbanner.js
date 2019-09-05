import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";
const Styledbanner = styled.header`
 height: 70vh;
  /* background: url(${defaultImg}); */
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Styledbanner;
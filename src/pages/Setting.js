import { useContext } from "react"; // 전역 상태 관리를 위한 Hook
import { UserContext } from "../context/UserStore"; // 전역 상태 정보 제공을 위한
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // url로 이동해도 안사라지게 하려면 local storage를 함께 쓰면 됨

const Container = styled.div`
  display: flex;
  flex: 1; // 전체를 다 차지
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: orangered;
`;

const Button = styled.button`
  margin: 10px;
  width: 300px;
  height: 70px;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 1px 1px 5px #999; // 번짐효과 5px
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
  &:active {
    transform: translateY(2px);
  }
`;

const Setting = () => {
  const { setColor } = useContext(UserContext);

  const navigate = useNavigate();

  const colorChange = (color) => {
    setColor(color);
    navigate("/home");
  };

  return (
    <Container>
      {/* <Link to="/home">홈으로 이동</Link> */}
      <Button color="orange" onClick={() => colorChange("orange")}>
        오렌지
      </Button>
      <Button color="green" onClick={() => colorChange("green")}>
        초록색
      </Button>
      <Button color="lightgray" onClick={() => colorChange("lightgray")}>
        회애색
      </Button>
    </Container>
  );
};

export default Setting;

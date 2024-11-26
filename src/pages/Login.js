import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, StyledInput, StyledButton } from "../styles/CommonStyle";
import { UserContext } from "../context/UserStore";

const Login = () => {
  // 키보드 입력에 대한 상태 관리
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 간단한 유효성 검사 - 정규식 검사까지는 할 필요 없는데, 입력 안하거나 이런식으로 잘못 입력했을때는 걸러내기 위해
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  const navigate = useNavigate(); // 페이지 이동을 위한 객체 생성

  const context = useContext(UserContext); //useContext Hook으로 우리가 만든 UserContext.Provider에서 정보 읽어오겠다.(전역 상태값에 접근)
  const { setUserId, setPassword, color } = context;

  const onChangeId = (e) => {
    setInputId(e.target.value.trim());
    e.target.value.trim().length >= 5 ? setIsId(true) : setIsId(false);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value.trim());
    e.target.value.trim().length >= 5 ? setIsPw(true) : setIsPw(false);
  };

  const onClickLogin = () => {
    // 여기에서 axios 비동기 통신을 해야함.(서버 다녀와야됨)
    // 그리고 결과 수신
    setUserId(inputId); // 이걸 사용하는 곳에서 전부 렌더링이 일어남. 그래서 남발하면 성능 저하 문제가 있을 수 있음
    setPassword(inputPw); // 임시로 성공/실패와 무관하게 집어넣음
    if (inputId === "jisuk" && inputPw === "asdfasdf") {
      navigate("/home");
    } else {
      // 나중엔 modal창 쓸거에요
      alert("아이디 또는 패스워드가 틀립니다.");
    }
  };
  return (
    <Container color={color}>
      <StyledInput
        type="text"
        value={inputId}
        placeholder="ID 입력"
        onChange={onChangeId}
      />
      <br />
      <StyledInput
        type="text"
        value={inputPw}
        placeholder="PW 입력"
        onChange={onChangePw}
      />
      <br />
      <StyledButton onClick={onClickLogin} disabled={!(isId && isPw)}>
        로그인
      </StyledButton>
      {/* {isId && isPw ? (
        <button onClick={onClickLogin}>로그인</button>
      ) : (
        <button disabled onClick={onClickLogin}>
          로그인
        </button>
      )} */}
    </Container>
  );
};

export default Login;

export function Modal() {
  return (
    <div>
      <span>Goodi</span>
      <span>로그하웃하기</span>
      <button type="button" onClick={handleLogout}>
        로그아웃
      </button>
      <button type="button">취소</button>
    </div>
  );
}
const Modal = styled.div`
  width: 200px;
  height: 110px;
  background-color: white;
  position: absolute;
  border: 1px solid var(--gray400-color);
  top: 10px;
  left: -200px;
  z-index: 100;
  padding-top: 10px;
  display:none;
  & > span {
    color: black;
    padding-top: 5px;
    padding-bottom: 10px;
    display: block;
    font-size: 16px;
  }
  & > button {
    border: 1px solid var(--gray500-color);
    padding: 10px 20px;
  }
  .modal_off {
    display: none;
  }
`
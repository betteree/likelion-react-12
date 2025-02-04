import './nav.css';

function Nav() {
  return (
    <nav className="nav">
      <h2 className="sr-only">페이지 탐색</h2>
      <a href="/?view=signin">로그인</a>
      <a href="/?view=signup">회원가입</a>
      <a href="/?view=state-management">상태관리</a>
      <a href="/?view=tic-tac-toe">틱택토</a>
    </nav>
  );
}

export default Nav;

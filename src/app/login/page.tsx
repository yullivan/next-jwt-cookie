import { login } from '../actions';

export default function Page() {
  return (
    <div>
      <h1>로그인 페이지</h1>
      <form action={login}>
        <input type="text" placeholder="로그인 아이디" />
        <input type="password" placeholder="로그인 비밀번호" />
        <button>로그인</button>
      </form>
    </div>
  );
}

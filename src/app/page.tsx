import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/login">로그인</Link>
      <Link href="/profile">내 프로필</Link>
    </div>
  );
}

import { redirect } from 'next/navigation';
import { fetchProfile } from '../api';

export default async function Page() {
  const profile = await fetchProfile();
  if (profile === undefined) {
    redirect('/login');
  }

  return <div>프로필 페이지</div>;
}

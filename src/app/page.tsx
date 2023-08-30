import { Header, Sidebar } from '../components/client';

export default function Home() {
  return (
    <>
      <Header />
      <span className='px-4'>
        <Sidebar />
      </span>
    </>
  );
}

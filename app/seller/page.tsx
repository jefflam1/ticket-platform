import SellereDashboard from '@/components/SellereDashboard';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const SellerPage = async () => {
  const { userId } = await auth();

  if (!userId) redirect('/');
  return (
    <div className='min-h-screen bg-gray-50'>
      <SellereDashboard />
    </div>
  );
};

export default SellerPage;

'use client';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='text-content dark:text-6xl'>
      hello
      <Button variant={'outline'} onClick={() => console.log('clicked')}>
        Click me
      </Button>
    </div>
  );
}

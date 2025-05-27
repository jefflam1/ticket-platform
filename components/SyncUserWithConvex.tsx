'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
// import { updateUser } from '@/convex/user';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

const SyncUserWithConvex = () => {
  const { user } = useUser();
  const updateUser = useMutation(api.users.updateUser);
  // upsate user

  useEffect(() => {
    if (!user) return;

    const syncUser = async () => {
      try {
        await updateUser({
          userId: user.id,
          name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
          email: user.emailAddresses[0].emailAddress ?? '',
        });
      } catch (error) {
        console.error('Error syncing user:', error);
      }
    };

    if (user) {
      syncUser();
    }
  }, [user, updateUser]);

  return null;
};

export default SyncUserWithConvex;

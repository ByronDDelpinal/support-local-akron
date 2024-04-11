'use client';

import { approveBusiness } from '@/app/admin/actions';
import { useFormState } from 'react-dom';

export function ApproveButton({ businessId }: { businessId: string }) {
  const [response, action] = useFormState(approveBusiness, undefined);

  return (
    <form action={action}>
      <input type="hidden" name="businessId" value={businessId} />
      <button
        type="submit"
        className="rounded bg-green px-4 py-2 text-sm font-bold text-white"
      >
        Approve
      </button>
    </form>
  );
}

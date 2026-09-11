import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function WalletLowBalance({ balance }) {
  return (
    <div className="flex items-start gap-2 text-amber-200">
      <AlertCircle size={18} className="shrink-0 mt-0.5" />
      <p className="text-sm leading-tight">
        رصيدك الحالي قد لا يكون كافيًا لشراء بعض الكورسات.
      </p>
    </div>
  );
}

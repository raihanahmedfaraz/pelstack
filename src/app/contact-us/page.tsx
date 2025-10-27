import { notFound } from 'next/navigation';

export default function LegacyContactRemoved() {
  // Old route removed: return 404 (no redirect as requested)
  notFound();
}

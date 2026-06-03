'use client';

import { useController } from './useController';

export function DynamicPageScreen({ pageData }) {
  const { Template, page } = useController(pageData);

  return <Template page={page} />;
}

'use client';

import { useController } from './useController';

export function DynamicPageScreen({ page }) {
  const { Template, page: preparedPage } = useController(page);

  return <Template page={preparedPage} />;
}

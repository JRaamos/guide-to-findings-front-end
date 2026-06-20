import { timingSafeEqual } from 'node:crypto';

import { revalidatePath, revalidateTag } from 'next/cache';

export const runtime = 'nodejs';

const MAX_TAGS = 64;
const MAX_PATHS = 32;

function secretsMatch(providedSecret, configuredSecret) {
  if (!providedSecret || !configuredSecret) {
    return false;
  }

  const provided = Buffer.from(providedSecret);
  const configured = Buffer.from(configuredSecret);

  return provided.length === configured.length && timingSafeEqual(provided, configured);
}

function normalizeTags(tags) {
  if (!Array.isArray(tags)) {
    return [];
  }

  return [...new Set(tags)]
    .filter((tag) => typeof tag === 'string' && tag.trim() && tag.length <= 256)
    .map((tag) => tag.trim())
    .slice(0, MAX_TAGS);
}

function normalizePaths(paths) {
  if (!Array.isArray(paths)) {
    return [];
  }

  return [...new Set(paths)]
    .filter((path) => typeof path === 'string' && path.startsWith('/') && !path.startsWith('//'))
    .map((path) => path.trim())
    .slice(0, MAX_PATHS);
}

export async function POST(request) {
  const configuredSecret = process.env.REVALIDATE_SECRET;
  const providedSecret = request.headers.get('x-revalidate-secret');

  if (!secretsMatch(providedSecret, configuredSecret)) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ success: false, error: 'Invalid JSON payload' }, { status: 400 });
  }

  const tags = normalizeTags(payload?.tags);
  const paths = normalizePaths(payload?.paths);

  if (!tags.length && !paths.length) {
    return Response.json(
      { success: false, error: 'At least one valid tag or path is required' },
      { status: 400 }
    );
  }

  for (const tag of tags) {
    revalidateTag(tag, { expire: 0 });
  }

  for (const path of paths) {
    revalidatePath(path);
  }

  return Response.json({
    success: true,
    revalidatedAt: new Date().toISOString(),
    tags,
    paths,
  });
}

import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { OpenGraph } from '@astrolib/seo';

/** Every image that can be referenced from src/config.yaml. */
const localImages = import.meta.glob<{ default: ImageMetadata }>(
  '~/assets/images/**/*.{jpeg,jpg,png,tiff,webp,gif,svg}'
);

async function resolveLocalImage(path: string): Promise<ImageMetadata | undefined> {
  const loader = localImages[path.replace('~/', '/src/')];
  return loader ? (await loader()).default : undefined;
}

/**
 * Open Graph images have to be absolute URLs of real, built files — crawlers
 * fetch them without a page context. config.yaml gives us a project-relative
 * `~/assets/images/…` path, so build it and make it absolute.
 */
export const adaptOpenGraphImages = async (
  openGraph: OpenGraph = {},
  site: URL | undefined = new URL('')
): Promise<OpenGraph> => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }

  const images = await Promise.all(
    openGraph.images.map(async (image) => {
      if (!image?.url) return undefined;

      // Already absolute (or served from /public): nothing to build.
      if (/^https?:\/\//.test(image.url)) return image;
      if (image.url.startsWith('/')) return { ...image, url: String(new URL(image.url, site)) };

      const asset = await resolveLocalImage(image.url);
      if (!asset) return undefined;

      const width = Math.min(image.width ?? asset.width, asset.width);
      const optimized = await getImage({ src: asset, width, format: 'jpg' });

      return {
        ...image,
        url: String(new URL(optimized.src, site)),
        width: optimized.options.width ?? width,
        height: optimized.options.height ?? image.height,
      };
    })
  );

  return { ...openGraph, images: images.filter((image) => image !== undefined) };
};

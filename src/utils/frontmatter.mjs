import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, file) {
    const text = toString(tree);
    const readingTime = Math.ceil(getReadingTime(text).minutes);

    const { frontmatter } = file.data.astro;
    frontmatter.readingTime = readingTime;
  };
}

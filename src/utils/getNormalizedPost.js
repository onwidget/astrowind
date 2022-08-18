import getReadingTime from "reading-time";

export const getNormalizedPost = async (post) => {
  const { frontmatter, compiledContent, rawContent, file } = post;

  return {
    pubDate: frontmatter.pubDate,
    title: frontmatter.title,
    description: frontmatter.description,
    excerpt: frontmatter.excerpt,
    body: compiledContent(),
    image: frontmatter.image,
    authors: frontmatter.authors,
    slug: file.split("/").pop().split(".").shift(),
    readingTime: Math.ceil(getReadingTime(rawContent()).minutes),
  };
};

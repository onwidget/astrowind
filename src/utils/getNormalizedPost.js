import getReadingTime from "reading-time";

export const getNormalizedPost = async (post) => {
  const { frontmatter, compiledContent, rawContent, file } = post;

  return {
    pubDate: frontmatter.pubDate,
    draft: frontmatter.draft,

    canonical: frontmatter.canonical,
    slug: file.split("/").pop().split(".").shift(),

    title: frontmatter.title,
    description: frontmatter.description,
    body: compiledContent(),
    image: frontmatter.image,

    excerpt: frontmatter.excerpt,
    authors: frontmatter.authors,
    category: frontmatter.category,
    tags: frontmatter.tags,
    readingTime: Math.ceil(getReadingTime(rawContent()).minutes),
  };
};

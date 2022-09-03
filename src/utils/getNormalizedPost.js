import getReadingTime from "reading-time";

export const getNormalizedPost = async (post) => {
  const { frontmatter, compiledContent, rawContent, file } = post;
  const ID = file.split("/").pop().split(".").shift();

  return {
    id: ID,

    pubDate: frontmatter.pubDate,
    draft: frontmatter.draft,

    canonical: frontmatter.canonical,
    slug: frontmatter.slug || ID,

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

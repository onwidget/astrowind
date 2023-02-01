export default {
  isEnabled: true,
  postsPerPage: 5,

  post: {
    isEnabled: true,
    permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
    robots: {
      index: true,
    }
  },

  list: {
    isEnabled: true,
    pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
    robots: {
      index: true,
    }
  },

  category: {
    isEnabled: true,
    pathname: 'category', // Category main path /category/some-category, you can change this to "group" (/group/some-category)
    robots: {
      index: true,
    }
  },

  tag: {
    isEnabled: true,
    pathname: 'tag', // Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
    robots: {
      index: false,
    }
  },
};

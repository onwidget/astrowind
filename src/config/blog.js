export default {
  disabled: false,
  postsPerPage: 5,

  post: {
    permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
    noindex: false,
    disabled: false,
  },

  list: {
    pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
    noindex: false,
    disabled: false,
  },

  category: {
    pathname: 'category', // Category main path /category/some-category
    noindex: true,
    disabled: false,
  },

  tag: {
    pathname: 'tag', // Tag main path /tag/some-tag
    noindex: true,
    disabled: false,
  },
};

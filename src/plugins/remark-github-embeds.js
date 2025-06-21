import { visit } from 'unist-util-visit';

export function remarkGithubEmbeds() {
  return (tree) => {
    visit(tree, 'link', (node, index, parent) => {
      if (node.url.includes('github.com')) {
        const url = node.url;

        // Replace the link node with an Astro component node
        parent.children.splice(index, 1, {
          type: 'mdxJsxFlowElement', // This type is for MDX components
          name: 'GitHubEmbed', // The name of your Astro component
          attributes: [
            {
              type: 'mdxJsxAttribute',
              name: 'url',
              value: url,
            },
          ],
          children: [],
        });
      }
    });
  };
}
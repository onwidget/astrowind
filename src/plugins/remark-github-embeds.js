import { visit } from 'unist-util-visit';

export function remarkGithubEmbeds() {
  return (tree) => {
    visit(tree, 'link', (node, index, parent) => {
      if (node.url.includes('github.com')) {
        const url = node.url;
        const text = node.children[0]?.value || url; // Use link text or URL as fallback
        const embedHtml = `
          <div class="my-8 not-prose w-full flex justify-center">
            <a href="${url}" target="_blank" rel="noopener noreferrer"
               style="display: block; padding: 16px; border: 1px solid #e1e4e8; border-radius: 6px; text-decoration: none; color: inherit; background-color: #f6f8fa;">
              <div style="font-weight: 600; font-size: 1.1em; color: #0366d6;">
                ${text.replace('https://github.com/', '')}
              </div>
              <div style="font-size: 0.9em; color: #586069; margin-top: 4px;">
                View on GitHub
              </div>
            </a>
          </div>
        `;

        parent.children.splice(index, 1, {
          type: 'html',
          value: embedHtml,
        });
      }
    });
  };
}
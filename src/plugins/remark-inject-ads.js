import { visit } from 'unist-util-visit';

export function remarkInjectAds() {
  return (tree) => {
    let h2Indexes = [];
    let paragraphIndexes = [];

    // First pass: collect index positions of H2s and paragraphs
    visit(tree, (node, index, parent) => {
      if (!parent) return;

      if (node.type === 'heading' && node.depth === 2) {
        h2Indexes.push({ index, parent });
      }

      if (node.type === 'paragraph') {
        paragraphIndexes.push({ index, parent });
      }
    });

    // Helper to inject ad node
    const createAdNode = (slot) => ({
      type: 'html',
      value: `
        <div class="my-8 not-prose w-full flex justify-center">
          <div class="w-full max-w-3xl">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1193332880003971" crossorigin="anonymous"></script>
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-1193332880003971"
                 data-ad-slot="${slot}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </div>
        </div>
      `
    });

    // Insert first ad
    if (h2Indexes.length >= 1) {
      h2Indexes[0].parent.children.splice(h2Indexes[0].index + 1, 0, createAdNode("1480860443"));
    } else if (paragraphIndexes.length >= 2) {
      const { index, parent } = paragraphIndexes[1];
      parent.children.splice(index + 1, 0, createAdNode("1480860443"));
    }

    // Insert second ad
    if (h2Indexes.length >= 2) {
      h2Indexes[1].parent.children.splice(h2Indexes[1].index + 1, 0, createAdNode("7774806053")); // sidebar top
    } else if (paragraphIndexes.length >= 4) {
      const { index, parent } = paragraphIndexes[3];
      parent.children.splice(index + 1, 0, createAdNode("7774806053"));
    }

    // Insert third ad
    if (h2Indexes.length >= 3) {
      h2Indexes[2].parent.children.splice(h2Indexes[2].index + 1, 0, createAdNode("4637500964")); // vertical new
    } else if (paragraphIndexes.length >= 6) {
      const { index, parent } = paragraphIndexes[5];
      parent.children.splice(index + 1, 0, createAdNode("4637500964"));
    }
  };
}

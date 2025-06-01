import { visit } from 'unist-util-visit';

export function remarkInjectAds() {
  return (tree) => {
    const targets: { index: number; parent: any }[] = [];

    // Collect paragraph and h2 heading nodes
    visit(tree, (node, index, parent) => {
      if (!parent) return;
      if (node.type === 'heading' && node.depth === 2) {
        targets.push({ index, parent });
      }
      if (node.type === 'paragraph') {
        targets.push({ index, parent });
      }
    });

    const total = targets.length;
    if (total === 0) return;

    // Choose 3 positions (25%, 50%, 75%)
    const positions = [
      Math.floor(total * 0.25),
      Math.floor(total * 0.5),
      Math.floor(total * 0.75)
    ];

    const adSlots = ['1480860443', '7774806053', '4637500964'];

    const adsToInsert = positions.map((pos, i) => {
      const target = targets[pos];
      if (!target) return null;

      const adNode = {
        type: 'html',
        value: `
<div class="my-8 not-prose w-full flex justify-center">
  <div class="w-full max-w-3xl">
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-1193332880003971"
         data-ad-slot="${adSlots[i]}"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  </div>
</div>
        `.trim()
      };

      return {
        parent: target.parent,
        index: target.index + 1,
        node: adNode
      };
    }).filter(Boolean);

    // Insert ads in reverse order to prevent index shifting
    adsToInsert.sort((a, b) => b.index - a.index);

    for (const { parent, index, node } of adsToInsert) {
      parent.children.splice(index, 0, node);
    }
  };
}

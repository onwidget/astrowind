import { visit } from 'unist-util-visit';

export function remarkInjectAds() {
  return (tree) => {
    const targets = []; // Collect nodes (paragraphs and h2 headings)

    // First pass: collect all paragraph and heading level 2 nodes
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

    // Decide where to insert the ads
    const positions = [
      Math.floor(total * 0.25),
      Math.floor(total * 0.5),
      Math.floor(total * 0.75)
    ];

    const adSlots = ["4052027660", "6419763607", "4791212508"];

    // Create ad nodes for the positions
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
                   data-full-width-responsive="true"
                   data-ad-status="pending"></ins>
            </div>
          </div>
        `
      };

      return { parent: target.parent, index: target.index + 1, node: adNode };
    }).filter(Boolean);

    // Sort by descending index to avoid position shifts while inserting
    adsToInsert.sort((a, b) => b.index - a.index);

    // Insert the ad nodes
    for (const { parent, index, node } of adsToInsert) {
      parent.children.splice(index, 0, node);
    }
  };
}

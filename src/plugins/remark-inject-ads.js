import { visit } from 'unist-util-visit';

export function remarkInjectAds() {
  return (tree) => {
    let headingCount = 0;
    let paragraphCount = 0;
    let adInserted = false;

    // First pass: count elements to determine content structure
    visit(tree, (node) => {
      if (node.type === 'heading' && node.depth === 2) headingCount++;
      if (node.type === 'paragraph') paragraphCount++;
    });

    // Second pass: insert ads based on content structure
    visit(tree, (node, index, parent) => {
      if (!parent || adInserted) return;

      // Strategy 1: Insert after first H2 heading (most reliable)
      if (node.type === 'heading' && node.depth === 2) {
        const adNode = {
          type: 'html',
          value: `
            <div class="my-8 not-prose w-full flex justify-center">
              <div class="w-full max-w-3xl">
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1193332880003971" crossorigin="anonymous"></script>
                <ins class="adsbygoogle" 
                     style="display:block" 
                     data-ad-client="ca-pub-1193332880003971" 
                     data-ad-slot="1480860443" 
                     data-ad-format="auto" 
                     data-full-width-responsive="true"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
              </div>
            </div>
          `
        };
        
        parent.children.splice(index + 1, 0, adNode);
        adInserted = true;
        return;
      }
      
      // Strategy 2: If no H2 headings, insert after 2nd paragraph (fallback)
      if (headingCount === 0 && node.type === 'paragraph' && paragraphCount >= 3) {
        let currentParagraphIndex = 0;
        
        // Count paragraphs up to current position
        for (let i = 0; i <= index; i++) {
          if (parent.children[i].type === 'paragraph') {
            currentParagraphIndex++;
          }
        }
        
        // Insert after 2nd paragraph
        if (currentParagraphIndex === 2) {
          const adNode = {
            type: 'html',
            value: `
              <div class="my-8 not-prose w-full flex justify-center">
                <div class="w-full max-w-3xl">
                  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1193332880003971" crossorigin="anonymous"></script>
                  <ins class="adsbygoogle" 
                       style="display:block" 
                       data-ad-client="ca-pub-1193332880003971" 
                       data-ad-slot="1480860443" 
                       data-ad-format="auto" 
                       data-full-width-responsive="true"></ins>
                  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                </div>
              </div>
            `
          };
          
          parent.children.splice(index + 1, 0, adNode);
          adInserted = true;
        }
      }
    });
  };
}
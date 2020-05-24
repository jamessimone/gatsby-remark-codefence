const visit = require("unist-util-visit");

function formatCodeFenceHTML(node) {
  return `<code-fence lang="${node.lang}" ${node.meta}>
    <textarea vue-slot="code">
      ${node.value}
    </textarea>
    </code-fence>
  `;
}

module.exports = ({ markdownAST }, pluginOptions) => {
  const codeFenceNodes = [];

  visit(markdownAST, "code", (codeFenceNode) => {
    codeFenceNodes.push(codeFenceNode);
  });

  for (var index = 0; index < codeFenceNodes.length; index++) {
    const node = codeFenceNodes[index];

    node.value = formatCodeFenceHTML(node);
    node.type = "html";
    node.children = undefined;
  }

  return markdownAST;
};

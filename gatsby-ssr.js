const React = require("react");

function createCodeFenceScript() {
  return (
    <>
      <link href="//codefence.io/codefence.css" rel="stylesheet" />
      <script defer type="text/javascript" src="//codefence.io/codefence.js" />
    </>
  );
}

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(createCodeFenceScript());
};

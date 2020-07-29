const path = require('path')

module.exports = {
  sidebar: [
    {
      title: "docs", // required
      path: path.resolve('vuepress','docs'), // optional, link of the title, which should be an absolute path and must exist
      collapsable: false, // optional, defaults to true
      sidebarDepth: 1, // optional, defaults to 1
      children: ["/README.md", "/LICENSE.md"],
    },
  ],
};

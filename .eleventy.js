module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  return {
    pathPrefix: "/ReLaG/",
    dir: {
      includes: "_includes",
      input: "src",
      output: "_site"
    }
  };
};

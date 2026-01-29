module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      includes: "_includes",
      input: "src",
      output: "_site"
    }
  };
};

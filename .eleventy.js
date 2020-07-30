module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "css", "11ty.js", "html", "json"
    ]);

    eleventyConfig.addPassthroughCopy("src/stuff/**/*.js");
    eleventyConfig.addPassthroughCopy("src/awp_fall_2020/**/*.*");
    eleventyConfig.addPassthroughCopy("src/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/**/*.png");
    eleventyConfig.addPassthroughCopy("src/**/*.zip");
    eleventyConfig.addPassthroughCopy("src/**/*.jar");
    eleventyConfig.addPassthroughCopy("src/**/*.unityweb");
    eleventyConfig.addPassthroughCopy("src/**/*.ico");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
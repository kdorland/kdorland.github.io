module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "css", "ejs", "html", "json"
    ]);

    eleventyConfig.addPassthroughCopy("src/**/*.js");
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
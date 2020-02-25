module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "css", "zip", "png", "jar", "ejs", "html"
    ]);

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
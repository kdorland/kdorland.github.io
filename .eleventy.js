module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "css", "zip", "png", "jar", "ejs", "html", "json", "unityweb", "ico"
    ]);

    eleventyConfig.addPassthroughCopy("src/**/*.js");

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
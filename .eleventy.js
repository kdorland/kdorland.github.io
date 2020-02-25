module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "css", "zip", "png", "jar", "ejs", "html", "json", "unityweb", "ico"
    ]);

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
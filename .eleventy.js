const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    // human readable date
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("dd LLL yyyy");
    });

    // Copy Static Files to /public
    eleventyConfig.addPassthroughCopy("./src/assets/**/*");
    eleventyConfig.addPassthroughCopy("./src/images/**/*");

    return {
        dir: {
            input: "src",
            output: "public",
            data: "_data",
            includes: "_includes",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dateTemplateEngine: "njk",
    };
};

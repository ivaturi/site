const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight'),
    markdownIt = require('markdown-it'),
    pluginRss = require('@11ty/eleventy-plugin-rss');

const inspect = require("util").inspect;

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPassthroughCopy('assets/fonts');
    eleventyConfig.addPassthroughCopy({ "favicon.ico": "" });
    const options = {
        html: true,
        breaks: true,
        linkify: false
    };
    eleventyConfig.setLibrary('md', markdownIt(options));

    // custom filter to inspect data
    eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

    return {
        // Use liquid in html templates
        htmlTemplateEngine: 'liquid'
    };
};
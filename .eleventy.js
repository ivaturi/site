const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownIt = require('markdown-it');
const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPassthroughCopy('assets/fonts');
    eleventyConfig.addPassthroughCopy('favicon.ico');
    const options = {
        html: true,
        breaks: true,
        linkify: false
    };
    eleventyConfig.setLibrary('md', markdownIt(options));


    return {
        // Use liquid in html templates
        htmlTemplateEngine: 'liquid'
    };
};
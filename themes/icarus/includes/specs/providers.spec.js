const { doc, type, defaultValue } = require('../common/utils').descriptors;

module.exports = {
    [type]: 'object',
    [doc]: 'CDN provider settings',
    cdn: {
        [type]: 'string',
        [doc]: 'CDN provider settings\nhttp://ppoffice.github.io/hexo-theme-icarus/Configuration/Theme/speed-up-your-site-with-custom-cdn/',
        [defaultValue]: 'jsdelivr'
    },
    fontcdn: {
        [type]: 'string',
        [doc]: 'Name or URL of the webfont CDN provider',
        [defaultValue]: 'google'
    },
    iconcdn: {
        [type]: 'string',
        [doc]: 'Name or URL of the webfont Icon CDN provider',
        [defaultValue]: 'fontawesome'
    }
};
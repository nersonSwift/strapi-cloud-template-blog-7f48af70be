'use strict';

/**
 * rewrite-template router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::rewrite-template.rewrite-template');

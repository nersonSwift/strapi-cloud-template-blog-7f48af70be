'use strict';

/**
 * rewrite-template service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rewrite-template.rewrite-template');

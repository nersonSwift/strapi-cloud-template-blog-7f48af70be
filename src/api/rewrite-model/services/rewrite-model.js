'use strict';

/**
 * rewrite-model service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rewrite-model.rewrite-model');

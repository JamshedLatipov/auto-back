'use strict';

/**
 * some service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::some.some');

'use strict';

/**
 * atricle controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::atricle.atricle', ({strapi}) => ({
    async findOne(ctx) {
        const { id: vin } = ctx.params;
        const { query } = ctx;
        if (!query.filters) query.filters = {}
        query.filters.vin = { '$eq': vin }
        const entity = await strapi.service('api::atricle.atricle').find(query);
        const { results } = await this.sanitizeOutput(entity, ctx);
    
        return this.transformResponse(results[0]);
      }
}));

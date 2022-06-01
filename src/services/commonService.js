// Insert only one record
exports.insertOne = async (model, query) => {
    try {
        return await model.create(query)
    } catch (error) {
        throw error;
    }
}

// Insert array of records into a table
exports.insertMany = async (model, query) => {
    try {
        return await model.bulkCreate(query)
    } catch (error) {
        throw error;
    }
}

// Find records or create a record
exports.findOrCreate = async (model, query) => {
    try {
        return await model.findOrCreate(query.body)
    } catch (error) {
        throw error;
    }
}

// Find only one record
exports.findByPk = async (model, query) => {
    try {
        return await model.findByPk(query);
    } catch (error) {
        throw error;
    }
}

// Find only one record
exports.findOne = async (model, query) => {
    try {

        return await model.findOne({
            where: query.where,
            include: query.include,
            attributes: query.attributes,
            raw: query.raw === false ? query.raw : true,
        });
    } catch (error) {
        throw error;
    }
}


// Find all the records
exports.findAll = async (model, query) => {
    try {
        return await model.findAll({
            where: query.where,
            include: query.include,
            attributes: query.attributes,
            group: query.group,
            order: query.order,
            raw: query.raw === false ? query.raw : true,
        });
    } catch (error) {
        throw error;
    }
}

// Find and count records
exports.findAndCountAll = async (model, query) => {
    try {
        query.offset = parseInt(query.offset) || 0;
        query.limit = parseInt(query.limit) || 15;
        query.where = query.where;
        return await model.findAndCountAll(query);
    } catch (error) {
        throw error;
    }
}

// Hard delete "force=true" or Soft delete "force=false"
exports.delete = async (model, query) => {
    try {
        query.force = query.force || false;
        return await model.destroy(query)
    } catch (error) {
        throw error;
    }
}

// Restore soft deleted data
exports.restore = async (model, query) => {
    try {
        return await model.restore(query)
    } catch (error) {
        throw error;
    }
}

// Update records
exports.update = async (model, query) => {
    try {
        return await model.update(query.body,
            {
                returning: true,
                where: query.where,
                plain: true
            });
    } catch (error) {
        throw error;
    }
}

// Increment records
exports.increment = async (model, query) => {
    try {
        const list = await model.findAll();
        if (list.length == 0) {
            await model.create({ count: 1 })
        } else {
            await model.increment(
                { count: +1 },
                { where: { id: list[0].id } }
            );
        }
        return list;
    } catch (error) {
        throw error;
    }
}
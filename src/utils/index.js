// phil welsby - 8 sept 2021

exports.addMovie = async (collection, dataObj) => {
    try {
        await collection.insertOne(dataObj)
    } catch (error) {

    }
}
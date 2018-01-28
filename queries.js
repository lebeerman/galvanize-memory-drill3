const database = require("./database-connection");

module.exports = {
    list(){
        return database('gamecollection').select();
    },
    read(id){
        return database('gamecollection')
            .where('id', id)
            .first();
    },
    create(game){
        return database('gamecollection')
            .insert(game)
            .returning('*')
            .then(record => record[0]);
    },
    update(id, game){
        return database('gamecollection').select()
            .where('id', id)
            .update(game);
    },
    delete(id){
        return database('gamecollection')
            .where('id', id)
            .del();
    }
};

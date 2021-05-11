const db = require('../utils/databace');

const Category_62 = class Category_62{
    constructor(id, name ,size,remote_url,local_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }


    //READ
    static fetchAll(){
        return db.execute('SELECT * FROM category_62');
    }
}

module.exports = Category_62;
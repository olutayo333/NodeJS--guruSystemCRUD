const mongoose = require ("mongoose")

let CRUDSchema = mongoose.Schema({
    title:{type: String, required:true },
    main:{type: String,required:true},
    date:{type:Date, default:Date.now()},    
})

let CRUDModel = mongoose.model("crud1", CRUDSchema)
module.exports = CRUDModel
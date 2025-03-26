import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
},
    {
    collection: "categories",
    timestamp: true,
    versionKey: false
});

export default mongoose.model("Category", CategorySchema)
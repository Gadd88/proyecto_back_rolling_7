const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    product_name:{
        type:String,
        required: true,
        trim: true
    },
    product_price:{
        type:Number,
        required: true,
        trim: true
    },
    product_description:{
        type:String,
        required: true,
        trim: true
    },
    product_image:{ // url
        type:String,
        required: true,
        trim: true
    },
    product_image_id:{ // _id
        type:String,
        required: true,
        trim: true
    },
    product_stock:{
        type:Number,
        required: true,
        trim: true
    },
    product_category:{
        type:String,
        required: true,
        enum: ['panificados', 'facturas', 'tortas', 'masas', 'varios']
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

ProductSchema.methods.toJSON = function() {
   const { __v, _id, ...product  }  = this.toObject()
   return { product, product_id: _id}
}

const ProductModel = model('products', ProductSchema)


module.exports = ProductModel
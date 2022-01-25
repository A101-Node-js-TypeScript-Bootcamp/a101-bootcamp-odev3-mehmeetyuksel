const Joi = require("joi")
const productService = require("../services/productService")

exports.addProduct = async (req, res) => {

    const schema = Joi.object({         // istenen validasyon kriterleri
        productId: Joi.string()
            .min(3)
            .max(30)
            .required(),
        stock : Joi.number()
        .min(1)
        .required(),
        productName: Joi.string()
        .required(),
        isDiscount : Joi.boolean()
        .required(),
        categoryId : Joi.number()
        .required(),
        categoryName : Joi.string()
        .required()  
         });

         try {

            const value = await schema.validateAsync({          // validasyon işlemi
                productId: req.body.productId,
                stock: req.body.stock,
                productName: req.body.productName,
                isDiscount: req.body.isDiscount,
                categoryId: req.body.category.categoryId,
                categoryName: req.body.category.categoryName

         });  

        const response = await productService.productAdd(value);
        res.status(200).send(response)

         }
         catch (err) { 
            res.status(401).send(err.details[0].message)
        }

}

exports.getAllProducts = async (req, res) => {

    try {
        const data = await productService.getAllProducts();
        res.status(200).send({
            message : "All products here!",
            products: data
        })
    }

catch(err) {
    res.status(401).send({
        message: err
    })
}
   
}

exports.getProduct = async (req, res) => {

    try {
        const data = await productService.getProduct(req.params.id);
        res.status(200).send({
            message : "Determined product is here!",
            data: data
        })
    }
catch(err) {
    res.status(401).send(err);
}
    
}

exports.updateProduct = async (req, res) => {
    
    try {
        const data = await productService.updateProduct(req.body);
        res.status(200).send(data)
    }
    catch(err) {
        res.send(401).send(err);
    }
    
}


exports.deleteProduct = async (req, res) => {
    try {
        const data = await productService.deleteProduct(req.params.id);
        res.status(200).send({
            message : data            
        })
    }
    catch(err) {
        res.status(401).send(err)
    }
}

exports.showDiscounts = async (req, res) => {

    try {
        const data = await productService.showDiscounts();
        res.status(200).send({
            message : "Discounts are shown here!",
            data : data
        })
    }

    catch(err) {
        res.status(401).send(err);
    }

    
}



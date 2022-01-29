const Joi = require("joi")
const productService = require("../services/productService")

exports.addProduct = async (req, res) => {   // Adding Product

        const schema = Joi.object({         // validation criterias
            stock: Joi.number()
                .min(1)
                .required(),
            productName: Joi.string()
                .required(),
            isDiscount: Joi.boolean()
                .required(),
            categoryId: Joi.number()
                .required(),
            categoryName: Joi.string()
                .required()
        });
    
        try {
    
            const value = await schema.validateAsync({          // validate requirements
               
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
   
    



exports.getAllProducts = async (req, res) => {   // Getting all products


        const data = await productService.getAllProducts();
        res.status(200).send({
            message: "All products here!",
            products: data
        })
    }

exports.getProduct = async (req, res) => {  // Getting single product by id

        const data = await productService.getProduct(req.params.id);
        res.status(200).send({
            message: "Determined product is here!",
            data: data
        })
}

exports.updateProduct = async (req, res) => {   // Updating stock of a product
        const data = await productService.updateProduct(req.body);
        res.status(200).send(data)
}


exports.deleteProduct = async (req, res) => {   // Deleting a product
        const data = await productService.deleteProduct(req.params.id);
        res.status(200).send(data)
}

exports.showDiscounts = async (req, res) => {   // Showing products with discount
        const data = await productService.showDiscounts();
        res.status(200).send({
            message: "Discounts are shown here!",
            data: data
        })
}



const Joi = require("joi");

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

exports.productValidation = async (params) => {
 try {
    const value = await schema.validateAsync({          // validasyon işlemi
        productId: params.productId,
        stock: params.stock,
        productName: params.productName,
        isDiscount: params.isDiscount,
        categoryId: params.category.categoryId,
        categoryName: params.category.categoryName

 });  
    return value;
 }

 catch(err) {
    return err
 }
   
}
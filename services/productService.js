const AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com/",
    accessKeyId: "AKIAZNYERRQZMOGXPQVR",
    secretAccessKey: "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"
  });
  
let docClient = new AWS.DynamoDB.DocumentClient();
table = "Products"


exports.productAdd = async (params) => {

    const value = {
        TableName : table,
        Item: {
            productId: params.productId,
            stock : params.stock,
            productName : params.productName,
            isDiscount : params.isDiscount,
            category : {
                categoryId : params.categoryId,
                categoryName : params.categoryName
            }
        }    
    };

try {
    const data = await docClient.put(value).promise();
    return {
       status: true,
       message: "Product is added",
       data: data
   }
}
    catch (err) {
        return err
    }
}

exports.getAllProducts = async () => {
    var params = {
        TableName: table,
        Select : "ALL_ATTRIBUTES"
    };
    
    try {
        const data = await docClient.scan(params).promise();
        return data;
    }
        catch (err) {
            return err
        }
    
}

exports.getProduct = async (id) => {
    var params = {
        TableName: table,
        Key:{
            productId : id
        }
    };
   
  try {
    const data = await docClient.get(params).promise()
    return data;
  }  
   catch(err) {
       return err
   }
}

exports.showDiscounts = async () => {
    var params = {
        TableName: table,
        Select : "ALL_ATTRIBUTES"
    };
    
    try {
        const data = await docClient.scan(params).promise();
        return data.Items.filter((el) => el.isDiscount === true);
    }
        catch (err) {
            return err
        }
    
}

exports.deleteProduct = async (id) => {

var params = {
    TableName:table,
    Key:{
        "productId": id
    },
    ConditionExpression:"isDiscount = :val",
    ExpressionAttributeValues: {
        ":val": false
    }
};

try {
   await docClient.delete(params).promise()
   return "Product is deleted successfully!"
}
catch(err) {
    return "Product is not deleted! No product found or has a discount on the product!"
}


}

exports.updateProduct = async (params) => {
    var params = {
        TableName:table,
        Key:{
            "productId": params.productId
        },
        ExpressionAttributeNames: {
            '#pr': 'productId'
        },
        ConditionExpression: "attribute_exists(#pr)",
        UpdateExpression: "set stock = :s",
        ExpressionAttributeValues:{
            ":s":params.stock
        },
       
        ReturnValues:"UPDATED_NEW"
    };
    try {
    const data = await docClient.update(params).promise();
    return {
        message : "Data is updated!",
        data: data
    };
    }
    catch(err) {
        return "Updating is failed. Product is not found!"
    }
}
    
    


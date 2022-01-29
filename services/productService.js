const AWS = require('aws-sdk');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');

dotenv.config();
AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com/",
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
});

let docClient = new AWS.DynamoDB.DocumentClient();
table = "Products"


exports.productAdd = async (params) => {   // Adding a product service

    const value = {
        TableName: table,
        Item: {
            productId: uuidv4(),
            stock: params.stock,
            productName: params.productName,
            isDiscount: params.isDiscount,
            category: {
                categoryId: params.categoryId,
                categoryName: params.categoryName
            }
        }
    };

    try {
        const data = await docClient.put(value).promise();
        return {
            status: true,
            message: "Product is added"
        }
    }
    catch (err) {
        return err
    }
}

exports.getAllProducts = async () => {   // Getting all products service
    var params = {
        TableName: table,
        Select: "ALL_ATTRIBUTES"
    };

    try {
        const data = await docClient.scan(params).promise();
        return data;
    }
    catch (err) {
        return err
    }

}

exports.getProduct = async (id) => {    // Getting a single product service
    var params = {
        TableName: table,
        Key: {
            productId: id
        }
    };

    try {
        const data = await docClient.get(params).promise()
        return data;
    }
    catch (err) {
        return err
    }
}

exports.showDiscounts = async () => {   // Showing discounts service
    var params = {
        TableName: table,
        FilterExpression: "isDiscount = :isDiscount",
        ExpressionAttributeValues : {
            ":isDiscount" : true
        }
    };

    try {
        const data = await docClient.scan(params).promise();
        return data;
    }
    catch (err) {
        return err
    }

}

exports.deleteProduct = async (id) => {         // Deleting a product service

    var params = {
        TableName: table,
        Key: {
            "productId": id
        },
        ConditionExpression: "isDiscount = :val",
        ExpressionAttributeValues: {
            ":val": false
        }
    };

    try {
        await docClient.delete(params).promise()
        return "Product is deleted successfully!"
    }
    catch (err) {
        return "Product is not deleted! No product found or has a discount on the product!"
    }


}

exports.updateProduct = async (params) => {   // Updating stock service
    var params = {
        TableName: table,
        Key: {
            "productId": params.productId
        },
        ExpressionAttributeNames: {
            '#pr': 'productId'
        },
        ConditionExpression: "attribute_exists(#pr)",
        UpdateExpression: "set stock = :s",
        ExpressionAttributeValues: {
            ":s": params.stock
        },

        ReturnValues: "UPDATED_NEW"
    };
    try {
        const data = await docClient.update(params).promise();
        return {
            message: "Data is updated!",
            data: data
        };
    }
    catch (err) {
        return "Updating is failed. Product is not found!"
    }
}




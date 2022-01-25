# a101-bootcamp-odev3-mehmeetyuksel

## How to use?

### Adding New Product

```http
  POST /api/product/
```

| Params | Type     | Info                |
| :-------- | :------- | :------------------------- |
| productId | `string` | **Required** |
| stock |  `number`| **Required**|
| productName | `string` | **Required**|
| isDiscount | `boolean` | **Required**|
| categoryId | `number` | **Required** |
|categoryName | `string` | **Required** |

 #### How to send data?

 ```
 {
    "productId" : "ExampleString",
    "stock" : "ExampleNumber",
    "productName" : "ExampleString2",
    "isDiscount": "BooleanExpression",
    "category" : {
        "categoryId" : "ExampleNumber2",
        "categoryName" : "ExampleString3"
    }
}
 ```
### Getting All Products

```http
  GET /api/product/
```
That gives you all products in the database.

### Getting a Product by ID

```http
  GET /api/product/:productId
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `productId`      | `string` | **Required**|

That gives you a single product according to productId.

### Getting products with **discounts**

```http
  GET /api/product/discounts
```
That gives you products whose isDiscount is **true**


### Deleting product
```http
  DELETE /api/product/:productId
```
| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `productId`      | `string` | **Required**|

That deletes a product according to productId

### Updating Product

```http
  PUT /api/product/:productId
```
| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `productId`      | `string` | **Required**|
| `stock`| `number` | **Required**|

#### How to update data?

```
{
   "productId : "productIdOfProduct",
   "stock" : "newStockNumber"
 }

```
That updates the stock number of the selected product with the new value.
# a101-bootcamp-odev3-mehmeetyuksel

# How to use API?

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


# SQL & NoSQL


### SQL
SQL ilişkisel veri tabanlarıdır. Veriler bu veritabanlarında tablolarda satırlar sütunlar halinde tutulur. 
İlişkisel veri tabanlarında bulunan bütün tablolar birbiri ile bağlantılıdır. 
Tüm verileri tek tabloda tutmayıp hepsini farklı farklı tablolara ayırıp aralarında ilişki kurmamızın sebebi ise veri tekrarını önlemek, daha kolay yönetebilmek ve daha kolay sorgulama yapabilmektir.
Tablolar arasındaki ilişkiler “Primary Key” yani birincil anahtar ve “Foreign Key” yani yabancı, ikincil anahtarların birbiri ile bağlantısıyla olmaktadır.
SQL veritabanları dikey olarak ölçeklenebilir. 

En bilindik SQL veritabanları: MySQL, Oracle, MS-SQL, SQLite.
#### SQL sorgu örneği: 

```
SELECT ad,soyad FROM musteri

```

### NoSQL 

NoSQL, sabit bir şema gerektirmeyen ve ölçeklemesi kolay ilişkisel olmayan bir veri tabanı sistemidir.
NoSQL veri tabanları belge tabanlı çalışır ve veriler tablo olarak değil JSON belgesi olarak tutulur. Burada sütuna karşılık anahtar, satıra karşılık ise değer terimleri kullanılmaktadır (key-value). 

En bilindik NoSQL veritabanları

MongoDB, DynamoDB, CouchDB, Redis, Cassandra, HBase


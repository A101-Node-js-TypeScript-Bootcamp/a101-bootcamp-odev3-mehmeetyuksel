
exports.addProduct = (req, res) => {
    res.status(200).send({
        message : "Adding product is here!"
    })
}



exports.getAllProducts = (req, res) => {
    res.status(200).send({
        message : "All products here!"
    })
}

exports.getProduct = (req, res) => {
    res.status(200).send({
        message : "Determined product is here!",
        id : req.params.id
    })
}

exports.updateProduct = (req, res) => {
    res.status(200).send({
        message : "Product is updated here!"
    })
}


exports.deleteProduct = (req, res) => {
    res.status(200).send({
        message : "Products is deleted here!"
    })
}

exports.showDiscounts = (req, res) => {
    res.status(200).send({
        message : "Discounts are shown here!"
    })
}

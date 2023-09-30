const exp = require("express")
const productApi = exp.Router();
const expressErrorHandler = require("express-async-handler")
productApi.use(exp.json())
const multerObj = require("./middlewares/multerCloudinary")
require("dotenv").config()

//adding new product

productApi.post('/add-product', multerObj.single('photo'), expressErrorHandler(async (req, res, next) => {


    let userCollectionObj = req.app.get("userCollectionObj")
    let productCollectionObject = req.app.get("productCollectionObject")

    let newProduct = JSON.parse(req.body.prodObj);
     //console.log(req.body);
    //search
    //let product = await productCollectionObject.findOne({ model: newProduct.model })
    let mno = await userCollectionObj.findOne({ username: newProduct.mobileno })
    //if proudct is existed
    if (mno === null) {
        res.send({ message: "user not existed" })
    }
    else {
        newProduct.receipt = req.file.path;
        delete newProduct.photo;
        await productCollectionObject.insertOne(newProduct)
        res.send({ message: "New expense added" })
    }


}))


//to read all products
productApi.get("/getproducts", expressErrorHandler(async (req, res, next) => {

    let productCollectionObject = req.app.get("productCollectionObject")

    let products = await productCollectionObject.find().toArray()

    res.send({ message: products })

}))

productApi.get("/getproductsbyid/:username", expressErrorHandler(async (req, res, next) => {


    let un = Number(req.params.username);
    let productCollectionObject = req.app.get("productCollectionObject")

    let products = await productCollectionObject.findOne({ mobileno: un })
    expenses=[]
    expenses.push(products)
   //console.log(expenses)
    res.send({ message: expenses })

}))



module.exports = productApi;
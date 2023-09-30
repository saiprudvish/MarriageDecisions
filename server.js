//create express app
const exp = require("express")
const app = exp();
const path = require("path")


//connect angular app with express server
app.use(exp.static(path.join(__dirname, './dist/MEAN-APP/')))

//import APIS
const userApi = require("./APIS/user-api")
const adminApi = require('./APIS/admin-api')
const productApi = require("./APIS/product-api")
//import MongoCLient
const mc = require("mongodb").MongoClient;
require("dotenv").config()




//connection string
const databaseUrl = process.env.DATABASE_URL;




//connect to DB
mc.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) {
        console.log("err in db connection", err);
    }
    else {
        //get database object
        let databaseObj = client.db("MarraigeDecisions")
        //create usercollection object

        let userCollectionObj = databaseObj.collection("usercollection")
        let adminCollection = databaseObj.collection("admincollection")
        let productCollectionObject = databaseObj.collection("productcollection")
        let userCartCollectionObject = databaseObj.collection("usercartcollection")

        app.set("userCollectionObj", userCollectionObj)
        app.set("adminCollection", adminCollection)
        app.set("productCollectionObject", productCollectionObject)
        app.set("userCartCollectionObject", userCartCollectionObject)

        console.log("connected to database")

    }
})




//execute specific api based on path
app.use("/user", userApi)
app.use("/admin", adminApi)
app.use("/product", productApi)


app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname,'dist/MEAN-APP/index.html'), function(err){
        if(err){
            res.status(500).send(err)
        }
    })
})

//invalid path
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid` })
})

//error handling middleware
app.use((err, req, res, next) => {
    res.send({ message: `error is ${err.message}` })
})


//assign port
const port =  process.env.PORT || 8080;
app.listen(port, () => console.log(`server on ${port}...`))
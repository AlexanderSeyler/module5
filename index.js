const express = require("express");
const swaggerUi = require("swagger-ui-express");
const app = express();
// const app1 = express();
// const app2 = express();
// const app3 = express();
const port = 3000;
// const port1 = 2000;
// const port2 = 4000;
// const port3 = 80;
const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/myCalculatorRoutes");
const userRoutes = require("./routes/userRoutes");
swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use("/mytest", testRoutes);
app.use("/calculator", calculatorRoutes);
app.use("/users", userRoutes);

app.use("/", express.static("public"));

// app1.get('/',(req,res)=>{res.send('Hello World! 3000')});

// app1.get('/test',(req,res)=>{res.send('Hello Test! 3000')});

// app2.get('/',(req,res)=>{res.send('Hello World! 4000')});

// app2.get('/test',(req,res)=>{res.send('Hello Test! 4000')});

// app3.get('/',(req,res)=>{res.send('Hello World! 80')});

// app3.get('/test',(req,res)=>{res.send('Hello Test! 80')});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// app1.listen(port1, () =>{console.log(`Example app listening at http://localhost:${port1}`)});

// app2.listen(port2, () =>{console.log(`Example app listening at http://localhost:${port2}`)});

// app3.listen(port3, () =>{console.log(`Example app listening at http://localhost:${port3}`)});

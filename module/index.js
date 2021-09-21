const { RoutesProduk } = require("./produk/produk.routes");
const testingRoutes = require("./testing/testing.routes")

exports.apiRoute = (app) => {
  app.use("/api/v1/testing", testingRoutes);
  app.use("/api/v1/produk", RoutesProduk);


  app.get("/hello", (req,res)=>{
    res.send("Welcome To Private Route")
  });
}
import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", (req, res) => {
  //   var num1 = req.body.num1;
  //   var num2 = req.body.num2;
  //   const result = parseFloat(num1) + parseFloat(num2);
  var timeOf = req.body.time;
  var fuelOf = req.body.fuel;
  var rateOf = req.body.rate;
  var salesOf = req.body.sales;
  var routeOf = req.body.route;
  var rubberOf = req.body.rubber;
  var depreciationOf = req.body.depreciation;
  var operatingOf = req.body.operating;
  var companyOf = req.body.company;
  var profitOf = req.body.profit;
  var maintenanceOf = req.body.maintenance;
  const result =
    parseFloat(timeOf) +
    parseFloat(fuelOf) +
    parseFloat(rateOf) +
    parseFloat(salesOf) +
    parseFloat(routeOf) +
    parseFloat(rubberOf) +
    parseFloat(depreciationOf) +
    parseFloat(operatingOf) +
    parseFloat(companyOf) +
    parseFloat(profitOf) +
    parseFloat(maintenanceOf);

  res.render("index.ejs", {
    resultIs: result,
  });
  console.log(result);
});
app.listen(port, () => {
  console.log(`Listen server on port ${port}.`);
});

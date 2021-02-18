const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// DB Config
const db = process.env.mongoURI;
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.API_Key,
  api_secret: process.env.API_Secret,
});

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

//MiddleWare
app.use(cors());

app.use(express.json());


//API ENDPOINTS CONSTANTS
const HouseListingRoute = require("./Routes/HouseUpload/HouseSaleOrRent");
const ListHouseFecthRoute = require("./Routes/ListedHouseFetch/HouseFetch");
const ContactFormRoute = require("./Routes/EmailRoute/Email");
const UsersRoute = require("./Routes/User/User");

//API ENDPOINTS
app.use(HouseListingRoute);
app.use(ListHouseFecthRoute);
app.use(ContactFormRoute);
app.use(UsersRoute);


//Setting up for production
// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
app.get("*", (request, response) => {
  response.sendFile(
    path.resolve(__dirname, "./client", "build", "index.html")
    );
  });
// }

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

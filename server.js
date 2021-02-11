const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const mongoose = require("mongoose");


const mongoURI = process.env.mongoURI;
mongoose.connect(
  mongoURI,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      return console.log(error);
    }
    return console.log("MongoDB Atlas Connected successful");
  }
);

cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.API_Key,
  api_secret: process.env.API_Secret,
});

//MiddleWare
app.use(cors());

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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "./client", "build", "index.html")
    );
  });
}

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

const router = require("express").Router();
const Formidable = require("formidable");
const cloudinary = require("cloudinary").v2;
const House = require("../../Models/Houses");

//ROUTE FOR USER TO COME SELL OR RENT THEIR HOUSES

router.post("/api/houseListing", async (request, response) => {
  const form = new Formidable.IncomingForm();
  form.parse(request, (error, fields, files) => {
    const {
      name,
      surname,
      idNumber,
      phoneNumber,
      email,
      province,
      street,
      sale_or_rent,
      housePrice,
      bedroomNumber,
      garages,
      description,
      pool,
      bathroomNumber,
      petFriendly,
    } = fields;

    const { houseImage } = files;

    cloudinary.uploader.upload(
      houseImage.path,
      { folder: "/properties/houseAgency" },
      async (error, results) => {
        const image_url = results.url;

        const newHouseListing = new House({
          owner: {
            name,
            surname,
            idNumber,
            phoneNumber,
            email,
          },
          house_location: {
            province,
            street,
          },
          house_properties: {
            sale_or_rent,
            housePrice,
            bedroomNumber,
            garages,
            description,
            description,
            pool,
            bathroomNumber,
            petFriendly,
            houseImage: image_url,
          },
        });
        const savedListing = await newHouseListing.save();
        return response.status(200).json(savedListing);
      }
    );
  });
});

module.exports = router;
// console.log("Bathroom", bathroomNumber);

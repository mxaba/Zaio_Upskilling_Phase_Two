const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./../../config/keys");
const passport = require("passport");
//Validator
const Validator = require("validator");
const isEmpty = require("is-empty");

// Load input validation
function validateRegister(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    // Name checks
    if (Validator.isEmpty(data.name)) {
      errors.name = "Name field is required";
    } // Email checks
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    } // Password checks
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    } if (Validator.isEmpty(data.password2)) {
      errors.password2 = "Confirm password field is required";
    } if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password = "Password must be at least 6 characters";
    } if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = "Passwords must match";
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  };

// Load User model
const User = require("./../../models/User");

router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegister(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  } User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists you can try to login" });
    } else {
      const newUser = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => { if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});


// Load input validation
function validateLoginInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    // Email checks
    if (Validator.isEmpty(data.email)) {
      errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }// Password checks
    if (Validator.isEmpty(data.password)) {
      errors.password = "Password field is required";
    } return {
      errors,
      isValid: isEmpty(errors)
    };
  };

router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not registered with Us... Try to Register." });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) { // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        }; // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey, {
            expiresIn: 1800 // 30 minutes in seconds
          },  (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
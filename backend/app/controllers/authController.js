import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authModel from "../models/authModel.js";

class authController {
  static dashboard = async (req, res) => { res.render("index", { page_name: "home", sub_page: "home" }); }

  static addRegister = async (req, res) => {
    if (req.method == "POST") {
      const mulimg = req.files["img"]?.[0].filename;
      const { name, email, phone, password, cpassword, tc } = req.body
      const user = await authModel.findOne({ email: email });

      if (user) {
        res.render("auth/pages/register", { "status": "failed", "message": "Email already exists.!!", });
      } else {
        if (name && email && phone && password && cpassword && tc) {
          if (password === cpassword) {
            try {
              const salt = await bcrypt.genSalt(10);
              const hashPassword = await bcrypt.hash(password, salt);

              const data = await authModel({
                name: name,
                email: email,
                phone: phone,
                img: mulimg,
                password: hashPassword,
                tc: tc ? tc : 0,
              })

              const result = await data.save();
              // console.log("result",result)
              const saved_user = await authModel.findOne({ email: email })

              const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

              res.status(201).render("auth/pages/login", { "status": "success", "message": "Registration Success", "token": token });

            } catch (error) {
              console.log("Register Error - ", error);
              res.render("auth/pages/register", { "status": "failed", "message": "Unable to Register", });
            }
          } else {
            res.render("auth/pages/register", { "status": "failed", "message": "Password not match.!!", });
          }
        } else {
          res.render("auth/pages/register", { "status": "failed", "message": "All Field Required...", });
        }
      }
    } else {
      res.render("auth/pages/register", { page_name: "register" });
    }
  }

  static userLogin = async (req, res) => {
    if (req.method == "POST") {
      try {
        const { email, password } = req.body;
        
        if (email && password) {
          const user = await authModel.findOne({ email: email })
          if (user != null) {
            const isMatch = await bcrypt.compare(password, user.password)
            if ((user.email === email) && isMatch) {
              // Generate JWT Token
              const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
              
              res.render("index", { page_name: "home", sub_page: "home", "status": "success", "message": "Login Success", "token": token });
            } else {
              res.render("auth/pages/login", { "status": "failed", "message": "Email or Password is not Valid" })
            }
          } else {
            res.render("auth/pages/register", { "status": "failed", "message": "You are not a Registered User" })
          }
        } else {
          res.render("auth/pages/login", { "status": "failed", "message": "All Fields are Required" })
        }
      } catch (error) {
        console.log(error)
        res.render("auth/pages/login", { "status": "failed", "message": "Unable to Login" })
      }
    } else {
      res.render("auth/pages/login", { "page_name": "login" });
    }
  }

  static getForgotPassword = async (req, res) => {
    try {
      //   const data = await authModel.find();

      res.render("auth/pages/forgot-password");
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };
}

export default authController;

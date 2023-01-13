import authModel from "../models/authModel.js";

class blogWebController {
  static getRegister = async (req, res) => {
    try {
        const data = await authModel.find();

        res.render("pages/blog/blog", {
          data: data,
          page_name: "blog", 
          sub_page: "allBlog"
        });

      res.render("auth/pages/register");
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

  static addRegister = async (req, res) => {
    if (req.method == "POST") {
      try {
        const mulimg = req.files["img"][0].filename;
        // console.log("file-img", req.files);


        const data = await authModel({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          img: mulimg,
          password: req.body.password,
          cpassword: req.body.cpassword,
          tc: req.body.tc ? req.body.tc : 0,
        });
        console.log(data)

        const user = await authModel.findOne({ email: req.body.email });
        console.log("User-", user)

        if (user) {
          res.render("auth/pages/register", {
            status: "failed",
            message: "Email already exists.!!",
          });
        } else {
          if (req.body.name && req.body.email && req.body.phone && mulimg && req.body.password) {
            if (req.body.password === req.body.cpassword) {
              const result = data.save();
              res.redirect("login");

              console.log("Register Data- ", result);
            } else {
              res.render("auth/pages/register", {
                status: "failed",
                message: "Password not match.!!",
              });
            }
          } else {
            res.render("auth/pages/register", {
              status: "failed",
              message: "All field required.!!",
            });
          }
        }

      } catch (error) {
        console.log("Register Error - ", error);
        res.redirect("register");
      }
    } else {
      res.render("auth/pages/register", {
        page_name: "register",
      });
    }
  };

  static getLogin = async (req, res) => {
    try {
      //   const data = await authModel.find();

      res.render("auth/pages/login");
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };

  static getForgotPassword = async (req, res) => {
    try {
      //   const data = await authModel.find();

      res.render("auth/pages/forgot-password");
    } catch (error) {
      console.log("Get All Data - ", error);
    }
  };
}

export default blogWebController;

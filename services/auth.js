const JWT_SECRET_KEY = "oXj4QGXMmbybR0WjTHjT3QVtBRok4l5waX27mKk4TcaeABq1hiebRWpuut8kzBzjb4YFwOa4jJo0RZlibqgzEjfIgqALMWgFcKej440asyLJaUR9iYB3osCacbjYophx";

const jwt = require("jsonwebtoken");

function getUserJwt(id, email,name, expDays = 7) {
   const tokenData ={
   uid: id,
   email: email,
   name: name,
   role: role,
   time: Date.now
};
   const tokenOptions = {
    expiresIn:Math. expDays *24 * 60 * 60
   };

   const token = jwt.sign(tokenData, JWT_SECRET_KEY, tokenOptions);

   return token;

}
//MIDOLEWARE FOR AUTH COOKIE CHECK
function checkAuthCookie(req, res, nex) {
   const token = req.cookies("auth");
   console.log("COOKIE CHECK",token);
   const result = jwt.verify(token, JWT_SECRET_KEY);
   console.log("TOKEN CHECK",result);
}

module.export = {
    getUserJwt,
    checkAuthCookie
};
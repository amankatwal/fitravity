import express from "express";
import router from "./components/routes.js";
import cors from "cors";
import session from "express-session";
import passport from "passport";

const app = express();
const port = 3000;

app.use(session({
  secret : "FITRAVKEY",
  resave: false,
  saveUninitialized : false,
  cookie: {
    secure: false,         
    maxAge: 24 * 60 * 60 * 1000 
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json())

 app.use(cors({origin: "http://localhost:5173",
  credentials : true,
 }))
  app.use("/", router);

app.listen(port, () =>{ console.log(`app is running on port ${port}`);
});
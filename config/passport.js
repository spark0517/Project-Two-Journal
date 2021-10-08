const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET, 
      callbackURL: process.env.GOOGLE_CALLBACK,
    },

    function (accessToken, refreshToken, profile, cb) {

      User.findOne({ googleID: profile.id }, function (err, userDoc) {
        if (err) return cb(err); 

        if (userDoc) {

          return cb(null, userDoc); 

        } else {
          const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleID: profile.id,
          });

          newUser.save(function (err) {
            if (err) return cb(err);
            return cb(null, newUser); 
          });

        }
      });
    }
  )
);


passport.serializeUser(function(user, done) { 

  done(null, user.id);

});

passport.deserializeUser(function(id, done) {
  console.log("testing")
  User.findById(id, function (err, userDoc) {
    console.log("userdoc", err, userDoc)
    done(err, userDoc);
  });
});

const TimeValid = (req, res, next) => {
  var today = new Date();
  let auth = true;
  let Day = today.getDay();
  if (9 < today.getHours < 17 && 1 < Day < 5) {
    auth = true;
  } else auth = false;

  if (auth) {
    console.log("authorised");
    next();
  } else {
    res.status(401).send("you are not authorised");
  }
};

// export the function
module.exports = TimeValid;

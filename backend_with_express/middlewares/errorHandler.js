const errorHandler = (err, req, res, next) => {
  if (err.name === "ErrorNotFound") {
    res.status(404).json({
      message: "Error Not Found",
    });
  } else if (err.name === "ErrorUpdate") {
    res.status(402).json({
      message: "Data not found or no changes made ",
    });
  } else if (err.name === "ErrorNotFound") {
    res.status(402).json({
      message: "User Not Found",
    });
  } else if (err.name === "InvalidCredential") {
    res.status(402).json({
      message: "Invalid Email or Password",
    });
  }
};

module.exports = errorHandler;

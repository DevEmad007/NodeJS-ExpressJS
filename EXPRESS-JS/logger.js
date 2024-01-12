const logger = (req,res,next) => {
    const time = new Date().getFullYear();
    const url = req.url;
    const method = req.method;
    console.log({ time,url,method });
    next();
};

module.exports = logger;
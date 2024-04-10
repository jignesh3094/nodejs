const middlware = (req,res,next)=> {
    // if(req.headers.token) {
    //     res.send('login successfully')
    // } else {
    //     res.send('invalid login')
    // }
    next();
}
module.exports = middlware;
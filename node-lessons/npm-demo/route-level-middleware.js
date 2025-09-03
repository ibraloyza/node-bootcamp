// Middleware for auth check


export function checkAuth(req,res,next){
    const token = req.query.token;
    if (token === "12345") {
        next();
    }else{
        res.status(403).send("access denaid")
    }
}
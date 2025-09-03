

export function logger(req,res,next){
    const started = Date.now();
    res.on("finish",()=>{
        const ms = Date.now() - started;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> ${res.statusCode} ${ms}ms`); 
    })
    next();
}
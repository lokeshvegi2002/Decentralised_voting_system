var http=require('http')
http.createServer(
function(req,res)
{
    res.write("world")
    res.end()
}

).listen(8081)
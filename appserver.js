//server.js

//引用node的http模块
var http=require('http');
var url = require('url');
var querystring = require('querystring');

//创建一个服务器并指定请求处理函数
http.createServer(function(req,res){
  //设置返回的请求状态 200位成功 和返回头部及文件编码
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  //向客户端返回内容
  
  console.log("querystring的值" + querystring);
  
  var str = ''; 
  req.on('data', function(thunk){
    str += thunk;
  });
  req.on('end', function(){
    console.log(str);//'name=a&email=b%40b.com'
	if( str!= null){
		console.log('str不为null');
		if(str.indexOf('field1')){
			console.log('包含字符串')
				res.end('包含字符串Hello world ！ 我是node服务器的返回！');

		}else{
			console.log('不包含字符串')
				res.end('不包含字符串 world ！ 我是node服务器的返回！');

		}
	}else{
		console.log('str为null')
	}
    var queryObj = querystring.parse(str);
    console.log( queryObj);//{ name: 'a', email: 'b%40b.com' }
	res.end('22Hello world ！ 我是node服务器的返回！');
})
})
//监听 8888 端口
.listen(8888);
console.log('服务器开启在：http://localhost:8888/');
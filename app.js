var app = require('express')();
var http = require('http').Server(app);

var reqHand = function(req, res){
	res.sendFile(__dirname + '/public/index.html');
}; //request from client, response from server
var reqHand_0 = function(req, res){
	res.sendFile(__dirname + '/public/0.html');
};
var reqHand_1 = function(req, res){
	res.sendFile(__dirname + '/public/1.html');	
};
var reqHand_2 = function(req, res){
	res.sendFile(__dirname + '/public/2.html');	
};
var reqHand_3 = function(req, res){
	res.sendFile(__dirname + '/public/3.html');	
};
var reqHand_4 = function(req, res){
	res.sendFile(__dirname + '/public/4.html');	
};
var reqHand_5 = function(req, res){
	res.sendFile(__dirname + '/public/5.html');	
};
var reqHand_6 = function(req, res){
	res.sendFile(__dirname + '/public/6.html');	
};

app.get('/', reqHand); // slash gives you main directory
app.get('/no_fux_alien', reqHand_0);
app.get('/2_the_right', reqHand_1);
app.get('/worried_lil_1', reqHand_2);
app.get('/bald_trump_stfu', reqHand_3);
app.get('/he_means_business', reqHand_4);
app.get('/angry_lil_acne', reqHand_5);
app.get('/tiny_star_struck', reqHand_6);



var port = 9000; 

var serverCallback = function(){
	console.log("got u. running @ " + port);
}

http.listen(port, serverCallback);

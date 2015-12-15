var as = require('https');
var fs = require('fs');
var os = require("os");

var optn =
	{
	pfx: fs.readFileSync('\\\\dfs\\dta\\Data\ Files\\cfg\\iis.network.pfx'),
	passphrase:'RUAll0wed2ManageZs6tm'
	};

var F01 = {
	name: os.hostname(),
	adresse: "10.101.10.101",
	nodeJS: {port: 38001, states: "on"}
};

as.createServer(optn, function (rqst, rspn)
	{
	console.log('requete recu');
	// HTTPS request handler
	F01.url = rqst.url;
	rspn.writeHead(200, {"Context-Type": "text/plain"});
	rspn.write(JSON.stringify(F01));
	rspn.end();
	//rspn.end(os.hostname()+":"+rqst.url+"\n");

	}).listen(38001);
console.log("server listening on 38001")





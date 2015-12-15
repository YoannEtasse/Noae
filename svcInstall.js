var Service = require('node-windows').Service;
 
// Create a new service object 
var svc = new Service({
  name:'nodeJS-servicesF01',
  description: 'service nodeJS on F01',
  script: '\\\\dfs\\dta\\Data\ Files\\web\\app.noae.net\\api1.jss'
});
 
// Listen for the "install" event, which indicates the 
// process is available as a service. 
svc.on('install',function(){
  svc.start();
});

svc.user.domain = 'network';
svc.user.account = 'supervisor';
svc.user.password = 'Koadrya2Marajo';
svc.install();

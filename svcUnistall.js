var Service = require('node-windows').Service;
 
// Create a new service object 
var svc = new Service({
  name:'nodeJS-services',
  script: require('path').join(__dirname,'app.js')
});
 
// Listen for the "uninstall" event so we know when it's done. 
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});
 
// Uninstall the service. 
svc.user.domain = 'network';
svc.user.account = 'supervisor';
svc.user.password = 'Koadrya2Marajo';
svc.uninstall();
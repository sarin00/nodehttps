const os = require('os');

// Get Platform
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU core info
//console.log(os.cpus());

// Free memory 
console.log(os.freemem());

// Total memory 
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptimr
console.log(os.uptime());
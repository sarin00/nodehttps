const path = require('path');

// Directory name 
console.log(path.dirname(__filename));

// Create a path object
console.log(path.parse(__filename));

// Concatenate paths
//console.log(path.join(__dirname, 'testdirectory', 'testfile.html'));
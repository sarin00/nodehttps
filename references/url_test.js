const url = require('url');

const testurl = new URL('https://example.com:443/hello.html?id=100&status=active');

// Serialized URL
console.log(testurl.href);

// Host (root) domain
console.log(testurl.host);

// Hostname, without a port
console.log(testurl.hostname);

// Pathname
console.log(testurl.pathname);

// Serialized querry
console.log(testurl.search);

// Params object
console.log(testurl.searchParams);

// Add params
testurl.searchParams.append('date', '17012023');

// Loop through params
testurl.searchParams.forEach((value, name1) => {
    return console.log(`${name1}, ${value}`);
});
const fs = require('fs');
const path = require('path');

// Create a folder
fs.mkdir(path.join(__dirname, 'testfolder'), {}, err => {
    if (err) throw err;
    console.log('Folder was created...');
});

// Create and write to file
fs.writeFile(path.join(__dirname, 'testfolder', 'newfile.txt'), 'This file was automatically created by fs_test.js', err => {
    if (err) throw err;
    console.log('newfile.txt was created...');

    // Append text to a file
    fs.appendFile(path.join(__dirname, 'testfolder', 'newfile.txt'), '\nThis line was added as a result of appendfile function', err => {
        if (err) throw err;
        console.log('new text was appended');
    });

    // Read a file
    fs.readFile(path.join(__dirname, 'testfolder', 'newfile.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
    });
});

// Rename a file
fs.rename(path.join(__dirname, 'testfolder', 'newfile.txt'), path.join(__dirname, 'testfolder', 'renamed.txt'), (err) => {
    if (err) throw err;
    console.log('The file was successfuly renamed');
});


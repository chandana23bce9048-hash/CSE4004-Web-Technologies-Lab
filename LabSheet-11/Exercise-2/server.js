// Import File System module
const fs = require('fs');

// Step 1: Create a new file
fs.writeFile('example.txt', 'Hello, this is the initial content.\n', (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created successfully.');

    // Step 2: Read the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content after creation:\n', data);

        // Step 3: Append data to file
        fs.appendFile('example.txt', 'This is appended content.\n', (err) => {
            if (err) {
                console.error('Error appending file:', err);
                return;
            }
            console.log('Data appended successfully.');

            // Step 4: Read again after append
            fs.readFile('example.txt', 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading file:', err);
                    return;
                }
                console.log('File content after appending:\n', data);

                // Step 5: Delete the file
                fs.unlink('example.txt', (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                        return;
                    }
                    console.log('File deleted successfully.');
                });
            });
        });
    });
});
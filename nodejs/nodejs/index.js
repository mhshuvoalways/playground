// 01.Introduction to Nodejs
// Node is single threaded, non blocking and event deriven. It is good for highly extensible(very secure), data intensive(crud operate) and real time. It is also a compiler.




// 02. NodeJS Module System
// 01. Intro to NodeJS
// console.log('Hello world')
// document object is important of window object and process object is important of global object
// console.log(__dirname)
// console.log(__filename)
// console.log(exports)
// console.log(require)



// 02. What is global object
// console.log(global.a)



// 3. What is Module
// every file is a module
// console.log(module)



// 04. Creating Our First Module
// const add = (a, b) => a + b
// const sub = (a, b) => a - b
// // module.exports = add // overwrite exports object
// // module.exports = {
// //     add, sub
// // }
// module.exports.add = add
// // module.exports.sub = (a, b) => a - b
// exports.sub = (a, b) => a - b //shorthand
// console.log(exports)



// 5. Import Our Created Module
// commonjs module system
// relative path and absolute path
// const math = require('./math');//relative path
// const { add, sub } = require('./math'); //relative path
// console.log(add(3, 4))



// 6. NodeJS Path Module
// const path = require('path')
// console.log(path)
// console.log(__filename) // extract
// console.log(path.basename(__filename))// extract
// console.log(path.basename(__dirname))// extract
// console.log(path.extname(__filename))// extract

// let obj  = {
//     dir: 'user/local',
//     name: 'test',
//     ext: '.js'
// }
// console.log(path.format(obj))
// console.log(path.parse(__filename))
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute('./math'))
// console.log(path.join('/foo', 'bar', 'baz/asdf'))
// console.log(path.resolve('foo', 'bar'))



// 7. NodeJS OS Module
// const os = require('os')
// hardware
// console.log(os.arch())
// console.log(os.cpus())
// console.log(os.freemem())
// console.log(os.networkInterfaces())

// software
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.type())
// console.log(os.userInfo())



// 8. File system

// writeFile
// const fs = require('fs')
// const obj = {
//     name: 'MH Shuvo',
//     email: 'mhshuvo@gmail.com'
// }
// const data = JSON.stringify(obj)
// fs.writeFile('./test.json', data, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Success')
//     }
// })


// Read File 
// const fs = require('fs')
// fs.readFile('./test.json', (err, data) => {
// if(err) {
//     console.log(err)
// } else {
//     console.log(JSON.parse(data))
// }
// })


// Delete File
// const fs = require('fs')
// fs.unlink('./test.json', (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log('Delete')
//     }
// })


// Updated file
// var fs = require('fs');
// fs.appendFile('test.json', '"This is my text"', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });


// Replaced file
// var fs = require('fs');
// fs.writeFile('test.json', '"This is a test"', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });



// 9. NodeJS Http Module
// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     res.end('<h1>Hello Nodejs you are awsome</h1>')
// })
// server.listen(4000, () => {
//     console.log('Server is running on 4000')
// })
// console.log(server)




// 10. Fun Project with File And HTTP Module
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     fs.readFile('./index.html', (err, data) => {
//         if(err) {
//             console.log(err)
//         } else {
//             res.write(data)
//             res.end()
//         }
//     })
// })

// server.listen(4000, () => {
//     console.log('Server is running on 4000')
// })





// 3. Node Package Manager (third party module package)
// This module was just npm intro
const fetch = require('node-fetch');

// Define the API endpoint and parameters
const url = 'https://api.openai.com/v1/chat/completions';
const headers = {
  'Authorization': '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',
  'Content-Type': 'application/json'
};
const data = {
  'messages': [
    {'role': 'system', 'content': 'You: Hello'},
    {'role': 'user', 'content': 'User: How can I use markdown with ChatGPT?'}
  ],
  'temperature': 0.8,
  'max_tokens': 100
};

// Send the API request
fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(responseData => {
  // Extract the generated message from the API response
  const generatedMessage = responseData.choices[0].message.content;

  // Format the generated message as markdown
  const markdown = `ChatGPT: ${generatedMessage}`;

  // Print or use the markdown formatted output as needed
  console.log(markdown);
})
.catch(error => console.error(error));

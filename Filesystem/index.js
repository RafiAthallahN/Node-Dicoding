const fs = require('fs');
//Async
 
// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// };
 
// fs.readFile('note.txt', 'UTF-8', fileReadCallback);

//Sync
 
const data = fs.readFileSync('note.txt', 'UTF-8');
console.log(data);

//ReadStream
// const readableStream = fs.createReadStream('./note.txt', {
//     highWaterMark: 10
// });
 
// readableStream.on('readable', () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error) {
//         // catch the error when the chunk cannot be read.
//     }
// });
 
// readableStream.on('end', () => {
//     console.log('Done');
// });

//WriteStream 
// const writableStream = fs.createWriteStream('note.txt');
 
// writableStream.write('Ini merupakan teks baris pertama!\n');
// writableStream.write('Ini merupakan teks baris kedua!\n');
// writableStream.end();
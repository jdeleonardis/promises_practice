const util = require('util');
const fs = require('fs');

const readData = util.promisify(fs.readFile);
const writeData = util.promisify(fs.writeFile);

const readWriteFileData = function() {
    return readData("db.json", "utf8")
    .then (notes => {
        let parsedNotes = JSON.parse(notes);
        const newNote = {title: "789", text: "789", id: "123123123"};
        parsedNotes.push(newNote);
        //console.log(parsedNotes);
        return parsedNotes
    })
    .then (newWrittenData => {
        writeData("testdb.json", JSON.stringify(newWrittenData));
    })

}

const updateFileData = function () {
    return readData("testdb.json", "utf8")
    .then (notes => {
        let parsedNotes = JSON.parse(notes);
        
        parsedNotes = parsedNotes.filter(function (note) {      
            return note.title !== "1234"            
        }) 

        return parsedNotes
    })
    .then (newWrittenData => {
       writeData("testdb.json", JSON.stringify(newWrittenData));
    })
};

// readWriteFileData();
// updateFileData();

// function process() {
//     readWriteFileData()
//     .then (function(){
//         //console.log(data);
//         updateFileData();
//     });
//     // updateFileData();

// // }

// async function process() {
//     await readWriteFileData()
//     .then (function(){
//         //console.log(data);
//         updateFileData();
//     });

// }

//process();

// async function testFunc() {
//     try {
//         const read = await readWriteFileData();
//         const update = await updateFileData();
//         // const role = guild.roles.find(r => r.name === "Idiot Subscribers");
//         // await member.addRole(role);
//         // await channel.send("Success!");
//     } catch (e) {
//         console.error(e);
//     }
// }

//async();
//testFunc();

async function read() {
    try {
        const read = await readWriteFileData();
        const write = await updateFileData();
    }
    catch (e) {
        console.error(e);
    }
}

async function write() {
    try {
        const write = await updateFileData()
    }
    catch (e) {
        console.error(e);
    }
}

read();
write();
//********************************************************************** */

// const readWriteFileData = function() {
//     return new Promise(function(resolve, reject) {

//         readData("db.json", "utf8")
//         .then (notes => {
//             let parsedNotes = JSON.parse(notes);
//             const newNote = {title: "789", text: "789", id: "123123123"};
//             parsedNotes.push(newNote);
//             return parsedNotes
//         })
//         .then (newWrittenData => {
//             writeData("testdb.json", JSON.stringify(newWrittenData));
//         })

//         resolve("made it");
//     });

// }

// const updateFileData = function () {
//     return readData("testdb.json", "utf8")
//     .then (notes => {
//         let parsedNotes = JSON.parse(notes);
        
//         parsedNotes = parsedNotes.filter(function (note) {      
//             return note.title !== "1234"            
//         }) 

//         return parsedNotes
//     })
//     .then (newWrittenData => {
//         writeData("testdb.json", JSON.stringify(newWrittenData));
//     })
// };


// function process() {
//     readWriteFileData()
//     .then (function(data){
//         console.log(data);
//         updateFileData();
//     });
//     // updateFileData();

// }

// process();

//****************************************************** */



// const readWriteFileData = function() {
//       return new Promise(function(resolve, reject) {
  
//           readData("db.json", "utf8")
//           .then (notes => {
//               let parsedNotes = JSON.parse(notes);
//               const newNote = {title: "789", text: "789", id: "123123123"};
//               parsedNotes.push(newNote);
//               return parsedNotes
//           })
//           .then (newWrittenData => {
//               writeData("testdb.json", JSON.stringify(newWrittenData));
//           })
//           .then (() => {
//               let newReadData = readData("db.json", "utf8")
//               return newReadData
//           })
//           .then (newNotes => {
//             let parsedNotes = JSON.parse(newNotes);
//             console.log(parsedNotes);

//             parsedNotes = parsedNotes.filter(function (newNotes) {      
//                 return newNotes.title !== "1234"            
//             }) 
    
//             return parsedNotes
//           })
//           .then (newNewWrittenData => {
//               console.log(newNewWrittenData)
//             writeData("testdb.json", JSON.stringify(newNewWrittenData));
//           })          



//           resolve("made it");
//       });
  
//   }
  
//   const updateFileData = function () {
//       return readData("testdb.json", "utf8")
//       .then (notes => {
//           let parsedNotes = JSON.parse(notes);
          
//           parsedNotes = parsedNotes.filter(function (note) {      
//               return note.title !== "1234"            
//           }) 
  
//           return parsedNotes
//       })
//       .then (newWrittenData => {
//           writeData("testdb.json", JSON.stringify(newWrittenData));
//       })
//   };
  
  
//   function process() {
//       readWriteFileData()
//       .then (function(data){
//           console.log(data);
//       });
  
//   }
  
//   process();
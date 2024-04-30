const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        console.log(`Number of students: ${lines.length - 1}`);
        let countCs = 0;
        let countSwe = 0;
        const csStudents = [];
        const sweStudents = [];
        for (let i = 1; i < lines.length; i += 1) {
          const val = lines[i].split(',');
          const name = val[0];
          const dep = val[3].trim();
          if (dep === 'CS') {
            countCs += 1;
            csStudents.push(name);
          }
          if (dep === 'SWE') {
            countSwe += 1;
            sweStudents.push(name);
          }
        }
        console.log(`Number of students in CS: ${countCs}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${countSwe}. List: ${sweStudents.join(', ')}`);
        resolve();
      }
    });
  });
}

module.exports = countStudents;

const readline = require('readline');

const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const text = 'Welcome to Holberton School, what is your name?\n';

line.question(text, (name) => {
  console.log('Your name is:', name);
  console.log('This important software is now closing');
  line.close();
});

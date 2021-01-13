const string1 = "|/-\\|/-\\|";
let counter = 100;
for (let char of string1) {
  setTimeout( () => {
    process.stdout.write('\r' + char + "   ");
  }, counter += 200);
};
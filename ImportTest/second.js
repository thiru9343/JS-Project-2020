//var myartilces = require('./first')
import myartilces from './first';

console.log(myartilces.latestItem);

console.log(myartilces.find('emp'))


/* Transpiler: Transpiler will convert the code to browser/terminal understandable
  for that we need to add a package called "babel"
  so, to include a package type in terminal type
  >npm init -y       -->it will add a package
  after this, you need to install other packages
  >npm i @babel/core @babel/register @babel/preset-env



  BABEL IS TRANSPILER
*/
// Global context
console.log("Window (In browser)", this);

// Inside an object method
const user = {
  name: "Rama",
  greet() {
    console.log("Hello, ", this.name);
  },
};
user.greet(); // this ==> user - "Hello, Rama"

// Inside a regular function
function test() {
  console.log(this);
}
test(); // window in browser and undefined in strict mode

// Arrow functions
const obj = {
  name: "Rama",
  show: () => {
    console.log(this); // window
  },
};
obj.show();

// Event listeners
button.addEventListener("click", function () {
    console.log(this); // button element
}); 

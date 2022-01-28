// function() constructor

function Person(name) {
  this.name = name
  this.walk = () => {
    return this.name + " está andando"
  }
}

const gabriel = new Person('Gabriel')

console.log(gabriel.walk())
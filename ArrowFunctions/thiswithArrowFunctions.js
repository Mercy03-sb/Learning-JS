const student = {
    name: "Parth",
    marks: 95,
    prop: this,
    getName: function(){
        console.log(this); // Here 'this' will be the object calling the function
        return this.name;
    },
    getMarks: () => {
        console.log(this); // but here 'this' will be the parents scope(lexical scope) here 'this' is window object
        return this.marks; // for arrow function its this would be its parent ka this
    },
    getInfo1: function(){
        setTimeout(() => {
            console.log(this); // Student
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function() {
            console.log(this); // Timeout is the 'this' as it has called this function
        }, 2000);
    }
}
// student.getName()
// student.getMarks()
// student.getInfo1()
// student.getInfo2()
console.log(this) // 'this' = Window object
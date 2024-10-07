const student = {
    name: "Parth",
    age : 19,
    eng: 94,
    math: 95,
    phy: 95,
    getAvg(){
        let avg = Math.floor((this.eng + this.math + this.phy)/3);
        console.log(`${this.name} has got average marks = ${avg}`);
    }
}
student.name = "Bhawana";
student.getAvg();
let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"]
let [winner, runnerup, ...others] = names
// winner aur runnerup first aur second element ko store karega and others will be the array of rest of the elements
console.log(winner)
console.log(runnerup)
console.log(others)

// Destructuring for Objects
const student = {
    name: "Karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "Maths"],
    username: "karan@123",
    password: "abc",
    // city: "Pune"
}

let {username: user, password, city: place = "Mumbai"} = student // Agar city nahi hogi student mein toh city mein mumbai aajaayega warna jo store hai woh aayega
// username key ko search karne ke liye hai aur uski value user variable mein store hogi
// agar sirf key likhe toh key naam ke hi variable mein store ho jaayega
console.log(user)
console.log(password)
console.log(place)
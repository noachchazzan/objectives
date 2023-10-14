function outer() {
    let outerVar = "I'm kept alive!!!";
    let i = 0;
    let data = {
        name: "Noach",
        man: "simple",
        sex: "male",
        cuckold: true,
        age: 29, 
        index: 3.142,
        income: 150000, 
        city: "NYC",
        bank: 100345
    }

    function inner() {
        console.log(outerVar);
        console.log("It is ALIVE!!!!!!");
        i++;
        data.income+=5000;
        console.log(i);
        console.log(data);
        console.log("The Cuckold's income increased by $5000 and is now $"
        + data.income);
    }
    return inner;
}
const myClosure = outer();
myClosure();
myClosure();
myClosure();
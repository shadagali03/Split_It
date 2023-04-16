export class Item {
    constructor(name, cost, people) {
        this.name = name;
        this.cost = cost;
        this.people = people;
        this.numBuying = people.length;
    }
}
// Testing

export class Person {
    constructor(name, initial, uid, count=1) {
        this.name = name;
        this.initial = initial;
        this.uid = uid;
        this.totalSpent = 0;
        this.itemsPurchased = [];
        this.count = count;
    }

    addItem(item) {
        this.itemsPurchased.push([item.name, item.cost]);
        if (this.count === 1) {
            this.totalSpent += item.cost / item.numBuying;
        } else {
            this.totalSpent += item.cost / this.count;
        }
    }

    generateTotal() {
        // console.log(this.name + '\n------------------------------');
        // const labels = ["Item", "Cost"];
        // process.stdout.write(`${labels[0]} `.padEnd(15));
        // console.log(`${labels[1]} `.padStart(10));
        // console.log('------------------------------');
        // for (let item of this.itemsPurchased) {
        //     process.stdout.write(`${item[0]} `.padEnd(15));
        //     console.log(`${item[1]} `.padStart(10));
        // }
        // console.log();
        // console.log(this.name + "'s Total: " + this.totalSpent.toFixed(2) + "\n");
        return {"itemsPurchases" : this.itemsPurchased, "totalSpent" : this.totalSpent}
    }

    addToTotal(amt) {
        this.totalSpent += amt;
    }
}

export class Group {
    constructor(group) {
        this.group = group;
        this.groupTotal = group.length;
        // this.group.push(new Person('Everyone', 'E', this.groupTotal));
    }

    addPerson(person) {
        this.group.push(person);
    }

    getPerson(initial) {
        console.log(initial)
        for (let person of this.group) {
            if (person.initial === initial) {
                return person;
            }
        }
        console.log("wrong")
        return new Person("error", "error", 'f43434ffgffsda435')
    }


    calcPrices(breakdown) {
        for (let item of breakdown) {
            for (let initial of item.people) {
                console.log(initial)
                console.log(this.getPerson(initial))
                console.log(item)
                this.getPerson(initial).addItem(item);
            }
        }
    }
}

export function parseFile(data=[]) {
    const breakdown = [];
    for (let line of data) {
        if (line.length !== 0) {
            console.log("here1", line)
            breakdown.push(new Item(line[0], parseFloat(line[1]), line[2]));
        }
        
    }
    return breakdown;
}

export function calculate(your_group, breakdown) {
    your_group.calcPrices(breakdown);
    let everything = {}
    var total = 0
    for (let person of your_group.group) {
        everything[person.uid] = person.generateTotal()
        // everything.push(person.generateTotal())
        total += person.totalSpent;
    }
    return {"groupBreakdown" : everything, "groupTotal" : total};
}

export function createGroup() {

}

// if (require.main === module) {
//     const group = new Group([
//         new Person('Sarang', 'S'),
//         new Person('Arnov', 'A'),
//         new Person('Dev', 'D'),
//         new Person('Sagar', 'P'),
//         new Person('Sahil', 'G')
//     ]);

//     const breakdown = parseFile();
//     group.calcPrices(breakdown);

//     console.log("\nGroup Breakdown");
//     console.log("======================================\n");

//     let total = 0;
//     for (let person of group.group) {
//         person.generateTotal();
//         total += person.totalSpent;
//     }
//     console.log("Total Bill: " + total.toFixed(2));
// }

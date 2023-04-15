class Item {
    constructor(name, cost, people) {
        this.name = name;
        this.cost = cost;
        this.people = people;
        this.numBuying = people.length;
    }
}

class Person {
    constructor(name, initial, count=1) {
        this.name = name;
        this.initial = initial;
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
        console.log(this.name + '\n------------------------------');
        const labels = ["Item", "Cost"];
        process.stdout.write(`${labels[0]} `.padEnd(15));
        console.log(`${labels[1]} `.padStart(10));
        console.log('------------------------------');
        for (let item of this.itemsPurchased) {
            process.stdout.write(`${item[0]} `.padEnd(15));
            console.log(`${item[1]} `.padStart(10));
        }
        console.log();
        console.log(this.name + "'s Total: " + this.totalSpent.toFixed(2) + "\n");
    }

    addToTotal(amt) {
        this.totalSpent += amt;
    }
}

class Group {
    constructor(group) {
        this.group = group;
        this.groupTotal = group.length;
        this.group.push(new Person('Everyone', 'E', this.groupTotal));
    }

    addPerson(person) {
        this.group.push(person);
    }

    getPerson(initial) {
        for (let person of this.group) {
            if (person.initial === initial) {
                return person;
            }
        }
    }

    addEveryoneTotal() {
        for (let person of this.group) {
            if (person.initial !== 'E') {
                person.addToTotal(this.getPerson('E').totalSpent);
            }
        }
    }

    calcPrices(breakdown) {
        for (let item of breakdown) {
            for (let initial of item.people) {
                this.getPerson(initial).addItem(item);
            }
        }
        this.addEveryoneTotal();
    }
}

function parseFile(file='groceriesList.txt') {
    const breakdown = [];
    const fs = require('fs');
    const data = fs.readFileSync(file, 'utf8');
    const lines = data.split(/\r?\n/);
    for (let line of lines) {
        const brokenItem = line.split(' ');
        breakdown.push(new Item(brokenItem[0], parseFloat(brokenItem[1]), brokenItem[2]));
    }
    return breakdown;
}

if (require.main === module) {
    const group = new Group([
        new Person('Sarang', 'S'),
        new Person('Arnov', 'A'),
        new Person('Dev', 'D'),
        new Person('Sagar', 'P'),
        new Person('Sahil', 'G')
    ]);

    const breakdown = parseFile();
    group.calcPrices(breakdown);

    console.log("\nGroup Breakdown");
    console.log("======================================\n");

    let total = 0;
    for (let person of group.group) {
        person.generateTotal();
        total += person.totalSpent;
    }
    console.log("Total Bill: " + total.toFixed(2));
}

class Character {
	constructor(name, strength, hitPoints) {

		if (!name || !strength || !hitPoints) {
			throw "All Character attributes must be provided";
		}

		this.name = name;
		this.strength = strength;
		this.hitPoints = hitPoints;
	}

  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive(opponent) {
	if (opponent.hitPoints >= 0) {
		console.log(`${opponent.name} is still alive.`)
		console.log("---------------------");
	} else {
		console.log(`${opponent.name} has kicked the bucket.`);
		console.log(`GAME OVER`);
		console.log("---------------------");
		process.exit();
	}
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
	// console.log which character was attacked and how much damage was dealt
	console.log(`${this.name} attacked ${opponent.name} for -${this.strength} many hitpoints`)
	console.log(`${opponent.name} now has ${opponent.hitPoints} left`)
	opponent.hitPoints -= this.strength;
	// Then, change the opponent's hitPoints to reflect this
	this.isAlive(opponent);
  }
}

// Create two unique characters using the "character" class

try {
	const jameson = new Character("Jameson", 10, 110);
	const weredolf = new Character("Weredolf", 15, 70);

	letThemFight(jameson, weredolf);

	// Create an interval that alternates attacks every 2000 milliseconds

	function letThemFight(char1, char2) {
		const p1 = char1;
		const p2 = char2;
		let p1Switch = 1;
		let p2Switch = -1;
		setInterval(function(){ 
			if (p1Switch === 1) {
				p1.attack(p2);
			} else if (p2Switch === 1) {
				p2.attack(p1);
			}
			p1Switch *= -1;
			p2Switch *= -1;
		}, 2000);
	} 
} catch (e) {
	console.error(e);
}
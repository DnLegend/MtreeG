addLayer("white", {
    name: "Life Gained", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 0,
    startData() { return {
      unlocked: true,
  	  points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires(){
      let req = new Decimal(1)
      req = 5^(player.green.points)
      return req
    }, // Can be a function that takes requirement increases into account
    resource: "Life Gained", // Name of prestige currency
    baseResource: "White Mana", // Name of resource prestige is based on
    baseAmount() {
      return new Decimal(1)
    }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    upgrades: {
    rows: 2,
    cols: 5,
    11: {
      title: "Play a Plains",
      type: "Land",
      description: "Generate 1 White Mana per second",
      cost: new Decimal(1),
      unlocked() {return player.white.unlocked},
    },
  },
  layerShown(){return true}
}),
addLayer("green", {
    name: "Creatures", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 1,
    startData() { return {
      unlocked: true,
		  points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "Creatures", // Name of prestige currency
    baseResource: "Green Mana", // Name of resource prestige is based on
    baseAmount() {
        return new Decimal(1)
    }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    upgrades: {
      rows: 2,
      cols: 5,
      11: {
        title: "Play a Forest",
        type: "Land",
        description: "Generate 1 Green Mana per second",
        cost: new Decimal(1),
        unlocked() {return player.green.unlocked},
      },
      12: {
        title: "Llanowar Elves",
        type: "Land",
        description: "Generate 1 Green Mana per second",
        cost() {return new Decimal(10)},
        unlocked() {return player.green.unlocked},
      },
      13: {
        title: "Llanowar Tribe",
        type: "Elf",
        description: "Generate 3 Green Mana per second",
        cost() {return new Decimal(30)},
        unlocked() {return hasUpgrade("green", 11)},
      },
      14: {
        title: "Elvish Archdruid",
        type: "Elf",
        description: "Double the effect of all Elves",
        cost() {return new Decimal(100)},
        unlocked() {return hasUpgrade("green", 12)},
      }
    },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
}),
addLayer("empty", {
  position: 1,
  row: 1,
  layerShown: false
}),
addLayer("blue", {
    name: "Cards Drawn", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "U", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 1,
    startData() { return {
        unlocked: true,
    points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "Cards Drawn", // Name of prestige currency
    baseResource: "Blue Mana", // Name of resource prestige is based on
    baseAmount() {
        return new Decimal(1)
    }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    upgrades: {
      rows: 2,
      cols: 5,
      11: {
        title: "Play an Island",
        type: "Land",
        description: "Generate 1 Blue Mana per second",
        cost: new Decimal(1),
        unlocked() {return player.blue.unlocked},
      },
    },
    layerShown(){return true}
}),
addLayer("red", {
        name: "Creatures", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        row: 2,
        startData() { return {
            unlocked: true,
    		points: new Decimal(0),
        }},
        color: "#4BDC13",
        requires: new Decimal(5), // Can be a function that takes requirement increases into account
        resource: "Creatures", // Name of prestige currency
        baseResource: "Red Mana", // Name of resource prestige is based on
        baseAmount() {
            return new Decimal(1)
        }, // Get the current amount of baseResource
        type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: 2, // Prestige currency exponent
        upgrades: {
          rows: 2,
          cols: 5,
          11: {
            title: "Play a Mountain",
            type: "Land",
            description: "Generate 1 Red Mana per second",
            cost: new Decimal(1),
            unlocked() {return player.red.unlocked},
    },
  },
  layerShown(){return true}
}),
addLayer("black", {
    name: "Creatures", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 2,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "Creatures", // Name of prestige currency
    baseResource: "Black Mana", // Name of resource prestige is based on
    baseAmount() {
        return new Decimal(1)
    }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    upgrades: {
      rows: 2,
      cols: 5,
      11: {
        title: "Play a Swamp",
        type: "Land",
        description: "Generate 1 Black Mana per second",
        cost: new Decimal(1),
        unlocked() {return player.black.unlocked},
      },
    },
    layerShown(){return true}
})

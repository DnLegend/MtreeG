addLayer("green", {
    name: "Creatures", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
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
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})

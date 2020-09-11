import PoisonTypes from "../../../helper/PoisonTypes";

export default [
    {
        name: 'Assassin\'s Blood',
        type: PoisonTypes.INGESTED,
        pricePerDose: '150 gp',
        effects: 'A creature subjected to this poison must make a DC 10 Con saving throw.' +
        ' On a failed save, it takes 1d12 poison damage and is poisoned for 24 hours. ' +
        'On a successful save, the creature takes half damage and isn\'t poisoned',
    },
    {
        name: 'Burth Other Fumes',
        type: PoisonTypes.INHALED,
        pricePerDose: '500 gp',
        effects: 'A creature subjected to this poison must succeed on a DC 13 Con saving throw or' +
        ' take 3d6 poison damage, and must repeat the saving throw at the start of each ' +
        'of its turns. On each successive failed save, the creature takes 1d6 poison damage.' +
        ' After three successful saves, the poison ends.',
    },
    {
        name: 'Essence of Ether',
        type: PoisonTypes.INHALED,
        pricePerDose: '300 gp',
        effects: 'A creature subjected to this poison must succeed on a DC 15 Con saving' +
        ' throw or become poisoned for 8 hours. The poisoned creature is unconscious. ' +
        'The creature wakes up if it takes damage or if another creature spends an action ' +
        'to shake it awake.',
    },
    {
        name: 'Kikimore Venom',
        type: PoisonTypes.INJURY,
        pricePerDose: '450 gp',
        effects: 'This poison must be harvested from a dead or incapacitated kikimore warrior. ' +
        'A creature subjected to this poison must make a DC 14 Con saving throw. On a failed save, it ' +
        'takes 2d12 poison damamge and is poisoned. The poisoned creature must repeat the saving throw ' +
        'every 24 hours, taking 2d12 on a failed save. Until this poison ends, the damage the poison ' +
        'deals can\'t be healed by any means. The poison lasts unitl it is cured by a lesser restoration ' +
        'spell or similar magic.',
        harvestable: true,
    },
    {
        name: 'Malice',
        type: PoisonTypes.INHALED,
        pricePerDose: '250 gp',
        effects: 'A creature subjected to this poison must succeed on a DC 15 Con saving ' +
        'throw or become poisoned for 1 hour. The poisoned creature is blinded.',
    },
    {
        name: 'Midnight Tears',
        type: PoisonTypes.INGESTED,
        pricePerDose: '1,500 gp',
        effects: 'A creature that ingests this poison suffers no effect until the stroke ' +
        'of midnight. If the poison has not been neutralized before then, the creature must ' +
        'succeed on a DC 17 Con saving throw, taking 9d6 poison damage on a failed save, or ' +
        'half as much damage on a successful one.',
    },
    {
        name: 'Oil of Taggit',
        type: PoisonTypes.CONTACT,
        pricePerDose: '400 gp',
        effects: 'A creature subjected to this poison must succeed on a DC 13 Con saving ' +
        'throw or become poisoned for 24 hours. The poisoned creature is unconscious. It ' +
        'wakes up if the creature takes damage.',
    },
    {
        name: 'Pale Tincture',
        type: PoisonTypes.INGESTED,
        pricePerDose: '250 gp',
        effects: 'A creature subjected to this poison must succeed on a DC 16 Con saving ' +
        'throw or take 1d6 poison damage and become poisoned. The poisoned creature must ' +
        'repeat the saving throw every 24 hours, taking 1d6 poison damage on a failed save. ' +
        'Until this poison ends, the damage the poison deals can\'t be healed by any means. ' +
        'After seven successful saving throws, the effect ends and the creature can heal ' +
        'normally.',
    },
    {
        name: 'Serpent Venom',
        type: PoisonTypes.INJURY,
        pricePerDose: '200 gp',
        effects: 'This poison must be harvested from a dead or incapacitated giant poisonous ' +
        'snake. A creature subjected to this poison must succeed on a DC 11 Con saving throw, ' +
        'taking 3d6 poison damage on a failed save, or half as much damage on a successful one.',
        harvestable: true,
    },
    {
        name: 'Torpor',
        type: PoisonTypes.INGESTED,
        pricePerDose: '600 gp',
        effects: 'A creature subjected to this poison must succeed on a DC 15 Con saving ' +
        'throw or become poisoned for 4d6 hours. The poisoned creature is incapacitated.',
    },
    {
        name: 'Truth Serum',
        type: PoisonTypes.INGESTED,
        pricePerDose: '150 gp',
        effects: 'A creature subjected to this poison must succeed on a DC 11 Con saving ' +
        'throw or become poisoned for 1 hour. The poisoned creature can\'t knowingly speak ' +
        'a lie, as if under the effect of a zone of truth spell.',
    },
    {
        name: 'Wyvern Poison',
        type: PoisonTypes.INJURY,
        pricePerDose: '1,200 gp',
        effects: 'This poison must be harvested from a dead or incapacitated wyvern. A ' +
        'creature subjected to this poison must make a DC 15 Con saving throw, taking ' +
        '7d6 poison damamge on a failed save, or half as much damage on a successful one.',
        harvestable: true,
    }
]

// {
//     name: '',
//     type: PoisonTypes.INGESTED,
//     pricePerDose: ' gp',
//     effects: '',
// }
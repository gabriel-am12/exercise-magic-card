const magic = require('../src/magic.js');
const { trybeSimulator } = require('../simulator/simulator.js');

const expected = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: [ 'Creature' ],
  subtypes: [ 'Human', 'Cleric' ],
  rarity: 'Uncommon'
};

describe(' Testa a função getMagicCard', () => {
  it('Deve retornar um objeto com as propriedades esperadas', () => {
    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    const response = await getMagicCardSimulator('130550');

    // implemente seus testes aqui    
   
  });
});
const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  favoriteCards.splice(4, favoriteCards.length - 4);// implemente sua função aqui
}

describe(' Testa a função getMagicCard', () => { 

  afterEach(() => {
    retrievesFavoriteCards();
  });

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await getMagicCard('130553');

    expect(favoriteCards).toHaveLength(5);// implemente seus testes aqui
    expect(favoriteCards[4].name).toEqual('Beacon of Immortality');

    await getMagicCard('130554');

    expect(favoriteCards).toHaveLength(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
     expect.assertions(1);

     expect(favoriteCards).toHaveLength(4);
     //implemente seus testes aqui

  });
});

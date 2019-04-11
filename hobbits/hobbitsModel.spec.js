const Hobbits = require('./hobbitsModel.js')
const db = require('../data/dbConfig.js');

// what are we testing
// returns 201
// inserts the hobbit
// 
describe('hobbits model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate(); // deletes data from previous test
  })

  describe('insert()', () => {
    it('should insert the provided hobbit', async () => {
      await Hobbits.insert({ name: 'gaffer' });// if large object create elsewhere and pass in
      await Hobbits.insert({ name: 'Aragorn' });// if large object create elsewhere and pass in
      await Hobbits.insert({ name: 'Bilbo' });

      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(3);
    })

    it('should insert the provided hobbit', async () => {
      let hobbit = await Hobbits.insert({ name: 'gaffer' });
      expect(hobbit.name).toBe('gaffer');

      hobbit = await Hobbits.insert({ name: 'sam' });
      expect(hobbit.name).toBe('sam');
    })
  })
})
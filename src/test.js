import assert from 'assert';

describe('Working build', () => {
  it('Should allow object spread operator', () => {
    let obj = { cat: 'cat', bat: 'bat' };
    obj = { ...obj, rat: 'rat' };
    assert.deepStrictEqual(obj, { cat: 'cat', bat: 'bat', rat: 'rat' });
  });
});

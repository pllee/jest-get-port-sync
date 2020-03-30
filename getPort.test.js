const { getFreePort } = require('./index');

it('gets a port sync', () => {
    expect(getFreePort()).toBeGreaterThan(-1);
})

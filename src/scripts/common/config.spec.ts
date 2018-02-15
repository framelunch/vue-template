import * as Configs from './config';

describe('config', () => {
  it('author is string', () => {
    expect(typeof Configs.author === 'string').toBeTruthy();
  });

  it('author is not 0 length', () => {
    expect(Configs.author.length > 0).toBeTruthy();
  });
});

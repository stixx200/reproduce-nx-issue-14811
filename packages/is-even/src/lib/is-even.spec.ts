import { isEven } from './is-even';
import { when } from 'jest-when';

describe('isEven', () => {
  it('should work', () => {
    const spy = jest.fn();
    when(spy).calledWith('foo').mockReturnValue('bar');
    expect(spy('foo')).toEqual('bar');
    expect(spy('unknown')).toBeUndefined();
  });
});

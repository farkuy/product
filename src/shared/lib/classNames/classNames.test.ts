import { classNames } from './classNames';

describe('classnames', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
});

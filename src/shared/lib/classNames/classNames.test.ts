import { classNames } from './classNames';

describe('classnames', () => {
    test('с единственным параметром', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('c доп классами', () => {
        expect(classNames('someClass', {}, ['classOne', 'classTwo'])).toBe('someClass classOne classTwo');
    });

    test('c модом', () => {
        expect(classNames('someClass', { hovered: true })).toBe('someClass hovered');
    });

    test('c 1 false модом', () => {
        expect(classNames('someClass', { hovered: true, absolute: false, fixed: true })).toBe('someClass hovered fixed');
    });

    test('c 1 undefined модом', () => {
        expect(classNames('someClass', { hovered: true, absolute: undefined, fixed: true })).toBe('someClass hovered fixed');
    });
});

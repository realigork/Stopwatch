import React from 'react';
import renderer from 'react-test-renderer';

test('Two values should match', () => {
	let a = 2;
	let b = 2;
	
	expect(a).toEqual(b);
});
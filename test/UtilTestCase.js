
var expect = require('expect.js');
var Util = require('../index').Util;

describe('Util', function()
{
	it('format string', function()
	{
		let format = 'Test format string "{0}" data ordered with "{1}" arguments';
		let formatted = Util.format(format, 'example', 2);
		expect(formatted).to.be('Test format string "example" data ordered with "2" arguments');

		format = 'Test a "{2}" string format example data unorder with "{0}" {1}';
		formatted = Util.format(format, 3, 'arguments', 'example');
		expect(formatted).to.be('Test a "example" string format example data unorder with "3" arguments');
	});

	it('string raw bytes', function()
	{
		let raw = [ 65, 32, 114, 97, 119, 32, 115, 116, 114, 105, 110, 103 ];
		let str = 'A raw string';
		let buffer = Buffer.from(str);
		let bytes = Array.prototype.slice.call(buffer, 0);

		expect(bytes).to.an(Array);
		expect(bytes).to.eql(raw);
		expect(buffer.toString()).to.be(str);
		expect(buffer).to.an(Buffer);
	});

	it('string cap', function()
	{
		let str = 'A example string not capped';
		expect(Util.strcap(str, str.length - 1)).to.be.equal('A example string not cappe');
		expect(Util.strcap(str, str.length)).to.be.equal(str);
		expect(Util.strcap(str, str.length + 1)).to.be.equal(str);
	});

	it('cap range', function()
	{
		expect(Util.cap(4, 5, 10)).to.be(5);
		expect(Util.cap(5, 5, 10)).to.be(5);
		expect(Util.cap(6, 5, 10)).to.be(6);
		expect(Util.cap(09, 5, 10)).to.be(09);
		expect(Util.cap(10, 5, 10)).to.be(10);
		expect(Util.cap(11, 5, 10)).to.be(10);
	});

	it('cap min number values', function()
	{
		expect(Util.capmin(4, 5)).to.be(5);
		expect(Util.capmin(5, 5)).to.be(5);
		expect(Util.capmin(6, 5)).to.be(6);
		expect(Util.capmax(09, 10)).to.be(09);
		expect(Util.capmax(10, 10)).to.be(10);
		expect(Util.capmax(11, 10)).to.be(10);
	});

	it('cap max number values', function()
	{
		expect(Util.capmax(09, 10)).to.be(09);
		expect(Util.capmax(10, 10)).to.be(10);
		expect(Util.capmax(11, 10)).to.be(10);
	});

	it('null value', function()
	{
		expect(Util.nvl('not null', 'otherwise')).to.be.equal('not null');
		expect(Util.nvl('is null', 'otherwise')).to.be.equal('is null');
		expect(Util.nvl(null, 'null found')).to.be.equal('null found');
		expect(Util.nvl(undefined, 'undefined found')).to.be.equal('undefined found');
	});

	it('null value integer', function()
	{
		expect(Util.nvli('anything', 'otherwise')).to.be.equal(null);
		expect(Util.nvli(null, null)).to.be.equal(null);
		expect(Util.nvli(null, 1)).to.be.equal(1);
		expect(Util.nvli(2, 1)).to.be.equal(2);
		expect(Util.nvli(3, null)).to.be.equal(3);
	});

	it('bitwise has properties', function()
	{
		let first = 0x01;
		let second = 0x02;
		let third = 0x04;
		let all = first + second + third;

		expect(Util.bitwiseHas(all, first)).to.be.ok();
		expect(Util.bitwiseHas(all, second)).to.be.ok();
		expect(Util.bitwiseHas(all, third)).to.be.ok();
		expect(Util.bitwiseHas(all - first, first)).to.not.ok();
		expect(Util.bitwiseHas(all - second, second)).to.not.ok();
		expect(Util.bitwiseHas(all - third, third)).to.not.ok();
	});

	it('bitwise set properties', function()
	{
		let first = 0x01;
		let second = 0x02;
		let third = 0x04;
		let all = first + second + third;

		expect(Util.bitwiseRemove(all, first)).to.be.equal(second + third);
		expect(Util.bitwiseRemove(all, second)).to.be.equal(first + third);

		let removed = Util.bitwiseRemove(all, third);
		expect(removed).to.be.equal(first + second);
		expect(Util.bitwiseHas(removed, third)).to.not.ok();
		expect(Util.bitwiseHas(removed, second)).to.be.ok();
		expect(Util.bitwiseHas(removed, first)).to.be.ok();
	});

	it('bitwise remove properties', function()
	{
		let value = 0;
		let first = 0x01;
		let second = 0x02;
		let third = 0x04;

		expect(Util.bitwiseSet(value, first)).to.be(first);
		expect(Util.bitwiseSet(value, second)).to.be(second);
		expect(Util.bitwiseSet(value, third)).to.be(third);
		expect(Util.bitwiseSet(first, first)).to.be(first);

		let setted = Util.bitwiseSet(first, second);
		expect(Util.bitwiseHas(setted, first)).to.be.ok();
		expect(Util.bitwiseHas(setted, second)).to.be.ok();
		expect(Util.bitwiseHas(setted, third)).to.not.ok();
	});
});

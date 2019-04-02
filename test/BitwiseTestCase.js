
var expect = require('expect.js');
var Bitwise = require('../index').Bitwise;

describe('bitwise', function()
{
	it('has properties', function()
	{
		let first = 0x01;
		let second = 0x02;
		let third = 0x04;
		let all = first + second + third;
		let bitwise = new Bitwise(all);

		expect(bitwise.has(first)).to.be.ok();
		expect(bitwise.has(second)).to.be.ok();
		expect(bitwise.has(third)).to.be.ok();

		bitwise = new Bitwise(all - first);
		expect(bitwise.has(first)).to.not.ok();

		bitwise = new Bitwise(all - second);
		expect(bitwise.has(second)).to.not.ok();

		bitwise = new Bitwise(all - third);
		expect(bitwise.has(third)).to.not.ok();
	});

	it('set properties', function()
	{
		let first = 0x01;
		let second = 0x02;
		let third = 0x04;
		let bitwise = new Bitwise;

		expect(bitwise.has(first)).to.not.ok();
		expect(bitwise.has(second)).to.not.ok();
		expect(bitwise.has(third)).to.not.ok();

		bitwise.set(first);
		expect(bitwise.has(first)).to.be.ok();
		expect(bitwise.has(second)).to.not.ok();
		expect(bitwise.has(third)).to.not.ok();

		bitwise.set(second);
		expect(bitwise.has(first)).to.be.ok();
		expect(bitwise.has(second)).to.be.ok();
		expect(bitwise.has(third)).to.not.ok();

		bitwise.set(third);
		expect(bitwise.has(first)).to.be.ok();
		expect(bitwise.has(second)).to.be.ok();
		expect(bitwise.has(third)).to.be.ok();
	});

	it('remove properties', function()
	{
		let first = 0x01;
		let second = 0x02;
		let third = 0x04;
		let all = first + second + third;
		let bitwise = new Bitwise(all);

		expect(bitwise.has(first)).to.be.ok();
		expect(bitwise.has(second)).to.be.ok();
		expect(bitwise.has(third)).to.be.ok();

		bitwise.remove(first);
		expect(bitwise.has(first)).to.not.ok();
		expect(bitwise.has(second)).to.be.ok();
		expect(bitwise.has(third)).to.be.ok();

		bitwise.remove(second);
		expect(bitwise.has(first)).to.not.ok();
		expect(bitwise.has(second)).to.not.ok();
		expect(bitwise.has(third)).to.be.ok();

		bitwise.remove(third);
		expect(bitwise.has(first)).to.not.ok();
		expect(bitwise.has(second)).to.not.ok();
		expect(bitwise.has(third)).to.not.ok();
	});
});

var expect = require('expect.js');
var Queue = require('../').Queue;

describe('queue', function()
{
	it('offer and iterate', function()
	{
		let elements = [1, 2, 3, 4, 5];
		let queue = new Queue;
		elements.forEach(element => {
			queue.offer(element);
		});

		expect(queue.size()).to.be(elements.length);
		expect(queue.elements).to.be.eql(elements);

		queue.forEach((element, index) => {
			expect(element).to.be(elements[index]);
		})
	});

	it('peek, poll and isEmpty', function()
	{
		let elements = [1, 2, 3, 4, 5];
		let queue = new Queue(elements);

		expect(queue.size()).to.be(elements.length);
		expect(queue.isEmpty()).to.not.ok();

		do {

			let peek = queue.peek();
			let poll = queue.poll();
			expect(poll).to.be(peek);

		} while (!queue.isEmpty());

		expect(queue.isEmpty()).to.be.ok();
	});

	it('clear', function()
	{
		let elements = [1, 2, 3, 4, 5];
		let queue = new Queue(elements);
		expect(queue.isEmpty()).to.not.ok();

		queue.clear();
		expect(queue.isEmpty()).to.be.ok();
	});
});
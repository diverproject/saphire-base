/**
 * Queue data structure using array.
 *
 * @author Andrew Mello da Silva
 */
module.exports = class Queue
{
	/**
	 * Create a new instance a empty queue.
	 * @param {Array} elements initial elements.
	 */
	constructor(elements = [])
	{
		this.elements = Array.isArray(elements) ? elements : [];
	}

	/**
	 * @param {any} element offer a element to the end of queue.
	 */
	offer(element)
	{
		this.elements.push(element);
	}

	/**
	 * @returns {any} acquire the next element in queue and remove it.
	 */
	poll()
	{
		return this.elements.shift();
	}

	/**
	 * @returns {any} acquire the next element in queue but not remove it.
	 */
	peek()
	{
		return this.isEmpty() ? undefined : this.elements[0];
	}

	/**
	 * @returns {number} acquire the amount of elements in queue.
	 */
	size()
	{
		return this.elements.length;
	}

	/**
	 * @returns {boolean} true if queue is empty or false otherwise.
	 */
	isEmpty()
	{
		return this.elements.length === 0;
	}

	/**
	 * Remove all elements of the queue make it empty.
	 */
	clear()
	{
		delete this.elements;
		this.elements = [];
	}

	forEach(callback)
	{
		this.elements.forEach(callback);
	}
}
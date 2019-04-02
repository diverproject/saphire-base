var Util = require('../index').Util;

class Bitwise
{
	/**
	 * @param {number} [optional] value
	 * @param {Array} [optional] properties
	 */
	constructor(value, properties)
	{
		this.setValue(value);
		this.setProperties(properties);
	}

	/**
	 * @returns {number}
	 */
	getValue()
	{
		return this.value;
	}

	/**
	 * @param {number} value
	 */
	setValue(value)
	{
		this.value = Util.nvl(Number.isInteger(value) ? value : null, 0);
	}

	/**
	 * @returns {Array}
	 */
	getProperties()
	{
		return this.properties;
	}

	/**
	 * @param {Array} properties
	 */
	setProperties(properties)
	{
		this.properties = Array.isArray(properties) ? properties : [];
	}

	/**
	 * Check if the current bitwise value contains a bit property.
	 * Can be informed one or multiple properties at once.
	 * @param {number} property bit properties to be checked.
	 * @returns {boolean} true if has all properties or false otherwise.
	 */
	has(property)
	{
		return Util.bitwiseHas(this.value, property);
	}

	/**
	 * Update the bitwise value to include another property.
	 * If there is already then do nothing.
	 * Accept one or multiple properties at once.
	 * @param {number} property bitwise properties.
	 */
	set(property)
	{
		this.value = Util.bitwiseSet(this.value, property);
	}

	/**
	 * Remove one or more bit properties as:
	 * if there are then remove otherwise do nothing.
	 * @param {number} property bit properties to remove.
	 */
	remove(property)
	{
		this.value = Util.bitwiseRemove(this.value, property);
	}
}

module.exports = Bitwise;
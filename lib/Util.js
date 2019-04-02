module.exports =
{
	// -- String Utilities

	/**
	 * Format a string using parameters with '{{INDEX}}' where INDEX is argument number.
	 * @param {string} format string with format expected to be returned.
	 * @returns {string} acquire string formatted as specified.
	 */
	format(format)
	{
		var args = Array.from(arguments).slice(1);
		var sprintfRegex = /\{(\d+)\}/g;

		var sprintf = function(match, number) {
			return number in args ? args[number] : match;
		};

		return format.replace(sprintfRegex, sprintf);
	},

	/**
	 * Receive a string data and iterate characters to populate a array.
	 * @param {string} str string data to be converted on character array.
	 * @returns {(Array|null)} acquire a array with characters of string or null if is not a string.
	 */
	bytes(str)
	{
		if (typeof str !== 'string')
			return null;

		var bytes = [];

		for (let index = 0; index < str.length; index++)
			bytes.push(str.charCodeAt(index));

		return bytes;
	},

	/**
	 * Cap string content if the length overflow the informed legnth.
	 * @param {string} str string content to be capped if needed.
	 * @param {number} length the length to cap string.
	 * @returns {string} acquire a new string capped or it self otherwise.
	 */
	strcap(str, length)
	{
		return str.length > length ? str.substr(str, this.capmin(length, 0)) : str;
	},

	// -- Number Utilities

	/**
	 * Cap a number value with a minimum value and a maximum value
	 * @param {number} value number value to be capped.
	 * @param {number} min minimum number value accepted.
	 * @param {number} max maximum number value accepted.
	 * @returns {number} acquire capped minium and maximum number.
	 */
	cap(value, min, max)
	{
		return this.capmax(this.capmin(value, min), max);
	},

	/**
	 * Cap a number only with a minimum number.
	 * @param {number} value number value to be capped.
	 * @param {number} min minimum number value accepted.
	 * @returns {number} acquire capped minimum number.
	 */
	capmin(value, min)
	{
		return value < min ? min : value;
	},

	/**
	 * Cap a number only with a maxium number.
	 * @param {number} value number value to be capped.
	 * @param {number} max maximum number value accepted.
	 * @returns {number} acquire capped maximum number.
	 */
	capmax(value, max)
	{
		return value > max ? max : value;
	},

	/**
	 * Check if a number value has between range specification values.
	 * @param {number} value numeric value to be checked.
	 * @param {number} min min numeric value accepted.
	 * @param {number} max max numeric value accepted.
	 * @returns {boolean} true if between ranges or false otherwise.
	 */
	hasBetween(value, min, max)
	{
		return value >= min && value <= max;
	},

	// -- Generic Utilities

	/**
	 * Treat any data type value checking if is null or undefined and return a valid data.
	 * @param {any} value data to be validate if is null value.
	 * @param {any} defaultValue default date value if value is not.
	 * @returns {any} acquire validate value as specified.
	 */
	nvl(value, defaultValue)
	{
		return value === undefined || value === null ? defaultValue : value;
	},

	/**
	 * In this case the value need be a integer number otherwise will unvalidate.
	 * Treat a value checking if is null or undefined and return a valid data.
	 * If default value is not a integer number then will be a null value.
	 * @param {any} value numeric value to be checked if is null value.
	 * @param {any} defaultValue default date value if value is not.
	 * @returns {any} acquire validate value as specified.
	 */
	nvli(value, defaultValue)
	{
		return this.nvl((Number.isInteger(value) ? value : null), (Number.isInteger(defaultValue) ? defaultValue : null));
	},

	// -- Bitwise Utilities

	/**
	 * Check if a bitwise value has a bit property.
	 * @param {number} value numeric value for bitwise.
	 * @param {number} property numeric bit property to check.
	 * @returns {boolean} true if has property or false otherwise.
	 */
	bitwiseHas(value, property)
	{
		return (value & property) === property;
	},

	/**
	 * Set a bit property into a bitwise value.
	 * @param {number} value numeric value for bitwise.
	 * @param {number} property numeric bitwise to set.
	 * @returns {number} acquire new numeric bitwise updated.
	 */
	bitwiseSet(value, property)
	{
		return (value |= property);
	},

	/**
	 * Remove a bit property from a bitwise value.
	 * @param {number} value numeric value for bitwise.
	 * @param {number} property numeric bitwise to remove.
	 * @returns {number} acquire new numeric bitwise updated.
	 */
	bitwiseRemove(value, property)
	{
		return (value -= value & property);
	},
}
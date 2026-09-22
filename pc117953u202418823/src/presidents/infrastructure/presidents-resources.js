/**
 * President data structure as returned by the Sample APIs presidents provider.
 *
 * @summary Shape of a single raw president resource received from the external API,
 * following the Resource design pattern to isolate infrastructure data shapes from the domain.
 * @author Andy Pillaca Gonzales
 *
 * @typedef {Object} PresidentResource
 * @property {number} [id] - The provider-assigned identifier for the president.
 * @property {number} [ordinal] - The ordinal number of the presidency.
 * @property {string} [name] - The full name of the president.
 * @property {string} [yearsInOffice] - The range of years the president held office.
 * @property {string[]} [vicePresidents] - The names of the vice presidents who served alongside this president.
 * @property {string} [photo] - The URL to a portrait photo of the president.
 */

/**
 * API response structure for the presidents collection endpoint.
 *
 * @summary Represents the Response design pattern: the raw array of
 * PresidentResource objects returned by the presidents endpoint.
 * @author Andy Pillaca Gonzales
 *
 * @typedef {PresidentResource[]} PresidentsResponse
 */

export {}

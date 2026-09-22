/**
 * Value object representing a URL within the domain.
 *
 * @summary Ensures that URL values are well-formed and provides a
 * consistent, immutable way to handle URLs across the application.
 * @author Andy Pillaca Gonzales
 */
export class Url {
    /** @type {string} */
    #value;

    /**
     * Validates whether a string is a well-formed URL.
     *
     * @param {string} url - The URL string to validate.
     * @returns {boolean} True if the URL is valid, false otherwise.
     */
    static isValidUrl(url) {
        if (typeof url !== 'string' && !(url instanceof String)) return false;
        if (URL.canParse) {
            return URL.canParse(url);
        }
        try {
            new URL(url);
            return true;
        } catch (_) {
            return false;
        }
    }

    /**
     * Creates a new Url instance.
     *
     * @param {string} [value] - The URL string. Invalid or missing values resolve to an empty URL.
     */
    constructor(value = '') {
        this.#value = Url.isValidUrl(value) ? value : '';
        Object.freeze(this);
    }

    /**
     * Returns the string representation of the URL.
     *
     * @returns {string} The URL as a string.
     */
    toString() {
        return this.#value;
    }

    /**
     * Checks whether the URL is empty.
     *
     * @returns {boolean} True if no valid URL was provided.
     */
    isEmpty() {
        return this.#value === '';
    }

    /**
     * Returns the primitive value of the Url.
     *
     * @returns {string} The URL as a string.
     */
    valueOf() {
        return this.#value;
    }

    /**
     * Checks for equality with another Url instance.
     *
     * @param {Url} other - The other Url to compare against.
     * @returns {boolean} True when both instances represent the same URL.
     */
    equals(other) {
        return other instanceof Url && this.#value === other.toString();
    }
}

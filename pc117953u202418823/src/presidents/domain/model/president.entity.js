import {StringValidator} from "@/shared/domain/model/string-validator.js";
import {Url} from "@/shared/domain/model/url.js";

/**
 * Properties for creating a President entity.
 *
 * @typedef {Object} PresidentProps
 * @property {number} [ordinal] - The ordinal number of the presidency (e.g. 1 for the 1st president).
 * @property {string} [name] - The full name of the president.
 * @property {string} [yearsInOffice] - The human-readable range of years the president held office.
 * @property {string[]} [vicePresidents] - The names of the vice presidents who served alongside this president.
 * @property {string|Url} [photo] - The URL to a portrait photo of the president.
 */

/**
 * Domain entity representing a president of the United States.
 *
 * @summary Encapsulates the core attributes and behavior of a president
 * within the domain, ensuring data integrity through constructor validation.
 * @author Andy Pillaca Gonzales
 */
export class President {
    /**
     * Creates a new President instance.
     *
     * @param {PresidentProps} [props] - The properties to initialize the president with.
     * @throws {Error} If name is empty or yearsInOffice is missing.
     */
    constructor({ordinal = 0, name = '', yearsInOffice = '', vicePresidents = [], photo = ''}) {
        if (!StringValidator.isNotEmptyString(name)) throw new Error('President name must be a non-empty string');
        if (!StringValidator.isNotEmptyString(yearsInOffice)) throw new Error('President yearsInOffice must be a non-empty string');

        this.ordinal = ordinal;
        this.name = name;
        this.yearsInOffice = yearsInOffice;
        this.vicePresidents = Array.isArray(vicePresidents) ? vicePresidents : [];
        this.photo = photo instanceof Url ? photo : new Url(photo);
        if (this.photo.isEmpty()) {
            this.photo = new Url('https://placehold.co/300x300?text=No+Photo');
        }
    }

    /**
     * Builds the English Wikipedia article URL for this president.
     *
     * @returns {string} The absolute URL to the president's Wikipedia article.
     */
    getWikipediaUrl() {
        return `https://en.wikipedia.org/wiki/${this.name.trim().replaceAll(' ', '_')}/`;
    }

    /**
     * Indicates whether the president had at least one named vice president.
     *
     * @returns {boolean} True when the vicePresidents list contains at least one non-empty, non-"None" entry.
     */
    hasVicePresidents() {
        return this.vicePresidents.some(vicePresident => StringValidator.isNotEmptyString(vicePresident) && vicePresident.toLowerCase() !== 'none');
    }
}

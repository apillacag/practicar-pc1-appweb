import {President} from "@/presidents/domain/model/president.entity.js";
import "@/presidents/infrastructure/presidents-resources.js";

/**
 * Infrastructure service that maps president data from API responses into Domain Entities.
 *
 * @summary Implements the Assembler (Data Mapper) design pattern, converting
 * infrastructure-specific PresidentResource objects into President domain entities,
 * so naming or shape mismatches in the external API never leak into the domain layer.
 * @author Andy Pillaca Gonzales
 */
export class PresidentAssembler {
    /**
     * Maps a full Axios response containing president resources into an array of President entities.
     *
     * @param {import('axios').AxiosResponse<import('./presidents-resources.js').PresidentsResponse>} response - The HTTP response from the presidents provider.
     * @returns {President[]} An array of President domain entities. Returns an empty array if the payload is not an array.
     */
    toEntitiesFromResponse(response) {
        if (!Array.isArray(response.data)) {
            console.error('Unexpected presidents response payload', response.data);
            return [];
        }
        return response.data.map((resource) => {
            try {
                return this.toEntityFromResource(resource);
            } catch (error) {
                console.error('Validation error for president:', error.message, resource);
                return null;
            }
        }).filter(president => president !== null);
    }

    /**
     * Maps a single president resource into a President domain entity.
     *
     * @param {import('./presidents-resources.js').PresidentResource} resource - The president data as received from the external API.
     * @returns {President} The assembled President domain entity.
     */
    toEntityFromResource(resource) {
        return new President({...resource});
    }
}

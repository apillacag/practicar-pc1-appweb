import {reactive} from "vue";
import {PresidentsApi} from "@/presidents/infrastructure/presidents-api.js";
import {PresidentAssembler} from "@/presidents/infrastructure/president.assembler.js";

/**
 * Application state and use-case orchestrator for president-related operations.
 *
 * @typedef {Object} PresidentsStore
 * @property {import('@/presidents/domain/model/president.entity.js').President[]} presidents - The full registry of presidents.
 * @property {Array<string>} errors - Error messages encountered while loading presidents.
 * @property {() => void} loadPresidents - Orchestrates fetching and assembling the president registry.
 */

const presidentsApi = new PresidentsApi();
const presidentAssembler = new PresidentAssembler();

/**
 * Reactive application service that coordinates the President Registry use case.
 *
 * @summary In DDD terms this acts as an Application Service, mediating between the
 * presentation layer and the infrastructure-driven acquisition of president data.
 * @author Andy Pillaca Gonzales
 * @type {PresidentsStore}
 */
export const presidentsStore = reactive({
    presidents: [],
    errors: [],
    /**
     * Loads the full president registry from the provider.
     *
     * @returns {void}
     */
    loadPresidents() {
        this.errors = [];
        presidentsApi.getPresidents().then(response => {
            this.presidents = presidentAssembler.toEntitiesFromResponse(response);
        }).catch(message => {
            this.errors.push(message);
            this.presidents = [];
        });
    }
});

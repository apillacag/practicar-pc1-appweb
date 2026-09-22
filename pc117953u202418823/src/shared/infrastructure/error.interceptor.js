
export const errorInterceptor = {

    onResponse: (response) => response,

    onError: (error) => {
        let message;

        if (error.response) {
            // The request was made, and the server responded with a status code outside the 2xx range.
            console.error("Data:", error.response.data);
            console.error("Status:", error.response.status);
            console.error("Headers:", error.response.headers);

            message = error.response.data?.["message"] || `Error ${error.response.status}: ${error.response.statusText}`;
        } else if (error.request) {
            // The request was made but no response was received.
            console.error("Request:", error.request);
            message = "No response received from the server. Please check your internet connection.";
        } else {
            // Something happened while setting up the request.
            console.error("Error Message:", error.message);
            message = error.message;
        }

        return Promise.reject(message);
    }
};

import axios from 'axios';

const BASE_URL = 'http://0.0.0.0:8000';

export const getCodeAndSuggestions = (formData) => {
    const res = axios.post(
        `${BASE_URL}/suggest_column_mapping`,
        formData,
        {
            headers: {
                "Authorization": "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
                "Content-type": "multipart/form-data",
            },
        }
    )

    return res;
}

export const mapCode = (formData) => {
    const response = axios.post(
        `${BASE_URL}/column_mapper`,
        formData,
        {
            headers: {
                "Authorization": "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
                "Content-type": "multipart/form-data",
            },
        }
    )

    return response;
}

export const updateSuggestions = (formData) => {
    const response = axios.post(
        `${BASE_URL}/suggest_column_mapping`,
        formData,
        {
            headers: {
                "Authorization": "YOUR_API_AUTHORIZATION_KEY_SHOULD_GOES_HERE_IF_HAVE",
                "Content-type": "multipart/form-data",
            },
        }
    )

    return response;
}

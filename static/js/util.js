
export function getAuthToken() {
    return localStorage.getItem('token');
}

export function clearAuthToken() {
    return localStorage.removeItem('token');
}

export default getAuthToken
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    return {
        type: SET_USER,
        payload: user
    }
};

export const clearUser = () => ({
    type: CLEAR_USER,
});

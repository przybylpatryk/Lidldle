export const getUserId = (): number => {
    const cookieName = 'userId';
    const match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
    if (match) {
        return parseInt(match[2], 10);
    }
    const newId = Math.floor(Math.random() * 20000000) + 1;
    document.cookie = `${cookieName}=${newId}; path=/; max-age=31536000`;
    return newId;
};
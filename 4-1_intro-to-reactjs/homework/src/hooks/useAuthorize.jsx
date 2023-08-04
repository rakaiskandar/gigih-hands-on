import generateRandomString from "../utils/generateRandomString";

const useAuthorize = async (clientId, redirectUri) => {

    let scope = 'playlist-modify-private';
    let state = generateRandomString(128);

    let args = new URLSearchParams({
        response_type: 'token',
        client_id: clientId,
        scope: scope,
        state: state,
        redirect_uri: redirectUri,
    });

    window.location = 'https://accounts.spotify.com/authorize?' + args;
};

export default { useAuthorize }
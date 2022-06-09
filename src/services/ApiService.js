async function getProfile(accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });

    const profile = await response.json();
    return profile;
}

async function getTracks(accessToken) {
    //const response = await fetch('https://api.spotify.com/v1/me/tracks/', {
    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });

    const tracks = await response.json();
    return tracks;
}

export default { getProfile, getTracks };
function generateRandomString(length) {
    const random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';

    for (var i = 0; i < length; i++) {
        text += random.charAt(Math.floor(Math.random() * random.length));
    }
    return text;
};

export default { generateRandomString };
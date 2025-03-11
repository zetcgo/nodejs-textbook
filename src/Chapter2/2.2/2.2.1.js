const axios = require('axios');

axios
    .get('https://www.zerocho.com/api/get')
    .then((res) => res.data)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

(async () => {
    try {
        const result = await axios.get('https://www.zerocho.com/api/get');
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
})();

(async () => {
    try {
        const result = await axios.post('https://www.zerocho.com/api/post/json', {
            name: 'zetcgo',
            birthYear: 2005,
        });
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
})();

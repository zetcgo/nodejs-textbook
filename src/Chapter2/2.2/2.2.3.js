const axios = require('axios');

(async () => {
    try {
        const result = await axios.get(
            `https://www.zerocho.com/api/search/${encodeURIComponent('노드')}`,
        );
        console.log(result.data);
    } catch (e) {
        console.error(e);
    }
})();

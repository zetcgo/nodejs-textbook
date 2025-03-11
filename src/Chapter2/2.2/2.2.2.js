const axios = require('axios');

const formData = new FormData();
formData.append('name', 'zectgo');
formData.append('fruits', 'orange');
formData.append('fruits', 'melon');
console.log(formData.has('fruits'));
console.log(formData.has('money'));
console.log(formData.get('name'));
console.log(formData.get('fruits'));
console.log(formData.getAll('fruits'));
formData.append('words', ['hello', 'zetcgo']);
console.log(formData.get('words'));
formData.delete('words');
console.log(formData.get('words'));
formData.set('fruits', 'apple');
console.log(formData.get('fruits'));

(async () => {
    try {
        const formData = new FormData();
        formData.append('name', 'zetcgo');
        formData.append('birthYear', 2005);
        const result = await axios.post('https://www.zerocho.com/api/post/formData', formData);
        console.log(result.data);
    } catch (error) {
        console.error(error);
    }
})();

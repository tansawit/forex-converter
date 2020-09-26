const Converter = require('../src/index');

(async () => {
  let converter = new Converter();
  console.log(await converter.convert('EUR', 'USD'));
})();

const BandChain = require('@bandprotocol/bandchain.js');

class Converter {
  async convert(base, quote) {
    const endpoint = 'http://poa-api.bandchain.org';
    const bandchain = new BandChain(endpoint);
    const data = await bandchain.getReferenceData([base + '/' + quote]);
    return { rate: data[0].rate, lastUpdated: data[0].updated };
  }
}

module.exports = Converter;

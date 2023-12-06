// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: '...', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'yumizero', // desired subdomain name
  owner: {
    repo: '<https://URL/to/the/repository/with/your/project/sources/if/it/is/public>',
    email: '<your-public@email.address>',
  },
  record: {
    CNAME: '<cname-domain>', // e.g.: <your-github-account>.github.io
    TXT: ['TXT: ['vc-domain-verify=yumizero.is-a.dev,c826c729424bed7b847f',],
    A: ['list', 'of', 'IPv4', 'addresses', 'like', 'a', '127.0.0.1'],
    AAAA: ['list', 'of', 'IPv6', 'addresses', 'like', 'a', '::1'],
    NS: ['list', 'of', 'nameservers'],
  },
  //proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})

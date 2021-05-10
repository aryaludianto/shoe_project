// export { };

const dataExample = [
  {
    brand: 'Pier One',
    name: 'Suede Oxford',
    category: 'adult',
    gender: 'men',
    type: 'business',
    price: 100,
    stock: [
      {
        color: 'gray', size: [{ number: 40, amount: 1 }, { number: 42, amount: 2 }, { number: 41, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/0cc34f0aa914305fbb9a2954656a0d16/a27d3784df8c4d20aa4f7790f70a96d3.jpg?imwidth=1800&filter=packshot', 'https://img01.ztat.net/article/spp-media-p1/6d78cf06981d363c8398bb594bbddade/2254045844ce450fb722fee451b3eb36.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/bd9a717256f2318c950713320c8bb97f/f650508ee4674f83beedcb3e7d3dc2fd.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/f469c7d2ecef35908bc11a999652f41b/7e262d7e1b2c4561940fdde78f9c83b6.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/5cf86f828b71362c80bc46917277d8db/9b9a15abc5c549fc975b6d6e0e5f54dc.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/255a1d8839053c99ad5b6879b59a1d63/72c02b31c846494d91aa11ee508f78e9.jpg?imwidth=762']
      },
      {
        color: 'black', size: [{ number: 40, amount: 1 }, { number: 42, amount: 2 }, { number: 41, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/808ffb5b4e1a3c3d8148d19062088956/b766c40e365d418d8d7e049300b3448e.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/ba250de0a8f830e7ab441f7928895c96/333ad595de2f4d86b3ba78ae77e48224.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/ca2ded50ad7a37498b66b607f52d68bf/bb2fcd9864be4ea5b203bdec7a6ed34e.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/7ac9c42d97a033d8a9d7b5533f8b1012/6c91ba398874476fbdfe7299dc816cc2.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/bf160258c3963f099b6389a79bcbd5ad/52b73f378e8044718b546e5619f1cfa8.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/c0d07c66b36836c089a0a45d97a6a5e2/297190bf34a44bd18b070298075a74a3.jpg?imwidth=762']
      },
      {
        color: 'dark brown', size: [{ number: 40, amount: 1 }, { number: 42, amount: 2 }, { number: 41, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/e03accf2c4e03f1085f31cb0f432b1ea/73c7187700404f13a63750a3ff6f39e2.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/29bdea6a2a983e3fa6f889c9fee5bf65/6b2bd41d5b29446b80018435cade55f5.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/79b936554f233767896ca49baee2bccf/2b29f934acb94f5e82ebc0705141a4e5.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/21e8d59384e133698871b6de3ffa6a9e/5a2c287becd94bac8453c97e6c9a1085.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/c19f156dfba3328193dada15460d616b/2972e3e62b7f4ad984ecdf33f9d90f11.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/5ad53b135c83313b94343a5b18152f96/11be648455d34e4288a2eb491fff1c43.jpg?imwidth=1800']
      }]
  },
  {
    brand: 'Nike',
    name: 'Stefan Janoski',
    category: 'adult',
    gender: 'men',
    type: 'casual',
    price: 70,
    stock: [
      {
        color: 'tumbled grey/white', size: [{ number: 40, amount: 1 }, { number: 42, amount: 2 }, { number: 41, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/d8dcbf3fb7db3d7b97164de56a4f306f/d169768d991349dab9c1940d4ec0a669.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/b329fe2f8ac93db184b5986ceaaa1abb/10956853feb44fd4ad4ff9eb16915d9a.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/e1321c4743643d3bb1fd9719db631669/eb1c30d6eea54a1c94635877223830ac.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/9f9896942bd433c38741f59f619e0fa2/aa3b2976d85d4b2ca21a001334b598fd.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/0cb4e8bc32f131a5aeb03ce33df85f97/0b37a2057f494f50b3cb9fe762ed31c0.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/286b6b904b3536af958ffc4b53a880d8/eab0660458114865af115457bb84702b.jpg?imwidth=1800'
        ]
      },
      {
        color: 'pure platinum/light brown', size: [{ number: 40, amount: 1 }, { number: 42, amount: 2 }, { number: 41, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/350b14cb490f3f1a91cda294f5070202/e8df3c2b5d1f4cff9b2cdbe85bc7d1ad.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/2234a9cfac2739619df80a8121baaf37/41137525c2524184a94ea66b698c5ad9.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/3d643f329ecd3e6ea20ba6e068546f50/ca39b4c3b4e543579b37c8403ba39d27.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/f989410db48e394c82a2171e9286023e/b2a969ef0af3422fa9929571a40b20f2.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/33e967f300bb331eba278635c688d901/7c9c66b1314f4259b6c43f97a3c7f889.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/c4e50289640d3ad5b1dd087947934a8a/006f0303067c44ecb50736f1174b0ad7.jpg?imwidth=762']
      },
    ]
  },
  {
    brand: 'Minelli',
    name: 'Elegant',
    category: 'adult',
    gender: 'women',
    type: 'business',
    price: 100,
    stock: [
      {
        color: 'black/noir', size: [{ number: 36, amount: 1 }, { number: 37, amount: 2 }, { number: 40, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/3101e54015d03adf81389d026654c421/c224e4b191954ab8bb39a1f3a6a9748e.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/23ec5e2a80b336689f02d10fb108faa3/960359ce4028477c924f6ac7937ec14c.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/f468862f95d13c1a957c76fba7daf30e/c4f97587694b478a945672ea9dd19707.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/251eafe777603b38b247d8e7f127e70a/085d1f08d0474c92988417b4b286a2be.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/a16dd710989732c0814be545c0ed94ec/12fc4c44d8294523888fbbfc68d52ddc.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/47729cfa1312358e825393f3896daee8/ac420ef977f6407b9db5b858da8b8453.jpg?imwidth=1800']
      },
    ]
  },
  {
    brand: 'Adidas',
    name: 'SUPERSTAR PURE',
    category: 'adult',
    gender: 'unisex',
    type: 'casual',
    price: 60,
    stock: [
      {
        color: 'black', size: [{ number: 40, amount: 1 }, { number: 42, amount: 2 }, { number: 41, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/4fdc629ccf693ae09c86cb6233548b77/3d5f50c76b4845bba07760d0d4526028.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/4d6700f0288536709e61020df3503246/137936893e724b008b6291b05ade965b.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/5052b6d8b9893b858849ba08999b1116/ff3ff05c9a4b4b9d97020c23be555893.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/4c7b81af590432a1a578d809ce17eb8a/47861a9ef0cb4eb09aa53024498a8dec.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/1412f8d7f80a32e4aaf45109bfe5e102/51fa5df58a2149339fcc0a94cf298172.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/1c7d5be285b93ff2a8b80c8a7f1ce35f/ef44f71076d0408eb19d11ea1d1a6ff8.jpg?imwidth=1800']
      },
      {
        color: 'footwear white/core white', size: [{ number: 40, amount: 1 }, { number: 42, amount: 2 }, { number: 41, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/0a80e42b948135bb9e254f2f13849fe4/7561a923b80745789780503f870f6592.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/6064bfb14ad93424a91b24e366ac5dd3/8456a8f89bb74afa936c86bef06aab9d.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/700af595145c3cd2a983a853808a4307/39fa1110d0fb4ba68acb551038c1c153.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/0ea7479f2c093964a639120e9b2ea825/509aeaaf021f45bdaa2489b3870b494d.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/f489545814b839f098c49c3c310a7f6f/4f860dad6dfb49cc9b4ae80a772923fa.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/0224bf357b783f32b2c64f6bf4581e21/5d6b4a62cc434d48a16171fd48dd240b.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/7ea588ada30a39b7b022036b53084b3e/092da4ee21c34bcbbd656f0ce04c7b39.jpg?imwidth=1800']
      }]
  },
  {
    brand: 'Nike Performance',
    name: 'FLEX RUNNER',
    category: 'kids',
    gender: 'unisex',
    type: 'casual',
    price: 55,
    stock: [
      {
        color: 'black', size: [{ number: 30, amount: 1 }, { number: 31, amount: 2 }, { number: 32, amount: 1 }],
        imageUrl: [
          'https://img01.ztat.net/article/spp-media-p1/52a2afa6769c31e891e70993e9b9fe7d/ba1a8a91470d40babcbef841f9c35c59.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/0dc2381ab434381fbbedebf0b66498fc/d45a80479987424eb0fa02b689031b54.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/814bb83dc5993b4fbe4c8532d410c100/2d595887c11c4c8d831364407a011cc8.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/c067840f2dfb3e5ebcb8a9aa0aed93f7/cf9b4d7fc6f145f385bd132089c48cb1.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/b76f53b3ea2a3fd99f4526ec81cab873/4fd3f36592724f19a2dfa10fe209a62a.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/8b4c9c5d336139a59a08883134fc7756/05f72724e79b4c2fba069abc9b1b11a7.jpg?imwidth=1800']
      },
      {
        color: 'light smoke grey/black/limelight/photon dust', size: [{ number: 40, amount: 1 }, { number: 42, amount: 2 }, { number: 41, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/df6b95fe28cc3630a4eeb8323df750af/e03ce310cbdd4e3b81eac33a41eea595.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/7f8709a911153f198d4ec5b8893e9769/27aba71edf4c45128c2b58b05ee130a4.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/86f1a85803cf35519c7802857fa0d319/9c9c48df90a94bd4a44f546eb40538c0.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/37005f9cb2a83b6eaabcfeaa371281c2/5b169e9dd3b748cb879b04e7a80f4fa9.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/1c3a419706e430ac9b859760e2856991/376da81a422743ec87ffc3066e690703.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/d6544ff67fb837a0ae05b6d666f00896/41023f9917b3470080d820093d2c5beb.jpg?imwidth=1800']
      }]
  },
  {
    brand: 'Friboo',
    name: 'Ballerina',
    category: 'kids',
    gender: 'girl',
    type: 'casual',
    price: 60,
    stock: [
      {
        color: 'dark blue', size: [{ number: 28, amount: 1 }, { number: 29, amount: 2 }, { number: 30, amount: 1 }],
        imageUrl: [
          'https://img01.ztat.net/article/spp-media-p1/7508e1d048a8347eb4920ceefa66a051/2ba1840f6fe34a29ac2ec6f1d2c0d229.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/d420b96345bd3e788e202ce02b6eb114/2556675d6b7a4e4f895fc0b73d0f130b.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/b132e3f19267328eb6b217c385c54fa5/80be00b478e442b5adc08ba4452e0d94.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/97918a4fdc5e323ab1749ce3bd4df692/e85ceada73194c95ab159b1c4cecc7e0.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/1a1ad73c220c3936b9f7e16b8b325316/d6ba978563c04cbf862eb503a6735f5c.jpg?imwidth=1800']
      },
      {
        color: 'white', size: [{ number: 40, amount: 1 }, { number: 42, amount: 2 }, { number: 41, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/8f0cf6aa6873331c8335d940cb4601c4/7dadc266639c435eb636e3a6f820b1b6.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/0e58ba99a02835ba9f07dc0cd54abe05/6f8eacf8bb0b4f339ea8ea41c1c72c1f.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/f517517a779e3f1d9e22088eb3e6182f/e1e7d7610602478e8eb273ef3968b0bd.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/af2238fb258733be9beefc83fcba249f/d1f1066c90734863a0f530d560dfbdda.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/664c2f7a51d93024972388bc7204a072/9b3b74e35fb541d9b4aea231fe17cd90.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/70868dcfd2f335ecbfcee014b795a872/46927194204b472da717155f3db8f0b9.jpg?imwidth=1800']
      }]
  },
  {
    brand: 'Friboo',
    name: 'Oxford Leather',
    category: 'kids',
    gender: 'boy',
    type: 'business',
    price: 45,
    stock: [
      {
        color: 'light brown', size: [{ number: 28, amount: 1 }, { number: 29, amount: 2 }, { number: 30, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/025a4c61ac803c5faabd369d1943b4fa/411d65922db74dafb8951dde15146d6b.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/ff757c1182e43374ac13b0b3ca0f0040/d88ccaec8caa443ab094c9566ad2bc60.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/3c27c0a56d2035e8a1748b1db55b6087/54047d28f6d441a3b6ce95c6cb56ee8c.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/27120a9d949f353fb0be3cf791dab91c/edd5651c6ce949648a992010e6189024.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/d452db2c85c13d1a93a7054316770f3f/58ceba6f9293469c8f5869271dead789.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/0921262617953e27b43e62f51e881c8a/bb595e23bc514cc598250ad7cbd56bd7.jpg?imwidth=762']
      },
      {
        color: 'black', size: [{ number: 25, amount: 1 }, { number: 26, amount: 2 }, { number: 29, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/85dbb87e6ad93f86bbb7c3582520db42/98107a9c0a8d409c9e9c5f62f0c3d9e6.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/128a6e14572e3f448ef1ef68029db0c0/6b8009c8b6b143c7a32eca3fe9bda236.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/92d46f92c0db3a6d9c5b20ef7237db2f/c2a3e4c602a74237953e142060ad32a9.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/bb0a25babbd8338bb06087bb3f4cd03b/93e9061e37604d37bc729f68e87d025b.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/97f17be46c78334ca04d5b4851a80b76/a375a5fe3ff24fb88427a14331b4e634.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/0740845042393d9383eaff2d25f721ff/6a6c85e6086d40c5bfde561550913d12.jpg?imwidth=1800']
      }]
  },
  {
    brand: 'adidas Originals',
    name: 'OZWEEGO - Sneakers',
    category: 'kids',
    gender: 'unisex',
    type: 'casual',
    price: 55,
    stock: [
      {
        color: 'core black/trace grey metallic', size: [{ number: 28, amount: 0 }, { number: 29, amount: 2 }, { number: 30, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/2d72e7b5ac863564b4c8fd611a010deb/5786f7baf3a44329a79a788b07e8c32f.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/7126d660694c39449d2edc6b3ebf864d/ca397cd6463f42659ea6a20a79796e0b.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/89b47006fa7431d48d1865ab0b655fb9/ffeea4e564684036b5a9ba2db137ed5e.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/46044798d1d939f99532de0582b9c990/ccb4488f6b6b43eeb6b08d51f9496182.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/69432e52ed69377d827eef0e42a925e6/f9624e08a0594d62b7d7020c2a1d148e.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/0e5815fc401e3c9db693897ff765fed2/b9cab04bf2fc4eabac540ec5910d3e94.jpg?imwidth=1800']
      },
      {
        color: 'footwear white/core black', size: [{ number: 25, amount: 1 }, { number: 26, amount: 1 }, { number: 29, amount: 1 }, { number: 30, amount: 1 }, { number: 31, amount: 1 }, { number: 32, amount: 1 }],
        imageUrl: ['https://img01.ztat.net/article/spp-media-p1/c45140c61fa73d6a98352a6c8602c043/1a3a4b6eddc6403bbcbc317c2f7a0db7.jpg?imwidth=1800&filter=packshot',
          'https://img01.ztat.net/article/spp-media-p1/316e91f2c76c365eb57857c2bad390cc/5666333b2f664692b5646e9abe7714ad.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/5e8dcca89fec329db29563444cce2821/d3fa0364d0d34fb4b66d1eb4f9ce74d9.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/b13b8d0b6ddb3b37a3785d4c759c0e01/1408e7c7e2884cc0832a003fad34ba5a.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/11df31629c6334709bd69ca9bb6f0e87/cb987a1eba9b48d7a5578ea9e8823d13.jpg?imwidth=1800',
          'https://img01.ztat.net/article/spp-media-p1/00e96ed4f6c931dda77745382e14b6c9/2f83590d508b4e13ba72c957265f3604.jpg?imwidth=1800']
      }]
  }
]


export default dataExample;
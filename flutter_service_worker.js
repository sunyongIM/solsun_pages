'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2a046fd50ad72f9855bf929b5da9f73f",
"index.html": "6088e2a138d384161b9cf3e3b76973fd",
"/": "6088e2a138d384161b9cf3e3b76973fd",
"favicon_cold.png": "cf4f0d804ea2e79ca5e1a16773fe4612",
"CNAME": "7a040ab2b7073f58cb4c561ad0fca486",
"main.dart.js": "3e95add80f86259ae8b976b14b5c64b4",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "03c8bfd661a0a66a53e6c3d952bd6d8e",
".git/ORIG_HEAD": "859a135d73ef7844f9051e82e54a3c5c",
".git/config": "5c8df120ff6fe4c9cf8e53343d12868c",
".git/objects/0d/c7f2b8d58d4fa145f3d22591561e201ec9bbbb": "24d5e73a0b7e8b7ce66d1a39884ccb6e",
".git/objects/0c/1a48994807579dd5642ada71b355eb3437a239": "4a41f5bd4d86f50760b0e844072bde81",
".git/objects/3e/d3d21883fc82963f9d81450c86b814e00e617d": "69cc23fa4ed6fc8037def6da4ca423b3",
".git/objects/57/53863ef1c3be15fccde995f2f153ff360e4831": "b883ded99a690fd311f91b6ec8657c1e",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/03/f3e99fef0eff410e78e7ea342aaa6a54c027db": "bcf352e437277b057ad924e9aa15809d",
".git/objects/03/b45d6e72d6dcf561b9ad58741e8fdbb3aa0d41": "9b8a60dc39ff081194949f23597e7225",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/205aa775daa49485f852aa5564c86b1ad5346d": "341d57ed946e2bf2ca69e19a6522eebd",
".git/objects/32/9f18f44749560f3f45ac3b5cecc06b2e2b2ecf": "0831b5b7dc7816beb3ce008221c6517a",
".git/objects/32/61594b5ab8ad3d766f0f402c38fe994eb32844": "2d37d0399ac4b0dab87f384ce3ec5501",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/b571567b978790ea8964deb89f242228f75224": "6eddc46303a1dc75abb36eee40607a24",
".git/objects/0b/7210212e9665a1cfa71d319d9d1576e0c479d0": "73b198e60123702d2586781c523a6f70",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/31e812aee139d7fdb22866715de16d26353f01": "07d32ed3bb1a0b4558f8072266147c00",
".git/objects/34/3d1d76ecbc4e3b1a2747d7454beff39898642e": "0a1aa5f0e8f9466d19c0e3de74fb3d85",
".git/objects/05/58e7c1283501a4d783a1f11e67867fe99beabc": "d73fbf7332e7da3852cf0ef4db8c3e45",
".git/objects/9d/a445a69ee3a351c1d24b1ac338863ebc152080": "7cf959e0feba323d8a3e1521c6440fa3",
".git/objects/9d/4b39f458b282b1cc7d8460eb9b540a9a23ddae": "8eae1d349a97d8709abb5eb23198385a",
".git/objects/02/e525b8b5b59b1c1d1c2d296eb556d2abdd4b22": "f2757207d3e57563b8e70f45db80108d",
".git/objects/a4/e8f0d35a54a429a6d86191c0dc88c526ebb588": "70abb8b5765d8e5fb8456b781e7b5d72",
".git/objects/a3/1f2f06034349dfd2e667727956680ee7a9c839": "0ba54ad274dcd249f35f4046c1dc461d",
".git/objects/a3/55742238b088c2a1ffec232329677848e9ca29": "16dfc6f141c7640225c3b799ea35410b",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/f9c9be2c2b48ff7665364bdeae8345413ed1e2": "ef9cc2e0296c6cb13ce74eb9db13d24f",
".git/objects/ac/db953f83c6310461d6073c02d7060364c74941": "b2d06e96e339238184cd5b3e76299ea4",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/c7b7808f102fd1667589bb7a45c1d4cc344565": "e5793165d23284ecf702806293dddbd2",
".git/objects/df/6834d7506327189cff2ceea8ec6f361637078b": "b1192f0b7567ce56d00e8f6b5412cb3f",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/412f6d3e05b766bd0a8199e0a357ae97ead678": "d01579457b4f9820f087fd32a6d9dd0b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/25481e90b812a3044e65d58d51998fb6eb8c5f": "3caca031e636d4cc3b9c56e20f90802e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/643918b42c13d14dc4ad02f537f020e55bb2a3": "9152d2c94e47a4ea3840ffaa35359bb0",
".git/objects/fd/87dacc84c9849e267cce89bf798444ce2f21fd": "6538377b6b58a390fab9d40fc1726a98",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4bf2a122807547786e7edb5daf96fb0fdbfcac": "154a240850fceada5e12a8eb7cadc28f",
".git/objects/ca/78739813da6e0df6b3e17f949379b41526f650": "729e6690e0efbbbcc31e4f543b312bfa",
".git/objects/e4/9d96a5aeb5c606a013cad128376c4beeea2d51": "b133ce231a77f69851bbb2505716af5d",
".git/objects/ed/f8e93a6d1538c36caa4c3f9844ccb176f526b9": "db271f630a3a3fd93991f0498fe5b20f",
".git/objects/c6/6adc13779dc73fdb4c13ce6157638708b12239": "6aab9d6f439c2590a0a0c887bada6b5c",
".git/objects/c6/a47c81452f3a82ab41158edde313eb8b3a3051": "0b9cd8328bb17aa2fc3305aaeb7c25f5",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/a424395fb1bb4a436e123e39d8f5026ec99938": "0dcf8cea4712ff4a6d0f0a2f4ead52f8",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/11/bad9fe8609f209ab4d6888ed118b0e373ddfab": "26e136e33404331a37cd25dcac69d49a",
".git/objects/29/eaf76026f2573ad96264f8314357d8c23d0e36": "d2b8aaa34ae6edade80058edf4a44281",
".git/objects/7c/afe478dc3531777cf462312f2040cc81028761": "19f59b29f80ac67b2523ce912a256b68",
".git/objects/16/4f1f4e17b8c57f025ed6cd39a78b34ee2ea85c": "a7e76ec37b5e8a47851577846c89f44d",
".git/objects/16/786b21a58eb43ba300342fcc793fa7f7d45a24": "cc93cf79477980d25935049bb7f0b3e2",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/1a/c9df14d10262f048ba7b7174dcc34372ab1194": "9a6ed51ae6b62d5c58417b25d2177827",
".git/objects/7b/403004dcca8b362497f06e3cac67359f2e1e7c": "e50eff77a9415f7054b592a05aa7ec46",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/7e/fc95081437603f25ceb37810db110bcd55b9a3": "e14639334bea7e7d61ad1651a8aee125",
".git/objects/4c/7a30e851e6a8f5272361c6f8971ad1ec5489d3": "4491fb81c0b65c651bac1fdafbebfa42",
".git/objects/72/2605d4ed5ec9f2bb93d2d0a464512058884b95": "e6dd5c2bd395eaa45f14ca3a02fa44c9",
".git/objects/72/c0b5e38d6289569d419cd084fe882c59a759b6": "01770191665b66813a4f784a7daf1854",
".git/objects/2f/6e9096ed3b5818fa461a6cc7c2deb8971772ac": "0de7c67866867ae47e5107f74988f333",
".git/objects/43/c838eea8a269a8482e35cf36a56133d7199348": "ee74857ccdfde58063a99dfc3176aae5",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/6e/32d8e85e70872d5f6c6665bb6da29c54d89bef": "80ca490548aef7b3463efe19cfe11292",
".git/objects/6e/78eddcada761103632a87c1f1e04d15e5d7112": "9d6052f0bb7f1dc35c6b43e8334c2773",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/31/6aa955e8cb263995b6145c0a50e480cd625f92": "6cd9a8296d351f6d873aba02263caf47",
".git/objects/91/0e5e3f8e451ab0e615cc5fffdbc4009430dfcf": "f6cffa8288879ccd22da2c65fde7b941",
".git/objects/62/69a24c35f5b2501311e6c5e07d7f8a188795f0": "474caaca870976cca9e9ed34f378c24c",
".git/objects/96/f27e8b860a11e7f3c3bb6b9803be87857f835b": "587348bde84d6c50586cbfc2bd769e75",
".git/objects/53/de914a80059ee89ce7ade772573d871c12f761": "4812970ed1eb45b33b473905b028963d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/30/1cf06b19091a50a20ae40e6a8484da184cf490": "efe1115d69242437dbf3af912fe41c1a",
".git/objects/5e/574ccfe354f910e18f9d0a4a040da1d3729ad3": "2ddf397b59f11e259b7cd9cdf4804941",
".git/objects/5b/916ddebd9fba6539906d22133c9ed8717a025b": "4884c724bc4bf299d7fd7379ae1a8537",
".git/objects/6d/6ba0a136186143ed8f5b858c5309f9de5916c7": "504313b59e3ae5e4eb31e10660340e87",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/63/4de43eb0f72269fcb569ebcbab51ebbe357837": "67ff8a2b0e967239791a4f82949459f1",
".git/objects/64/24ec25a49acdbca32087a3cb32415f54d0c5da": "2d174b0022b1bf0f409c585c72e55cff",
".git/objects/bf/7e5ac8f6ed16ca5b182072ff00abc3be2d4e83": "170462748441131ce00b1815d3d9e4d0",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/d0212eec45fb8e8c037556074079d925cdc38a": "6e50f77aeb36cf38c941ac929fa8f5e0",
".git/objects/b8/209781d078f0854bad0f970d90ac8fa2a05cfe": "0669b02146260a4d7aa4a10e993d3169",
".git/objects/dd/251198466b656436a66a883d92a083de752e35": "b055082396c8dea1fb76046cd5fc76f6",
".git/objects/b6/84cb130fdbe9ee426fe354640540d2d28f75b5": "6f6d15c2a692a65694f2b8228760183e",
".git/objects/a9/2c7a3d371cef81280d9a98c541ebe485c1fc37": "f84e76e0b0b77fa3f7f045e5b950c6e5",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6c1cad7097a2ee77140c6494d80b5add3521cb": "f146ec0ac36687246be613b1988b3e0f",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/407e45e71866a6a80174f0f92df2e15c9370e5": "a21012a1edb3cf94b7c2a4bcc6d08872",
".git/objects/b0/dabfe0292997abd9687311e946c431af15922e": "945969fa83874b7ecf9b4e975818d43d",
".git/objects/a6/5cab6f602c37d4ca2b8ffdb3f1b85f2020ec53": "fd22df7bf56239af16dd8fcd987d20c0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/8518d9c4d4235082332eb3a7ea2c72b7b8976e": "beaedb50eeb6d9e091275d8ad39fa0aa",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c2/e71a8960e864c3e482719476732fe04ffbb961": "52191a6c3356c85c5ff04ff0507577f7",
".git/objects/e9/86069ead94dfc7b908ef2c2b551b35e23c8a8e": "d2184afc7d0f85327f0110d321e90ef6",
".git/objects/f1/2012c16ae1b54fdc7da24ba202f0aa4769ff23": "329bce8e14ac0af0bac7d4d2a477ff17",
".git/objects/e7/dfdca611eadc13d6b844418c97ff235f7346f2": "9185ec0e0ef879faedec64680f4e9c61",
".git/objects/ce/40d984a8a5c4d3fad2cc21669f898387fc0f36": "76b10f4964d22df69fc24aafaaad666f",
".git/objects/ce/da1862aec4b7b9714966dc308212e5908777f0": "34e9333951d9bfa3e2ffbe8c3b5ec87a",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/d68db110631a59d6da7e91af42af25e6fb09f8": "609b2b2221a4dc6e54862a66a6a151f1",
".git/objects/2d/002da63a7c9e068cf3f4c6081125b6ce314849": "b1d56c75ca2994face7d76bf52dd7c52",
".git/objects/2d/bd2964a3ec8bb18fce7c31e8f9d1160687b70d": "bbde367bd99e2ce72f2aee11dcabd14e",
".git/objects/83/d31bf36ad0681b6d84ffbaf7da0dd7e60edd54": "3d38f4461a1614eaea271056fffa329f",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/23/8bb43f754aeb291057a660af02d1069592f6b4": "b842e68ad7e11f28586af1c50d039e5c",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8c/74fc4d1d1f96e9b94341c754ca5bb4811b0446": "8b2f759258ad06e3b554c83ccd8b560e",
".git/objects/8c/a97aee49bfa7cebe0790050bb66acd385dc7bd": "11c2a176fa53e95ca51feb2f54f24dbc",
".git/objects/1d/d026968e6f81a2d31759691cbf7f25504f3d3a": "e3bc1436dad0b8670307a2ea6c2b2b1a",
".git/objects/71/1c4ca39002131adc37e05cf25959b67260727a": "fc6e12025503b6cdfc44edcad77df9b7",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/e16b34d3df905996cd18f7f513ad97779b3ef8": "6966aa185eca32851f99e8be4df57c70",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/9561b30626cfae89b000454e278996bb41289b": "bb388a4cf3d2c8441d8b4e9976e87f90",
".git/objects/2e/dd257b4a3fe100f9390185dbdb471a56cc09aa": "1ba8904b5e4147aae1ef7154cde5b3b2",
".git/objects/2b/4e36b6ec803737abd74bf78537a2a0fa5b1613": "9696ecf4823f76f7d37cd5662855b38d",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/13/55ca89f3e31efe0b0895d4692c15d19541afa2": "54f7c10c3edee67a24d3be348579e919",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac13581d3fd718fc637f39d193d00459",
".git/logs/refs/heads/master": "ac13581d3fd718fc637f39d193d00459",
".git/logs/refs/remotes/origin/master": "87923ca7bcb63af6280bc9530a3af8ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "b4345b9b0ec204a6602388878c7f340e",
".git/refs/remotes/origin/master": "a50d36b36334420d1d36f0dc1ccdb541",
".git/index": "7f340e7a4d65a9236706d1566f6be424",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "d6396b33aedb5f92b6f23a6b06eec266",
".git/FETCH_HEAD": "8b9d850cf3cedd51d59438472a8e88e4",
"assets/AssetManifest.json": "af4e11e3a4b583d4d829d3a77447c23f",
"assets/NOTICES": "052360bcfc72fbd165e82990ac28da97",
"assets/FontManifest.json": "e3d083b4ffd19a00bfccbc07e5d4cbe9",
"assets/AssetManifest.bin.json": "6b355a9303d416559ac9fea780b47e78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1c9d9d95106241c3b33b5d783ef37424",
"assets/fonts/MaterialIcons-Regular.otf": "ccebd3c62f26180d37d394354ad753c1",
"assets/assets/images/market_clip_02.png": "d3151547cd5d5756877636374c185b20",
"assets/assets/images/solsun_logo.png": "3e24ef438da547e96b0367bc5d3dd3df",
"assets/assets/images/market_clip_03.png": "f9c0a3ad8dc3bb5e46679665a53b7809",
"assets/assets/images/market_clip_01.png": "6ac71ad4da3a664d8d989d6637f894e2",
"assets/assets/images/market_clip_04.png": "6f1b8abe8b073b09f6a87de58a6d3854",
"assets/assets/images/market_clip_05.png": "4bb22b5401a7361b43f5a94f70ec2afa",
"assets/assets/images/market_clip_07.png": "6c56d355589629a779039cd54cb5ba3a",
"assets/assets/images/market_clip_06.png": "565835661f9f3b7f0f4d225838e6c08f",
"assets/assets/images/grab_thumb_logo.png": "18f1cce5ffb8b97380afb9da010918ba",
"assets/assets/images/grab_thumb_02.png": "120ca8363dea4c476d215a6e553e03e9",
"assets/assets/images/grab_thumb_03.png": "002f21c15794d70f7742f6f9e64a575c",
"assets/assets/images/grab_thumb_01.png": "4b053ebd144f8498f12f8793c2cb6d09",
"assets/assets/images/solsun_meta_tag.png": "cb3a83d57be91eb67462df171507c3fd",
"assets/assets/images/background.png": "1120992e902f93e7dea61f2570aac409",
"assets/assets/images/market_clip_logo.png": "c261beb3531a76d3952cc04c9c02c8e3",
"assets/assets/images/market_clip_example.gif": "6b591940dbf33120a8d248f80f53fb5d",
"assets/assets/fonts/CrimsonText-SemiBold.ttf": "34b92308cc1867957b375e5aa05d005e",
"assets/assets/fonts/Anta-Regular.ttf": "08dc1c5893bfab96b496642e402e21fa",
"assets/assets/fonts/CrimsonText-Bold.ttf": "92e8dfc1d9c8baed40c860318b3c5186",
"assets/assets/fonts/CrimsonText-Regular.ttf": "c8eaeb3ab46e610c4fa4a623ee8d282f",
"assets/assets/fonts/Play-Regular.ttf": "a83df317dd89c7dd5388a152a26b2236",
"assets/assets/fonts/Play-Bold.ttf": "6a82d0104d58be230604d30b6159322c",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

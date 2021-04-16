/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fbd49443459df7e10733c4b374779a85"
  },
  {
    "url": "assets/css/0.styles.77f01fc4.css",
    "revision": "172ee3a6ec7a0924e45a2c34cd97ff89"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/js/1.e87e1c48.js",
    "revision": "618e2f9b69ca7de5b11a75e88bca5de2"
  },
  {
    "url": "assets/js/10.64bbabd1.js",
    "revision": "4d7460938f4272ea23f38ce2a9a8a036"
  },
  {
    "url": "assets/js/11.e5df54e0.js",
    "revision": "c80feb30c2ea998a490d126e7a38211c"
  },
  {
    "url": "assets/js/12.f0106d78.js",
    "revision": "b4a894843e1630e95b8fe1a511acd053"
  },
  {
    "url": "assets/js/13.407ef1a6.js",
    "revision": "7871447539aa5497fd17bee53d5be26d"
  },
  {
    "url": "assets/js/14.6e424b90.js",
    "revision": "e7588dad841bea3e73f43c0529f7cad6"
  },
  {
    "url": "assets/js/15.b7dd5a2b.js",
    "revision": "e68670074b49fed7a74ab4a04af3011a"
  },
  {
    "url": "assets/js/16.38d59d6b.js",
    "revision": "774384048f65dcffb446b6201f9274cc"
  },
  {
    "url": "assets/js/17.661256e4.js",
    "revision": "b8098b9e0234cbdbae22fbe0bb154da1"
  },
  {
    "url": "assets/js/18.217222a8.js",
    "revision": "2eb1d63dbcd4cf2cc0fe67feff5a96e5"
  },
  {
    "url": "assets/js/19.751052f4.js",
    "revision": "db382711a001747591944330da8b7e85"
  },
  {
    "url": "assets/js/2.6fdc770a.js",
    "revision": "d9699d47530cd66f05e8e66009d12a3c"
  },
  {
    "url": "assets/js/20.d5abbe58.js",
    "revision": "2f34ba443ff17934019c1eede55aff90"
  },
  {
    "url": "assets/js/21.01274ec5.js",
    "revision": "1837a0f617a5094dbaf28d259f5b3040"
  },
  {
    "url": "assets/js/22.5eb82c06.js",
    "revision": "ca196908e447531d1534d1457f1e6924"
  },
  {
    "url": "assets/js/23.03fd6eed.js",
    "revision": "f08deeb0807dc7ca85c5f0cf35108454"
  },
  {
    "url": "assets/js/24.a1da7fde.js",
    "revision": "c27d0a447ef1933cb170a66dce79cc85"
  },
  {
    "url": "assets/js/25.a43325f4.js",
    "revision": "b2944daa3fb8cf835e08750cc5f0ed65"
  },
  {
    "url": "assets/js/26.067ad56c.js",
    "revision": "dedbe3bad8b30f321a80cec3f6816ce5"
  },
  {
    "url": "assets/js/27.c82faccc.js",
    "revision": "39f666674f940d18165d52253f579cb0"
  },
  {
    "url": "assets/js/5.b1d43c17.js",
    "revision": "84957a9bebf2b1956789f313e9be3478"
  },
  {
    "url": "assets/js/6.f982a573.js",
    "revision": "611c4e5299ab9c8dbe686b004ade28c4"
  },
  {
    "url": "assets/js/7.a1e021e2.js",
    "revision": "00fe88cb413b3f3c9e0bcac6b4a2ceca"
  },
  {
    "url": "assets/js/8.b15a12a2.js",
    "revision": "c13c81b34c25d2fed9df6a1d37a99e79"
  },
  {
    "url": "assets/js/9.f7e346c9.js",
    "revision": "96f34893d47295fbb251a18d239a630b"
  },
  {
    "url": "assets/js/app.80f31a8a.js",
    "revision": "11c763425622abbc06225176557d9825"
  },
  {
    "url": "assets/js/vendors~docsearch.7334ba37.js",
    "revision": "35180cbeb56f7cd9b2ac989ed9ae9ec2"
  },
  {
    "url": "categories/index.html",
    "revision": "4f22893447df253e798d44623793bc2d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "836192928be525e95b21233b8a47871d"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "9e28e25af30c1e9dc79d7759ec1a66c3"
  },
  {
    "url": "categories/日语/index.html",
    "revision": "97d1d03e885055dae7fedeecb1b9f5ff"
  },
  {
    "url": "categories/烹饪/index.html",
    "revision": "ca28cb2a38ef73c3eb311a89a205dc9e"
  },
  {
    "url": "categories/英语/index.html",
    "revision": "ddbfd96226f9f15fbe051d44dd1c04b5"
  },
  {
    "url": "en_us/blog/lemontree.html",
    "revision": "8e37ce777024a66f6438ecf9677a45fc"
  },
  {
    "url": "en_us/index.html",
    "revision": "2fce06b3665a8a89b542a3cca3df9a78"
  },
  {
    "url": "front_end/encapsulation.html",
    "revision": "8a5486ee4d60abce7add429631e77c9a"
  },
  {
    "url": "front_end/index.html",
    "revision": "fa5459382077afe2b29fa59ddf57ea88"
  },
  {
    "url": "future/index.html",
    "revision": "2dc03d0d4b107a64a5d634abc837f091"
  },
  {
    "url": "hero.jpg",
    "revision": "0f184b428a51146ffdab3502b3cb7200"
  },
  {
    "url": "hero.png",
    "revision": "67392ef89883a15b1e9ce7f1c9e5b744"
  },
  {
    "url": "img/bg/bilibili (4).jpeg",
    "revision": "a7d3fab51cb2a530d4f30b6a20d28116"
  },
  {
    "url": "img/bg/bilibili_fengji_copy.jpeg",
    "revision": "f96253f50e176d91e160d4922bfbf94c"
  },
  {
    "url": "img/bg/bilibili_fengji.jpeg",
    "revision": "0c195089a09f93f7e1ec999b767c50a8"
  },
  {
    "url": "img/bg/bilibili_hege.jpeg",
    "revision": "6a16023c17caadd45d332c8ccb71c8e9"
  },
  {
    "url": "img/bg/bilibili.jpeg",
    "revision": "a693ecab0d6950605b583afaa7540fc0"
  },
  {
    "url": "img/gifs/mio.gif",
    "revision": "a0bced4775d7770f4bb22fa01c03fe19"
  },
  {
    "url": "img/gifs/sisters.gif",
    "revision": "ac14c33563352b146bb06dea0ac0997e"
  },
  {
    "url": "img/mio (2).jpg",
    "revision": "651710fe550d15f4855322ec42cd17c1"
  },
  {
    "url": "img/mio (3).jpg",
    "revision": "6a990ddb5c3eaa8908be629f11291df9"
  },
  {
    "url": "img/mio.jpeg",
    "revision": "ea80f466ff66a8c646ab0014f12b3531"
  },
  {
    "url": "img/mio.jpg",
    "revision": "b08cc8ff958be5022b807389f060b9ce"
  },
  {
    "url": "img/pngs/mio (2).png",
    "revision": "f3b0fae8023adbae5fc93e943ef7e9f6"
  },
  {
    "url": "img/pngs/mio (3).png",
    "revision": "cb00f7c077600752b53b664b64a73107"
  },
  {
    "url": "img/pngs/mio.png",
    "revision": "b2f6c0dbc399300ed03734d5294bac1d"
  },
  {
    "url": "img/pngs/sisters (2).png",
    "revision": "1bef2832e2f16e51283a37489c55dad9"
  },
  {
    "url": "img/pngs/sisters (3).png",
    "revision": "8e2bcfc52fd6085b569cff2a5a5ed712"
  },
  {
    "url": "img/pngs/sisters (4).png",
    "revision": "eedb46eeee0f85c00d9ab02673ab3fee"
  },
  {
    "url": "img/pngs/sisters (5).png",
    "revision": "d7d818c2a654d5c6edd0858b21cb93eb"
  },
  {
    "url": "img/pngs/sisters (6).png",
    "revision": "e24e2f1452beac8cfe1bb6a77522d30c"
  },
  {
    "url": "img/pngs/sisters (7).png",
    "revision": "5975ec9c0b44680dcf65a4dcf40bd7d0"
  },
  {
    "url": "img/pngs/sisters (8).png",
    "revision": "338659cd0fd921905ebbc88c633caed1"
  },
  {
    "url": "img/pngs/sisters.png",
    "revision": "6a505af860fe3b1a5cee277a9c64884a"
  },
  {
    "url": "img/pngs/sisters144.png",
    "revision": "4fa6dc5e61821cf539b7d5d115b01f40"
  },
  {
    "url": "img/pngs/sisters152.png",
    "revision": "0b6a68fd7bfb0182d2e30c7bf9a2a8c0"
  },
  {
    "url": "img/sisters (2).jpeg",
    "revision": "32e7a004efa7dd400b9136bd16dff21d"
  },
  {
    "url": "img/sisters (3).jpeg",
    "revision": "11f3417c92a5a18c317fc719d38d04cb"
  },
  {
    "url": "img/sisters (4).jpeg",
    "revision": "02db422b9469fa63998009e457e92138"
  },
  {
    "url": "img/sisters (5).jpeg",
    "revision": "c4e9a23b33ae4e85626dd05ba72f16f3"
  },
  {
    "url": "img/sisters (6).jpeg",
    "revision": "48ed40cdc89412c053c5bd5397ddab31"
  },
  {
    "url": "img/sisters (7).jpeg",
    "revision": "bd51b91b97494f82c1f806be8bbfd8c0"
  },
  {
    "url": "img/sisters (8).jpeg",
    "revision": "95bb6e552672f93d8c3e1180e0b94467"
  },
  {
    "url": "img/sisters.jpeg",
    "revision": "42605e4e4bb61b2a0743958059a47c0b"
  },
  {
    "url": "img/sisters.jpg",
    "revision": "8c7f46151260a048ce5fdaecc0e27987"
  },
  {
    "url": "img/svgs/sisters.svg",
    "revision": "fc2c44f9564740fcd8ba7774f751c283"
  },
  {
    "url": "index.html",
    "revision": "ea78a8a887c12ac4680a3360b0ac3558"
  },
  {
    "url": "ja/blog/badapple.html",
    "revision": "b24d8af5946f6ecd1c5b8abcb51fc29d"
  },
  {
    "url": "ja/blog/butterfly.html",
    "revision": "16ccb0652b78e83c86d3051c2b0a7148"
  },
  {
    "url": "ja/blog/grammar.html",
    "revision": "847fa8a91de229a7e76286d0bdbbf7ad"
  },
  {
    "url": "ja/blog/lemon.html",
    "revision": "8ad87e6d8a1a342e24f26feda02d68be"
  },
  {
    "url": "ja/index.html",
    "revision": "d80ca7749aa45666e2bd2fbf86521cc9"
  },
  {
    "url": "java/basic.html",
    "revision": "e8f98c06cfab0fb471c281991482341a"
  },
  {
    "url": "java/index.html",
    "revision": "a7cc2acf0e430ee14c4b52fa0e7f0a28"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_00.png",
    "revision": "ca0698ca5a3bf2400e5cf8a1f456a61c"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_01.png",
    "revision": "c960c28ee3f0353023d9498d2362d23c"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_02.png",
    "revision": "efb0515bcaee933f8c38e750d2c4bd3b"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_03.png",
    "revision": "f735487e72e73a0ea528975041548a14"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_04.png",
    "revision": "5b282aa9f7d4fa68cc24c946c0556b87"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_05.png",
    "revision": "16f7b74f1e61bf2b21d91ea5c3ee71de"
  },
  {
    "url": "other/index.html",
    "revision": "335430c390115a5ce4518218bcc030e5"
  },
  {
    "url": "tag/index.html",
    "revision": "9800df6e6f92a999d967cf09ac5c370a"
  },
  {
    "url": "tag/java/index.html",
    "revision": "3de417d4fcd55521a6150281a2b18d6d"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6b7cb479d2eec499dc21a1bed5ff53b7"
  },
  {
    "url": "tag/歌词/index.html",
    "revision": "f21ce5590520ec7d7df261bf71198fba"
  },
  {
    "url": "tag/烤/index.html",
    "revision": "f40fc149bcc910a0c76b648d349ea6ee"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "e402f585db749b8fd98a18c501ed70ab"
  },
  {
    "url": "tag/鸭子/index.html",
    "revision": "0fe92554a893c2eac3786814376e3508"
  },
  {
    "url": "timeline/index.html",
    "revision": "a1d2a90f91d980a338cb19e3d45ba640"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

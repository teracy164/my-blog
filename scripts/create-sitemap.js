const firebase = require("firebase");
const app = require("firebase/app");

console.log('create sitemap');

const firebaseConfig = {
    apiKey: 'AIzaSyC_aMtknQGfl6H4CF4QflvTpRM6Et1w0w8',
    authDomain: 'teracy-blog.firebaseapp.com',
    databaseURL: 'https://teracy-blog.firebaseio.com',
    projectId: 'teracy-blog',
    storageBucket: 'teracy-blog.appspot.com',
    messagingSenderId: '585102115477',
    appId: '1:585102115477:web:911240f7756ec92252119c',
    measurementId: 'G-Y5WDKNF899',
};

const a = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore(a);

async function createSiteMapData() {
    const data = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '  <url>',
        '    <loc>https://www.teracy164.com/</loc>',
        '    <priority>1.0</priority>',
        '  </url>',
        '  <url>',
        '    <loc>https://www.teracy164.com/products</loc>',
        '    <priority>1.0</priority>',
        '  </url>',
        '  <url>',
        '    <loc>https://www.teracy164.com/about</loc>',
        '    <priority>1.0</priority>',
        '  </url>',
    ];

    const querySnapshot = await firestore.collection("blogs").get();
    querySnapshot.docs.forEach(doc => {
        console.log(doc.id)
        data.push(...[
            '  <url>',
            `    <loc>https://www.teracy164.com/blogs/${doc.id}</loc>`,
            '    <priority>0.5</priority>',
            '  </url>',
        ]);
    });

    data.push('</urlset>');
    return data.join('\n');
}

async function createSiteMapFile() {
    const data = await createSiteMapData();

    const fs = require('fs');
    fs.writeFileSync('./src/sitemap.xml', data);
}
createSiteMapFile()
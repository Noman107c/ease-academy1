module.exports = [
"[project]/src/lib/cloudinary.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/src/lib/cloudinary.js [app-route] (ecmascript)");
    });
});
}),
"[project]/src/lib/qr-generator.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/node_modules_7cac5bcb._.js",
  "server/chunks/[root-of-the-server]__e4e0f6d3._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/qr-generator.js [app-route] (ecmascript)");
    });
});
}),
];
module.exports = [
"[externals]/mongodb [external] (mongodb, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[externals]_mongodb_e444e0d2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[externals]/mongodb [external] (mongodb, cjs)");
    });
});
}),
"[project]/src/backend/models/FeeCategory.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/src_backend_models_FeeCategory_35dda050.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/backend/models/FeeCategory.js [app-route] (ecmascript)");
    });
});
}),
];
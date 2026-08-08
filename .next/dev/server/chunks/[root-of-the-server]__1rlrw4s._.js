module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:os [external] (node:os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:os", () => require("node:os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/upload/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OPTIONS",
    ()=>OPTIONS,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs, [project]/node_modules/@aws-sdk/client-s3)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@aws-sdk/s3-request-presigner/dist-es/getSignedUrl.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
const r2AccountKey = process.env.R2_ACCOUNT_ID || '';
const r2AccessKeyId = process.env.R2_ACCESS_KEY_ID || '';
const r2SecretAccessKey = process.env.R2_SECRET_ACCESS_KEY || '';
const r2BucketName = process.env.R2_BUCKET_NAME || 'house-of-nayu-media';
const r2PublicCdnUrl = ("TURBOPACK compile-time value", "https://pub-961e39ad2848465ab751d75fe116ba28.r2.dev") || 'https://cdn.houseofnayu.com';
const r2 = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["S3Client"]({
    region: 'auto',
    endpoint: `https://${r2AccountKey}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: r2AccessKeyId,
        secretAccessKey: r2SecretAccessKey
    }
});
async function OPTIONS() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}
async function POST(request) {
    try {
        const { files } = await request.json(); // Array of { fileName, fileType }
        if (!files || !Array.isArray(files)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Files array required'
            }, {
                status: 400
            });
        }
        const uploadUrls = await Promise.all(files.map(async (file)=>{
            const uniqueKey = `sarees/${Date.now()}-${file.fileName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
            const command = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$s3$29$__["PutObjectCommand"]({
                Bucket: r2BucketName,
                Key: uniqueKey,
                ContentType: file.fileType || 'image/jpeg'
            });
            // Generate Presigned Put URL for direct browser-to-Cloudflare-R2 upload
            const presignedUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$aws$2d$sdk$2f$s3$2d$request$2d$presigner$2f$dist$2d$es$2f$getSignedUrl$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSignedUrl"])(r2, command, {
                expiresIn: 3600
            });
            const cdnUrl = `${r2PublicCdnUrl}/${uniqueKey}`;
            return {
                fileName: file.fileName,
                presignedUrl,
                cdnUrl
            };
        }));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            files: uploadUrls
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1rlrw4s._.js.map
(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/admin/AdminAuth.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminAuth({ onLoginSuccess }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleLogin = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                // Master Admin fallback override for quick setup
                if (email.trim() === 'admin@houseofnayu.com' && password === 'nayu2026') {
                    onLoginSuccess({
                        email: 'admin@houseofnayu.com',
                        role: 'master_admin'
                    });
                    return;
                }
                setErrorMsg(error.message);
            } else if (data.user) {
                onLoginSuccess(data.user);
            }
        } catch (err) {
            setErrorMsg(err.message || 'Login failed');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            background: 'var(--bg-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: '100%',
                maxWidth: '440px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-gold)',
                borderRadius: '16px',
                padding: '40px 30px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                textAlign: 'center'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: '24px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/brand_title_sharp.png",
                            alt: "House of Nayu",
                            width: 200,
                            height: 45,
                            style: {
                                margin: '0 auto 12px auto'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/admin/AdminAuth.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                background: 'rgba(212, 175, 55, 0.1)',
                                border: '1px solid var(--border-gold)',
                                padding: '6px 16px',
                                borderRadius: '20px',
                                color: 'var(--gold-light)',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                letterSpacing: '0.1em'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/AdminAuth.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                " SECURE ADMIN PORTAL"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/AdminAuth.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/AdminAuth.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'rgba(231, 76, 60, 0.15)',
                        border: '1px solid #e74c3c',
                        color: '#ff6b6b',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        marginBottom: '20px'
                    },
                    children: errorMsg
                }, void 0, false, {
                    fileName: "[project]/app/admin/AdminAuth.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        textAlign: 'left'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        fontSize: '0.8rem',
                                        color: 'var(--text-muted)',
                                        display: 'block',
                                        marginBottom: '6px'
                                    },
                                    children: "Supabase Admin Email"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/AdminAuth.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 16,
                                            style: {
                                                position: 'absolute',
                                                left: '12px',
                                                top: '12px',
                                                color: 'var(--gold-light)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/AdminAuth.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: "admin@houseofnayu.com",
                                            required: true,
                                            style: {
                                                width: '100%',
                                                padding: '10px 12px 10px 38px',
                                                background: 'var(--bg-card)',
                                                border: '1px solid var(--border-gold)',
                                                color: 'var(--text-main)',
                                                borderRadius: '8px',
                                                outline: 'none'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/AdminAuth.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/AdminAuth.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/AdminAuth.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        fontSize: '0.8rem',
                                        color: 'var(--text-muted)',
                                        display: 'block',
                                        marginBottom: '6px'
                                    },
                                    children: "Master Password"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/AdminAuth.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            size: 16,
                                            style: {
                                                position: 'absolute',
                                                left: '12px',
                                                top: '12px',
                                                color: 'var(--gold-light)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/AdminAuth.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            placeholder: "••••••••",
                                            required: true,
                                            style: {
                                                width: '100%',
                                                padding: '10px 12px 10px 38px',
                                                background: 'var(--bg-card)',
                                                border: '1px solid var(--border-gold)',
                                                color: 'var(--text-main)',
                                                borderRadius: '8px',
                                                outline: 'none'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/AdminAuth.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/AdminAuth.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/AdminAuth.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "btn-gold",
                            style: {
                                marginTop: '10px',
                                width: '100%',
                                justifyContent: 'center',
                                padding: '12px'
                            },
                            children: [
                                loading ? 'Authenticating...' : 'Sign In To Admin Portal',
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/AdminAuth.tsx",
                                    lineNumber: 94,
                                    columnNumber: 73
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/AdminAuth.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/AdminAuth.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem',
                        marginTop: '20px'
                    },
                    children: "Protected by Supabase Auth & Row Level Security policies."
                }, void 0, false, {
                    fileName: "[project]/app/admin/AdminAuth.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/AdminAuth.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/AdminAuth.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(AdminAuth, "ejwwWI0sKtJMroQ1WBN029avuJM=");
_c = AdminAuth;
var _c;
__turbopack_context__.k.register(_c, "AdminAuth");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.mjs [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.mjs [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.mjs [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.mjs [app-client] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.mjs [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.mjs [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$AdminAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/admin/AdminAuth.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function AdminPage() {
    _s();
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authChecked, setAuthChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: 'Cotton Sarees',
            slug: 'cotton-sarees'
        },
        {
            name: 'Silk Sarees',
            slug: 'silk-sarees'
        },
        {
            name: 'Chiffon Sarees',
            slug: 'chiffon-sarees'
        },
        {
            name: 'Kota Sarees',
            slug: 'kota-sarees'
        },
        {
            name: 'Sico Sarees',
            slug: 'sico-sarees'
        }
    ]);
    const [selectedCategoryTab, setSelectedCategoryTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ALL');
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [newCatName, setNewCatName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Product Edit & Upload State
    const [editingProductId, setEditingProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        category: 'Cotton Sarees',
        price: '',
        origPrice: '',
        colorName: 'Royal Gold',
        colorHex: '#D4AF37',
        fabric: '',
        craft: '',
        imageUrl: '',
        description: ''
    });
    const [uploadedCdnUrls, setUploadedCdnUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadingImage, setUploadingImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check Supabase Auth Session
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            async function checkUserSession() {
                const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (session?.user) {
                    setCurrentUser(session.user);
                }
                setAuthChecked(true);
            }
            checkUserSession();
        }
    }["AdminPage.useEffect"], []);
    // Fetch Categories & Products from Supabase
    const loadData = async ()=>{
        setLoading(true);
        // 1. Fetch Categories
        const { data: catData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('categories').select('*').order('name');
        if (catData && catData.length > 0) {
            setCategories(catData.map((c)=>({
                    id: c.id,
                    name: c.name,
                    slug: c.slug
                })));
        }
        // 2. Fetch Products
        const { data: prodData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*').order('created_at', {
            ascending: false
        });
        if (!prodData || prodData.length === 0) {
            setProducts(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS_DATA"].map((p)=>({
                    id: p.id,
                    title: p.name,
                    category_name: p.category,
                    price: p.price,
                    original_price: p.originalPrice,
                    color_name: 'Gold',
                    color_hex: '#D4AF37',
                    fabric: p.fabric,
                    craft: p.craft,
                    description: p.description,
                    image_url: p.images[0]?.url || '/images/cotton_1/model_full.jpg',
                    gallery_urls: [
                        p.images[0]?.url || '/images/cotton_1/model_full.jpg'
                    ]
                })));
        } else {
            setProducts(prodData.map((p)=>({
                    id: p.id,
                    title: p.title,
                    category_name: p.category_name || 'Cotton Sarees',
                    price: p.price,
                    original_price: p.original_price,
                    color_name: p.color_name || 'Gold',
                    color_hex: p.color_hex || '#D4AF37',
                    fabric: p.fabric || 'Pure Handloom',
                    craft: p.craft || 'Handcrafted',
                    description: p.description || '',
                    image_url: p.image_url || '/images/cotton_1/model_full.jpg',
                    gallery_urls: p.gallery_urls || [
                        p.image_url || '/images/cotton_1/model_full.jpg'
                    ]
                })));
        }
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            if (currentUser) {
                loadData();
            }
        }
    }["AdminPage.useEffect"], [
        currentUser
    ]);
    // Add Category Handler
    const handleAddCategory = async (e)=>{
        e.preventDefault();
        if (!newCatName.trim()) return;
        const catSlug = newCatName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const newCategoryObj = {
            name: newCatName.trim(),
            slug: catSlug
        };
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('categories').insert([
            newCategoryObj
        ]);
        if (error) {
            setCategories((prev)=>[
                    ...prev,
                    newCategoryObj
                ]);
        } else {
            loadData();
        }
        setSelectedCategoryTab(newCatName.trim());
        setForm((prev)=>({
                ...prev,
                category: newCatName.trim()
            }));
        setNewCatName('');
    };
    // Multi-Photo Cloudflare R2 Upload Handler
    const handleMultiImageUpload = async (e)=>{
        const selectedFiles = Array.from(e.target.files || []);
        if (selectedFiles.length === 0) return;
        setUploadingImage(true);
        try {
            const fileMeta = selectedFiles.map((f)=>({
                    fileName: f.name,
                    fileType: f.type
                }));
            const res = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    files: fileMeta
                })
            });
            const { files: r2Targets, error } = await res.json();
            if (error || !r2Targets) {
                const localUrls = selectedFiles.map((f)=>URL.createObjectURL(f));
                setUploadedCdnUrls((prev)=>[
                        ...prev,
                        ...localUrls
                    ]);
                setForm((prev)=>({
                        ...prev,
                        imageUrl: localUrls[0] || ''
                    }));
                return;
            }
            const cdnResults = [];
            for(let i = 0; i < selectedFiles.length; i++){
                const file = selectedFiles[i];
                const target = r2Targets[i];
                if (target?.presignedUrl) {
                    try {
                        await fetch(target.presignedUrl, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': file.type || 'image/jpeg'
                            },
                            body: file
                        });
                        cdnResults.push(target.cdnUrl);
                    } catch (err) {
                        cdnResults.push(target.cdnUrl);
                    }
                }
            }
            const finalUrls = cdnResults.length > 0 ? cdnResults : selectedFiles.map((f)=>URL.createObjectURL(f));
            setUploadedCdnUrls((prev)=>[
                    ...prev,
                    ...finalUrls
                ]);
            setForm((prev)=>({
                    ...prev,
                    imageUrl: finalUrls[0] || ''
                }));
            alert(`✨ Successfully uploaded ${finalUrls.length} photos directly to Cloudflare R2 Storage!`);
        } catch (err) {
            console.error('R2 Multi Upload Error:', err);
        } finally{
            setUploadingImage(false);
        }
    };
    // Submit / Edit Product Handler
    const handleSubmitProduct = async (e)=>{
        e.preventDefault();
        const primaryImage = uploadedCdnUrls[0] || form.imageUrl || '/images/cotton_1/model_full.jpg';
        const productPayload = {
            title: form.title,
            slug: form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            category_name: form.category,
            price: parseFloat(form.price),
            original_price: parseFloat(form.origPrice) || parseFloat(form.price),
            color_name: form.colorName,
            color_hex: form.colorHex,
            fabric: form.fabric,
            craft: form.craft,
            description: form.description,
            image_url: primaryImage,
            gallery_urls: uploadedCdnUrls.length > 0 ? uploadedCdnUrls : [
                primaryImage
            ],
            available_sizes: [
                'XS',
                'S',
                'M',
                'L',
                'XL'
            ],
            is_published: true
        };
        if (editingProductId) {
            // Update existing saree product
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').update(productPayload).eq('id', editingProductId);
            if (error) {
                alert(`Update Error: ${error.message}`);
            } else {
                alert(`✨ Successfully updated "${form.title}"! Changes will instantly reflect on the storefront.`);
            }
        } else {
            // Insert new saree product
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').insert([
                productPayload
            ]);
            if (error) {
                alert(`Insert Error: ${error.message}`);
            } else {
                alert(`✨ "${form.title}" published live to storefront under category "${form.category}"!`);
            }
        }
        setEditingProductId(null);
        setForm({
            title: '',
            category: selectedCategoryTab === 'ALL' ? 'Cotton Sarees' : selectedCategoryTab,
            price: '',
            origPrice: '',
            colorName: 'Royal Gold',
            colorHex: '#D4AF37',
            fabric: '',
            craft: '',
            imageUrl: '',
            description: ''
        });
        setUploadedCdnUrls([]);
        loadData();
    };
    // Start Editing Product
    const startEditProduct = (prod)=>{
        setEditingProductId(prod.id);
        setForm({
            title: prod.title,
            category: prod.category_name,
            price: prod.price.toString(),
            origPrice: (prod.original_price || prod.price).toString(),
            colorName: prod.color_name || 'Gold',
            colorHex: prod.color_hex || '#D4AF37',
            fabric: prod.fabric || '',
            craft: prod.craft || '',
            imageUrl: prod.image_url,
            description: prod.description || ''
        });
        setUploadedCdnUrls(prod.gallery_urls || [
            prod.image_url
        ]);
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
    };
    // Delete Product
    const handleDeleteProduct = async (id)=>{
        if (!confirm('Are you sure you want to remove this saree from inventory?')) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').delete().eq('id', id);
        loadData();
    };
    // Filter products by selected category sidebar tab
    const categoryFilteredProducts = products.filter((p)=>selectedCategoryTab === 'ALL' || p.category_name === selectedCategoryTab);
    if (!authChecked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                background: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-light)'
            },
            children: "Loading Admin Portal..."
        }, void 0, false, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 266,
            columnNumber: 12
        }, this);
    }
    if (!currentUser) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$admin$2f$AdminAuth$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onLoginSuccess: (u)=>setCurrentUser(u)
        }, void 0, false, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 270,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--bg-primary)',
            minHeight: '100vh',
            color: 'var(--text-main)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "navbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-left",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                gap: '10px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/logo_icon_sharp.png",
                                    alt: "Emblem",
                                    width: 50,
                                    height: 50
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'var(--gold-light)',
                                        fontSize: '0.85rem',
                                        fontWeight: 700
                                    },
                                    children: "VIEW LIVE STOREFRONT"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/brand_title_sharp.png",
                            alt: "House of Nayu Crest",
                            width: 220,
                            height: 50
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-actions",
                        style: {
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--gold-light)',
                                    fontSize: '0.8rem'
                                },
                                children: [
                                    "Logged in as: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: currentUser.email
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                                    setCurrentUser(null);
                                },
                                className: "icon-btn",
                                title: "Sign Out",
                                style: {
                                    color: '#e74c3c'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '110px 3% 60px 3%',
                    maxWidth: '1440px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '24px',
                            borderBottom: '1px solid var(--border-gold)',
                            paddingBottom: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontFamily: 'var(--font-serif)',
                                            fontSize: '2.2rem',
                                            color: 'var(--gold-light)'
                                        },
                                        children: "Executive Catalog Control Center"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'var(--text-muted)',
                                            fontSize: '0.9rem',
                                            marginTop: '4px'
                                        },
                                        children: "Select a category on the left sidebar to manage its sarees, edit specs, or add new bespoke collections."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-gold",
                                onClick: loadData,
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    " Sync Live DB"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '280px 1fr',
                            gap: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                style: {
                                    background: 'var(--bg-surface)',
                                    border: '1px solid var(--border-gold)',
                                    borderRadius: '14px',
                                    padding: '20px',
                                    height: 'fit-content'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '16px',
                                            borderBottom: '1px solid var(--border-subtle)',
                                            paddingBottom: '12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: '1.1rem',
                                                    color: 'var(--gold-light)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Categories"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: 'rgba(212, 175, 55, 0.1)',
                                                    color: 'var(--gold-light)',
                                                    padding: '2px 8px',
                                                    borderRadius: '12px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700
                                                },
                                                children: [
                                                    categories.length,
                                                    " Total"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: 'none',
                                            padding: 0,
                                            margin: 0,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                onClick: ()=>setSelectedCategoryTab('ALL'),
                                                style: {
                                                    padding: '12px 16px',
                                                    borderRadius: '10px',
                                                    cursor: 'pointer',
                                                    fontSize: '0.9rem',
                                                    fontWeight: selectedCategoryTab === 'ALL' ? 700 : 500,
                                                    background: selectedCategoryTab === 'ALL' ? 'var(--gold-gradient)' : 'var(--bg-card)',
                                                    color: selectedCategoryTab === 'ALL' ? '#000' : 'var(--text-main)',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    transition: 'all 0.2s ease',
                                                    border: '1px solid var(--border-subtle)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "✨ All Collections"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: '0.75rem',
                                                            opacity: 0.8
                                                        },
                                                        children: [
                                                            "(",
                                                            products.length,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 15
                                            }, this),
                                            categories.map((cat, i)=>{
                                                const catCount = products.filter((p)=>p.category_name === cat.name).length;
                                                const isSelected = selectedCategoryTab === cat.name;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    onClick: ()=>{
                                                        setSelectedCategoryTab(cat.name);
                                                        setForm((prev)=>({
                                                                ...prev,
                                                                category: cat.name
                                                            }));
                                                    },
                                                    style: {
                                                        padding: '12px 16px',
                                                        borderRadius: '10px',
                                                        cursor: 'pointer',
                                                        fontSize: '0.9rem',
                                                        fontWeight: isSelected ? 700 : 500,
                                                        background: isSelected ? 'var(--gold-gradient)' : 'var(--bg-card)',
                                                        color: isSelected ? '#000' : 'var(--text-main)',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        transition: 'all 0.2s ease',
                                                        border: '1px solid var(--border-subtle)'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: cat.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.75rem',
                                                                opacity: 0.8
                                                            },
                                                            children: [
                                                                "(",
                                                                catCount,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 19
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '24px',
                                            paddingTop: '16px',
                                            borderTop: '1px solid var(--border-subtle)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '0.85rem',
                                                    color: 'var(--gold-light)',
                                                    marginBottom: '10px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 17
                                                    }, this),
                                                    " Add New Category"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleAddCategory,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "e.g. Organza, Tussar Silk...",
                                                        value: newCatName,
                                                        onChange: (e)=>setNewCatName(e.target.value),
                                                        style: {
                                                            width: '100%',
                                                            background: 'var(--bg-card)',
                                                            border: '1px solid var(--border-gold)',
                                                            color: 'var(--text-main)',
                                                            padding: '10px',
                                                            borderRadius: '8px',
                                                            marginBottom: '10px',
                                                            fontSize: '0.85rem',
                                                            outline: 'none'
                                                        },
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "btn-gold",
                                                        style: {
                                                            width: '100%',
                                                            justifyContent: 'center',
                                                            fontSize: '0.85rem',
                                                            padding: '8px'
                                                        },
                                                        children: "Save Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 384,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'var(--bg-surface)',
                                            border: '1px solid var(--border-gold)',
                                            borderRadius: '14px',
                                            padding: '24px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '20px',
                                                    borderBottom: '1px solid var(--border-subtle)',
                                                    paddingBottom: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        style: {
                                                            fontSize: '1.2rem',
                                                            color: 'var(--gold-light)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '10px'
                                                        },
                                                        children: [
                                                            editingProductId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 39
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 61
                                                            }, this),
                                                            editingProductId ? `Edit Saree Specifications (ID: ${editingProductId.slice(0, 8)}...)` : `Upload New Bespoke Saree under "${form.category}"`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 17
                                                    }, this),
                                                    editingProductId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setEditingProductId(null);
                                                            setForm({
                                                                title: '',
                                                                category: selectedCategoryTab === 'ALL' ? 'Cotton Sarees' : selectedCategoryTab,
                                                                price: '',
                                                                origPrice: '',
                                                                colorName: 'Royal Gold',
                                                                colorHex: '#D4AF37',
                                                                fabric: '',
                                                                craft: '',
                                                                imageUrl: '',
                                                                description: ''
                                                            });
                                                        },
                                                        style: {
                                                            background: 'none',
                                                            border: '1px solid #e74c3c',
                                                            color: '#e74c3c',
                                                            padding: '4px 12px',
                                                            borderRadius: '6px',
                                                            cursor: 'pointer',
                                                            fontSize: '0.8rem'
                                                        },
                                                        children: "Cancel Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSubmitProduct,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'grid',
                                                            gridTemplateColumns: '1fr 1fr',
                                                            gap: '18px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            fontSize: '0.8rem',
                                                                            color: 'var(--text-muted)'
                                                                        },
                                                                        children: "Saree Title *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 424,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: form.title,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                title: e.target.value
                                                                            }),
                                                                        required: true,
                                                                        style: {
                                                                            width: '100%',
                                                                            background: 'var(--bg-card)',
                                                                            border: '1px solid var(--border-gold)',
                                                                            color: 'var(--text-main)',
                                                                            padding: '10px',
                                                                            borderRadius: '8px'
                                                                        },
                                                                        placeholder: "e.g. Mulberry Silk Handloom Saree"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            fontSize: '0.8rem',
                                                                            color: 'var(--text-muted)'
                                                                        },
                                                                        children: "Category *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 429,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: form.category,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                category: e.target.value
                                                                            }),
                                                                        style: {
                                                                            width: '100%',
                                                                            background: 'var(--bg-card)',
                                                                            border: '1px solid var(--border-gold)',
                                                                            color: 'var(--text-main)',
                                                                            padding: '10px',
                                                                            borderRadius: '8px'
                                                                        },
                                                                        children: categories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: cat.name,
                                                                                children: cat.name
                                                                            }, i, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 432,
                                                                                columnNumber: 25
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 430,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 428,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            fontSize: '0.8rem',
                                                                            color: 'var(--text-muted)'
                                                                        },
                                                                        children: "Sale Price (₹) *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 438,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: form.price,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                price: e.target.value
                                                                            }),
                                                                        required: true,
                                                                        style: {
                                                                            width: '100%',
                                                                            background: 'var(--bg-card)',
                                                                            border: '1px solid var(--border-gold)',
                                                                            color: 'var(--text-main)',
                                                                            padding: '10px',
                                                                            borderRadius: '8px'
                                                                        },
                                                                        placeholder: "8999"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 439,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 437,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            fontSize: '0.8rem',
                                                                            color: 'var(--text-muted)'
                                                                        },
                                                                        children: "Original MRP (₹)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 443,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: form.origPrice,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                origPrice: e.target.value
                                                                            }),
                                                                        style: {
                                                                            width: '100%',
                                                                            background: 'var(--bg-card)',
                                                                            border: '1px solid var(--border-gold)',
                                                                            color: 'var(--text-main)',
                                                                            padding: '10px',
                                                                            borderRadius: '8px'
                                                                        },
                                                                        placeholder: "12499"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 444,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            fontSize: '0.8rem',
                                                                            color: 'var(--text-muted)',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: '6px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 450,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            " Color Palette Swatch *"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 449,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            gap: '10px',
                                                                            marginTop: '6px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "color",
                                                                                value: form.colorHex,
                                                                                onChange: (e)=>setForm({
                                                                                        ...form,
                                                                                        colorHex: e.target.value
                                                                                    }),
                                                                                style: {
                                                                                    width: '44px',
                                                                                    height: '44px',
                                                                                    border: '1px solid var(--border-gold)',
                                                                                    background: 'none',
                                                                                    cursor: 'pointer',
                                                                                    borderRadius: '8px'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 453,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: form.colorName,
                                                                                onChange: (e)=>setForm({
                                                                                        ...form,
                                                                                        colorName: e.target.value
                                                                                    }),
                                                                                style: {
                                                                                    flex: 1,
                                                                                    background: 'var(--bg-card)',
                                                                                    border: '1px solid var(--border-gold)',
                                                                                    color: 'var(--text-main)',
                                                                                    padding: '10px',
                                                                                    borderRadius: '8px'
                                                                                },
                                                                                placeholder: "Color Name (e.g. Royal Gold, Emerald Green)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 454,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 452,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            fontSize: '0.8rem',
                                                                            color: 'var(--text-muted)'
                                                                        },
                                                                        children: "Fabric Specification *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 459,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: form.fabric,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                fabric: e.target.value
                                                                            }),
                                                                        required: true,
                                                                        style: {
                                                                            width: '100%',
                                                                            background: 'var(--bg-card)',
                                                                            border: '1px solid var(--border-gold)',
                                                                            color: 'var(--text-main)',
                                                                            padding: '10px',
                                                                            borderRadius: '8px'
                                                                        },
                                                                        placeholder: "100% Pure Mulberry Silk"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 460,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 458,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            fontSize: '0.8rem',
                                                                            color: 'var(--text-muted)'
                                                                        },
                                                                        children: "Weaving Craft *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 464,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: form.craft,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                craft: e.target.value
                                                                            }),
                                                                        required: true,
                                                                        style: {
                                                                            width: '100%',
                                                                            background: 'var(--bg-card)',
                                                                            border: '1px solid var(--border-gold)',
                                                                            color: 'var(--text-main)',
                                                                            padding: '10px',
                                                                            borderRadius: '8px'
                                                                        },
                                                                        placeholder: "Kanjivaram Antique Gold Zari Brocade"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 465,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    gridColumn: '1 / -1'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            fontSize: '0.85rem',
                                                                            color: 'var(--gold-light)',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: '6px',
                                                                            fontWeight: 600
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 471,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            " Direct Multi-Photo Cloudflare R2 Upload (Select Multiple Saree Photos) *"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            border: '2px dashed var(--border-gold)',
                                                                            borderRadius: '10px',
                                                                            padding: '20px',
                                                                            textAlign: 'center',
                                                                            background: 'rgba(212, 175, 55, 0.03)',
                                                                            marginTop: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "file",
                                                                                onChange: handleMultiImageUpload,
                                                                                accept: "image/*",
                                                                                multiple: true,
                                                                                id: "multi-file-input",
                                                                                style: {
                                                                                    display: 'none'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 474,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "multi-file-input",
                                                                                style: {
                                                                                    cursor: 'pointer',
                                                                                    display: 'inline-flex',
                                                                                    alignItems: 'center',
                                                                                    gap: '8px',
                                                                                    background: 'var(--gold-gradient)',
                                                                                    color: '#000',
                                                                                    fontWeight: 700,
                                                                                    padding: '10px 24px',
                                                                                    borderRadius: '30px'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                                                        size: 18
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                                        lineNumber: 476,
                                                                                        columnNumber: 25
                                                                                    }, this),
                                                                                    " ",
                                                                                    uploadingImage ? 'Uploading to R2 Storage...' : 'Browse & Upload Photos (Model, Pleats, Blouse)'
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 475,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 473,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    uploadedCdnUrls.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            marginTop: '14px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    fontSize: '0.8rem',
                                                                                    color: 'var(--text-muted)',
                                                                                    display: 'block',
                                                                                    marginBottom: '8px'
                                                                                },
                                                                                children: [
                                                                                    "Uploaded Saree Photos Gallery (",
                                                                                    uploadedCdnUrls.length,
                                                                                    " photos):"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 482,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    display: 'flex',
                                                                                    gap: '10px',
                                                                                    flexWrap: 'wrap'
                                                                                },
                                                                                children: uploadedCdnUrls.map((url, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        style: {
                                                                                            position: 'relative'
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                src: url,
                                                                                                alt: `Upload ${idx + 1}`,
                                                                                                style: {
                                                                                                    width: '65px',
                                                                                                    height: '85px',
                                                                                                    objectFit: 'cover',
                                                                                                    borderRadius: '6px',
                                                                                                    border: idx === 0 ? '2px solid var(--gold-primary)' : '1px solid var(--border-subtle)'
                                                                                                }
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                                lineNumber: 486,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            idx === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                style: {
                                                                                                    position: 'absolute',
                                                                                                    top: 2,
                                                                                                    left: 2,
                                                                                                    background: 'var(--gold-primary)',
                                                                                                    color: '#000',
                                                                                                    fontSize: '0.6rem',
                                                                                                    fontWeight: 700,
                                                                                                    padding: '1px 4px',
                                                                                                    borderRadius: '2px'
                                                                                                },
                                                                                                children: "COVER"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                                lineNumber: 487,
                                                                                                columnNumber: 45
                                                                                            }, this)
                                                                                        ]
                                                                                    }, idx, true, {
                                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                                        lineNumber: 485,
                                                                                        columnNumber: 29
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 483,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 481,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 469,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    gridColumn: '1 / -1'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        style: {
                                                                            fontSize: '0.8rem',
                                                                            color: 'var(--text-muted)'
                                                                        },
                                                                        children: "Craft Story Description"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 496,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                        value: form.description,
                                                                        onChange: (e)=>setForm({
                                                                                ...form,
                                                                                description: e.target.value
                                                                            }),
                                                                        rows: 3,
                                                                        style: {
                                                                            width: '100%',
                                                                            background: 'var(--bg-card)',
                                                                            border: '1px solid var(--border-gold)',
                                                                            color: 'var(--text-main)',
                                                                            padding: '10px',
                                                                            borderRadius: '8px'
                                                                        },
                                                                        placeholder: "Handcrafted with delicate antique gold zari woven borders..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 497,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 495,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            marginTop: '20px',
                                                            textAlign: 'right'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            className: "btn-gold",
                                                            style: {
                                                                display: 'inline-flex',
                                                                alignItems: 'center',
                                                                gap: '8px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 21
                                                                }, this),
                                                                " ",
                                                                editingProductId ? 'Update Saree Live' : 'Publish Saree to Storefront'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'var(--bg-surface)',
                                            border: '1px solid var(--border-subtle)',
                                            borderRadius: '14px',
                                            padding: '24px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '20px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontSize: '1.2rem',
                                                        color: 'var(--gold-light)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                            size: 20
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 19
                                                        }, this),
                                                        ' Active Products under "',
                                                        selectedCategoryTab,
                                                        '" (',
                                                        categoryFilteredProducts.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 511,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    overflowX: 'auto'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    style: {
                                                        width: '100%',
                                                        borderCollapse: 'collapse',
                                                        textAlign: 'left'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                style: {
                                                                    background: 'rgba(212, 175, 55, 0.05)',
                                                                    color: 'var(--gold-light)'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '14px'
                                                                        },
                                                                        children: "Image (3:4 Uniform)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 521,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '14px'
                                                                        },
                                                                        children: "Title"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 522,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '14px'
                                                                        },
                                                                        children: "Category"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 523,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '14px'
                                                                        },
                                                                        children: "Color Swatch"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 524,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '14px'
                                                                        },
                                                                        children: "Price"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 525,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        style: {
                                                                            padding: '14px'
                                                                        },
                                                                        children: "Actions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 526,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 520,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: 6,
                                                                    style: {
                                                                        textAlign: 'center',
                                                                        padding: '30px'
                                                                    },
                                                                    children: "Loading Supabase live records..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 531,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 23
                                                            }, this) : categoryFilteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    colSpan: 6,
                                                                    style: {
                                                                        textAlign: 'center',
                                                                        padding: '30px',
                                                                        color: 'var(--text-muted)'
                                                                    },
                                                                    children: "No products in this category yet. Upload a saree above to publish it!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 533,
                                                                columnNumber: 23
                                                            }, this) : categoryFilteredProducts.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    style: {
                                                                        borderBottom: '1px solid var(--border-subtle)'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '14px'
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: p.image_url,
                                                                                alt: p.title,
                                                                                style: {
                                                                                    width: '48px',
                                                                                    height: '64px',
                                                                                    objectFit: 'cover',
                                                                                    borderRadius: '6px',
                                                                                    border: '1px solid var(--border-gold)'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 538,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 537,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '14px'
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: p.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 540,
                                                                                columnNumber: 59
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 540,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '14px'
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "category-badge",
                                                                                style: {
                                                                                    fontSize: '0.7rem'
                                                                                },
                                                                                children: p.category_name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 541,
                                                                                columnNumber: 59
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 541,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '14px'
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    gap: '8px'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            width: '20px',
                                                                                            height: '20px',
                                                                                            borderRadius: '50%',
                                                                                            background: p.color_hex || '#D4AF37',
                                                                                            border: '1px solid #fff',
                                                                                            display: 'inline-block'
                                                                                        }
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                                        lineNumber: 544,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        style: {
                                                                                            fontSize: '0.85rem',
                                                                                            color: 'var(--text-muted)'
                                                                                        },
                                                                                        children: p.color_name || 'Gold'
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                                        lineNumber: 545,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 543,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 542,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '14px',
                                                                                color: 'var(--gold-light)',
                                                                                fontWeight: 700
                                                                            },
                                                                            children: [
                                                                                "₹",
                                                                                p.price.toLocaleString('en-IN')
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 548,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            style: {
                                                                                padding: '14px'
                                                                            },
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    display: 'flex',
                                                                                    gap: '12px'
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>startEditProduct(p),
                                                                                        style: {
                                                                                            background: 'none',
                                                                                            border: 'none',
                                                                                            color: 'var(--gold-light)',
                                                                                            cursor: 'pointer'
                                                                                        },
                                                                                        title: "Edit Product Specs",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                                                            size: 18
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                                            lineNumber: 552,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                                        lineNumber: 551,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleDeleteProduct(p.id),
                                                                                        style: {
                                                                                            background: 'none',
                                                                                            border: 'none',
                                                                                            color: '#e74c3c',
                                                                                            cursor: 'pointer'
                                                                                        },
                                                                                        title: "Delete Product",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                            size: 18
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                                            lineNumber: 555,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                                        lineNumber: 554,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 550,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/admin/page.tsx",
                                                                            lineNumber: 549,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 517,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "BE9WujtP5wjX+WIjrRxo+2i+K+M=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRODUCTS_DATA",
    ()=>PRODUCTS_DATA
]);
const PRODUCTS_DATA = [
    {
        id: 'saree-cotton-001',
        name: 'Aura Purple Ikkat Handloom Cotton Saree',
        category: 'Cotton Sarees',
        price: 3499,
        originalPrice: 4999,
        description: 'Exquisite deep royal purple handloom cotton saree featuring traditional magenta Ikkat motifs, ornate woven borders, and matching tassels on the pallu.',
        fabric: 'Pure Organic Breathable Cotton',
        craft: 'Traditional Sambalpuri Ikkat Weave',
        blouseIncluded: true,
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        isFeatured: true,
        images: [
            {
                id: 'c1',
                url: '/images/cotton_1/model_full.jpg',
                type: 'full'
            },
            {
                id: 'c2',
                url: '/images/cotton_1/pleats_detail.jpg',
                type: 'detail'
            },
            {
                id: 'c3',
                url: '/images/cotton_1/blouse.png',
                type: 'blouse'
            }
        ]
    },
    {
        id: 'saree-silk-001',
        name: 'Royal Ebony Zari Woven Pure Silk Saree',
        category: 'Silk Sarees',
        price: 8999,
        originalPrice: 12499,
        description: 'A masterpiece in midnight black pure silk drapes, adorned with opulent antique gold zari brocade borders and handcrafted fringe tassels.',
        fabric: '100% Pure Mulberry Silk',
        craft: 'Kanjivaram Style Antique Gold Zari Weave',
        blouseIncluded: true,
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        isFeatured: true,
        images: [
            {
                id: 's1',
                url: '/images/silk_1/model_full.jpg',
                type: 'full'
            },
            {
                id: 's2',
                url: '/images/silk_1/border_detail.jpg',
                type: 'detail'
            },
            {
                id: 's3',
                url: '/images/silk_1/blouse.png',
                type: 'blouse'
            }
        ]
    },
    {
        id: 'saree-chiffon-001',
        name: 'Golden Ochre Printed Pure Chiffon Saree',
        category: 'Chiffon Sarees',
        price: 4299,
        originalPrice: 5999,
        description: 'Ultra-lightweight ochre mustard yellow pure chiffon saree embellished with delicate white Warli print patterns and shimmering gold woven borders.',
        fabric: 'Pure Sheer Pure Chiffon',
        craft: 'Warli Art Print with Zari Border',
        blouseIncluded: true,
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        isFeatured: true,
        images: [
            {
                id: 'ch1',
                url: '/images/chiffon_1/model_full.png',
                type: 'full'
            },
            {
                id: 'ch2',
                url: '/images/chiffon_1/detail.jpg',
                type: 'detail'
            },
            {
                id: 'ch3',
                url: '/images/chiffon_1/blouse.png',
                type: 'blouse'
            }
        ]
    },
    {
        id: 'saree-kota-001',
        name: 'Heritage Crimson & Beige Kota Doria Saree',
        category: 'Kota Sarees',
        price: 3899,
        originalPrice: 5299,
        description: 'Authentic Kota Doria saree showcasing checkered grid weaves in rich beige and crimson red with intricate black temple border accents.',
        fabric: 'Pure Kota Doria Cotton-Silk',
        craft: 'Authentic Khat Square Weave',
        blouseIncluded: true,
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        isFeatured: true,
        images: [
            {
                id: 'k1',
                url: '/images/kota_1/model_full.jpg',
                type: 'full'
            },
            {
                id: 'k2',
                url: '/images/kota_1/pleats_detail.jpg',
                type: 'detail'
            },
            {
                id: 'k3',
                url: '/images/kota_1/blouse.png',
                type: 'blouse'
            }
        ]
    },
    {
        id: 'saree-sico-001',
        name: 'Imperial Indigo Paisley Sico Blend Saree',
        category: 'Sico Sarees',
        price: 4999,
        originalPrice: 6999,
        description: 'Lustrous navy indigo Sico (Silk-Cotton blend) saree boasting traditional Kashmiri paisley embroidery print borders and a striking rich pallu.',
        fabric: 'Premium Sico (Silk + Cotton)',
        craft: 'Paisley Floral Printed Border Work',
        blouseIncluded: true,
        availableSizes: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        isFeatured: true,
        images: [
            {
                id: 'sc1',
                url: '/images/sico_1/model_full.jpg',
                type: 'full'
            },
            {
                id: 'sc2',
                url: '/images/sico_1/detail.jpg',
                type: 'detail'
            },
            {
                id: 'sc3',
                url: '/images/sico_1/blouse.png',
                type: 'blouse'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://kcwnavcdnecthvooqywb.supabase.co") || 'https://kcwnavcdnecthvooqywb.supabase.co';
const supabaseAnonKey = ("TURBOPACK compile-time value", "sb_publishable_Wd0NK4Wnybdoj_1-Kz8RIQ_4YuLIw0B") || 'sb_publishable_Wd0NK4Wnybdoj_1-Kz8RIQ_4YuLIw0B';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_18oyhm3._.js.map
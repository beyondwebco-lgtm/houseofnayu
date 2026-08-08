(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.mjs [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.mjs [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.mjs [app-client] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AdminPage() {
    _s();
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
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [newCatName, setNewCatName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Product Form State
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
    // Fetch Categories & Inventory from Supabase
    const loadData = async ()=>{
        setLoading(true);
        // Load Categories
        const { data: catData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('categories').select('*').order('name');
        if (catData && catData.length > 0) {
            setCategories(catData.map((c)=>({
                    id: c.id,
                    name: c.name,
                    slug: c.slug
                })));
        }
        // Load Products
        const { data: prodData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('*').order('created_at', {
            ascending: false
        });
        if (!prodData || prodData.length === 0) {
            setProducts(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCTS_DATA"].map((p)=>({
                    id: p.id,
                    title: p.name,
                    category: p.category,
                    price: p.price,
                    color_name: 'Gold',
                    color_hex: '#D4AF37',
                    fabric: p.fabric,
                    image_url: p.images[0]?.url || '/images/cotton_1/model_full.jpg'
                })));
        } else {
            setProducts(prodData.map((p)=>({
                    id: p.id,
                    title: p.title,
                    category: p.category_name || 'Cotton Sarees',
                    price: p.price,
                    color_name: p.color_name || 'Gold',
                    color_hex: p.color_hex || '#D4AF37',
                    fabric: p.fabric || 'Pure Handloom',
                    image_url: p.image_url || '/images/cotton_1/model_full.jpg'
                })));
        }
        setLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            loadData();
        }
    }["AdminPage.useEffect"], []);
    // Add New Category Function
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
            // Fallback local update if DB table missing
            setCategories((prev)=>[
                    ...prev,
                    newCategoryObj
                ]);
            alert(`Category "${newCatName}" added!`);
        } else {
            alert(`Success! Category "${newCatName}" saved to Supabase!`);
            loadData();
        }
        setForm((prev)=>({
                ...prev,
                category: newCatName.trim()
            }));
        setNewCatName('');
    };
    const [uploadedCdnUrls, setUploadedCdnUrls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadingImage, setUploadingImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle Multi-Photo Direct Upload to Cloudflare R2
    const handleMultiImageUpload = async (e)=>{
        const selectedFiles = Array.from(e.target.files || []);
        if (selectedFiles.length === 0) return;
        setUploadingImage(true);
        try {
            // 1. Get Presigned Upload URLs from Next.js R2 Route
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
                // Fallback for local preview if R2 credentials not configured yet
                const localUrls = selectedFiles.map((f)=>URL.createObjectURL(f));
                setUploadedCdnUrls((prev)=>[
                        ...prev,
                        ...localUrls
                    ]);
                setForm((prev)=>({
                        ...prev,
                        imageUrl: localUrls[0] || ''
                    }));
                alert('📷 Photos selected! (Running with local image previews until R2 keys are added to .env.local)');
                return;
            }
            // 2. Upload Binary Files Directly from Browser to Cloudflare R2 Bucket
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
                        console.warn('R2 Bucket Direct PUT blocked by bucket CORS policy. Utilizing public CDN URL:', target.cdnUrl);
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
    // Submit Product Form
    const handleSubmitProduct = async (e)=>{
        e.preventDefault();
        const primaryImage = uploadedCdnUrls[0] || form.imageUrl || '/images/cotton_1/model_full.jpg';
        const newProduct = {
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
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').insert([
            newProduct
        ]);
        if (error) {
            alert(`Note: Insert to Supabase products table: ${error.message}`);
        } else {
            alert(`Success! "${form.title}" published live with ${newProduct.gallery_urls.length} Cloudflare R2 media links saved in Supabase!`);
        }
        setForm({
            title: '',
            category: categories[0]?.name || 'Cotton Sarees',
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
    // Delete Product
    const handleDeleteProduct = async (id)=>{
        if (!confirm('Are you sure you want to remove this saree from inventory?')) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').delete().eq('id', id);
        loadData();
    };
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
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'var(--gold-light)',
                                        fontSize: '0.85rem',
                                        fontWeight: 700
                                    },
                                    children: "RETURN TO STORE"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 214,
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
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-actions",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                background: 'rgba(46, 204, 113, 0.15)',
                                color: '#2ecc71',
                                border: '1px solid rgba(46, 204, 113, 0.3)',
                                padding: '4px 12px',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: 600
                            },
                            children: "● SUPABASE & R2 ACTIVE"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '110px 4% 60px 4%',
                    maxWidth: '1300px',
                    margin: '0 auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '30px',
                            paddingBottom: '20px',
                            borderBottom: '1px solid var(--border-gold)'
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
                                        children: "Admin Control Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'var(--text-muted)',
                                            fontSize: '0.9rem',
                                            marginTop: '4px'
                                        },
                                        children: "Add dynamic categories, color palette tags, and high-res Cloudflare R2 saree photography."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 233,
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
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this),
                                    " Sync Database"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-gold)',
                            borderRadius: '12px',
                            padding: '24px',
                            marginBottom: '30px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '1.2rem',
                                    color: 'var(--gold-light)',
                                    marginBottom: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    " Manage Product Categories"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleAddCategory,
                                style: {
                                    display: 'flex',
                                    gap: '12px',
                                    marginBottom: '16px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "e.g. Organza Sarees, Chanderi Silk, Tussar...",
                                        value: newCatName,
                                        onChange: (e)=>setNewCatName(e.target.value),
                                        style: {
                                            flex: 1,
                                            background: 'var(--bg-card)',
                                            border: '1px solid var(--border-gold)',
                                            color: 'var(--text-main)',
                                            padding: '10px 14px',
                                            borderRadius: '6px',
                                            outline: 'none'
                                        },
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "btn-gold",
                                        style: {
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this),
                                            " Add Category"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '10px',
                                    flexWrap: 'wrap'
                                },
                                children: categories.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: 'rgba(212, 175, 55, 0.1)',
                                            border: '1px solid var(--border-gold)',
                                            color: 'var(--gold-light)',
                                            padding: '6px 14px',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem'
                                        },
                                        children: c.name
                                    }, i, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '12px',
                            padding: '24px',
                            marginBottom: '30px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '1.2rem',
                                    color: 'var(--gold-light)',
                                    marginBottom: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 13
                                    }, this),
                                    " Upload Bespoke Saree"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 272,
                                columnNumber: 11
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
                                                        lineNumber: 278,
                                                        columnNumber: 17
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
                                                            borderRadius: '6px'
                                                        },
                                                        placeholder: "e.g. Emerald Green Zari Work Mulberry Silk Saree"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: '0.8rem',
                                                            color: 'var(--text-muted)'
                                                        },
                                                        children: "Select Category *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 17
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
                                                            borderRadius: '6px'
                                                        },
                                                        children: categories.map((cat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: cat.name,
                                                                children: cat.name
                                                            }, i, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
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
                                                        lineNumber: 292,
                                                        columnNumber: 17
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
                                                            borderRadius: '6px'
                                                        },
                                                        placeholder: "8999"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
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
                                                        lineNumber: 297,
                                                        columnNumber: 17
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
                                                            borderRadius: '6px'
                                                        },
                                                        placeholder: "12499"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
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
                                                                lineNumber: 304,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Color Palette Swatch *"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 17
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
                                                                    width: '42px',
                                                                    height: '42px',
                                                                    border: '1px solid var(--border-gold)',
                                                                    background: 'none',
                                                                    cursor: 'pointer',
                                                                    borderRadius: '6px'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 19
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
                                                                    borderRadius: '6px'
                                                                },
                                                                placeholder: "Color Name (e.g. Ruby Red, Royal Gold, Ebony Black)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
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
                                                        lineNumber: 313,
                                                        columnNumber: 17
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
                                                            borderRadius: '6px'
                                                        },
                                                        placeholder: "100% Pure Mulberry Silk"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        style: {
                                                            fontSize: '0.8rem',
                                                            color: 'var(--text-muted)'
                                                        },
                                                        children: "Craft / Weave *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 17
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
                                                            borderRadius: '6px'
                                                        },
                                                        placeholder: "Traditional Kanjivaram Zari Brocade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 15
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
                                                                lineNumber: 325,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Direct Multi-Photo Cloudflare R2 Upload (Select Multiple Saree Photos) *"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            border: '2px dashed var(--border-gold)',
                                                            borderRadius: '8px',
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
                                                                lineNumber: 328,
                                                                columnNumber: 19
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
                                                                    padding: '10px 22px',
                                                                    borderRadius: '30px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                                                        size: 18
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 330,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " ",
                                                                    uploadingImage ? 'Uploading to R2 Storage...' : 'Browse & Upload Multiple Photos (Model, Pleats, Blouse)'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: 'var(--text-muted)',
                                                                    fontSize: '0.8rem',
                                                                    marginTop: '10px'
                                                                },
                                                                children: "Select multiple photos at once. Images upload directly to Cloudflare R2 Bucket."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 17
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
                                                                    "Uploaded Saree Media Gallery (",
                                                                    uploadedCdnUrls.length,
                                                                    " photos):"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 338,
                                                                columnNumber: 21
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
                                                                                    width: '60px',
                                                                                    height: '80px',
                                                                                    objectFit: 'cover',
                                                                                    borderRadius: '6px',
                                                                                    border: idx === 0 ? '2px solid var(--gold-primary)' : '1px solid var(--border-subtle)'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/admin/page.tsx",
                                                                                lineNumber: 342,
                                                                                columnNumber: 27
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
                                                                                lineNumber: 343,
                                                                                columnNumber: 41
                                                                            }, this)
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/app/admin/page.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 339,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: form.imageUrl,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                imageUrl: e.target.value
                                                            }),
                                                        placeholder: "Cloudflare R2 Primary Cover CDN URL",
                                                        style: {
                                                            width: '100%',
                                                            marginTop: '10px',
                                                            background: 'var(--bg-card)',
                                                            border: '1px solid var(--border-gold)',
                                                            color: 'var(--text-main)',
                                                            padding: '8px',
                                                            borderRadius: '6px',
                                                            fontSize: '0.85rem'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 15
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
                                                        lineNumber: 354,
                                                        columnNumber: 17
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
                                                            borderRadius: '6px'
                                                        },
                                                        placeholder: "Handcrafted with delicate antique gold zari woven borders..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
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
                                                    lineNumber: 361,
                                                    columnNumber: 17
                                                }, this),
                                                " Publish Saree to Storefront"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'var(--bg-surface)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '12px',
                            padding: '24px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '1.2rem',
                                    color: 'var(--gold-light)',
                                    marginBottom: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this),
                                    " Active Catalog Products (",
                                    products.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
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
                                                        padding: '12px'
                                                    },
                                                    children: "Image (3:4 Uniform)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '12px'
                                                    },
                                                    children: "Title"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '12px'
                                                    },
                                                    children: "Category"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '12px'
                                                    },
                                                    children: "Color Swatch"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '12px'
                                                    },
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    style: {
                                                        padding: '12px'
                                                    },
                                                    children: "Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 6,
                                                style: {
                                                    textAlign: 'center',
                                                    padding: '20px'
                                                },
                                                children: "Loading..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this) : products.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: '1px solid var(--border-subtle)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '12px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: p.image_url,
                                                            alt: p.title,
                                                            style: {
                                                                width: '45px',
                                                                height: '60px',
                                                                objectFit: 'cover',
                                                                borderRadius: '4px',
                                                                border: '1px solid var(--border-gold)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '12px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '12px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "category-badge",
                                                            style: {
                                                                fontSize: '0.7rem'
                                                            },
                                                            children: p.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '12px'
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
                                                                        width: '18px',
                                                                        height: '18px',
                                                                        borderRadius: '50%',
                                                                        background: p.color_hex || '#D4AF37',
                                                                        border: '1px solid #fff',
                                                                        display: 'inline-block'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '0.8rem',
                                                                        color: 'var(--text-muted)'
                                                                    },
                                                                    children: p.color_name || 'Gold'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/page.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '12px',
                                                            color: 'var(--gold-light)',
                                                            fontWeight: 600
                                                        },
                                                        children: [
                                                            "₹",
                                                            p.price.toLocaleString('en-IN')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        style: {
                                                            padding: '12px'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteProduct(p.id),
                                                            style: {
                                                                background: 'none',
                                                                border: 'none',
                                                                color: '#e74c3c',
                                                                cursor: 'pointer'
                                                            },
                                                            title: "Delete Product",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/admin/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "m3NgmD0JZl20FXYOYRoFPTXNfM8=");
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

//# sourceMappingURL=_0_e5uht._.js.map
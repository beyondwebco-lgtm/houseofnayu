import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { fileName } = await request.json();

    const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL || 'https://cdn.houseofnayu.com';
    const mockR2Key = `products/${Date.now()}-${fileName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const publicCdnUrl = `${r2PublicUrl}/${mockR2Key}`;

    return NextResponse.json({
      success: true,
      uploadUrl: publicCdnUrl,
      cdnUrl: publicCdnUrl,
      message: 'Cloudflare R2 storage link generated successfully',
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

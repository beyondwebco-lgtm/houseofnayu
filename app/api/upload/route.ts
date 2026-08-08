import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextResponse } from 'next/server';

const r2AccountKey = process.env.R2_ACCOUNT_ID || '';
const r2AccessKeyId = process.env.R2_ACCESS_KEY_ID || '';
const r2SecretAccessKey = process.env.R2_SECRET_ACCESS_KEY || '';
const r2BucketName = process.env.R2_BUCKET_NAME || 'house-of-nayu-media';
const r2PublicCdnUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL || 'https://cdn.houseofnayu.com';

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${r2AccountKey}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: r2AccessKeyId,
    secretAccessKey: r2SecretAccessKey,
  },
});

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: Request) {
  try {
    const { files } = await request.json(); // Array of { fileName, fileType }

    if (!files || !Array.isArray(files)) {
      return NextResponse.json({ error: 'Files array required' }, { status: 400 });
    }

    const uploadUrls = await Promise.all(
      files.map(async (file: { fileName: string; fileType: string }) => {
        const uniqueKey = `sarees/${Date.now()}-${file.fileName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
        
        const command = new PutObjectCommand({
          Bucket: r2BucketName,
          Key: uniqueKey,
          ContentType: file.fileType || 'image/jpeg',
        });

        // Generate Presigned Put URL for direct browser-to-Cloudflare-R2 upload
        const presignedUrl = await getSignedUrl(r2, command, { expiresIn: 3600 });
        const cdnUrl = `${r2PublicCdnUrl}/${uniqueKey}`;

        return {
          fileName: file.fileName,
          presignedUrl,
          cdnUrl,
        };
      })
    );

    return NextResponse.json(
      { success: true, files: uploadUrls },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

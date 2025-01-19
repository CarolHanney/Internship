// app/api/public/posts/route.js

import { NextResponse } from 'next/server';
import payload from 'payload';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize Payload only once
if (!payload) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.DATABASE_URI,
    local: true, // Set to false in production
    express: null, // Not using Express
  });

  console.log('Registered collections:', Object.keys(payload.collections));
}

export async function GET(request) {
  try {
    const now = new Date().toISOString();
    console.log('Fetching posts with publishDate <=', now);

    const { docs } = await payload.find({
      collection: 'posts', // Corrected slug here
      where: {
        publishDate: {
          less_than_or_equal: now, // Ensure publishDate is in the past
        },
      },
      depth: 1,
      fields: ['title', 'body', 'coverImage', 'publishDate', 'author'],
    });

    console.log('Fetched posts:', docs);

    return NextResponse.json({
      success: true,
      posts: docs,
    });
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    console.error('Error stack:', error.stack);

    return NextResponse.json(
      { success: false, message: 'Failed to fetch posts', error: error.message },
      { status: 500 }
    );
  }
}

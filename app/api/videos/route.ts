import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'cv_business'; // Or you can extract from the URI if needed
const COLLECTION_NAME = 'video_data';
const DOCUMENT_ID = 'current_videos';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db(DB_NAME);
        const data = await db.collection(COLLECTION_NAME).findOne({ id: DOCUMENT_ID });

        if (!data) {
            return NextResponse.json({});
        }

        // Exclude the _id field from the response
        const { _id, id, ...videoData } = data;
        return NextResponse.json(videoData);
    } catch (error) {
        console.error('Error reading from MongoDB:', error);
        return NextResponse.json({ error: 'Failed to read video data from database' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db(DB_NAME);

        await db.collection(COLLECTION_NAME).updateOne(
            { id: DOCUMENT_ID },
            { $set: { ...body, id: DOCUMENT_ID } },
            { upsert: true }
        );

        return NextResponse.json({ message: 'Saved successfully to MongoDB' });
    } catch (error) {
        console.error('Error writing to MongoDB:', error);
        return NextResponse.json({ error: 'Failed to save video data to database' }, { status: 500 });
    }
}

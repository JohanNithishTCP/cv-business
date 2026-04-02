import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const VIDEOS_PATH = path.join(process.cwd(), 'data', 'videos.json');

export async function GET() {
    try {
        const fileContent = await fs.readFile(VIDEOS_PATH, 'utf8');
        return NextResponse.json(JSON.parse(fileContent));
    } catch (error) {
        console.error('Error reading videos.json:', error);
        return NextResponse.json({ error: 'Failed to read video data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        await fs.writeFile(VIDEOS_PATH, JSON.stringify(body, null, 4), 'utf8');
        return NextResponse.json({ message: 'Saved successfully' });
    } catch (error) {
        console.error('Error writing videos.json:', error);
        return NextResponse.json({ error: 'Failed to save video data' }, { status: 500 });
    }
}

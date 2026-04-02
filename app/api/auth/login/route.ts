import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const DB_NAME = 'cv_business';
const COLLECTION_NAME = 'users';

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();
        const client = await clientPromise;
        const db = client.db(DB_NAME);

        const user = await db.collection(COLLECTION_NAME).findOne({ username });

        if (!user || user.password !== password) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Return a successful response
        // In a real app, you'd set a cookie or return a JWT here.
        return NextResponse.json({ 
            message: 'Login successful',
            user: { username: user.username, role: user.role }
        });
    } catch (error) {
        console.error('Error in login API:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

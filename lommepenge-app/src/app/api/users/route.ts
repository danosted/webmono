import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import addUser from '../../users/addUser';
import removeUser from '../../users/removeUser';
import getUserNames from '../../users/getUserNames';

export type UserPostBody = {
    user: User
};

export async function GET() {
    const data = await getUserNames();
    return NextResponse.json(JSON.stringify(data));
}

export async function POST(request: NextRequest) {
    const body = await request.json() as UserPostBody;
    await addUser(body.user.name);
    return NextResponse.json({});
}

export async function DELETE(id: string) {
    await removeUser(id);
    return NextResponse.json({});
}
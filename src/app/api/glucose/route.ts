import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function GET() {
  return new Promise((resolve) => {
    exec('python3 glucose_monitor.py', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        resolve(NextResponse.json({ error: stderr }, { status: 500 }));
      } else {
        resolve(NextResponse.json({ data: stdout.trim() }));
      }
    });
  });
}

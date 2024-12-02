import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { imageName } = await request.json();

  return new Promise((resolve) => {
    const pythonProcess = spawn('python', ['/scripts/ObjectDetection.py', imageName]);

      const url = `http://127.0.0.1:8000/process-image/?file_url=http%3A%2F%2Flocalhost%3A3000%2Fuploads%2F${imageName}`;
      

    pythonProcess.stderr.on('data', (data) => {
      console.error(`Error: ${data}`);
    });

    pythonProcess.on('close', (code) => {
      console.log(`Python script finished with code ${code}`);
      if (code === 0) {
        resolve(NextResponse.json({ message: 'Image processed successfully!' }));
      } else {
        resolve(NextResponse.json({ message: 'Failed to process image.' }, { status: 500 }));
      }
    });
  });
}
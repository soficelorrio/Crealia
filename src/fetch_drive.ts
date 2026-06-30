import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const folderId = '1ogVa2f3NOl_r_y4Vn_n0l1bNuImxqI67';
  const url = `https://drive.google.com/drive/folders/${folderId}?usp=share_link`;
  
  console.log(`Fetching Google Drive folder page: ${url}`);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch page: ${res.status} ${res.statusText}`);
    }
    
    const html = await res.text();
    console.log(`Page fetched, length: ${html.length} characters.`);
    
    // Save html for debugging
    fs.writeFileSync('drive_page.html', html);
    console.log('Saved page to drive_page.html');
    
    // Let's search for file JSON or IDs in the html
    // Google Drive usually embeds JSON with file data in a script tag
    // We can search for patterns of file metadata.
    // File IDs in Drive are 33-character alphanumeric strings containing underscores and hyphens.
    // They are usually in arrays like: ["id", "name", "mimeType", ...]
  } catch (err: any) {
    console.error('Error fetching Google Drive folder:', err.message);
  }
}

main();

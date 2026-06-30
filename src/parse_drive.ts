import * as fs from 'fs';

function main() {
  const html = fs.readFileSync('drive_page.html', 'utf8');
  console.log('Searching drive_page.html for filenames...');
  
  // Find all matches of strings that look like jewelry filenames or extensions
  // e.g., anything containing "collar", "pulsera", ".jpg", ".png"
  const regex = /"([^"\\]*(?:collar|pulsera|joya|logo|crealia)[^"\\]*\.(?:png|jpg|jpeg))"/gi;
  let match;
  const matches: string[] = [];
  while ((match = regex.exec(html)) !== null) {
    if (!matches.includes(match[1])) {
      matches.push(match[1]);
    }
  }
  
  console.log(`Found ${matches.length} unique file name matches:`);
  matches.forEach(m => console.log(`- ${m}`));
  
  // Let's also look for Google Drive file ID pattern.
  // Google Drive IDs are 33 characters long usually, starting with alphanumeric characters
  // Let's find occurrences of the matched filenames and look at the surrounding array elements.
  // The structure is often like: [ "1abc...", "filename.jpg", ... ]
  console.log('\nScanning for IDs around filenames...');
  matches.forEach(name => {
    const escapedName = name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const pattern = new RegExp(`\\["([a-zA-Z0-9_-]{28,40})","${escapedName}"`, 'g');
    let subMatch;
    let found = false;
    while ((subMatch = pattern.exec(html)) !== null) {
      console.log(`Match for ${name}: ID=${subMatch[1]}`);
      found = true;
    }
    
    if (!found) {
      // Try an alternative pattern: ID may follow or precede, e.g., ["filename.jpg", "ID"] or separate array elements
      // Let's search for the index of the filename and print the nearby characters
      const index = html.indexOf(name);
      if (index !== -1) {
        const snippet = html.substring(index - 300, index + 300);
        // Find any 33-char ID patterns inside the snippet
        const idMatches = snippet.match(/"([a-zA-Z0-9_-]{33})"/g);
        if (idMatches) {
          console.log(`Near ${name}: potential IDs: ${idMatches.join(', ')}`);
        } else {
          // Find any 28-40 char alphanumeric strings
          const idMatchesAlt = snippet.match(/"([a-zA-Z0-9_-]{28,40})"/g);
          if (idMatchesAlt) {
            console.log(`Near ${name}: potential IDs (alt): ${idMatchesAlt.join(', ')}`);
          }
        }
      }
    }
  });
}

main();

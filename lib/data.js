import { readFileSync, readdirSync, statSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';

const contentDir = path.join(process.cwd(), '_content');

// fix this
export function getPostBySlug(year, postName) {
  // construct file path from directory
  const fullPath = path.join(`${contentDir}/${year}`, `${postName}.mdx`);
  // use readfilesync
  const fileContents = readFileSync(fullPath, 'utf8');
  // plug into matter
  const { data, content } = matter(fileContents);

  return { data, content };
}

// recursively grab all files
function getAllFiles(dirPath, arrayOfFiles) {
  let files = readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(file);
    }
  });

  return arrayOfFiles;
}

export function getAllPosts() {
  const allPosts = getAllFiles(contentDir);

  return allPosts
    .map((fileName) => {
      const slug = fileName.replace('.mdx', '');
      const year = slug.substring(0, 4);
      const fileContents = readFileSync(
        path.join(`${contentDir}/${year}`, fileName),
        'utf8'
      );
      const { data, content } = matter(fileContents);

      return {
        data,
        content,
        slug,
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

function extractDate(slug) {
  return slug.substring(0, 10);
}

export function getDateFromSlug(slug) {
  const [year, month, day] = extractDate(slug).split('-');
  return { year, month, day };
}

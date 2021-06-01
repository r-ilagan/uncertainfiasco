import { readFileSync, readdirSync, statSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';

const contentDir = path.join(process.cwd(), '_content');

export function getPostSlugs(dir) {
  let results = [];
  const list = readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, `${file}`);
    const stat = statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(getPostSlugs(file));
    } else {
      /* Is a file */
      results.push(file);
    }
  });
  return results;
}

// fix this
export function getPostBySlugAndYear(year, slug, fields = []) {
  console.log('single slug', slug);
  const realSlug = slug.toString().replace(/\.md$/, '');
  // const fullPath = path.join(`${contentDir}/${year}`, `${realSlug}.md`);
  console.log(realSlug, 'plop');
  const fileContents = readFileSync(realSlug, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
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
      const slug = fileName.replace('.md', '');
      const year = slug.substring(0, 4);
      const fileContents = readFileSync(
        path.join(`${contentDir}/${year}`, fileName),
        'utf8'
      );
      const { data, content, author } = matter(fileContents);

      return {
        data,
        author,
        content,
        slug,
      };
    })
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
// need to get single file name and take date from there

import { read } from 'fs';
import { readdir, readFile, stat, writeFile } from 'fs/promises'

function strip_html_tags(str: string)
{
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

async function generateMdx() {
    // Simply strip out tags for now
    // const dir = "xmlFiles"
    // const immediateFiles = await readdir(dir)

    // var readContents = ''
    // console.log("F", immediateFiles);

    // for (let i = 0; i < immediateFiles.length; i++) {
    //     console.log("R", immediateFiles[i]);
    //     const readContents = await readFile(dir + "/" + immediateFiles[i], "utf8")
    //     const stripped = strip_html_tags(readContents)
    //     console.log("Reading " + immediateFiles[i], stripped);
    // }

    const readContents = await readFile("xmlFiles/flow_browsers_supported.xml", "utf8")
    // const stripped:string = strip_html_tags(readContents)
    // console.log("Reading ", stripped);

    // await writeFile("pages/docs/testing.mdx", stripped);
}

async function main() {
    await generateMdx();
  }
  
  main().catch((err) => console.error(err))
  
import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite';
// The original image paths use /assets/. Adjust them for project hosting on Pages.
function projectAssetPaths(){
 let base='/';
 return {
  name:'project-asset-paths',
  apply:'build',
  configResolved(config){base=config.base;},
  renderChunk(code){
   if(base==='/')return null;
   return {code:code.replace(/(["'`])\/assets\//g,(_,quote)=>`${quote}${base}assets/`),map:null};
  }
 };
}
export default defineConfig({plugins:[tailwindcss(),projectAssetPaths()]});

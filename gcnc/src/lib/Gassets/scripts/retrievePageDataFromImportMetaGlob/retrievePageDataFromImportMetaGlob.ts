export default retrievePageDataFromImportMetaGlob;

import removeDuplicateRoutes from "./replaceDuplicateRoutes/replaceDuplicateRoutes";

// Record<string, () => Promise<unknown>>
//
// https://stackoverflow.com/questions/51936369/what-is-the-record-type
// basically is like this:
// {
//   string: () => Promise<unknown>,
//   string: () => Promise<unknown>,
//   string: () => Promise<unknown>,
//   string: () => Promise<unknown>,
// }

export type ImportMetaGlobObjType = Record<string, () => Promise<any>>;

function retrievePageDataFromImportMetaGlob(
  ImportMetaGlobObj: ImportMetaGlobObjType,
  optionsObj?: {
    thisPageRouteId?: string; // always put "$page.route.id" here. remember to also add ! at the end. so it will be "$page.route.id!"
  },
) {
  const filesRouteKeyArray = Object.keys(ImportMetaGlobObj);

  return filesRouteKeyArray.map((path) => {
    const realPagePath = (path: string) => {
      const result = path.replace("/+page.svelte", "");

      if (optionsObj?.thisPageRouteId) {
        return removeDuplicateRoutes({
          longRoute: optionsObj.thisPageRouteId,
          shortRoute: result,
        });
      }

      return result;
    };
    
    const pageName = realPagePath(path).replace("./", "").split("/").pop();

    return {
      path: realPagePath(path),
      name: pageName,
    };
  });
}

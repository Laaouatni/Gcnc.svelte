export default retrievePageDataFromImportMetaGlob;

import { get } from "svelte/store";
import removeDuplicateRoutes from "./replaceDuplicateRoutes/replaceDuplicateRoutes";

import type { Page } from "@sveltejs/kit";
import { page } from "$app/stores";

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
) {
  const filesRouteKeyArray = Object.keys(ImportMetaGlobObj);
  const thisPageData: Page = get(page);

  return filesRouteKeyArray.map((path) => {
    const realPagePath = (path: string) => {
      const result = path.replace("/+page.svelte", "");

      return removeDuplicateRoutes({
        longRoute: thisPageData.route.id!,
        shortRoute: result,
      });
    };

    const pageName = realPagePath(path).replace("./", "").split("/").pop();

    return {
      path: realPagePath(path),
      name: pageName,
    };
  });
}

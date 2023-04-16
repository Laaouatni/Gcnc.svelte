export default retrievePageDataFromImportMetaGlob;

import { get } from "svelte/store";
import removeDuplicateRoutes from "./replaceDuplicateRoutes/replaceDuplicateRoutes";

import type { Page as TypePage } from "@sveltejs/kit";
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

export type TypeImportMetaGlobObj = Record<string, () => Promise<any>>;

function retrievePageDataFromImportMetaGlob(
  ImportMetaGlobObj: TypeImportMetaGlobObj,
) {
  const filesRouteKeyArray = Object.keys(ImportMetaGlobObj);
  const thisPageData: TypePage = get(page);

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

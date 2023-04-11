export default retrievePageDataFromImportMetaGlob;

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

function retrievePageDataFromImportMetaGlob(
  ImportMetaGlobObj: Record<string, () => Promise<any>>,
) {
  const filesRouteKeyArray = Object.keys(ImportMetaGlobObj);

  return filesRouteKeyArray.map((path) => {
    const realPagePath = path.replace("./", "").replace("/+page.svelte", "");
    const pageName =
      realPagePath.charAt(0).toUpperCase() + realPagePath.slice(1);
    return {
      path: `/${realPagePath}`,
      name: pageName,
    };
  });
}

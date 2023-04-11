export default replaceDuplicateRoutes;

type thisFunctionParameters = Record<"longRoute" | "shortRoute", string>;

function replaceDuplicateRoutes(GobjParameters: thisFunctionParameters) {
  const { longRoute, shortRoute } = GobjParameters;

  const longRouteArray = longRoute.split("/");
  const shortRouteArray = shortRoute.split("/");
  
  const sharedIndex = longRouteArray.findIndex((part) => shortRouteArray.includes(part));

  if (sharedIndex < 0) {
    return longRoute + '/' + shortRoute;
  }

  return [
    ...longRouteArray.slice(0, sharedIndex),
    ...shortRouteArray.slice(shortRouteArray.indexOf(longRouteArray[sharedIndex])),
  ].join("/");

  // const { longRoute, shortRoute } = GobjParameters;

  // const longRouteArray = longRoute.split("/");
  // const shortRouteArray = shortRoute.split("/");

  // const longRouteArrayReversed = [...longRouteArray].reverse();
  // const shortRouteArrayReversed = [...shortRouteArray].reverse();

  // console.log(longRouteArrayReversed, shortRouteArrayReversed)

  // const sharedBaseRouteIndex = longRouteArrayReversed.findIndex((longRoutePart) => {
  //   return shortRouteArrayReversed.includes(longRoutePart);
  // });

  // const shortRoutePartToChange = shortRouteArrayReversed.splice(0, sharedBaseRouteIndex);

  // const longRoutePartBase = longRouteArrayReversed.slice(sharedBaseRouteIndex);
  
  // const result = longRoutePartBase.concat(shortRoutePartToChange).join("/");
  
  // return result;
}

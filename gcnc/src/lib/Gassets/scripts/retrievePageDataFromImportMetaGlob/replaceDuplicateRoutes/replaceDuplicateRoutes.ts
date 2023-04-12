export default replaceDuplicateRoutes;

type thisFunctionParameters = Record<"longRoute" | "shortRoute", string>;

function replaceDuplicateRoutes(GobjParameters: thisFunctionParameters) {
  const { longRoute, shortRoute } = GobjParameters;

  const longRouteArray = longRoute.split("/");
  const shortRouteArray = shortRoute.split("/");
  
  const sharedIndex = longRouteArray.findIndex((part) => shortRouteArray.includes(part));

  if (sharedIndex < 0) return longRoute + '/' + shortRoute;

  return [
    ...longRouteArray.slice(0, sharedIndex),
    ...shortRouteArray.slice(shortRouteArray.indexOf(longRouteArray[sharedIndex])),
  ].join("/");
}

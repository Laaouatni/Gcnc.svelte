export default replaceDuplicateRoutes;

type TypeThisFunctionParameters = Record<"longRoute" | "shortRoute", string>;

function replaceDuplicateRoutes(GobjParameters: TypeThisFunctionParameters) {
  const { longRoute, shortRoute } = GobjParameters;

  const longRouteArray = longRoute.split("/");
  const shortRouteArray = shortRoute.split("/");

  const sharedIndex = longRouteArray.findIndex((part) =>
    shortRouteArray.includes(part),
  );

  if (sharedIndex < 0) return longRoute + "/" + shortRoute;

  return [
    ...longRouteArray.slice(0, sharedIndex),
    ...shortRouteArray.slice(
      shortRouteArray.indexOf(longRouteArray[sharedIndex]),
    ),
  ].join("/");
}

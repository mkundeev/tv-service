export function getName(pathname: string): string {
  const pathParts = pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];
  const capitalizedLastPart =
    lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
  return capitalizedLastPart;
}

export default function convertCaseFromSrc(src: string): string {
  let inputStr = src.split("/").pop()?.split(".")[0] || "";

  inputStr = inputStr.replace(/[-_]/g, ' ');
  inputStr = inputStr.replace(/([a-z])([A-Z])/g, '$1 $2');

  return inputStr.toLowerCase();
}
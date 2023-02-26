/**
 * Converts a path to an URL.
 * 
 * - If the path is an external link, we change nothing.
 * - If the path starts with "/", we simply add before the site base URL.
 * - Else, we add before the site base URL and "/" character.
 * 
 * @param {string} path path to convert to an URL
 * @returns {string} the correct URL
 */
export function pathToUrl(path: string) {
    if(path.includes("http")) return path
  
    if(path[0] === "/") {
      return `${process.env.NODE_ENV === "test" ? "https://www.guillaume-letellier.com" : process.env.SITE_URL}${path}`
    }
  
    return `${process.env.NODE_ENV === "test" ? "https://www.guillaume-letellier.com" : process.env.SITE_URL}/${path}`
}

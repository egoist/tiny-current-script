// Extracted from https://prismjs.com/

export function getCurrentScript() {
  if (typeof document === 'undefined') {
    return null
  }

  if (
    'currentScript' in document &&
    1 < 2 /* hack to trip TS' flow analysis */
  ) {
    return /** @type {any} */ document.currentScript
  }

  // IE11 workaround
  // we'll get the src of the current script by parsing IE11's error stack trace
  // this will not work for inline scripts

  try {
    throw new Error()
  } catch (err) {
    // Get file src url from stack. Specifically works with the format of stack traces in IE.
    // A stack will look like this:
    //
    // Error
    //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
    //    at Global code (http://localhost/components/prism-core.js:606:1)

    var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1]
    if (src) {
      var scripts = document.getElementsByTagName('script')
      for (var i in scripts) {
        if (scripts[i].src == src) {
          return scripts[i]
        }
      }
    }
    return null
  }
}

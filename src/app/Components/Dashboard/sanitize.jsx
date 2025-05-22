// ✅ utils/sanitize.js
import sanitizeHtml from "sanitize-html";

export const sanitizeDescription = (html) =>
  sanitizeHtml(html, {
    allowedTags: ["b", "i", "ul", "li", "br"],
    allowedAttributes: {},
  });

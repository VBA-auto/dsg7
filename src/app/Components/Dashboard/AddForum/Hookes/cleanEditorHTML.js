// utils/cleanEditorHTML.js
export function cleanEditorHTML(html) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;

  wrapper.querySelectorAll("div > ul, div > ol").forEach((list) => {
    const parent = list.parentElement;
    if (parent.tagName === "DIV") {
      parent.replaceWith(list);
    }
  });

  return wrapper.innerHTML;
}

import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const itemsWrapper = document.querySelector(".items-wrapper");
document.addEventListener("DOMContentLoaded", loadRamblings);

async function loadRamblings() {
    for (let index = 1; index < 6; index++) {
        const item = document.createElement("div");
        item.classList.add("item");

        try {
            const res = await fetch(`ramblings/0${index}.md`);
            const markdownText = await res.text();

            const htmlContent = marked(markdownText);
            item.innerHTML = htmlContent;

            itemsWrapper.appendChild(item);
        } catch (e) {
            console.error(e);
        }
    }
}

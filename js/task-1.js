const navEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${navEl.length}`);

for (const item of navEl) {
    // console.log(item.children);
    const title = item.children[0];
    const categories = item.children[1]
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${categories.children.length}`);
}
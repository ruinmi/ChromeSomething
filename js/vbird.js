if (/.vbird.org/.test(website)) {
    const a = document.createElement("link");
    a.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap";
    a.rel = "stylesheet";
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(a);
    document.body.style.fontFamily = "'Noto Sans SC', 'Noto Sans TC', 'Noto Serif TC', 'Times New Roman', 'Comic Sans MS', 'Courier New'";
}
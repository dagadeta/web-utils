async function sleepSeconds(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function delayedRefresh() {
    await sleepSeconds(60);
    window.location.reload();
}

function removeHeader() {
    const headerElements = document.getElementsByClassName("app-bar-nav");
    if (headerElements.length > 0) {
        Array.from(headerElements).forEach(el => el.remove());
    } else {
        setTimeout(removeHeader, 500);
    }
}

removeHeader();
delayedRefresh();

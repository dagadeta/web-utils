async function sleepSeconds(seconds) { return new Promise(resolve => setTimeout(resolve, seconds * 1000)); }

async function delayedRefresh() {
    await sleepSeconds(60);
    window.location.reload();
}
function removeHeader() {
    Array.from(document.getElementsByClassName("app-bar-nav")).forEach(element => {
        element.remove();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    delayedRefresh();
    removeHeader();
});

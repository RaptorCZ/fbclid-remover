function listener(details) {

    const param = 'fbclid';
    const url = new URL(details.url);

    if (!url.searchParams.has(param)) {
        return
    }

    url.searchParams.delete(param);

    return {
        redirectUrl: url.href
    };
}

browser.webRequest.onBeforeRequest.addListener(
    listener,
    {
        urls: ["<all_urls>"],
        types: ["main_frame"]
    },
    ["blocking"]
);

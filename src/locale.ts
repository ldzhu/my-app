export default function getLocaleFromBackend() {
    /*const request: Request = new Request('/i18n/locale');

    const params: RequestInit = {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        cache: 'no-cache'
    };

    return fetch(request, params);*/

    return Promise.resolve({lang: 'zh'});
}



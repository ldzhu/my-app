/**
 * 获取当前语言环境（暂未确定实现方案）：
 * 1. 可以从后台接口中获取；
 * 2. 可以从界面配置文件中获取。
 * @returns {Promise<{lang: string}>}
 */
export default function getLocale() {
    /*const request: Request = new Request('/translate/locale');

    const params: RequestInit = {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        cache: 'no-cache'
    };

    return fetch(request, params);*/

    return Promise.resolve({lang: 'zh-CN'});
}



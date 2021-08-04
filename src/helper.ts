/**
 *
 *
 * @interface IResponse
 */
export interface IResponse {
	longUrl: string;
	shortUrl: string;
}

/**
 *
 *
 * @export
 * @param {Record<any, any>} response
 * @param {string} responseType
 * @param {string} longUrl
 * @return {*}  {IResponse}
 */
export function responseMap(
	response: Record<any, any>,
	responseType: string,
	longUrl: string,
): IResponse {
	if (responseType === 'text/plain' || responseType === 'text/html') {
		return { longUrl, shortUrl: response.data };
	} else {
		if (response.data?.url) {
			return { longUrl, shortUrl: response.data.url };
		}
	}
}

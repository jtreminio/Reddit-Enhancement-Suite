/* @flow */

import type { Host } from '../../core/host';

export function getNativeExpandoOptions(siteModule: Host<*, *>, nativeOpen: boolean): {| replace: boolean, expand: boolean |} {
	const isGallery = siteModule.moduleID === 'redditgallery';
	const forceReplace = siteModule.options && siteModule.options.forceReplaceNativeExpando;
	return {
		replace: !nativeOpen || isGallery || !!(forceReplace && forceReplace.value),
		expand: nativeOpen && isGallery,
	};
}

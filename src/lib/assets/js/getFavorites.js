let favoritesPromise = null;

export async function getFavorites() {
    if (!favoritesPromise){
        favoritesPromise = _getFavorites();
    }

    return await favoritesPromise;
}

async function _getFavorites() {
	let res = await fetch('api/GenericCatalogApi', {
		method: 'POST',
		body: JSON.stringify({
			returnAll: true
		})
	});

    if (res.ok) {
        return await res.json();
    }else{
        throw new Error();
    }
}

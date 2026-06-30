class MemoryCache {

    constructor() {

        this.cache = new Map();

    }

    set(key, value, ttl = 300000) {

        this.cache.set(key, {

            value,

            expires: Date.now() + ttl

        });

    }

    get(key) {

        const item = this.cache.get(key);

        if (!item) return null;

        if (Date.now() > item.expires) {

            this.cache.delete(key);

            return null;

        }

        return item.value;

    }

    clear() {

        this.cache.clear();

    }

}

module.exports = new MemoryCache();

var kinds: {
    [name: string]: Pluglets.Kind<any>;
} = {};

export function kind<T>(name: string): Pluglets.Kind<T> {

    return kinds[name] || (kinds[name] = (() => {

        var pluglets: { [id: string]: T } = {};

        return {
            add(id: string, p: T) {
                if (pluglets[id]) {
                    throw new Error("Pluglet " + id +
                        " of kind " + name + " registered twice");
                }
                pluglets[id] = p;
            },
            all() {
                return Object.keys(pluglets).map(id => pluglets[id]);
            },
            byId: pluglets
        };

    })());
}

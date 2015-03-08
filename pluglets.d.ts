
declare module Pluglets {

    interface Kind<T> {
        add(id: string, p: T): void;
        all(): T[];
        byId: {
            [id: string]: T;
        };
    }

    interface Kinds {
        kind(name: string): Kind<any>;
    }
}

declare module "pluglets" {
    var instance: Pluglets.Kinds;
    export = instance;
}

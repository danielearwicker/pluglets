
declare module Pluglets {

    interface Kind<T> {
        [id: string]: T;
    }

    interface Kinds {
        kind(name: string): Kind<any>;
    }
}

declare module "pluglets" {    
    var instance: Pluglets.Kinds;
    export = instance;
}

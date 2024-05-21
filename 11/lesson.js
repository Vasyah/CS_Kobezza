class Map {
    #values;

    constructor(values){
        this.#values = values
    }

    set(key, value){
        this.#values[this.#getIndex(key)] = value
    }

    get(key){
        return this.#values[this.#getIndex(key)]
    }

    #getIndex(key){
        this.#values.findIndex(value => value === key)
    }
}
export default class Client {
    // # -> define private access
    #id: string
    #name: string
    #age: number

    constructor(name: string, age: number, id: string = null) {
        this.#id = id
        this.#name = name
        this.#age = age
    }

    static empty(): Client {
        return new Client('', 0)
    }

    // Getters
    get id(): string {
        return this.#id
    }

    get name(): string {
        return this.#name
    }

    get age(): number {
        return this.#age
    }

}
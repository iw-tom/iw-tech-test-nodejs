module.exports = class Authority {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    toObject() {
        return { id: this._id, name: this._name };
    }
}

class User{


    constructor(name) {
        this.name = name;
        this.age;
        User.prototype.myfield = 'wew';
    }

    sayHi() {
        return this.name + " said hi";
    }

}

module.exports = User;

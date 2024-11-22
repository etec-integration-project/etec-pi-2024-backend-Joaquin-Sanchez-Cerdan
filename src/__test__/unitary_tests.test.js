const { describe } = require("node:test");
const { Perros, Usuario } = requiere('../persistance/db.ts');
const { Dogs } = require('../persistance/dogs.ts')
const { User } = requiere('../persistance/user.ts')

describe('matching values', () => {

    test('dogs data is matching when you POST another dog into the database', () => {
        expect(Perros).toMatch(Dogs)
    })
    test('user data is matching when you POST another user into the database', () => {
        expect(Usuario).toMatch(User)
    })

})
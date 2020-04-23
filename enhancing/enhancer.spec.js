const enhancer = require('./enhancer.js');
// test away!
describe("enhancer", () => {
    it("should run tests without errors", () => {
        expect(true).toBe(true);
    });

    describe("succeed()", function () {
        it("should increase enhancement by 1", function () {
            expect(enhancer.succeed({name: "name1", durability: 55, enhancement: 16}))
            .toStrictEqual({name: "name1", durability: 55, enhancement: 17});
        });

        it("should return same value", function () {
            expect(enhancer.succeed({name: "name1", durability: 55, enhancement: 20}))
            .toStrictEqual({name: "name1", durability: 55, enhancement: 20});
        });
    })

    describe("repair()", function () {
        it("should increase durability to 100", function () {
            expect(enhancer.repair({name: "name 1", durability: 50, enhancement: 4}))
            .toStrictEqual({name: "name 1", durability: 100, enhancement: 4});
        });
    })

    describe("fail()", function () {
        it("should decrease durability by 5", function () {
            expect(enhancer.fail({name: "name2", durability: 45, enhancement: 8}))
            .toStrictEqual({name: "name2", durability: 40, enhancement: 8});
        });
        it("should decrease durability by 10", function () {
            expect(enhancer.fail({name: "name2", durability: 45, enhancement: 15}))
            .toStrictEqual({name: "name2", durability: 35, enhancement: 15});
            expect(enhancer.fail({name: "name3", durability: 65, enhancement: 16}))
            .toStrictEqual({name: "name3", durability: 55, enhancement: 16});
        })
        it("should decrease durability by 10 and enhancement by 1", function () {
            expect(enhancer.fail({name: "name 4", durability: 76, enhancement: 18}))
            .toStrictEqual({name: "name 4", durability: 66, enhancement: 17});
        })
    })
});
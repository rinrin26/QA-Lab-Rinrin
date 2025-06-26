import assert  from "assert";
describe('get users list', function () {
    it('success get list users ',async function () {
        const response = await fetch("https://reqres.in/api/users");
        const data = response.json();
        console.log(data);
        assert.strictEqual(response.status,200);     
    }
    )
})
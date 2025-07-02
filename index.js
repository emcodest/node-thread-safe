const { Mutex: Mu } = require('async-mutex');
const mutex = new Mu();
class Mutex {
    /** mutex fxn - only one thread per time */
    static async RunSafe(fxn) {
        // do something exclusive
        console.log("Locked")
        const release = await mutex.acquire(); // wait for lock
        let rst
        try {
            const params = []
            rst = await fxn(...params)

        } catch (ex) {
            throw new Error(`${ex}`)
        } finally {
            release(); // release the lock
            console.log("Unlocked");
        }
        return rst
    }

}

module.exports = Mutex


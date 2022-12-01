const md5 = require('md5');
const bcrypt = require('bcrypt');


const testBed = async () => {

    const testString = "advanced databases";
    /* Begin our test */
    const start = new Date().getTime();
    //const hash = md5(testString);
    const hash = await bcrypt.hashSync(testString, 20);
    const end = new Date().getTime();
    console.log("the total time taken is: " + ((end - start) / 1000) + 'seconds')
    console.log(hash);

    /* End our test */

}

testBed();

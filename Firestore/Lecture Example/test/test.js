//In command prompt: "mocha" or "npm test"
//mocha will look for things withing a test directory

//console.log("Hi testing");

//https://github.com/firebase/quickstart-nodejs/blob/master/firestore-emulator/javascript-quickstart/test/test.js

const firebase = require("@firebase/testing");
const fs = require("fs");

/*
 * ============
 *    Setup
 * ============
 */
const projectId = "lecture_example";
const firebasePort = 8080;

const rules = fs.readFileSync("firestore.rules", "utf8");

//Block of tests
describe("firestore rules test", () => {
    it("non-authenticated users can access nothing", async() => {
        const app = firebase.initializeTestApp({ projectId: projectId, auth: null });
        const db = app.firestore();
        //Reference to a document whose name is Alice
        //It is in the user collection
        const aliceRef = db.collection("users").doc("alice");
        //Operation should fail
        //Unauthenticated users shouldn't be able to access Alice's docs
        await firebase.assertFails(aliceRef.get());
    });
    it("authenticated users can access own user doc", async() => {
        const app = firebase.initializeTestApp({ projectId: projectId, auth: { uid: "alice"} });
        const db = app.firestore();
        //Reference to a document whose name is Alice
        //It is in the user collection
        const aliceRef = db.collection("users").doc("alice");
        //Operation should succeed
        //Alice should be able to access her own user doc
        await firebase.assertSucceeds(aliceRef.get());
    });
    it("authenticated users can not access other user docs", async() => {
        const app = firebase.initializeTestApp({ projectId: projectId, auth: {uid: "alice"} });
        const db = app.firestore();
        //Reference to a document whose name is Alice
        //It is in the user collection
        const bobRef = db.collection("users").doc("bob");
        //Operation should fail
        //Alice should not be able to access Bob's user docs
        await firebase.assertFails(bobRef.get());
    });
});

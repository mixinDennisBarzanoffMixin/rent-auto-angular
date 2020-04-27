import * as functions from 'firebase-functions-test'
import * as uninitializedAdmin from 'firebase-admin'

const conf = {
    databaseURL: "https://rentautosofiatest.firebaseio.com",
    projectId: "rentautosofiatest",
}

const admin = uninitializedAdmin.initializeApp()

// admin.initializeApp();
// Online Testing
const testEnv = functions({
  ...conf
})

// Provide 3rd party API keys
testEnv.mockConfig({});

export {admin, testEnv}
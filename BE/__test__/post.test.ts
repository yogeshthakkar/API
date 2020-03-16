const { MongoClient } = require('mongodb');//in-memory server

import { testFullDummyUser, testEmptyDummyUser } from '../testDummyUser'

describe('insert', () => {
    let connection: any;
    let db: any;
    let globalAny: any = global

    beforeAll(async () => {
        connection = await MongoClient.connect(globalAny.__MONGO_URI__, {
            useNewUrlParser: true,
        });
        db = await connection.db(globalAny.__MONGO_DB_NAME__);
    });

    afterAll(async () => {
        await connection.close();
        await db.close();
    });

    it('should insert a doc into collection', async () => {
        let users = db.collection('user');

        await users.insertOne(testFullDummyUser);
        console.log(`User Inserted `);
        console.log(testFullDummyUser);

        /**
         * log for searching user in database(for user not found)
         */
        let insertedUser = await users.findOne({ firstname: 'test4' });
        if (insertedUser) {
            console.log('User Found In doc');
            expect(insertedUser).toEqual(testFullDummyUser);
        } else {
            console.error('User Not found in doc');
        }
        /**
         * log for searching user in database(for user found)
         */
        insertedUser = await users.findOne({ firstname: 'test3' });
        if (insertedUser) {
            console.log('User Found In doc');
            expect(insertedUser).toEqual(testFullDummyUser);
        } else {
            console.error('User Not found in doc');
        }
    });

    /**
       * tries to insert null values in doc
    */
    it('should be fail if you are trying to insert null/empty value in doc', async () => {
        let users = db.collection('users');
        if (testEmptyDummyUser.firstname !== '' || testEmptyDummyUser.lastname
            !== '' || testEmptyDummyUser.email !== '' || testEmptyDummyUser.mobile !== '') {
            await users.insertOne(testEmptyDummyUser);
        } else {
            console.log('Can not insert blank data');
        }
    })
});


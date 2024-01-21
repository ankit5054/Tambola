<b>Postgres database is used.</b>

Step 1: Clone Repository<br>
Step 2: Do run<code>npm i</code> command in order to install project dependencies<br>
Step 3: Do make change in DB connection at the following path<code>./src/DB/Connection.ts</code><br>
Step 4: Do make a build of the code using following command <code>npm run build</code><br>
Step 5: Run command <code>npm run migration:run</code> in order to create tables in pstgres database.<br>
Step 6: Use following commands to run the application
To start in dev, run following command
<code>
npm run start:dev
</code>

To start build, run following command
<code>
npm run start:build
</code>

Step 7: Import a collection in postman using the following link<br>
<i>https://api.postman.com/collections/29024580-fefebf99-7474-4dcb-be43-b1050b3abd17?access_key=PMAT-01HMPHDW9NZ0XMSQ4QKRZSQ8CX</i>

Step 8: Do signup, save creds<br>

Step 9: Do signin,copy key it is valid for 1 hour only<br>

Step 10: Pass the copied key in authorization tab in postman as bearer token and use it to generate or get tickets.

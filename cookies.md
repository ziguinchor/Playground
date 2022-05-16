const { append } = require("express/lib/response");

# enable cookies midddleware

npm i cookie-cookieParser

# register cookie parser middleware

const cookieParser = require("cookie-parser");

# send cookie [express]

res.cookie(name, value)
res.cookie("session_id", "MySessionId");

# read cookies [express]

req.cookies: { session_id: 'MySessionId' }
// or
const {cookies} = req;

# get specific Cookie

res.cookies.session_id

# check if cookies exists

if( "session_id" in req.cookies ) ....

# validate cookie middleware

const validateCookie = (req, res, next) => {

if("session_id" in req.cookies) {
----if(req.cookies.session_id === "mySecret") { next() }
----else { res.status(403).send("Not Authorized) }
}
else {
----res.status(403).send("Not Authorized"); }
}

}

app.get("/", validateCookie, (req, res) => {...})

# Send secure cookie

res.cookie("secureCookie", JSON.stringify(dataToSecure), {
----secure: process.env.NODE_ENV !== "development",
----httpOnly: true,
----expires: dayjs().add(30, "days").toDate(),
});

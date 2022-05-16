(async () => {
  const bcrypt = require("bcrypt");
  try {
    console.log("// Hashing");
    let salt = await bcrypt.genSalt(10);
    let password = "myPassword";
    let hash = await bcrypt.hash(password, salt);
    console.log(hash);
    console.log("// Comparing");
    console.log(await bcrypt.compare("myPassword", hash));
  } catch (err) {
    console.log(err);
  }
})();

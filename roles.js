const AccessControl = require("accesscontrol");
const access = new AccessControl();
 
exports.roles = (function() {
access.grant("basic")
 .readOwn("profile")
 .updateOwn("profile")
 
access.grant("mod")
 .extend("basic")
 .readAny("profile")
 
 access.grant("admin")
 .extend("basic")
 .extend("mod")
 .updateAny("profile")
 .deleteAny("profile")
 
return access;
})();
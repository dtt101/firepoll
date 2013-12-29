/**
 * FarmChat tests
 */

module("FarmChat Message Model Tests");
test("Can be instantiated with correct default values", function() {
  expect(2);

  var message = new app.Message();

  // test value of default attributes
  equal(message.get("user"), "Anonymous");
  equal(message.get("text"), "-");
});

test("Can be instantiated and attribute values changed", function() {
  expect(2);

  var message = new app.Message({
    user: "jane",
    status: "test@example.com"
  });

  // Changed Attribute Value Assertions
  equal(message.get("user"), "jane", "user correct");
  equal(message.get("status"), "test@example.com", "status correct");
});



module("FarmChat LocalUser Model Tests");
test("Can be instantiated with correct default values", function() {
  expect(5);

  var localUser = new app.LocalUser();

  equal(localUser.get("uid"), "None");
  equal(localUser.get("id"), "No twitter ID");
  equal(localUser.get("username"), "No twitter username");
  equal(localUser.get("provider"), "None");
  equal(localUser.get("displayName"), "None");
});

test("Can be instantiated and attribute values changed", function() {
  expect(5);

  var localUser = new app.LocalUser({
    uid: '0000001',
    id: '0000002',
    username: 'jane',
    provider: 'twitter',
    displayName: 'Jane Smith'
  });

  equal(localUser.get("uid"), "0000001", "uid correct");
  equal(localUser.get("id"), "0000002", "id correct");
  equal(localUser.get("username"), "jane", "username correct");
  equal(localUser.get("provider"), "twitter", "provider correct");
  equal(localUser.get("displayName"), "Jane Smith", "displayName correct");
});

module("FarmChat OnlineUser Model Tests");
test("Can be instantiated with correct default values", function() {
  expect(2);

  var onlineUser = new app.OnlineUser();

  // test value of default attributes
  equal(onlineUser.get("name"), "Anon");
  equal(onlineUser.get("status"), "offline");
});

test("Can be instantiated and attribute values changed", function() {
  expect(2);

  var onlineUser = new app.OnlineUser({
    name: "jane",
    status: "online"
  });

  // Changed Attribute Value Assertions
  equal(onlineUser.get("name"), "jane", "name correct");
  equal(onlineUser.get("status"), "online", "status correct");
});

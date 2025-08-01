function parseResponse(raw) {
    return raw;
}
var rawJson = "{\n  \"status\": 200,\n  \"message\": \"Success\",\n  \"data\": {\n    \"id\": 1,\n    \"name\": \"imane\"\n  }\n}";
var parsed = JSON.parse(rawJson);
var userResponse = parseResponse(parsed);
console.log("User name:", userResponse.data.name);

interface Response<T> {
    status: number;
    message: string;
    data: T;
}

function parseResponse<T>(raw: any): Response<T> {
    return raw as Response<T>;
}

type User = {
    id: number;
    name: string;
};

const rawJson = `{
  "status": 200,
  "message": "Success",
  "data": {
    "id": 1,
    "name": "imane"
  }
}`;

const parsed = JSON.parse(rawJson);

const userResponse = parseResponse<User>(parsed);

console.log("User name:", userResponse.data.name);

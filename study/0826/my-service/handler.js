// ===== Dependencies =====
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
  DeleteCommand,
} = require("@aws-sdk/lib-dynamodb");
const { v4: uuidv4 } = require("uuid");

// ===== Clients =====
const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const TABLE = process.env.USERS_TABLE;

// ===== Util =====
const safeJsonParse = (str) => {
  try {
    return str ? JSON.parse(str) : {};
  } catch {
    return {};
  }
};

// ===== Handlers =====
exports.getUser = async (event) => {
  const id = event.pathParameters?.id;

  const result = await ddb.send(
    new GetCommand({
      TableName: TABLE,
      Key: { id },
    })
  );

  if (!result.Item) {
    return {
      statusCode: 404,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: `User ${id} not found` }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(result.Item, null, 2),
  };
};

exports.createUser = async (event) => {
  const body = safeJsonParse(event.body);
  const id = uuidv4();

  const now = new Date().toISOString();
  const user = {
    id,
    name: body.name ?? null,
    email: body.email ?? null,
    createdAt: now,
    updatedAt: now,
  };

  await ddb.send(
    new PutCommand({
      TableName: TABLE,
      Item: user,
      // 중복 방지 (id가 이미 있으면 실패)
      ConditionExpression: "attribute_not_exists(id)",
    })
  );

  return {
    statusCode: 201,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      { message: "User created successfully", user },
      null,
      2
    ),
  };
};

exports.updateUser = async (event) => {
  const id = event.pathParameters?.id;
  const body = safeJsonParse(event.body);

  // 업데이트할 필드 수집
  const fields = {};
  if (body.name !== undefined) fields.name = body.name;
  if (body.email !== undefined) fields.email = body.email;
  fields.updatedAt = new Date().toISOString();

  if (Object.keys(fields).length === 0) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "No fields to update" }),
    };
  }

  // 동적 UpdateExpression 구성
  const names = {};
  const values = {};
  const sets = [];

  Object.entries(fields).forEach(([k, v], idx) => {
    const nk = `#k${idx}`;
    const nv = `:v${idx}`;
    names[nk] = k;
    values[nv] = v;
    sets.push(`${nk} = ${nv}`);
  });

  const result = await ddb.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: `SET ${sets.join(", ")}`,
      ExpressionAttributeNames: names,
      ExpressionAttributeValues: values,
      ReturnValues: "ALL_NEW",
      // 존재하는 사용자만 업데이트
      ConditionExpression: "attribute_exists(id)",
    })
  );

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      { message: `User ${id} updated`, user: result.Attributes },
      null,
      2
    ),
  };
};

exports.deleteUser = async (event) => {
  const id = event.pathParameters?.id;

  await ddb.send(
    new DeleteCommand({
      TableName: TABLE,
      Key: { id },
      // 존재하는 사용자만 삭제
      ConditionExpression: "attribute_exists(id)",
    })
  );

  // 204 No Content (바디 없음)
  return {
    statusCode: 204,
    headers: { "Content-Type": "application/json" },
    body: "",
  };
};

export function postSignUpQuery(userData) {
  const query = `insert into system_user(username, password) values ('${userData.username}', '${userData.password}')`;
  return query;
}

export const postLoginCredentials = (username, password) => {
  return fetch("http://localhost:8080/api/v1/auth/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username,
      password
    }),
  });
};

export const fetchEUI = (token) => {
  return fetch("http://localhost:8080/api/v1/buildings/eui", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export const fetchBuildings = (token) => {
  return fetch("http://localhost:8080/api/v1/buildings/details", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

const baseUrl = "http://localhost:3001";


const register = async (data) => {
  const response = await fetch(baseUrl + "/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const res =await response.json()
  return res
};
const Login = async (data) => {
  const response = await fetch(baseUrl + "/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const res =await response.json()
  return res
};


export {
    register,
    Login
}
import axios from "axios";

const enviarInfoAlServer = async (userData) => {
  console.log(userData);

  const email = userData.email;
  const nickname = userData.nickname;
  const given_name = userData.given_name ?? null;
  const picture = userData.picture;
  const sub = userData.sub;

  try {
    const response = await axios.post("http://localhost:3001/post/user", {
      email,
      nickname,
      given_name,
      picture,
      sub,
    });

    if (response.status === 201) {
      console.log("response", response);
      // Accede al encabezado Authorization para obtener el token
      const token = response.data.token;

      console.log("Token recibido:", token);
      // if (response.data) {
      console.log(response.data);
      const user = { ...response.data, token };
      console.log(user);
      return user;
    } else {
      alert("Error al autenticar/crear usuario");
    }
  } catch (error) {
    alert("Error al enviar la solicitud al servidor", error);
  }
};

const userLog = async (userData) => {
  try {
    const response = await enviarInfoAlServer(userData);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error en userLog:", error);
    throw error; // Puedes manejar el error aquí según tus necesidades
  }
};

export default userLog;

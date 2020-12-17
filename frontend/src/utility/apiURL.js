export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3006"
      : "https://finstagram20.herokuapp.com/";
  };
  
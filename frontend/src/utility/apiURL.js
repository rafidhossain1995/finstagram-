export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3006"
      : "https://finstagram-clone-2020.herokuapp.com";
  };
  
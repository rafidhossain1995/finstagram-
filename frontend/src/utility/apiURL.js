export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3006"
      : "https://finsta-20.herokuapp.com/";
  };
  
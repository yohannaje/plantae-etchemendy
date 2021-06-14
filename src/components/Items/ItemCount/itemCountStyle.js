export const itemCountStyle = (theme) => {
  return {
    counterGroup: {
      marginTop: "2em",
      marginBottom: "3em",
      display: "flex",
      justifyContent: "left",
      "& :hover": {
        backgroundColor: "#42B094 !important",
        transition: "0.5s",
      },
    },
    button: {
      borderRadius: "50% 50% 50% 50% !important",
      backgroundColor: "#6EBDAA",
      color: "#ffffff",
      border: "none",
      height: "3em",
      width: "3em",
      minWidth: "32px",
    },
    buttonCounter: {
      backgroundColor: "white",
      border: "none",
      marginRight: "1em",
      marginLeft: "1em",
      color: "#6EBDAA !important",
      fontSize: "1.1em",
    },
  };
};

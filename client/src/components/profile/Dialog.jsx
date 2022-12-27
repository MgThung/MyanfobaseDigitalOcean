import "./profile.css";

function Dialog({ message, onDialog, Postname }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      onClick={() => onDialog(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "white",
          padding: "50px",
          borderRadius: "10px",
        }}
      >
        <h3 className="areusure" stlye={{  fontSize: "16px" }}>{message}</h3>
        <h1 style={{ color: "black", fontSize: "24px", marginTop: "30px" }}>
          {Postname}
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={() => onDialog(true)}
            style={{
              margin: "auto",
              border: "1px solid #000",
              borderRadius: "10px",
              color: "rgb(4, 55, 99)",

              // background: "rgb(238, 239, 245)",
              fontWeight: "800",
              transition: "all 0.5s ease-in-out",
              padding: "0.5rem 1rem",
              marginTop: "35px",
            }}

            // style={{
            //   borderRadius: "3px",
            //   background: "#eccbd9",
            //   color: "white",
            //   marginTop: "35px",
            //   padding: "14px",
            //   marginRight: "5px",
            //   cursor: "pointer",
            // }}
          >
            Yes
          </button>
          <button
            onClick={() => onDialog(false)}
            style={{
              marginLeft: "40px",
              // margin: "auto",
              border: "1px solid #000",
              borderRadius: "10px",
              color: "rgb(4, 55, 99)",
              background: "rgb(238, 239, 245)",
              fontWeight: "800",
              transition: "all 0.5s ease-in-out",
              padding: "0.5rem 1rem",
              marginTop: "35px",
            }}
            // style={{
            //   borderRadius: "3px",

            //   background: "#97d2fb",
            //   color: "white",
            //   marginTop: "35px",

            //   padding: "14px",
            //   marginLeft: "35px",
            //   border: "none",
            //   cursor: "pointer",
            // }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dialog;

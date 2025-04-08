// This component is used to display a loading spinner overlay on the screen.
import { Spinner } from "reactstrap";

const LoaderOverlay = () => {
  return (
    <div style={{
      position: 'fixed',
      zIndex: 9999,
      backgroundColor: 'rgba(255,255,255,0.9)',
      width: '100vw',
      height: '100vh',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
       <Spinner style={{ width: "3rem", height: "3rem", color: "#fff" }} />
    </div>
  );
};

export default LoaderOverlay;

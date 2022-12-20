import { useEffect, useRef } from "react";
import "./PageOne.scss";

const PageOne = () => {

  const mountRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <div className="pageOne">
      <div className="textOverlayTop">
        <h1 className="title">Personal Website</h1>
      </div>
    </div>
  );
}

export default PageOne;
import { useEffect, useRef } from "react";
import ResponsiveModal from "react-responsive-modal";
import "./PageOne.scss";

const PageOne = () => {

  const mountRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <ResponsiveModal
      open={modalVisible}
      onClose={() => setModalVisible(false)}
      styles={styles}
      animationDuration={1000}
      focusTrapped={true}
      closeIconSize={40}
      showCloseIcon={true}
    >
      <ExtraInfo>Click ESC or click outside input.</ExtraInfo>
    </ResponsiveModal>
  );
}

export default PageOne;
import { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount!");
    return () => {
      //unmount시점에 실행 됨
      console.log("unmount!");
    };
  });
  return <div>Unmount Testing Component</div>;
};

const LifeCycle = () => {
  const [isVisible, setIsVisivle] = useState(false);
  const toggle = () => {
    setIsVisivle(!isVisible);
  };
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {/* 단락회로평가 */}
      {isVisible && <UnmountTest />}
    </div>
  );
};
export default LifeCycle;

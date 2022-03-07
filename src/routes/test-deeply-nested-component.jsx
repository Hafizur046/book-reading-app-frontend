import { useEffect } from "react";

function TestDeeplyNestedComponent({ socket }) {
  useEffect(() => {
    if (!socket) return;
    socket.on("welcome", () => {
      console.log("welcome");
    });
  }, []);
  return (
    <div>
      <h1>TestDeeplyNestedComponent</h1>
      <p>This is a test component that is deeply nested.</p>
    </div>
  );
}
export default TestDeeplyNestedComponent;

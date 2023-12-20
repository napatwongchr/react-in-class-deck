import "./App.css";
import GreetingMessage from "./components/GreetingMessage";

// 1) โจทย์: เราต้องทำให้ component GreetingMessage แสดงผลแตกต่างกัน
//     ตามรูปแบบที่กำหนด (Primary / Seconndary)
// 2) ขั้นตอน
//    - เปลี่ยนรูปแบบ style (css prop)
//    - ใช้ prop ในการเปลี่ยนรูปแบบว่า primary / secondary
//       ให้แสดงผลคนละแบบ
function App() {
  return (
    <>
      <h1>Primary Greeting Message</h1>
      <GreetingMessage type="primary" text="Hello !" />

      <h1>Secondary Greeting Message</h1>
      <GreetingMessage type="secondary" text="Hello !" />
    </>
  );
}

export default App;

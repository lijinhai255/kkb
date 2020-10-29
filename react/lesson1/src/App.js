import React from "react";
import ContextPage from "./pages/Contex";
import HocPage from "./pages/HocPage"
import ConsumerPage from "./pages/ConsumerPage"
import ReduxPage from "./pages/ReduxPage"
// 引入表单组建
import MyForm from "./pages/MyForm"
export default function App(props) {
  return (
    <div>
      {/* <ContextPage /> */}
      {/* <AntdFormPage /> */}
      {/* <MyRCFieldForm /> */}
      {/* <HocPage></HocPage> */}
      {/* <MyForm></MyForm> */}
      {/* <ConsumerPage></ConsumerPage> */}
      <ReduxPage></ReduxPage>
    </div>
  );
}

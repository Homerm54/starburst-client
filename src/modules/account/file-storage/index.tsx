import { useState } from "react";
import { BindScreen } from './bind';
import { Dashboard } from "./dashboard";

function FileStorage(): JSX.Element {
  const [showBindScreen, setShowBindScreen] = useState(false);
  const onFinish = () => setShowBindScreen(false);

  if(showBindScreen) return <BindScreen onFinish={onFinish} />;

  return <Dashboard goToBindScreen={() => setShowBindScreen(true)} />;
}

export { FileStorage };

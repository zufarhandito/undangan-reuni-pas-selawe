import './App.css';
import { useState } from 'react';
import RenderCoverUndangan from './components/RenderCoverUndangan';
import RenderIsiUndangan from './components/IsiUndangan/RenderIsiUndangan';

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const renderUndangan = () => {
    switch (open) {
      case true:
        return <RenderIsiUndangan />;
      case false:
        return <RenderCoverUndangan setOpen={setOpen} />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-col items-center justify-center"
        id="cover"
      >
        {renderUndangan()}
      </div>
    </>
  );
}

export default App;

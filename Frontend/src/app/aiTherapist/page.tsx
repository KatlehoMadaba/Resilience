import Phoenix from "../../components/aiagent/Phoenix";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-8">
        ElevenLabs Conversational AI Demo
      </h1>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <Phoenix agentId="bVFnERsV0nyoI4qa0YPm" className="w-full h-96" />
      </div>

      <p className="mt-4 text-gray-600 text-sm">
        Powered by ElevenLabs Conversational AI
      </p>
    </div>
  );
}

export default App;

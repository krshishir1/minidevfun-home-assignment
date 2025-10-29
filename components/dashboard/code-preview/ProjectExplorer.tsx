// pages/preview.jsx
"use client";

import { useState } from "react";
import FileExplorer from "./FileExplorer";
import CodeViewer from "./CodeViewer";

const fileTree = {
  name: "src",
  type: "folder",
  children: [
    {
      name: "components",
      type: "folder",
      children: [
        {
          name: "Button.tsx",
          type: "file",
          content: "export const Button = () => <button>Click</button>;",
        },
      ],
    },
    {
      name: "App.tsx",
      type: "file",
      content:
        "import { Button } from './components/Button';\n\nexport default function App() {\n  return <Button />;\n}",
    },
  ],
};

export default function Preview() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="flex border border-gray-200 rounded-lg overflow-hidden w-full h-full shadow-sm bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto p-3 text-sm">
        <FileExplorer node={fileTree} onSelect={setSelectedFile} />
      </div>

      {/* Code View */}
      <div className="flex-1 p-3">
        <CodeViewer file={selectedFile} />
      </div>
    </div>
  );
}

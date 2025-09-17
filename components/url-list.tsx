import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { CopyIcon, EyeIcon } from "lucide-react";

const UrlList = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-8 p-6rounded-xl   ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent URLs</h2>
      <ul className="space-y-4">
        <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm transition">
          <Link
            href="https://chatgpt.com/?temporary-chat=true"
            className="text-blue-600 hover:underline break-all"
          >
            https://chatgpt.com/?temporary-chat=true
          </Link>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-blue-600"
            >
              <CopyIcon className="w-4 h-4" />
            </Button>
            <span className="flex items-center text-sm text-gray-500">
              <EyeIcon className="w-4 h-4 mr-1" /> 100 views
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UrlList;

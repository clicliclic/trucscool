import React from "react";
import App from "./App";
import { StrictMode } from 'react';

import "./index.css";

import { createRoot } from 'react-dom/client';
const el = document.getElementById("app");
const root = createRoot(el);

root.render(
<StrictMode>
    <App />
</StrictMode>
);
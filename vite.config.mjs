import { defineConfig } from 'npm:vite@^4.3.9'
import react from "npm:@vitejs/plugin-react@^4.0.0"
import 'npm:react@^18.2.0'

export default defineConfig({
  plugins: [react()]
})

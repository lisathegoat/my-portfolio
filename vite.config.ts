import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Dev läuft auf 3000, die Produktions-Vorschau daneben auf 3001, damit beide
  // gleichzeitig offen sein können. strictPort: kein stilles Ausweichen auf
  // einen anderen Port, sonst stimmt die URL im Browser nicht mehr.
  server: { port: 3000, strictPort: true },
  preview: { port: 3001, strictPort: true },
})

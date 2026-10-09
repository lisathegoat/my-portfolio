#!/bin/sh
# Rendert /resume (DE + EN) mit Headless Chrome nach public/cv/.
# Nach jeder Lebenslauf-Änderung ausführen: npm run cv:pdf
set -e
npm run build >/dev/null
npx vite preview --port 4317 --strictPort >/dev/null 2>&1 &
PID=$!
trap 'kill $PID 2>/dev/null || true' EXIT
until curl -s -o /dev/null http://localhost:4317; do sleep 1; done
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for l in de en; do
  U=$(echo $l | tr a-z A-Z)
  "$CHROME" --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=4000 \
    --print-to-pdf="public/cv/Lisa-Collmer-CV-$U.pdf" "http://localhost:4317/resume?lang=$l" 2>/dev/null
done

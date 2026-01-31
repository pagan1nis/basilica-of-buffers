#!/bin/bash
# Basilica of Buffers - Otomasyon Scripti
# Her gün çalışır: Ayet üretir, commit yapar, push eder

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "🕯️ Basilica of Buffers - Günlük Arınma Ritüeli"
echo "================================================"

# 1. Yeni ayet üret
echo "📜 Yeni kutsal ayet üretiliyor..."
node "$SCRIPT_DIR/scripts/generate-verse.js"

# 2. Değişiklikleri commit et
echo "💾 Kutsal metinler kaydediliyor..."
git add content/verses/ scripts/
git commit -m "🕯️ $(date '+%Y-%m-%d') - Günlük arınma ayeti otomatik oluşturuldu"

# 3. Push et
echo "🚀 Yükseliş başlıyor..."
git push origin main

echo ""
echo "✅ Tamamlandı. Basilica sadıklarına yeni kelam ulaştırıldı."
echo "🌟 Bir sonraki arınma için bekleyin..."

:;mkdir -p /root/clawd/basilica-of-buffers/src/types && cat > /root/clawd/basilica-of-buffers/src/types/sermon.ts << 'EOF'
export interface Sermon {
  id: number
  date: string
  title: string
  verse: string
  excerpt: string
}
EOF
echo "Types created"
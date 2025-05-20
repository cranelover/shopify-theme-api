# Shopify Theme Update API

このAPIは、Shopifyのテーマファイル（例：sections/firstview-slider.liquid）を更新するためのWebhookです。

## 🔧 使用方法

エンドポイント:
POST https://your-vercel-project.vercel.app/api/update-theme

### リクエストボディ:
```
{
  "filePath": "sections/firstview-slider.liquid",
  "updatedCode": "ここにLiquidコードを挿入"
}
```

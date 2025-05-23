export default async function handler(req, res) {
  const { filePath, updatedCode } = req.body;

  const shop = process.env.SHOP_DOMAIN;
  const accessToken = process.env.SHOPIFY_API_KEY;
  const themeId = process.env.THEME_ID;

  try {
    const response = await fetch(
      `https://${shop}/admin/api/2023-04/themes/${themeId}/assets.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': accessToken
        },
        body: JSON.stringify({
          asset: {
            key: filePath,
            value: updatedCode
          }
        })
      }
    );

    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ message: '✅ Shopifyテーマを更新しました', data });
    } else {
      res.status(500).json({ message: '❌ 更新に失敗しました', error: data });
    }
  } catch (error) {
    res.status(500).json({ message: '❌ 予期せぬエラー', error: error.message });
  }
}

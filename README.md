# FAST-FOOD restorani uchun BackEnd API 🍔

## Loyihaning maqsadi: 🎯
 Biror bir fast-food restorani uchun menyularni ko'rish va ovqatlarga buyurtma berish imlkoniyatini beruvchi loyihaning Backend API
 

## Funksional talablar:
- Barcha taomlarni category'larni bo'lishi kerak. Misol burgerlar, pitsalar va hkz.
- Har bir taom biror category'ga mansub bo'lishi kerak.
- Taomning 1ta rasmi, nomi, narxi, description bo'lishi kerak.
- Foydalanuvchi ro'yhatdan o'tmagan holatda ham category va taomlarni ko'rishi kerak.
- Foydalanuvchi email va name bilan ro'yhatdan o'tadi.
- Profilga kirish email orqali bo'ladi.
- Foydalanuvchi savatga mahsulotlar qosha olishi kerak.
- Foydalanuvchi bir necha mahsulotlarni zakaz qila olishi kerak.
- Foydalanuvchi profilda o'z zakazlari tarixini ko'rishi kerak.
- Foydalanuvchi profilni yangilay olishi kerak.

## Nofunksional talablar
- Tezlik
- Xavfsizlik
- Kengaya oladigan

## Database models:

1. Category:
    - id
    - name
    - createdAt
    - updateAt
2. Food:
    - id
    - name
    - price
    - description
    - imageUrl
    - categoryId (FK)
    - createdAt
    - updateAt
3. User:
    - id 
    - name
    - email
    - imageUrl
    - createdAt
    - updateAt
4. Order:
    - id
    - createdAt
    - total_price
    - userId (FK)
5. OrderItem: 
    - count
    - orderId (FK)
    - foodId (FK)
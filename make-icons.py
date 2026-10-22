# -*- coding: utf-8 -*-
"""Собирает иконки приложения NeedBuy из готового логотипа logo.png.

    python make-icons.py

logo.png — логотип от Александра (22.10.2026): 512×512, золотая корзина на
тёмно-синем градиенте, углы СКРУГЛЕНЫ и прозрачны. Раньше иконку рисовал этот
же скрипт с нуля; теперь исходник — картинка, а скрипт только готовит из неё
три файла.

Зачем вообще готовить, а не положить логотип как есть: прозрачные углы
годятся не везде.
  - iPhone сам скругляет иконку, а прозрачное заливает ЧЁРНЫМ — на домашнем
    экране вылезли бы чёрные уголки. Ему нужен полный квадрат без прозрачности.
  - Android для maskable-иконки режет свою форму (круг, капля) из полного
    квадрата; прозрачные углы дали бы дыры по краям.
Поэтому углы достраиваем тем же градиентом, что и фон логотипа: для каждой
строки берём цвет фона у её края и подкладываем под строку.

На выходе: icon.png (как есть, со скруглением), icon-maskable.png и
apple-touch-icon.png (180×180) — оба полным квадратом.
"""
from PIL import Image

SRC = 'logo.png'
S = 512

logo = Image.open(SRC).convert('RGBA')
if logo.size != (S, S):
    logo = logo.resize((S, S), Image.LANCZOS)

# Подложка: каждая строка залита цветом фона у её левого края (первый
# полностью непрозрачный пиксель). У самого верха и низа, где строка целиком
# в скруглении, берём ближайшую строку, где фон уже есть.
px = logo.load()
row_color = [None] * S
for y in range(S):
    for x in range(S // 3):
        r, g, b, a = px[x, y]
        if a == 255:
            row_color[y] = (r, g, b)
            break
first = next(c for c in row_color if c)
for y in range(S):
    if row_color[y] is None:
        row_color[y] = first
    else:
        first = row_color[y]

under = Image.new('RGB', (S, S))
up = under.load()
for y in range(S):
    for x in range(S):
        up[x, y] = row_color[y]

full = under.copy()
full.paste(logo, (0, 0), logo)          # логотип поверх, края сглажены альфой

logo.save('icon.png')
full.save('icon-maskable.png')
full.resize((180, 180), Image.LANCZOS).save('apple-touch-icon.png')
print('готово: icon.png, icon-maskable.png, apple-touch-icon.png')

# -*- coding: utf-8 -*-
"""Рисует иконки приложения NeedBuy.

Рисуем в 4-кратном размере и уменьшаем — так края получаются гладкими
без всяких библиотек сглаживания.

    python make-icons.py

На выходе: icon.png (обычная), icon-maskable.png (с полями под круглую
обрезку Android — там система режет углы, поэтому рисунок мельче),
apple-touch-icon.png (180×180 для iPhone).
"""
from PIL import Image, ImageDraw

S = 512          # итоговый размер
K = 4            # во сколько раз рисуем крупнее

# Фамильные цвета: тёмно-синий фон и золотой знак — как у Mynado и InveStory.
# Знак ОДНОЦВЕТНЫЙ: у Mynado это золотая галочка, у InveStory золотые столбики,
# у нас золотая корзина. Пёстрый рисунок выбился бы из ряда на домашнем экране.
BG_TOP    = (30, 42, 74)     # #1E2A4A
BG_BOTTOM = (16, 24, 44)     # #10182C
GOLD      = (242, 199, 94)   # #F2C75E
GOLD_DARK = (208, 154, 46)   # #D09A2E


def gradient(size, top, bottom):
    """Вертикальная заливка от top к bottom."""
    img = Image.new('RGB', (1, size))
    px = img.load()
    for y in range(size):
        f = y / (size - 1)
        px[0, y] = tuple(int(top[i] + (bottom[i] - top[i]) * f) for i in range(3))
    return img.resize((size, size))


def draw_basket(d, cx, cy, scale, main, deep):
    """Корзина: дужка, ободок, корпус, прорези."""
    def p(x, y):
        return (cx + x * scale, cy + y * scale)

    # дужка
    d.arc([p(-88, -132)[0], p(-88, -132)[1], p(88, 44)[0], p(88, 44)[1]],
          start=185, end=355, fill=main, width=int(26 * scale))

    # ободок
    d.rounded_rectangle([p(-116, -30), p(116, 16)], radius=int(23 * scale), fill=main)

    # корпус — сужается книзу
    d.polygon([p(-100, 16), p(100, 16), p(74, 132), p(-74, 132)], fill=main)
    d.rounded_rectangle([p(-78, 104), p(78, 136)], radius=int(18 * scale), fill=main)

    # прорези: цветом фона, поэтому корзина читается как плетёная
    for x0, x1 in ((-46, -38), (-4, -4), (42, 34)):
        d.line([p(x0, 34), p(x1, 108)], fill=deep, width=int(15 * scale))


def build(inner_scale, out, size=S):
    """inner_scale — насколько мельче рисунок относительно холста.
       Для maskable нужно поле: Android режет углы под круг."""
    big = size * K
    img = gradient(big, BG_TOP, BG_BOTTOM).convert('RGBA')

    # скругление углов только у обычной иконки; у maskable фон должен быть до краёв
    if inner_scale > 0.85:
        mask = Image.new('L', (big, big), 0)
        ImageDraw.Draw(mask).rounded_rectangle([0, 0, big - 1, big - 1],
                                               radius=int(big * 0.22), fill=255)
        img.putalpha(mask)

    d = ImageDraw.Draw(img)
    cx = cy = big / 2
    s = K * inner_scale
    # тень под знаком — тем же синим, только глубже: даёт объём, как в приложении
    draw_basket(d, cx, cy + 12 * s + 5 * s, s, (10, 16, 30), (10, 16, 30))
    draw_basket(d, cx, cy + 12 * s, s, GOLD, BG_BOTTOM)

    img.resize((size, size), Image.LANCZOS).save(out)
    print('готово:', out, size)


build(1.0, 'icon.png')                       # обычная, со скруглёнными углами
build(0.72, 'icon-maskable.png')             # с полями под обрезку Android
build(1.0, 'apple-touch-icon.png', 180)      # iPhone

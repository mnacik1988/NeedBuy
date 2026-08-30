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
BG_TOP    = (26, 175, 85)
BG_BOTTOM = (13, 118, 55)
WHITE     = (255, 255, 255)
APPLE     = (226, 58, 78)
LEAF      = (76, 175, 80)


def gradient(size, top, bottom):
    """Вертикальная заливка от top к bottom."""
    img = Image.new('RGB', (1, size))
    px = img.load()
    for y in range(size):
        f = y / (size - 1)
        px[0, y] = tuple(int(top[i] + (bottom[i] - top[i]) * f) for i in range(3))
    return img.resize((size, size))


def draw_basket(d, cx, cy, scale):
    """Корзина: дужка, ободок, корпус, прорези."""
    def p(x, y):
        return (cx + x * scale, cy + y * scale)

    # дужка
    d.arc([p(-88, -132)[0], p(-88, -132)[1], p(88, 44)[0], p(88, 44)[1]],
          start=185, end=355, fill=WHITE, width=int(26 * scale))

    # ободок
    d.rounded_rectangle([p(-116, -30), p(116, 16)], radius=int(23 * scale), fill=WHITE)

    # корпус — сужается книзу
    d.polygon([p(-100, 16), p(100, 16), p(74, 132), p(-74, 132)], fill=WHITE)
    d.rounded_rectangle([p(-78, 104), p(78, 136)], radius=int(18 * scale), fill=WHITE)

    # прорези корзины
    for x0, x1 in ((-46, -38), (-4, -4), (42, 34)):
        d.line([p(x0, 34), p(x1, 108)], fill=BG_BOTTOM, width=int(15 * scale))


def draw_apple(d, cx, cy, r):
    """Яблоко, выглядывающее из корзины — цветовое пятно и отсылка к примеру."""
    d.line([(cx, cy - r * 0.7), (cx - r * 0.25, cy - r * 1.5)],
           fill=(107, 74, 43), width=max(2, int(r * 0.2)))
    d.polygon([(cx + r * 0.08, cy - r * 1.2), (cx + r * 0.7, cy - r * 1.55),
               (cx + r * 0.95, cy - r * 1.15), (cx + r * 0.4, cy - r * 0.95)], fill=LEAF)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=APPLE)


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
    draw_apple(d, cx + 88 * s, cy - 48 * s, 42 * s)
    draw_basket(d, cx, cy + 12 * s, s)

    img.resize((size, size), Image.LANCZOS).save(out)
    print('готово:', out, size)


build(1.0, 'icon.png')                       # обычная, со скруглёнными углами
build(0.72, 'icon-maskable.png')             # с полями под обрезку Android
build(1.0, 'apple-touch-icon.png', 180)      # iPhone

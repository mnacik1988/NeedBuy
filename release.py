# -*- coding: utf-8 -*-
"""Поднимает версию NeedBuy.

    python release.py           0.5.1 → 0.5.2   обычная правка
    python release.py minor     0.5.2 → 0.6.0   заметный блок функций
    python release.py major     0.6.0 → 1.0.0   релиз

Зачем скрипт, а не руками: номер живёт в ДВУХ местах — APP_VERSION в index.html
и CACHE_NAME в sw.js. Если поднять только первый, браузер продолжит отдавать
старые файлы из кэша, и правка «не доедет» до телефона. Тут они всегда идут
вместе, забыть нельзя.
"""
import io, re, sys

HTML, SW = 'index.html', 'sw.js'
part = (sys.argv[1] if len(sys.argv) > 1 else 'patch').lower()
if part not in ('patch', 'minor', 'major'):
    sys.exit('Скажи patch, minor или major (по умолчанию patch)')

html = io.open(HTML, encoding='utf-8').read()
m = re.search(r"var APP_VERSION\s*=\s*'([^']+)'", html)
if not m:
    sys.exit('Не нашёл APP_VERSION в ' + HTML)

nums = [int(x) for x in m.group(1).split('.')]
while len(nums) < 3:
    nums.append(0)
major, minor, patch = nums[:3]

if part == 'patch':
    patch += 1
elif part == 'minor':
    minor, patch = minor + 1, 0
else:
    major, minor, patch = major + 1, 0, 0

old, new = m.group(1), '%d.%d.%d' % (major, minor, patch)

html = html.replace("var APP_VERSION  = '%s'" % old, "var APP_VERSION  = '%s'" % new)
html = html.replace("var APP_VERSION = '%s'" % old, "var APP_VERSION = '%s'" % new)
io.open(HTML, 'w', encoding='utf-8').write(html)

sw = io.open(SW, encoding='utf-8').read()
sw2 = re.sub(r"var CACHE_NAME\s*=\s*'needbuy-v[^']*'",
             "var CACHE_NAME = 'needbuy-v%s'" % new, sw)
if sw2 == sw:
    sys.exit('Не нашёл CACHE_NAME в ' + SW + ' — версия поднята только наполовину!')
io.open(SW, 'w', encoding='utf-8').write(sw2)

print('%s -> %s (index.html + sw.js)' % (old, new))

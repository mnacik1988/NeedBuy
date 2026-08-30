/* NeedBuy — собственные иллюстрации товаров.
   Все рисунки нарисованы с нуля для этого проекта.
   Никаких сторонних наборов, никакой атрибуции, никаких лицензий.
   Формат: viewBox 0 0 100 100, прозрачный фон, тело ~72x72 по центру.
   Общий стиль: плотная заливка + тёмная подложка снизу + белый глянец сверху.
*/
(function(g){

/* --- общие кусочки --- */
function gloss(cx,cy,rx,ry,rot,op){
  return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" fill="#fff" opacity="'+(op||0.30)+'" transform="rotate('+(rot||-25)+' '+cx+' '+cy+')"/>';
}
function leaf(x,y,flip){
  var s = flip?-1:1;
  return '<path d="M'+x+' '+y+' c'+(10*s)+' -11 '+(26*s)+' -9 '+(28*s)+' -4 c'+(-4*s)+' 11 '+(-20*s)+' 13 '+(-28*s)+' 4 z" fill="#4CAF50"/>'+
         '<path d="M'+x+' '+y+' c'+(11*s)+' -6 '+(20*s)+' -7 '+(26*s)+' -6" stroke="#3C9140" stroke-width="1.6" fill="none" stroke-linecap="round"/>';
}
function stem(d){ return '<path d="'+d+'" stroke="#6B4A2B" stroke-width="5" fill="none" stroke-linecap="round"/>'; }

var I = {};

/* ================= ФРУКТЫ ================= */
I.apple =
  stem('M50 34 C50 24 46 16 41 12')+
  leaf(52,24)+
  '<path d="M50 34 C42 24 26 24 20 36 C14 48 20 68 30 80 C36 87 44 88 50 83 C56 88 64 87 70 80 C80 68 86 48 80 36 C74 24 58 24 50 34 Z" fill="#D32846"/>'+
  '<path d="M50 34 C56 26 66 24 72 27 C80 31 84 42 82 52 C80 66 72 80 64 84 C74 74 80 58 78 46 C76 36 66 32 50 34 Z" fill="#B01F39" opacity=".55"/>'+
  gloss(36,48,7,13,-22,.34);

I.pear =
  stem('M50 26 C50 18 47 13 43 10')+
  leaf(53,18)+
  '<path d="M50 26 C41 26 36 34 38 43 C40 52 28 58 28 70 C28 81 38 89 50 89 C62 89 72 81 72 70 C72 58 60 52 62 43 C64 34 59 26 50 26 Z" fill="#C6D63C"/>'+
  '<path d="M58 30 C66 36 62 50 66 56 C72 63 70 78 58 86 C70 84 76 76 76 69 C76 56 62 51 64 42 C65 36 62 31 58 30 Z" fill="#A8B92E" opacity=".6"/>'+
  gloss(40,64,7,12,-15,.32);

I.banana =
  '<path d="M22 30 C20 52 34 74 58 78 C72 80 82 74 84 66 C85 61 80 58 76 61 C70 66 58 66 48 58 C36 48 32 38 33 29 C33 24 25 24 22 30 Z" fill="#F5C518"/>'+
  '<path d="M28 34 C30 52 44 68 62 71 C72 73 79 70 82 66 C79 74 70 79 58 77 C36 73 23 52 25 32 Z" fill="#D9A711"/>'+
  '<path d="M22 30 C24 26 30 25 32 28" stroke="#7A5A20" stroke-width="4" fill="none" stroke-linecap="round"/>'+
  '<path d="M84 66 c3 2 3 6 0 7" stroke="#7A5A20" stroke-width="3.4" fill="none" stroke-linecap="round"/>'+
  gloss(44,44,5,16,35,.30);

I.orange =
  '<circle cx="50" cy="56" r="30" fill="#F58220"/>'+
  '<path d="M50 26 a30 30 0 0 1 0 60 a22 30 0 0 0 0 -60 z" fill="#DC6A11" opacity=".55"/>'+
  stem('M50 27 C50 22 50 20 50 18')+
  leaf(52,22)+
  gloss(38,44,7,11,-25,.32);

I.lemon =
  '<path d="M22 56 C22 42 34 32 50 32 C66 32 78 42 78 56 C78 70 66 80 50 80 C34 80 22 70 22 56 Z" fill="#F7D423"/>'+
  '<path d="M50 32 C66 32 78 42 78 56 C78 70 66 80 50 80 C62 74 66 66 66 56 C66 45 61 37 50 32 Z" fill="#DFBA10" opacity=".55"/>'+
  '<path d="M20 56 c-4 0 -6 -1 -6 -1 M80 56 c4 0 6 -1 6 -1" stroke="#DFBA10" stroke-width="5" stroke-linecap="round"/>'+
  gloss(38,46,6,10,-25,.34);

I.grapes =
  '<path d="M50 24 C50 18 54 14 60 13" stroke="#6B4A2B" stroke-width="4" fill="none" stroke-linecap="round"/>'+
  leaf(52,18)+
  '<g fill="#7A4FA3">'+
  '<circle cx="50" cy="34" r="10"/><circle cx="36" cy="46" r="10"/><circle cx="64" cy="46" r="10"/>'+
  '<circle cx="50" cy="50" r="10"/><circle cx="29" cy="62" r="10"/><circle cx="43" cy="64" r="10"/>'+
  '<circle cx="57" cy="64" r="10"/><circle cx="71" cy="62" r="10"/><circle cx="50" cy="78" r="10"/></g>'+
  '<g fill="#fff" opacity=".28"><circle cx="46" cy="30" r="3.2"/><circle cx="32" cy="42" r="3.2"/><circle cx="60" cy="42" r="3.2"/><circle cx="39" cy="60" r="3.2"/><circle cx="46" cy="74" r="3.2"/></g>';

I.strawberry =
  '<path d="M50 30 C34 30 24 40 24 52 C24 68 40 86 50 88 C60 86 76 68 76 52 C76 40 66 30 50 30 Z" fill="#E02B45"/>'+
  '<path d="M50 30 C66 30 76 40 76 52 C76 68 60 86 50 88 C62 78 68 62 68 50 C68 40 60 32 50 30 Z" fill="#BC2038" opacity=".5"/>'+
  '<g fill="#FFE08A"><circle cx="42" cy="46" r="2.2"/><circle cx="56" cy="44" r="2.2"/><circle cx="50" cy="56" r="2.2"/><circle cx="38" cy="60" r="2.2"/><circle cx="62" cy="58" r="2.2"/><circle cx="46" cy="70" r="2.2"/><circle cx="58" cy="70" r="2.2"/></g>'+
  '<path d="M50 32 L34 24 L44 26 L38 16 L50 24 L62 16 L56 26 L66 24 Z" fill="#4CAF50"/>'+
  '<path d="M50 22 v10" stroke="#6B4A2B" stroke-width="4" stroke-linecap="round"/>';

I.watermelon =
  '<path d="M14 66 A40 40 0 0 1 86 66 Z" fill="#2E7D32"/>'+
  '<path d="M20 66 A34 34 0 0 1 80 66 Z" fill="#F4F0D8"/>'+
  '<path d="M25 66 A29 29 0 0 1 75 66 Z" fill="#E23A4E"/>'+
  '<g fill="#2A2118"><ellipse cx="40" cy="54" rx="2.4" ry="3.4"/><ellipse cx="60" cy="54" rx="2.4" ry="3.4"/><ellipse cx="50" cy="60" rx="2.4" ry="3.4"/><ellipse cx="33" cy="62" rx="2.4" ry="3.4"/><ellipse cx="67" cy="62" rx="2.4" ry="3.4"/></g>';

I.peach =
  stem('M50 30 C50 22 47 18 44 15')+leaf(53,20)+
  '<path d="M50 30 C34 30 22 42 22 56 C22 72 34 84 50 84 C66 84 78 72 78 56 C78 42 66 30 50 30 Z" fill="#F98A5B"/>'+
  '<path d="M50 30 C66 30 78 42 78 56 C78 72 66 84 50 84 C60 76 64 66 64 56 C64 44 58 34 50 30 Z" fill="#E06B41" opacity=".5"/>'+
  '<path d="M50 32 C46 44 46 70 50 82" stroke="#D9603A" stroke-width="2.2" fill="none" opacity=".6"/>'+
  gloss(38,46,7,11,-25,.32);

/* ================= ОВОЩИ ================= */
I.tomato =
  '<circle cx="50" cy="58" r="29" fill="#E5372F"/>'+
  '<path d="M50 29 a29 29 0 0 1 0 58 a21 29 0 0 0 0 -58 z" fill="#C22A24" opacity=".5"/>'+
  '<path d="M50 30 L36 22 L46 26 L42 16 L50 25 L58 16 L54 26 L64 22 Z" fill="#3F9B45"/>'+
  '<circle cx="50" cy="27" r="4" fill="#357F3A"/>'+
  gloss(38,46,7,11,-25,.32);

I.cucumber =
  '<path d="M26 76 C16 66 20 44 36 30 C50 18 70 18 76 26 C82 34 78 52 64 66 C50 80 34 84 26 76 Z" fill="#4C9A38"/>'+
  '<path d="M40 30 C56 18 72 20 76 26 C82 34 78 52 64 66 C56 74 48 78 40 79 C56 72 70 54 70 40 C70 33 62 28 40 30 Z" fill="#3B7C2C" opacity=".6"/>'+
  '<g fill="#2F6624" opacity=".55"><circle cx="42" cy="44" r="2"/><circle cx="52" cy="38" r="2"/><circle cx="36" cy="56" r="2"/><circle cx="56" cy="52" r="2"/><circle cx="46" cy="64" r="2"/></g>'+
  gloss(38,42,4,12,40,.26);

I.potato =
  '<path d="M24 58 C20 42 34 28 54 26 C72 24 82 34 80 50 C78 66 62 80 44 78 C30 76 26 68 24 58 Z" fill="#C99A5B"/>'+
  '<path d="M56 27 C74 26 82 36 80 50 C78 66 62 80 44 78 C60 74 72 62 74 48 C76 36 68 29 56 27 Z" fill="#A87D42" opacity=".55"/>'+
  '<g fill="#8A6534" opacity=".6"><ellipse cx="44" cy="42" rx="3" ry="2"/><ellipse cx="62" cy="52" rx="3" ry="2"/><ellipse cx="38" cy="62" rx="3" ry="2"/></g>'+
  gloss(40,40,6,10,-20,.24);

I.carrot =
  '<path d="M50 88 C44 78 30 52 32 42 C34 32 46 26 56 30 C66 34 70 46 68 54 C66 64 56 80 50 88 Z" fill="#F07C1E"/>'+
  '<path d="M58 31 C67 35 70 46 68 54 C66 64 56 80 50 88 C56 74 62 58 62 48 C62 40 60 34 58 31 Z" fill="#D5651A" opacity=".55"/>'+
  '<g stroke="#C85B14" stroke-width="2" stroke-linecap="round" opacity=".55">'+
  '<path d="M40 44 l8 4"/><path d="M44 56 l8 4"/><path d="M50 68 l7 3"/></g>'+
  '<path d="M52 30 C50 20 44 14 36 12 C44 12 50 16 53 22 C54 14 60 8 68 8 C62 12 58 20 58 28 Z" fill="#4CAF50"/>';

I.onion =
  '<path d="M50 30 C32 30 24 44 24 58 C24 74 36 86 50 86 C64 86 76 74 76 58 C76 44 68 30 50 30 Z" fill="#C9A24A"/>'+
  '<path d="M50 30 C68 30 76 44 76 58 C76 74 64 86 50 86 C60 78 66 68 66 56 C66 44 58 34 50 30 Z" fill="#A9853A" opacity=".5"/>'+
  '<path d="M50 32 C42 46 42 70 50 84 M38 38 C32 50 32 70 40 82 M62 38 C68 50 68 70 60 82" stroke="#A9853A" stroke-width="2" fill="none" opacity=".7"/>'+
  '<path d="M50 30 C48 22 44 16 40 12 M50 30 C52 22 56 16 60 12" stroke="#8FB84F" stroke-width="4" fill="none" stroke-linecap="round"/>';

I.garlic =
  '<path d="M50 26 C36 34 28 48 28 60 C28 76 38 86 50 86 C62 86 72 76 72 60 C72 48 64 34 50 26 Z" fill="#F0EAE0"/>'+
  '<path d="M50 26 C64 34 72 48 72 60 C72 76 62 86 50 86 C58 76 62 66 62 56 C62 44 56 32 50 26 Z" fill="#D8CFC1" opacity=".7"/>'+
  '<path d="M50 28 C44 42 42 68 50 84 M36 40 C30 52 32 72 40 82" stroke="#CFC4B4" stroke-width="2" fill="none"/>'+
  '<path d="M50 26 C50 18 52 14 55 11 C52 16 52 20 53 24 Z" fill="#B8AC98"/>';

I.pepper =
  /* болгарский перец: три доли снизу и толстая зелёная плодоножка */
  '<path d="M26 46 C26 36 34 32 42 34 C46 30 54 30 58 34 C66 32 74 36 74 46 C74 60 70 74 62 80 C58 83 55 79 54 75 C53 79 51 82 50 82 C49 82 47 79 46 75 C45 79 42 83 38 80 C30 74 26 60 26 46 Z" fill="#E33B33"/>'+
  '<path d="M58 34 C66 32 74 36 74 46 C74 60 70 74 62 80 C58 83 55 79 54 75 C58 68 62 56 62 46 C62 40 60 36 58 34 Z" fill="#C22A24" opacity=".55"/>'+
  '<path d="M42 34 C44 26 56 26 58 34" stroke="#3F9B45" stroke-width="8" fill="none" stroke-linecap="round"/>'+
  '<path d="M50 28 C50 20 48 16 44 13" stroke="#3F9B45" stroke-width="6" fill="none" stroke-linecap="round"/>'+
  gloss(38,52,6,13,-14,.32);

I.cabbage =
  '<circle cx="50" cy="56" r="31" fill="#9FCB6A"/>'+
  '<circle cx="50" cy="56" r="24" fill="#B6DB84"/>'+
  '<circle cx="50" cy="56" r="14" fill="#CDE9A2"/>'+
  '<path d="M50 25 C36 34 30 44 28 56 M50 25 C64 34 70 44 72 56 M27 62 C38 68 44 76 48 87 M73 62 C62 68 56 76 52 87" stroke="#7FAE50" stroke-width="2.4" fill="none"/>';

I.avocado =
  '<path d="M50 22 C38 22 30 34 30 48 C30 62 34 86 50 86 C66 86 70 62 70 48 C70 34 62 22 50 22 Z" fill="#4E7A32"/>'+
  '<path d="M50 28 C41 28 36 37 36 48 C36 60 40 80 50 80 C60 80 64 60 64 48 C64 37 59 28 50 28 Z" fill="#C3D96B"/>'+
  '<ellipse cx="50" cy="58" rx="12" ry="13" fill="#9A6B3A"/>'+
  gloss(45,54,3.5,5,-20,.32);

I.mushroom =
  '<path d="M20 50 C20 34 34 24 50 24 C66 24 80 34 80 50 C80 56 74 58 66 58 H34 C26 58 20 56 20 50 Z" fill="#B4543C"/>'+
  '<path d="M50 24 C66 24 80 34 80 50 C80 56 74 58 66 58 H56 C64 56 68 50 68 42 C68 34 60 26 50 24 Z" fill="#94402C" opacity=".6"/>'+
  '<path d="M40 58 h20 c0 12 2 20 4 26 H36 c2 -6 4 -14 4 -26 Z" fill="#EFE3D2"/>'+
  '<g fill="#fff" opacity=".45"><ellipse cx="38" cy="38" rx="6" ry="4"/><ellipse cx="58" cy="34" rx="5" ry="3.4"/><ellipse cx="68" cy="46" rx="4" ry="2.8"/></g>';

I.corn =
  '<path d="M50 20 C36 26 30 42 30 58 C30 74 38 86 50 86 C62 86 70 74 70 58 C70 42 64 26 50 20 Z" fill="#F5C518"/>'+
  '<path d="M50 20 C64 26 70 42 70 58 C70 74 62 86 50 86 C58 76 60 66 60 56 C60 40 56 26 50 20 Z" fill="#DBA911" opacity=".5"/>'+
  '<g stroke="#C89A0E" stroke-width="1.8" opacity=".7">'+
  '<path d="M40 30 v50"/><path d="M50 26 v58"/><path d="M60 30 v50"/>'+
  '<path d="M32 44 h36"/><path d="M32 58 h36"/><path d="M34 70 h32"/></g>'+
  '<path d="M32 56 C20 56 14 68 16 80 C28 80 34 70 34 60 Z" fill="#5FA83C"/>'+
  '<path d="M68 56 C80 56 86 68 84 80 C72 80 66 70 66 60 Z" fill="#5FA83C"/>';

I.broccoli =
  '<path d="M44 60 h12 v22 c0 4 -3 6 -6 6 s-6 -2 -6 -6 z" fill="#8FB84F"/>'+
  '<g fill="#3F8F3C"><circle cx="34" cy="46" r="13"/><circle cx="66" cy="46" r="13"/><circle cx="50" cy="36" r="15"/><circle cx="42" cy="58" r="12"/><circle cx="58" cy="58" r="12"/></g>'+
  '<g fill="#57A94F"><circle cx="44" cy="32" r="6"/><circle cx="60" cy="40" r="5"/><circle cx="34" cy="50" r="5"/><circle cx="56" cy="56" r="5"/></g>';

/* ================= МОЛОЧНОЕ ================= */
I.milk =
  '<path d="M36 26 h28 l6 12 v46 a6 6 0 0 1 -6 6 H36 a6 6 0 0 1 -6 -6 V38 Z" fill="#EDF3F8"/>'+
  '<path d="M64 26 l6 12 v46 a6 6 0 0 1 -6 6 h-8 V26 Z" fill="#D2DEE8"/>'+
  '<path d="M30 52 h40 v22 H30 z" fill="#2E7BC4"/>'+
  '<path d="M56 52 h14 v22 H56 z" fill="#2565A2"/>'+
  '<path d="M36 14 h28 v12 H36 z" fill="#2565A2" rx="2"/>'+
  '<circle cx="43" cy="63" r="6" fill="#fff" opacity=".9"/>'+
  '<path d="M50 63 h14" stroke="#fff" stroke-width="3" opacity=".8" stroke-linecap="round"/>';

I.cheese =
  '<path d="M14 66 L60 30 L88 44 L88 66 Z" fill="#F5B921"/>'+
  '<path d="M14 66 h74 v10 a4 4 0 0 1 -4 4 H18 a4 4 0 0 1 -4 -4 z" fill="#DB9E12"/>'+
  '<path d="M60 30 L88 44 L88 66 L70 66 Z" fill="#E0A614"/>'+
  '<g fill="#E4A50F"><circle cx="40" cy="56" r="6"/><circle cx="62" cy="52" r="5"/><circle cx="76" cy="60" r="4"/><circle cx="52" cy="44" r="4"/></g>';

I.butter =
  '<path d="M18 46 L46 30 h34 a4 4 0 0 1 4 4 v28 a4 4 0 0 1 -4 4 H22 a4 4 0 0 1 -4 -4 z" fill="#FBE9A8"/>'+
  '<path d="M18 46 h66 v16 a4 4 0 0 1 -4 4 H22 a4 4 0 0 1 -4 -4 z" fill="#F2D577"/>'+
  '<path d="M46 30 h34 a4 4 0 0 1 4 4 v12 H18 z" fill="#FDF3CE"/>'+
  '<path d="M30 66 h44 v10 a4 4 0 0 1 -4 4 H34 a4 4 0 0 1 -4 -4 z" fill="#D9BC5C" opacity=".5"/>';

I.yogurt =
  '<path d="M32 36 h36 l-4 46 a6 6 0 0 1 -6 5 H42 a6 6 0 0 1 -6 -5 z" fill="#F2F5F8"/>'+
  '<path d="M56 36 h12 l-4 46 a6 6 0 0 1 -6 5 h-8 z" fill="#DAE2EA"/>'+
  '<path d="M28 28 h44 a4 4 0 0 1 4 4 v4 a4 4 0 0 1 -4 4 H28 a4 4 0 0 1 -4 -4 v-4 a4 4 0 0 1 4 -4 z" fill="#E0446B"/>'+
  '<path d="M34 52 h32 l-2 22 H36 z" fill="#E0446B" opacity=".85"/>'+
  '<circle cx="50" cy="62" r="7" fill="#fff" opacity=".9"/>';

I.eggs =
  '<path d="M18 62 c0 -14 8 -28 18 -28 s18 14 18 28 c0 12 -8 20 -18 20 s-18 -8 -18 -20 z" fill="#F6EEE0"/>'+
  '<path d="M46 62 c0 -14 8 -28 18 -28 s18 14 18 28 c0 12 -8 20 -18 20 s-18 -8 -18 -20 z" fill="#EADFCB"/>'+
  '<path d="M64 34 c10 0 18 14 18 28 c0 12 -8 20 -18 20 c8 -4 12 -12 12 -22 c0 -12 -4 -22 -12 -26 z" fill="#D8C9B0"/>'+
  gloss(30,52,4,7,-20,.55)+gloss(58,52,4,7,-20,.4);

I.sourcream =
  '<path d="M30 42 h40 v38 a8 8 0 0 1 -8 8 H38 a8 8 0 0 1 -8 -8 z" fill="#F2F5F8"/>'+
  '<path d="M56 42 h14 v38 a8 8 0 0 1 -8 8 h-6 z" fill="#DAE2EA"/>'+
  '<path d="M26 34 h48 a3 3 0 0 1 3 3 v6 H23 v-6 a3 3 0 0 1 3 -3 z" fill="#3E8ED0"/>'+
  '<path d="M34 56 h32 v18 H34 z" fill="#3E8ED0" opacity=".8"/>'+
  '<path d="M40 65 h20" stroke="#fff" stroke-width="4" stroke-linecap="round"/>';

/* ================= ХЛЕБ / ВЫПЕЧКА ================= */
I.bread =
  '<path d="M18 56 c0 -16 14 -24 32 -24 s32 8 32 24 v18 a6 6 0 0 1 -6 6 H24 a6 6 0 0 1 -6 -6 z" fill="#D89B4E"/>'+
  '<path d="M58 34 c14 4 24 12 24 22 v18 a6 6 0 0 1 -6 6 H58 c6 -7 8 -16 8 -26 c0 -8 -3 -15 -8 -20 z" fill="#BC7F36" opacity=".55"/>'+
  '<path d="M24 56 c0 -10 10 -16 26 -16 s26 6 26 16 z" fill="#EFC489"/>'+
  '<g stroke="#B67B33" stroke-width="2.4" stroke-linecap="round" opacity=".7"><path d="M34 46 l6 -6"/><path d="M48 44 l6 -6"/><path d="M62 46 l6 -6"/></g>';

I.baguette =
  '<path d="M22 78 C16 70 26 40 44 26 C56 17 72 18 78 26 C84 34 78 56 62 70 C48 82 30 86 22 78 Z" fill="#DDA157"/>'+
  '<path d="M56 20 C70 18 82 24 82 34 C82 50 68 70 50 80 C40 85 30 84 24 80 C40 80 58 68 68 52 C76 39 72 26 56 20 Z" fill="#C0853F" opacity=".6"/>'+
  '<g stroke="#A96F2E" stroke-width="3" stroke-linecap="round" opacity=".65">'+
  '<path d="M36 58 l10 -8"/><path d="M46 48 l10 -8"/><path d="M56 38 l10 -8"/></g>';

I.croissant =
  '<path d="M18 66 c0 -20 16 -34 32 -34 s32 14 32 34 c0 4 -4 6 -8 4 l-8 -4 c-4 -2 -6 -8 -6 -14 0 -8 -4 -12 -10 -12 s-10 4 -10 12 c0 6 -2 12 -6 14 l-8 4 c-4 2 -8 0 -8 -4 z" fill="#E0A75B"/>'+
  '<path d="M50 32 c16 0 32 14 32 34 c0 4 -4 6 -8 4 l-8 -4 c-4 -2 -6 -8 -6 -14 0 -8 -4 -12 -10 -12 z" fill="#C68A3F" opacity=".55"/>'+
  '<g stroke="#B87C33" stroke-width="2.4" opacity=".6"><path d="M34 50 v14"/><path d="M50 44 v18"/><path d="M66 50 v14"/></g>';

I.cake =
  '<path d="M22 54 h56 v26 a6 6 0 0 1 -6 6 H28 a6 6 0 0 1 -6 -6 z" fill="#F3D6A8"/>'+
  '<path d="M60 54 h18 v26 a6 6 0 0 1 -6 6 H60 z" fill="#DDBB87" opacity=".7"/>'+
  '<path d="M22 54 c0 -10 12 -16 28 -16 s28 6 28 16 c-6 6 -12 2 -18 6 s-14 4 -20 0 s-12 2 -18 -6 z" fill="#E2547A"/>'+
  '<path d="M46 38 v-12" stroke="#F5C518" stroke-width="5" stroke-linecap="round"/>'+
  '<path d="M46 24 c0 -4 4 -4 4 -8 c2 4 4 4 4 8 c0 3 -2 5 -4 5 s-4 -2 -4 -5 z" fill="#F58220"/>';

I.cookies =
  '<circle cx="40" cy="46" r="20" fill="#D8A055"/>'+
  '<circle cx="62" cy="64" r="22" fill="#E4B068"/>'+
  '<g fill="#6B4224"><circle cx="34" cy="42" r="3"/><circle cx="46" cy="50" r="2.6"/><circle cx="40" cy="34" r="2.4"/>'+
  '<circle cx="56" cy="58" r="3.2"/><circle cx="70" cy="60" r="3"/><circle cx="62" cy="72" r="3"/><circle cx="52" cy="70" r="2.4"/><circle cx="72" cy="50" r="2.6"/></g>';

/* ================= МЯСО / РЫБА ================= */
I.chicken =
  /* куриная ножка: мясо сверху справа, кость с двумя головками снизу слева */
  '<path d="M22 66 l24 -24" stroke="#F2EDE0" stroke-width="13" stroke-linecap="round"/>'+
  '<circle cx="20" cy="62" r="9" fill="#F2EDE0"/><circle cx="27" cy="73" r="9" fill="#F2EDE0"/>'+
  '<circle cx="20" cy="62" r="9" fill="#D9D2C2" opacity=".35"/>'+
  '<path d="M56 20 c16 0 26 12 26 26 c0 16 -12 28 -26 28 c-10 0 -16 -4 -20 -10 c-4 -6 -8 -8 -8 -14 c0 -18 12 -30 28 -30 z" fill="#E2A268"/>'+
  '<path d="M56 20 c16 0 26 12 26 26 c0 16 -12 28 -26 28 c10 -6 16 -16 16 -28 c0 -12 -6 -22 -16 -26 z" fill="#C4834B" opacity=".6"/>'+
  '<path d="M40 56 c4 6 10 10 18 10" stroke="#C4834B" stroke-width="2.4" fill="none" opacity=".6"/>'+
  gloss(48,36,6,10,-30,.34);

I.sausage =
  '<path d="M26 74 C16 62 22 40 40 30 C54 22 72 24 78 34 C84 44 78 62 62 72 C48 81 34 82 26 74 Z" fill="#C4523F"/>'+
  '<path d="M56 24 C70 24 82 32 80 44 C78 58 64 72 48 78 C38 82 30 80 26 76 C42 76 60 64 68 50 C74 39 70 28 56 24 Z" fill="#A33D2E" opacity=".6"/>'+
  '<g stroke="#8C3325" stroke-width="2.6" stroke-linecap="round" opacity=".55">'+
  '<path d="M38 58 l8 -8"/><path d="M50 50 l8 -8"/><path d="M62 42 l6 -6"/></g>'+
  gloss(38,44,4,11,40,.22);

I.meat =
  '<path d="M22 56 c0 -18 14 -30 32 -30 c16 0 26 10 26 24 c0 18 -14 32 -30 32 c-16 0 -28 -12 -28 -26 z" fill="#D4544F"/>'+
  '<path d="M54 26 c16 0 26 10 26 24 c0 18 -14 32 -30 32 c14 -6 22 -18 22 -32 c0 -10 -6 -20 -18 -24 z" fill="#B23F3C" opacity=".55"/>'+
  '<path d="M30 40 c8 -8 22 -10 32 -4 c-10 0 -22 4 -32 4 z" fill="#F0EAE0" opacity=".8"/>'+
  '<path d="M40 62 c8 -4 16 -4 22 0" stroke="#F0EAE0" stroke-width="4" fill="none" stroke-linecap="round" opacity=".7"/>';

I.fish =
  '<path d="M14 56 C24 38 44 30 60 32 c14 2 22 12 24 24 c-2 12 -10 22 -24 24 C44 82 24 74 14 56 Z" fill="#5FA9D8"/>'+
  '<path d="M60 32 c14 2 22 12 24 24 c-2 12 -10 22 -24 24 c10 -8 14 -16 14 -24 c0 -8 -4 -16 -14 -24 z" fill="#4189B8" opacity=".6"/>'+
  '<path d="M84 56 l14 -14 v28 z" fill="#4189B8"/>'+
  '<circle cx="70" cy="48" r="4" fill="#fff"/><circle cx="70" cy="48" r="2" fill="#22303C"/>'+
  '<path d="M32 46 c8 6 8 14 0 20" stroke="#4189B8" stroke-width="3" fill="none" stroke-linecap="round"/>'+
  '<path d="M46 40 c10 8 10 24 0 32" stroke="#4189B8" stroke-width="3" fill="none" stroke-linecap="round" opacity=".6"/>';

I.bacon =
  '<path d="M18 40 c14 -8 26 4 40 -4 c12 -7 22 0 26 6 l-4 12 c-6 -6 -14 -10 -24 -4 c-14 8 -26 -2 -38 4 z" fill="#D6685C"/>'+
  '<path d="M18 58 c14 -8 26 4 40 -4 c12 -7 22 0 26 6 l-4 12 c-6 -6 -14 -10 -24 -4 c-14 8 -26 -2 -38 4 z" fill="#D6685C"/>'+
  '<path d="M18 46 c14 -8 26 4 40 -4 c10 -6 18 -2 23 3 l-2 6 c-6 -4 -13 -6 -21 -1 c-14 8 -26 -2 -40 4 z" fill="#F3E3DA"/>'+
  '<path d="M18 64 c14 -8 26 4 40 -4 c10 -6 18 -2 23 3 l-2 6 c-6 -4 -13 -6 -21 -1 c-14 8 -26 -2 -40 4 z" fill="#F3E3DA"/>';

/* ================= БАКАЛЕЯ ================= */
function pack(fill,dark,label){
  return '<path d="M28 26 h44 a4 4 0 0 1 4 4 v52 a4 4 0 0 1 -4 4 H28 a4 4 0 0 1 -4 -4 V30 a4 4 0 0 1 4 -4 z" fill="'+fill+'"/>'+
         '<path d="M58 26 h14 a4 4 0 0 1 4 4 v52 a4 4 0 0 1 -4 4 H58 z" fill="'+dark+'"/>'+
         '<path d="M24 18 h52 l-4 8 H28 z" fill="'+dark+'"/>'+
         (label||'');
}
I.rice   = pack('#EFEAE0','#D6CFC0','<rect x="32" y="44" width="30" height="24" rx="4" fill="#fff" opacity=".85"/><g fill="#C9BFA9"><ellipse cx="40" cy="52" rx="3" ry="1.8" transform="rotate(-25 40 52)"/><ellipse cx="50" cy="58" rx="3" ry="1.8" transform="rotate(15 50 58)"/><ellipse cx="44" cy="62" rx="3" ry="1.8" transform="rotate(-10 44 62)"/><ellipse cx="55" cy="49" rx="3" ry="1.8" transform="rotate(30 55 49)"/></g>');
I.flour  = pack('#F1EDE4','#D8D2C4','<rect x="32" y="46" width="30" height="20" rx="3" fill="#C9905A" opacity=".85"/><path d="M38 56 h18" stroke="#fff" stroke-width="3" stroke-linecap="round"/>');
I.sugar  = pack('#E8F1F8','#CBD9E6','<rect x="33" y="46" width="14" height="14" rx="2" fill="#fff"/><rect x="49" y="52" width="14" height="14" rx="2" fill="#fff" opacity=".9"/>');
I.salt   = '<path d="M34 34 h32 a4 4 0 0 1 4 4 v44 a6 6 0 0 1 -6 6 H36 a6 6 0 0 1 -6 -6 V38 a4 4 0 0 1 4 -4 z" fill="#E8EEF4"/>'+
           '<path d="M56 34 h10 a4 4 0 0 1 4 4 v44 a6 6 0 0 1 -6 6 H56 z" fill="#CEDAE4"/>'+
           '<path d="M38 20 h24 a4 4 0 0 1 4 4 v10 H34 V24 a4 4 0 0 1 4 -4 z" fill="#9FB3C4"/>'+
           '<g fill="#fff"><circle cx="44" cy="26" r="2"/><circle cx="50" cy="26" r="2"/><circle cx="56" cy="26" r="2"/></g>'+
           '<rect x="36" y="50" width="28" height="18" rx="3" fill="#fff" opacity=".85"/>';
I.pasta  = '<path d="M30 26 h40 v50 a10 10 0 0 1 -10 10 H40 a10 10 0 0 1 -10 -10 z" fill="#F0D68C" opacity=".55"/>'+
           '<g stroke="#E9B942" stroke-width="4" stroke-linecap="round"><path d="M38 22 v58"/><path d="M46 20 v62"/><path d="M54 20 v62"/><path d="M62 22 v58"/></g>'+
           '<path d="M28 60 h44 v14 a10 10 0 0 1 -10 10 H38 a10 10 0 0 1 -10 -10 z" fill="#3F8F5C"/>'+
           '<path d="M28 60 h44 v6 H28 z" fill="#347A4D"/>';
I.oil    = '<path d="M40 30 h20 c0 8 12 14 12 26 v26 a6 6 0 0 1 -6 6 H34 a6 6 0 0 1 -6 -6 V56 c0 -12 12 -18 12 -26 z" fill="#F0C33C"/>'+
           '<path d="M56 30 h4 c0 8 12 14 12 26 v26 a6 6 0 0 1 -6 6 H54 z" fill="#D6A81F" opacity=".7"/>'+
           '<path d="M42 16 h16 v14 H42 z" fill="#4C9A38"/>'+
           '<rect x="34" y="56" width="32" height="20" rx="3" fill="#fff" opacity=".85"/>'+
           '<path d="M44 66 h12" stroke="#4C9A38" stroke-width="4" stroke-linecap="round"/>';
I.coffee = pack('#6B4226','#4E2F1B','<rect x="32" y="44" width="30" height="24" rx="4" fill="#F0E4D6" opacity=".92"/><path d="M40 62 c0 -8 4 -12 8 -12 s8 4 8 12 z" fill="#6B4226"/><ellipse cx="48" cy="50" rx="8" ry="3" fill="#8A5A34"/>');
I.tea    = pack('#2E7D4F','#1F5C39','<rect x="32" y="44" width="30" height="24" rx="4" fill="#EAF4EC" opacity=".92"/><path d="M40 60 c0 -8 6 -12 10 -14 c-2 6 -2 12 -10 14 z" fill="#2E7D4F"/><path d="M50 46 c2 6 0 12 -6 14" stroke="#2E7D4F" stroke-width="2" fill="none"/>');
I.chocolate =
  '<path d="M22 32 h56 a4 4 0 0 1 4 4 v34 a4 4 0 0 1 -4 4 H22 a4 4 0 0 1 -4 -4 V36 a4 4 0 0 1 4 -4 z" fill="#5A3620"/>'+
  '<g stroke="#3F2415" stroke-width="2.6"><path d="M40 32 v42"/><path d="M60 32 v42"/><path d="M18 53 h64"/></g>'+
  '<path d="M22 32 h56 a4 4 0 0 1 4 4 v6 H18 v-6 a4 4 0 0 1 4 -4 z" fill="#7A4C2E" opacity=".8"/>'+
  '<path d="M62 26 h20 a4 4 0 0 1 4 4 v40 a4 4 0 0 1 -4 4 h-6 V36 a4 4 0 0 0 -4 -4 h-14 z" fill="#C63B4A"/>';
I.honey =
  '<path d="M34 40 h32 v38 a8 8 0 0 1 -8 8 H42 a8 8 0 0 1 -8 -8 z" fill="#F2A81C"/>'+
  '<path d="M56 40 h10 v38 a8 8 0 0 1 -8 8 h-6 z" fill="#D08D10" opacity=".7"/>'+
  '<path d="M40 40 c0 -8 -4 -10 -4 -14 h28 c0 4 -4 6 -4 14 z" fill="#F2A81C"/>'+
  '<path d="M32 22 h36 a4 4 0 0 1 4 4 v4 H28 v-4 a4 4 0 0 1 4 -4 z" fill="#8A5A20"/>'+
  '<g fill="#fff" opacity=".85"><path d="M44 56 l4 -6 l4 6 l-4 6 z"/><path d="M54 62 l4 -6 l4 6 l-4 6 z"/><path d="M38 66 l4 -6 l4 6 l-4 6 z"/></g>';
I.jam =
  '<path d="M32 40 h36 v40 a8 8 0 0 1 -8 8 H40 a8 8 0 0 1 -8 -8 z" fill="#C6304C"/>'+
  '<path d="M58 40 h10 v40 a8 8 0 0 1 -8 8 h-6 z" fill="#A32540" opacity=".7"/>'+
  '<path d="M28 26 h44 a4 4 0 0 1 4 4 v6 a4 4 0 0 1 -4 4 H28 a4 4 0 0 1 -4 -4 v-6 a4 4 0 0 1 4 -4 z" fill="#8A5A20"/>'+
  '<rect x="36" y="54" width="28" height="18" rx="3" fill="#F6EFE2"/>'+
  '<circle cx="45" cy="63" r="4" fill="#C6304C"/><circle cx="55" cy="63" r="4" fill="#C6304C"/>';
I.cereal = pack('#E8892B','#C46F1C','<rect x="32" y="44" width="30" height="26" rx="4" fill="#FFF3E2"/><g fill="#C98A3A"><circle cx="40" cy="52" r="4"/><circle cx="52" cy="50" r="4"/><circle cx="46" cy="60" r="4"/><circle cx="57" cy="60" r="4"/><circle cx="38" cy="64" r="4"/></g>');
I.nuts =
  '<g fill="#B98449"><ellipse cx="36" cy="46" rx="12" ry="14" transform="rotate(-20 36 46)"/>'+
  '<ellipse cx="62" cy="42" rx="11" ry="13" transform="rotate(15 62 42)"/>'+
  '<ellipse cx="48" cy="68" rx="13" ry="15" transform="rotate(5 48 68)"/>'+
  '<ellipse cx="70" cy="66" rx="10" ry="12" transform="rotate(-15 70 66)"/></g>'+
  '<g stroke="#8E6132" stroke-width="1.8" fill="none" opacity=".7">'+
  '<path d="M36 34 v24"/><path d="M62 30 v24"/><path d="M48 54 v28"/><path d="M70 55 v22"/></g>';

/* ================= НАПИТКИ ================= */
I.water =
  '<path d="M38 30 h24 v6 c0 4 8 8 8 18 v30 a6 6 0 0 1 -6 6 H36 a6 6 0 0 1 -6 -6 V54 c0 -10 8 -14 8 -18 z" fill="#BEE3F5" opacity=".9"/>'+
  '<path d="M56 30 h6 v6 c0 4 8 8 8 18 v30 a6 6 0 0 1 -6 6 h-8 z" fill="#8FC9E6" opacity=".8"/>'+
  '<path d="M40 16 h20 a3 3 0 0 1 3 3 v11 H37 V19 a3 3 0 0 1 3 -3 z" fill="#2E7BC4"/>'+
  '<rect x="32" y="56" width="36" height="18" rx="3" fill="#2E7BC4" opacity=".85"/>'+
  '<path d="M50 60 c4 5 6 8 6 10 a6 6 0 0 1 -12 0 c0 -2 2 -5 6 -10 z" fill="#fff"/>';
I.juice =
  '<path d="M32 30 h36 v50 a8 8 0 0 1 -8 8 H40 a8 8 0 0 1 -8 -8 z" fill="#F58220"/>'+
  '<path d="M58 30 h10 v50 a8 8 0 0 1 -8 8 h-6 z" fill="#D66A11" opacity=".7"/>'+
  '<path d="M32 22 h36 l-4 8 H36 z" fill="#D66A11"/>'+
  '<path d="M62 20 l14 -12" stroke="#F0EAE0" stroke-width="5" stroke-linecap="round"/>'+
  '<circle cx="50" cy="58" r="12" fill="#FFF0D8"/>'+
  '<circle cx="50" cy="58" r="9" fill="#F5A623"/>'+
  '<path d="M50 49 v18 M41 58 h18 M44 52 l12 12 M56 52 l-12 12" stroke="#FFF0D8" stroke-width="1.6"/>';
I.soda =
  '<path d="M34 26 h32 v52 a10 10 0 0 1 -10 10 H44 a10 10 0 0 1 -10 -10 z" fill="#D9463C"/>'+
  '<path d="M56 26 h10 v52 a10 10 0 0 1 -10 10 h-6 z" fill="#B3322A" opacity=".7"/>'+
  '<path d="M34 26 h32 v-4 a4 4 0 0 0 -4 -4 H38 a4 4 0 0 0 -4 4 z" fill="#B8BEC6"/>'+
  '<path d="M30 46 c14 8 26 -8 40 0 v10 c-14 -8 -26 8 -40 0 z" fill="#F0EAE0" opacity=".9"/>'+
  gloss(40,60,4,14,0,.22);
I.beer =
  '<path d="M30 34 h34 v46 a8 8 0 0 1 -8 8 H38 a8 8 0 0 1 -8 -8 z" fill="#F0A81C" opacity=".92"/>'+
  '<path d="M52 34 h12 v46 a8 8 0 0 1 -8 8 h-4 z" fill="#D08D10" opacity=".6"/>'+
  '<path d="M64 44 h8 a8 8 0 0 1 8 8 v8 a8 8 0 0 1 -8 8 h-8 z" fill="none" stroke="#D08D10" stroke-width="6"/>'+
  '<path d="M28 34 c0 -8 8 -12 14 -8 c4 -6 14 -6 18 0 c6 -3 12 1 12 8 z" fill="#FFF6E2"/>'+
  gloss(38,56,4,14,0,.24);
I.wine =
  '<path d="M36 18 h28 v22 c0 12 -6 18 -6 26 v22 h-16 V66 c0 -8 -6 -14 -6 -26 z" fill="#7A2038"/>'+
  '<path d="M54 18 h10 v22 c0 12 -6 18 -6 26 v22 h-6 z" fill="#5C1729" opacity=".7"/>'+
  '<path d="M34 44 h32 v34 h-32 z" fill="#B0332F"/>'+
  '<rect x="38" y="52" width="24" height="18" rx="2" fill="#F0E2C8"/>'+
  '<path d="M38 10 h24 v10 h-24 z" fill="#3D2A1E"/>';

/* ================= ХОЗТОВАРЫ ================= */
I.toiletpaper =
  '<path d="M26 32 h40 a16 24 0 0 1 0 48 H26 a16 24 0 0 1 0 -48 z" fill="#E6EBF1"/>'+
  '<ellipse cx="66" cy="56" rx="16" ry="24" fill="#CFD9E3"/>'+
  '<ellipse cx="66" cy="56" rx="7" ry="10.5" fill="#8FA0B0"/>'+
  '<ellipse cx="66" cy="56" rx="3" ry="4.5" fill="#6E8091"/>'+
  '<path d="M26 80 c-10 0 -14 -10 -9 -18 l-7 -3 c-6 12 -1 25 12 25 z" fill="#F4F7FA"/>'+
  '<path d="M10 62 l7 3" stroke="#CFD9E3" stroke-width="2"/>'+
  '<ellipse cx="26" cy="56" rx="16" ry="24" fill="#F7FAFC"/>'+
  '<path d="M26 36 a16 20 0 0 1 0 40" stroke="#DCE4EC" stroke-width="2" fill="none"/>';
I.soap =
  '<path d="M40 40 h20 v40 a8 8 0 0 1 -8 8 H48 a8 8 0 0 1 -8 -8 z" fill="#7EC8E3"/>'+
  '<path d="M54 40 h6 v40 a8 8 0 0 1 -8 8 h-4 z" fill="#5AA8C6" opacity=".7"/>'+
  '<path d="M40 40 h20 v-6 h-20 z" fill="#4E90B4"/>'+
  '<path d="M44 34 v-8 h-8 a6 6 0 0 1 0 -12 h14 a6 6 0 0 1 6 6 v14 z" fill="#4E90B4"/>'+
  '<rect x="42" y="56" width="16" height="16" rx="3" fill="#fff" opacity=".85"/>';
I.shampoo =
  '<path d="M34 36 h32 v44 a8 8 0 0 1 -8 8 H42 a8 8 0 0 1 -8 -8 z" fill="#9A6BC4"/>'+
  '<path d="M56 36 h10 v44 a8 8 0 0 1 -8 8 h-6 z" fill="#7B4FA6" opacity=".7"/>'+
  '<path d="M42 36 v-8 h16 v8 z" fill="#7B4FA6"/>'+
  '<path d="M40 28 h20 a4 4 0 0 0 0 -12 H40 a4 4 0 0 0 0 12 z" fill="#6A4090"/>'+
  '<rect x="38" y="52" width="24" height="20" rx="3" fill="#fff" opacity=".85"/>';
I.toothpaste =
  /* тюбик лежит горизонтально: слева сплющенный шов, справа крышка */
  '<path d="M18 46 h8 v28 h-8 z" fill="#C7D2DC"/>'+
  '<path d="M26 44 c14 -4 34 -6 44 -6 v44 c-10 0 -30 -2 -44 -6 z" fill="#F4F7FA"/>'+
  '<path d="M48 40 c10 -1 18 -2 22 -2 v44 c-4 0 -12 -1 -22 -2 z" fill="#DDE5ED"/>'+
  '<path d="M32 52 c12 -3 24 -4 32 -4 v10 c-8 0 -20 1 -32 4 z" fill="#3FA46A"/>'+
  '<path d="M32 66 c12 -3 24 -4 32 -4 v6 c-8 0 -20 1 -32 4 z" fill="#2E7BC4"/>'+
  '<path d="M70 36 h8 a4 4 0 0 1 4 4 v40 a4 4 0 0 1 -4 4 h-8 z" fill="#2E7BC4"/>'+
  '<path d="M82 48 h6 a3 3 0 0 1 3 3 v18 a3 3 0 0 1 -3 3 h-6 z" fill="#1F5C99"/>'+
  '<g stroke="#B7C4D0" stroke-width="1.6"><path d="M20 50 h4"/><path d="M20 60 h4"/><path d="M20 70 h4"/></g>';
I.detergent =
  '<path d="M30 40 h40 v42 a6 6 0 0 1 -6 6 H36 a6 6 0 0 1 -6 -6 z" fill="#2E7BC4"/>'+
  '<path d="M58 40 h12 v42 a6 6 0 0 1 -6 6 h-6 z" fill="#1F5C99" opacity=".8"/>'+
  '<path d="M30 40 c0 -10 6 -12 6 -18 h28 c0 6 6 8 6 18 z" fill="#2E7BC4"/>'+
  '<path d="M36 22 h28 a4 4 0 0 0 0 -10 H36 a4 4 0 0 0 0 10 z" fill="#1F5C99"/>'+
  '<rect x="36" y="56" width="28" height="20" rx="3" fill="#fff" opacity=".9"/>'+
  '<path d="M44 66 c0 -5 6 -9 6 -9 s6 4 6 9 a6 6 0 0 1 -12 0 z" fill="#2E7BC4"/>';
I.sponge =
  '<path d="M18 48 h64 a4 4 0 0 1 4 4 v10 H14 V52 a4 4 0 0 1 4 -4 z" fill="#F2C230"/>'+
  '<path d="M14 62 h72 v14 a4 4 0 0 1 -4 4 H18 a4 4 0 0 1 -4 -4 z" fill="#3FA46A"/>'+
  '<g fill="#DCA818"><circle cx="28" cy="55" r="3"/><circle cx="44" cy="53" r="2.4"/><circle cx="60" cy="56" r="3"/><circle cx="74" cy="54" r="2.4"/></g>'+
  '<g fill="#2E8853" opacity=".7"><circle cx="34" cy="70" r="2.4"/><circle cx="52" cy="72" r="2.4"/><circle cx="68" cy="69" r="2.4"/></g>';
I.trashbag =
  '<path d="M30 40 c-4 22 -2 36 4 46 h32 c6 -10 8 -24 4 -46 z" fill="#3D4650"/>'+
  '<path d="M56 40 c4 22 4 36 0 46 h10 c6 -10 8 -24 4 -46 z" fill="#2B333B" opacity=".8"/>'+
  '<path d="M30 40 c-2 -6 4 -10 8 -6 c2 -6 10 -8 14 -4 c4 -6 14 -4 14 4 c6 -2 8 4 4 6 z" fill="#556170"/>'+
  '<path d="M40 56 h20 M42 68 h16" stroke="#556170" stroke-width="3" stroke-linecap="round" opacity=".6"/>';
I.papertowel =
  '<path d="M28 26 h34 a12 8 0 0 1 0 60 H28 a12 30 0 0 1 0 -60 z" fill="#F4F7FA"/>'+
  '<ellipse cx="62" cy="56" rx="12" ry="30" fill="#E0E7EE"/>'+
  '<ellipse cx="62" cy="56" rx="5" ry="12" fill="#B7C4D0"/>'+
  '<g stroke="#D3DCE4" stroke-width="2"><path d="M40 28 v56"/><path d="M50 27 v58"/></g>'+
  '<ellipse cx="28" cy="56" rx="12" ry="30" fill="#fff" opacity=".5"/>';

/* ================= ПРОЧЕЕ ================= */
I.diapers =
  '<path d="M22 34 h56 c-6 12 -8 22 -8 30 c0 10 -8 18 -20 18 s-20 -8 -20 -18 c0 -8 -2 -18 -8 -30 z" fill="#F2F5F8"/>'+
  '<path d="M56 34 h22 c-6 12 -8 22 -8 30 c0 10 -8 18 -20 18 c8 -4 12 -10 12 -18 c0 -8 -2 -18 -6 -30 z" fill="#DCE4EC"/>'+
  '<path d="M34 46 h32 v10 H34 z" fill="#7EC8E3"/>'+
  '<g fill="#F5A6C0"><circle cx="42" cy="66" r="3"/><circle cx="58" cy="66" r="3"/><circle cx="50" cy="72" r="3"/></g>';
I.petfood = pack('#8A5A34','#6B4226','<circle cx="47" cy="54" r="14" fill="#F0E2CE"/><g fill="#8A5A34"><ellipse cx="42" cy="50" rx="3" ry="4"/><ellipse cx="52" cy="50" rx="3" ry="4"/><ellipse cx="47" cy="60" rx="6" ry="5"/></g>');
I.battery =
  '<path d="M32 24 h36 a4 4 0 0 1 4 4 v54 a4 4 0 0 1 -4 4 H32 a4 4 0 0 1 -4 -4 V28 a4 4 0 0 1 4 -4 z" fill="#3D4650"/>'+
  '<path d="M58 24 h10 a4 4 0 0 1 4 4 v54 a4 4 0 0 1 -4 4 h-10 z" fill="#2B333B"/>'+
  '<path d="M42 18 h16 v6 H42 z" fill="#B8BEC6"/>'+
  '<path d="M32 48 h36 v14 H32 z" fill="#F2C230"/>'+
  '<path d="M52 40 l-10 16 h7 l-3 12 l11 -17 h-7 z" fill="#F2C230"/>';
I.bulb =
  '<path d="M50 16 c-13 0 -22 10 -22 22 c0 9 5 14 8 19 c2 3 3 6 3 9 h22 c0 -3 1 -6 3 -9 c3 -5 8 -10 8 -19 c0 -12 -9 -22 -22 -22 z" fill="#F5D547"/>'+
  '<path d="M50 16 c13 0 22 10 22 22 c0 9 -5 14 -8 19 c-2 3 -3 6 -3 9 h-8 c0 -4 2 -8 5 -12 c4 -5 8 -10 8 -18 c0 -10 -6 -17 -16 -20 z" fill="#DCB92C" opacity=".6"/>'+
  '<path d="M39 66 h22 v6 H39 z M40 74 h20 v5 H40 z" fill="#9AA4AE"/>'+
  '<path d="M42 81 h16 c0 5 -4 8 -8 8 s-8 -3 -8 -8 z" fill="#7C868F"/>'+
  gloss(41,34,5,9,-25,.5);
I.medicine =
  '<path d="M28 40 h44 a6 6 0 0 1 6 6 v32 a8 8 0 0 1 -8 8 H30 a8 8 0 0 1 -8 -8 V46 a6 6 0 0 1 6 -6 z" fill="#F2F5F8"/>'+
  '<path d="M60 40 h12 a6 6 0 0 1 6 6 v32 a8 8 0 0 1 -8 8 H60 z" fill="#DCE4EC"/>'+
  '<path d="M26 28 h48 a4 4 0 0 1 4 4 v8 H22 v-8 a4 4 0 0 1 4 -4 z" fill="#B7C4D0"/>'+
  '<path d="M44 52 h12 v10 h10 v12 h-10 v10 h-12 v-10 h-10 v-12 h10 z" fill="#D93E4E"/>';

/* ================= КАТЕГОРИИ (запасные) ================= */
I.cat_fruit = '<circle cx="50" cy="56" r="26" fill="#E0574F"/>'+leaf(52,30)+gloss(40,46,6,10,-25,.3);
I.cat_veg   = '<path d="M50 84 C36 76 26 60 30 44 C34 30 50 26 62 34 C74 42 74 64 62 76 C58 80 54 82 50 84 Z" fill="#4C9A38"/>'+gloss(42,50,5,11,-20,.26);
I.cat_dairy = '<path d="M36 28 h28 l6 12 v42 a6 6 0 0 1 -6 6 H36 a6 6 0 0 1 -6 -6 V40 Z" fill="#DEE8F0"/><path d="M30 54 h40 v18 H30 z" fill="#2E7BC4"/>';
I.cat_bakery= '<path d="M20 58 c0 -14 14 -22 30 -22 s30 8 30 22 v16 a6 6 0 0 1 -6 6 H26 a6 6 0 0 1 -6 -6 z" fill="#D89B4E"/><path d="M26 56 c0 -9 10 -14 24 -14 s24 5 24 14 z" fill="#EFC489"/>';
I.cat_meat  = '<path d="M24 56 c0 -18 14 -28 30 -28 c14 0 24 10 24 22 c0 18 -14 30 -28 30 c-15 0 -26 -10 -26 -24 z" fill="#D4544F"/><path d="M34 44 c8 -7 20 -8 28 -3 c-10 0 -20 3 -28 3 z" fill="#F0EAE0" opacity=".8"/>';
I.cat_grocery = pack('#C9A24A','#A9853A','<rect x="33" y="46" width="28" height="20" rx="3" fill="#fff" opacity=".8"/>');
I.cat_drinks= '<path d="M34 26 h32 v52 a10 10 0 0 1 -10 10 H44 a10 10 0 0 1 -10 -10 z" fill="#2E7BC4"/><path d="M30 46 c14 8 26 -8 40 0 v10 c-14 -8 -26 8 -40 0 z" fill="#F0EAE0" opacity=".9"/>';
I.cat_house = '<path d="M30 40 h40 v42 a6 6 0 0 1 -6 6 H36 a6 6 0 0 1 -6 -6 z" fill="#3FA46A"/><path d="M30 40 c0 -10 6 -12 6 -18 h28 c0 6 6 8 6 18 z" fill="#3FA46A"/><path d="M36 22 h28 a4 4 0 0 0 0 -10 H36 a4 4 0 0 0 0 10 z" fill="#2E8853"/><rect x="36" y="56" width="28" height="18" rx="3" fill="#fff" opacity=".9"/>';
I.cat_other = '<path d="M26 36 h48 l-4 46 a8 8 0 0 1 -8 7 H38 a8 8 0 0 1 -8 -7 z" fill="#9AA4AE"/><path d="M22 28 h56 a4 4 0 0 1 4 4 v4 H18 v-4 a4 4 0 0 1 4 -4 z" fill="#7C868F"/><path d="M38 26 c0 -8 4 -12 12 -12 s12 4 12 12" stroke="#7C868F" stroke-width="5" fill="none"/>';

/* Пустая корзина — для экрана «список пуст» */
I.basket =
  '<path d="M30 34 C30 22 38 14 50 14 C62 14 70 22 70 34" stroke="#B9C0B2" stroke-width="6" fill="none" stroke-linecap="round"/>'+
  '<path d="M14 36 h72 l-8 44 a10 10 0 0 1 -10 8 H32 a10 10 0 0 1 -10 -8 z" fill="#D8DDD2"/>'+
  '<path d="M56 36 h30 l-8 44 a10 10 0 0 1 -10 8 H50 c6 -2 8 -6 9 -12 z" fill="#C2C9BA"/>'+
  '<g stroke="#B0B8A8" stroke-width="3" stroke-linecap="round"><path d="M36 48 l3 28"/><path d="M50 48 v28"/><path d="M64 48 l-3 28"/></g>';

/* --------------------------------------------------------------------------
   ОБЪЁМ.
   Рисунки нарочно собраны из плоских заливок — так они лёгкие и правятся руками.
   Объём наводится сверху одним фильтром на любую форму, а не дорисовывается
   в каждой иконке отдельно:

   1. блик — размываем силуэт и светим в него точечным источником сверху слева,
      подсветка ложится по краю формы, какой бы она ни была;
   2. подложка — мягкая тень под предметом, чтобы он «лежал» на плитке, а не был
      наклеен на неё.

   Фильтр объявляется в документе ОДИН раз (nbDefsSvg), иконки только ссылаются
   на него — иначе в списке из двадцати плиток было бы двадцать копий.
   -------------------------------------------------------------------------- */
var DEFS =
  '<svg width="0" height="0" style="position:absolute" aria-hidden="true">'+
  '<filter id="nb3d" x="-25%" y="-25%" width="150%" height="155%" color-interpolation-filters="sRGB">'+
    '<feGaussianBlur in="SourceAlpha" stdDeviation="3.2" result="b"/>'+
    '<feSpecularLighting in="b" surfaceScale="3.1" specularConstant="0.52" specularExponent="26"'+
      ' lighting-color="#ffffff" result="sp"><fePointLight x="26" y="14" z="58"/></feSpecularLighting>'+
    '<feComposite in="sp" in2="SourceAlpha" operator="in" result="spc"/>'+
    '<feComposite in="SourceGraphic" in2="spc" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="lit"/>'+
    '<feDropShadow in="lit" dx="0" dy="4" stdDeviation="3.2" flood-color="#20261A" flood-opacity="0.32"/>'+
  '</filter>'+
  '</svg>';

/* Публичный API */
g.NB_ICONS = I;
g.nbDefsSvg = function(){ return DEFS; };
/* flat=true — без объёма (мелкие места, где фильтр только мылит) */
g.nbIconSvg = function(key, size, flat){
  var body = I[key] || I.cat_other;
  var s = size || 64;
  /* viewBox шире рисунка: тень и блик выходят за пределы 100×100 и иначе обрежутся */
  return '<svg viewBox="-9 -8 118 124" width="'+s+'" height="'+s+'" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'+
    (flat ? body : '<g filter="url(#nb3d)">'+body+'</g>')+
  '</svg>';
};
g.nbHasIcon = function(key){ return !!I[key]; };

})(window);

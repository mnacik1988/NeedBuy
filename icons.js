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
  /* длинный и чуть изогнутый — прежний толстый овал читался как авокадо */
  '<path d="M20 76 C34 66 56 46 80 30" stroke="#3B8A32" stroke-width="22" fill="none" stroke-linecap="round"/>'+
  '<path d="M24 80 C38 70 60 52 84 35" stroke="#2C6E25" stroke-width="8" fill="none" stroke-linecap="round" opacity=".5"/>'+
  '<path d="M17 72 C31 62 53 42 77 26" stroke="#6CB55A" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>'+
  '<g fill="#2C6E25" opacity=".55"><circle cx="31" cy="71" r="1.8"/><circle cx="41" cy="63" r="1.8"/><circle cx="51" cy="55" r="1.8"/><circle cx="61" cy="47" r="1.8"/><circle cx="71" cy="39" r="1.8"/><circle cx="36" cy="74" r="1.5"/><circle cx="56" cy="58" r="1.5"/><circle cx="66" cy="50" r="1.5"/></g>'+
  '<circle cx="86" cy="25" r="4" fill="#E9D96A"/>';

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
  /* длинный и тонкий, с надрезами — прежний толстый овал читался как картошка */
  '<path d="M18 80 C36 64 60 44 82 26" stroke="#D69444" stroke-width="20" fill="none" stroke-linecap="round"/>'+
  '<path d="M22 84 C40 68 64 48 86 30" stroke="#B5762E" stroke-width="7" fill="none" stroke-linecap="round" opacity=".55"/>'+
  '<path d="M15 75 C33 59 57 39 79 21" stroke="#EDB872" stroke-width="5" fill="none" stroke-linecap="round" opacity=".85"/>'+
  '<g stroke="#F7E0B6" stroke-width="3.4" stroke-linecap="round">'+
  '<path d="M28.5 66.5 h11"/><path d="M39.4 57.3 h11"/><path d="M49.6 48.7 h11"/><path d="M60.5 39.5 h11"/></g>';

I.croissant =
  /* полумесяц из долек — прежний читался как пара рогов */
  '<ellipse cx="19" cy="68" rx="8" ry="11" fill="#C9822F" transform="rotate(-52 19 68)"/>'+
  '<ellipse cx="81" cy="68" rx="8" ry="11" fill="#C9822F" transform="rotate(52 81 68)"/>'+
  '<ellipse cx="32" cy="59" rx="12" ry="17" fill="#DE9C46" transform="rotate(-32 32 59)"/>'+
  '<ellipse cx="68" cy="59" rx="12" ry="17" fill="#DE9C46" transform="rotate(32 68 59)"/>'+
  '<ellipse cx="50" cy="54" rx="15" ry="20" fill="#EDB562"/>'+
  '<path d="M39 42 C45 50 45 60 39 68" stroke="#C47F34" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>'+
  '<path d="M61 42 C55 50 55 60 61 68" stroke="#C47F34" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>'+
  gloss(46,44,4,9,-15,.4);

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
  /* куриная ножка: мясо сверху справа, кость с двумя головками снизу слева.
     Головки стоят по бокам КОНЦА кости, поперёк её направления — иначе
     читается как непонятные шарики */
  '<path d="M43 66 L26 83" stroke="#F3EBDD" stroke-width="10" stroke-linecap="round"/>'+
  '<circle cx="20" cy="80" r="7" fill="#F3EBDD"/><circle cx="27.5" cy="87.5" r="7" fill="#F3EBDD"/>'+
  '<circle cx="20" cy="80" r="7" fill="#D9CDB6" opacity=".35"/>'+
  '<path d="M60 16 C76 16 88 29 85 45 C82 59 69 66 57 68 C51 69 47 71 44 74 L35 65 C38 62 40 58 40 52 C38 32 46 16 60 16 Z" fill="#D9934F"/>'+
  '<path d="M84 40 C86 56 74 66 58 68 C52 69 48 71 45 73 C50 64 60 62 68 58 C78 52 82 46 84 40 Z" fill="#B8733A" opacity=".75"/>'+
  '<g fill="#B8733A" opacity=".45"><circle cx="58" cy="32" r="1.6"/><circle cx="68" cy="38" r="1.6"/><circle cx="54" cy="46" r="1.6"/><circle cx="66" cy="52" r="1.4"/></g>'+
  gloss(52,30,5,10,-35,.38);

I.sausage =
  /* колбаска с перевязанными концами — прежняя читалась как мяч */
  '<path d="M20 60 C32 44 68 44 80 60" stroke="#B4442E" stroke-width="24" fill="none" stroke-linecap="round"/>'+
  '<path d="M23 66 C35 54 65 54 77 66" stroke="#8E331F" stroke-width="9" fill="none" stroke-linecap="round" opacity=".5"/>'+
  '<path d="M25 55 C37 45 63 45 75 55" stroke="#DC7056" stroke-width="5" fill="none" stroke-linecap="round" opacity=".9"/>'+
  '<g fill="#F2CBBA" opacity=".85"><circle cx="40" cy="53" r="1.6"/><circle cx="51" cy="51" r="1.6"/><circle cx="62" cy="54" r="1.6"/><circle cx="46" cy="59" r="1.4"/><circle cx="57" cy="59" r="1.4"/><circle cx="34" cy="59" r="1.3"/><circle cx="68" cy="60" r="1.3"/></g>'+
  '<g stroke="#7A2A18" stroke-width="2.4" stroke-linecap="round" fill="none"><path d="M9 61 q-5 3 -5 9"/><path d="M91 61 q5 3 5 9"/></g>'+
  '<circle cx="9" cy="61" r="3" fill="#7A2A18"/><circle cx="91" cy="61" r="3" fill="#7A2A18"/>';

I.meat =
  /* стейк: жировая кромка и мраморные прожилки. Прожилки нарочно неровные и
     несимметричные: в первой версии две дуги и круглая косточка сложились в
     подмигивающее лицо */
  '<path d="M14 54 C12 40 26 29 44 30 C58 31 68 26 79 34 C88 41 87 57 80 66 C72 78 54 83 39 79 C25 75 15 66 14 54 Z" fill="#F1DCC4"/>'+
  '<path d="M20 54 C19 43 30 35 45 36 C57 37 66 33 75 39 C82 45 81 57 75 64 C68 73 54 77 41 74 C29 71 21 64 20 54 Z" fill="#C9433F"/>'+
  '<path d="M57 37 C66 34 74 38 78 46 C80 56 76 64 70 69 C74 60 74 50 68 44 C64 40 60 39 57 37 Z" fill="#A83532" opacity=".6"/>'+
  '<g stroke="#F6E3D2" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".8">'+
  '<path d="M25 48 c5 -2 8 1 12 -2 c4 -3 8 -1 11 -3"/>'+
  '<path d="M38 58 c4 2 9 -1 13 2 c4 3 9 2 14 -1"/>'+
  '<path d="M28 64 c3 -1 6 2 9 1"/>'+
  '<path d="M61 44 c3 0 5 3 9 3"/>'+
  '<path d="M52 68 c3 1 6 0 8 -2"/></g>'+
  gloss(33,44,4,8,-30,.28);

I.fish =
  /* Голова слева, хвост справа, глаз у головы. В прежнем рисунке тело
     сужалось не к хвосту, а к голове, и глаз оказался возле хвоста —
     Александр заметил первым */
  '<path d="M76 56 L95 39 C91 50 91 62 95 73 Z" fill="#3F86B8"/>'+
  '<path d="M40 34 C46 22 60 22 66 36 Z" fill="#3F86B8"/>'+
  '<path d="M46 77 C50 86 58 87 62 78 Z" fill="#3F86B8"/>'+
  '<path d="M12 56 C12 41 26 32 42 32 C58 32 70 42 80 56 C70 70 58 80 42 80 C26 80 12 71 12 56 Z" fill="#5BA8DC"/>'+
  '<path d="M14 61 C20 72 32 79 44 79 C58 79 70 69 78 58 C66 64 52 68 40 67 C28 66 20 64 14 61 Z" fill="#C3E2F4"/>'+
  '<path d="M33 41 C39 49 39 63 33 71" stroke="#3F86B8" stroke-width="2.6" fill="none" stroke-linecap="round"/>'+
  '<g stroke="#3F86B8" stroke-width="1.8" fill="none" opacity=".5"><path d="M47 45 c3 3 3 7 0 10"/><path d="M56 47 c3 3 3 7 0 10"/><path d="M51 57 c3 3 3 7 0 10"/></g>'+
  '<circle cx="24" cy="50" r="5" fill="#fff"/><circle cx="23" cy="50" r="2.7" fill="#1E2A38"/>'+
  '<path d="M12 59 l6 -1" stroke="#2F6E9A" stroke-width="2" stroke-linecap="round"/>'+
  gloss(30,40,3.5,8,-65,.38);

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
I.rice   =
  /* миска с горкой риса. Раньше рис, мука и сахар были тремя одинаковыми
     белыми мешками и на белой плитке почти пропадали */
  '<path d="M20 52 C22 36 36 27 50 27 C64 27 78 36 80 52 Z" fill="#FBF8F0"/>'+
  '<path d="M60 29 C72 33 79 42 80 52 H67 C69 44 67 35 60 29 Z" fill="#E6E0D2"/>'+
  '<g fill="#DDD4C1"><ellipse cx="34" cy="46" rx="2.6" ry="1.4" transform="rotate(-30 34 46)"/><ellipse cx="42" cy="39" rx="2.6" ry="1.4" transform="rotate(20 42 39)"/><ellipse cx="50" cy="34" rx="2.6" ry="1.4" transform="rotate(-10 50 34)"/><ellipse cx="58" cy="40" rx="2.6" ry="1.4" transform="rotate(35 58 40)"/><ellipse cx="65" cy="46" rx="2.6" ry="1.4" transform="rotate(-25 65 46)"/><ellipse cx="46" cy="46" rx="2.6" ry="1.4" transform="rotate(10 46 46)"/><ellipse cx="55" cy="47" rx="2.6" ry="1.4" transform="rotate(-20 55 47)"/></g>'+
  '<path d="M16 54 h68 c0 18 -14 30 -34 30 s-34 -12 -34 -30 z" fill="#3B6FB6"/>'+
  '<path d="M84 54 c0 18 -14 30 -34 30 c12 -6 20 -16 22 -30 z" fill="#2D5791" opacity=".6"/>'+
  '<rect x="13" y="50" width="74" height="7" rx="3.5" fill="#5287D2"/>'+
  '<path d="M26 66 h48" stroke="#fff" stroke-width="2.2" opacity=".55" stroke-linecap="round"/>';
I.flour  =
  /* крафтовый мешок с колосом */
  pack('#E8D3A8','#C9B184',
    '<rect x="31" y="38" width="32" height="34" rx="5" fill="#FFFDF7"/>'+
    '<path d="M47 69 V42" stroke="#B88A34" stroke-width="2" stroke-linecap="round"/>'+
    '<g fill="#E0B24E">'+
    '<ellipse cx="43" cy="50" rx="2.6" ry="4.6" transform="rotate(-30 43 50)"/><ellipse cx="51" cy="50" rx="2.6" ry="4.6" transform="rotate(30 51 50)"/>'+
    '<ellipse cx="43" cy="57" rx="2.6" ry="4.6" transform="rotate(-30 43 57)"/><ellipse cx="51" cy="57" rx="2.6" ry="4.6" transform="rotate(30 51 57)"/>'+
    '<ellipse cx="43" cy="64" rx="2.6" ry="4.6" transform="rotate(-30 43 64)"/><ellipse cx="51" cy="64" rx="2.6" ry="4.6" transform="rotate(30 51 64)"/>'+
    '<ellipse cx="47" cy="43" rx="2.4" ry="4.2"/></g>');
I.sugar  =
  /* пирамидка кубиков рафинада */
  isoCube(36, 55, 16) + isoCube(64, 55, 16) + isoCube(50, 39, 16)+
  '<g fill="#9CC2EA"><path d="M24 30 l2 -6 l2 6 l6 2 l-6 2 l-2 6 l-2 -6 l-6 -2 z"/><path d="M76 26 l1.4 -4 l1.4 4 l4 1.4 l-4 1.4 l-1.4 4 l-1.4 -4 l-4 -1.4 z"/></g>';
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

/* ================= ДОБАВЛЕНО 09.10 ================= */
/* Частые товары, которых не было в каталоге. Без них подставлялась заглушка
   отдела, и человек видел, например, красный шарик на месте киви. */

function isoCube(cx, cy, sz){
  var w = sz*0.87, h = sz*0.5;
  function P(x,y){ return x.toFixed(1)+' '+y.toFixed(1); }
  return '<path d="M'+P(cx,cy-h)+' L'+P(cx+w,cy)+' L'+P(cx,cy+h)+' L'+P(cx-w,cy)+' Z" fill="#FFFFFF"/>'+
         '<path d="M'+P(cx-w,cy)+' L'+P(cx,cy+h)+' L'+P(cx,cy+h+sz)+' L'+P(cx-w,cy+sz)+' Z" fill="#EEF1F5"/>'+
         '<path d="M'+P(cx,cy+h)+' L'+P(cx+w,cy)+' L'+P(cx+w,cy+sz)+' L'+P(cx,cy+h+sz)+' Z" fill="#D5DCE5"/>';
}

function ring(cx, cy, r, n, rx, ry, color){
  var out = '';
  for(var i=0;i<n;i++){
    var a = i*2*Math.PI/n;
    var x = (cx + r*Math.cos(a)).toFixed(1), y = (cy + r*Math.sin(a)).toFixed(1);
    out += '<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" transform="rotate('+(a*180/Math.PI+90).toFixed(0)+' '+x+' '+y+')"/>';
  }
  return '<g fill="'+color+'">'+out+'</g>';
}

I.kiwi =
  /* целый плод позади и разрез спереди — по разрезу киви узнаётся сразу */
  '<ellipse cx="64" cy="47" rx="23" ry="19" fill="#8A6A3E" transform="rotate(-20 64 47)"/>'+
  '<ellipse cx="69" cy="52" rx="18" ry="13" fill="#6E5230" opacity=".5" transform="rotate(-20 69 52)"/>'+
  '<circle cx="42" cy="60" r="25" fill="#8A6A3E"/>'+
  '<circle cx="42" cy="60" r="22" fill="#79B83A"/>'+
  '<circle cx="42" cy="60" r="14" fill="#A5D35A"/>'+
  '<ellipse cx="42" cy="60" rx="6.5" ry="5" fill="#F2F0C9"/>'+
  ring(42, 60, 10, 16, 1.1, 2.4, '#2A2416')+
  gloss(32,49,4,7,-30,.35);

function pineMarks(cx, cy, rx, ry){
  var out = '', row = 0;
  for(var y = cy-ry+7; y < cy+ry-4; y += 6.5, row++){
    for(var x = cx-rx+4 + (row%2 ? 3.3 : 0); x < cx+rx-2; x += 6.6){
      var dx = (x-cx)/rx, dy = (y-cy)/ry;
      if(dx*dx + dy*dy < 0.74)
        out += '<path d="M'+(x-2.4).toFixed(1)+' '+y.toFixed(1)+' l2.4 -2.4 l2.4 2.4 l-2.4 2.4 z"/>';
    }
  }
  return '<g fill="#B5741A" opacity=".75">'+out+'</g>';
}
I.pineapple =
  '<g fill="#3E9B3E">'+
  '<path d="M50 40 L43 9 L50 28 L51 6 L55 28 L61 10 L57 40 Z"/>'+
  '<path d="M48 41 L28 17 L46 34 Z"/><path d="M56 41 L76 17 L58 34 Z"/></g>'+
  '<path d="M51 40 L51 8" stroke="#2E7D32" stroke-width="1.6" opacity=".6"/>'+
  '<ellipse cx="51" cy="64" rx="21" ry="26" fill="#F0B23A"/>'+
  '<ellipse cx="58" cy="67" rx="12" ry="21" fill="#D18F22" opacity=".5"/>'+
  pineMarks(51, 64, 21, 26)+
  gloss(42,54,4,10,-20,.35);

I.plum =
  stem('M52 31 C52 23 55 18 59 14')+leaf(54,23)+
  '<ellipse cx="50" cy="59" rx="23" ry="27" fill="#6A3A8C"/>'+
  '<path d="M50 32 C66 34 74 47 73 61 C72 75 62 85 50 86 C60 77 64 67 64 57 C64 46 58 37 50 32 Z" fill="#4E2A6A" opacity=".6"/>'+
  '<path d="M48 34 C42 47 42 71 48 85" stroke="#4E2A6A" stroke-width="2" fill="none" opacity=".6"/>'+
  gloss(38,49,6,11,-20,.35);

I.cherry =
  '<path d="M36 62 C38 44 48 28 58 20" stroke="#5A7A2C" stroke-width="3" fill="none" stroke-linecap="round"/>'+
  '<path d="M64 66 C62 48 60 32 58 20" stroke="#5A7A2C" stroke-width="3" fill="none" stroke-linecap="round"/>'+
  leaf(58,20)+
  '<circle cx="35" cy="68" r="15" fill="#C8102E"/>'+
  '<circle cx="65" cy="71" r="15" fill="#B00E28"/>'+
  '<path d="M35 53 a15 15 0 0 1 0 30 a10 15 0 0 0 0 -30 z" fill="#8E0B20" opacity=".45"/>'+
  '<path d="M65 56 a15 15 0 0 1 0 30 a10 15 0 0 0 0 -30 z" fill="#7E0A1C" opacity=".45"/>'+
  gloss(29,62,3.5,6,-25,.5)+gloss(59,65,3.5,6,-25,.45);

I.pomegranate =
  '<path d="M42 31 L41 20 L46 26 L50 17 L54 26 L59 20 L58 31 Z" fill="#8E1A2C"/>'+
  '<circle cx="50" cy="59" r="28" fill="#B8233A"/>'+
  '<path d="M50 31 a28 28 0 0 1 0 56 a20 28 0 0 0 0 -56 z" fill="#8E1A2C" opacity=".5"/>'+
  gloss(38,47,7,11,-25,.35);

function drupe(cx, cy, c){
  return '<circle cx="'+cx+'" cy="'+cy+'" r="5.6" fill="'+c+'"/>'+
         '<circle cx="'+(cx-1.6)+'" cy="'+(cy-1.8)+'" r="1.5" fill="#fff" opacity=".45"/>';
}
I.berries =
  /* малина и пара черничин — «ягоды» вообще, а не одна конкретная */
  '<circle cx="72" cy="66" r="11" fill="#3B4B8F"/><circle cx="63" cy="81" r="10" fill="#33427F"/>'+
  '<path d="M69 59 l3 3 l3 -3 M60 74 l3 3 l3 -3" stroke="#1F2A55" stroke-width="1.6" fill="none" stroke-linecap="round"/>'+
  drupe(32,38,'#D6304E')+drupe(42,38,'#E2405E')+drupe(52,38,'#D6304E')+
  drupe(27,47,'#E2405E')+drupe(37,47,'#D6304E')+drupe(47,47,'#E2405E')+drupe(57,47,'#D6304E')+
  drupe(27,56,'#D6304E')+drupe(37,56,'#E2405E')+drupe(47,56,'#D6304E')+drupe(57,56,'#E2405E')+
  drupe(32,65,'#E2405E')+drupe(42,65,'#D6304E')+drupe(52,65,'#E2405E')+
  drupe(37,73,'#D6304E')+drupe(47,73,'#E2405E')+drupe(42,80,'#D6304E')+
  '<path d="M42 33 l-9 -4 l6 7 l-7 4 l10 -2 l0 7 l3 -7 l3 7 l0 -7 l10 2 l-7 -4 l6 -7 l-9 4 z" fill="#4C9A38"/>';

I.beet =
  /* листья широкие, с красными прожилками: узкие торчали как заячьи уши */
  '<path d="M47 37 C36 34 22 26 18 12 C30 12 42 20 48 34 Z" fill="#4C9A38"/>'+
  '<path d="M53 37 C64 34 78 26 82 12 C70 12 58 20 52 34 Z" fill="#3E8E32"/>'+
  '<path d="M50 36 C46 26 46 16 50 6 C54 16 54 26 50 36 Z" fill="#5BAA48"/>'+
  '<g stroke="#8E1E4D" stroke-width="2" stroke-linecap="round" fill="none">'+
  '<path d="M47 36 C40 28 30 20 21 14"/><path d="M53 36 C60 28 70 20 79 14"/><path d="M50 35 V10"/></g>'+
  '<path d="M50 34 C68 34 76 48 74 60 C72 73 61 81 53 89 C51 91 49 91 47 89 C39 81 28 73 26 60 C24 48 32 34 50 34 Z" fill="#8E1E4D"/>'+
  '<path d="M50 34 C68 34 76 48 74 60 C72 73 61 81 53 89 C58 78 64 68 64 58 C64 46 58 37 50 34 Z" fill="#6B1338" opacity=".6"/>'+
  '<path d="M49 90 C49 94 48 97 46 99" stroke="#6B1338" stroke-width="2" fill="none" stroke-linecap="round"/>'+
  '<g stroke="#B23A6A" stroke-width="1.6" fill="none" opacity=".55"><path d="M34 54 c4 -6 10 -9 16 -9"/><path d="M33 66 c5 -5 11 -7 18 -6"/></g>'+
  gloss(37,51,5,10,-20,.3);

I.zucchini =
  '<path d="M20 74 C36 64 58 48 78 34" stroke="#2E6F2E" stroke-width="26" fill="none" stroke-linecap="round"/>'+
  '<path d="M24 79 C40 69 62 53 82 39" stroke="#22561F" stroke-width="9" fill="none" stroke-linecap="round" opacity=".5"/>'+
  '<path d="M16 68 C32 58 54 42 74 28" stroke="#6FAF5E" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="7 6" opacity=".85"/>'+
  '<path d="M21 74 C37 64 59 48 79 34" stroke="#4E8F44" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-dasharray="5 7" opacity=".7"/>'+
  '<circle cx="88" cy="26" r="6" fill="#6E8A3A"/>'+
  '<path d="M90 24 l6 -7" stroke="#7C7A3A" stroke-width="5" stroke-linecap="round"/>';

I.eggplant =
  '<path d="M60 28 C74 28 82 42 78 56 C74 72 62 86 46 86 C31 86 22 76 24 64 C26 52 38 46 44 40 C49 33 53 28 60 28 Z" fill="#5A2A86"/>'+
  '<path d="M78 56 C74 72 62 86 46 86 C58 80 68 68 70 54 C72 44 70 36 66 31 C74 34 80 44 78 56 Z" fill="#401C63" opacity=".6"/>'+
  '<path d="M47 35 C51 26 60 22 71 26 C65 28 61 32 59 39 C57 35 52 33 47 35 Z" fill="#4C9A38"/>'+
  '<path d="M60 27 C60 21 62 16 66 12" stroke="#5E8A3A" stroke-width="4" fill="none" stroke-linecap="round"/>'+
  gloss(37,62,5,12,30,.35);

function leafy(cx, cy, c){
  return '<g fill="'+c+'">'+
    '<ellipse cx="'+cx+'" cy="'+(cy-6)+'" rx="5" ry="8"/>'+
    '<ellipse cx="'+(cx-6)+'" cy="'+(cy+1)+'" rx="5" ry="8" transform="rotate(-55 '+(cx-6)+' '+(cy+1)+')"/>'+
    '<ellipse cx="'+(cx+6)+'" cy="'+(cy+1)+'" rx="5" ry="8" transform="rotate(55 '+(cx+6)+' '+(cy+1)+')"/></g>';
}
I.greens =
  /* пучок зелени, перевязанный бечёвкой */
  '<g stroke="#3D8A35" stroke-width="2.6" stroke-linecap="round" fill="none">'+
  '<path d="M50 90 C48 72 40 54 30 38"/><path d="M50 90 C50 70 50 50 50 30"/><path d="M50 90 C52 72 60 54 70 38"/>'+
  '<path d="M50 80 C46 68 42 58 38 50"/><path d="M50 80 C54 68 58 58 62 50"/></g>'+
  leafy(38,48,'#4CA845')+leafy(62,48,'#4CA845')+
  leafy(30,34,'#3E9B3E')+leafy(70,34,'#3E9B3E')+leafy(50,26,'#5BB85A')+
  '<rect x="43" y="70" width="14" height="8" rx="2.5" fill="#C9A24A"/>'+
  '<path d="M43 74 h14" stroke="#A9853A" stroke-width="1.4"/>';

I.lettuce =
  '<path d="M50 86 C30 82 16 66 18 48 C20 32 32 22 44 24 C48 18 56 18 60 24 C72 22 82 34 82 50 C82 68 68 82 50 86 Z" fill="#6DAF45"/>'+
  '<path d="M50 86 C36 80 26 66 28 52 C30 40 40 34 50 36 C60 34 70 40 72 52 C74 66 64 80 50 86 Z" fill="#9BD06A"/>'+
  '<path d="M50 86 C42 78 38 66 40 56 C42 48 46 44 50 44 C54 44 58 48 60 56 C62 66 58 78 50 86 Z" fill="#C2E58E"/>'+
  '<g stroke="#6DAF45" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".8">'+
  '<path d="M50 84 V50"/><path d="M50 72 L41 60"/><path d="M50 72 L59 60"/><path d="M50 62 L44 54"/><path d="M50 62 L56 54"/></g>';

function bead(x, y){
  return '<circle cx="'+x+'" cy="'+y+'" r="3.3" fill="#EE6A2E"/><circle cx="'+(x-1)+'" cy="'+(y-1.1)+'" r="1" fill="#FFD2B4"/>';
}
I.caviar =
  /* баночка с горкой красной икры */
  '<path d="M22 55 V70 C22 78 34 84 50 84 C66 84 78 78 78 70 V55 Z" fill="#26406E"/>'+
  '<path d="M60 55 H78 V70 C78 78 66 84 50 84 C62 80 64 72 64 66 V55 Z" fill="#1B2F52" opacity=".7"/>'+
  '<path d="M22 64 C34 70 66 70 78 64" stroke="#D8B45A" stroke-width="2" fill="none"/>'+
  '<ellipse cx="50" cy="55" rx="28" ry="9" fill="#D8B45A"/>'+
  '<ellipse cx="50" cy="54" rx="25" ry="7.5" fill="#D9542A"/>'+
  bead(30,53)+bead(36,54)+bead(42,55)+bead(48,55)+bead(54,55)+bead(60,55)+bead(66,54)+bead(70,52)+
  bead(33,48)+bead(39,49)+bead(45,49)+bead(51,49)+bead(57,49)+bead(63,48)+
  bead(38,43)+bead(44,43)+bead(50,43)+bead(56,43)+bead(62,43)+
  bead(44,37)+bead(50,37)+bead(56,37)+bead(50,32);

function squeezeBottle(body, dark, cap, label){
  return '<path d="M38 34 h24 c7 0 10 6 10 13 v33 c0 6 -4 8 -10 8 H38 c-6 0 -10 -2 -10 -8 V47 c0 -7 3 -13 10 -13 z" fill="'+body+'"/>'+
         '<path d="M62 34 c7 0 10 6 10 13 v33 c0 6 -4 8 -10 8 h-6 V34 z" fill="'+dark+'"/>'+
         '<rect x="42" y="22" width="16" height="12" rx="3" fill="'+cap+'"/>'+
         '<path d="M46 22 l4 -8 l4 8 z" fill="'+cap+'"/>'+ label;
}
I.mayo = squeezeBottle('#FBF7EA','#E7E1CF','#F2C230',
  '<rect x="31" y="52" width="38" height="22" rx="4" fill="#F5D24A"/>'+
  '<ellipse cx="50" cy="63" rx="9" ry="6.5" fill="#fff"/><circle cx="50" cy="63" r="3.5" fill="#F2A82A"/>');

I.ketchup = squeezeBottle('#D2232A','#A81A20','#F4F4F4',
  '<rect x="31" y="52" width="38" height="22" rx="4" fill="#FFF6E8"/>'+
  '<circle cx="50" cy="64" r="7" fill="#E5372F"/><path d="M50 57 l-4 -2 l4 1 l4 -1 z" fill="#3F9B45"/>');

I.icecream =
  '<path d="M34 52 L50 92 L66 52 Z" fill="#E2A85A"/>'+
  '<path d="M50 52 L66 52 L50 92 Z" fill="#C9883A" opacity=".55"/>'+
  '<g stroke="#B7772E" stroke-width="1.6" opacity=".7" stroke-linecap="round"><path d="M39 58 L56 70"/><path d="M43 67 L52 73"/><path d="M61 58 L44 70"/><path d="M57 67 L48 73"/></g>'+
  '<circle cx="50" cy="44" r="18" fill="#F6B8C6"/>'+
  '<path d="M32 46 c2 7 8 7 9 1 c2 7 8 7 10 1 c2 6 9 6 10 0 c2 5 6 4 7 -2 Z" fill="#F6B8C6"/>'+
  '<circle cx="50" cy="27" r="13" fill="#FFF1D2"/>'+
  gloss(42,39,4,7,-30,.4)+gloss(45,22,3,5,-30,.45);

function dumpling(cx, cy, rot){
  return '<g transform="rotate('+rot+' '+cx+' '+cy+')">'+
    '<path d="M'+(cx-14)+' '+cy+' A14 14 0 0 1 '+(cx+14)+' '+cy+' Z" fill="#F2DDB0"/>'+
    '<path d="M'+(cx-14)+' '+cy+' A14 14 0 0 1 '+(cx+14)+' '+cy+'" stroke="#CFAE70" stroke-width="3.2" fill="none" stroke-dasharray="3 3"/>'+
    '<path d="M'+(cx-14)+' '+cy+' H'+(cx+14)+'" stroke="#CFAE70" stroke-width="2"/></g>';
}
I.dumplings =
  '<ellipse cx="50" cy="71" rx="38" ry="13" fill="#DCE7F2"/>'+
  '<ellipse cx="50" cy="69" rx="30" ry="9" fill="#C3D4E6"/>'+
  dumpling(36,66,-12)+dumpling(64,66,12)+dumpling(50,58,0);

I.chips =
  '<path d="M28 22 l4.4 4 l4.4 -4 l4.4 4 l4.4 -4 l4.4 4 l4.4 -4 l4.4 4 l4.4 -4 l4.4 4 l4.4 -4 C76 40 76 66 72 82 l-4.4 -4 l-4.4 4 l-4.4 -4 l-4.4 4 l-4.4 -4 l-4.4 4 l-4.4 -4 l-4.4 4 l-4.4 -4 l-4.4 4 C24 66 24 40 28 22 Z" fill="#E33A2C"/>'+
  '<path d="M62 24 C69 40 69 66 65 80 l7 2 C76 66 76 40 72 22 Z" fill="#B82A1F" opacity=".6"/>'+
  '<ellipse cx="49" cy="54" rx="15" ry="13" fill="#F8D24A"/>'+
  '<path d="M39 56 C43 48 52 46 60 50 C58 58 49 62 39 56 Z" fill="#E09A28"/>'+
  '<path d="M33 30 h30" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>';

I.canned =
  '<path d="M28 34 V78 C28 84 38 88 50 88 C62 88 72 84 72 78 V34 Z" fill="#B8C2CC"/>'+
  '<path d="M60 34 H72 V78 C72 84 62 88 50 88 C58 84 60 80 60 74 Z" fill="#96A2AE" opacity=".8"/>'+
  '<rect x="28" y="44" width="44" height="30" fill="#C8302E"/>'+
  '<rect x="60" y="44" width="12" height="30" fill="#A32522"/>'+
  '<ellipse cx="45" cy="59" rx="11" ry="8" fill="#FFF6E8"/>'+
  '<ellipse cx="50" cy="34" rx="22" ry="7" fill="#DCE3EA"/>'+
  '<ellipse cx="50" cy="34" rx="17" ry="5" fill="#C3CCD6"/>'+
  '<ellipse cx="57" cy="33" rx="6" ry="2.4" fill="none" stroke="#8E9AA6" stroke-width="1.8"/>'+
  '<g stroke="#9AA6B2" stroke-width="1.4" opacity=".7" fill="none"><path d="M28 40 C36 43 64 43 72 40"/><path d="M28 80 C36 83 64 83 72 80"/></g>';

I.shrimp =
  '<g stroke="#E0663E" stroke-width="1.6" fill="none" stroke-linecap="round"><path d="M56 26 C44 14 30 10 14 12"/><path d="M58 28 C46 22 32 22 18 26"/></g>'+
  '<path d="M44 74 L28 64 L34 78 Z" fill="#E0663E"/><path d="M44 78 L30 88 L42 86 Z" fill="#E0663E"/>'+
  '<circle cx="50" cy="76" r="8" fill="#F08A5C"/>'+
  '<circle cx="62" cy="72" r="9.5" fill="#F2935F"/>'+
  '<circle cx="71" cy="61" r="11" fill="#F08A5C"/>'+
  '<circle cx="72" cy="47" r="12" fill="#F2935F"/>'+
  '<circle cx="63" cy="34" r="13" fill="#F08A5C"/>'+
  '<g stroke="#FFC0A0" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"><path d="M58 30 c4 -4 10 -4 13 0"/><path d="M68 42 c4 -3 9 -2 11 2"/><path d="M67 57 c4 -2 9 -1 10 3"/></g>'+
  '<g stroke="#E0663E" stroke-width="1.6" stroke-linecap="round"><path d="M60 46 l-6 3"/><path d="M60 54 l-6 3"/><path d="M58 62 l-5 4"/></g>'+
  '<circle cx="57" cy="29" r="2.6" fill="#2A1E1A"/>';

I.buckwheat =
  /* гречка своя, отдельно от риса: коричневое зерно в окошке пачки */
  pack('#B98552','#976838',
    '<rect x="31" y="40" width="32" height="30" rx="5" fill="#F6EBDA"/>'+
    '<g fill="#7A4A22">'+
    '<ellipse cx="38" cy="48" rx="2.6" ry="2" transform="rotate(-20 38 48)"/><ellipse cx="46" cy="47" rx="2.6" ry="2" transform="rotate(30 46 47)"/>'+
    '<ellipse cx="54" cy="49" rx="2.6" ry="2" transform="rotate(-40 54 49)"/><ellipse cx="41" cy="55" rx="2.6" ry="2" transform="rotate(15 41 55)"/>'+
    '<ellipse cx="49" cy="56" rx="2.6" ry="2" transform="rotate(-25 49 56)"/><ellipse cx="57" cy="57" rx="2.6" ry="2" transform="rotate(35 57 57)"/>'+
    '<ellipse cx="37" cy="63" rx="2.6" ry="2" transform="rotate(-10 37 63)"/><ellipse cx="45" cy="63" rx="2.6" ry="2" transform="rotate(40 45 63)"/>'+
    '<ellipse cx="53" cy="64" rx="2.6" ry="2" transform="rotate(-30 53 64)"/></g>');

/* ================= КАТЕГОРИИ (запасные) ================= */
/* Подставляются, когда товара нет в каталоге. Раньше заглушка «фрукт» была
   красным шариком — и неизвестное киви показывалось красным фруктом, то есть
   конкретной НЕВЕРНОЙ картинкой. Теперь заглушка — композиция из нескольких
   товаров отдела: читается как «фрукты вообще» и ничего не утверждает про
   сам товар. Собираем из уже нарисованных иконок, чтобы стиль совпадал. */
function grp(body, tx, ty, sc){
  return '<g transform="translate('+tx+' '+ty+') scale('+sc+')">'+body+'</g>';
}
I.cat_fruit   = grp(I.grapes, 42, 0, .56) + grp(I.banana, 34, 36, .6) + grp(I.apple, 2, 24, .64);
I.cat_veg     = grp(I.broccoli, 42, 2, .56) + grp(I.carrot, 2, 16, .62) + grp(I.tomato, 34, 36, .6);
I.cat_dairy   = grp(I.cheese, 36, 38, .6) + grp(I.milk, 4, 8, .66);
I.cat_bakery  = grp(I.croissant, 34, 42, .6) + grp(I.bread, 4, 8, .66);
I.cat_meat    = grp(I.fish, 32, 42, .6) + grp(I.meat, 2, 6, .66);
I.cat_grocery = grp(I.pasta, 40, 8, .6) + grp(I.jam, 4, 26, .62);
I.cat_drinks  = grp(I.juice, 40, 14, .6) + grp(I.water, 4, 8, .66);
I.cat_house   = grp(I.sponge, 34, 46, .6) + grp(I.detergent, 4, 6, .66);
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
  /* Область фильтра задана в координатах самого рисунка (userSpaceOnUse), а не в
     процентах от рамки фигуры. Рамку браузер считает по ГЕОМЕТРИИ, без толщины
     обводки: у колбаски, нарисованной толстой линией, рамка — это узкая осевая
     дуга, и всё, что выше неё, срезалось ровной полкой. */
  '<filter id="nb3d" filterUnits="userSpaceOnUse" x="-12" y="-12" width="124" height="132" color-interpolation-filters="sRGB">'+
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

import { useState, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import realMadridBg from './images/fon-real-madrid.JPG'
import stadium1 from './images/Stadium1.JPG'
import stadium2 from './images/Stadium2.JPG'
import stadium3 from './images/Stadium3.JPG'
import stadium4 from './images/Stadium4.JPG'
import stadium5 from './images/Stadium5.JPG'
import stadium6 from './images/Stadium6.JPG'
import stadium7 from './images/Stadium7.JPG'
import stadium8 from './images/Stadium8.JPG'
import stadium9 from './images/Stadium9.JPG'
import stadium10 from './images/Stadium10.JPG'
import stadium11 from './images/Stadium11.JPG'
import stadium12 from './images/Stadium12.JPG'
import stadium13 from './images/Stadium13.JPG'
import stadium14 from './images/Stadium14.JPG'
import stadium15 from './images/Stadium15.JPG'
import stadium16 from './images/Stadium16.JPG'
import stadium17 from './images/Stadium17.JPG'
import stadium18 from './images/Stadium18.JPG'
import stadium19 from './images/Stadium19.JPG'
import stadium20 from './images/Stadium20.JPG'
import stadium21 from './images/Stadium21.JPG'
import stadium22 from './images/Stadium22.JPG'
import stadium23 from './images/Stadium23.JPG'
import stadium24 from './images/Stadium24.JPG'
import stadium25 from './images/Stadium25.JPG'
import stadium26 from './images/Stadium26.JPG'
import stadium27 from './images/Stadium27.JPG'
import stadium28 from './images/Stadium28.JPG'
import stadium29 from './images/Stadium29.JPG'
import stadium30 from './images/Stadium30.JPG'
import stadium31 from './images/Stadium31.JPG'
import stadium32 from './images/Stadium32.JPG'
import stadium33 from './images/Stadium33.JPG'
import stadium34 from './images/Stadium34.JPG'

// Все 34 снимка в порядке номеров
const galleryItems = [
  {
    id: 1,
    title: 'Снимок 1',
    image: stadium1,
    imgAlt: 'Схема стадиона',
    heading: 'Схема стадиона',
    description:
      'План стадиона Сантьяго Бернабеу с обозначением всех секторов, входов и важных зон. Стадион вмещает более 81 000 зрителей.',
  },
  {
    id: 2,
    title: 'Снимок 2',
    image: stadium2,
    imgAlt: 'Витрина с кубками',
    heading: 'Трофеи Реала',
    description:
      'Витрина с главными трофеями клуба: Кубки Лиги Чемпионов, Кубки Испании и другие награды великого клуба.',
  },
  {
    id: 3,
    title: 'Снимок 3',
    image: stadium3,
    imgAlt: 'Старинный серебряный кубок',
    heading: 'Исторический трофей',
    description:
      'Старинный серебряный кубок — один из первых трофеев в истории клуба. Свидетельство богатой истории Реала.',
  },
  {
    id: 4,
    title: 'Снимок 4',
    image: stadium4,
    imgAlt: 'Кубок с эмблемами команд',
    heading: 'Кубок с эмблемами',
    description:
      'Уникальный трофей с эмблемами различных команд. Символ единства и многообразия спортивного клуба.',
  },
  {
    id: 5,
    title: 'Снимок 5',
    image: stadium5,
    imgAlt: 'Уго Санчес',
    heading: 'Уго Санчес - 1989-1990',
    description:
      'Золотая бутса Уго Санчеса, мексиканского нападающего. Лучший бомбардир сезона 1989-1990.',
  },
  {
    id: 6,
    title: 'Снимок 6',
    image: stadium6,
    imgAlt: 'Роналдо Назарио',
    heading: 'Ronaldo Nazário',
    description:
      'Легендарный бразильский нападающий. Один из величайших футболистов всех времен.',
  },
  {
    id: 7,
    title: 'Снимок 7',
    image: stadium7,
    imgAlt: 'Роналдо 34 гола',
    heading: '34 гола - Сезон 1996-1997',
    description:
      'Рекордная результативность Роналдо в сезоне 1996-1997. 34 гола за сезон — феноменальный результат.',
  },
  {
    id: 8,
    title: 'Снимок 8',
    image: stadium8,
    imgAlt: 'Зидан 1998',
    heading: 'Зидан - Чемпионат мира 1998',
    description:
      'Чемпионат мира 1998 года во Франции. Зидан забил два гола в финале, принеся победу сборной Франции.',
  },
  {
    id: 9,
    title: 'Снимок 9',
    image: stadium9,
    imgAlt: 'Зидан 2003',
    heading: 'Зидан - 2003',
    description:
      '2003 год — один из лучших сезонов Зидана в Реале. Мастерство и элегантность на поле.',
  },
  {
    id: 10,
    title: 'Снимок 10',
    image: stadium10,
    imgAlt: 'Каннаваро 2006',
    heading: 'Каннаваро - 2006',
    description:
      'Золотой мяч 2006 года. Итальянский защитник, капитан сборной-чемпиона мира.',
  },
  {
    id: 11,
    title: 'Снимок 11',
    image: stadium11,
    imgAlt: 'Каннаваро Италия',
    heading: 'Италия - 33 года',
    description:
      'Каннаваро получил Золотой мяч в возрасте 33 лет. Защитник (Defensa) — редкость для этой награды.',
  },
  {
    id: 12,
    title: 'Снимок 12',
    image: stadium12,
    imgAlt: 'Кака 2007',
    heading: 'Кака - 2007',
    description:
      'Бразильский нападающий, выигравший Золотой мяч в 2007 году в возрасте 25 лет.',
  },
  {
    id: 13,
    title: 'Снимок 13',
    image: stadium13,
    imgAlt: 'Роналду 2008 2011',
    heading: 'Роналду - Золотые бутсы 2008 & 2011',
    description:
      'Две Золотые бутсы Криштиану Роналду. Награда лучшему бомбардиру европейских чемпионатов.',
  },
  {
    id: 14,
    title: 'Снимок 14',
    image: stadium14,
    imgAlt: 'Все Золотые бутсы',
    heading: 'Коллекция Золотых бутс',
    description:
      'Вся коллекция Золотых бутс, выигранных игроками Реала. Впечатляющее количество наград.',
  },
  {
    id: 15,
    title: 'Снимок 15',
    image: stadium15,
    imgAlt: 'Роналду бомбардир',
    heading: 'Лучший бомбардир 2009-2015',
    description:
      'Криштиану Роналду — лучший бомбардир в истории клуба (2009-2015). Рекорд 324 гола.',
  },
  {
    id: 16,
    title: 'Снимок 16',
    image: stadium16,
    imgAlt: 'Золотые бутсы легенд',
    heading: 'Легендарные бомбардиры',
    description:
      'Van Nistelrooy (1999, 2000), Cristiano Ronaldo (2012), Raúl (1999). Великие нападающие Реала.',
  },
  {
    id: 17,
    title: 'Снимок 17',
    image: stadium17,
    imgAlt: 'Роналду 2016',
    heading: 'Роналду - Золотой мяч 2016',
    description:
      'Золотой мяч 2016 года. Победа в Лиге Чемпионов и Чемпионате Европы.',
  },
  {
    id: 18,
    title: 'Снимок 18',
    image: stadium18,
    imgAlt: 'Многочисленные трофеи',
    heading: 'Коллекция трофеев',
    description:
      'Витрина с многочисленными трофеями Реала. Символ величия и доминирования клуба.',
  },
  {
    id: 19,
    title: 'Снимок 19',
    image: stadium19,
    imgAlt: 'Европейские кубки',
    heading: 'Европейские трофеи',
    description:
      'Кубки европейских соревнований: Copa de Europa 1979, 1995, 2018. История побед в Европе.',
  },
  {
    id: 20,
    title: 'Снимок 20',
    image: stadium20,
    imgAlt: 'Баскетбольная форма',
    heading: 'Баскетбольный Реал',
    description:
      'Форма F. Martín #10. Реал Мадрид имеет отделение баскетбола с богатой историей.',
  },
  {
    id: 21,
    title: 'Снимок 21',
    image: stadium21,
    imgAlt: 'Кубки ЛЧ',
    heading: 'Лига Чемпионов',
    description:
      'Ряд кубков Лиги Чемпионов. Реал Мадрид — самый титулованный клуб в истории турнира.',
  },
  {
    id: 22,
    title: 'Снимок 22',
    image: stadium22,
    imgAlt: 'Подсветка',
    heading: 'Игрок: F. MARTÍN (Фернандо Мартин)',
    description:
      'Форма легендарного испанского баскетболиста Фернандо Мартина с номером 10. Белый цвет с желтыми и темно-синими элементами — классические цвета баскетбольного клуба Реал Мадрид.',
  },
  {
    id: 23,
    title: 'Снимок 23',
    image: stadium23,
    imgAlt: 'Мемориал Хуанито',
    heading: 'Мемориал Хуанито',
    description:
      'Мемориал легендарному капитану клуба. Хуанито погиб в 2004 году.',
  },
  {
    id: 24,
    title: 'Снимок 24',
    image: stadium24,
    imgAlt: 'Форма Хуанито',
    heading: 'Световая инсталляция с названием "Real Madrid"',
    description:
      'Белые светящиеся буквы на темном фоне с эффектными лучами света создают атмосферу драматизма и торжества. Элемент экспозиции музея, подчеркивающий статус величайшего футбольного клуба в мире.',
  },
  {
    id: 25,
    title: 'Снимок 25',
    image: stadium25,
    imgAlt: 'Проекты стадиона',
    heading:
      'Мемориал легендарного игрока Хуана Гомеса по прозвищу «Хуанито», одного из самых любимых футболистов в истории Реал Мадрид.',
    description:
      'В стеклянной витрине представлены памятные экспонаты: подписанный футбольный мяч, журналы и газеты, посвящённые его карьере, включая выпуск с заголовком «Adios a un genio» («Прощай, гений»). На заднем плане — большой портрет улыбающегося Хуанито и надпись «Fundación Real Madrid». Этот уголок музея хранит память об игроке, чьё имя навсегда вписано в сердце каждого мадридиста.',
  },
  {
    id: 26,
    title: 'Снимок 26',
    image: stadium26,
    imgAlt: 'Трибуны',
    heading:
      'Игровая форма Хуана Гомеса «Хуанито» в классическом белом цвете Реал Мадрид с синей окантовкой.',
    description:
      'На груди виден логотип спонсора того времени — компании «Parmalat». Форма выставлена в стеклянной витрине Фонда Реал Мадрид вместе с историческими документами и фотографиями, рассказывающими о карьере легендарного нападающего. Рядом расположена табличка с именем игрока — дань уважения одному из самых ярких символов клуба 1980-х годов.',
  },
  {
    id: 27,
    title: 'Снимок 27',
    image: stadium27,
    imgAlt: 'Логотип',
    heading:
      'Экспозиция, посвящённая реконструкции стадиона Сантьяго Бернабеу.',
    description:
      'На стене представлены архитектурные визуализации и проектные изображения будущего стадиона: аэрофотосъёмка, виды с разных ракурсов, интерьеры и панорамы. В центре — экран с 3D-моделью. Выставка демонстрирует масштабный проект модернизации легендарной арены Реал Мадрид, превращающий её в один из самых современных и технологичных футбольных стадионов мира.',
  },
  {
    id: 28,
    title: 'Снимок 28',
    image: stadium28,
    imgAlt: 'Раздевалка 1',
    heading: 'Cтадион Сантьяго Бернабеу',
    description:
      'Ряды удобных сидений расположены секторами с оранжевыми лестничными пролётами. Это знаменитые зрительские места, где тысячи болельщиков поддерживают свою любимую команду.',
  },
  {
    id: 29,
    title: 'Снимок 29',
    image: stadium29,
    imgAlt: 'Раздевалка 2',
    heading: 'Классическая эмблема Реал Мадрид',
    description:
      'Один из самых узнаваемых логотипов в мире футбола. На белой поверхности изображён круглый герб с переплетёнными инициалами клуба в золотисто-оранжевых и тёмно-синих тонах, увенчанный королевской короной — символом титула «Реал» (Королевский), пожалованного клубу королём Альфонсо XIII в 1920 году. Этот знак гордости украшает стены легендарного стадиона Сантьяго Бернабеу и является символом более чем столетней истории великого мадридского клуба.',
  },
  {
    id: 30,
    title: 'Снимок 30',
    image: stadium30,
    imgAlt: 'Скамейка запасных',
    heading: 'Раздевалка первой команды Реал Мадрид',
    description:
      'Священное место, где игроки готовятся к каждому матчу. Стены окрашены в фирменные сине-белые цвета клуба. Видны персональные кабинки игроков с именами и номерами: вратарь Ареола (#1), защитники Карвахаль (#2) и Эдер Милитан (#3). Над каждой кабинкой размещена игровая футболка, а на дверцах — фотографии футболистов. В центре комнаты — длинная деревянная скамья, а в углу стоят велотренажёры Schwinn Evolution для разминки. На синей полке лежит чёрная медицинская сумка Sanitas — символ заботы о здоровье игроков.',
  },
  {
    id: 31,
    title: 'Снимок 31',
    image: stadium31,
    imgAlt: 'Лестница',
    heading:
      'Продолжение раздевалки первой команды с персональными местами звёзд Реал Мадрид.',
    description:
      'На фото видны кабинки игроков: Каземиро (#14), Вальверде (#15), Хамес Родригес (#16), Лукас Васкес (#17), Йович (#18), Одриосола (#19) и Асенсио (#20). Над каждым шкафчиком закреплена белая игровая футболка с золотым номером и именем футболиста. На дверцах шкафчиков — портреты игроков в фирменной белой форме.',
  },
  {
    id: 32,
    title: 'Снимок 32',
    image: stadium32,
    imgAlt: 'Тоннель',
    heading:
      'Скамейка запасных и тренерского штаба Реал Мадрид на стадионе Сантьяго Бернабеу.',
    description:
      'На фоне видны знаменитые синие трибуны стадиона и мотивационная надпись на испанском языке: «¿Tienes hambre de victoria?» — «Ты голоден до победы?». Именно с этого места главный тренер и его ассистенты управляют ходом матча, принимая судьбоносные решения.',
  },
  {
    id: 33,
    title: 'Снимок 33',
    image: stadium33,
    imgAlt: 'Дополнительные трофеи',
    heading:
      'Парадная лестница музея Реал Мадрид, ведущая посетителей в верхние залы экспозиции.',
    description:
      'Чёрные ступени с встроенной точечной подсветкой создают эффект звёздного пути, символизирующего восхождение к вершинам футбольной славы. Слева — монументальное чёрно-белое панно с изображением игрока в форме клуба и надписью «Millones en el mundo» («Миллионы по всему миру»), подчёркивающей глобальную популярность мадридского клуба.',
  },
  {
    id: 34,
    title: 'Снимок 34',
    image: stadium34,
    imgAlt: 'Кубки ЛЧ',
    heading:
      'Голубой тоннель, ведущий с раздевалки на поле стадиона Сантьяго Бернабеу.',
    description:
      'Стена украшена крупными стилизованными изображениями игроков с футбольными мячами — словно застывшие кадры великих моментов.',
  },
]

function RealMadrid() {
  const [isGalleryVisible, setIsGalleryVisible] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState(null)
  const navigate = useNavigate()

  // ✅ Прячем фон body ДО первой отрисовки — убирает мерцание
  useLayoutEffect(() => {
    const originalBg = document.body.style.backgroundImage
    document.body.style.backgroundImage = 'none'
    return () => {
      document.body.style.backgroundImage = originalBg
    }
  }, [])

  const toggleGallery = () => {
    setIsGalleryVisible((prev) => {
      const newValue = !prev
      if (newValue) {
        // Плавный скролл к аккордеону после его открытия
        setTimeout(() => {
          const el = document.getElementById('photoGallery')
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }
      return newValue
    })
  }

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id))
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <>
      {/* ✅ ФОН: отдельный слой с фильтром — контент не меняется */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
            url(${realMadridBg})
          `,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(1.10) saturate(1.2)',
        }}
      />

      <main className="main-content inner-page">
        <h1>⚽ Real Madrid</h1>
        <p>Стадион Сантьяго Бернабеу</p>

        <a
          href="#"
          className="back-button"
          onClick={(e) => {
            e.preventDefault()
            goHome()
          }}
        >
          <i className="fas fa-home"></i> На главную
        </a>

        <button className="gallery-toggle-btn" onClick={toggleGallery}>
          {isGalleryVisible ? (
            <>
              <i className="fas fa-times"></i> Закрыть галерею
            </>
          ) : (
            <>
              <i className="fas fa-camera"></i> Фотогалерея
            </>
          )}
        </button>

        <div
          className="accordion"
          id="photoGallery"
          style={{ display: isGalleryVisible ? 'block' : 'none' }}
        >
          {galleryItems.map((item) => (
            <div className="accordion-item" key={item.id}>
              <button
                className={`accordion-header ${activeAccordion === item.id ? 'active' : ''}`}
                onClick={() => toggleAccordion(item.id)}
              >
                {item.title}
              </button>
              <div
                className={`accordion-content ${activeAccordion === item.id ? 'show' : ''}`}
              >
                <img
                  src={item.image}
                  alt={item.imgAlt}
                  className="accordion-img"
                />
                <div className="description">
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default RealMadrid

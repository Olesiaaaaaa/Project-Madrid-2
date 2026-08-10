import { useState, useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import madridImage1 from './images/Madrid1.JPG'
import madridImage2 from './images/Madrid2.JPG'
import madridImage3 from './images/Madrid3.JPG'
import madridImage4 from './images/Madrid4.JPG'
import madridImage5 from './images/Madrid5.JPG'
import madridBg from './images/fon-madrid.JPG'

const galleryData = [
  {
    title: '🌳 Парк Ретиро — топиарное искусство',
    description:
      'Знаменитые фигурно подстриженные зонтичные сосны в парке Ретиро — пример мастерства испанских садовников. Эти деревья, сформированные в виде зелёных облаков, украшают главный парк Мадрида уже более ста лет. Парк Ретиро, созданный в XVII веке для королевской семьи, сегодня является любимым местом отдыха горожан и гостей столицы.',
    image: madridImage1,
  },
  {
    title: '🏰 Королевский дворец',
    description:
      'Королевский дворец (Palacio Real) — официальная резиденция испанских монархов. Один из крупнейших дворцов Европы с более чем 3000 комнатами. Построен в XVIII веке в стиле барокко.',
    image: madridImage2,
  },
  {
    title: '🏛️ Памятник Альфонсо XII',
    description:
      'Монумент королю Альфонсо XII в парке Ретиро — одна из главных достопримечательностей Мадрида. Величественный памятник с колоннадой расположен на берегу искусственного озера, где можно покататься на лодках.',
    image: madridImage3,
  },
  {
    title: '🗿 Площадь Колумба',
    description:
      'Площадь Колумба (Plaza de Colón) посвящена Христофору Колумбу. На площади установлен памятник мореплавателю и культурный центр Fernán Gómez. Важный транспортный и культурный узел Мадрида.',
    image: madridImage4,
  },
  {
    title: '🏛️ Дворец Сибелес',
    description:
      'Дворец Сибелес (Palacio de Cibeles) — бывшее здание почты, ныне ратуша Мадрида. Шедевр архитектуры в стиле необарокко, построенный в начале XX века. Смотровая площадка на крыше предлагает панорамные виды города.',
    image: madridImage5,
  },
]

function Madrid() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  // ✅ Прячем старый фон body ДО первого кадра — чтобы он не выскакивал
  useLayoutEffect(() => {
    const originalBackgroundImage = document.body.style.backgroundImage
    document.body.style.backgroundImage = 'none'
    return () => {
      document.body.style.backgroundImage = originalBackgroundImage
    }
  }, [])

  const openModal = (index) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  const goHome = () => {
    navigate('/')
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    const handleModalClick = (e) => {
      if (e.target.id === 'imageModal') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)
    const modal = document.getElementById('imageModal')
    if (modal) {
      modal.addEventListener('click', handleModalClick)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      if (modal) {
        modal.removeEventListener('click', handleModalClick)
      }
    }
  }, [isModalOpen])

  const currentImage = galleryData[currentIndex]

  return (
    <>
      {/* ✅ ФОНОВОЙ СЛОЙ: фильтр применяется ТОЛЬКО к нему.
          Текст, карточки и кнопки остаются со своими цветами. */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          backgroundImage: `url(${madridBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.18) saturate(1.7)',
        }}
      />

      <main className="main-content inner-page">
        <h1>
          <i className="fas fa-crown crown-icon"></i>
          Madrid
        </h1>
        <p>Столица Испании</p>

        <div className="image-gallery">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <img src={item.image} alt={`Madrid ${index + 1}`} />
              <div className="gallery-caption">{item.title}</div>
            </div>
          ))}
        </div>

        <div
          id="imageModal"
          className="modal"
          style={{ display: isModalOpen ? 'flex' : 'none' }}
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={currentImage.image} alt="" />
            <div className="modal-description">
              <h2>{currentImage.title}</h2>
              <p>{currentImage.description}</p>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="back-button"
          onClick={(e) => {
            e.preventDefault()
            goHome()
          }}
        >
          <i className="fas fa-home"></i>
          На главную
        </a>
      </main>
    </>
  )
}

export default Madrid

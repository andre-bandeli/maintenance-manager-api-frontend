import React from 'react'
import './manutentor.scss'

import imagem from './imagem.jpg'
import imagem2 from './imagem2.webp'
import imagem3 from './imagem3.jpg'
import imagem4 from './imagem4.jpg'
import imagem5 from './imagem5.jpg'
import imagem6 from './imagem6.jpeg'





export default function Cards() {
  return (
    <div className='cards'>
        <div className="box">
            <div className="imagem">
                <img src={imagem} alt="" />
            </div>
            <div className="title">
                <h2>Manutenção Total Produtiva</h2>
            </div>
            <div className="text">
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quis nemo, 
                    impedit esse necessitatibus facilis tenetur molestias quae delectus corrupti eaque 
                    neque id atque repudiandae voluptas fuga accusantium quos repellat.</h3>
            </div>
            <div className="buttons">
                <button>
                    ler texto completo
                </button>
            </div>

        </div>
        <div className="box">
            <div className="imagem">
                <img src={imagem3} alt="" />
            </div>
            <div className="title">
                <h2>Tipos de Manutenção</h2>
            </div>
            <div className="text">
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quis nemo, 
                    impedit esse necessitatibus facilis tenetur molestias quae delectus corrupti eaque 
                    neque id atque repudiandae voluptas fuga accusantium quos repellat.</h3>
            </div>
            <div className="buttons">
                <button>
                    ler texto completo
                </button>
            </div>

        </div>
        <div className="box">
            <div className="imagem">
                <img src={imagem4} alt="" />
            </div>
            <div className="title">
                <h2>Planejamento de Manutenção</h2>
            </div>
            <div className="text">
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quis nemo, 
                    impedit esse necessitatibus facilis tenetur molestias quae delectus corrupti eaque 
                    neque id atque repudiandae voluptas fuga accusantium quos repellat.</h3>
            </div>
            <div className="buttons">
                <button>
                    ler texto completo
                </button>
            </div>

        </div>
        <div className="box">
            <div className="imagem">
                <img src={imagem6} alt="" />
            </div>
            <div className="title">
                <h2>Ferramentas da Qualidade</h2>
            </div>
            <div className="text">
                <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quis nemo, 
                    impedit esse necessitatibus facilis tenetur molestias quae delectus corrupti eaque 
                    neque id atque repudiandae voluptas fuga accusantium quos repellat.</h3>
            </div>
            <div className="buttons">
                <button>
                    ler texto completo
                </button>
            </div>

        </div>
        
    </div>
  )
}

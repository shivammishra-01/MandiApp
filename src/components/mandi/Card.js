import React from "react";
import cardstyle from "../css/card.module.css";
import { Link } from "react-router-dom";
// import "../javascript/card.js";
export default function Card() {
  return (
    <div className="mt-5">
      <header className={cardstyle.header}>
        <h1>ℕ𝔼𝕎𝕃𝕐 𝔸𝔻𝔻𝔼𝔻 𝕃𝕀𝕍𝔼𝕊𝕋𝕆ℂ𝕂 𝕆𝔽 ℂℝ𝕆ℙ𝕊</h1>
        <p>
          <span>
            <Link to="/Crops" className={cardstyle.link}>
              <i className="fa-solid fa-eye"></i> VIEW ALL
            </Link>
          </span>
        </p>
      </header>
      <section>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product One</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://picsum.photos/200/300?cow" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Two</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://picsum.photos/200/300?dog" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Three</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Four</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="image/watch.png" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Five</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Six</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Seven</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Eight</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Nine</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="image/nokia-air.png" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Ten</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Eleven</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Twelve</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
      </section>

      <header className={cardstyle.header}>
        <h1>ℕ𝔼𝕎𝕃𝕐 𝔸𝔻𝔻𝔼𝔻 𝕃𝕀𝕍𝔼𝕊𝕋𝕆ℂ𝕂 𝕆𝔽 𝔸ℕ𝕀𝕄𝔸𝕃𝕊</h1>
        <p>
          <span>
            <Link to="/Animals" className={cardstyle.link}>
              <i className="fa-solid fa-eye"></i> VIEW ALL
            </Link>
          </span>
        </p>
      </header>
      <section>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/random/600x400?cow" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Murrah Buffalo</b>
              <br />
              <small>Age: 2 years</small>
              <br />
              <small>Milk: 20L</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              {/* <button>Add-cart</button> */}
              <button type="button" className="btn btn-primary">
                Buy / Book Now
              </button>
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img
              src="https://source.unsplash.com/random/600x400?buffalo"
              alt=""
            />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Two</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              <button type="button" className="btn btn-primary">
                Buy / Book Now
              </button>
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/random/600x400?goat" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Three</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img
              src="https://source.unsplash.com/random/600x400?sheep"
              alt=""
            />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Four</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/random/600x400?goat" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Five</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/random/600x400?calf" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Six</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img
              src="https://source.unsplash.com/random/600x400?buffalo"
              alt=""
            />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Seven</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img
              src="https://source.unsplash.com/random/600x400?buffalocalf"
              alt=""
            />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Eight</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Nine</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="image/nokia-air.png" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Ten</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Eleven</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Twelve</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
      </section>
      <header className={cardstyle.header}>
        <h1>ℕ𝔼𝕎𝕃𝕐 𝔸𝔻𝔻𝔼𝔻 𝕃𝕀𝕍𝔼𝕊𝕋𝕆ℂ𝕂 𝕆𝔽 𝔽𝔼ℝ𝕋𝕀𝕃𝕀ℤ𝔼ℝ𝕊</h1>
        <p>
          <span>
            <Link to="/Fertilizers" className={cardstyle.link}>
              <i className="fa-solid fa-eye"></i> VIEW ALL
            </Link>
          </span>
        </p>
      </header>
      <section>
        <div className={cardstyle.product}>
          <picture>
            <img
              src="https://source.unsplash.com/random/600x400?fertilizers"
              alt=""
            />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product One</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/random/600x400?rice" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Two</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img
              src="https://source.unsplash.com/random/600x400?pulses "
              alt=""
            />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Three</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://picsum.photos/200/300?grayscale" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Four</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="image/watch.png" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Five</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Six</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Seven</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Eight</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Nine</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="image/nokia-air.png" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Ten</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Eleven</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
        <div className={cardstyle.product}>
          <picture>
            <img src="https://source.unsplash.com/user/c_v_r/1900x800" alt="" />
          </picture>
          <div className={cardstyle.detail}>
            <p>
              <b>Product Twelve</b>
              <br />
              <small>New arrival</small>
            </p>
            <samp>$45.00</samp>
          </div>
          <div className={cardstyle.button}>
            <a className={cardstyle.anchor} href="#">
              Add-cart
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

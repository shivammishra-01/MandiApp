import React from "react";
import cardstyle from "../css/card.module.css";
import { Link } from "react-router-dom";
// import "../javascript/card.js";
export default function Card() {
  return (
    <div className="mt-5">
      <header className={cardstyle.header}>
        <h1>Recently Added Animals</h1>
        <p>
          <span>
            <Link to="/allanimal" className={cardstyle.link}>
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
        <h1>Recently Added Fertilizer</h1>
        <p>
          <span>
            <Link to="/allanimal" className={cardstyle.link}>
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
        <h1>Recently Added Animals</h1>
        <p>
          <span>
            <Link to="/allanimal" className={cardstyle.link}>
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
    </div>
  );
}

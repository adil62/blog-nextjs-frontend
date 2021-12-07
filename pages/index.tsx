import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {RiMenu2Fill} from 'react-icons/ri';

const HomePage: NextPage = () => {
  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  function onMobileHamburgerClick(): void {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <header>
        <Link href="/">AdilCodes</Link>
        <div className="navlink-wrapper">
          <Link href="/posts/latest">Latest</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/snippets">Snippets</Link>
        </div>
        <div className="navlink-mobile-wrapper">
          <span onClick={onMobileHamburgerClick} className="nav-toggle">
            <RiMenu2Fill></RiMenu2Fill>
          </span>
          <div
            className="menu-items"
            style={{ display: isMobileMenuOpen ? "flex" : "none" }}
          >
            <Link href="/posts/latest">Latest</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/snippets">Snippets</Link>
          </div>
        </div>
      </header>
      <main>
        <section className="left-container">
          <h2>Recently Published</h2>
          <div className="card">
            <h3>Designing beautiful shadows in css</h3>
            <p>
              When I look around the web, most of the shadows I see are fuzzy
              grey boxes. It doesn't have to be this way, though! CSS gives us
              the tools to create rich, lush, lifelike shadows. In this
              tutorial, I'll show you how.
            </p>
            <a>Readmore</a>
          </div>
        </section>

        <section className="right-container">
          <div className="topcategories-container">
            <h3>Top categories</h3>
            <span>React</span>
            <span>Javascript</span>
          </div>
          <div className="popular-content-container">
            <h3>Popular Content</h3>
            <div>
              <a>An Interactive Guide to CSS Transitions</a>
            </div>
            <div>
              <a>CSS Variables for React Devs</a>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default HomePage;

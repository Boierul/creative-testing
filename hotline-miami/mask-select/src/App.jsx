import './App.scss'
import { useState, useEffect } from 'react';

function App() {
    const masksData = [
        {"name":"Dennis","desc":"Start with knife","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/b/bd/Dennis.png/revision/latest/scale-to-width-down/350?cb=20150311042539"},
        {"name":"Rami","desc":"Extra ammo","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/0/08/Rami.png/revision/latest/scale-to-width-down/350?cb=20150311042733"},
        {"name":"Phil","desc":"French translation","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/2/21/Phil.png/revision/latest/scale-to-width-down/350?cb=20150311042739"},
        {"name":"George","desc":"Look further","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/8/82/Untitled-10.png/revision/latest/scale-to-width-down/350?cb=20150310224737"},
        {"name":"Zack","desc":"Longer combo window","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/e/e1/Zack.png/revision/latest/scale-to-width-down/350?cb=20150311041107"},
        {"name":"Russell","desc":"Raging Bull","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/d/d2/RusselTransparent.png/revision/latest/scale-to-width-down/350?cb=20170318195419"},
        {"name":"Jones","desc":"More gore","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/b/b7/Jones.png/revision/latest/scale-to-width-down/350?cb=20150311042612"},
        {"name":"Irvin","desc":"Start with Nail Gun","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/b/b2/Irvin.png/revision/latest/scale-to-width-down/350?cb=20150321032238"},
        {"name":"Rufus","desc":"Survive one bullet","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/f/fc/Rufus.png/revision/latest/scale-to-width-down/350?cb=20150311041604"},
        {"name":"Louie","desc":"Hard to spot","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/f/f3/Louie.png/revision/latest/scale-to-width-down/350?cb=20150311042618"},
        {"name":"Ted","desc":"Dogs don't attack","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/b/b7/Ted.png/revision/latest/scale-to-width-down/350?cb=20150311042724"},
        {"name":"Rick","desc":"Good shot","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/d/dd/Rick.png/revision/latest/scale-to-width-down/350?cb=20150311042727"},
        {"name":"Rasmus","desc":"An eye for secrets","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/b/b5/Rasmus.png/revision/latest/scale-to-width-down/350?cb=20150311041030"},
        {"name":"Tony","desc":"Fists of Fury (HM1)Killing Punches, No Weapons (HM2)","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/9/9a/Tony.png/revision/latest/scale-to-width-down/350?cb=20150311040943"},
        {"name":"Earl","desc":"Survive two bullets","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/f/f5/Earl.png/revision/latest/scale-to-width-down/350?cb=20150311042548"},
        {"name":"Richter","desc":"Start with silenced uzi (HM1)No ability (HM2)","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/8/88/Untitled-11.png/revision/latest/scale-to-width-down/350?cb=20150310224903"},
        {"name":"Aubrey","desc":"More guns (HM1)No ability (HM2)Start with Double Barrel (HM2 Level Editor)","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/a/a3/Untitled-7.png/revision/latest/scale-to-width-down/350?cb=20150310223858"},
        {"name":"Tony","desc":"Us Special Forces Operative (1985)Unemployed (1991)Vigilante (1991)","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/5/54/TonyFace.png/revision/latest/scale-to-width-down/350?cb=20180602053115"},
        {"name":"Mark","desc":"US Special Forces Operative (1985)Unspecified Job (1991)Vigilante (1991)","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/7/75/MarkFace.png/revision/latest/scale-to-width-down/350?cb=20180602055023"},
        {"name":"Jake","desc":"Killing throws","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/6/6b/Untitled-8.png/revision/latest/scale-to-width-down/350?cb=20150310224404"},
        {"name":"Don Juan","desc":"Lethal doors","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/4/4f/Untitled-9.png/revision/latest/scale-to-width-down/350?cb=20150310224613"},
        {"name":"Graham","desc":"Walk fast","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/8/8e/Graham.png/revision/latest/scale-to-width-down/350?cb=20150311042604"},
        {"name":"Peter","desc":"Quiet gunshots","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/9/91/Peter.png/revision/latest/scale-to-width-down/350?cb=20150311042639"},
        {"name":"Brandon","desc":"Walk faster","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/d/dd/Brandon.png/revision/latest/scale-to-width-down/350?cb=20150311041303"},
        {"name":"Carl","desc":"Start with drill","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/7/71/Carl.png/revision/latest/scale-to-width-down/350?cb=20150311042532"},
        {"name":"Jake","desc":"Killing throws","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/6/6b/Untitled-8.png/revision/latest/scale-to-width-down/350?cb=20150310224404"},
        {"name":"Richter","desc":"Start with silenced uzi (HM1)No ability (HM2)","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/8/88/Untitled-11.png/revision/latest/scale-to-width-down/350?cb=20150310224903"},
        {"name":"Nigel","desc":"Reversed controls","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/7/7f/Nigel.png/revision/latest/scale-to-width-down/350?cb=20150311042659"},
        {"name":"Oscar","desc":"Darkness","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/6/68/Oscar.png/revision/latest/scale-to-width-down/350?cb=20150311042645"},
        {"name":"Richard","desc":"None","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/f/f1/Untitled-3.png/revision/latest/scale-to-width-down/350?cb=20150310222805"},
        {"name":"Alex Davis","desc":"US Special Forces Operative (1985)Unspecified Job (1991)Vigilante (1991)","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/4/4a/AlexUnmasked.png/revision/latest/scale-to-width-down/350?cb=20150320223414"},
        {"name":"Charlie","desc":"More melee weapons.","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/c/c9/Charlie.png/revision/latest/scale-to-width-down/350?cb=20150311041645"},
        {"name":"Corey","desc":"US Special Forces Operative (1985)Unspecified Job (1991)Vigilante (1991)","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/a/a2/CoreyFace.png/revision/latest/scale-to-width-down/350?cb=20180602054424"},
        {"name":"Willem","desc":"Rip and steal","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/f/f9/Willem.png/revision/latest/scale-to-width-down/350?cb=20150311042754"},
        {"name":"Aubrey","desc":"More guns (HM1)No ability (HM2)Start with Double Barrel (HM2 Level Editor)","href":"https://vignette.wikia.nocookie.net/hotline-miami/images/a/a3/Untitled-7.png/revision/latest/scale-to-width-down/350?cb=20150310223858"}
    ];

    const directions = {
        UP: 'UP',
        DOWN: 'DOWN'
    };

    function getWithoutUnit(value) {
        // -3 because of unit 'rem';
        if(!value) {
            return 0;
        }
        return Number(value.substring(0, value.length - 3));
    }

    class Mask extends HTMLElement {
        static get observedAttributes () {
            return ['name', 'href', 'desc'];
        }

        constructor() {
            super();
        }

        connectedCallback() {
            this.template = `
			<div class="mask-item">
				<img class="mask-item__img" src="${this.href}" />
			</div>
		`;

            this.innerHTML = this.template;

            this.elements = {
                image: this.querySelector('img')
            };

            let width = this.elements.image.width;
            let height = this.elements.image.height;

            this.elements.image.height = 144;
            this.elements.image.width = 144 * width / height;
        }

        select () {
            this.elements.image.classList.add('mask-item__img--selected');
        }

        unselect () {
            this.elements.image.classList.remove('mask-item__img--selected');
        }

        get name() { return this.getAttribute('name'); }
        get href() { return this.getAttribute('href'); }
        get desc() { return this.getAttribute('desc'); }
    }
    class MaskList extends HTMLElement {
        constructor(){
            super();

            this.maskItemHeight = getWithoutUnit(getComputedStyle(document.body).getPropertyValue('--mask-item-height'));
            this.selectedMask = 0;
        }

        connectedCallback() {
            this.render();

            this.masks = this.querySelectorAll('mask-item');
            this.masks[this.selectedMask].select();

            this.addEventListeners();

            this.elements = {
                list: this.querySelector('#masks-list'),
            };
        }

        addEventListeners() {
            document.addEventListener('keydown', (e) => {
                if(e.keyCode === 38 && this.selectedMask !== 0) {
                    this.selectMask(directions.UP);
                    this.scrollList(directions.UP);
                } else if(e.keyCode === 40 && this.selectedMask !== this.masks.length - 1) {
                    this.selectMask(directions.DOWN);
                    this.scrollList(directions.DOWN);
                }
            });
        }

        render() {
            let listHtml =
                `<div id="masks-list" class="masks-list">
			${masksData.map((elem, index) => `<mask-item href="${elem.href}"></mask-item>` )}
		 </div>`;

            this.innerHTML = listHtml;
        }

        selectMask(direction) {
            this.masks[this.selectedMask].unselect();
            this.selectedMask += direction === 'UP' ? (-1) : 1;
            this.masks[this.selectedMask].select();
        }

        scrollList(direction) {
            let value = (direction === directions.UP) ? (this.maskItemHeight) : (-this.maskItemHeight);
            let topOffset = getWithoutUnit(this.elements.list.style.top) + value;
            this.elements.list.style.top = `${topOffset}rem`;
        }
    }

    window.customElements.define('mask-item', Mask);
    window.customElements.define('masks-list', MaskList);

    /*
        TODO:
        - text
    */

  return (
    <>
      <div className="crt">
        <masks-list/>
      </div>
      <div className="shadow">
      </div>

      <svg height="0" xmlns="http://www.w3.org/2000/svg">
        <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feOffset dx="8" dy="8" result="offsetblur"/>
          <feFlood flood-color="rgba(0,0,0,0.5)"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </svg>
    </>
  )
}

export default App

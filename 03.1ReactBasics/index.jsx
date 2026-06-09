// React Basics and other things (part - 2)

// 1. npm init  -> to initialize npm
// 2. npm install react -> to install react 
// 3. npm install react-dom -> to install react-dom
// 4. npm install -D vite -> to install vite
// 5. npx vite (or) npm run dev -> To run your code on localhost
// 6. npm run build -> To make your code production ready
// 7. npm create vite@latest -> Ye sara set up ek command mein karne ke Liye
// 8. (IMP) npm run build -> Apne code ko production ready banane ke liye

// Jab ye saara se up manually karo to package.json ke script attribute mein manually "build", "dev" etc likhna padta hai



// dependencises: isme vah files hoti hai jis par hamara code depend karta hai, deveplopment and production dono ke time par

// dev-dependencies: isme vah files hoti hai jis par hamara code depend hota hai but keval development ke time par, producrtion ke time par nahi

// npm mein ham apna code publish bhi kar sakte hai and existing code ko install karke use bhi kar sakte hai


// Version: 

// example: ^19.2.0

// 0 -> ye patch update ka portion hai means, ham jis code ko reuse kar rahe the uske kisi bug fix kiya gaya hai
        // 19.2.1

// 2 -> ye minor update ka portion hai means, ham jis code ko reuse kar rahe hai usme kisi completly new feature ko addon kiya 
        // 19.3.0

// 19 -> ye major update ka portion hai means, ham jis code ko reuse kar rahe hai uske kisi existing feature mein changes kiye ho
        // 20.0.0

// ^ -> ye carrot hai, ye iss chij ko confirm karta hai ki ham jis code ko reuse kar rahe hai uske minor update tak ke portion ko hi hamara code accept karega, major update ko accept nahi karega

// ~ -> ye tilt sign hai, ye iss chij ko confirm karta hai ki ham jis code ko reuse kar rahe hai uske keval patch update ko hi accept karega baki ko nahi


// Minor update tak hi accept kyu ?

// -> Kyuki ham jis code ko reuse kar rahe hai uske present code ko hi use kar rahe hai agar koi uske existance code ko change karta hai and ham voh accept kar lete hai to hamara code phatna start ho jayega kyuki hamne jis code ke according apna code likha vahi change ho chuka hai


// package.json -> pure package ka track rakhta jiski help se ham apna code likh rahe hai

// package-lock.json -> ye unn files ka exact version, link and hash rakhta hai jis version ki files ka reuse karke hamne apna code likha hai

// hash -> ye ek unique code hota hai kisi program ya code ke liye, Agar uss program mein ek bit ka change hota hai, to pura ka pura hash regenrate ho jayega


// node_modeules -> ye bahut heavy hoti hai, inhe production mein deploy nahi kiya jata, even inhe delete bhi kar de to wapas laya ja sakta hai

// npm install (or) npm i -> isse node_modules ko install kar sakte hai
                //           -> iss command se sabse pahle ye dekha jata hai package.json mein ki kya kya use hua hai
                //              -> then package-lock.json mein dekhte hai ki un files ko aur un files ka exact version download karte hai jis version se reuse ho kar hamara code bana tha


//                      -> Agar ham package-lock.json ko bhi delete kar de tab bhi node_modules install ho jayenge 
//                      -> iss command se voh pahle package.json par jayega jo files hamne apne code mein reuse ki hai unhe dekhega 
//                      -> package-lock.json ko find karega, jab package-lock.json nahi milega
//                      -> to vah un reuse files ka latest vah version ki file dega jaha tak voh accept karta hai carrot ya tilt sign ke according



// ReactDOM ko import karane ke liye file mein sabse upar
import {createRoot} from 'react-dom/client';           // isse reactDOM ke andar ka createRoot directly access karne ke liye mil jayega
import React from 'react';

const element = <h1>hii</h1>
// Agar ham apne code mein jsx use kar rahe hai to ye vite ko batana padega, .jsx extension lagakar ki ham jsx ka use kar rahe hai apne code mein

const root = createRoot(document.getElementById("root"))

root.render(element);


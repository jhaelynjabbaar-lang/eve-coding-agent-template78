// Public lore only. This page never invokes the agent or requests wallet access.
export const memoceoPage = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#10120f">
<title>MEMOCEO — We Build It</title>
<meta name="description" content="Enter the MEMOCEO universe: the origin, worlds, characters, and NFT vision of an empire being built in real time.">
<style>
:root{color-scheme:dark;--ink:#10120f;--paper:#e9e5d9;--muted:#b0b0a0;--gold:#d6b774;--line:#3a3d31}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:30px}
body{margin:0;background:var(--ink);color:var(--paper);font:16px/1.65 Arial,Helvetica,sans-serif}
a{color:inherit;text-underline-offset:5px}
a:focus-visible,summary:focus-visible{outline:2px solid var(--gold);outline-offset:6px}
.skip{position:absolute;top:-80px;left:20px;background:var(--paper);color:var(--ink);padding:10px;z-index:3}
.skip:focus{top:10px}
.wrap{max-width:1320px;margin:auto;padding:0 5%}
header{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:28px 0;border-bottom:1px solid var(--line)}
.wordmark{font-size:21px;letter-spacing:.12em;font-weight:800;text-decoration:none}
nav{display:flex;flex-wrap:wrap;gap:26px;font-size:12px;text-transform:uppercase;letter-spacing:.12em}
nav a{text-decoration:none;color:var(--muted)}
nav a:hover{color:var(--gold)}
.eyebrow,.number,.section-label{font-size:11px;text-transform:uppercase;letter-spacing:.2em;color:var(--gold)}
.hero{padding:100px 0 80px;position:relative;overflow:hidden}
.hero:after{content:"M";font:480px/.8 Georgia,serif;position:absolute;right:-24px;top:100px;color:#d6b7740a;pointer-events:none;z-index:-1}
h1{max-width:960px;font-size:clamp(42px,7.6vw,104px);line-height:.99;font-weight:500;letter-spacing:-.05em;margin:30px 0}
h1 em{font-family:Georgia,serif;font-weight:400;color:var(--gold)}
.hero-copy{max-width:570px;color:var(--muted);font-size:18px}
.actions{display:flex;flex-wrap:wrap;align-items:center;gap:28px;margin-top:36px}
.button{background:var(--gold);color:var(--ink);padding:13px 23px;text-decoration:none;font-size:12px;letter-spacing:.07em;text-transform:uppercase;font-weight:bold}
.text-link{font-size:13px}
.chapter-line{border-top:1px solid var(--line);padding:17px 0;display:flex;justify-content:space-between;gap:15px;color:var(--muted);font-size:10px;text-transform:uppercase;letter-spacing:.18em}
.section{padding:80px 0;border-top:1px solid var(--line)}
.split{display:grid;grid-template-columns:1fr 1.3fr;gap:8%}
h2{font:400 clamp(32px,4vw,52px)/1.12 Georgia,serif;margin:18px 0 30px;letter-spacing:-.025em}
h3{font:400 26px/1.2 Georgia,serif;margin:23px 0 12px}
p{margin:0 0 20px}
.copy{color:var(--muted)}
.copy .lead{font-size:24px;color:var(--paper);font-family:Georgia,serif}
.motto{border-left:2px solid var(--gold);padding-left:22px;margin:32px 0 0;font-size:18px;color:var(--paper)}
.pillars{display:grid;grid-template-columns:repeat(4,1fr);gap:25px;margin-top:65px}
.pillar{border-top:1px solid var(--line);padding-top:20px}
.pillar p{font-size:14px;color:var(--muted)}
.section-intro{max-width:620px;color:var(--muted)}
.worlds{display:grid;grid-template-columns:repeat(3,1fr);gap:38px 25px;margin-top:35px}
.world-art{aspect-ratio:1.15;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:20px;border:1px solid #66634b;background:radial-gradient(ellipse at 50% 60%,#333628,#171a14 74%)}
.world-art span{font-size:9px;letter-spacing:.2em;color:var(--gold)}
.world-art svg{height:65%;width:65%;fill:none;stroke:var(--gold);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}
.world p{font-size:14px;color:var(--muted)}
.world .tagline{color:var(--paper);margin-bottom:9px}
details{border-top:1px solid var(--line)}
details:last-child{border-bottom:1px solid var(--line)}
summary{cursor:pointer;display:flex;align-items:center;gap:24px;list-style:none;padding:25px 0;font:25px/1.3 Georgia,serif}
summary::-webkit-details-marker{display:none}
.role{margin-left:auto;font:10px Arial,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
.plus{font:24px Arial,sans-serif;color:var(--gold)}
details[open] .plus{transform:rotate(45deg)}
details p{padding:0 35px 8px 42px;color:var(--muted);max-width:600px}
.nft-panel{padding:40px;background:#1c2018;border:1px solid #595e43}
.status{display:inline-block;border:1px solid #6b6e53;color:var(--gold);padding:5px 12px;font-size:10px;letter-spacing:.14em;text-transform:uppercase}
.nft-panel ul{padding-left:20px;color:var(--muted)}
.nft-panel li{padding:5px 0}
.notice{font-size:13px;color:var(--muted);border-top:1px solid var(--line);padding-top:20px;margin-top:25px}
.closing{padding:70px 0;text-align:center;border-top:1px solid var(--line)}
.closing p{font:italic clamp(30px,5vw,64px)/1.2 Georgia,serif;color:var(--gold)}
footer{border-top:1px solid var(--line);padding:25px 0 35px;display:flex;justify-content:space-between;gap:20px;font-size:11px;color:var(--muted)}
@media(max-width:800px){.split{grid-template-columns:1fr;gap:25px}
.worlds{grid-template-columns:repeat(2,1fr)}
.pillars{grid-template-columns:repeat(2,1fr)}
.hero{padding-top:65px}
header{align-items:flex-start;flex-direction:column}
nav{gap:20px}
.section{padding:55px 0}
.nft-panel{padding:25px}
}
@media(max-width:480px){.worlds{grid-template-columns:1fr}
.role{display:none}
summary{font-size:23px;gap:15px}
.hero-copy{font-size:16px}
.chapter-line{font-size:9px}
.pillars{gap:15px}
footer{flex-direction:column}
.wrap{padding:0 6%}
}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}
}

</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="wrap">
<header>
<a class="wordmark" href="#main" aria-label="MEMOCEO home">MEMOCEO<span style="color:var(--gold)">.</span>
</a>
<nav aria-label="Main navigation">
<a href="#origin">Origin</a>
<a href="#worlds">Worlds</a>
<a href="#characters">Characters</a>
<a href="#nfts">NFT vision</a>
</nav>
</header>
<main id="main">
<section class="hero" aria-labelledby="hero-title">
<span class="eyebrow">The living record of an empire</span>
<h1 id="hero-title">WE DON’T CHASE<br>THE EMPIRE.<br>
<em>WE BUILD IT.</em>
</h1>
<p class="hero-copy">Every empire begins as a quiet obsession. MEMOCEO documents the rise — from nothing to something that cannot be ignored.</p>
<div class="actions">
<a class="button" href="#worlds">Explore the worlds ↗</a>
<a class="text-link" href="#origin">Read the origin ↓</a>
</div>
</section>
<div class="chapter-line">
<span>Chapter 01 — The foundation</span>
<span>A universe in the making</span>
</div>
<section id="origin" class="section">
<div class="split">
<div>
<span class="section-label">01 / The origin</span>
<h2>Before the empire,<br>there was a decision.</h2>
</div>
<div class="copy">
<p class="lead">Every empire begins as a quiet obsession.</p>
<p>Before the cars, before the mansions, before the private jets and the rooms that only open for a select few — there was only a vision. A refusal to accept an ordinary life. A decision that wealth would not be chased… it would be constructed, piece by piece, with intent.</p>
<p>That decision became MEMOCEO.</p>
<p>MEMOCEO is not a brand. It is the living record of an empire being built in real time. Every chapter, every drop, every character, and every world exists to document the rise — from nothing to something that cannot be ignored.</p>
<p class="motto">The motto is not a slogan. It is law:<br>WE DON’T CHASE THE EMPIRE. WE BUILD IT.</p>
</div>
</div>
<div style="margin-top:65px">
<span class="section-label">The philosophy of the empire</span>
<p class="section-intro" style="margin-top:18px">Most people spend their lives running after symbols of success. MEMOCEO exists for those who choose to become the source of those symbols.</p>
</div>
<div class="pillars">
<article class="pillar">
<span class="number">01</span>
<h3>Ambition</h3>
<p>The refusal to stay small.</p>
</article>
<article class="pillar">
<span class="number">02</span>
<h3>Wealth</h3>
<p>Not as the goal, but as the tool.</p>
</article>
<article class="pillar">
<span class="number">03</span>
<h3>Power</h3>
<p>The ability to move without asking permission.</p>
</article>
<article class="pillar">
<span class="number">04</span>
<h3>Legacy</h3>
<p>What remains when the noise fades.</p>
</article>
</div>
<p class="section-intro">Everything inside the MEMOCEO universe serves these pillars.</p>
</section>
<section id="worlds" class="section">
<span class="section-label">02 / The worlds</span>
<h2>One empire. Many expressions.</h2>
<p class="section-intro">Interconnected worlds, each representing a different expression of power and taste. These worlds expand over time. New domains can be introduced as the empire grows.</p>
<div class="worlds">
<article class="world">
<div class="world-art">
<span>01 / DOMAIN</span>
<svg viewBox="0 0 136 136" aria-hidden="true">
<path d="M20 66 L36 42 H93 L116 66 M12 66 H124 V85 H12 Z M36 42 L47 26 H79 L93 42 M32 85 A10 10 0 1 0 52 85 M89 85 A10 10 0 1 0 109 85"/>
</svg>
<span>MEMOCEO UNIVERSE</span>
</div>
<h3>The Garage</h3>
<p class="tagline">Machines of status.</p>
<p>Limited editions. Impossible specs. Vehicles that signal arrival.</p>
</article>
<article class="world">
<div class="world-art">
<span>02 / DOMAIN</span>
<svg viewBox="0 0 136 136" aria-hidden="true">
<path d="M20 101 V43 L68 18 L116 43 V101 Z M43 101 V58 H93 V101 M57 101 V77 H79 V101 M12 101 H124"/>
</svg>
<span>MEMOCEO UNIVERSE</span>
</div>
<h3>The Estate</h3>
<p class="tagline">Architecture as a statement.</p>
<p>Private residences, compounds, and architectural statements. Homes that are not lived in… they are ruled from.</p>
</article>
<article class="world">
<div class="world-art">
<span>03 / DOMAIN</span>
<svg viewBox="0 0 136 136" aria-hidden="true">
<path d="M68 12 L77 55 L122 79 V88 L76 75 L74 100 L89 109 V115 L68 109 L47 115 V109 L62 100 L60 75 L14 88 V79 L59 55 Z"/>
</svg>
<span>MEMOCEO UNIVERSE</span>
</div>
<h3>The Sky</h3>
<p class="tagline">Movement without limits.</p>
<p>Private aviation, global movement, and the freedom to disappear or appear at will.</p>
</article>
<article class="world">
<div class="world-art">
<span>04 / DOMAIN</span>
<svg viewBox="0 0 136 136" aria-hidden="true">
<path d="M44 25 L57 18 Q68 32 79 18 L92 25 L116 56 L95 72 L86 59 V109 H50 V59 L41 72 L20 56 Z"/>
</svg>
<span>MEMOCEO UNIVERSE</span>
</div>
<h3>The Atelier</h3>
<p class="tagline">Personal armor.</p>
<p>Fashion, objects, clothing, and accessories that mark belonging to the inner circle.</p>
</article>
<article class="world">
<div class="world-art">
<span>05 / DOMAIN</span>
<svg viewBox="0 0 136 136" aria-hidden="true">
<path d="M38 114 V25 Q68 -2 98 25 V114 M53 114 V36 Q68 17 83 36 V114 M72 75 H76 M23 114 H113"/>
</svg>
<span>MEMOCEO UNIVERSE</span>
</div>
<h3>The Experience</h3>
<p class="tagline">Some doors open only once.</p>
<p>Invitation-only moments. Dinners that never appear on social media. Rooms that only open once.</p>
</article>
</div>
<p class="notice">Original concept emblems illustrate the lore. These are not minted NFTs or final collection artwork.</p>
</section>
<section id="characters" class="section">
<div class="split">
<div>
<span class="section-label">03 / The characters</span>
<h2>Every rise<br>has its architects.</h2>
<p class="section-intro">Original characters embody different aspects of the rise. Their stories are envisioned across NFTs, short films, animations, and story drops. Over time, the community helps shape their paths.</p>
<p class="eyebrow">Select a character to discover their role</p>
</div>
<div>
<details>
<summary>
<span class="number">01</span>
<span>The Architect</span>
<span class="role">Vision</span>
<span class="plus" aria-hidden="true">+</span>
</summary>
<p>The visionary who sees the finished empire before the first brick is laid.</p>
</details>
<details>
<summary>
<span class="number">02</span>
<span>The Executor</span>
<span class="role">Action</span>
<span class="plus" aria-hidden="true">+</span>
</summary>
<p>The one who turns vision into structure, deals, and results.</p>
</details>
<details>
<summary>
<span class="number">03</span>
<span>The Curator</span>
<span class="role">Taste</span>
<span class="plus" aria-hidden="true">+</span>
</summary>
<p>Guardian of taste, exclusivity, and what is allowed inside the circle.</p>
</details>
<details>
<summary>
<span class="number">04</span>
<span>The Heir</span>
<span class="role">Continuity</span>
<span class="plus" aria-hidden="true">+</span>
</summary>
<p>The next generation. Proof that the empire is designed to outlive its founders.</p>
</details>
<details>
<summary>
<span class="number">05</span>
<span>The Outsider</span>
<span class="role">Ascent</span>
<span class="plus" aria-hidden="true">+</span>
</summary>
<p>Those who start with nothing and earn their place. The most respected path inside MEMOCEO.</p>
</details>
</div>
</div>
</section>
<section id="nfts" class="section">
<div class="split">
<div>
<span class="section-label">04 / Proof of participation</span>
<h2>Not just a collectible.<br>A place in the story.</h2>
<p class="section-intro">MEMOCEO NFTs are envisioned as proof of participation in the building of the empire. Some represent key moments in its history. Others represent access, status, or unfinished chapters still being written.</p>
</div>
<div class="nft-panel">
<span class="status">In development · Mint not open</span>
<h3>The foundation is being built.</h3>
<p>The vision for future holders:</p>
<ul>
<li>Be documented as part of the early foundation.</li>
<li>Gain access to expanding worlds and experiences.</li>
<li>Help influence which domains grow next.</li>
<li>Become part of the permanent record of the rise.</li>
</ul>
<p class="notice">These are planned concepts, not currently available benefits or guarantees. No collection or smart contract has been launched through this page. Network, supply, pricing, artwork, and access terms are still to be defined.</p>
<p class="notice">Wallet connection, minting, purchases, and holder verification are not enabled. No payment or wallet signature is requested.</p>
</div>
</div>
</section>
<section class="closing" aria-label="Our motto">
<span class="eyebrow">Ambition / Wealth / Power / Legacy</span>
<p>The empire is still being written.</p>
<a class="text-link" href="#main">Back to the beginning ↑</a>
</section>
</main>
<footer>
<span>MEMOCEO — A living record.</span>
<span>Lore &amp; collection concept · No live NFT sale</span>
</footer>
</div>
</body>
</html>`;

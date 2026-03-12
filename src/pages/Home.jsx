import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

var C = {
  bg: "#FDFAF3", card: "#FFFFFF", gold: "#C9A96E", goldDark: "#A0834A",
  goldLight: "#F0E6D2", goldVL: "#F8F3EA", text: "#3C3422", muted: "#8C7E6A",
  border: "#E8DFD0", ok: "#6B8E5B", danger: "#C45B4A", cream: "#FFF9EE"
};
var F = { h: "'Cormorant Garamond', serif", b: "'Nunito Sans', sans-serif" };

function Sec(props) {
  return <div style={{ padding: "80px 24px", background: props.bg || "transparent", ...(props.extra || {}) }}><div style={{ maxWidth: 880, margin: "0 auto" }}>{props.children}</div></div>;
}
function Lbl(props) {
  return <div style={{ fontFamily: F.b, fontSize: 12, textTransform: "uppercase", letterSpacing: ".15em", color: props.color || C.gold, marginBottom: 16 }}>{props.children}</div>;
}
function Ttl(props) {
  return <div style={{ fontFamily: F.h, fontSize: "clamp(28px,5vw,42px)", fontWeight: 300, color: C.text, lineHeight: 1.2, marginBottom: 20, textAlign: props.center ? "center" : "left" }}>{props.children}</div>;
}
function P(props) {
  return <div style={{ fontFamily: F.b, fontSize: 16, color: C.muted, lineHeight: 1.8, marginBottom: 16, ...(props.style || {}) }}>{props.children}</div>;
}
function Crd(props) {
  return <div style={{ background: C.card, borderRadius: 20, padding: 32, border: "1px solid " + C.border, ...(props.style || {}) }}>{props.children}</div>;
}
function Btn(props) {
  return <div onClick={props.onClick} style={{ display: "inline-block", fontFamily: F.b, fontSize: 15, fontWeight: 500, padding: "14px 36px", background: props.gold ? C.gold : "transparent", color: props.gold ? "#fff" : C.gold, border: props.gold ? "none" : "2px solid " + C.gold, borderRadius: 50, cursor: "pointer", boxShadow: props.gold ? "0 4px 20px rgba(201,169,110,.3)" : "none", ...(props.style || {}) }}>{props.children}</div>;
}

export default function Home() {
  var navigate = useNavigate();
  var cRef = useRef(null);
  var pRef = useRef(null);
  var ss = useState(false); var sent = ss[0]; var setSent = ss[1];
  var fs = useState({n:"",e:"",a:"",q1:"",q2:""}); var fm = fs[0]; var setFm = fs[1];
  function go(r) { if(r&&r.current) r.current.scrollIntoView({behavior:"smooth"}); }
  function upd(k,v) { setFm(function(p){ var o={}; for(var x in p) o[x]=p[x]; o[k]=v; return o; }); }
  var ok = fm.n.length > 0 && fm.e.length > 0;
  var ist = { fontFamily:F.b, fontSize:15, padding:"14px 18px", border:"2px solid "+C.border, borderRadius:14, background:C.card, color:C.text, outline:"none", width:"100%" };

  return (
    <div style={{ fontFamily: F.b, background: C.bg, color: C.text }}>
      <style>{"@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;1,6..12,300;1,6..12,400&display=swap');*{margin:0;padding:0;box-sizing:border-box}body{background:#FDFAF3}::selection{background:#F0E6D2;color:#3C3422}input{font-family:'Nunito Sans',sans-serif}"}</style>

      <div style={{position:"sticky",top:0,zIndex:100,background:"rgba(253,250,243,.95)",borderBottom:"1px solid "+C.border,padding:"12px 24px"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontFamily:F.h,fontSize:22,fontWeight:500,color:C.goldDark}}>MAIKIDO</div>
          <div style={{display:"flex",gap:20,alignItems:"center"}}>
            <div onClick={function(){navigate("/mihan")}} style={{fontFamily:F.b,fontSize:13,color:C.muted,cursor:"pointer"}}>{"Kalkulačka"}</div>
            <div onClick={function(){go(pRef)}} style={{fontFamily:F.b,fontSize:13,color:C.muted,cursor:"pointer"}}>{"Program"}</div>
            <div onClick={function(){go(cRef)}} style={{fontFamily:F.b,fontSize:13,color:C.muted,cursor:"pointer"}}>{"Kontakt"}</div>
            <Btn onClick={function(){go(cRef)}} gold style={{padding:"10px 24px",fontSize:13}}>{"Chci vědět víc"}</Btn>
          </div>
        </div>
      </div>

      <div style={{minHeight:"92vh",display:"flex",alignItems:"center",padding:"80px 24px",background:"linear-gradient(170deg,#FDFAF3 0%,#F8F3EA 50%,#FDFAF3 100%)"}}>
        <div style={{maxWidth:880,margin:"0 auto",display:"grid",gridTemplateColumns:"1.2fr 0.8fr",gap:48,alignItems:"center"}}>
          <div>
            <Lbl>Money Aikido</Lbl>
            <div style={{fontFamily:F.h,fontSize:"clamp(32px,5.5vw,52px)",fontWeight:300,color:C.text,lineHeight:1.15,marginBottom:24}}>{"Vyděláváš. Investuješ. A přesto cítíš, že se cílová páska posouvá."}</div>
            <div style={{fontFamily:F.h,fontSize:"clamp(20px,3vw,28px)",fontWeight:500,color:C.gold,lineHeight:1.3,marginBottom:24}}>{"Nejsi špatný investor. Hraješ hru, jejíž pravidla nevidíš."}</div>
            <P style={{fontSize:16,maxWidth:480}}>{"MAIKIDO je vzdělávací systém pro podnikatele, kteří chtějí rozumět penězům — ne jen je vydělávat."}</P>
            <div style={{display:"flex",gap:16,marginTop:32,flexWrap:"wrap"}}>
              <Btn onClick={function(){navigate("/mihan")}} gold>{"Zjisti svou skutečnou inflaci"}</Btn>
              <Btn onClick={function(){go(cRef)}}>{"30min rozhovor zdarma"}</Btn>
            </div>
            <div style={{fontFamily:F.b,fontSize:13,color:C.muted,marginTop:24}}>{"18 let praxe | 200+ konzultací | Žádný finanční produkt k prodeji"}</div>
            <div style={{fontFamily:F.h,fontSize:15,color:C.goldDark,marginTop:16,fontStyle:"italic",opacity:0.5}}>{"Úhel pohledu tvoří realitu."}</div>
          </div>
          <div style={{borderRadius:24,overflow:"hidden",aspectRatio:"3/4",background:C.goldLight}}>
            <img src="/photo-hero.jpg" alt="MAIKIDO" style={{width:"100%",height:"100%",objectFit:"cover"}} />
          </div>
        </div>
      </div>

      <Sec bg={C.card}>
        <Lbl>{"Problém, který nevidíš"}</Lbl>
        <Ttl><span>{"Čísla na účtu rostou. Kupní síla klesá. "}</span><span style={{color:C.gold}}>{"A nikdo ti to neřekne, protože z toho profituje."}</span></Ttl>
        <P>{"Oficiální inflace 2–3 %? Podívej se na ceny nemovitostí, jídla, škol, dovolené, zdravotní péče. To není 3 %."}</P>
        <P style={{color:C.text}}>{"Reálná inflace pro podnikatele s aktivy 3–20 milionů je "}<strong>{"6–10 % ročně"}</strong>{". A to změní všechno."}</P>
        <Crd style={{background:"linear-gradient(135deg,#F8F3EA,#FFF9EE)",border:"2px solid "+C.gold,textAlign:"center",margin:"32px 0"}}>
          <P style={{color:C.text,fontSize:17,marginBottom:8}}>{"Majetek "}<strong>{"10 mil. Kč"}</strong>{". Reálná inflace 7 %. Za 5 let:"}</P>
          <div style={{fontFamily:F.h,fontSize:"clamp(36px,6vw,56px)",fontWeight:500,color:C.danger,margin:"16px 0"}}>{"6,1 mil. Kč"}</div>
          <P style={{marginBottom:0}}>{"kupní síly. Ztratils 3,9 mil. — aniž by ses pohnul."}</P>
        </Crd>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,marginTop:40}}>
          <Crd style={{textAlign:"center"}}><div style={{fontFamily:F.h,fontSize:28,fontWeight:500,color:C.danger}}>{"Pod 7 %"}</div><div style={{fontFamily:F.b,fontSize:14,fontWeight:600,color:C.danger,marginBottom:8}}>{"= ztráta"}</div><P style={{fontSize:14,marginBottom:0}}>{"Tvůj majetek se reálně zmenšuje"}</P></Crd>
          <Crd style={{textAlign:"center"}}><div style={{fontFamily:F.h,fontSize:28,fontWeight:500,color:C.gold}}>{"7 %"}</div><div style={{fontFamily:F.b,fontSize:14,fontWeight:600,color:C.gold,marginBottom:8}}>{"= šlapeš vodu"}</div><P style={{fontSize:14,marginBottom:0}}>{"Držíš kupní sílu, ale nerosteš"}</P></Crd>
          <Crd style={{textAlign:"center"}}><div style={{fontFamily:F.h,fontSize:28,fontWeight:500,color:C.ok}}>{"Nad 7 %"}</div><div style={{fontFamily:F.b,fontSize:14,fontWeight:600,color:C.ok,marginBottom:8}}>{"= skutečný zisk"}</div><P style={{fontSize:14,marginBottom:0}}>{"Teprve tady začínáš bohatnout"}</P></Crd>
        </div>
        <div style={{marginTop:40,textAlign:"center"}}>
          <P style={{fontSize:17,color:C.text}}>{"Většina podnikatelů dře v "}<strong>{"mikru"}</strong>{" — jak vydělat víc, jak ušetřit."}</P>
          <P style={{fontSize:17,color:C.text}}>{"Skutečně bohatí hrají "}<strong style={{color:C.gold}}>{"makro"}</strong>{" — kam teče kapitál, jak fungují aktiva a dluh."}</P>
          <div style={{fontFamily:F.h,fontSize:24,color:C.goldDark,marginTop:24,fontStyle:"italic"}}>{"MAIKIDO tě naučí hrát makro."}</div>
        </div>
      </Sec>

      <Sec>
        <Lbl>{"Co ti nikdo neřekne"}</Lbl>
        <Ttl>{"5 mýtů, které stojí české podnikatele miliony"}</Ttl>
        {[
          ["1","Nemovitost je bezstarostná jistota.","Rostoucí náklady, byrokracie, rizika s nájemníky. Pasivní příjem se mění na aktivní správu. A vše v jedné zemi, jednom sektoru, jedné měně."],
          ["2","Když budu mít X milionů, budu konečně svobodný.","Inflace neustále posouvá tuto metu. Cílová páska na gumičce. A nikdo ti neřekl, že se posouvá."],
          ["3","Můj finanční poradce se stará o mé blaho.","Poradci profitují z provizí za produkty. Jejich incentiv není tvoje svoboda — je to prodej dalších nástrojů."],
          ["4","Diverzifikace do 5 bytů mě ochrání.","5 bytů v jedné zemi, jednom sektoru, jedné měně není diverzifikace. Je to koncentrace s iluzí bezpečí."],
          ["5","Tvrdá práce ve firmě vyřeší vše.","Bez správné alokace zisků inflace a špatné investice požírají vydělané peníze. Dření ve firmě už nestačí k udržení bohatství."]
        ].map(function(m){return(
          <Crd key={m[0]} style={{padding:"24px 28px",marginBottom:16}}>
            <div style={{display:"flex",gap:16,alignItems:"flex-start"}}>
              <div style={{fontFamily:F.h,fontSize:28,fontWeight:500,color:C.danger,minWidth:32}}>{m[0]}</div>
              <div><div style={{fontFamily:F.b,fontSize:16,fontWeight:600,color:C.text,marginBottom:6}}>{m[1]}</div><P style={{fontSize:14,marginBottom:0}}>{m[2]}</P></div>
            </div>
          </Crd>
        )})}
        <div style={{textAlign:"center",marginTop:32}}><Btn onClick={function(){navigate("/mihan")}} gold>{"Zjisti, jak na tom jsi ty — spusť kalkulačku"}</Btn></div>
      </Sec>

      <Sec bg="linear-gradient(135deg,#3C3422,#554A3A)" extra={{textAlign:"center"}}>
        <Lbl color={C.gold}>{"Bezplatný nástroj"}</Lbl>
        <div style={{fontFamily:F.h,fontSize:"clamp(28px,5vw,42px)",fontWeight:300,color:C.goldLight,marginBottom:12}}>{"Kolik tě stojí NIC nedělat?"}</div>
        <P style={{color:"rgba(255,255,255,.7)",maxWidth:520,margin:"0 auto 32px"}}>{"Zjisti svou skutečnou osobní inflaci během 5 minut. Ne tu, kterou ti říká statistický úřad — ale tu, která reálně ovlivňuje tvůj život."}</P>
        <Btn onClick={function(){navigate("/mihan")}} gold style={{fontSize:17,padding:"18px 48px"}}>{"Spustit kalkulačku MIHAN"}</Btn>
        <P style={{color:"rgba(255,255,255,.35)",fontSize:12,marginTop:16,marginBottom:0}}>{"Žádné údaje nikam neposíláme. Vše běží ve tvém prohlížeči."}</P>
      </Sec>

      <Sec>
        <Lbl>{"Proč MAIKIDO"}</Lbl>
        <Ttl><span>{"Neříkáme ti, kam dát peníze. "}</span><span style={{color:C.gold}}>{"Ukážeme ti, v jakém systému existují."}</span></Ttl>
        <P style={{fontSize:17}}>{"MAIKIDO je jediný vzdělávací systém v ČR, který staví most mezi fiat gramotností a bitcoin gramotností. Dodává transformaci vnímání, ne jen informace. Podporuje nezávislost klienta, ne závislost na systému."}</P>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,margin:"40px 0"}}>
          <Crd style={{textAlign:"center",background:C.goldVL,borderColor:C.gold}}><div style={{fontFamily:F.h,fontSize:22,fontWeight:500,color:C.goldDark,marginBottom:8}}>{"Kupní síla"}</div><P style={{fontSize:14,marginBottom:0}}>{"Chápat peníze a vlastnit správná aktiva"}</P></Crd>
          <Crd style={{textAlign:"center",background:C.goldVL,borderColor:C.gold}}><div style={{fontFamily:F.h,fontSize:22,fontWeight:500,color:C.goldDark,marginBottom:8}}>{"Svoboda"}</div><P style={{fontSize:14,marginBottom:0}}>{"Flexibilita, suverenita, možnosti volby"}</P></Crd>
          <Crd style={{textAlign:"center",background:C.goldVL,borderColor:C.gold}}><div style={{fontFamily:F.h,fontSize:22,fontWeight:500,color:C.goldDark,marginBottom:8}}>{"Příjmy"}</div><P style={{fontSize:14,marginBottom:0}}>{"Z aktiv, ne aktivity. Hodnota, ne čas."}</P></Crd>
        </div>
      </Sec>

      <Sec bg={C.card}>
        <Lbl>{"Pro koho (a pro koho ne)"}</Lbl>
        <Ttl>{"Vědomý tvůrce."}</Ttl>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:40}}>
          <div>
            <div style={{fontFamily:F.b,fontSize:14,fontWeight:600,color:C.ok,marginBottom:16}}>{"ANO — jsi tu správně, pokud:"}</div>
            <P style={{fontSize:15,marginBottom:8}}>{"✓ Podnikáš a máš majetek 3–20 mil. Kč"}</P>
            <P style={{fontSize:15,marginBottom:8}}>{"✓ Investuješ, ale cítíš, že ti něco uniká"}</P>
            <P style={{fontSize:15,marginBottom:8}}>{"✓ Chceš rozumět systému, ne jen kam dát peníze"}</P>
            <P style={{fontSize:15,marginBottom:8}}>{"✓ Jsi ochoten zpochybnit své předpoklady"}</P>
            <P style={{fontSize:15,marginBottom:8}}>{"✓ Hledáš pochopení, ne další investiční tip"}</P>
          </div>
          <div>
            <div style={{fontFamily:F.b,fontSize:14,fontWeight:600,color:C.danger,marginBottom:16}}>{"NE — nehledej tu:"}</div>
            <P style={{fontSize:15,marginBottom:8}}>{"✗ Tipy na akcie nebo fond"}</P>
            <P style={{fontSize:15,marginBottom:8}}>{"✗ Rychlý zisk bez pochopení"}</P>
            <P style={{fontSize:15,marginBottom:8}}>{"✗ Finančního poradce, který to zařídí za tebe"}</P>
            <P style={{fontSize:15,marginBottom:8}}>{"✗ Potvrzení, že děláš vše správně"}</P>
          </div>
        </div>
      </Sec>

      <div ref={pRef}><Sec>
        <Lbl>{"Program LEADER"}</Lbl>
        <Ttl><span>{"Od nevědomí k jasnosti. Od jasnosti ke strategii. "}</span><span style={{color:C.gold}}>{"Od strategie ke svobodě."}</span></Ttl>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,margin:"32px 0"}}>
          <Crd style={{background:C.goldVL}}>
            <div style={{fontFamily:F.b,fontSize:14,fontWeight:600,color:C.muted,marginBottom:4}}>{"PŘED"}</div>
            <div style={{fontFamily:F.h,fontSize:20,color:C.text,marginBottom:16,fontStyle:"italic"}}>{"Mně se daří, ne?"}</div>
            <P style={{fontSize:14,marginBottom:4}}>{"• Sleduje čísla na účtu, ne kupní sílu"}</P>
            <P style={{fontSize:14,marginBottom:4}}>{"• Vše v nemovitostech = jistota"}</P>
            <P style={{fontSize:14,marginBottom:4}}>{"• Cílová páska se posouvá, furt maká"}</P>
            <P style={{fontSize:14,marginBottom:4}}>{"• Tuší, že mu něco uniká, ale neví co"}</P>
          </Crd>
          <Crd style={{background:C.cream,borderColor:C.gold}}>
            <div style={{fontFamily:F.b,fontSize:14,fontWeight:600,color:C.ok,marginBottom:4}}>{"PO"}</div>
            <div style={{fontFamily:F.h,fontSize:20,color:C.text,marginBottom:16,fontStyle:"italic"}}>{"Teď vidím, jak to funguje."}</div>
            <P style={{fontSize:14,marginBottom:4}}>{"✓ Rozumí silám finančního systému"}</P>
            <P style={{fontSize:14,marginBottom:4}}>{"✓ Má strategii a víru v dlouhodobý plán"}</P>
            <P style={{fontSize:14,marginBottom:4}}>{"✓ BTC v self-custody, DCA nastavené"}</P>
            <P style={{fontSize:14,marginBottom:4}}>{"✓ Lehkost, klid a chuť vědět víc"}</P>
          </Crd>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,margin:"32px 0"}}>
          <Crd>
            <div style={{fontFamily:F.b,fontSize:13,textTransform:"uppercase",letterSpacing:".1em",color:C.goldDark,marginBottom:16}}>{"Znalost"}</div>
            <P style={{fontSize:14,marginBottom:6}}>{"✓ Jak fungují peníze — vznik, inflace, kdo těží"}</P>
            <P style={{fontSize:14,marginBottom:6}}>{"✓ Kupní síla — jediná metrika, která má smysl"}</P>
            <P style={{fontSize:14,marginBottom:6}}>{"✓ Mapa 5 tříd aktiv — kde jsou tvoje slepá místa"}</P>
            <P style={{fontSize:14,marginBottom:6}}>{"✓ Bitcoin jako protokol — upgrade peněz"}</P>
            <P style={{fontSize:14,marginBottom:6}}>{"✓ Systémová rizika — co nevidíš ve svém portfoliu"}</P>
          </Crd>
          <Crd>
            <div style={{fontFamily:F.b,fontSize:13,textTransform:"uppercase",letterSpacing:".1em",color:C.goldDark,marginBottom:16}}>{"Výsledky"}</div>
            <P style={{fontSize:14,marginBottom:6}}>{"✓ Osobní finanční mapa — aktiva, pasiva, kupní síla"}</P>
            <P style={{fontSize:14,marginBottom:6}}>{"✓ Freedom number — kolik potřebuješ a jak tam dojít"}</P>
            <P style={{fontSize:14,marginBottom:6}}>{"✓ Stress-test portfolia — co se stane při krizi"}</P>
            <P style={{fontSize:14,marginBottom:6}}>{"✓ BTC v self-custody — zabezpečený, tvůj"}</P>
            <P style={{fontSize:14,marginBottom:6}}>{"✓ Akční plán — konkrétní kroky na 6–12 měsíců"}</P>
          </Crd>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,marginTop:48}}>
          <Crd style={{border:"2px solid "+C.gold,textAlign:"center"}}>
            <div style={{fontFamily:F.b,fontSize:12,textTransform:"uppercase",color:C.goldDark,marginBottom:8}}>{"1-on-1 Program"}</div>
            <div style={{fontFamily:F.b,fontSize:14,color:C.muted}}>{"7 osobních sezení × 1,5–2 hodiny"}</div>
            <div style={{fontFamily:F.h,fontSize:42,fontWeight:500,color:C.goldDark,margin:"16px 0 4px"}}>{"47 000 Kč"}</div>
            <div style={{fontFamily:F.b,fontSize:13,color:C.muted,marginBottom:20}}>{"1. vlna (běžně 97 000 Kč)"}</div>
            <Btn onClick={function(){go(cRef)}} gold style={{display:"block",textAlign:"center"}}>{"Chci se domluvit"}</Btn>
          </Crd>
          <Crd style={{textAlign:"center"}}>
            <div style={{fontFamily:F.b,fontSize:12,textTransform:"uppercase",color:C.goldDark,marginBottom:8}}>{"Workshop"}</div>
            <div style={{fontFamily:F.b,fontSize:14,color:C.muted}}>{"1,5 dne v malé skupině (max 20)"}</div>
            <div style={{fontFamily:F.h,fontSize:42,fontWeight:500,color:C.goldDark,margin:"16px 0 4px"}}>{"12 000 Kč"}</div>
            <div style={{fontFamily:F.b,fontSize:13,color:C.muted,marginBottom:20}}>{"1. vlna (běžně 21 000 Kč)"}</div>
            <Btn onClick={function(){go(cRef)}} style={{display:"block",textAlign:"center"}}>{"Chci se přihlásit"}</Btn>
          </Crd>
        </div>
        <div style={{textAlign:"center",marginTop:24,padding:"16px 24px",background:C.goldVL,borderRadius:16}}>
          <P style={{color:C.goldDark,marginBottom:0,fontSize:15}}>{"Garance: Pokud po 2. sezení necítíš hodnotu — vrátím ti peníze. Celé. Bez otázek."}</P>
        </div>
        <div style={{textAlign:"center",marginTop:20}}>
          <P style={{color:C.danger,fontSize:14}}>{"Program za 47 000 Kč = 17 dní inflační ztráty při majetku 10M. Každý měsíc odkládání = cca 100 000 Kč ztráta kupní síly."}</P>
        </div>
      </Sec></div>

      <Sec bg={C.card}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20,textAlign:"center"}}>
          <div><div style={{fontFamily:F.h,fontSize:36,fontWeight:500,color:C.goldDark}}>{"18"}</div><P style={{fontSize:13,marginBottom:0}}>{"let praxe"}</P></div>
          <div><div style={{fontFamily:F.h,fontSize:36,fontWeight:500,color:C.goldDark}}>{"200+"}</div><P style={{fontSize:13,marginBottom:0}}>{"konzultací"}</P></div>
          <div><div style={{fontFamily:F.h,fontSize:36,fontWeight:500,color:C.goldDark}}>{"11"}</div><P style={{fontSize:13,marginBottom:0}}>{"úrovní systému"}</P></div>
          <div><div style={{fontFamily:F.h,fontSize:36,fontWeight:500,color:C.goldDark}}>{"0"}</div><P style={{fontSize:13,marginBottom:0}}>{"produktů k prodeji"}</P></div>
        </div>
      </Sec>

      <div ref={cRef}><Sec bg={C.goldVL}>
        <div style={{textAlign:"center",marginBottom:40}}>
          <Lbl>{"Další krok"}</Lbl>
          <Ttl center><span>{"30 minut. Tvoje čísla. "}</span><span style={{color:C.gold}}>{"Žádný prodej."}</span></Ttl>
          <P style={{maxWidth:520,margin:"0 auto"}}>{"Chci pochopit tvou situaci a ukázat ti, co bych dělal já na tvém místě."}</P>
        </div>
        {sent ? (
          <Crd style={{textAlign:"center",maxWidth:480,margin:"0 auto",border:"2px solid "+C.gold}}>
            <div style={{fontFamily:F.h,fontSize:32,color:C.goldDark,marginBottom:12}}>{"Děkuji."}</div>
            <P style={{color:C.text}}>{"Ozvu se do 48 hodin."}</P>
            <div style={{fontFamily:F.h,fontSize:15,color:C.goldDark,fontStyle:"italic"}}>{"Úhel pohledu tvoří realitu."}</div>
          </Crd>
        ) : (
          <Crd style={{maxWidth:560,margin:"0 auto"}}>
            <div style={{marginBottom:16}}>
              <div style={{fontFamily:F.b,fontSize:13,color:C.muted,marginBottom:4}}>{"Jméno *"}</div>
              <input type="text" value={fm.n} onChange={function(e){upd("n",e.target.value)}} placeholder="Jméno" style={ist} />
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontFamily:F.b,fontSize:13,color:C.muted,marginBottom:4}}>{"Email *"}</div>
              <input type="text" value={fm.e} onChange={function(e){upd("e",e.target.value)}} placeholder="tvuj@email.cz" style={ist} />
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontFamily:F.b,fontSize:13,color:C.muted,marginBottom:4}}>{"Přibližná hodnota aktiv"}</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
                {["Pod 3M","3-10M","10-20M","Nad 20M"].map(function(v){return(
                  <div key={v} onClick={function(){upd("a",v)}} style={{fontFamily:F.b,fontSize:13,padding:"10px 8px",borderRadius:10,border:"2px solid "+(fm.a===v?C.gold:C.border),background:fm.a===v?C.goldVL:C.card,color:fm.a===v?C.goldDark:C.muted,textAlign:"center",cursor:"pointer"}}>{v}</div>
                )})}
              </div>
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontFamily:F.b,fontSize:13,color:C.goldDark,marginBottom:4,fontWeight:500}}>{"Co bys změnil na svém přístupu k penězům?"}</div>
              <input type="text" value={fm.q1} onChange={function(e){upd("q1",e.target.value)}} placeholder="..." style={ist} />
            </div>
            <div style={{marginBottom:16}}>
              <div style={{fontFamily:F.b,fontSize:13,color:C.goldDark,marginBottom:4,fontWeight:500}}>{"Kolik tě stojí nic neměnit — ročně?"}</div>
              <input type="text" value={fm.q2} onChange={function(e){upd("q2",e.target.value)}} placeholder="..." style={ist} />
            </div>
            <div onClick={function(){if(ok)setSent(true)}} style={{fontFamily:F.b,fontSize:16,fontWeight:500,padding:16,background:ok?C.gold:C.goldLight,color:ok?"#fff":C.muted,borderRadius:50,cursor:ok?"pointer":"default",textAlign:"center",marginTop:8,boxShadow:ok?"0 4px 20px rgba(201,169,110,.3)":"none"}}>{"Odeslat a domluvit si rozhovor"}</div>
            <P style={{fontSize:12,textAlign:"center",marginTop:12,marginBottom:0,opacity:0.5}}>{"Žádný spam. Žádné sdílení dat. Jen rozhovor."}</P>
          </Crd>
        )}
      </Sec></div>

      <div style={{padding:"40px 24px",textAlign:"center",borderTop:"1px solid "+C.border}}>
        <div style={{fontFamily:F.h,fontSize:20,color:C.goldDark}}>{"MAIKIDO"}</div>
        <P style={{fontSize:13}}>{"Money Aikido | Vzdělávací systém pro vědomou práci s penězi"}</P>
        <div style={{fontFamily:F.h,fontSize:14,color:C.gold,fontStyle:"italic",opacity:0.5,marginTop:12}}>{"Úhel pohledu tvoří realitu."}</div>
      </div>
    </div>
  );
}

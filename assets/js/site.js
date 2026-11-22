(() => {
  "use strict";
  const cfg = window.SITE_CONFIG || {};
  const body = document.body;
  const root = body.dataset.root || "";
  const active = body.dataset.active || "";
  const navItems = [
    {label:"Home", href:"index.html", key:"home"},
    {label:"Course Content", href:"course_content.html", key:"course"},
    {label:"Other Tutorials", href:"other_tutorials.html", key:"other"},
    {label:"Contact", href:"contact.html", key:"contact"}
  ];

  function renderNav(id) {
    const host = document.getElementById(id);
    if (!host) return;
    host.replaceChildren();
    navItems.forEach(item => {
      const a = document.createElement("a");
      a.href = root + item.href;
      a.textContent = item.label;
      if (active === item.key) {
        a.classList.add("active");
        a.setAttribute("aria-current", "page");
      }
      host.appendChild(a);
    });
  }

  function showMessage(host, text, warning=false) {
    const box = document.createElement("div");
    box.className = warning ? "config-warning" : "empty-state";
    box.textContent = text;
    host.replaceChildren(box);
  }

  function renderTopicPage() {
    const host = document.getElementById("topic-button-list");
    if (!host) return;
    const key = host.dataset.topicKey;
    const item = cfg.topicPages && cfg.topicPages[key];
    if (!item) return showMessage(host, "Topic configuration was not found in assets/js/site-config.js.", true);
    const count = Number(item.number_of_buttons);
    const names = Array.isArray(item.button_names) ? item.button_names : [];
    const links = Array.isArray(item.button_links) ? item.button_links : [];
    const desc = Array.isArray(item.button_descriptions) ? item.button_descriptions : [];
    if (!Number.isInteger(count) || count < 0 || count > 12) return showMessage(host, "Configuration error: number_of_buttons must be an integer from 0 to 12.", true);
    if (names.length < count || links.length < count) return showMessage(host, "Configuration error: button_names and button_links must each contain at least number_of_buttons entries.", true);
    if (count === 0) return showMessage(host, "No tutorial topics have been configured for this section yet.");
    const fragment = document.createDocumentFragment();
    for (let i=0; i<count; i++) {
      const name = String(names[i] ?? "").trim();
      const href = String(links[i] ?? "").trim();
      if (!name || !href) return showMessage(host, `Configuration error: button ${i+1} has an empty name or link.`, true);
      const a = document.createElement("a");
      a.className = "topic-link";
      a.href = href;
      const number = document.createElement("span");
      number.className = "topic-number";
      number.textContent = String(i+1).padStart(2,"0");
      const text = document.createElement("span");
      text.className = "topic-text";
      const title = document.createElement("span");
      title.className = "topic-name";
      title.textContent = name;
      text.appendChild(title);
      if (desc[i] && String(desc[i]).trim()) {
        const d = document.createElement("span");
        d.className = "topic-description";
        d.textContent = String(desc[i]);
        text.appendChild(d);
      }
      const arrow = document.createElement("span");
      arrow.className = "topic-arrow";
      arrow.setAttribute("aria-hidden","true");
      arrow.textContent = "›";
      a.append(number,text,arrow);
      fragment.appendChild(a);
    }
    host.replaceChildren(fragment);
  }

  function renderResourcePage(hostId, configKey) {
    const host = document.getElementById(hostId);
    if (!host) return;
    const c = cfg[configKey] || {};
    const count = Number(c.number_of_buttons ?? 0);
    const names = Array.isArray(c.button_names) ? c.button_names : [];
    const links = Array.isArray(c.button_links) ? c.button_links : [];
    const types = Array.isArray(c.button_types) ? c.button_types : [];
    if (!Number.isInteger(count) || count < 0 || count > 100) return showMessage(host,"Configuration error: number_of_buttons must be between 0 and 100.",true);
    if (names.length < count || links.length < count) return showMessage(host,"Configuration error: button_names and button_links must each contain at least number_of_buttons entries.",true);
    if (!count) return showMessage(host,"No resources have been configured yet. Edit assets/js/site-config.js to add titles and links.");
    const fragment = document.createDocumentFragment();
    for (let i=0;i<count;i++) {
      const titleText = String(names[i] ?? "").trim();
      const href = String(links[i] ?? "").trim();
      const typeText = String(types[i] || "RESOURCE").trim();
      if (!titleText) return showMessage(host,`Configuration error: resource ${i+1} has no title.`,true);
      const isPdf = /pdf/i.test(typeText);
      const isExternal = /^https?:\/\//i.test(href);
      const isConfigured = Boolean(href);
      const a = document.createElement(isConfigured ? "a" : "div");
      a.className = "resource-link" + (isConfigured ? "" : " disabled");
      if (isConfigured) {
        a.href = href;
        if (isExternal || isPdf) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      } else {
        a.setAttribute("aria-disabled","true");
      }
      const n = document.createElement("span");
      n.className = "topic-number";
      n.textContent = String(i+1).padStart(2,"0");
      const text = document.createElement("span");
      text.className = "topic-text";
      const title = document.createElement("span");
      title.className = "topic-name";
      title.textContent = titleText;
      const type = document.createElement("span");
      type.className = "resource-type";
      type.textContent = typeText;
      text.append(title,type);
      if (!isConfigured) {
        const status = document.createElement("span");
        status.className = "resource-status";
        status.textContent = "Add the resource link in assets/js/site-config.js";
        text.appendChild(status);
      }
      const arrow = document.createElement("span");
      arrow.className = "topic-arrow";
      arrow.textContent = isExternal ? "↗" : "›";
      a.append(n,text,arrow);
      fragment.appendChild(a);
    }
    host.replaceChildren(fragment);
  }

  const safe = (value, fallback="") => String(value ?? "").trim() || fallback;
  function renderHomeAuthors() {
    const host = document.getElementById("home-authors");
    if (!host) return;
    host.replaceChildren();
    (cfg.authors || []).slice(0,2).forEach(author => {
      const entry = document.createElement("div"); entry.className="author-item";
      const line = document.createElement("span"); line.className="author-rule"; line.setAttribute("aria-hidden","true");
      const text = document.createElement("div");
      const name = document.createElement("p"); name.className="author-name"; name.textContent=safe(author.name,"Author name");
      const affiliation = document.createElement("p"); affiliation.className="author-affiliation";
      affiliation.textContent=[author.department,author.institution].filter(Boolean).join(" · ");
      text.append(name,affiliation); entry.append(line,text); host.appendChild(entry);
    });
  }
  function contactRow(symbol,label,value,kind) {
    const row=document.createElement("div"); row.className="contact-row";
    const mark=document.createElement("span"); mark.className="contact-symbol"; mark.textContent=symbol;
    const content=document.createElement("div");
    const lab=document.createElement("span"); lab.className="contact-label"; lab.textContent=label;
    const val=document.createElement("div"); val.className="contact-value";
    const v=String(value ?? "").trim();
    if (kind==="phone" && v) { const a=document.createElement("a"); a.href="tel:"+v.replace(/[^+\d]/g,""); a.textContent=v; val.appendChild(a); }
    else if (kind==="email" && v) { const a=document.createElement("a"); a.href="mailto:"+v; a.textContent=v; val.appendChild(a); }
    else val.textContent=v || "";
    content.append(lab,val); row.append(mark,content); return row;
  }
  function renderContactAuthors() {
    const host=document.getElementById("contact-authors"); if(!host) return;
    host.replaceChildren();
    (cfg.authors||[]).slice(0,2).forEach(author=>{
      const card=document.createElement("section"); card.className="contact-card";
      const h=document.createElement("h2"); h.textContent=safe(author.name,"Author name");
      const role=document.createElement("p"); role.className="contact-role"; role.textContent=safe(author.designation,"Academic Designation");
      const list=document.createElement("div"); list.className="contact-list";
     list.append(
    contactRow("▦", safe(author.department, "")),
    contactRow("▤", safe(author.institution, "")),
    contactRow("⌖", author.address),
    contactRow("☎", author.phone, ""),
    contactRow("✉", author.email, "")
);
      
      card.append(h,role,list); host.appendChild(card);
    });
  }

  function init() {
    renderNav("top-navigation"); renderNav("bottom-navigation");
    renderTopicPage(); renderResourcePage("pdf-resource-list","pdfNotes");
    renderResourcePage("other-tutorial-list","otherTutorials");
    renderHomeAuthors(); renderContactAuthors();
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init,{once:true}); else init();
})();

(() => {
  "use strict";

  const database = window.GTAVI_DATABASE;
  const app = document.getElementById("app-view");
  const searchInput = document.getElementById("global-search");
  const searchResults = document.getElementById("search-results");
  const breadcrumb = document.getElementById("breadcrumb-current");

  if (!database || !app) {
    console.error("GTA VI database or application container is missing.");
    return;
  }

  const collections = [
    "cheats",
    "characters",
    "locations",
    "vehicles",
    "missions",
    "activities",
    "gameplay",
    "news",
  ];

  const allItems = () => collections.flatMap((key) => database[key] || []);

  const allRecords = allItems();

  const categoryInfo = (id) =>
    database.categories.find((category) => category.id === id);

  const statusLabels = {
    confirmed: "I konfirmuar",
    reported: "I raportuar",
    leaked: "I rrjedhur",
    speculation: "Spekulim",
    unverified: "I paverifikuar",
  };

  const statusClass = (status) => `status status-${status || "unverified"}`;

  const escapeHTML = (value = "") =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        }[char])
    );

  const slugToTitle = (slug) => categoryInfo(slug)?.title || slug;

  const getRoute = () => {
    const route = decodeURIComponent(location.hash.slice(1) || "home");
    const parts = route.split("/");
    return {
      page: parts[0] || "home",
      id: parts[1] || null,
    };
  };

  const updateNavigation = (page) => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.toggle("active", link.dataset.page === page);
    });

    if (breadcrumb) {
      breadcrumb.textContent =
        page === "detail"
          ? "Detajet"
          : page === "faq"
          ? "Pyetje të shpeshta"
          : page === "sources"
          ? "Burimet"
          : page === "home"
          ? "Kryefaqja"
          : slugToTitle(page);
    }
  };

  const statusBadge = (status) => `
    <span class="${statusClass(status)}">
      ${escapeHTML(statusLabels[status] || statusLabels.unverified)}
    </span>
  `;

  const categoryCard = (category) => {
    const count = (database[category.id] || []).length;

    return `
      <a class="category-card" href="#${category.id}">
        <span class="category-icon">${escapeHTML(category.icon)}</span>
        <span class="category-count">${count} ARTIKUJ</span>
        <strong>${escapeHTML(category.title)}</strong>
        <small>${escapeHTML(category.subtitle)}</small>
        <span class="card-arrow">↗</span>
      </a>
    `;
  };

  const itemCard = (item) => {
    const category = categoryInfo(item.category);
    const isCheat = item.category === "cheats";

    const image = item.image
      ? `
    <div class="content-card-image">
      <img
        src="${escapeHTML(item.image)}"
        alt="${escapeHTML(item.imageAlt || item.title)}"
        loading="lazy"
        onerror="this.parentElement.style.display='none'"
      >
      <span>ROCKSTAR GAMES</span>
    </div>
  `
      : "";

    const command =
      isCheat && item.input
        ? `<div class="command-preview">
        ${item.input
          .map(
            (key) => `
          <kbd>${
            key === "UP"
              ? "↑"
              : key === "DOWN"
              ? "↓"
              : key === "LEFT"
              ? "←"
              : "→"
          }</kbd>
        `
          )
          .join("")}
      </div>`
        : "";

    return `
    <article class="content-card">
      ${image}

      <div class="card-topline">
        <span class="card-symbol">${escapeHTML(category?.icon || "◈")}</span>
        ${statusBadge(item.status)}
      </div>

      <h3>${escapeHTML(item.title)}</h3>

      ${
        item.subtitle
          ? `<span class="item-subtitle">${escapeHTML(item.subtitle)}</span>`
          : ""
      }

      <p>${escapeHTML(item.description || "Përshkrimi do të shtohet.")}</p>

      ${command}

      <div class="content-card-footer">
        <span class="content-card-type">${escapeHTML(
          category?.title || "Informacion"
        )}</span>
        <a class="content-card-link" href="#detail/${encodeURIComponent(
          item.id
        )}">
          Shiko detajet →
        </a>
      </div>
    </article>
  `;
  };

  const renderHome = () => {
    const confirmedCount = allRecords.filter(
      (item) => item.status === "confirmed"
    ).length;
    const reportedCount = allRecords.filter(
      (item) => item.status === "reported"
    ).length;
    const categoryCount = database.categories.length;

    const featured = [
      ...(database.characters || []),
      ...(database.locations || []),
      ...(database.cheats || []),
    ].slice(0, 6);

    app.innerHTML = `
      <section class="hero">
        <div class="hero-content">
          <span class="hero-eyebrow">ENCIKLOPEDI JOZYRTARE NË GJUHËN SHQIPE</span>
          <h1>Mirë se vjen<br>në <span>Leonida.</span></h1>
          <p>
            Gjithçka që duhet të dish për Grand Theft Auto VI.
            Personazhe, lokacione, automjete, cheat codes dhe udhëzues,
            të organizuara në një platformë.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#cheats">Eksploro cheat codes <span>→</span></a>
            <a class="button button-secondary" href="#characters">Njihu me personazhet</a>
          </div>
        </div>
        <div class="hero-caption">
          <span>GTA VI SHQIP / UDHËZUESI</span>
          <span>PROJEKT JOZYRTAR</span>
        </div>
      </section>

      <section class="section-block">
        <div class="stats-grid">
          <div class="stat-card">
            <span>Kategori</span>
            <strong>${categoryCount}</strong>
            <small>Fusha informacioni</small>
          </div>
          <div class="stat-card">
            <span>Informacione</span>
            <strong>${allRecords.length}</strong>
            <small>Artikuj në databazë</small>
          </div>
          <div class="stat-card">
            <span>Të konfirmuara</span>
            <strong>${confirmedCount}</strong>
            <small>Me status të konfirmuar</small>
          </div>
          <div class="stat-card">
            <span>Të raportuara</span>
            <strong>${reportedCount}</strong>
            <small>Kërkojnë verifikim të pavarur</small>
          </div>
        </div>
      </section>

      <section class="section-block">
        <div class="section-header">
          <div>
            <span class="page-eyebrow">EKSPLORO LOJËN</span>
            <h2>Kategoritë kryesore</h2>
          </div>
          <p>Zgjidh një kategori për të parë informacionet dhe udhëzuesit përkatës.</p>
        </div>
        <div class="category-grid">
          ${database.categories.map(categoryCard).join("")}
        </div>
      </section>

      <section class="section-block">
        <div class="section-header">
          <div>
            <span class="page-eyebrow">PËRMBAJTJA</span>
            <h2>Informacione të publikuara</h2>
          </div>
          <a class="section-link" href="#characters">Eksploro të gjitha →</a>
        </div>
        <div class="content-grid">
          ${featured.map(itemCard).join("")}
        </div>
      </section>

      <section class="notice">
        <div class="notice-icon">i</div>
        <div>
          <strong>Si i kontrollojmë informacionet?</strong>
          <p>
            Çdo artikull ka status dhe burim. Informacionet e raportuara,
            të rrjedhura dhe spekulimet nuk paraqiten si fakte zyrtare.
            Faqja nuk është e lidhur me Rockstar Games.
          </p>
        </div>
      </section>
    `;
  };

  const renderCollection = (page) => {
    const category = categoryInfo(page);
    if (!category) {
      renderNotFound();
      return;
    }

    const items = database[page] || [];
    const isCheats = page === "cheats";

    app.innerHTML = `
      <section class="page-container">
        <div class="page-heading">
          <div>
            <span class="page-eyebrow">GTA VI SHQIP / DATABAZA</span>
            <h1>${escapeHTML(category.title)}</h1>
            <p>${escapeHTML(
              category.subtitle
            )}. Informacionet paraqiten me burimet dhe statusin përkatës.</p>
          </div>
          <div class="heading-meta"><strong>${
            items.length
          }</strong> artikuj</div>
        </div>

        ${
          isCheats
            ? `
          <div class="notice">
            <div class="notice-icon">i</div>
            <div>
              <strong>Para se të përdorësh një komandë</strong>
              <p>
                Komandat më poshtë janë të raportuara nga burime të palëve të treta.
                Kombinimet e publikuara për këtë listë janë për PS5.
                Kontrollo statusin dhe burimin e secilës komandë.
              </p>
            </div>
          </div>
        `
            : ""
        }

        <div class="toolbar">
          <input class="toolbar-search" id="collection-search" type="search"
            placeholder="Kërko në ${escapeHTML(
              category.title.toLowerCase()
            )}...">
          <select class="filter-select" id="status-filter" aria-label="Filtro sipas statusit">
            <option value="all">Të gjitha statuset</option>
            <option value="confirmed">Të konfirmuara</option>
            <option value="reported">Të raportuara</option>
            <option value="leaked">Të rrjedhura</option>
            <option value="speculation">Spekulime</option>
          </select>
          <span class="result-count" id="result-count">${
            items.length
          } rezultate</span>
        </div>

        <div class="content-grid" id="collection-grid">
          ${items.map(itemCard).join("")}
        </div>
        ${
          items.length === 0
            ? `
          <div class="empty-state">
            <strong>Informacionet po përgatiten.</strong><br>
            Kjo kategori ende nuk ka artikuj të publikuar.
            Do të shtojmë vetëm të dhëna që mund të mbështeten nga burime.
          </div>
        `
            : ""
        }
      </section>
    `;

    const search = document.getElementById("collection-search");
    const status = document.getElementById("status-filter");
    const grid = document.getElementById("collection-grid");
    const count = document.getElementById("result-count");

    const filterItems = () => {
      const query = search.value.trim().toLowerCase();
      const selectedStatus = status.value;

      const filtered = items.filter((item) => {
        const text = [item.title, item.description, item.group, item.effect]
          .join(" ")
          .toLowerCase();

        const matchesText = text.includes(query);
        const matchesStatus =
          selectedStatus === "all" || item.status === selectedStatus;

        return matchesText && matchesStatus;
      });

      grid.innerHTML =
        filtered.map(itemCard).join("") ||
        `<div class="empty-state">Nuk u gjet asnjë rezultat për filtrat e zgjedhur.</div>`;

      count.textContent = `${filtered.length} rezultate`;
    };

    search?.addEventListener("input", filterItems);
    status?.addEventListener("change", filterItems);
  };

  const renderDetail = (id) => {
    const item = allRecords.find((record) => record.id === id);

    if (!item) {
      renderNotFound();
      return;
    }

    const category = categoryInfo(item.category);
    const isCheat = item.category === "cheats";

    const directions = {
      UP: "↑",
      DOWN: "↓",
      LEFT: "←",
      RIGHT: "→",
    };

    const command =
      isCheat && item.input
        ? item.input.map((key) => directions[key] || key).join(" ")
        : "";

    const image = item.image
      ? `
    <figure class="detail-image">
      <img
        src="${escapeHTML(item.image)}"
        alt="${escapeHTML(item.imageAlt || item.title)}"
        onerror="this.parentElement.style.display='none'"
      >
      <figcaption>Image: ${escapeHTML(
        item.imageCredit || "Rockstar Games"
      )}</figcaption>
    </figure>
  `
      : "";

    const details = item.details?.length
      ? `<ul>${item.details
          .map((detail) => `<li>${escapeHTML(detail)}</li>`)
          .join("")}</ul>`
      : "";

    app.innerHTML = `
    <section class="page-container">
      <a class="back-link" href="#${escapeHTML(item.category)}">
        ← Kthehu te ${escapeHTML(category?.title || "kategoria")}
      </a>

      <article class="detail-panel">

        <div class="detail-top">
          <span class="page-eyebrow">${escapeHTML(
            category?.title || "INFORMACION"
          )}</span>
          ${statusBadge(item.status)}
        </div>

        <h1>${escapeHTML(item.title)}</h1>

        ${
          item.subtitle
            ? `<p class="item-subtitle">${escapeHTML(item.subtitle)}</p>`
            : ""
        }

        ${image}

        <p class="detail-description">
          ${escapeHTML(item.description || "")}
        </p>

        <div class="detail-meta">
          <span class="heading-meta">
            Statusi:
            <strong>${escapeHTML(
              statusLabels[item.status] || "I paverifikuar"
            )}</strong>
          </span>

          <span class="heading-meta">
            Kategoria:
            <strong>${escapeHTML(category?.title || "Informacion")}</strong>
          </span>

          ${
            item.platform
              ? `<span class="heading-meta">Platforma: <strong>${escapeHTML(
                  item.platform.join(", ")
                )}</strong></span>`
              : ""
          }
        </div>

        ${
          details
            ? `
          <section class="detail-section">
            <h2>Informacione</h2>
            ${details}
          </section>
        `
            : ""
        }

        ${
          isCheat
            ? `
          <section class="detail-section">
            <h2>Kombinimi i butonave</h2>

            <div class="command-display">
              <code id="command-value">${escapeHTML(command)}</code>

              <button
                class="button button-primary button-small"
                id="copy-command"
                data-copy="${escapeHTML(command)}"
              >
                Kopjo kombinimin
              </button>
            </div>
          </section>

          <section class="detail-section">
            <h2>Efekti</h2>
            <p>${escapeHTML(item.effect || item.description)}</p>
          </section>

          <section class="detail-section">
            <h2>Si aktivizohet</h2>
            <p>${escapeHTML(
              item.activation || "Udhëzimet nuk janë publikuar."
            )}</p>
          </section>

          <section class="detail-section">
            <h2>Kushti i zhbllokimit</h2>
            <p>${escapeHTML(item.unlock || "Nuk dihet.")}</p>
          </section>
        `
            : ""
        }

        <section class="detail-section">
          <h2>Burimi i informacionit</h2>

          <p>
            ${escapeHTML(item.sourceName || "Burimi nuk është shtuar")}
            ${item.sourceDate ? ` · ${escapeHTML(item.sourceDate)}` : ""}
          </p>

          ${
            item.sourceUrl
              ? `
            <a
              class="source-link"
              href="${escapeHTML(item.sourceUrl)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hap burimin origjinal ↗
            </a>
          `
              : ""
          }
        </section>

      </article>
    </section>
  `;
  };

  const renderFAQ = () => {
    app.innerHTML = `
      <section class="page-container">
        <div class="page-heading">
          <div>
            <span class="page-eyebrow">NDIHMË</span>
            <h1>Pyetje të shpeshta</h1>
            <p>Përgjigje për faqen, statuset e informacionit dhe përdorimin e udhëzuesit.</p>
          </div>
        </div>
        <div class="faq-list">
          ${(window.GTAVI_FAQ || [])
            .map(
              (faq) => `
            <details class="faq-item">
              <summary>${escapeHTML(faq.question)}</summary>
              <p>${escapeHTML(faq.answer)}</p>
            </details>
          `
            )
            .join("")}
        </div>
      </section>
    `;
  };

  const renderSources = () => {
    const sources = window.GTAVI_SOURCES || [];

    app.innerHTML = `
    <section class="page-container">

      <div class="page-heading">
        <div>
          <span class="page-eyebrow">TRANSPARENCA</span>
          <h1>Burimet</h1>
          <p>Burimet zyrtare dhe mediatike të përdorura për përmbajtjen e kësaj enciklopedie.</p>
        </div>

        <div class="heading-meta">
          <strong>${sources.length}</strong> burime
        </div>
      </div>

      <div class="content-grid">
        ${sources
          .map(
            (source) => `
          <article class="content-card">
            <span class="card-symbol">↗</span>
            <h3>${escapeHTML(source.name)}</h3>
            <p>${escapeHTML(source.type)}</p>

            <div class="content-card-footer">
              <span class="content-card-type">BURIM</span>
              <a
                class="content-card-link"
                href="${escapeHTML(source.url)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hap burimin →
              </a>
            </div>
          </article>
        `
          )
          .join("")}
      </div>

    </section>
  `;
  };

  const renderNotFound = () => {
    app.innerHTML = `
      <section class="page-container">
        <div class="empty-state">
          <strong>Faqja nuk u gjet.</strong><br>
          Informacioni i kërkuar nuk ekziston ose është hequr.
          <p><a class="section-link" href="#home">Kthehu në kryefaqe →</a></p>
        </div>
      </section>
    `;
  };

  const renderPage = () => {
    const route = getRoute();

    updateNavigation(route.page);

    if (route.page === "home") renderHome();
    else if (route.page === "detail" && route.id) renderDetail(route.id);
    else if (route.page === "faq") renderFAQ();
    else if (route.page === "sources") renderSources();
    else renderCollection(route.page);

    searchResults.hidden = true;
    if (window.GTAVI_NAV) window.GTAVI_NAV.closeSidebar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const performGlobalSearch = (query) => {
    const normalized = query.trim().toLowerCase();

    if (normalized.length < 2) {
      searchResults.hidden = true;
      searchResults.innerHTML = "";
      return;
    }

    const matches = allRecords
      .filter((item) => {
        const category = categoryInfo(item.category);
        const text = [
          item.title,
          item.description,
          item.group,
          item.effect,
          category?.title,
        ]
          .join(" ")
          .toLowerCase();

        return text.includes(normalized);
      })
      .slice(0, 8);

    searchResults.innerHTML = matches.length
      ? matches
          .map(
            (item) => `
          <a class="search-result" href="#detail/${encodeURIComponent(
            item.id
          )}">
            <span>
              <strong>${escapeHTML(item.title)}</strong>
              <small>${escapeHTML(item.description || "")}</small>
            </span>
            <span class="search-result-type">${escapeHTML(
              categoryInfo(item.category)?.title || ""
            )}</span>
          </a>
        `
          )
          .join("")
      : `<div class="search-empty">Nuk u gjet asnjë rezultat.</div>`;

    searchResults.hidden = false;
  };

  searchInput?.addEventListener("input", (event) => {
    performGlobalSearch(event.target.value);
  });

  searchInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const firstResult = searchResults.querySelector("a");
      if (firstResult)
        location.hash = firstResult.getAttribute("href").slice(1);
    }
  });

  document.addEventListener("click", async (event) => {
    const copyButton = event.target.closest("[data-copy]");

    if (copyButton) {
      const text = copyButton.dataset.copy;

      try {
        await navigator.clipboard.writeText(text);
        copyButton.textContent = "U kopjua!";
        setTimeout(() => {
          copyButton.textContent = "Kopjo kombinimin";
        }, 1600);
      } catch {
        copyButton.textContent = "Kopjimi dështoi";
      }
    }

    if (!event.target.closest(".global-search")) {
      searchResults.hidden = true;
    }
  });

  window.addEventListener("hashchange", renderPage);

  renderPage();
})();

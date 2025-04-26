# JavaScript Module – Granular Lesson Notes (Weeks 1‑5)

> **Context** – These 15×4 h sessions continue after Topic 4 and satisfy the remaining outcomes of the module "ვებგვერდის ინტერაქტიულობისა და ეფექტების შექმნა JavaScript-ის საშუალებით" (DOM manipulation – 2 cr; Async/API – 1 cr).

## Week 1

### Session 1 – DOM Selectors & Inspection (4 h)
| Time | Activity |
|------|----------|
| 00‑10 | Ice‑breaker: inspect favourite sites with DevTools – highlight DOM tree |
| 10‑40 | Mini‑lecture: DOM, Node vs Element, static vs live collections |
| 40‑90 | Live‑coding: using **getElementById**, **querySelector**, **querySelectorAll**; show quirks |
| 90‑110 | Stretch break – JS Selector Kahoot |
| 110‑170 | Guided drill: 10 selector tasks on prepared HTML playground (solo → pair share) |
| 170‑200 | Reflection: common errors & performance tips (caching selectors) |
| 200‑240 | Assignment briefing & Q‑A |

*Learning goals*
- Select any element(s) efficiently with native DOM APIs.
- Explain difference between NodeList & HTMLCollection.

*Resources* – MDN selector cheatsheet (print), playground repo.

*Homework 1* – Complete selector worksheet, push to GitHub.

---

### Session 2 – Creating & Modifying Elements (4 h)
| Time | Activity |
|------|----------|
| 00‑20 | Recap quiz on selectors |
| 20‑50 | Lecture‑demo: **createElement**, **appendChild/append**, **remove**, **innerText/innerHTML**, **style**, **classList** |
| 50‑110 | Pair‑programming: build "colour‑changer" widget (button cycles through palette) |
| 110‑130 | Coffee/stretch |
| 130‑180 | Guided refactor: extract palette to array, discuss separation of concerns |
| 180‑210 | Showcase a11y tips: `role="button"`, key events |
| 210‑240 | HW briefing: persistence extension using *localStorage* |

*Learning goals* – Dynamically generate, insert, update and remove DOM nodes following best practices.

*Homework 2* – Persist colour choice in *localStorage*; write short README.

---

### Session 3 – Events & Delegation (4 h)
| Time | Activity |
|------|----------|
| 00‑25 | White‑board: event flow (capture → target → bubble) |
| 25‑60 | Demo: **addEventListener** options (`once`, `passive`, `abortSignal`) |
| 60‑120 | Lab: debug delegated click‑handler in dynamic todo‑list (bug‑hunt worksheet) |
| 120‑135 | Break |
| 135‑185 | Group challenge: convert inline `onclick` to delegated pattern on parent |
| 185‑215 | Quiz: bubbling vs capturing (Mentimeter) |
| 215‑240 | Wrap‑up, collect muddiest‑point notes |

*Learning goals* – Attach / remove listeners safely; use delegation for dynamic lists; describe event phases.

*Assessment* – Short formative quiz; commit fixed todo‑list.

---

## Week 2

### Session 4 – Timers & Animations (4 h)
| Time | Activity |
|------|----------|
| 00‑15 | Warm‑up: when do we need timers? |
| 15‑45 | Lecture: **setTimeout**, **setInterval**, throttling vs debouncing |
| 45‑105 | Build along: digital clock & progressive bar |
| 105‑120 | Break |
| 120‑180 | Solo extension: add pause/resume controls (clearInterval) |
| 180‑240 | Code review & checklist for performance (requestAnimationFrame mention) |

*Learning goals* – Control repeating/one‑shot tasks; clear timers; relate to event loop.

*Artifacts* – Commit clock app GIF & code.

---

### Session 5 – Browser APIs (BOM & Storage) (4 h)
| Time | Activity |
|------|----------|
| 00‑30 | Safari vs Chrome vs Firefox feature matrix (Navigator, Feature Detection) |
| 30‑60 | Short lecture: Window, Location, History, Screen, Navigator; cookies vs **localStorage** / **sessionStorage** |
| 60‑120 | Workshop: theme switcher saved to *localStorage*; polyfill for older browsers |
| 120‑135 | Break |
| 135‑185 | Group discussion: privacy & security of storage, storage limits |
| 185‑240 | Reflection blog post (200 words) drafted in class |

*Learning goals* – Use BOM properties; persist state; evaluate limitations (quota, same‑origin).

*Homework 3* – Finalise blog post & push code.

---

### Session 6 – Mini‑Project #1: Interactive Photo Gallery (4 h)
| Time | Activity |
|------|----------|
| 00‑20 | Sprint briefing – backlog provided (drag‑drop reorder, lightbox, auto‑slide) |
| 20‑210 | Iteration 1 coding (stand‑ups every 60 min) |
| 210‑240 | Peer demo & feedback, retrospective |

*Deliverables* – GitHub repo, 2‑min Loom video, self‑review rubric.

---

## Week 3

### Session 7 – The Asynchronous Mindset (4 h)
| Time | Activity |
|------|----------|
| 00‑30 | Analogy game: restaurant order vs call stack |
| 30‑70 | Lecture: Event loop, task vs micro‑task queues |
| 70‑130 | Refactor callback‑hell example → Promise chain |
| 130‑145 | Break |
| 145‑195 | Exercise: trace output ordering (worksheet) |
| 195‑240 | Review solutions together |

*Learning goals* – Describe JS concurrency model; convert callbacks to Promises.

---

### Session 8 – Fetch API (GET) & Error Handling (4 h)
| Time | Activity |
|------|----------|
| 00‑25 | Live fetch to public cat‑facts API (network tab) |
| 25‑60 | Discuss CORS, status codes, `response.ok` |
| 60‑120 | Workshop: weather widget – dynamic city search |
| 120‑135 | Break |
| 135‑185 | Add loading skeleton & error banner |
| 185‑240 | HW briefing: improve UX (retry button) |

*Learning goals* – Perform GET, parse JSON, handle errors gracefully.

*Homework 4* – Enhance widget, push PR with issues addressed.

---

### Session 9 – async/await & Chaining (4 h)
| Time | Activity |
|------|----------|
| 00‑30 | Refactor previous fetch chain to **async/await** |
| 30‑70 | Add `try {}` / `catch` / `finally` patterns |
| 70‑130 | Build GitHub user search (debounced) |
| 130‑145 | Break |
| 145‑200 | Discuss race conditions & abort controller |
| 200‑240 | Quiz + code‑review checklist |

*Learning goals* – Write clean async code; cancel fetch; avoid stale updates.

---

## Week 4

### Session 10 – Rendering API data & Pagination (4 h)
| Time | Activity |
|------|----------|
| 00‑30 | UX patterns for infinite scroll vs numbered pages |
| 30‑80 | Demo: render product cards from Fake‑Store API |
| 80‑135 | Coding: add client‑side paginator component |
| 135‑150 | Break |
| 150‑210 | Performance talk: `documentFragment`, virtual DOM overview |
| 210‑240 | Refactor to use fragments; measure paint times |

*Learning goals* – Combine fetch + DOM to render lists efficiently.

---

### Session 11 – POST/PUT, Optimistic UI & CORS (4 h)
| Time | Activity |
|------|----------|
| 00‑20 | HTTP verbs recap |
| 20‑60 | Lecture‑demo: JSON‑Server mock, POST new product |
| 60‑120 | Lab: implement optimistic UI (update list before 200) |
| 120‑135 | Break |
| 135‑180 | CORS error scenario role‑play, fix with proxy or headers |
| 180‑240 | HW briefing: DEV‑to style article on solution |

*Learning goals* – Send data, update UI optimistically; articulate CORS basics.

---

### Session 12 – Capstone Kick‑off & Planning (4 h)
| Time | Activity |
|------|----------|
| 00‑30 | Present 4 sample SPA ideas; students form teams |
| 30‑60 | Write elevator pitch & define MVP |
| 60‑120 | Draft user stories, Trello board, low‑fi wireframes |
| 120‑135 | Break |
| 135‑195 | Tech spike: choose API, auth needs, deploy target |
| 195‑240 | Milestone timeline & stand‑up schedule |

*Deliverables* – Trello link, README with tech stack.

---

## Week 5

### Session 13 – Capstone Build Day (4 h)
Instructor roam support, mid‑sprint stand‑ups, impediment‑removal.

### Session 14 – Finishing, Debugging & Accessibility (4 h)
- Lighthouse & Core Web Vitals run
- Keyboard navigation & ARIA roles
- Code review checklist (naming, dead code, DRY)

### Session 15 – Capstone Presentations & Summative Assessment (4 h)
Each team: 5‑min live demo + 3‑min Q&A. Self‑ & peer‑assessment forms.

Grading rubric attached in LMS (40 % functionality, 30 % code quality, 20 % UI/UX, 10 % presentation).

---

## Alignment to Standards & Credits
- **DOM Manipulation – 2 credits** → Sessions 1‑6 & 10 (practical hrs ≥ 50)  
- **Async/API – 1 credit** → Sessions 7‑11 (practical hrs ≥ 25)  
Evidence collected equals 3 practical tasks required by module guide.

---

### Suggested Materials Checklist
- Prepared HTML playgrounds & starter repos per session
- Slides deck (shared via Google Slides)
- Quiz tools: Kahoot, Mentimeter
- DevTools screen‑recording (Loom)
- JSON‑Server mock backend
- Trello for project tracking

---

### Notes for Instructors
- Keep lecture segments ≤ 20 min to maintain engagement.
- Ensure a11y considerations are threaded throughout.
- Provide verbal and written feedback each lab.
- Encourage GitHub Discussions for async Q&A.

---

*Document version 1 – April 26 2025*


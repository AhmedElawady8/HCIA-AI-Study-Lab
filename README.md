<div align="center">

# AXIOM
### Understand the concept. Test the knowledge. Improve the next attempt.

**An interactive learning workspace for Huawei HCIA-AI V4.0 · H13-311**

Structured lessons · Visual experiments · Active recall · Timed exams · Learning analytics

![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-f7df1e?style=flat-square&logo=javascript&logoColor=111827)
![Architecture](https://img.shields.io/badge/Architecture-Static_Web_App-3774c8?style=flat-square)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-253858?style=flat-square&logo=github)
![Persistence](https://img.shields.io/badge/Progress-Browser_Local-237a83?style=flat-square)

</div>

---

## A course is more than a question bank

Axiom connects the essential stages of AI certification preparation: understand a topic, explore how it works, retrieve it from memory, apply it to a question, and use the result to decide what to study next.

Built around the supplied **Huawei HCIA-AI V4.0 Training Material**, it combines source-linked lessons, original practice items, interactive mathematical demonstrations, timed assessments and persistent learner records. The goal is a deliberate, measurable learning process rather than a collection of isolated questions.

**Learning loop:** Learn → Explore → Practice → Assess → Analyze → Review.

> Independent study companion. Not an official Huawei product, an exam-dump service, or a guarantee of certification success.

## At a glance

| Scope | Included |
| :--- | :--- |
| Curriculum | 6 modules and 29 independently accessible sections |
| Concepts | 145 explanations and corresponding flashcards |
| Assessment bank | 385 curated items, including recall variants, scenarios and code-reading questions |
| Question types | Single choice, multiple answer, true/false and fill-in responses |
| Full mock | 60 questions, 90 minutes, weighted across six domains |
| Diagnostic | 40 questions covering the complete course structure |
| Interface | Dark navy by default; optional light mode; responsive layouts |
| Progress | Browser-local records with JSON export and restore |
| Runtime | Native JavaScript ES modules; no installation or build required |

The item count includes alternate formats revisiting the same concepts. These are curated study questions, not live AI-generated items or claimed real examination questions.

## The curriculum

| Module | Course domain | Domain weighting |
| :---: | :--- | ---: |
| 01 | AI Overview | 10% |
| 02 | Machine Learning Overview | 20% |
| 03 | Basics of Deep Learning and Foundation Models | 30% |
| 04 | AI Development Framework | 20% |
| 05 | AI Business Process Overview | 15% |
| 06 | Cutting-edge AI Applications | 5% |

Coverage includes AI schools of thought, NLP and computer vision, classical ML algorithms, feature selection, evaluation, perceptrons, CNNs, RNNs, LSTM, Seq2Seq, attention, Transformers, MoE, PyTorch, fine-tuning, RLHF, prompt engineering and AI4Science.

Lessons link to relevant PDF pages and original slide text, connecting educational summaries to the primary source. Course structure is preserved rather than replaced with a generic AI syllabus.

Exam essentials reflect the official outline checked during development on **18 October 2026**. Check [Huawei Talent](https://e.huawei.com/en/talent/) for later changes. The 60-question mock is a platform simulation choice, not a claim about the official exam question count.

## A workspace built for studying

### Follow a clear learning path

Explore visual module cards or a detailed expandable outline. Check completion, bookmark a lesson and resume the last opened section without artificial content locks.

Each lesson provides seven stages:

1. **Start here:** introduction and learning objectives.
2. **Key ideas:** explanations and concept-level understanding markers.
3. **Example:** practical examples and code where relevant.
4. **Visual lab:** an interactive teaching aid.
5. **Exam notes:** distinctions, misconceptions and memory rules.
6. **Practice:** focused questions and explanations.
7. **Source:** original slide text and PDF references.

The selected lesson stage and reading position are saved. Learners can mark concepts as understood, copy code, and open an Egyptian Arabic explanation while preserving English technical terminology.

### Make abstract ideas observable

| Experiment | Adjustable inputs | Observable result |
| :--- | :--- | :--- |
| Convolution | Kernel size, stride, padding | Filter movement and output dimensions |
| Confusion matrix | TP, FP, FN, TN | Precision, recall and accuracy |
| Gradient descent | Learning rate and update steps | Parameter changes and loss trajectory |
| Attention | Illustrative relevance scores | Normalized softmax weights |
| Prompt engineering | Zero-shot, few-shot and CoT variants | Differences in instructions and demonstrations |
| Concept exploration | Selected concept | Explanation and a related example |

For example, the gradient-descent lab minimizes **L(w) = (w − 3)²**, making learning rate, gradient, parameter updates and overshooting directly inspectable. Lab values are illustrative teaching inputs, not predictions from a connected trained model.

## Learning design

Axiom implements complementary study behaviors:

- **Active recall:** attempt to explain a concept before revealing its flashcard explanation.
- **Feedback-led practice:** receive the correct response, distractor analysis and an exam tip after submission.
- **Distributed review:** known cards receive expanding review intervals; difficult or due cards have a separate view.
- **Error-directed retesting:** try another curated item for the same concept when available.
- **Metacognitive monitoring:** use completion, accuracy, repeated errors and exam results to choose the next review.

These describe the implemented mechanisms. The project has not undergone a controlled study of educational effectiveness; its readiness model is a transparent heuristic, not a validated psychometric assessment.

## Practice and exams serve different purposes

| Practice | Exam simulation |
| :--- | :--- |
| Immediate feedback | Answers withheld until final submission |
| Topic and difficulty information | Topic and difficulty labels hidden |
| Explanation of each option | Minimal distraction during the attempt |
| Related lessons and retesting | Timer, navigator and review flags |
| Short targeted sessions | Section, module, diagnostic and full-mock modes |

Multiple-answer grading compares complete answer sets: missing a correct option or adding an incorrect option makes the response incorrect. Fill-in grading normalizes case, punctuation and whitespace, with stored aliases; it does not use semantic language-model grading.

Timed sessions retain answers and their absolute deadline across a reload in the same browser.

## Progress grounded in actual activity

The dashboard and analytics use persisted records for completion, questions, accuracy, mistakes, exam history, study streak, active study time, bookmarks and flashcard reviews. Learners can set a daily study goal. New users see empty states rather than fabricated achievements.

### Estimated readiness

| Signal | Weight |
| :--- | ---: |
| Overall accuracy | 25% |
| Lesson completion | 15% |
| Recent accuracy | 15% |
| Hard-question accuracy | 15% |
| Recent mock results | 20% |
| Assessed section accuracy | 10% |

Repeated unresolved errors can subtract up to ten points. A strong-readiness rating additionally requires enough evidence across modules, major-domain performance, hard questions and multiple mocks. Repeating familiar items may inflate accuracy, so interpret the estimate alongside coverage and attempt history.

**Readiness is a preparation indicator, not an official score or a guarantee of passing.**

## Technology and source organization

A small runtime built from HTML, CSS, browser APIs, native ES modules and static JSON. No backend application, database, model subscription or API key is required.

| File or directory | Responsibility |
| :--- | :--- |
| `dist/index.html` | Application entry point |
| `dist/app.js` | Routing, interface and learning flows |
| `dist/engine.mjs` | Scoring, exam selection and readiness |
| `dist/labs.mjs` | Interactive teaching experiments |
| `dist/course.json` | Modules, lessons and explanations |
| `dist/questions.json` | Items, answers and feedback |
| `dist/source-slides.json` | Original slide text grouped by section |
| `dist/training-material.pdf` | Supplied primary source |
| `dist/style.css` | Base UI components |
| `dist/fieldnotes.css` | Study-workspace components |
| `dist/premium.css` | Navy design system and responsive states |
| `tests/verify.mjs` | Content, scoring and interaction checks |
| `tests/labs.mjs` | Mathematical lab checks |
| `.github/workflows/pages.yml` | Verification and GitHub Pages deployment |

Content, evaluation and learner records are separate concerns. Settings supports browser-local content-pack export/import without rewriting the interface.

### Design principles

Readable technical content, restrained accents, a collapsible sidebar, mobile navigation, context-preserving lesson stages, functional study cards, keyboard controls, touch gestures and reduced-motion support.

## Run locally

Use any static HTTP server. For example, with Python installed, run this from the repository root:

```bash
python -m http.server 8000 --directory dist
```

Open **http://localhost:8000**.

Use an HTTP server rather than opening `index.html` directly: the application loads JSON data and JavaScript modules through browser requests.

## Publish on GitHub Pages

The deployment workflow is included. No package installation or build step is needed.

1. Create a repository, for example **hcia-ai-study-lab**.
2. Extract the project ZIP and upload its contents. Keep `dist`, `tests`, `.github` and `README.md` at the repository root.
3. Do **not** upload the ZIP as the only repository file. Make sure the `.github/workflows/pages.yml` file is included.
4. Open **Settings → Pages → Build and deployment**, and choose **GitHub Actions** as the publishing source.
5. Push to `main`, or run the publishing workflow from **Actions**.
6. After deployment succeeds, open the actual URL shown by GitHub Pages.

A project address normally has the form `https://<account>.github.io/<repository>/`. Substitute the actual account and repository. This README does not claim that a GitHub deployment has already occurred.

The workflow verifies the application, uploads `dist/` and deploys it. Relative assets and hash-based navigation support project-site subdirectories. If your branch is not named `main`, update the workflow trigger.

Repository visibility requirements depend on your GitHub plan; see the [official Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Verification

With a modern Node.js runtime:

```bash
node tests/verify.mjs
node tests/labs.mjs
```

Checks cover content integrity, answer evaluation, shuffled choices, weighted exams, readiness gates, screen rendering, a DOM interaction harness, completion, bookmarks, saved context, flashcards, exam navigation, persistence and the lab calculations.

The DOM harness is not a real-browser visual, accessibility or device audit. A real-browser visual audit was unavailable during development; check appearance and touch behavior on intended devices after deployment.

## Data and implementation boundaries

- **Browser-local data:** progress does not automatically sync across devices, browser profiles or site addresses.
- **Portable progress:** export a JSON backup from Settings on the previous site, then import it at the new address.
- **Local profile:** no backend authentication or user-account service is included.
- **Curated adaptation:** review selects from the included bank; it does not generate unlimited questions.
- **No live web research:** source links are supplied, but curriculum updates are not fetched automatically.
- **Client-side assessment:** answers are delivered to the browser. This is a self-study tool, not a secure proctored exam service.
- **Source attribution:** original Huawei material remains attributable to its publisher. Inclusion does not grant rights to third-party material.

## بالعربي — الفكرة ببساطة

**Axiom** مساحة مذاكرة تفاعلية لكورس **HCIA-AI V4.0**، بتربط الشرح والتجربة البصرية والأسئلة ومراجعة الأخطاء في مسار واحد.

بدل الاكتفاء بحفظ إجابة، تقدر تغيّر قيم في تجربة وتشوف النتيجة وتفهم السبب، وبعدها تختبر فهمك. تقدمك ونتائجك مبنيين على استخدامك الفعلي، وتقدر تحفظ نسخة احتياطية وتنقلها يدويًا لرابط جديد.

**للرفع:** فك ضغط الملف، وارفع المحتويات نفسها إلى GitHub، وبالأخص مجلدات `dist` و`tests` و`.github` وملف `README.md`. اختَر **GitHub Actions** من إعدادات **Pages** وانتظر نجاح النشر. الرابط النهائي هيظهر في إعدادات Pages وفي نتيجة النشر.

---

<div align="center">

**Axiom — a practical path from understanding AI to demonstrating it.**

Independent educational project · Source-grounded content · Measurable learning activity

</div>

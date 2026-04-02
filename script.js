const CHAPTERS = {
  "25": {
    title: "Chapter 25 — The Work of Sulphur",
    subtitle: "Pain becomes myth.",
    whatHappens: [
      "After a severe burn, Dad avoids hospitals and treats himself with home remedies.",
      "The family frames survival as proof of faith and toughness.",
      "Tara watches pain get retold as a near-sacred family story."
    ],
    whyItMatters:
      "The chapter shows how suffering can be turned into a legend that protects family beliefs, even when reality is dangerous.",
    keyTheme: "Myth-making",
    discussionQuestion:
      "When does a family story give strength, and when does it erase harm?",
    interaction: {
      heading: "Miracle or denial?",
      prompt: "Pick your read of the chapter's central tension:",
      choices: [
        {
          label: "Mostly miracle",
          feedback:
            "Seeing it as miracle highlights faith, but it can hide the medical risk and silence fear."
        },
        {
          label: "Mostly denial",
          feedback:
            "Seeing it as denial reveals the cost: pain is real, but the story is edited to protect the family myth."
        },
        {
          label: "Both",
          feedback:
            "This chapter lives in both worlds: faith language offers meaning while denial keeps harmful patterns alive."
        }
      ]
    }
  },
  "26": {
    title: "Chapter 26 — Waiting for the Moving Water",
    subtitle: "Waiting becomes a trap.",
    whatHappens: [
      "Tara is told healing or change will come if she waits long enough.",
      "Action is delayed while harm and confusion continue.",
      "Waiting starts to feel less like patience and more like paralysis."
    ],
    whyItMatters:
      "The chapter exposes how 'just wait' can sound spiritual but function as control, keeping someone stuck in danger.",
    keyTheme: "Stalled time",
    discussionQuestion:
      "How can waiting look wise on the surface but still prevent real change?",
    interaction: {
      heading: "Is waiting healing?",
      prompt: "How does waiting operate in this chapter?",
      choices: [
        {
          label: "Mostly healing",
          feedback:
            "Waiting can protect people from impulsive choices, but here it often delays needed action."
        },
        {
          label: "Mostly trapping",
          feedback:
            "This is the chapter's core move: waiting becomes a trap that keeps Tara inside harmful patterns."
        },
        {
          label: "Depends on who has power",
          feedback:
            "Strong reading: waiting helps only when the person waiting has agency; otherwise it can become obedience."
        }
      ]
    }
  },
  "27": {
    title: "Chapter 27 — If I Were a Woman",
    subtitle: "Tara begins defining herself.",
    whatHappens: [
      "Gender expectations and judgment shape how Tara is seen and corrected.",
      "She starts noticing conflict between family definitions and her own experience.",
      "A new question emerges: who has the authority to name who she is?"
    ],
    whyItMatters:
      "The chapter marks a shift from only reacting to family narratives toward building personal identity and voice.",
    keyTheme: "Identity and gender",
    discussionQuestion:
      "What changes when Tara moves from being described by others to describing herself?",
    interaction: {
      heading: "Who gets to define Tara's identity?",
      prompt: "Choose the strongest force by Chapter 27:",
      choices: [
        {
          label: "Family stories",
          feedback:
            "Family still has major influence, especially through shame and expectation."
        },
        {
          label: "Community gender rules",
          feedback:
            "Gender rules frame what is seen as acceptable, pressuring Tara to fit a script."
        },
        {
          label: "Tara herself",
          feedback:
            "This signals the turning point: Tara begins claiming authority over her own identity."
        }
      ]
    }
  }
};

const chapterButtons = Array.from(document.querySelectorAll(".path-card"));
const chapterTitle = document.getElementById("chapter-title");
const chapterSubtitle = document.getElementById("chapter-subtitle");
const whatHappensList = document.getElementById("what-happens-list");
const whyItMatters = document.getElementById("why-it-matters");
const keyTheme = document.getElementById("key-theme");
const discussionQuestion = document.getElementById("discussion-question");
const chapterInteraction = document.getElementById("chapter-interaction");
const visitMeter = document.getElementById("visit-meter");
const chapterPanel = document.getElementById("chapter-content");

const visitedChapters = new Set(["25"]);
let activeChapterId = "25";

function renderChapter(chapterId) {
  const chapter = CHAPTERS[chapterId];
  if (!chapter) {
    return;
  }

  activeChapterId = chapterId;
  visitedChapters.add(chapterId);

  chapterTitle.textContent = chapter.title;
  chapterSubtitle.textContent = chapter.subtitle;
  whyItMatters.textContent = chapter.whyItMatters;
  keyTheme.textContent = chapter.keyTheme;
  discussionQuestion.textContent = chapter.discussionQuestion;

  whatHappensList.innerHTML = "";
  chapter.whatHappens.forEach((point) => {
    const listItem = document.createElement("li");
    listItem.textContent = point;
    whatHappensList.appendChild(listItem);
  });

  renderInteraction(chapter);
  updateChapterUI(chapterId);
}

function renderInteraction(chapter) {
  chapterInteraction.innerHTML = "";

  const heading = document.createElement("h4");
  heading.textContent = chapter.interaction.heading;

  const prompt = document.createElement("p");
  prompt.className = "prompt";
  prompt.textContent = chapter.interaction.prompt;

  const choiceRow = document.createElement("div");
  choiceRow.className = "choice-row";

  const feedback = document.createElement("p");
  feedback.className = "feedback";
  feedback.textContent = "Pick an option to reveal a quick interpretation.";

  chapter.interaction.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice.label;

    button.addEventListener("click", () => {
      choiceRow
        .querySelectorAll("button")
        .forEach((btn) => btn.classList.remove("is-picked"));
      button.classList.add("is-picked");
      feedback.textContent = choice.feedback;
    });

    choiceRow.appendChild(button);
  });

  chapterInteraction.append(heading, prompt, choiceRow, feedback);
}

function updateChapterUI(chapterId) {
  chapterButtons.forEach((button) => {
    const isActive = button.dataset.chapter === chapterId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  const visitedOrdered = ["25", "26", "27"].filter((id) => visitedChapters.has(id));
  visitMeter.textContent = `Visited: ${visitedOrdered.map((id) => `Chapter ${id}`).join(" • ")}`;

  chapterPanel.setAttribute("aria-labelledby", `tab-${chapterId}`);
}

chapterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderChapter(button.dataset.chapter);
  });
});

const reflectionButtons = Array.from(document.querySelectorAll("[data-reflection]"));
const reflectionResult = document.getElementById("reflection-result");

const reflectionTakeaways = {
  escaping:
    "Takeaway: escape matters here, but chapter 27 suggests escape alone is not the end goal.",
  discovering:
    "Takeaway: discovery is central; Tara is not only leaving a place, she is building a self.",
  both: "Takeaway: strong synthesis. She escapes external control while discovering internal authority."
};

reflectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    reflectionButtons.forEach((btn) => btn.classList.remove("is-picked"));
    button.classList.add("is-picked");

    const key = button.dataset.reflection;
    reflectionResult.textContent = reflectionTakeaways[key];
  });
});

renderChapter(activeChapterId);

const CHAPTERS = {
  "25": {
    title: "Chapter 25 — The Work of Sulphur",
    subtitle: "Pain becomes myth.",
    snapshot:
      "A near-fatal injury is retold as proof of destiny, not warning, and Tara sees how stories can hide danger.",
    whatHappens: [
      "Dad is caught in an explosion and suffers severe burns that should require emergency medical care.",
      "Instead of a hospital plan, the family relies on home treatment, herbal remedies, and prayer routines.",
      "As he survives, the event shifts from crisis to miracle narrative inside the family.",
      "Tara notices the same pain that should force change being used to defend old beliefs."
    ],
    plotFocusSummary: "Dad's explosion, severe injuries, and the family's miracle framing.",
    plotFocus: [
      "The physical facts are extreme: his skin and body are badly damaged.",
      "Treatment stays inside the family world, reinforcing distrust of outside institutions.",
      "Recovery gets narrated as evidence that Dad's worldview is right, not risky."
    ],
    whyItMatters:
      "Chapter 25 shows how suffering can be converted into meaning so quickly that accountability disappears.",
    whyPoints: [
      "Myth gives emotional order during chaos.",
      "But the same myth can normalize preventable harm.",
      "Tara begins separating what happened from how it is narrated."
    ],
    keyTheme: "Myth-making",
    themeNote:
      "When pain is treated as prophecy, reality loses authority.",
    discussionQuestion:
      "How does the miracle story protect the family, and what truth does it push out?",
    interaction: {
      heading: "Miracle or denial?",
      prompt: "Pick your read of the chapter's central tension:",
      choices: [
        {
          label: "Mostly miracle",
          feedback:
            "This reading honors faith and resilience, but it can mute the medical danger and fear in the room."
        },
        {
          label: "Mostly denial",
          feedback:
            "This reading highlights the cost: survival is real, yet the story can erase responsibility for risk."
        },
        {
          label: "Both",
          feedback:
            "Strong synthesis: belief gives comfort while denial protects harmful patterns from scrutiny."
        }
      ]
    }
  },
  "26": {
    title: "Chapter 26 — Waiting for the Moving Water",
    subtitle: "Waiting becomes a trap.",
    snapshot:
      "Recovery drags on, conflict keeps simmering, and waiting starts to feel less like faith and more like captivity.",
    whatHappens: [
      "The long recovery creates a suspended atmosphere where everyone orbits injury, fear, and silence.",
      "Tensions involving Shawn and Emily continue shaping daily life, especially through intimidation and uncertainty.",
      "Tara keeps hoping things will settle on their own, but waiting repeatedly delays real intervention.",
      "Time passes, but emotionally the family system stays stuck in the same cycle."
    ],
    plotFocusSummary: "Long recovery, suspended atmosphere, Shawn and Emily, Tara's trapped feeling.",
    plotFocus: [
      "Healing is slow enough that 'temporary' disorder becomes the new normal.",
      "Shawn and Emily's dynamic raises stakes around control, fear, and bystander silence.",
      "Tara senses that passive waiting is not neutral; it keeps danger structurally in place."
    ],
    whyItMatters:
      "The chapter reframes patience: in unequal systems, waiting can function as obedience rather than wisdom.",
    whyPoints: [
      "Delay protects those already holding power.",
      "Hope without action can become self-erasure.",
      "Tara starts naming her trapped feeling instead of dismissing it."
    ],
    keyTheme: "Stalled time",
    themeNote:
      "Waiting is not always healing; sometimes it is how harm survives.",
    discussionQuestion:
      "What finally tells us waiting has crossed the line from patience into surrender?",
    interaction: {
      heading: "Is waiting healing?",
      prompt: "How does waiting operate in this chapter?",
      choices: [
        {
          label: "Mostly healing",
          feedback:
            "It can prevent rash choices, but this chapter shows how delay can also preserve a harmful status quo."
        },
        {
          label: "Mostly trapping",
          feedback:
            "This matches the chapter's pressure point: waiting becomes the mechanism that keeps Tara stuck."
        },
        {
          label: "Depends on who has power",
          feedback:
            "Best structural read: waiting helps only when the person waiting controls what happens next."
        }
      ]
    }
  },
  "27": {
    title: "Chapter 27 — If I Were a Woman",
    subtitle: "Tara begins defining herself.",
    snapshot:
      "Academic life opens new language for Tara, and she starts moving from being judged to self-definition.",
    whatHappens: [
      "Tara's academic shift deepens as she studies in environments that challenge her inherited assumptions.",
      "Gender expectations from home remain loud, shaping how she is evaluated and disciplined.",
      "Guidance from Dr. Kerry and her Cambridge context gives her alternate models of authority and belonging.",
      "She begins claiming an independent identity instead of accepting only family labels."
    ],
    plotFocusSummary: "Academic shift, gender expectations, Dr. Kerry, Cambridge, and identity independence.",
    plotFocus: [
      "Education becomes more than achievement; it becomes a new frame for interpreting experience.",
      "Gender scripts are exposed as social rules, not universal truth.",
      "Dr. Kerry and Cambridge act as catalysts for self-trust and critical distance."
    ],
    whyItMatters:
      "Chapter 27 is the hinge: Tara moves from surviving a narrative to authoring one.",
    whyPoints: [
      "Identity shifts from inherited to examined.",
      "External validation opens space for internal authority.",
      "Discovery and escape start working together."
    ],
    keyTheme: "Identity and gender",
    themeNote:
      "Self-definition begins when Tara treats her perspective as legitimate evidence.",
    discussionQuestion:
      "How do education and distance help Tara hear her own voice against family certainty?",
    interaction: {
      heading: "Who gets to define Tara's identity?",
      prompt: "Choose the strongest force by Chapter 27:",
      choices: [
        {
          label: "Family stories",
          feedback:
            "Family narratives still pressure her heavily, especially through guilt, shame, and duty."
        },
        {
          label: "Community gender rules",
          feedback:
            "Gender scripts continue policing what counts as a 'good' woman and daughter."
        },
        {
          label: "Tara herself",
          feedback:
            "This captures the turning point: she begins claiming authority over naming her own life."
        }
      ]
    }
  }
};

const BIG_IDEA_ARC = {
  myth:
    "Dad's explosion is transformed into proof that the family worldview works, even when it nearly destroys them.",
  waiting:
    "During recovery and conflict, 'just wait' freezes action and makes danger feel normal.",
  identity:
    "By Cambridge, Tara uses education and mentorship to define herself beyond inherited scripts."
};

const chapterButtons = Array.from(document.querySelectorAll(".path-card"));
const chapterTitle = document.getElementById("chapter-title");
const chapterSubtitle = document.getElementById("chapter-subtitle");
const chapterSnapshot = document.getElementById("chapter-snapshot");
const whatHappensList = document.getElementById("what-happens-list");
const plotFocusSummary = document.getElementById("plot-focus-summary");
const plotFocusList = document.getElementById("plot-focus-list");
const whyItMatters = document.getElementById("why-it-matters");
const whyMattersList = document.getElementById("why-matters-list");
const keyTheme = document.getElementById("key-theme");
const themeNote = document.getElementById("theme-note");
const discussionQuestion = document.getElementById("discussion-question");
const chapterInteraction = document.getElementById("chapter-interaction");
const visitMeter = document.getElementById("visit-meter");
const chapterPanel = document.getElementById("chapter-content");
const plotFocusDetails = document.getElementById("plot-focus-details");

const arcMyth = document.getElementById("arc-myth");
const arcWaiting = document.getElementById("arc-waiting");
const arcIdentity = document.getElementById("arc-identity");
const closingLine = document.getElementById("closing-line");

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
  chapterSnapshot.textContent = chapter.snapshot;

  whatHappensList.innerHTML = "";
  chapter.whatHappens.forEach((point) => {
    const listItem = document.createElement("li");
    listItem.textContent = point;
    whatHappensList.appendChild(listItem);
  });

  plotFocusSummary.textContent = chapter.plotFocusSummary;
  plotFocusList.innerHTML = "";
  chapter.plotFocus.forEach((point) => {
    const listItem = document.createElement("li");
    listItem.textContent = point;
    plotFocusList.appendChild(listItem);
  });

  whyItMatters.textContent = chapter.whyItMatters;
  whyMattersList.innerHTML = "";
  chapter.whyPoints.forEach((point) => {
    const listItem = document.createElement("li");
    listItem.textContent = point;
    whyMattersList.appendChild(listItem);
  });

  keyTheme.textContent = chapter.keyTheme;
  themeNote.textContent = chapter.themeNote;
  discussionQuestion.textContent = chapter.discussionQuestion;

  renderInteraction(chapter);
  updateChapterUI(chapterId);

  plotFocusDetails.open = chapterId !== "25";
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

function renderBigIdea() {
  arcMyth.textContent = BIG_IDEA_ARC.myth;
  arcWaiting.textContent = BIG_IDEA_ARC.waiting;
  arcIdentity.textContent = BIG_IDEA_ARC.identity;
  closingLine.textContent =
    "Presentation closer: These chapters show Tara moving from inherited explanation to personal interpretation, then toward self-authorship.";
}

chapterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderChapter(button.dataset.chapter);
  });
});

const reflectionButtons = Array.from(document.querySelectorAll("[data-reflection]"));
const reflectionResult = document.getElementById("reflection-result");

const reflectionTakeaways = {
  escaping: {
    takeaway:
      "Takeaway: escape drives the plot, but these chapters suggest escape alone cannot explain Tara's transformation.",
    closing:
      "Closing angle: emphasize escape as the condition that makes self-discovery possible."
  },
  discovering: {
    takeaway:
      "Takeaway: discovery is central; Tara is not only leaving a place, she is building a different way to read her life.",
    closing:
      "Closing angle: emphasize identity work as the deeper outcome of these chapters."
  },
  both: {
    takeaway:
      "Takeaway: strongest synthesis. Tara escapes external control while discovering internal authority.",
    closing:
      "Closing angle: show both motions at once, because the memoir presents them as inseparable."
  }
};

reflectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    reflectionButtons.forEach((btn) => btn.classList.remove("is-picked"));
    button.classList.add("is-picked");

    const key = button.dataset.reflection;
    reflectionResult.textContent = reflectionTakeaways[key].takeaway;
    closingLine.textContent = `Presentation closer: ${reflectionTakeaways[key].closing}`;
  });
});

renderBigIdea();
renderChapter(activeChapterId);

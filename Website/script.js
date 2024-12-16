// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Functionality
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".modal .close");

// Stories data
const stories = {
    story1: {
        title: "Insert Name 1",
        body: "This is the detailed story of 'Insert Name 1'. It is a captivating tale about overcoming challenges, embracing change, and finding joy in unexpected places."
    },
    story2: {
        title: "The Group W Bench",
        body: "A tale of camaraderie, moral ambiguity, and finding unexpected friendships on the infamous Group W bench."
    }
};

// Open modal on 'Read More' click
document.querySelectorAll(".read-more").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const storyId = this.dataset.story;
        if (stories[storyId]) {
            modalTitle.textContent = stories[storyId].title;
            modalBody.textContent = stories[storyId].body;
            modal.style.display = "block";
        }
    });
});

// Close modal on 'X' click
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal on outside click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

function toggleDetails(node) {
  const allNodes = document.querySelectorAll(".knowledge-node");

  // Remove active state from all nodes
  allNodes.forEach((n) => n.classList.remove("active"));

  // Add active state to clicked node
  node.classList.add("active");

  // Add some visual feedback
  node.style.transform = "translateY(-15px) scale(1.05)";
  setTimeout(() => {
    node.style.transform = "";
  }, 300);
}

// Add some random floating animation to connection tags
document.addEventListener("DOMContentLoaded", function () {
  const connectionTags = document.querySelectorAll(".connection-tag");
  connectionTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
  });
});

// Add interactive hover effects
const knowledgeNodes = document.querySelectorAll(".knowledge-node");
knowledgeNodes.forEach((node) => {
  node.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  node.addEventListener("mouseleave", function () {
    if (!this.classList.contains("active")) {
      this.style.transform = "";
    }
  });
});

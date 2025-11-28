// Convert footnotes to sidenotes (Tufte-style)
document.addEventListener('DOMContentLoaded', function() {
  const footnotesList = document.querySelector('.footnotes');

  if (!footnotesList) return;

  const footnoteItems = footnotesList.querySelectorAll('li');
  const footnoteRefs = document.querySelectorAll('sup[id^="fnref"]');

  footnoteRefs.forEach((ref, index) => {
    const footnoteId = ref.querySelector('a').getAttribute('href').substring(1);
    const footnoteContent = document.getElementById(footnoteId);

    if (!footnoteContent) return;

    // Get the footnote text (excluding the back reference)
    const footnoteText = footnoteContent.querySelector('p').cloneNode(true);
    const backref = footnoteText.querySelector('.reversefootnote');
    if (backref) backref.remove();

    // Create sidenote element
    const sidenote = document.createElement('span');
    sidenote.className = 'sidenote';
    sidenote.innerHTML = footnoteText.innerHTML;

    // Insert sidenote after the reference
    ref.parentNode.insertBefore(sidenote, ref.nextSibling);
  });

  // Hide the original footnotes section on wide screens
  if (window.innerWidth > 1200) {
    footnotesList.style.display = 'none';
  }
});

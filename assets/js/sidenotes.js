// Convert footnotes to sidenotes (Tufte-style)
function updateSidenotes() {
  const footnotesList = document.querySelector('.footnotes');
  if (!footnotesList) return;

  const isWideScreen = window.innerWidth > 1200;

  if (isWideScreen) {
    footnotesList.style.display = 'none';

    // Show all sidenotes
    const sidenotes = document.querySelectorAll('.sidenote');
    sidenotes.forEach(sidenote => {
      sidenote.style.display = 'block';
    });
  } else {
    footnotesList.style.display = 'block';

    // Hide all sidenotes
    const sidenotes = document.querySelectorAll('.sidenote');
    sidenotes.forEach(sidenote => {
      sidenote.style.display = 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const footnotesList = document.querySelector('.footnotes');
  if (!footnotesList) return;

  const footnoteRefs = document.querySelectorAll('sup[id^="fnref"]');

  footnoteRefs.forEach((ref) => {
    const footnoteId = ref.querySelector('a').getAttribute('href').substring(1);
    const footnoteContent = document.getElementById(footnoteId);

    if (!footnoteContent) return;

    // Get the footnote number
    const footnoteNumber = ref.querySelector('a').textContent;

    // Get the footnote text (excluding the back reference)
    const footnoteText = footnoteContent.querySelector('p').cloneNode(true);
    const backref = footnoteText.querySelector('.reversefootnote');
    if (backref) backref.remove();

    // Create sidenote element with number
    const sidenote = document.createElement('span');
    sidenote.className = 'sidenote';
    sidenote.innerHTML = '<span class="sidenote-number">' + footnoteNumber + '.</span> ' + footnoteText.innerHTML;

    // Insert sidenote after the reference
    ref.parentNode.insertBefore(sidenote, ref.nextSibling);
  });

  // Initial update
  updateSidenotes();

  // Update on resize
  window.addEventListener('resize', updateSidenotes);
});

function goToTop() {
    window.scrollTo(0, 0); 
}

function openLink(link) {
    Object.assign(document.createElement('a'), {
        target: '_blank',
        rel: 'noopener noreferrer',
        href: link,
      }).click();
    }